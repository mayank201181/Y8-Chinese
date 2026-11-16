import type { Metadata } from "next";
import Link from "next/link";
import type { FormulaFact, Topic } from "@/lib/types";
import { TOPICS } from "@/lib/server/content";
import { STRANDS } from "@/lib/topics/meta";
import { Rich, RichInline } from "@/components/Rich";
import { PrintButton, PrintStyles } from "@/components/Certificate";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mandarin Grammar & Reference Sheet",
  description:
    "Every key Year 8 Mandarin Chinese grammar pattern, pronoun, classifier, aspect particle, question word and phrase frame in one place — print it for revision.",
};

const STRAND_STYLE: Record<string, { text: string; border: string; dot: string }> = {
  Foundations: { text: "text-s-number", border: "border-s-number", dot: "bg-s-number" },
  "Term 1 · Weather & Health": { text: "text-s-ratio", border: "border-s-ratio", dot: "bg-s-ratio" },
  "Term 2 · Hobbies & Leisure": { text: "text-s-geometry", border: "border-s-geometry", dot: "bg-s-geometry" },
  "Term 3 · Food & Grammar": { text: "text-s-algebra", border: "border-s-algebra", dot: "bg-s-algebra" },
};

const CORE_REFERENCE: { title: string; icon: string; rows: [string, string, string][] }[] = [
  {
    title: "Pronouns & Possessives (代词)",
    icon: "👥",
    rows: [
      ["我 / 我们", "wǒ / wǒmen", "I, me / we, us (+ 的 = my / our)"],
      ["你 / 您 / 你们", "nǐ / nín / nǐmen", "you / polite you / plural you"],
      ["他 / 她 / 它 / 他们", "tā / tāmen", "he / she / it / they (same sound tā!)"],
      ["这 / 那 / 哪", "zhè / nà / nǎ", "this / that / which (+ classifier: 这个, 那本, 哪件)"],
      ["自己 / 大家", "zìjǐ / dàjiā", "oneself / everyone"],
    ],
  },
  {
    title: "Question Words — Stay In-Place! (疑问词)",
    icon: "❓",
    rows: [
      ["什么 / 谁", "shénme / shéi", "what / who (你吃什么？ / 他是谁？)"],
      ["哪儿 (哪里) / 哪国", "nǎr (nǎlǐ) / nǎ guó", "where / which country"],
      ["几点 / 几月几号 / 星期几", "jǐ diǎn / jǐ yuè jǐ hào", "what time / what date / what day"],
      ["几 (+ MW) vs 多少", "jǐ vs duōshao", "how many (<10, needs MW) vs how many/much (多少钱？)"],
      ["怎么样 / 为什么 / 怎么", "zěnmeyàng / wèishénme / zěnme", "how is it / why / how (by what means)"],
    ],
  },
  {
    title: "Top 12 Classifiers / Measure Words (常用量词)",
    icon: "🧮",
    rows: [
      ["个 (gè) · 口 (kǒu)", "general · family", "一个人, 三个苹果 · 我家有四口人"],
      ["本 (běn) · 张 (zhāng)", "books · flat items", "两本书, 一本词典 · 一张桌子, 两张电影票"],
      ["杯 (bēi) · 碗 (wǎn) · 盘 (pán)", "cups · bowls · plates", "一杯茶 · 一碗牛肉面 · 一盘饺子"],
      ["件 (jiàn) · 条 (tiáo) · 双 (shuāng)", "tops · long · pairs", "一件毛衣 · 一条裤子/鱼 · 一双运动鞋/筷子"],
      ["只 (zhī) · 斤 (jīn)", "animals · 500g", "一只小狗, 两只猫 · 一斤草莓 (half a kilo)"],
    ],
  },
  {
    title: "Time, Aspect & Negation — No Verb Conjugation! (时态与否定)",
    icon: "⏳",
    rows: [
      ["Verb + 了 (le)", "completed action", "我昨天买了两本书。 (Negate with 没, drop 了: 没买)"],
      ["Verb + 过 (guo)", "past life experience", "我去过北京。 / 我没去过北京。 (Keep 过!)"],
      ["正在 / 在 + Verb (+ 呢)", "ongoing right now", "弟弟正在看电视呢。 (is watching right now)"],
      ["会 / 打算 / 要 + Verb", "future plan / forecast", "明天会下雨。 / 周末我打算去游泳。"],
      ["不 (bù) vs 没 (méi)", "habit/future/adj vs past/有", "我不喝咖啡 · 我没有钱 · 昨天我没去学校"],
    ],
  },
  {
    title: "Golden Word Order & Connectors (句型与连词)",
    icon: "🧱",
    rows: [
      ["STPV Golden Order", "Subj + Time + Place + Verb", "我星期六在体育馆打篮球。 (Time & Place BEFORE verb!)"],
      ["With-phrase", "A 跟/和 B 一起 + Verb", "我周末跟朋友一起去看电影。"],
      ["比 / 没有 Comparisons", "A 比 B + Adj (no 很!)", "新加坡比北京热得多。 / 今天没有昨天冷。"],
      ["因为…所以… / 虽然…但是…", "because…so… / although…but…", "虽然中文很难，但是很有意思。 (Use BOTH halves!)"],
      ["不但…而且… / 一边…一边…", "not only…but also / while", "这道菜不但好吃，而且便宜。 / 一边听音乐一边跑步。"],
    ],
  },
];

