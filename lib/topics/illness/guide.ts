import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "illness",
  title: "生病与看病 — Illness, Body & Seeing the Doctor",
  strand: "Term 1 · Weather & Health",
  icon: "🩺",
  summary:
    "Name parts of the body, explain symptoms without falling into the English 'have a...' trap, navigate a Singapore clinic visit, give health advice with 应该 and 得 (děi), and write a polite sick-leave note.",
  intro:
    "Stepping from 32°C Orchard Road heat straight into a freezing 18°C shopping mall or MRT carriage is practically a Singapore rite of passage — and a classic recipe for catching a cold (**感冒**, *gǎnmào*)! Whether you are visiting a neighbourhood GP clinic (**诊所**, *zhěnsuǒ*), messaging your form tutor at Tanglin to ask for sick leave (**请假**, *qǐngjià*), or tackling an IGCSE 0547 health roleplay, Mandarin handles body parts, aches, and medicine with remarkably logical building blocks once you spot two big differences from English.",
  guide: [
    {
      id: "body-parts",
      heading: "Parts of the body: 身体部位",
      discovery: {
        problem:
          "Look closely at these five Mandarin body-part characters: **脸** (*liǎn*, face), **脖子** (*bózi*, neck), **肚子** (*dùzi*, tummy), **腿** (*tuǐ*, leg), and **脚** (*jiǎo*, foot). Every single one shares the character **月** on the left! Why would 'the moon' be hiding inside your face, tummy, legs, and feet?",
        idea:
          "Plot twist: in body-part characters, that **月** is NOT the moon at all! Thousands of years ago, the pictograph for **肉** (*ròu*, meat/flesh) was compressed on the left side of characters until it looked identical to **月** (called *ròuyuèpáng*, the flesh radical). Whenever you spot **月** on the left of a character, there is a huge chance it names part of the human body!",
      },
      body: `To talk about health, appearance, or sport injuries, start from the top of the **身体** (*shēntǐ*, body / health) and work downwards.

### Head & Facial Features (头部与五官)

| Hanzi | Pinyin | English | Measure Word / Radical Tip |
|---|---|---|---|
| **身体** | *shēntǐ* | body; overall health | Means both physical body & health |
| **头** | *tóu* | head | **一个头**; **头发** (*tóufa*) = hair |
| **脸** | *liǎn* | face | **一张脸**; left radical **月** (flesh) |
| **眼睛** | *yǎnjing* | eye(s) | **一双眼睛** (pair) / **一只眼睛** (one); **目** (eye) radical |
| **耳朵** | *ěrduo* | ear(s) | **一只耳朵** / **两只耳朵**; neutral tone *duo* |
| **鼻子** | *bízi* | nose | **一个鼻子**; neutral tone *zi* |
| **嘴 / 嘴巴** | *zuǐ / zuǐba* | mouth | **一张嘴**; **口** (mouth) radical |
| **牙 / 牙齿** | *yá / yáchǐ* | tooth / teeth | **一颗牙** (*kē* for small round/pearly items) |
| **嗓子 / 喉咙** | *sǎngzi / hóulóng* | throat | **嗓子** (northern/standard) & **喉咙** (very common in Singapore!) |

### Limbs & Torso (四肢与躯干)

- **脖子** (*bózi*) — neck · **肩膀** (*jiānbǎng*) — shoulder · **背** (*bèi*) — back
- **手** (*shǒu*) — hand (**一双手**) · **手臂** (*shǒubì*) — arm · **手指** (*shǒuzhǐ*) — finger
- **肚子** (*dùzi*) — tummy / belly · **胃** (*wèi*) — stomach (organ)
- **腿** (*tuǐ*) — leg (**两条腿** — uses **条** for long limbs!) · **膝盖** (*xīgài*) — knee · **脚** (*jiǎo*) — foot (**一双脚**)

> **Describing features without 是:** In Mandarin, you can describe someone's features using a Topic-Comment pattern: **妹妹的眼睛很大，头发很长。** (*Mèimei de yǎnjing hěn dà, tóufa hěn cháng.* — My little sister's eyes are big and her hair is long.) Never put **是** before adjectives like **大** or **长**!`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of human body parts in Simplified Chinese and Pinyin showing head, eyes, ears, nose, mouth, throat, hand, tummy, leg and foot">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">身体部位 · Parts of the Body &amp; Radical Clues</text>
  <circle cx="320" cy="74" r="24" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <circle cx="312" cy="70" r="2.5" fill="#1e293b"/>
  <circle cx="328" cy="70" r="2.5" fill="#1e293b"/>
  <path d="M313 82 Q320 88 327 82" fill="none" stroke="#c81e1e" stroke-width="2"/>
  <rect x="298" y="102" width="44" height="72" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="2"/>
  <line x1="298" y1="114" x2="262" y2="152" stroke="#0d9488" stroke-width="6" stroke-linecap="round"/>
  <line x1="342" y1="114" x2="378" y2="152" stroke="#0d9488" stroke-width="6" stroke-linecap="round"/>
  <line x1="309" y1="174" x2="302" y2="226" stroke="#1e293b" stroke-width="7" stroke-linecap="round"/>
  <line x1="331" y1="174" x2="338" y2="226" stroke="#1e293b" stroke-width="7" stroke-linecap="round"/>
  <rect x="34" y="46" width="170" height="34" rx="8" fill="#fef3c7" stroke="#b45309"/>
  <text x="119" y="68" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">头 tóu · 头发 tóufa</text>
  <line x1="204" y1="63" x2="295" y2="63" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="34" y="92" width="170" height="34" rx="8" fill="#fee2e2" stroke="#c81e1e"/>
  <text x="119" y="114" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">嗓子 sǎngzi / 喉咙 hóulóng</text>
  <line x1="204" y1="109" x2="314" y2="99" stroke="#c81e1e" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="34" y="138" width="170" height="34" rx="8" fill="#e0f2fe" stroke="#0d9488"/>
  <text x="119" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">手 shǒu · 手臂 shǒubì</text>
  <line x1="204" y1="155" x2="260" y2="152" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="34" y="186" width="170" height="34" rx="8" fill="#f1f5f9" stroke="#475569"/>
  <text x="119" y="208" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">两条腿 liǎng tiáo tuǐ (月!)</text>
  <line x1="204" y1="203" x2="303" y2="203" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="426" y="48" width="184" height="36" rx="8" fill="#fef3c7" stroke="#b45309"/>
  <text x="518" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">眼睛 yǎnjing (目 = eye)</text>
  <line x1="426" y1="66" x2="336" y2="70" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="426" y="96" width="184" height="36" rx="8" fill="#fee2e2" stroke="#c81e1e"/>
  <text x="518" y="118" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">嘴 zuǐ · 牙齿 yáchǐ</text>
  <line x1="426" y1="114" x2="334" y2="83" stroke="#c81e1e" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="426" y="144" width="184" height="36" rx="8" fill="#e0f2fe" stroke="#0d9488"/>
  <text x="518" y="166" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">肚子 dùzi (月 = flesh)</text>
  <line x1="426" y1="162" x2="338" y2="145" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="426" y="192" width="184" height="36" rx="8" fill="#dcfce7" stroke="#15803d"/>
  <text x="518" y="214" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">脚 jiǎo (一双脚 pair)</text>
  <line x1="426" y1="210" x2="342" y2="226" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4 3"/>
</svg>`,
      diagramCaption:
        "Key body-part nouns paired with their semantic radicals (目 for eyes, 口 for mouth/throat, 月 for flesh/limbs) and classifiers.",
      workedExamples: [
        {
          title: "Choosing the right body-part classifier",
          problem:
            "Translate into Mandarin: 'My puppy has two big ears and four short legs.'",
          steps: [
            "Start with 'My puppy has': **我的小狗有** (*Wǒ de xiǎogǒu yǒu*).",
            "Before a measure word, 'two' is always **两** (*liǎng*), never 二! Single eyes, ears, and hands take **只** (*zhī*): **两只大耳朵** (*liǎng zhī dà ěrduo*).",
            "Legs are long and flexible, so they take **条** (*tiáo*): **四条短腿** (*sì tiáo duǎn tuǐ*).",
            "Join the two noun phrases cleanly with **和** (*hé*).",
          ],
          answer: "我的小狗有两只大耳朵和四条短腿。",
          yourTurn: {
            question:
              "How do you say 'two legs' in Mandarin (using the correct form of 2 and the classifier for legs)?",
            answer: {
              type: "text",
              accept: ["两条腿", "liǎng tiáo tuǐ"],
              display: "两条腿 (liǎng tiáo tuǐ)",
            },
            solution:
              "Use **两** before a classifier, and **条** (*tiáo*) for long body parts like legs: **两条腿** (*liǎng tiáo tuǐ*).",
          },
        },
      ],
      keyPoints: [
        "Many two-syllable body nouns end in a **neutral tone**: **头发** (*tóufa*), **眼睛** (*yǎnjing*), **耳朵** (*ěrduo*), **鼻子** (*bízi*), **嘴巴** (*zuǐba*), **嗓子** (*sǎngzi*), **肚子** (*dùzi*).",
        "The left-hand **月** radical in **脸, 脖子, 肚子, 腿, 脚** comes from **肉** (flesh), not the moon.",
        "Match classifiers carefully: **一双眼睛 / 手 / 脚** (a pair), **一只手 / 耳朵** (one of a pair), **两条腿** (legs), **一张嘴 / 脸** (mouth/face).",
        "Both **嗓子** (*sǎngzi*) and **喉咙** (*hóulóng*) mean 'throat' — in Singapore you will hear **喉咙** every day!",
      ],
      whyItWorks:
        "Chinese characters are built on a semantic-phonetic blueprint. Roughly 80% of characters combine a meaning clue (the radical) with a sound clue. Knowing just three body radicals — **月** (flesh/organs), **目** (vision/eyes), and **口** (mouth/vocal tract) — lets you decode unfamiliar medical vocabulary in IGCSE reading passages on sight.",
      strategies: [
        "Radical X-ray: spot 月 (flesh), 目 (eye), or 口 (mouth/throat) to guess unknown body words in reading comprehension.",
        "Head-to-toe scan: revise body vocabulary in vertical order (头发 → 头 → 眼睛/耳朵/鼻子/嘴 → 嗓子 → 手/肚子 → 腿 → 脚) so you never blank out in an oral exam.",
      ],
      thinkDeeper:
        "Why does **舌头** (*shétou*, tongue) end with **头** in a neutral tone, whereas **头** (*tóu*, head) has a full second tone? Can you think of two other Mandarin nouns where **头** is just a dummy noun suffix (like wood or stone)?",
    },
    {
      id: "symptoms-illness",
      heading: "Symptoms & illnesses: 头疼, 发烧, 感冒, 咳嗽",
      discovery: {
        problem:
          "An English-speaking student translates 'I have a headache and a fever' word-for-word as *我有头疼和有发烧*. A native speaker winces immediately! How does Mandarin actually express symptoms — and why is **有** (*yǒu*, to have) missing?",
        idea:
          "In English, illnesses are treated as *things you possess* ('have a cold', 'have a headache'). In Mandarin, symptoms are **verbs or predicates** ('I head-ache', 'I emit-heat', 'I catch-cold')! You simply say **我头疼，也发烧了** (*Wǒ tóuténg, yě fāshāo le*) — no **有** required!",
      },
      body: `### Asking What Is Wrong

When someone looks pale (**脸色不好**, *liǎnsè bù hǎo*), ask:
- **你怎么了？** (*Nǐ zěnme le?*) — What's the matter with you?
- **你哪里不舒服？** (*Nǐ nǎlǐ bù shūfu?*) — Where do you feel unwell? (Literally: 'You where not-comfortable?' — the polite question a doctor asks!)

### Pattern 1: Body Part + 疼 / 痛 (Aches & Pains)

To say a body part hurts, put the body part first and **疼** (*téng*) or **痛** (*tòng*) right after it:

**Subject + Body Part + (很 / 有点儿) + 疼**

- **我头疼。** (*Wǒ tóuténg.*) — I have a headache.
- **我肚子很疼。** (*Wǒ dùzi hěn téng.*) — My tummy hurts badly.
- **我嗓子有点儿疼。** (*Wǒ sǎngzi yǒudiǎnr téng.*) — My throat is a bit sore. (In Singapore: **喉咙痛**, *hóulóng tòng*.)
- **弟弟牙疼。** (*Dìdi yáténg.*) — My little brother has a toothache.

> **Degree nuance:** Use **很** (*hěn*) for neutral/strong pain (**肚子很疼**), and **有点儿** (*yǒudiǎnr*, a little — slightly undesirable!) BEFORE the verb/adjective for mild discomfort (**有点儿头疼**, **有点儿累**). Never put **有点儿** after the adjective!

### Pattern 2: Core Illness Verbs (No 有!)

| Symptom / Illness | Pinyin | English | Example Sentence |
|---|---|---|---|
| **生病** | *shēngbìng* | to fall ill | **我生病了，今天不能上学。** |
| **感冒** | *gǎnmào* | to catch a cold | **空调太冷，我感冒了。** |
| **发烧** | *fāshāo* | to have a fever | **他发烧三十八度五。** |
| **咳嗽** | *késou* | to cough | **爷爷昨天晚上一直咳嗽。** |
| **流鼻涕** | *liú bítì* | to have a runny nose | **妹妹感冒了，一直流鼻涕。** |
| **打喷嚏** | *dǎ pēntì* | to sneeze | **我早上打了三个喷嚏。** |
| **对…过敏** | *duì … guòmǐn* | to be allergic to… | **我对海鲜过敏。** |

Notice the **疒** (*bìngzìtóu*, sickness radical) wrapping around **病** (*bìng*), **疼** (*téng*), and **痛** (*tòng*) — it depicts a sick person lying on a bed!`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sentence builder comparing the Body Part plus teng ache pattern and direct Mandarin symptom verbs without you">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Mandarin Symptom Architecture (No 有 Needed!)</text>
  <rect x="28" y="50" width="584" height="86" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="46" y="72" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">1. Body-Part Ache Formula: Subject + Body Part + (Degree) + 疼 / 痛</text>
  <rect x="46" y="84" width="96" height="38" rx="8" fill="#ffffff" stroke="#c81e1e"/>
  <text x="94" y="108" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">我 Wǒ</text>
  <text x="156" y="108" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#c81e1e">+</text>
  <rect x="170" y="84" width="136" height="38" rx="8" fill="#ffffff" stroke="#c81e1e"/>
  <text x="238" y="108" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">嗓子 sǎngzi</text>
  <text x="320" y="108" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#c81e1e">+</text>
  <rect x="334" y="84" width="132" height="38" rx="8" fill="#fef3c7" stroke="#b45309"/>
  <text x="400" y="108" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#b45309">有点儿 yǒudiǎnr</text>
  <text x="480" y="108" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#c81e1e">+</text>
  <rect x="494" y="84" width="98" height="38" rx="8" fill="#ffffff" stroke="#c81e1e"/>
  <text x="543" y="108" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#c81e1e">疼 téng</text>
  <rect x="28" y="150" width="356" height="88" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="46" y="172" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0d9488">2. Direct Symptom Verbs (+ 了 for new state)</text>
  <text x="46" y="196" font-family="sans-serif" font-size="13" fill="#1e293b">我感冒了 (Wǒ gǎnmào le) = I caught a cold</text>
  <text x="46" y="218" font-family="sans-serif" font-size="13" fill="#1e293b">我发烧了，一直咳嗽 = I have a fever &amp; keep coughing</text>
  <rect x="400" y="150" width="212" height="88" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="506" y="172" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">English Trap Alert!</text>
  <text x="506" y="196" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#c81e1e">✗ 我有感冒 / 我有发烧</text>
  <text x="506" y="218" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#15803d">✓ 我感冒了 / 我发烧了</text>
</svg>`,
      diagramCaption:
        "Symptoms act as verbs in Mandarin: attach 疼 directly after the body part, or use 感冒 / 发烧 / 咳嗽 + 了 without 有.",
      workedExamples: [
        {
          title: "Translating multi-symptom sentences",
          problem:
            "Translate into natural Mandarin: 'Xiaoming caught a cold; he has a fever and a sore throat.'",
          steps: [
            "'Xiaoming caught a cold' uses **感冒** as a verb with **了** for change of state: **小明感冒了** (*Xiǎomíng gǎnmào le*).",
            "'He has a fever' uses **发烧** without 有: **他发烧了** (*tā fāshāo le*) or combine with **还** (*hái*, also).",
            "'Sore throat' puts the body part before **疼**: **嗓子疼** (*sǎngzi téng*).",
            "Combine smoothly: **小明感冒了，他发烧，还嗓子疼。**",
          ],
          answer: "小明感冒了，他发烧，还嗓子疼。",
          yourTurn: {
            question:
              "Translate into Mandarin: 'I have a tummy ache.' (Do NOT use 有!)",
            answer: {
              type: "text",
              accept: [
                "我肚子疼",
                "我肚子痛",
                "我的肚子疼",
                "我的肚子痛",
                "Wǒ dùzi téng",
                "Wǒ dùzi tòng",
                "Wǒ de dùzi téng",
                "Wǒ de dùzi tòng",
              ],
              display: "我肚子疼。 (Wǒ dùzi téng.)",
            },
            solution:
              "Place **肚子** (*dùzi*, tummy) right before **疼** (*téng*) or **痛** (*tòng*): **我肚子疼** (*Wǒ dùzi téng*).",
          },
        },
      ],
      keyPoints: [
        "Never translate English 'have a cold/fever/headache' with **有** — say **我感冒了**, **我发烧了**, **我头疼**.",
        "Put the aching body part BEFORE **疼 / 痛**: **头疼** (headache), **肚子疼** (stomach-ache), **牙疼** (toothache), **嗓子疼 / 喉咙痛** (sore throat).",
        "**有点儿** (*yǒudiǎnr*, slightly/a bit — for unwelcome states) goes BEFORE the verb/adjective: **有点儿头疼**, **有点儿不舒服**.",
        "Allergies follow the frame **A + 对 + B + 过敏** (*Wǒ duì huāshēng guòmǐn* — I am allergic to peanuts).",
      ],
      whyItWorks:
        "Mandarin loves **Topic-Comment** sentences: state who/what you are talking about (**我** — me, **肚子** — my tummy), then state what is happening (**疼** — aches!). Because **疼**, **发烧**, and **感冒** already carry full verbal force, adding **有** is grammatically redundant.",
      strategies: [
        "Drop-the-有 check: scan every symptom sentence you write and delete 有 before 头疼, 感冒, 发烧, and 咳嗽.",
        "Sickness-radical spotlight: remember 疒 (bed + sick person) in 病, 疼, and 痛 so you never confuse 疼 with 冬 (winter).",
      ],
      thinkDeeper:
        "Compare **一点儿** (*yìdiǎnr*) and **有点儿** (*yǒudiǎnr*): why do we say **我有点儿累** ('I am a bit tired' — before the adjective), yet **请喝一点儿水** ('Please drink a little water' — before a noun)?",
    },
    {
      id: "at-the-clinic",
      heading: "Seeing the doctor: 看医生, 吃药, 打针",
      discovery: {
        problem:
          "In English you 'take medicine'. If you look up 'take' in a dictionary and say *拿药* (*ná yào*) to tell your teacher you took your pills after breakfast, what have you accidentally told them instead?",
        idea:
          "**拿药** means *collecting your prescription bag from the pharmacy counter*! To swallow tablets or syrup in Mandarin, you literally **eat medicine**: **吃药** (*chī yào*) — or **喝中药** (*hē zhōngyào*) for liquid herbal medicine!",
      },
      body: `### Step-by-Step at a Clinic or Hospital (在诊所或医院看病)

In Singapore, if you wake up with a fever, your parents will usually take you to a neighbourhood GP clinic (**诊所**, *zhěnsuǒ*), whereas in China many families go directly to the outpatient department of a **医院** (*yīyuàn*, hospital). Either way, the sequence of events follows a crisp chronological chain using **先…再 / 然后…最后…** (*xiān … ránhòu … zuìhòu …*, first… then… finally…):

1. **去看医生 / 去看病** (*qù kàn yīshēng / qù kànbìng*) — go to see the doctor
2. **护士量体温** (*hùshi liáng tǐwēn*) — the nurse takes your temperature (note 2nd tone **liáng**!)
3. **医生检查身体 / 检查嗓子** (*yīshēng jiǎnchá shēntǐ / sǎngzi*) — the doctor examines you
4. **打针** (*dǎzhēn*, give an injection) **或者** (*huòzhě*, or) **开药** (*kāi yào*, prescribe medicine)
5. **吃药** (*chī yào*, take medicine) & **在家休息** (*zài jiā xiūxi*, rest at home)

### Reading a Chinese Medicine Label (吃药说明)

Medicine instructions in IGCSE reading papers follow a super-regular number + classifier pattern:

| Mandarin Instruction | Pinyin | Meaning |
|---|---|---|
| **一天三次** | *yì tiān sān cì* | three times a day |
| **一次两片** | *yí cì liǎng piàn* | two tablets each time |
| **饭后吃药** | *fànhòu chī yào* | take medicine after meals |
| **饭前吃** | *fànqián chī* | take before meals |
| **用温水吃药** | *yòng wēnshuǐ chī yào* | take with warm water |

> **Quick maths trap in listening/reading exams:** If a bottle label says **一天三次，一次两片** (*three times a day, two tablets each time*), how many tablets do you take in ONE full day? {{3 * 2 = 6}} tablets (**六片药**)! Examiners love asking this exact calculation!`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clinic visit flowchart from seeing the doctor and taking temperature to prescription and medicine dosage formula">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">看病流程 · Clinic Visit &amp; Prescription Dosage</text>
  <rect x="24" y="54" width="132" height="66" rx="10" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="90" y="79" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">1. 去诊所看病</text>
  <text x="90" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">qù zhěnsuǒ kànbìng</text>
  <text x="90" y="113" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0d9488">Visit GP clinic</text>
  <text x="168" y="92" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#64748b">→</text>
  <rect x="180" y="54" width="132" height="66" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="246" y="79" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">2. 量体温</text>
  <text x="246" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">liáng tǐwēn</text>
  <text x="246" y="113" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#b45309">Check temp (38.5°C)</text>
  <text x="324" y="92" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#64748b">→</text>
  <rect x="336" y="54" width="132" height="66" rx="10" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="402" y="79" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">3. 检查 + 开药</text>
  <text x="402" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">jiǎnchá + kāi yào</text>
  <text x="402" y="113" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#c81e1e">Examine &amp; prescribe</text>
  <text x="480" y="92" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#64748b">→</text>
  <rect x="492" y="54" width="124" height="66" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="554" y="79" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">4. 吃药休息</text>
  <text x="554" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">chī yào xiūxi</text>
  <text x="554" y="113" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803d">Take pills &amp; rest</text>
  <rect x="24" y="140" width="592" height="96" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="1.5"/>
  <text x="44" y="164" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0d9488">Prescription Label Formula (医嘱吃药说明):</text>
  <text x="44" y="192" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">饭后吃药，一天三次，一次两片。</text>
  <text x="44" y="216" font-family="sans-serif" font-size="12" fill="#475569">Fànhòu chī yào (after meals) · yì tiān sān cì (3 times/day) · yí cì liǎng piàn (2 tablets/dose = 6 tablets/day!)</text>
</svg>`,
      diagramCaption:
        "The four-stage clinic storyline and the classic Mandarin prescription dosage formula.",
      workedExamples: [
        {
          title: "Roleplay at the GP clinic",
          problem:
            "How do you translate the doctor's instruction: 'Take this medicine after meals, twice a day, one tablet each time'?",
          steps: [
            "'After meals' is **饭后** (*fànhòu*) — time/sequence always precedes the verb **吃药**!",
            "'Twice a day' uses **两** before the frequency measure word **次** (*cì*): **一天两次** (*yì tiān liǎng cì*).",
            "'One tablet each time' uses **片** (*piàn*) for flat pills: **一次一片** (*yí cì yí piàn*).",
            "Put it together smoothly: **这种药饭后吃，一天两次，一次一片。**",
          ],
          answer: "这种药饭后吃，一天两次，一次一片。",
          yourTurn: {
            question:
              "Translate into Mandarin: 'three times a day, two tablets each time'",
            answer: {
              type: "text",
              accept: [
                "一天三次，一次两片",
                "一天三次一次两片",
                "一天吃三次，一次吃两片",
                "yì tiān sān cì, yí cì liǎng piàn",
                "yī tiān sān cì, yī cì liǎng piàn",
                "yì tiān chī sān cì, yí cì chī liǎng piàn",
                "yī tiān chī sān cì, yī cì chī liǎng piàn",
              ],
              display: "一天三次，一次两片 (yì tiān sān cì, yí cì liǎng piàn)",
            },
            solution:
              "Frequency first (**一天三次**, three times a day), then dose size with **两** + **片** (**一次两片**, two tablets each time).",
          },
        },
      ],
      keyPoints: [
        "Always say **吃药** (*chī yào*) for taking pills/medicine, **开药** (*kāi yào*) for a doctor prescribing medicine, and **打针** (*dǎzhēn*) for an injection.",
        "Surname precedes title: **王医生** (*Wáng yīshēng*, Dr Wang), **陈护士** (*Chén hùshi*, Nurse Chen).",
        "Dosage pattern: **一天 [X] 次，一次 [Y] 片** (X times a day, Y tablets each time); use **两片** for 2 tablets, never *二片*.",
        "Remember Golden STPV word order: **妈妈今天上午带我去医院看病** (Subject + Time + Action).",
      ],
      whyItWorks:
        "Notice how Mandarin orders dosage from **larger timeframe to smaller unit** (**一天** one day → **三次** three times → **一次** one occasion → **两片** two tablets), mirroring the exact same big-to-small principle as Mandarin dates and addresses!",
      strategies: [
        "Multiply-check on labels: in reading comprehension, always check whether the question asks for tablets *per dose* (一次几片) or tablets *per day* (一天一共几片).",
        "先…然后…最后 chain: narrate clinic visits cleanly using sequence connectors to hit top IGCSE fluency marks.",
      ],
      thinkDeeper:
        "Why does **看病** (*kànbìng*) mean 'see a doctor' when the subject is the patient (**我去看病**), yet 'treat a patient' when the subject is the doctor (**王医生给病人看病**)?",
    },
    {
      id: "modal-advice",
      heading: "Giving health advice: 应该, 得 (děi), 多喝水, 别…",
      discovery: {
        problem:
          "You know the character **得** as neutral-tone *de* in **打得好** ('play well') and second-tone *dé* in **得到** ('obtain'). Look at this sentence from a doctor: **你发烧了，今天得在家休息！** How is **得** pronounced here, what does it mean, and why can you NEVER say *不得休息* to mean 'don't have to rest'?",
        idea:
          "Before a verb meaning 'must / have to', **得** switches to third tone **děi**! Even better: its negative is **不用** (*búyòng*, no need to) or **不必** (*búbì*) — because **不得** (*bùdé*) is formal written legal language meaning 'strictly prohibited'!",
      },
      body: `### Positive Advice: 应该 (should) & 得 děi (must / have to)

| Pattern | Pinyin | Meaning & Tone | Example |
|---|---|---|---|
| **应该 + Verb** | *yīnggāi* | should; ought to | **你应该早点儿睡觉。** (You should go to sleep earlier.) |
| **得 + Verb** | *děi* (3rd tone!) | must; have to (spoken) | **我得吃药了。** (I have to take my medicine now.) |
| **要 + Verb** | *yào* | need to; must | **去诊所要戴口罩。** (You need to wear a mask to the clinic.) |

### The Secret Weapon of Chinese Health Advice: 多 + Verb & 少 + Verb

In English, 'more' and 'less' usually come *after* the verb or noun ('rest **more**', 'drink **more** water', 'eat **fewer** sweets'). In Mandarin advice, **多** (*duō*, more) and **少** (*shǎo*, less) sit **directly BEFORE the verb**!

- **多喝温水** (*duō hē wēnshuǐ*) — drink more warm water ( universally prescribed by every Chinese parent and doctor!)
- **多休息** (*duō xiūxi*) — rest more
- **多吃蔬菜和水果** (*duō chī shūcài hé shuǐguǒ*) — eat more vegetables and fruit
- **少吃糖 / 少吃快餐** (*shǎo chī táng / shǎo chī kuàicān*) — eat fewer sweets / less fast food
- **少玩手机** (*shǎo wán shǒujī*) — spend less time on your phone

### Negative Advice: 不要, 别 & 不应该

- **别 + Verb** (*bié*, don't! — friendly spoken imperative): **你嗓子疼，别喝冰水！** (*Nǐ sǎngzi téng, bié hē bīngshuǐ!* — Your throat hurts, don't drink iced water!)
- **不要 + Verb** (*búyào*, don't / must not): **发烧的时候不要去踢足球。** (*Fāshāo de shíhou búyào qù tī zúqiú.*)
- **不应该 + Verb** (*bù yīnggāi*, shouldn't): **生病的时候不应该熬夜。** (*Shēngbìng de shíhou bù yīnggāi áoyè.* — You shouldn't stay up late when ill.)`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Doctor advice toolkit contrasting positive advice with yinggai, dei, duo plus verb against negative warnings with bie and buyao">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">医嘱工具箱 · Doctor&apos;s Advice Toolkit</text>
  <rect x="24" y="48" width="288" height="188" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="168" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803d">DOs · 应该 / 得 (děi) / 多 + Verb</text>
  <rect x="40" y="84" width="256" height="38" rx="8" fill="#ffffff" stroke="#15803d"/>
  <text x="168" y="108" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">你应该多喝温水。(should drink more)</text>
  <rect x="40" y="132" width="256" height="38" rx="8" fill="#ffffff" stroke="#15803d"/>
  <text x="168" y="156" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">你得在家多休息。(děi = must rest)</text>
  <rect x="40" y="180" width="256" height="40" rx="8" fill="#fef3c7" stroke="#b45309"/>
  <text x="168" y="205" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309">Note: 多/少 ALWAYS go BEFORE the verb!</text>
  <rect x="328" y="48" width="288" height="188" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="472" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#c81e1e">DON&apos;Ts · 别 / 不要 / 少 + Verb</text>
  <rect x="344" y="84" width="256" height="38" rx="8" fill="#ffffff" stroke="#c81e1e"/>
  <text x="472" y="108" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">别喝冰水！(Don&apos;t drink iced water!)</text>
  <rect x="344" y="132" width="256" height="38" rx="8" fill="#ffffff" stroke="#c81e1e"/>
  <text x="472" y="156" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">不要去游泳。(Don&apos;t go swimming.)</text>
  <rect x="344" y="180" width="256" height="40" rx="8" fill="#ffffff" stroke="#c81e1e"/>
  <text x="472" y="205" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">少吃糖，早点睡觉。(Fewer sweets!)</text>
</svg>`,
      diagramCaption:
        "Pairing positive modals (应该, 得 děi) and pre-verbal 多/少 with negative imperatives (别, 不要).",
      workedExamples: [
        {
          title: "Giving balanced advice to a sick friend",
          problem:
            "Your friend Meimei has a sore throat and a cough. Write one sentence telling her she should drink more water and must not drink iced cola.",
          steps: [
            "Start with the condition or address Meimei: **你嗓子疼，还咳嗽** (*Nǐ sǎngzi téng, hái késou*).",
            "'Should drink more water' puts **多** right before **喝**: **应该多喝水** (*yīnggāi duō hē shuǐ*).",
            "'Don't drink iced cola' uses **别** or **不要**: **别喝冰可乐** (*bié hē bīng kělè*).",
          ],
          answer: "你嗓子疼，应该多喝水，别喝冰可乐。",
          yourTurn: {
            question:
              "Translate into Mandarin: 'You should rest more.' (Put 多 in the right spot!)",
            answer: {
              type: "text",
              accept: [
                "你应该多休息",
                "您应该多休息",
                "Nǐ yīnggāi duō xiūxi",
                "Nín yīnggāi duō xiūxi",
              ],
              display: "你应该多休息。 (Nǐ yīnggāi duō xiūxi.)",
            },
            solution:
              "Place **多** (*duō*) immediately before the verb **休息** (*xiūxi*), NOT at the end: **你应该多休息** (*Nǐ yīnggāi duō xiūxi*).",
          },
        },
      ],
      keyPoints: [
        "**应该** (*yīnggāi*) = should; negative is **不应该** (*bù yīnggāi*).",
        "**得** before a verb is pronounced **děi** ('must / have to'); its negative is **不用** (*búyòng*, don't need to).",
        "Put **多** and **少** BEFORE the verb in health advice: **多喝水**, **多休息**, **少吃糖** — NEVER *休息多* or *喝水多*!",
        "**别** (*bié*) and **不要** (*búyào*) both mean 'don't!' directly before an action verb.",
      ],
      whyItWorks:
        "In Mandarin grammar, modifiers almost always precede what they modify (the head-final modifier rule). In **多喝水**, the speaker isn't just quantifying the noun 'water' — they are advising you to perform the entire action of water-drinking *more frequently*, so **多** acts as an adverb right in front of **喝**.",
      strategies: [
        "Pre-verb magnet: treat 多, 少, 早点儿, 别, 不要, 应该, and 得 (děi) as magnets that ALWAYS stick in front of the verb.",
        "Three-pronunciation check on 得: Verb + 得 (de) + Adj = degree; 得到 (dé) = get; 得 (děi) + Verb = must!",
      ],
      thinkDeeper:
        "Compare **你不用吃药** (*Nǐ búyòng chī yào*) and **你别吃药** (*Nǐ bié chī yào*). Imagine a doctor saying each sentence to a worried patient — how does the meaning change completely?",
    },
    {
      id: "sick-leave-note",
      heading: "Writing a sick-leave message & recovery diary",
      discovery: {
        problem:
          "You wake up in Singapore with a 38.8°C fever and a bad cough, and need to email or write a **请假条** (*qǐngjiàtiáo*, sick-leave note) to Teacher Wang (**王老师**). Which pronoun should you use for 'you' to show respect, and what four pieces of information make a 5/5 IGCSE sick-leave message?",
        idea:
          "Always address a teacher with respectful **您** (*nín* — notice **心** heart underneath **你**!) rather than plain **你**, and hit the 4-part checklist: **(1) Symptoms & when they started → (2) Clinic visit & doctor's advice → (3) Exact leave request (请假) → (4) Polite closing & date**!",
      },
      body: `### The 4-Part IGCSE Sick-Leave Note (**请假条** *qǐngjiàtiáo*)

Writing an 80–130 character email or note to a teacher or friend about falling ill is one of the highest-frequency Cambridge IGCSE 0547 Paper 4 tasks! Follow this crystal-clear structure:

1. **Salutation (称呼):**
   - **尊敬的王老师，您好！** (*Zūnjìng de Wáng lǎoshī, nín hǎo!* — Dear Teacher Wang, hello [respectful]!)
2. **Symptoms & Cause (症状与原因):**
   - **因为昨天晚上我突然发烧三十八度五，而且一直咳嗽、嗓子疼，所以我今天不能来学校上课。**
   - (*Because I suddenly got a 38.5°C fever last night, and kept coughing with a sore throat, I cannot come to school for lessons today.*)
3. **Doctor's Visit & Advice (看医生与医嘱):**
   - **今天早上妈妈带我去家附近的诊所看医生。医生给我开了感冒药，说我得在家多喝温水、好好休息两天。**
   - (*This morning Mum took me to a clinic near home to see the doctor. The doctor prescribed cold medicine and said I must drink plenty of warm water and rest well at home for two days.*)
4. **Leave Request & Polite Sign-off (请假与祝语):**
   - **我想向您请两天病假。谢谢您的理解！**
   - (*I would like to ask you for two days' sick leave. Thank you for your understanding!*)
   - **祝好！ / 您的学生：小明 / 十一月十七日**

### Replying to a Sick Friend

When a classmate tells you they are ill, reply warmly with:
- **听到你生病了，我很难过。** (*Tīngdào nǐ shēngbìng le, wǒ hěn nánguò.* — I'm sorry to hear you're ill.)
- **你要按时吃药，好好休息！祝你早日康复！** (*Nǐ yào ànshí chī yào, hǎohǎo xiūxi! Zhù nǐ zǎorì kāngfù!* — Take your medicine on time and rest well! Get well soon!)`,
      workedExamples: [
        {
          title: "Upgrading a choppy sick-leave sentence to IGCSE Grade A*",
          problem:
            "Combine these three basic ideas into ONE smooth Mandarin sentence using **因为…所以…** and **不能**: (1) I caught a cold and have a headache today; (2) I cannot go to school; (3) I want to ask Teacher Li for one day's leave.",
          steps: [
            "Open with **李老师，您好！** (*Lǐ lǎoshī, nín hǎo!*) using polite **您**.",
            "Join cause and effect with **因为…所以…**: **因为我今天感冒了，头很疼，所以我不能去学校上课**.",
            "Add the polite leave request with **向您请一天假**: **想向您请一天病假。**",
          ],
          answer: "李老师，您好！因为我今天感冒了，头很疼，所以我不能去学校上课，想向您请一天病假。",
          yourTurn: {
            question:
              "How do you write 'Get well soon!' (or 'Wishing you a speedy recovery!') in idiomatic four-character Mandarin?",
            answer: {
              type: "text",
              accept: [
                "早日康复",
                "祝你早日康复",
                "祝您早日康复",
                "zǎorì kāngfù",
                "zhù nǐ zǎorì kāngfù",
                "zhù nín zǎorì kāngfù",
              ],
              display: "祝你早日康复！ (Zhù nǐ zǎorì kāngfù!)",
            },
            solution:
              "**早日康复** (*zǎorì kāngfù*, literally 'early-day health-restore'), usually preceded by **祝你** (*zhù nǐ*, wishing you): **祝你早日康复！**",
          },
        },
      ],
      keyPoints: [
        "Always address teachers with **您** (*nín*) and put surname BEFORE title: **王老师，您好！**",
        "Key phrase for asking someone for leave: **向 + Person + 请假** (e.g. **向王老师请两天病假**).",
        "Use paired connectors (**因为…所以…**, **不但…而且…**) and sequence markers (**先…然后…**) to elevate your writing.",
        "Sign off messages to an unwell friend with **祝你早日康复！** (*Get well soon!*).",
      ],
      whyItWorks:
        "In Singapore schools (where doctors issue an official **MC / 病假单**, medical certificate) and across the Chinese-speaking world, written leave requests follow clear register conventions. Switching from **你** to **您** and using **请病假** instantly signals cultural competence to IGCSE examiners.",
      strategies: [
        "4-Box Paragraph Planner: jot down (1) 症状 Symptoms, (2) 看病 Clinic, (3) 医嘱 Advice, (4) 请假 Leave duration before writing a single character.",
        "Connector upgrade: link two symptoms with **不但发烧，而且嗓子疼** ('not only have a fever, but also a sore throat') for effortless range marks.",
      ],
      thinkDeeper:
        "Notice how **请假** (*qǐngjià*, ask for leave) and **放假** (*fàngjià*, start school holidays) share the character **假** (*jià*, 4th tone). How does the pronunciation and meaning of **假** change when it is read in the 3rd tone (*jiǎ*, as in **真假**)?",
    },
  ],
  learn: {
    flashcards: [
      { front: "身体 (shēntǐ)", back: "body; health (祝你身体健康 = wishing you good health)" },
      { front: "嗓子 / 喉咙 (sǎngzi / hóulóng)", back: "throat (嗓子疼 / 喉咙痛 = sore throat)" },
      { front: "肚子疼 (dùzi téng)", back: "stomach-ache / tummy ache (Body part + 疼, NO 有!)" },
      { front: "感冒 (gǎnmào)", back: "to catch a cold (我感冒了 — never *我有感冒*)" },
      { front: "发烧 (fāshāo)", back: "to have a fever / high temperature (发烧三十八度五)" },
      { front: "咳嗽 (késou)", back: "to cough (both characters have the 口 mouth radical)" },
      { front: "你哪里不舒服？ (Nǐ nǎlǐ bù shūfu?)", back: "Where do you feel unwell? / What seems to be the matter?" },
      { front: "诊所 vs 医院 (zhěnsuǒ vs yīyuàn)", back: "clinic / GP surgery vs hospital" },
      { front: "量体温 (liáng tǐwēn)", back: "to take one's temperature (note 2nd tone liáng!)" },
      { front: "吃药 vs 开药 (chī yào vs kāi yào)", back: "to take medicine (lit. eat medicine) vs to prescribe medicine" },
      { front: "一天三次，一次两片", back: "three times a day, two tablets each time (yì tiān sān cì, yí cì liǎng piàn)" },
      { front: "应该 vs 得 (yīnggāi vs děi)", back: "should vs must / have to (得 before a verb is 3rd tone děi!)" },
      { front: "多喝水，多休息 (duō hē shuǐ, duō xiūxi)", back: "drink more water, rest more (多 goes BEFORE the verb!)" },
      { front: "祝你早日康复！ (Zhù nǐ zǎorì kāngfù!)", back: "Wishing you a speedy recovery! / Get well soon!" },
    ],
    mustKnow: [
      "Can you name at least 12 body parts from head to toe and match them with classifiers like 只, 双, 条, and 张?",
      "Can you ask someone what is wrong using 你怎么了？ and 你哪里不舒服？?",
      "Can you describe aches using Body Part + 疼/痛 (头疼, 嗓子疼, 肚子疼, 牙疼) without inserting 有?",
      "Can you state key illnesses (感冒, 发烧, 咳嗽, 流鼻涕, 过敏) using 了 for a new symptom?",
      "Can you narrate a clinic visit from 量体温 and 检查 to 开药, 打针, and 吃药?",
      "Can you read and write medicine dosages accurately using 一天 [X] 次，一次 [Y] 片?",
      "Can you give positive and negative health advice using 应该, 得 (děi), 多/少 + Verb, and 别 / 不要?",
      "Can you distinguish děi (得 + Verb = must) from its negative 不用 (don't have to)?",
      "Can you write a polite 80–130 character sick-leave note (请假条) to a teacher using 您 and 向…请假?",
    ],
    misconceptions: [
      {
        wrong: "我有感冒，也有发烧。(Translating English 'have a cold / have a fever' literally with 有.)",
        right: "我感冒了，也发烧了。(感冒, 发烧, 头疼, and 咳嗽 act directly as verbs in Mandarin — drop 有!)",
      },
      {
        wrong: "我拿药一天三次。(Using 拿 'pick up/hold' for English 'take medicine'.)",
        right: "我一天吃三次药。(Swallowing medicine is always 吃药 'eat medicine'; 拿药 means collecting a prescription at the pharmacy.)",
      },
      {
        wrong: "你应该喝水多，休息多。(Putting 多 at the end like English 'drink more, rest more'.)",
        right: "你应该多喝水，多休息。(Adverbial 多 and 少 MUST go directly BEFORE the verb!)",
      },
      {
        wrong: "我头疼有点儿。(Putting 有点儿 after the verb/adjective like English 'hurts a bit'.)",
        right: "我有点儿头疼。(有点儿 'a little [unwanted]' always goes BEFORE the verb or adjective.)",
      },
      {
        wrong: "去诊所要穿口罩。(Using 穿 for a face mask.)",
        right: "去诊所要戴口罩。(Face masks, glasses, hats, and scarves are accessories — always use 戴 dài!)",
      },
      {
        wrong: "你好了，今天不得吃药。(Negating 得 děi 'must' as *不得*.)",
        right: "你好了，今天不用吃药。(Negate 得 děi 'have to' with 不用 búyòng 'don't need to'.)",
      },
    ],
    examMistakes: [
      "Dosage multiplication trap in Listening/Reading: if the audio says 一天三次，一次两片 and the question asks 'How many tablets does Mingming take in ONE day?', the answer is 6 (3 × 2), NOT 2 or 3!",
      "Writing 二片药 or 二天 instead of 两片药 and 两天 before measure words.",
      "Addressing a teacher as 你 instead of polite 您 in an IGCSE sick-leave email, or writing *老师王* instead of 王老师.",
      "Confusing 医院 (hospital), 医生 (doctor), and 医药 (medicine) when scanning character options quickly.",
      "Forgetting Golden STPV word order in clinic narratives: write 我今天早上在诊所看病, NEVER *我看病在诊所今天早上*.",
      "Writing *我昨天没去了学校* — remember 没(有) for past negation NEVER co-occurs with completed-action 了 (say 我昨天没去学校)!",
      "Confusing 疼/痛 (ache) with 冷 (cold) or 冬 (winter) — look for the 疒 sickness radical on the top-left of 疼!",
    ],
    mnemonics: [
      {
        topic: "The Sickness Radical 疒 (bìngzìtóu)",
        device: "Picture a bed turned sideways with sweat drops on the left: 病 (illness), 疼 (ache), 痛 (pain)!",
        explanation:
          "Whenever 疒 wraps over the top and left of a character, the word almost certainly relates to illness, pain, or healing (疗, 痊愈).",
      },
      {
        topic: "休 (xiū) in 休息 (to rest)",
        device: "A person (亻) leaning against a shady tree (木) = 休 (rest)!",
        explanation:
          "One of Chinese's clearest compound ideographs (会意字): spot the person resting beside the tree and you will never forget how to write 休息.",
      },
      {
        topic: "药 (yào, medicine)",
        device: "Grass/herbs (艹) on top + 约 (appointment/bind) underneath = herbal medicine!",
        explanation:
          "Traditional Chinese pharmacology (中药) comes from medicinal plants and roots, which is why 药 wears the 艹 grass crown.",
      },
      {
        topic: "The 3 Faces of 得 (de / dé / děi)",
        device: "Verb + 得(de) = degree; 得到(dé) = get an A; 得(děi) + Verb = 'day' to do what you MUST!",
        explanation:
          "Position tells you pronunciation: if 得 stands BEFORE a verb (我得吃药), read it 3rd tone děi ('must / have to').",
      },
    ],
    realWorld: [
      {
        title: "Singapore GP Clinics (诊所) & the Famous 'MC'",
        detail:
          "In Singapore, residential HDB blocks and malls have neighbourhood GP clinics (家庭诊所) and government polyclinics (综合诊所). When unwell students or workers visit, the doctor issues an official Medical Certificate — universally called an MC (病假单, bìngjiàdān) — to submit to school!",
        emoji: "🏥",
      },
      {
        title: "'Drink More Warm Water!' (多喝温水)",
        detail:
          "Across China and Chinese Singaporean households, icy drinks (冰水) are widely avoided when you have a cough or sore throat. Whether you have a cold, headache, or tummy ache, the number-one caring phrase you will hear is 多喝温水 ('drink plenty of warm water')!",
        emoji: "☕",
      },
      {
        title: "Traditional Chinese Medicine Halls (中药行) in Chinatown",
        detail:
          "Walk through Singapore's Chinatown (牛车水) or any heartland mall and you will pass TCM halls like Eu Yan Sang (余仁生), where practitioners check your pulse (把脉) and tongue (看舌头) and talk about 'heatiness' (上火, shànghuǒ — causing sore throats and ulcers in tropical weather!).",
        emoji: "🌿",
      },
      {
        title: "Temperature Checks & Mask Etiquette (量体温与戴口罩)",
        detail:
          "Signs reading 请戴口罩 (Please wear a mask) and 请量体温 (Please check your temperature) are everyday Mandarin across clinics, MRT stations, and hospitals in Singapore, Beijing, and Shanghai.",
        emoji: "😷",
      },
      {
        title: "Morning Exercise in Parks (公园晨练)",
        detail:
          "From Singapore's Botanic Gardens and East Coast Park to Beijing's Temple of Heaven, older residents practise Tai Chi (打太极拳) at 7 a.m. daily, living by the motto 锻炼身体，少生病 ('exercise your body, fall ill less often').",
        emoji: "🧘",
      },
    ],
    videos: [
      {
        title: "Seeing a Doctor in Mandarin Chinese — Symptoms & Clinic Dialogue",
        channel: "Everyday Chinese",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+seeing+a+doctor+illness+symptoms+dialogue",
      },
      {
        title: "Parts of the Body in Chinese (身体部位) for IGCSE & HSK",
        channel: "Chinese Zero to Hero",
        url: "https://www.youtube.com/results?search_query=parts+of+the+body+in+Mandarin+Chinese+HSK+IGCSE",
      },
      {
        title: "How to Use 得 (de vs dé vs děi) in Mandarin Grammar",
        channel: "Grace Mandarin Chinese",
        url: "https://www.youtube.com/results?search_query=Grace+Mandarin+Chinese+how+to+use+de+dei",
      },
      {
        title: "IGCSE Chinese 0547 Health & Sick Leave Writing Tips",
        channel: "Mandarin Click",
        url: "https://www.youtube.com/results?search_query=IGCSE+Chinese+0547+illness+seeing+doctor+sick+leave",
      },
    ],
    formulas: [
      {
        name: "Body-Part Ache Frame",
        formula: "Subject + Body Part + (很 / 有点儿) + 疼 / 痛",
        note: "我嗓子有点儿疼。 Wǒ sǎngzi yǒudiǎnr téng. (My throat is a bit sore — NO 有!)",
      },
      {
        name: "Allergy Frame",
        formula: "Subject + 对 + Allergen + 过敏",
        note: "我对花生过敏。 Wǒ duì huāshēng guòmǐn. (I am allergic to peanuts.)",
      },
      {
        name: "Medicine Dosage Formula",
        formula: "(饭前/饭后吃，) 一天 + X + 次，一次 + Y + 片",
        note: "饭后吃药，一天三次，一次两片。 (After meals, 3 times a day, 2 tablets per dose.)",
      },
      {
        name: "Health Advice (DOs & DON'Ts)",
        formula: "应该 / 得 (děi) + 多/少 + Verb  |  别 / 不要 + Verb",
        note: "你应该多喝温水，别喝冰水。 (You should drink more warm water; don't drink iced water.)",
      },
      {
        name: "Polite Sick-Leave Request",
        formula: "因为 + [Symptom]，所以今天不能上课，想向您请 + [X] + 天病假",
        note: "因为我发烧了，所以今天不能上课，想向您请一天病假。",
      },
    ],
  },
};
