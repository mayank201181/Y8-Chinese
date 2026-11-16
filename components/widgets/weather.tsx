"use client";
import { useMemo, useState } from "react";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Shared number -> Mandarin temperature helper (-15 .. 36 °C)
// ---------------------------------------------------------------------------

const DIGITS_ZH = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const DIGITS_PY = ["líng", "yī", "èr", "sān", "sì", "wǔ", "liù", "qī", "bā", "jiǔ"];

function intToZh(n: number): { zh: string; py: string } {
  const a = Math.abs(n);
  if (a < 10) return { zh: DIGITS_ZH[a], py: DIGITS_PY[a] };
  if (a === 10) return { zh: "十", py: "shí" };
  if (a < 20) {
    const u = a - 10;
    return { zh: `十${DIGITS_ZH[u]}`, py: u === 2 ? "shí'èr" : `shí${DIGITS_PY[u]}` };
  }
  const t = Math.floor(a / 10);
  const u = a % 10;
  return {
    zh: u === 0 ? `${DIGITS_ZH[t]}十` : `${DIGITS_ZH[t]}十${DIGITS_ZH[u]}`,
    py:
      u === 0
        ? `${DIGITS_PY[t]}shí`
        : u === 2
          ? `${DIGITS_PY[t]}shí'èr`
          : `${DIGITS_PY[t]}shí${DIGITS_PY[u]}`,
  };
}

function tempToMandarin(t: number): { zh: string; py: string; feelZh: string; feelPy: string; feelEn: string } {
  const base = intToZh(t);
  const zh = t < 0 ? `零下${base.zh}度` : `${base.zh}度`;
  const py = t < 0 ? `língxià ${base.py} dù` : `${base.py} dù`;

  if (t <= -5) return { zh, py, feelZh: "太冷了", feelPy: "tài lěng le", feelEn: "freezing cold" };
  if (t <= 8) return { zh, py, feelZh: "很冷", feelPy: "hěn lěng", feelEn: "very cold" };
  if (t <= 18) return { zh, py, feelZh: "很凉快", feelPy: "hěn liángkuai", feelEn: "cool & crisp" };
  if (t <= 25) return { zh, py, feelZh: "很暖和", feelPy: "hěn nuǎnhuo", feelEn: "warm & pleasant" };
  if (t <= 31) return { zh, py, feelZh: "很热", feelPy: "hěn rè", feelEn: "hot" };
  return { zh, py, feelZh: "太热了", feelPy: "tài rè le", feelEn: "extremely hot" };
}

// ---------------------------------------------------------------------------
// Widget 1: Asia-Pacific Weather Desk & Forecast Map
// ---------------------------------------------------------------------------

type WxCond = "qingtian" | "yintian" | "xiayu" | "xiaxue" | "guafeng";
type Timeframe = "zuotian" | "jintian" | "mingtian";
type CityId = "harbin" | "beijing" | "shanghai" | "hongkong" | "singapore" | "sydney";

interface CondDef {
  id: WxCond;
  zh: string;
  py: string;
  en: string;
  emoji: string;
  /** Verb-object intensified form (inserting 大 between verb & object!) */
  strongZh: string;
  strongPy: string;
  grammarTip: string;
}