const slug = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const formulasOf = (t: Topic): FormulaFact[] => t.learn?.formulas ?? [];

export default function FormulasPage() {
  const groups = STRANDS.map((strand) => ({
    strand,
    topics: TOPICS.filter((t) => t.strand === strand && formulasOf(t).length > 0),
  })).filter((g) => g.topics.length > 0);
  const formulaCount = groups.reduce((n, g) => n + g.topics.reduce((m, t) => m + formulasOf(t).length, 0), 0);
  const topicCount = groups.reduce((n, g) => n + g.topics.length, 0);

  return (
    <div className="space-y-6 print:space-y-3">
      <PrintStyles orientation="portrait" margin="12mm" />
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl print:text-xl">Mandarin Grammar &amp; Reference Sheet · 语法速查表</h1>
          <p className="mt-1 max-w-2xl text-ink-2 print:hidden">
            Pronouns, measure words, STPV word order, aspect particles and every key sentence frame across Year 8 Chinese (IGCSE 0547 foundation). Keep it open while practising or print it for revision.
          </p>
          <p className="mt-1 text-sm font-bold text-ink-2 print:text-xs print:font-normal">
            5 core reference tables{formulaCount ? ` · ${formulaCount} topic patterns across ${topicCount} topic${topicCount === 1 ? "" : "s"}` : ""}
            <span className="hidden print:inline"> · Year 8 Chinese Lab · 中文实验室</span>
          </p>
        </div>
        <PrintButton label="Print sheet" />
      </header>

      <nav className="no-print flex flex-wrap gap-2" aria-label="Jump to section">
        <a href="#core-tables" className="btn btn-secondary btn-sm min-h-10">
          📌 Core tables
        </a>
        {groups.map((g) => (
          <a key={g.strand} href={`#strand-${slug(g.strand)}`} className="btn btn-secondary btn-sm min-h-10">
            <span aria-hidden className={`h-2 w-2 rounded-full ${STRAND_STYLE[g.strand]?.dot ?? "bg-brand"}`} />
            {g.strand}
          </a>
        ))}
      </nav>

      {/* Core Mandarin Reference Tables */}
      <section id="core-tables" className="scroll-mt-20 space-y-3" aria-labelledby="core-tables-h">
        <h2 id="core-tables-h" className="text-lg font-black text-brand print:text-base">
          📌 Essential Mandarin Reference Tables
        </h2>
        <div className="grid gap-4 lg:grid-cols-2 print:grid-cols-2 print:gap-3">
          {CORE_REFERENCE.map((box) => (
            <article key={box.title} className="card break-inside-avoid p-4 print:rounded-lg print:p-2.5 print:text-[9.5pt] print:shadow-none">
              <h3 className="font-extrabold">
                <span aria-hidden>{box.icon} </span>
                {box.title}
              </h3>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full text-left text-sm print:text-[8.5pt]">
                  <tbody className="divide-y divide-line">
                    {box.rows.map(([hanzi, py, note], i) => (
                      <tr key={i}>
                        <td className="py-1.5 pr-2 font-bold text-ink whitespace-nowrap" lang="zh-CN">
                          {hanzi}
                        </td>
                        <td className="py-1.5 pr-2 font-medium text-brand whitespace-nowrap">{py}</td>
                        <td className="py-1.5 text-ink-2">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </section>

      {!groups.length ? null : (
        groups.map((g) => {
          const st = STRAND_STYLE[g.strand] ?? { text: "text-brand", border: "border-brand", dot: "bg-brand" };
          return (
            <section key={g.strand} id={`strand-${slug(g.strand)}`} className="scroll-mt-20" aria-labelledby={`strand-${slug(g.strand)}-h`}>
              <h2 id={`strand-${slug(g.strand)}-h`} className={`mb-3 flex items-center gap-2 text-lg font-black break-after-avoid print:mb-2 print:text-base ${st.text}`}>
                <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${st.dot}`} />
                {g.strand}
              </h2>
              <div className="gap-4 md:columns-2 print:columns-2 print:gap-5">
                {g.topics.map((t) => (
                  <article
                    key={t.id}
                    className={`card mb-4 break-inside-avoid border-l-4 p-4 print:mb-3 print:rounded-lg print:p-2.5 print:text-[10pt] print:shadow-none ${st.border}`}
                    aria-labelledby={`f-${t.id}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 id={`f-${t.id}`} className="font-extrabold leading-snug">
                        <span aria-hidden>{t.icon} </span>
                        {t.title}
                      </h3>
                      <Link href={`/topic/${t.id}?tab=learn`} className="no-print -my-2 inline-flex min-h-10 shrink-0 items-center rounded-lg px-2 text-sm font-bold text-brand hover:bg-brand-soft" aria-label={`${t.title} lessons`}>
                        Lessons →
                      </Link>
                    </div>
                    <dl className="mt-2 divide-y divide-line">
                      {formulasOf(t).map((f, i) => (
                        <div key={`${t.id}-${i}`} className="py-2 first:pt-0 last:pb-0 print:py-1.5">
                          <dt className="text-xs font-extrabold uppercase tracking-wide text-ink-2 print:text-[8pt]">
                            <RichInline text={f.name} />
                          </dt>
                          <dd className="mt-0.5">
                            <Rich text={f.formula} className="text-[1.05rem] font-semibold text-ink print:text-[10.5pt]" />
                            {f.note ? <Rich text={f.note} className="mt-0.5 text-sm text-ink-2 print:text-[8.5pt]" /> : null}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