const CONDITIONS: CondDef[] = [
  {
    id: "qingtian",
    zh: "晴天",
    py: "qíngtiān",
    en: "Sunny",
    emoji: "☀️",
    strongZh: "大晴天",
    strongPy: "dà qíngtiān",
    grammarTip: "晴天 is a noun phrase (‘clear sky day’) — in reports you can say 今天晴天 or 今天是晴天.",
  },
  {
    id: "yintian",
    zh: "阴天",
    py: "yīntiān",
    en: "Overcast",
    emoji: "☁️",
    strongZh: "多云转阴",
    strongPy: "duōyún zhuǎn yīn",
    grammarTip: "阴天 = overcast grey sky; 多云 (duōyún) = partly cloudy.",
  },
  {
    id: "xiayu",
    zh: "下雨",
    py: "xiàyǔ",
    en: "Rainy",
    emoji: "🌧️",
    strongZh: "下大雨",
    strongPy: "xià dàyǔ",
    grammarTip: "下雨 is a Verb + Object (‘falls rain’)! To say ‘rain heavily’, slip 大 inside: 下大雨 (never *大下雨*).",
  },
  {
    id: "xiaxue",
    zh: "下雪",
    py: "xiàxuě",
    en: "Snowy",
    emoji: "❄️",
    strongZh: "下大雪",
    strongPy: "xià dàxuě",
    grammarTip: "下雪 is also Verb + Object (‘falls snow’) → heavy snow is 下大雪.",
  },
  {
    id: "guafeng",
    zh: "刮风",
    py: "guāfēng",
    en: "Windy",
    emoji: "💨",
    strongZh: "刮大风",
    strongPy: "guā dàfēng",
    grammarTip: "刮风 = ‘blows wind’ (Verb + Object) → strong wind inserts 大 right before 风: 刮大风!",
  },
];

interface CitySpec {
  id: CityId;
  zh: string;
  py: string;
  en: string;
  cx: number;
  cy: number;
  note: string;
}

const CITIES: CitySpec[] = [
  { id: "harbin", zh: "哈尔滨", py: "Hā'ěrbīn", en: "Harbin", cx: 292, cy: 42, note: "Ice-festival city in far north-east China." },
  { id: "beijing", zh: "北京", py: "Běijīng", en: "Beijing", cx: 248, cy: 76, note: "China’s capital — crisp four seasons." },
  { id: "shanghai", zh: "上海", py: "Shànghǎi", en: "Shanghai", cx: 280, cy: 112, note: "East-coast metropolis on the Yangtze delta." },
  { id: "hongkong", zh: "香港", py: "Xiānggǎng", en: "Hong Kong", cx: 248, cy: 148, note: "Subtropical harbour city on the south coast." },
  { id: "singapore", zh: "新加坡", py: "Xīnjiāpō", en: "Singapore", cx: 186, cy: 198, note: "1° north of the Equator — hot & humid (潮湿) all year!" },
  { id: "sydney", zh: "悉尼", py: "Xīní", en: "Sydney", cx: 356, cy: 266, note: "Southern Hemisphere — opposite seasons to Beijing!" },
];

interface CityWeatherState {
  cond: WxCond;
  temp: number;
  strong: boolean;
}

const INITIAL_CITY_WX: Record<CityId, CityWeatherState> = {
  harbin: { cond: "xiaxue", temp: -12, strong: true },
  beijing: { cond: "guafeng", temp: 4, strong: false },
  shanghai: { cond: "yintian", temp: 14, strong: false },
  hongkong: { cond: "qingtian", temp: 23, strong: false },
  singapore: { cond: "xiayu", temp: 31, strong: true },
  sydney: { cond: "qingtian", temp: 26, strong: false },
};

function buildCityForecast(city: CitySpec, st: CityWeatherState, tf: Timeframe): { zh: string; py: string; en: string } {
  const condSpec = CONDITIONS.find((c) => c.id === st.cond) ?? CONDITIONS[0];
  const wxZh = st.strong ? condSpec.strongZh : condSpec.zh;
  const wxPy = st.strong ? condSpec.strongPy : condSpec.py;
  const t = tempToMandarin(st.temp);

  if (tf === "zuotian") {
    const suffix = condSpec.id === "xiayu" || condSpec.id === "xiaxue" || condSpec.id === "guafeng" ? "了" : "";
    return {
      zh: `${city.zh}昨天${wxZh}${suffix}，气温${t.zh}，${t.feelZh}。`,
      py: `${city.py} zuótiān ${wxPy}${suffix ? " le" : ""}, qìwēn ${t.py}, ${t.feelPy}.`,
      en: `Yesterday in ${city.en}: ${condSpec.en.toLowerCase()}, ${st.temp}°C (${t.feelEn}).`,
    };
  }
  if (tf === "mingtian") {
    const modal = condSpec.id === "xiayu" || condSpec.id === "xiaxue" || condSpec.id === "guafeng" ? "会" : "是";
    const modalPy = modal === "会" ? "huì" : "shì";
    return {
      zh: `${city.zh}明天${modal}${wxZh}，气温${t.zh}，${t.feelZh}。`,
      py: `${city.py} míngtiān ${modalPy} ${wxPy}, qìwēn ${t.py}, ${t.feelPy}.`,
      en: `Tomorrow in ${city.en}: will be ${condSpec.en.toLowerCase()}, ${st.temp}°C (${t.feelEn}).`,
    };
  }
  return {
    zh: `${city.zh}今天${wxZh}，气温${t.zh}，${t.feelZh}。`,
    py: `${city.py} jīntiān ${wxPy}, qìwēn ${t.py}, ${t.feelPy}.`,
    en: `Today in ${city.en}: ${condSpec.en.toLowerCase()}, ${st.temp}°C (${t.feelEn}).`,
  };
}

function ApacWeatherDesk() {
  const [citiesWx, setCitiesWx] = useState<Record<CityId, CityWeatherState>>(INITIAL_CITY_WX);
  const [selectedId, setSelectedId] = useState<CityId>("beijing");
  const [compareId, setCompareId] = useState<CityId>("singapore");
  const [tf, setTf] = useState<Timeframe>("jintian");

  const city = CITIES.find((c) => c.id === selectedId) ?? CITIES[1];
  const st = citiesWx[selectedId];
  const condSpec = CONDITIONS.find((c) => c.id === st.cond) ?? CONDITIONS[0];

  const compCity = CITIES.find((c) => c.id === compareId) ?? CITIES[4];
  const compSt = citiesWx[compareId];

  const updateSelected = (patch: Partial<CityWeatherState>) => {
    setCitiesWx((prev) => ({
      ...prev,
      [selectedId]: { ...prev[selectedId], ...patch },
    }));
  };

  const singleReport = buildCityForecast(city, st, tf);
  const tempDiff = st.temp - compSt.temp;

  const comparisonZh = useMemo(() => {
    if (selectedId === compareId) return "请选择另一个城市来比较气温！";
    if (tempDiff === 0) return `${city.zh}跟${compCity.zh}一样热（都是${tempToMandarin(st.temp).zh}）。`;
    if (tempDiff > 0) {
      const deg = tempDiff >= 10 ? "得多" : "一点儿";
      return `${city.zh}比${compCity.zh}热${deg}！`;
    }
    const deg = Math.abs(tempDiff) >= 10 ? "得多" : "一点儿";
    return `${city.zh}比${compCity.zh}冷${deg}！`;
  }, [city.zh, compCity.zh, compareId, selectedId, st.temp, tempDiff]);

  const fullBulletinZh = useMemo(() => {
    return (
      "各位观众大家好！" +
      CITIES.map((c) => buildCityForecast(c, citiesWx[c.id], tf).zh).join("")
    );
  }, [citiesWx, tf]);

  const sanityWarning =
    st.cond === "xiaxue" && st.temp > 3
      ? `⚠️ Snow (${condSpec.zh}) at ${st.temp}°C? Drag the slider to 0°C or below (零下) for realistic snow!`
      : null;

  return (
    <WidgetFrame
      title="Asia-Pacific Weather Desk & Forecast Map (亚太天气预报台)"
      tryThis={[
        "Click **哈尔滨** on the map and slide below **0°C** to see **零下 (língxià)** + **太冷了**.",
        "Switch on **⚡ Intense (大)** for **下雨 / 刮风 / 下雪** — watch **大** jump *inside* the verb-object (**下大雨**, never *大下雨*!).",
        "Compare your city with **新加坡** and press **🎙️ Broadcast All 6 Cities** like a Mandarin TV presenter!",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>Grammar spotlight ({condSpec.zh}):</strong> {condSpec.grammarTip}
          </p>
          <p className="text-ink-2">
            🌡️ Adjectives like <strong>热 / 冷 / 凉快 / 暖和</strong> pair with <strong>很</strong> or <strong>太…了</strong> (never *是热*), and in <strong>比</strong> comparisons NEVER add 很 (<strong>{comparisonZh}</strong>).
          </p>
          {sanityWarning ? <p className="font-bold text-bad">{sanityWarning}</p> : null}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Forecast timeframe"
            value={tf}
            onChange={setTf}
            options={[
              { value: "zuotian", label: "⏪ 昨天 (Yesterday)" },
              { value: "jintian", label: "📍 今天 (Today)" },
              { value: "mingtian", label: "⏩ 明天 (Tomorrow)" },
            ]}
          />
          <button
            type="button"
            onClick={() => speakChinese(fullBulletinZh, { slow: false })}
            className="btn btn-primary btn-sm"
          >
            🎙️ Broadcast All 6 Cities
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          {/* Interactive SVG Asia-Pacific Map */}
          <div className="rounded-xl border border-line bg-info-soft p-2">
            <svg
              viewBox="0 0 430 300"
              className="h-auto w-full rounded-lg"
              role="img"
              aria-label="Asia-Pacific weather map showing Harbin, Beijing, Shanghai, Hong Kong, Singapore and Sydney"
            >
              {/* Stylized landmass silhouettes: East & SE Asia + Australia */}
              <path
                d="M 110 20 L 325 20 L 340 52 L 302 74 L 296 118 L 265 154 L 222 166 L 196 196 L 176 195 L 166 158 L 132 130 L 105 85 Z"
                className="fill-surface stroke-line"
                strokeWidth={1.5}
              />
              {/* Maritime SE Asia islands */}
              <ellipse cx={225} cy={204} rx={18} ry={8} className="fill-surface stroke-line" strokeWidth={1.2} />
              <ellipse cx={175} cy={214} rx={22} ry={6} className="fill-surface stroke-line" strokeWidth={1.2} />
              {/* Australia silhouette */}
              <path
                d="M 272 232 L 352 222 L 382 248 L 372 284 L 315 286 L 268 268 Z"
                className="fill-surface stroke-line"
                strokeWidth={1.5}
              />

              {/* Equator line */}
              <line x1={12} x2={418} y1={203} y2={203} className="stroke-brand" strokeOpacity={0.35} strokeWidth={1.2} strokeDasharray="5 4" />
              <text x={18} y={198} fontSize={9.5} fontWeight={700} className="fill-brand">
                赤道 Equator (0°)
              </text>
              <text x={18} y={32} fontSize={10} fontWeight={800} className="fill-ink-2">
                北半球 Northern Hemisphere
              </text>
              <text x={18} y={286} fontSize={10} fontWeight={800} className="fill-ink-2">
                南半球 Southern Hemisphere
              </text>

              {/* City pins */}
              {CITIES.map((c) => {
                const cSt = citiesWx[c.id];
                const cCond = CONDITIONS.find((w) => w.id === cSt.cond) ?? CONDITIONS[0];
                const isSel = c.id === selectedId;
                return (
                  <g
                    key={c.id}
                    onClick={() => setSelectedId(c.id)}
                    className="cursor-pointer"
                  >
                    <rect
                      x={c.cx - 46}
                      y={c.cy - 18}
                      width={92}
                      height={36}
                      rx={10}
                      className={isSel ? "fill-brand stroke-white" : "fill-surface stroke-ink-2"}
                      strokeWidth={isSel ? 2.2 : 1.2}
                    />
                    <text x={c.cx - 28} y={c.cy + 5} fontSize={16} textAnchor="middle">
                      {cCond.emoji}
                    </text>
                    <text
                      x={c.cx + 12}
                      y={c.cy - 2}
                      fontSize={11}
                      fontWeight={800}
                      textAnchor="middle"
                      className={isSel ? "fill-white" : "fill-ink"}
                    >
                      {c.zh}
                    </text>
                    <text
                      x={c.cx + 12}
                      y={c.cy + 12}
                      fontSize={10}
                      fontWeight={800}
                      textAnchor="middle"
                      className={isSel ? "fill-white" : "fill-brand"}
                    >
                      {cSt.temp}°C
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right Desk Controls */}
          <div className="flex flex-col justify-between space-y-3 rounded-xl border border-line bg-surface p-3.5">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-extrabold text-ink">{city.zh}</span>
                  <span className="ml-1.5 text-sm font-bold text-brand">{city.py}</span>
                  <span className="ml-1.5 text-xs text-ink-2">({city.en})</span>
                </div>
                <span className="chip">{st.temp < 0 ? "❄️ 零下" : st.temp >= 28 ? "🌴 炎热" : "🌤️ 舒适"}</span>
              </div>
              <p className="mt-0.5 text-xs text-ink-2">{city.note}</p>
            </div>

            {/* Condition buttons */}
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Weather Condition</div>
              <div className="grid grid-cols-5 gap-1">
                {CONDITIONS.map((w) => {
                  const active = st.cond === w.id;
                  return (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => updateSelected({ cond: w.id })}
                      className={`flex flex-col items-center rounded-xl border py-1.5 text-center transition ${
                        active ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                      }`}
                    >
                      <span className="text-lg" aria-hidden>{w.emoji}</span>
                      <span className="text-xs font-extrabold">{w.zh}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Intensity toggle + Temperature slider */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => updateSelected({ strong: !st.strong })}
                aria-pressed={st.strong}
                className={`w-full rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                  st.strong ? "border-accent bg-accent-soft text-ink" : "border-line bg-surface-2 text-ink-2"
                }`}
              >
                {st.strong ? `⚡ Intense ON: ${condSpec.strongZh} (${condSpec.strongPy})` : `Make stronger → ${condSpec.strongZh}`}
              </button>

              <Slider
                label="Temperature (气温)"
                value={st.temp}
                min={-15}
                max={36}
                format={(v) => `${v}°C · ${tempToMandarin(v).zh}`}
                onChange={(v) => updateSelected({ temp: v })}
              />
            </div>

            {/* 比 Comparison city selector */}
            <div className="rounded-xl bg-surface-2 p-2.5">
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <span className="text-xs font-bold text-ink-2">Compare with (比):</span>
                <div className="flex flex-wrap gap-1">
                  {CITIES.filter((c) => c.id !== selectedId).map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCompareId(c.id)}
                      className={`rounded-md px-2 py-0.5 text-xs font-bold transition ${
                        compareId === c.id ? "bg-brand text-white" : "bg-surface text-ink-2 hover:text-ink"
                      }`}
                    >
                      {c.zh}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-1.5 flex items-center justify-between gap-2">
                <span className="text-sm font-extrabold text-ink">{comparisonZh}</span>
                <SpeakButtons text={comparisonZh} compact />
              </div>
            </div>
          </div>
        </div>

        {/* Live TV Bulletin Bar */}
        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wide text-brand">📺 Live TV Weather Bulletin</div>
              <div className="mt-1 text-xl font-extrabold text-ink">{singleReport.zh}</div>
              <div className="mt-0.5 text-sm font-bold text-brand">{singleReport.py}</div>
              <div className="mt-0.5 text-xs font-semibold text-ink-2">{singleReport.en}</div>
            </div>
            <SpeakButtons text={singleReport.zh} />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Weather-to-Plan Cause & Effect Lab (因为…所以… & 如果…就…)
// ---------------------------------------------------------------------------

interface WeatherCause {
  id: string;
  zh: string;
  py: string;
  en: string;
  emoji: string;
  bestPlanIds: string[];
}

const CAUSES: WeatherCause[] = [
  { id: "heavy-rain", zh: "下大雨", py: "xià dàyǔ", en: "it rains heavily", emoji: "⛈️", bestPlanIds: ["umbrella", "stay-home", "no-football"] },
  { id: "gale", zh: "刮大风", py: "guā dàfēng", en: "there is a strong wind", emoji: "💨", bestPlanIds: ["coat", "stay-home", "no-football"] },
  { id: "hot-34", zh: "气温三十四度，太热了", py: "qìwēn sānshísì dù, tài rè le", en: "it’s 34°C and super hot", emoji: "🥵", bestPlanIds: ["swim", "stay-home"] },
  { id: "snow", zh: "下大雪，零下八度", py: "xià dàxuě, língxià bā dù", en: "it snows heavily at −8°C", emoji: "❄️", bestPlanIds: ["snowman", "coat", "stay-home"] },
  { id: "cool-sunny", zh: "晴天，天气很凉快", py: "qíngtiān, tiānqì hěn liángkuai", en: "it is sunny and cool", emoji: "🌤️", bestPlanIds: ["park", "swim"] },
];

interface PlanEffect {
  id: string;
  /** Verb phrase AFTER Subject (+ 就) */
  vpZh: string;
  vpPy: string;
  en: string;
  emoji: string;
}

const PLANS: PlanEffect[] = [
  { id: "umbrella", vpZh: "带雨伞出门", vpPy: "dài yǔsǎn chūmén", en: "bring an umbrella when going out", emoji: "☂️" },
  { id: "stay-home", vpZh: "待在家看书", vpPy: "dāi zài jiā kànshū", en: "stay at home and read", emoji: "📚" },
  { id: "no-football", vpZh: "不能去踢足球", vpPy: "bù néng qù tī zúqiú", en: "cannot go play football", emoji: "⚽🚫" },
  { id: "swim", vpZh: "去海边游泳", vpPy: "qù hǎibiān yóuyǒng", en: "go swimming at the beach", emoji: "🏖️" },
  { id: "snowman", vpZh: "去公园堆雪人", vpPy: "qù gōngyuán duī xuěrén", en: "go to the park to build a snowman", emoji: "⛄" },
  { id: "coat", vpZh: "穿厚外套", vpPy: "chuān hòu wàitào", en: "wear a thick coat", emoji: "🧥" },
  { id: "park", vpZh: "跟朋友去爬山", vpPy: "gēn péngyou qù páshān", en: "go hiking with friends", emoji: "⛰️" },
];

function WeatherCauseEffectLab() {
  const [pattern, setPattern] = useState<"yinwei" | "ruguo">("yinwei");
  const [causeId, setCauseId] = useState<string>("heavy-rain");
  const [planId, setPlanId] = useState<string>("umbrella");

  const cause = CAUSES.find((c) => c.id === causeId) ?? CAUSES[0];
  const plan = PLANS.find((p) => p.id === planId) ?? PLANS[0];
  const logical = cause.bestPlanIds.includes(plan.id);

  const sentence =
    pattern === "yinwei"
      ? {
          zh: `因为今天${cause.zh}，所以我${plan.vpZh}。`,
          py: `Yīnwèi jīntiān ${cause.py}, suǒyǐ wǒ ${plan.vpPy}.`,
          en: `Because today ${cause.en}, (therefore) I ${plan.en}.`,
        }
      : {
          zh: `如果明天${cause.zh}，我就${plan.vpZh}。`,
          py: `Rúguǒ míngtiān ${cause.py}, wǒ jiù ${plan.vpPy}.`,
          en: `If tomorrow ${cause.en}, then I will ${plan.en}.`,
        };

  return (
    <WidgetFrame
      title="Weather-to-Plan Cause & Effect Lab (因为…所以… · 如果…就…)"
      tryThis={[
        "Build a **因为…所以…** sentence first, then flip to **如果…就…** — watch where **就 (jiù)** lands!",
        "Notice **我就…** (*Subject BEFORE 就*), never *就我…*! English drops ‘therefore’ after ‘because’, but Mandarin keeps BOTH halves.",
        "Try pairing **下大雪 (−8°C)** with **去海边游泳** to see the logic checker react!",
      ]}
      caption={
        pattern === "yinwei" ? (
          <p>
            <strong>Paired Connector Rule (因为 A，所以 B):</strong> English says <em>either</em> “Because A, B” <em>or</em> “A, so B” — never both. Mandarin uses <strong>因为 AND 所以 together</strong> to earn top grammar marks!
          </p>
        ) : (
          <p>
            <strong>Placement of 就 (如果 A，Subject + 就 + Verb):</strong> In the second clause, the subject <strong>我</strong> MUST stand <em>before</em> <strong>就 (jiù)</strong>: <strong>我就{plan.vpZh}</strong> (never *就我…*).
          </p>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Connector pattern"
          value={pattern}
          onChange={setPattern}
          options={[
            { value: "yinwei", label: "🔗 因为…，所以… (Because → Therefore)" },
            { value: "ruguo", label: "🔮 如果…，我 + 就… (If → Then)" },
          ]}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {/* Weather Cause Picker */}
          <div className="space-y-1.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              1. Weather Trigger ({pattern === "yinwei" ? "因为今天…" : "如果明天…"})
            </div>
            {CAUSES.map((c) => {
              const on = c.id === causeId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setCauseId(c.id);
                    if (!c.bestPlanIds.includes(planId)) {
                      setPlanId(c.bestPlanIds[0]);
                    }
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-xl border px-3 py-2 text-left transition ${
                    on ? "border-brand bg-brand-soft" : "border-line bg-surface hover:bg-surface-2"
                  }`}
                >
                  <span className="text-xl" aria-hidden>{c.emoji}</span>
                  <div>
                    <div className="text-sm font-extrabold text-ink">{c.zh}</div>
                    <div className="text-xs text-ink-2">{c.py} · {c.en}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Resulting Plan Picker */}
          <div className="space-y-1.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              2. Knock-on Plan ({pattern === "yinwei" ? "所以我…" : "我就…"})
            </div>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-1">
              {PLANS.map((p) => {
                const on = p.id === planId;
                const recommended = cause.bestPlanIds.includes(p.id);
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlanId(p.id)}
                    className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-1.5 text-left transition ${
                      on ? "border-good bg-good-soft" : "border-line bg-surface hover:bg-surface-2"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg" aria-hidden>{p.emoji}</span>
                      <span>
                        <span className="block text-sm font-extrabold text-ink">{p.vpZh}</span>
                        <span className="block text-[11px] text-ink-2">{p.en}</span>
                      </span>
                    </span>
                    {recommended ? <span className="chip">✓ Natural</span> : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Built Complex Sentence */}
        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5 text-lg sm:text-xl font-extrabold">
              <span className="rounded-lg bg-brand-soft px-2 py-0.5 text-brand">
                {pattern === "yinwei" ? "因为" : "如果"}
              </span>
              <span className="text-ink">
                {pattern === "yinwei" ? "今天" : "明天"}
                {cause.zh}，
              </span>
              <span className="rounded-lg bg-brand-soft px-2 py-0.5 text-brand">
                {pattern === "yinwei" ? "所以" : "我"}
              </span>
              {pattern === "ruguo" ? (
                <span className="rounded-lg bg-accent-soft px-2 py-0.5 text-ink">就</span>
              ) : (
                <span className="text-ink">我</span>
              )}
              <span className="rounded-lg bg-good-soft px-2 py-0.5 text-good">{plan.vpZh}</span>
              <span className="text-ink">。</span>
            </div>
            <SpeakButtons text={sentence.zh} />
          </div>
          <div className="mt-2 text-sm font-bold text-brand">{sentence.py}</div>
          <div className="mt-0.5 text-xs font-semibold text-ink-2">{sentence.en}</div>
          {!logical ? (
            <div className="mt-2 rounded-lg bg-warn-soft px-3 py-1.5 text-xs font-bold text-warn">
              🤔 Funny combination! Grammatically 100% valid Mandarin, though your teacher might smile if you {plan.en} when {cause.en}!
            </div>
          ) : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "apac-weather-desk",
    title: "Asia-Pacific Weather Desk & Forecast Map",
    blurb: "Forecast weather across Singapore, Beijing, Harbin, Hong Kong, Shanghai & Sydney with 零下, 比 and TV audio.",
    Component: ApacWeatherDesk,
  },
  {
    id: "weather-cause-effect-lab",
    title: "Weather-to-Plan Cause & Effect Lab",
    blurb: "Link intense weather (下大雨, 刮大风) to real plans using paired 因为…所以… and 如果…就… connectors.",
    Component: WeatherCauseEffectLab,
  },
];
