import type { Topic } from "../types";

export const health: Topic = {
  id: "health",
  title: "Health & Body",
  titleChinese: { hanzi: "健康与身体", pinyin: "jiànkāng yǔ shēntǐ" },
  subject: "chinese",
  icon: "🩺",
  color: "red",
  intro:
    "What do you say when your head hurts, your friend has a fever, or the doctor asks what's wrong? This topic gives you the body parts, the illness words and the advice patterns ({{应该|yīnggāi|should}}, {{别|bié|don't}}) to handle a whole trip to the doctor in Mandarin — and to explain why Chinese says 'I head hurts' instead of 'my head hurts'.",
  guide: [
    {
      heading: "Body parts: the 月 'flesh' radical secret",
      discovery: {
        problem:
          "Look closely at these three body words: {{腿|tuǐ|leg}}, {{脚|jiǎo|foot}}, {{肚子|dùzi|tummy}}. Each character has the same shape on its left side: 月. On its own 月 means 'moon' — so why is the moon hiding inside your leg, your foot and your tummy?",
        idea:
          "That 月 isn't the moon at all! It's the ancient character {{肉|ròu|meat, flesh}} squashed thin to fit on the left of a character. So 月 on the left of a character is the **flesh radical** — a signpost meaning 'this word is a body part'. Spot it and you can guess that an unknown character like 脸 (liǎn) or 脑 (nǎo) is probably part of the body too. (It's 'face' and 'brain'.)",
      },
      body:
        "Start from the top and work down:\n\n- {{头|tóu|head}} and {{头发|tóufa|hair}} — hair is literally 'head-hair'\n- {{眼睛|yǎnjing|eye(s)}}, {{耳朵|ěrduo|ear(s)}}, {{鼻子|bízi|nose}}, {{嘴巴|zuǐba|mouth}}, {{牙|yá|tooth/teeth}}\n- {{手|shǒu|hand}}, {{肚子|dùzi|tummy, stomach}}, {{腿|tuǐ|leg}}, {{脚|jiǎo|foot}}\n\nThe whole body is {{身体|shēntǐ|body; health}} — and notice 体 also carries meaning: a person (亻) plus 本 (root) — your body is your 'root'.\n\nChinese doesn't usually mark singular vs plural for body parts: {{眼睛|yǎnjing}} covers 'eye' and 'eyes'. Context does the work.",
      whyItWorks:
        "Chinese characters are built from meaningful parts called radicals. The flesh radical (月-shape, from 肉) tags body words; the sickness radical 疒 (which you'll meet next section) tags illness words. Instead of memorising hundreds of random pictures, you're reading a filing system: the radical tells you the topic, the rest often hints at the sound. That's how Chinese readers guess new characters — and now you can too.",
      strategies: ["Read the radical first", "Guess before you look up"],
      keyPoints: [
        "月 on the LEFT of a character is usually the flesh radical = body part (腿, 脚, 肚)",
        "头发 = 'head-hair'; 身体 = the whole body (and also 'health')",
        "Body parts don't change for plural: 眼睛 = eye or eyes",
        "Two-syllable comfort words: 鼻子, 肚子, 耳朵, 嘴巴 — the 子/朵/巴 adds no extra meaning",
      ],
      vocab: [
        { hanzi: "头", pinyin: "tóu", english: "head", pos: "noun" },
        { hanzi: "头发", pinyin: "tóufa", english: "hair (on the head)", pos: "noun" },
        { hanzi: "眼睛", pinyin: "yǎnjing", english: "eye(s)", pos: "noun" },
        { hanzi: "耳朵", pinyin: "ěrduo", english: "ear(s)", pos: "noun" },
        { hanzi: "鼻子", pinyin: "bízi", english: "nose", pos: "noun" },
        { hanzi: "嘴巴", pinyin: "zuǐba", english: "mouth", pos: "noun" },
        { hanzi: "牙", pinyin: "yá", english: "tooth, teeth", pos: "noun" },
        { hanzi: "手", pinyin: "shǒu", english: "hand", pos: "noun" },
        { hanzi: "肚子", pinyin: "dùzi", english: "tummy, stomach", pos: "noun" },
        {
          hanzi: "身体",
          pinyin: "shēntǐ",
          english: "body; health",
          pos: "noun",
          example: { hanzi: "我身体很好。", pinyin: "Wǒ shēntǐ hěn hǎo.", english: "I'm in good health." },
        },
      ],
      patterns: [
        {
          pattern: "我的 + body part + 很 + adjective",
          example: {
            hanzi: "我的头发很长。",
            pinyin: "Wǒ de tóufa hěn cháng.",
            english: "My hair is very long.",
          },
          note: "的 IS used for plain description — but watch what happens when something hurts (next section!).",
        },
      ],
    },
    {
      heading: "Saying what hurts: 头疼 and the missing 的",
      discovery: {
        problem:
          "An English speaker wants to say 'my head hurts' and writes {{我的头是疼|✗ wǒ de tóu shì téng}} — translating 'my' (我的), 'is' (是) and 'hurting' (疼) word by word. A Chinese friend crosses out TWO words and writes just three characters: {{我头疼|wǒ tóu téng}}. Which two words went, and why doesn't Chinese need them?",
        idea:
          "Out went {{的|de}} and {{是|shì}}. Chinese frames it as a **topic + comment**: 'Me — head hurts.' The sentence zooms in from the person to the body part, so 的 is unnecessary (your head is obviously yours), and {{疼|téng|to hurt, ache}} is already a verb, so 是 is not just unnecessary — it's wrong, exactly like ages (我十二岁, never 我是十二岁).",
      },
      body:
        "The magic frame is **person + body part + {{疼|téng|hurts}}**:\n\n- {{我头疼。|Wǒ tóu téng.|My head hurts.}}\n- {{我肚子疼。|Wǒ dùzi téng.|My tummy hurts.}}\n- {{他牙疼。|Tā yá téng.|His tooth hurts.}}\n\n{{痛|tòng|to hurt, ache}} means the same as 疼 — you'll hear both, and 'not painful' is {{不疼|bù téng}} (bù, because téng is a rising tone).\n\nGeneral illness words:\n- {{生病|shēngbìng|to be ill}} — {{我生病了。|Wǒ shēngbìng le.|I've fallen ill.}} The {{了|le}} signals the new situation.\n- {{感冒|gǎnmào|to have a cold}}, {{发烧|fāshāo|to have a fever}}, {{咳嗽|késou|to cough}}\n- {{不舒服|bù shūfu|to feel unwell}} — literally 'not comfortable', the polite all-rounder\n- {{累|lèi|tired}} — {{我很累。|Wǒ hěn lèi.|I'm very tired.}}",
      whyItWorks:
        "Why 'me — head hurts' instead of 'my head hurts'? Chinese loves the topic–comment shape: name the big thing first (我), then comment on part of it (头疼). Since the head belongs to the topic person, adding 的 sounds as odd as English 'my head of mine'. And 疼 is a verb that means 'hurts' all by itself, so it needs no 是 — the same missing-verb logic you met with ages. One principle, two grammar points.",
      strategies: ["Topic first, then comment", "Spot what's missing on purpose"],
      keyPoints: [
        "Person + body part + 疼: 我头疼, 他牙疼 — no 的, no 是",
        "我的头是疼 ✗ is the classic word-for-word translation error",
        "疼 and 痛 both mean 'hurt'; 不疼 uses bù (no tone change before 2nd tone)",
        "生病了 / 感冒了 — 了 marks the new situation ('have come down with…')",
        "不舒服 is the polite way to say you feel unwell",
      ],
      vocab: [
        {
          hanzi: "疼",
          pinyin: "téng",
          english: "to hurt, to ache",
          pos: "verb",
          example: { hanzi: "我头疼。", pinyin: "Wǒ tóu téng.", english: "My head hurts." },
        },
        { hanzi: "痛", pinyin: "tòng", english: "to hurt, to ache (same as 疼)", pos: "verb" },
        { hanzi: "生病", pinyin: "shēngbìng", english: "to be ill, to get sick", pos: "verb" },
        { hanzi: "感冒", pinyin: "gǎnmào", english: "to have a cold; a cold", pos: "verb/noun" },
        { hanzi: "发烧", pinyin: "fāshāo", english: "to have a fever", pos: "verb" },
        { hanzi: "咳嗽", pinyin: "késou", english: "to cough", pos: "verb" },
        { hanzi: "不舒服", pinyin: "bù shūfu", english: "to feel unwell, uncomfortable", pos: "adjective" },
        { hanzi: "累", pinyin: "lèi", english: "tired", pos: "adjective" },
      ],
      patterns: [
        {
          pattern: "Person + body part + 疼",
          example: { hanzi: "我肚子疼。", pinyin: "Wǒ dùzi téng.", english: "My tummy hurts." },
          note: "No 的 between person and body part, and no 是 before 疼 — 疼 is the verb.",
        },
        {
          pattern: "Person + 生病 / 感冒 + 了",
          example: { hanzi: "妹妹感冒了。", pinyin: "Mèimei gǎnmào le.", english: "My little sister has caught a cold." },
          note: "了 signals the new situation — she wasn't ill before, now she is.",
        },
      ],
    },
    {
      heading: "At the doctor's: 你怎么了？",
      discovery: {
        problem:
          "In Chinese, 'to see a doctor' is {{看医生|kàn yīshēng}} — literally 'look-at doctor' — or even {{看病|kànbìng|to see a doctor}}, literally 'look-at illness'. And when the doctor treats you, THAT is also 看病! How can the same two characters mean both 'visit the doctor' and 'treat a patient'?",
        idea:
          "看病 just means 'deal with the illness by looking' — whoever is doing the looking. The patient 看病 (goes to get the illness seen); the doctor 给病人看病 (looks at the illness for the patient). Chinese verbs are direction-neutral little machines; context supplies the who-does-what.",
      },
      body:
        "The doctor's opening question is one you must recognise instantly: {{你怎么了？|Nǐ zěnme le?|What's wrong? / What happened to you?}}\n\nA typical clinic dialogue:\n\n- 医生: {{你怎么了？|Nǐ zěnme le?|What's wrong?}}\n- 我: {{我头疼，还发烧。|Wǒ tóu téng, hái fāshāo.|My head hurts, and I have a fever too.}}\n- 医生: {{你感冒了。要吃药，多休息。|Nǐ gǎnmào le. Yào chī yào, duō xiūxi.|You've caught a cold. You need to take medicine and rest more.}}\n\nKey moves:\n- {{医院|yīyuàn|hospital}} is the place; {{医生|yīshēng|doctor}} is the person — both share {{医|yī|medical}}\n- 'Take medicine' is {{吃药|chī yào}} — literally 'EAT medicine', never 喝 (drink)\n- {{休息|xiūxi|to rest}} is the doctor's favourite word\n- Report advice with {{医生说…|yīshēng shuō…|the doctor says…}}: {{医生说我要多休息。|Yīshēng shuō wǒ yào duō xiūxi.|The doctor says I need to rest more.}}",
      whyItWorks:
        "Why does 怎么了 work without naming any illness? {{怎么|zěnme|how/what}} asks 'in what way…?' and {{了|le}} points at a changed situation. Together: 'what has changed with you?' — a perfectly open question, which is why it covers everything from a headache to a broken bike. Question words sit in the answer's seat, so you answer by simply replacing 怎么了 with your symptom: 你怎么了？ → 我头疼。",
      strategies: ["Learn the dialogue as a frame, swap the symptom", "Question words sit in the answer's seat"],
      keyPoints: [
        "你怎么了？ = What's wrong? — answer it by stating your symptom",
        "看医生 / 看病 = to see a doctor (literally 'look at doctor / look at illness')",
        "吃药 = take medicine — Chinese EATS medicine, never drinks it",
        "医生 (doctor) works at the 医院 (hospital); both contain 医",
        "医生说… reports the doctor's advice",
      ],
      vocab: [
        { hanzi: "怎么了", pinyin: "zěnme le", english: "what's wrong?", pos: "question phrase" },
        { hanzi: "医生", pinyin: "yīshēng", english: "doctor", pos: "noun" },
        { hanzi: "医院", pinyin: "yīyuàn", english: "hospital", pos: "noun" },
        {
          hanzi: "看医生",
          pinyin: "kàn yīshēng",
          english: "to see a doctor",
          pos: "verb phrase",
          example: { hanzi: "我要去看医生。", pinyin: "Wǒ yào qù kàn yīshēng.", english: "I need to go and see a doctor." },
        },
        { hanzi: "看病", pinyin: "kànbìng", english: "to see a doctor / treat a patient", pos: "verb phrase" },
        { hanzi: "药", pinyin: "yào", english: "medicine", pos: "noun" },
        { hanzi: "吃药", pinyin: "chī yào", english: "to take medicine", pos: "verb phrase" },
        { hanzi: "休息", pinyin: "xiūxi", english: "to rest", pos: "verb" },
      ],
      patterns: [
        {
          pattern: "你怎么了？ → symptom",
          example: { hanzi: "你怎么了？我牙疼。", pinyin: "Nǐ zěnme le? Wǒ yá téng.", english: "What's wrong? My tooth hurts." },
          note: "Answer by replacing the question with your symptom — no yes/no needed.",
        },
        {
          pattern: "医生说 + advice",
          example: {
            hanzi: "医生说我要吃药。",
            pinyin: "Yīshēng shuō wǒ yào chī yào.",
            english: "The doctor says I need to take medicine.",
          },
        },
      ],
    },
    {
      heading: "Giving advice: 应该, 别 and the 多/少 trick",
      discovery: {
        problem:
          "A doctor tells you: {{多喝水|duō hē shuǐ}}. Word by word that's 'more — drink — water'. English would say 'drink MORE WATER', putting 'more' next to 'water'. Chinese puts {{多|duō|more}} in front of the VERB. So without being taught it, what should {{少吃糖|shǎo chī táng}} mean? And {{多睡觉|duō shuìjiào}}?",
        idea:
          "少吃糖 = 'less-eat sugar' → eat less sugar; 多睡觉 = 'more-sleep' → sleep more. **多/少 + verb** turns any action up or down like a volume dial. You can now decode advice you've never seen: 多运动, 少喝可乐, 多吃蔬菜 — the pattern does the work, not memory.",
      },
      body:
        "Three levels of advice, from gentle to blunt:\n\n1. {{应该|yīnggāi|should}} — {{你应该多休息。|Nǐ yīnggāi duō xiūxi.|You should rest more.}}\n2. {{要|yào|need to, must}} — {{你要吃药。|Nǐ yào chī yào.|You need to take your medicine.}}\n3. {{别|bié|don't}} — {{别吃糖！|Bié chī táng!|Don't eat sweets!}}\n\n{{别|bié}} + verb is the quick way to say 'don't…' — it's actually a squashed-together {{不要|bú yào|don't (must not)}}, which is why both {{别担心|bié dānxīn|don't worry}} and 不要担心 work.\n\nStack the pieces for doctor-quality advice:\n\n- {{你应该多喝水，多休息。|Nǐ yīnggāi duō hē shuǐ, duō xiūxi.|You should drink more water and rest more.}}\n- {{别喝可乐，少吃糖。|Bié hē kělè, shǎo chī táng.|Don't drink cola, and eat less sugar.}}",
      whyItWorks:
        "Why does 多 attach to the verb and not the noun? Chinese treats 多/少 here as adverbs answering 'how should you DO it?' — do-more of the drinking, do-less of the eating. English glues 'more/less' to the thing (more water); Chinese dials the action (more-drink). Once you know which slot the word lives in, every new advice phrase unpacks itself — that's why pattern-position beats word-for-word translation.",
      strategies: ["Decode by slot, not by translation", "Build, don't memorise"],
      keyPoints: [
        "应该 (should) < 要 (must) < 别 (don't) — three strengths of advice",
        "多/少 go BEFORE the verb: 多喝水 = drink more water, 少吃糖 = eat less sugar",
        "别 + verb = don't…; it's short for 不要",
        "Pinyin sandhi: 别 is bié; 不要 is bú yào (bù turns bú before a 4th tone)",
        "Chain advice with commas: 你应该多喝水，多休息",
      ],
      vocab: [
        {
          hanzi: "应该",
          pinyin: "yīnggāi",
          english: "should, ought to",
          pos: "modal verb",
          example: { hanzi: "你应该多休息。", pinyin: "Nǐ yīnggāi duō xiūxi.", english: "You should rest more." },
        },
        { hanzi: "要", pinyin: "yào", english: "need to, must; to want", pos: "modal verb" },
        { hanzi: "别", pinyin: "bié", english: "don't (do something)", pos: "adverb" },
        { hanzi: "多", pinyin: "duō", english: "more; many", pos: "adverb/adjective" },
        { hanzi: "少", pinyin: "shǎo", english: "less; few", pos: "adverb/adjective" },
        { hanzi: "喝水", pinyin: "hē shuǐ", english: "to drink water", pos: "verb phrase" },
        { hanzi: "糖", pinyin: "táng", english: "sugar; sweets", pos: "noun" },
        { hanzi: "担心", pinyin: "dānxīn", english: "to worry", pos: "verb" },
      ],
      patterns: [
        {
          pattern: "你应该 + 多/少 + verb (+ object)",
          example: {
            hanzi: "你应该多喝水。",
            pinyin: "Nǐ yīnggāi duō hē shuǐ.",
            english: "You should drink more water.",
          },
          note: "多/少 sit in front of the verb — 'more-drink water', not 'drink more-water'.",
        },
        {
          pattern: "别 + verb (+ object)",
          example: { hanzi: "别吃糖！", pinyin: "Bié chī táng!", english: "Don't eat sweets!" },
          note: "别 = 不要. Softer version: 你不应该吃糖.",
        },
      ],
    },
    {
      heading: "Staying healthy: 对身体好",
      discovery: {
        problem:
          "Here's a four-character health slogan every Chinese child knows: {{早睡早起|zǎo shuì zǎo qǐ}}. You know {{早|zǎo|early}} from 早上好, {{睡|shuì}} from 睡觉 (sleep), and 起 means 'get up'. Decode it — and guess why the full saying ends {{…身体好|…shēntǐ hǎo}}.",
        idea:
          "早睡早起 = 'early sleep, early rise' — early to bed, early to rise! The full saying 早睡早起身体好 adds 'the body is good', i.e. it keeps you healthy. Four-character sayings compress a whole sentence of wisdom — and you just read one with vocabulary you already had.",
      },
      body:
        "To say something is good FOR you, use **…{{对|duì|towards, for}}身体好**:\n\n- {{运动对身体好。|Yùndòng duì shēntǐ hǎo.|Exercise is good for your body.}}\n- {{糖对牙不好。|Táng duì yá bù hǎo.|Sugar is bad for your teeth.}} — flip 好 to 不好 to warn against something (and note it's bù hǎo: 不 only changes to bú before a 4th tone).\n\nHealthy-habit verbs: {{运动|yùndòng|to exercise; sport}}, {{锻炼|duànliàn|to work out, train}}, {{跑步|pǎobù|to run, go running}}, {{游泳|yóuyǒng|to swim}}, {{睡觉|shuìjiào|to sleep}}.\n\nAdd {{每天|měitiān|every day}} at the front for routines: {{我每天跑步。|Wǒ měitiān pǎobù.|I run every day.}}\n\nLight feelings check-in — states take {{很|hěn}} (remember, no 是):\n- {{我很开心。|Wǒ hěn kāixīn.|I'm happy.}} / {{我很高兴。|Wǒ hěn gāoxìng.|I'm glad.}}\n- {{我很饿。|Wǒ hěn è.|I'm hungry.}} / {{我很渴。|Wǒ hěn kě.|I'm thirsty.}}",
      whyItWorks:
        "…对身体好 literally reads 'towards the body, good' — 对 aims the goodness at a target. Swap the target and the pattern travels: 对眼睛好 (good for your eyes), 对牙不好 (bad for your teeth). And why 很 with feelings? Chinese adjectives link straight to the subject without 是; a bare adjective (我饿) sounds like a comparison, so 很 fills the rhythm — here it barely means 'very' at all.",
      strategies: ["Reuse old bricks in new walls", "Swap the target, keep the frame"],
      keyPoints: [
        "X 对身体好 = X is good for you; X 对…不好 = bad for…",
        "每天 + verb = daily routine: 我每天游泳",
        "Feelings use 很 + adjective, never 是: 我很累, 我很开心",
        "早睡早起(身体好) = early to bed, early to rise (keeps you healthy)",
        "运动/锻炼 = exercise; 跑步, 游泳, 睡觉 are your core habit verbs",
      ],
      vocab: [
        {
          hanzi: "运动",
          pinyin: "yùndòng",
          english: "to exercise; sport",
          pos: "verb/noun",
          example: { hanzi: "运动对身体好。", pinyin: "Yùndòng duì shēntǐ hǎo.", english: "Exercise is good for the body." },
        },
        { hanzi: "锻炼", pinyin: "duànliàn", english: "to work out, to train", pos: "verb" },
        { hanzi: "跑步", pinyin: "pǎobù", english: "to run, to go running", pos: "verb" },
        { hanzi: "游泳", pinyin: "yóuyǒng", english: "to swim", pos: "verb" },
        { hanzi: "睡觉", pinyin: "shuìjiào", english: "to sleep", pos: "verb" },
        { hanzi: "每天", pinyin: "měitiān", english: "every day", pos: "time word" },
        { hanzi: "健康", pinyin: "jiànkāng", english: "healthy; health", pos: "adjective/noun" },
        { hanzi: "开心", pinyin: "kāixīn", english: "happy", pos: "adjective" },
        { hanzi: "饿", pinyin: "è", english: "hungry", pos: "adjective" },
        { hanzi: "渴", pinyin: "kě", english: "thirsty", pos: "adjective" },
      ],
      patterns: [
        {
          pattern: "X + 对身体好 / 对…不好",
          example: { hanzi: "游泳对身体好。", pinyin: "Yóuyǒng duì shēntǐ hǎo.", english: "Swimming is good for you." },
          note: "对 aims the goodness at a target — swap 身体 for 眼睛, 牙…",
        },
        {
          pattern: "Subject + 每天 + verb",
          example: { hanzi: "我每天锻炼。", pinyin: "Wǒ měitiān duànliàn.", english: "I work out every day." },
          note: "Time words come before the verb, never at the end.",
        },
        {
          pattern: "Subject + 很 + feeling adjective",
          example: { hanzi: "我很渴。", pinyin: "Wǒ hěn kě.", english: "I'm thirsty." },
          note: "No 是! 很 links the feeling; it barely means 'very' here.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "身体", pinyin: "shēntǐ", english: "body; health" },
      { hanzi: "头", pinyin: "tóu", english: "head" },
      { hanzi: "头发", pinyin: "tóufa", english: "hair" },
      { hanzi: "眼睛", pinyin: "yǎnjing", english: "eye(s)" },
      { hanzi: "耳朵", pinyin: "ěrduo", english: "ear(s)" },
      { hanzi: "鼻子", pinyin: "bízi", english: "nose" },
      { hanzi: "嘴巴", pinyin: "zuǐba", english: "mouth" },
      { hanzi: "牙", pinyin: "yá", english: "tooth, teeth" },
      { hanzi: "手", pinyin: "shǒu", english: "hand" },
      { hanzi: "脚", pinyin: "jiǎo", english: "foot" },
      { hanzi: "腿", pinyin: "tuǐ", english: "leg" },
      { hanzi: "肚子", pinyin: "dùzi", english: "tummy, stomach" },
      { hanzi: "疼", pinyin: "téng", english: "to hurt, to ache" },
      { hanzi: "生病", pinyin: "shēngbìng", english: "to be ill" },
      { hanzi: "感冒", pinyin: "gǎnmào", english: "to have a cold" },
      { hanzi: "发烧", pinyin: "fāshāo", english: "to have a fever" },
      { hanzi: "咳嗽", pinyin: "késou", english: "to cough" },
      { hanzi: "不舒服", pinyin: "bù shūfu", english: "to feel unwell" },
      { hanzi: "累", pinyin: "lèi", english: "tired" },
      { hanzi: "怎么了", pinyin: "zěnme le", english: "what's wrong?" },
      { hanzi: "医生", pinyin: "yīshēng", english: "doctor" },
      { hanzi: "医院", pinyin: "yīyuàn", english: "hospital" },
      { hanzi: "看医生", pinyin: "kàn yīshēng", english: "to see a doctor" },
      { hanzi: "吃药", pinyin: "chī yào", english: "to take medicine" },
      { hanzi: "休息", pinyin: "xiūxi", english: "to rest" },
      { hanzi: "应该", pinyin: "yīnggāi", english: "should" },
      { hanzi: "别", pinyin: "bié", english: "don't…" },
      { hanzi: "多", pinyin: "duō", english: "more" },
      { hanzi: "少", pinyin: "shǎo", english: "less" },
      { hanzi: "运动", pinyin: "yùndòng", english: "to exercise; sport" },
      { hanzi: "跑步", pinyin: "pǎobù", english: "to run" },
      { hanzi: "游泳", pinyin: "yóuyǒng", english: "to swim" },
      { hanzi: "睡觉", pinyin: "shuìjiào", english: "to sleep" },
      { hanzi: "每天", pinyin: "měitiān", english: "every day" },
      { hanzi: "健康", pinyin: "jiànkāng", english: "healthy; health" },
    ],
    patterns: [
      {
        pattern: "Person + body part + 疼",
        example: { hanzi: "我头疼。", pinyin: "Wǒ tóu téng.", english: "My head hurts." },
        note: "No 的, no 是 — 疼 is the verb.",
      },
      {
        pattern: "你怎么了？ → symptom",
        example: { hanzi: "你怎么了？我发烧了。", pinyin: "Nǐ zěnme le? Wǒ fāshāo le.", english: "What's wrong? I have a fever." },
      },
      {
        pattern: "你应该 + 多/少 + verb (+ object)",
        example: { hanzi: "你应该多喝水。", pinyin: "Nǐ yīnggāi duō hē shuǐ.", english: "You should drink more water." },
      },
      {
        pattern: "别 + verb (+ object)",
        example: { hanzi: "别吃糖！", pinyin: "Bié chī táng!", english: "Don't eat sweets!" },
      },
      {
        pattern: "X + 对身体好",
        example: { hanzi: "运动对身体好。", pinyin: "Yùndòng duì shēntǐ hǎo.", english: "Exercise is good for you." },
      },
      {
        pattern: "Subject + 每天 + verb",
        example: { hanzi: "我每天跑步。", pinyin: "Wǒ měitiān pǎobù.", english: "I run every day." },
      },
    ],
    mnemonics: [
      {
        hanzi: "疼",
        tip: "The 'sick-bed' radical 疒 (a person lying on a bed) over 冬 (winter) — aching in bed through the winter. Any character wearing 疒 is illness-related: 病, 疼, 瘦.",
      },
      {
        hanzi: "药",
        tip: "Grass radical 艹 on top — the first medicines were herbs and plants. That's why you 吃 (eat) 药, like eating a plant.",
      },
      {
        hanzi: "休",
        tip: "A person 亻 leaning against a tree 木 — resting in the shade. 休息 = rest.",
      },
      {
        hanzi: "腿",
        tip: "月 on the left = the flesh radical (squashed 肉), so 腿 must be a body part — it's your leg. Same clue in 脚, 肚, 脸, 脑.",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "hlth-quiz-mcq-q01",
        question: "What does {{眼睛|yǎnjing}} mean?",
        options: ["Nose", "Ear(s)", "Eye(s)", "Mouth"],
        answerIndex: 2,
        explanation:
          "{{眼睛|yǎnjing}} = eye(s). {{鼻子|bízi}} is nose, {{耳朵|ěrduo}} is ear, {{嘴巴|zuǐba}} is mouth. Both characters of 眼睛 contain 目, the eye radical — another radical clue!",
        guideRef: "Body parts: the 月 'flesh' radical secret",
        difficulty: "warmup",
      },
      {
        id: "hlth-quiz-mcq-q02",
        question:
          "You meet the unknown character 脖 (bó). Using the radical discovery, what is it most likely to be?",
        options: ["A kind of moon festival", "A body part", "A number", "A colour"],
        answerIndex: 1,
        explanation:
          "The 月 shape on the left is the flesh radical (squashed {{肉|ròu|flesh}}), which tags body parts — 脖 is your neck. The radical, not memory, gives the answer.",
        guideRef: "Body parts: the 月 'flesh' radical secret",
        difficulty: "core",
        strategy: "Read the radical first",
        hints: [
          "Look at the left-hand side of the character. Where have you seen that shape — 腿, 脚, 肚…?",
          "月 on the left is not the moon; it's squashed 肉 (flesh).",
        ],
      },
      {
        id: "hlth-quiz-mcq-q03",
        question: "Which sentence correctly says 'My head hurts'?",
        options: [
          "{{我的头是疼。|Wǒ de tóu shì téng.}}",
          "{{我头疼。|Wǒ tóu téng.}}",
          "{{我是头疼。|Wǒ shì tóu téng.}}",
          "{{头疼我。|Tóu téng wǒ.}}",
        ],
        answerIndex: 1,
        explanation:
          "The frame is person + body part + {{疼|téng}}: 我头疼. No {{的|de}} (your head is obviously yours) and no {{是|shì}} (疼 is already the verb). 我的头是疼 is the word-for-word translation trap.",
        guideRef: "Saying what hurts: 头疼 and the missing 的",
        difficulty: "core",
        hints: [
          "Two English words get deleted on the way into Chinese. Which?",
          "Think topic + comment: 'Me — head hurts.'",
        ],
      },
      {
        id: "hlth-quiz-mcq-q04",
        question: "The doctor asks {{你怎么了？|Nǐ zěnme le?}} What is she asking?",
        options: ["How old are you?", "What's your name?", "What's wrong?", "Where do you live?"],
        answerIndex: 2,
        explanation:
          "{{怎么|zěnme}} asks 'how/what' and {{了|le}} points at a changed situation — 'what has happened to you?', i.e. what's wrong. Answer it with a symptom: 我头疼.",
        guideRef: "At the doctor's: 你怎么了？",
        difficulty: "warmup",
      },
      {
        id: "hlth-quiz-mcq-q05",
        question: "What does {{发烧|fāshāo}} mean?",
        options: ["To cough", "To have a fever", "To catch a cold", "To rest"],
        answerIndex: 1,
        explanation:
          "{{发烧|fāshāo}} literally means 'emit heat' — to have a fever. {{咳嗽|késou}} is cough, {{感冒|gǎnmào}} is a cold, {{休息|xiūxi}} is rest.",
        guideRef: "Saying what hurts: 头疼 and the missing 的",
        difficulty: "warmup",
      },
      {
        id: "hlth-quiz-mcq-q06",
        question: "In Chinese you 'take medicine' with which verb?",
        options: [
          "{{喝药|hē yào|drink medicine}}",
          "{{吃药|chī yào|eat medicine}}",
          "{{看药|kàn yào|look at medicine}}",
          "{{做药|zuò yào|make medicine}}",
        ],
        answerIndex: 1,
        explanation:
          "Chinese EATS medicine: {{吃药|chī yào}}. The mnemonic helps — 药 wears the grass radical 艹 because early medicine was herbs, and you eat plants. 喝药 is only for liquid medicine and isn't the set phrase to learn.",
        guideRef: "At the doctor's: 你怎么了？",
        difficulty: "warmup",
      },
      {
        id: "hlth-quiz-mcq-q07",
        question: "Your friend has a fever. Which is the best advice sentence?",
        options: [
          "{{你应该多休息。|Nǐ yīnggāi duō xiūxi.}}",
          "{{你应该少休息。|Nǐ yīnggāi shǎo xiūxi.}}",
          "{{别休息！|Bié xiūxi!}}",
          "{{你休息吗？|Nǐ xiūxi ma?}}",
        ],
        answerIndex: 0,
        explanation:
          "{{应该|yīnggāi}} + {{多|duō}} + verb = 'should do more of it' → you should rest more. 少休息 tells them to rest LESS, 别休息 forbids resting, and 你休息吗 just asks a question.",
        guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
        difficulty: "core",
        hints: ["多 turns the action up; 少 turns it down; 别 bans it."],
      },
      {
        id: "hlth-quiz-mcq-q08",
        question:
          "You have never been taught {{少喝可乐|shǎo hē kělè}} ({{可乐|kělè}} = cola). Using the 多/少 pattern, what must it mean?",
        options: [
          "Drink a little cola",
          "Drink less cola",
          "Don't drink any cola",
          "Cola is not tasty",
        ],
        answerIndex: 1,
        explanation:
          "少 + verb dials the action down: 'less-drink cola' → drink less cola. It doesn't ban cola completely — that would be {{别喝可乐|bié hē kělè}}. You decoded an unseen phrase from the slot 少 sits in.",
        guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
        difficulty: "challenge",
        strategy: "Decode by slot, not by translation",
        hints: [
          "Break it into slots: 少 + 喝 + 可乐.",
          "少 before a verb means 'do less of it' — compare 多喝水.",
        ],
      },
      {
        id: "hlth-quiz-mcq-q09",
        question:
          "A patient tells the doctor: {{我咳嗽，头疼，还发烧。|Wǒ késou, tóu téng, hái fāshāo.}} What will the doctor most likely say?",
        options: [
          "{{你感冒了。|Nǐ gǎnmào le.}}",
          "{{你牙疼。|Nǐ yá téng.}}",
          "{{你很高兴。|Nǐ hěn gāoxìng.}}",
          "{{你很渴。|Nǐ hěn kě.}}",
        ],
        answerIndex: 0,
        explanation:
          "Cough + headache + fever are the classic symptoms of a cold, so the doctor concludes {{你感冒了|nǐ gǎnmào le|you've caught a cold}} — the 了 marks the new situation. Toothache wasn't mentioned, and 高兴/渴 (happy/thirsty) don't fit at all. This is inference: no option repeats the patient's words.",
        guideRef: "At the doctor's: 你怎么了？",
        difficulty: "challenge",
        strategy: "Learn the dialogue as a frame, swap the symptom",
        hints: [
          "Decode the three symptoms first: 咳嗽, 头疼, 发烧.",
          "Which single illness in this topic causes all three?",
        ],
      },
      {
        id: "hlth-quiz-mcq-q10",
        question: "Which sentence means 'Swimming is good for you (good for the body)'?",
        options: [
          "{{游泳很身体好。|Yóuyǒng hěn shēntǐ hǎo.}}",
          "{{游泳对身体好。|Yóuyǒng duì shēntǐ hǎo.}}",
          "{{游泳是身体好。|Yóuyǒng shì shēntǐ hǎo.}}",
          "{{身体对游泳好。|Shēntǐ duì yóuyǒng hǎo.}}",
        ],
        answerIndex: 1,
        explanation:
          "The frame is X + {{对|duì|towards/for}} + target + 好: 游泳对身体好 aims the goodness at the body. 很 and 是 can't glue two nouns like this, and 身体对游泳好 aims it backwards — 'the body is good for swimming'.",
        guideRef: "Staying healthy: 对身体好",
        difficulty: "core",
        hints: ["对 points the goodness at its target — which word should be the target?"],
      },
    ],
    qa: [
      {
        id: "hlth-quiz-qa-q01",
        question: "Translate into English: {{我肚子疼，很不舒服。|Wǒ dùzi téng, hěn bù shūfu.}}",
        modelAnswer:
          "My tummy (stomach) hurts, and I feel very unwell (uncomfortable).",
        markScheme: [
          "{{肚子|dùzi}} identified as tummy/stomach",
          "{{疼|téng}} translated as hurts/aches",
          "{{不舒服|bù shūfu}} = feel unwell / not comfortable",
        ],
        commonError:
          "Translating 我肚子疼 as 'I stomach hurt' or hunting for a missing 'my' — remember Chinese frames it as topic + comment, so English needs to ADD 'my' going the other way.",
        guideRef: "Saying what hurts: 头疼 and the missing 的",
        difficulty: "warmup",
        hints: ["肚子 is a body part in the middle of you; 疼 is what body parts do when something is wrong."],
      },
      {
        id: "hlth-quiz-qa-q02",
        question:
          "Write in Chinese (characters or pinyin): 'I've caught a cold. My head hurts and I have a fever.'",
        modelAnswer:
          "{{我感冒了。我头疼，还发烧。|Wǒ gǎnmào le. Wǒ tóu téng, hái fāshāo.}} (还/也 both acceptable for 'and…too'.)",
        markScheme: [
          "{{感冒了|gǎnmào le}} with 了 for the new situation",
          "{{我头疼|wǒ tóu téng}} — no 的, no 是",
          "{{发烧|fāshāo}} for the fever, joined with 还 or 也 or a comma",
        ],
        commonError: "我的头是疼 ✗ — 的 and 是 must both go; 疼 is the verb.",
        guideRef: "Saying what hurts: 头疼 and the missing 的",
        difficulty: "core",
        hints: [
          "Three pieces: caught a cold + head hurts + fever.",
          "'Caught' = a new situation. Which little word marks that?",
          "Head hurts: person + body part + 疼, nothing in between.",
        ],
        solutions: [
          {
            label: "Symptom list (recommended)",
            steps: [
              "New situation first: 我感冒了。 (了 = this has just become true.)",
              "Then the frame person + body part + 疼: 我头疼.",
              "Add the fever with 还 ('additionally'): 还发烧。",
              "Result: 我感冒了。我头疼，还发烧。",
            ],
          },
          {
            label: "Doctor-dialogue echo",
            steps: [
              "Imagine answering 你怎么了？ — you'd list symptoms in order.",
              "Reuse the clinic dialogue line from the guide: 我头疼，还发烧, and put the diagnosis 我感冒了 in front.",
              "Same sentence, built from a remembered frame instead of word-by-word translation.",
            ],
          },
        ],
      },
      {
        id: "hlth-quiz-qa-q03",
        question:
          "Read the dialogue, then answer in English.\n\n- 医生: {{你怎么了？|Nǐ zěnme le?}}\n- 小明: {{我牙疼，不想吃饭。|Wǒ yá téng, bù xiǎng chīfàn.}}\n- 医生: {{你要少吃糖，多喝水。别担心！|Nǐ yào shǎo chī táng, duō hē shuǐ. Bié dānxīn!}}\n\n(a) What is Xiaoming's problem? (b) Give BOTH pieces of the doctor's advice. (c) What does {{别担心|bié dānxīn}} mean?",
        modelAnswer:
          "(a) His tooth hurts (toothache), so he doesn't want to eat. (b) Eat less sugar/sweets and drink more water. (c) Don't worry.",
        markScheme: [
          "Toothache / tooth hurts ({{牙疼|yá téng}})",
          "Advice 1: eat LESS sugar ({{少吃糖|shǎo chī táng}})",
          "Advice 2: drink MORE water ({{多喝水|duō hē shuǐ}})",
          "别担心 = don't worry (别 = don't)",
        ],
        commonError:
          "Reversing 多/少: 少吃糖 is 'eat LESS sugar', not 'eat a little sugar (as a treat)' — 少 dials the action down.",
        guideRef: "At the doctor's: 你怎么了？",
        difficulty: "core",
        hints: [
          "Find the body part before 疼 in Xiaoming's line.",
          "The advice line has two verb phrases — one with 少, one with 多.",
        ],
      },
      {
        id: "hlth-quiz-qa-q04",
        question:
          "Your friend messages you: {{我生病了，发烧，很累。|Wǒ shēngbìng le, fāshāo, hěn lèi.}} Write a reply in Chinese giving TWO pieces of advice — one with 应该 and one with 别.",
        modelAnswer:
          "{{你应该多休息，多喝水。别去学校，别玩电脑！|Nǐ yīnggāi duō xiūxi, duō hē shuǐ. Bié qù xuéxiào, bié wán diànnǎo!}} (Any sensible 应该-advice + 别-advice earns the marks, e.g. 你应该看医生 / 别吃糖.)",
        markScheme: [
          "One piece of advice with {{应该|yīnggāi}} + verb phrase (e.g. 应该多休息 / 应该看医生)",
          "One piece with {{别|bié}} + verb phrase (e.g. 别去学校)",
          "Advice fits the illness (rest, water, doctor, medicine — not 多吃糖!)",
          "Correct order: 多/少 before the verb",
        ],
        commonError:
          "Putting 多 after the verb (喝多水 ✗) — 多/少 sit BEFORE the verb: 多喝水.",
        guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
        difficulty: "challenge",
        strategy: "Build, don't memorise",
        hints: [
          "Recipe: 你应该 + (多/少 +) verb, then 别 + verb.",
          "Steal the doctor's own advice from this topic: rest, water, medicine.",
          "Check every 多 is in front of its verb.",
        ],
        solutions: [
          {
            label: "Doctor's toolkit (recommended)",
            steps: [
              "List the stock remedies from the guide: 多休息, 多喝水, 吃药, 看医生.",
              "Pick one and mount it on 你应该…: 你应该多休息。",
              "For 别, ban something a feverish person shouldn't do: 别去学校。",
              "Combine: 你应该多休息，别去学校！",
            ],
          },
          {
            label: "Turn the symptoms around",
            steps: [
              "Friend says 很累 (very tired) → the opposite of tired is rest → 你应该多睡觉/多休息。",
              "Friend says 发烧 (fever) → fevers need fluids and no running about → 别跑步，多喝水。",
              "Each symptom points to its own advice — this is how the doctor thinks in 你怎么了 dialogues.",
            ],
          },
        ],
      },
      {
        id: "hlth-quiz-qa-q05",
        question:
          "A classmate writes {{我的头是疼|✗ wǒ de tóu shì téng}} for 'my head hurts'. Explain BOTH mistakes and give the correct sentence.",
        modelAnswer:
          "Mistake 1: 的 is unnecessary — Chinese uses topic + comment ('Me — head hurts'), and since the head obviously belongs to the topic person, 我头 needs no 的. Mistake 2: 是 is wrong because {{疼|téng}} is itself a verb meaning 'hurts'; adjectives and verbs like 疼 never take 是 (same rule as ages: 我十二岁, not 我是十二岁). Correct: {{我头疼。|Wǒ tóu téng.}}",
        markScheme: [
          "的 should be dropped — topic + comment structure / possession is obvious",
          "是 should be dropped — 疼 is already the verb",
          "Links to a known parallel (我很好 or 我十二岁 taking no 是)",
          "Correct sentence 我头疼 given",
        ],
        commonError:
          "Fixing only one error (我头是疼 ✗ or 我的头疼 — the second is heard colloquially but the exam pattern is 我头疼 with both dropped).",
        guideRef: "Saying what hurts: 头疼 and the missing 的",
        difficulty: "challenge",
        strategy: "Spot what's missing on purpose",
        hints: [
          "Compare with a correct sentence you know: 我头疼. What did the classmate add?",
          "Where else does Chinese refuse 是 before a describing word?",
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "hlth-mcq-a",
        title: "Paper A — Body & feeling ill",
        description: "Body parts, the flesh radical, and saying what hurts.",
        questions: [
          {
            id: "hlth-mcq-a-q01",
            question: "What does {{鼻子|bízi}} mean?",
            options: ["Mouth", "Nose", "Ear", "Hand"],
            answerIndex: 1,
            explanation: "{{鼻子|bízi}} = nose. {{嘴巴|zuǐba}} is mouth, {{耳朵|ěrduo}} ear, {{手|shǒu}} hand.",
            guideRef: "Body parts: the 月 'flesh' radical secret",
            difficulty: "warmup",
          },
          {
            id: "hlth-mcq-a-q02",
            question: "Which word means 'foot'?",
            options: ["{{脚|jiǎo}}", "{{腿|tuǐ}}", "{{手|shǒu}}", "{{头|tóu}}"],
            answerIndex: 0,
            explanation:
              "{{脚|jiǎo}} = foot; {{腿|tuǐ}} is the leg above it, {{手|shǒu}} hand, {{头|tóu}} head. Note 脚 and 腿 both wear the flesh radical 月.",
            guideRef: "Body parts: the 月 'flesh' radical secret",
            difficulty: "warmup",
          },
          {
            id: "hlth-mcq-a-q03",
            question: "{{头发|tóufa}} literally means 'head-hair'. What is it?",
            options: ["A hat", "The hair on your head", "A headache", "A hairbrush"],
            answerIndex: 1,
            explanation:
              "头 (head) + 发 (hair) = the hair on your head. Chinese compounds often self-explain like this — read the parts.",
            guideRef: "Body parts: the 月 'flesh' radical secret",
            difficulty: "warmup",
          },
          {
            id: "hlth-mcq-a-q04",
            question: "Why do 腿, 脚 and 肚 all contain the shape 月?",
            options: [
              "They are all words about the moon",
              "月 is the squashed 'flesh' radical 肉, marking body parts",
              "It shows they are all round shapes",
              "It is just a coincidence",
            ],
            answerIndex: 1,
            explanation:
              "On the left of a character, 月 is not the moon — it's {{肉|ròu|flesh}} squashed thin: the flesh radical, a signpost saying 'body part'. Radicals are a filing system, not decoration.",
            guideRef: "Body parts: the 月 'flesh' radical secret",
            difficulty: "core",
            strategy: "Read the radical first",
          },
          {
            id: "hlth-mcq-a-q05",
            question: "Which sentence says 'His tooth hurts'?",
            options: [
              "{{他牙疼。|Tā yá téng.}}",
              "{{他的牙是疼。|Tā de yá shì téng.}}",
              "{{牙他疼。|Yá tā téng.}}",
              "{{他疼牙。|Tā téng yá.}}",
            ],
            answerIndex: 0,
            explanation:
              "Person + body part + 疼: 他牙疼. Option 2 smuggles in 的 and 是 (the classic trap); the others scramble the topic–comment order.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "core",
            hints: ["Same frame as 我头疼 — just swap the person and the part."],
          },
          {
            id: "hlth-mcq-a-q06",
            question: "What does {{咳嗽|késou}} mean?",
            options: ["To sneeze", "To cough", "To snore", "To yawn"],
            answerIndex: 1,
            explanation:
              "{{咳嗽|késou}} = to cough. Both characters contain the mouth radical 口 on the left — coughing happens at the mouth. Radicals help again!",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "warmup",
          },
          {
            id: "hlth-mcq-a-q07",
            question: "{{我生病了|Wǒ shēngbìng le}} means…",
            options: [
              "I was born",
              "I have fallen ill",
              "I am angry",
              "I have recovered",
            ],
            answerIndex: 1,
            explanation:
              "{{生病|shēngbìng}} = to fall ill; {{了|le}} marks the new situation — 'I've fallen ill (and wasn't before)'. 病 wears the sickness radical 疒.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "warmup",
          },
          {
            id: "hlth-mcq-a-q08",
            question: "Which is the polite, general way to say you feel unwell?",
            options: [
              "{{我很不舒服。|Wǒ hěn bù shūfu.}}",
              "{{我很好。|Wǒ hěn hǎo.}}",
              "{{我很高兴。|Wǒ hěn gāoxìng.}}",
              "{{我很渴。|Wǒ hěn kě.}}",
            ],
            answerIndex: 0,
            explanation:
              "{{不舒服|bù shūfu}} — literally 'not comfortable' — is the polite all-purpose 'I feel unwell'. 很好 is 'very well' (the opposite!), 高兴 happy, 渴 thirsty.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "core",
          },
          {
            id: "hlth-mcq-a-q09",
            question:
              "Your little cousin points at her tummy and cries. Which sentence reports the problem?",
            options: [
              "{{她肚子疼。|Tā dùzi téng.}}",
              "{{她头发很长。|Tā tóufa hěn cháng.}}",
              "{{她很开心。|Tā hěn kāixīn.}}",
              "{{她每天游泳。|Tā měitiān yóuyǒng.}}",
            ],
            answerIndex: 0,
            explanation:
              "Tummy + crying → {{她肚子疼|tā dùzi téng|her tummy hurts}}, using person + body part + 疼. The others say her hair is long, she's happy, she swims daily.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "core",
          },
          {
            id: "hlth-mcq-a-q10",
            question: "{{痛|tòng}} and {{疼|téng}} are related how?",
            options: [
              "痛 is a body part, 疼 is an illness",
              "They both mean 'to hurt' — near-perfect synonyms",
              "痛 means better, 疼 means worse",
              "痛 is only for animals",
            ],
            answerIndex: 1,
            explanation:
              "Both mean 'to hurt/ache' and both wear the sickness radical 疒. You'll hear 头疼 and 头痛 for 'headache' — learn to recognise both, produce either.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "core",
          },
          {
            id: "hlth-mcq-a-q11",
            question:
              "Pinyin check: which is the correct pronunciation of 不疼 ('doesn't hurt')?",
            options: ["bú téng", "bù téng", "bū téng", "bu tēng"],
            answerIndex: 1,
            explanation:
              "不 only changes to bú before a 4th tone (bú shì, bú yào). 疼 is 2nd tone (téng), so 不 keeps its normal 4th tone: bù téng.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "core",
            hints: [
              "The 不-rule cares about the tone of the NEXT syllable.",
              "疼 = téng, 2nd tone. Is that a 4th tone?",
            ],
          },
          {
            id: "hlth-mcq-a-q12",
            question:
              "Challenge: {{眼睛|yǎnjing}} means eye and {{疼|téng}} means hurts. Your friend has been gaming for five hours. What do they probably say?",
            options: [
              "{{我眼睛疼。|Wǒ yǎnjing téng.}}",
              "{{我眼睛很大。|Wǒ yǎnjing hěn dà.}}",
              "{{我脚疼。|Wǒ jiǎo téng.}}",
              "{{我眼睛是疼。|Wǒ yǎnjing shì téng.}}",
            ],
            answerIndex: 0,
            explanation:
              "Five hours of screens → sore EYES: 我眼睛疼, built with person + body part + 疼. Option 4 has the forbidden 是; option 2 says 'my eyes are big'; option 3 blames the feet.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "core",
            strategy: "Topic first, then comment",
            hints: ["Which body part does a screen tire out?", "Then apply the 疼 frame — and no 是!"],
          },
          {
            id: "hlth-mcq-a-q13",
            question:
              "Spot the error: which ONE of these four sentences is wrong?",
            options: [
              "{{我头疼。|Wǒ tóu téng.}}",
              "{{她牙疼。|Tā yá téng.}}",
              "{{我的腿是疼。|Wǒ de tuǐ shì téng.}}",
              "{{他肚子疼。|Tā dùzi téng.}}",
            ],
            answerIndex: 2,
            explanation:
              "我的腿是疼 commits both classic errors: unnecessary 的 and forbidden 是 (疼 is the verb). Correct: 我腿疼. The other three follow person + body part + 疼 perfectly.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "challenge",
            strategy: "Spot what's missing on purpose",
            hints: ["Three sentences share one clean frame. One sentence added extra words."],
          },
        ],
      },
      {
        id: "hlth-mcq-b",
        title: "Paper B — Doctor's advice & healthy living",
        description: "Clinic dialogues, 应该/别 advice, 多/少 + verb, and healthy habits.",
        questions: [
          {
            id: "hlth-mcq-b-q01",
            question: "Where does a {{医生|yīshēng}} work?",
            options: ["{{学校|xuéxiào|school}}", "{{医院|yīyuàn}}", "{{饭馆|fànguǎn|restaurant}}", "{{商店|shāngdiàn|shop}}"],
            answerIndex: 1,
            explanation:
              "The doctor ({{医生|yīshēng}}) works at the hospital ({{医院|yīyuàn}}) — both words share {{医|yī|medical}}, so the pair almost answers itself.",
            guideRef: "At the doctor's: 你怎么了？",
            difficulty: "warmup",
          },
          {
            id: "hlth-mcq-b-q02",
            question: "Which phrase means 'to see a doctor'?",
            options: [
              "{{看书|kàn shū}}",
              "{{看医生|kàn yīshēng}}",
              "{{看电视|kàn diànshì}}",
              "{{吃医生|chī yīshēng}}",
            ],
            answerIndex: 1,
            explanation:
              "{{看医生|kàn yīshēng}} — literally 'look at the doctor' — means to see/visit a doctor ({{看病|kànbìng}} also works). 看书/看电视 are reading and TV; 吃医生 would be alarming.",
            guideRef: "At the doctor's: 你怎么了？",
            difficulty: "warmup",
          },
          {
            id: "hlth-mcq-b-q03",
            question:
              "The doctor says: {{你要吃药，多休息。|Nǐ yào chī yào, duō xiūxi.}} What must you do?",
            options: [
              "Take medicine and rest more",
              "Drink medicine and rest less",
              "Buy medicine and go to school",
              "Eat more and sleep less",
            ],
            answerIndex: 0,
            explanation:
              "{{要|yào}} = need to/must; {{吃药|chī yào}} = take medicine; {{多休息|duō xiūxi}} = rest MORE (多 before the verb dials it up).",
            guideRef: "At the doctor's: 你怎么了？",
            difficulty: "core",
          },
          {
            id: "hlth-mcq-b-q04",
            question: "How do you say 'Don't worry!'?",
            options: [
              "{{别担心！|Bié dānxīn!}}",
              "{{多担心！|Duō dānxīn!}}",
              "{{应该担心！|Yīnggāi dānxīn!}}",
              "{{很担心！|Hěn dānxīn!}}",
            ],
            answerIndex: 0,
            explanation:
              "{{别|bié}} + verb = don't… (short for 不要). 多担心 would mean 'worry MORE' — the opposite of comforting!",
            guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
            difficulty: "core",
          },
          {
            id: "hlth-mcq-b-q05",
            question:
              "Fill the gap so the advice makes sense: 你发烧了，＿＿去游泳！",
            options: ["{{别|bié}}", "{{多|duō}}", "{{很|hěn}}", "{{对|duì}}"],
            answerIndex: 0,
            explanation:
              "With a fever, swimming should be BANNED: {{别去游泳|bié qù yóuyǒng|don't go swimming}}. 多 would encourage it, 很 and 对 don't fit the verb slot at all.",
            guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
            difficulty: "core",
            hints: ["Should a feverish person swim more, or not at all?"],
          },
          {
            id: "hlth-mcq-b-q06",
            question:
              "Which sentence tells a friend to eat less sugar (politely, with 'should')?",
            options: [
              "{{你应该少吃糖。|Nǐ yīnggāi shǎo chī táng.}}",
              "{{你应该吃少糖。|Nǐ yīnggāi chī shǎo táng.}}",
              "{{你应该多吃糖。|Nǐ yīnggāi duō chī táng.}}",
              "{{糖应该少吃你。|Táng yīnggāi shǎo chī nǐ.}}",
            ],
            answerIndex: 0,
            explanation:
              "少 sits BEFORE the verb: 少吃糖 = 'less-eat sugar'. 吃少糖 puts 少 in the wrong slot, 多吃糖 says eat MORE sugar, and the last option has the sugar eating you.",
            guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
            difficulty: "core",
            hints: ["多/少 are volume dials on the VERB, so they stand in front of it."],
          },
          {
            id: "hlth-mcq-b-q07",
            question: "What does {{早睡早起|zǎo shuì zǎo qǐ}} mean?",
            options: [
              "Early to bed, early to rise",
              "Sleep late, get up late",
              "Good morning, good evening",
              "Sleep at school",
            ],
            answerIndex: 0,
            explanation:
              "早 (early) + 睡 (sleep) + 早 (early) + 起 (rise): early to bed, early to rise. The full saying adds 身体好 — it keeps your body healthy.",
            guideRef: "Staying healthy: 对身体好",
            difficulty: "warmup",
          },
          {
            id: "hlth-mcq-b-q08",
            question: "Which sentence says 'I run every day'?",
            options: [
              "{{我每天跑步。|Wǒ měitiān pǎobù.}}",
              "{{我跑步每天。|Wǒ pǎobù měitiān.}}",
              "{{每天跑步我。|Měitiān pǎobù wǒ.}}",
              "{{我很跑步。|Wǒ hěn pǎobù.}}",
            ],
            answerIndex: 0,
            explanation:
              "Time words like {{每天|měitiān}} come BEFORE the verb: 我每天跑步. English tucks 'every day' at the end; Chinese never does.",
            guideRef: "Staying healthy: 对身体好",
            difficulty: "core",
          },
          {
            id: "hlth-mcq-b-q09",
            question:
              "Using the 对…好 pattern, which sentence says 'Sugar is bad for your teeth'?",
            options: [
              "{{糖对牙不好。|Táng duì yá bù hǎo.}}",
              "{{牙对糖不好。|Yá duì táng bù hǎo.}}",
              "{{糖很牙不好。|Táng hěn yá bù hǎo.}}",
              "{{糖对牙很好。|Táng duì yá hěn hǎo.}}",
            ],
            answerIndex: 0,
            explanation:
              "X 对 target 不好: sugar (X) aims badness at the teeth (target) → 糖对牙不好. Option 2 aims it backwards, option 4 says sugar is GOOD for teeth, option 3 breaks the frame.",
            guideRef: "Staying healthy: 对身体好",
            difficulty: "challenge",
            strategy: "Swap the target, keep the frame",
            hints: ["Who is doing the harming, and who receives it? X 对 target 不好."],
          },
          {
            id: "hlth-mcq-b-q10",
            question: "After sport you gasp: 'I'm SO thirsty!' In Chinese:",
            options: [
              "{{我很渴。|Wǒ hěn kě.}}",
              "{{我是渴。|Wǒ shì kě.}}",
              "{{我很饿。|Wǒ hěn è.}}",
              "{{我很累吗？|Wǒ hěn lèi ma?}}",
            ],
            answerIndex: 0,
            explanation:
              "Feelings take 很 + adjective with no 是: 我很渴. 我是渴 uses the forbidden 是; 饿 is hungry, not thirsty; and option 4 asks a question about being tired.",
            guideRef: "Staying healthy: 对身体好",
            difficulty: "core",
          },
          {
            id: "hlth-mcq-b-q11",
            question:
              "Decode a phrase you've never seen: {{多锻炼，少玩手机|duō duànliàn, shǎo wán shǒujī}} ({{玩手机|wán shǒujī}} = play on your phone).",
            options: [
              "Exercise more, use your phone less",
              "Exercise less, use your phone more",
              "Buy more phones for exercise",
              "Never exercise, never phone",
            ],
            answerIndex: 0,
            explanation:
              "多锻炼 = 'more-exercise' → do more exercise; 少玩手机 = 'less-play phone' → less phone time. The 多/少-before-verb dial decodes both halves without a dictionary.",
            guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
            difficulty: "challenge",
            strategy: "Decode by slot, not by translation",
            hints: ["Treat 多 and 少 as volume dials on the verbs that follow them."],
          },
          {
            id: "hlth-mcq-b-q12",
            question:
              "A clinic dialogue with a gap. 医生: 你怎么了？ 病人: ＿＿＿ 医生: 你要多喝水，别喝可乐。 Which line fits the gap?",
            options: [
              "{{我肚子疼，很渴。|Wǒ dùzi téng, hěn kě.}}",
              "{{我叫王明。|Wǒ jiào Wáng Míng.}}",
              "{{再见！|Zàijiàn!}}",
              "{{我十三岁。|Wǒ shísān suì.}}",
            ],
            answerIndex: 0,
            explanation:
              "怎么了 asks for a symptom, and the doctor's reply (drink more water, no cola) fits a patient who is unwell and thirsty: 我肚子疼，很渴. A name, a goodbye or an age wouldn't trigger water advice. Inference: match the MISSING line to the reply that follows it.",
            guideRef: "At the doctor's: 你怎么了？",
            difficulty: "challenge",
            strategy: "Learn the dialogue as a frame, swap the symptom",
            hints: [
              "Read the doctor's SECOND line — advice about drinking. What complaint would cause that?",
              "怎么了 always expects a symptom, not a name or age.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "hlth-qa-a",
        title: "Paper A — Symptoms & the doctor",
        description: "Translate symptoms, read clinic dialogues, explain the 头疼 structure.",
        questions: [
          {
            id: "hlth-qa-a-q01",
            question:
              "Translate into English: {{我妹妹感冒了，咳嗽，还有一点儿发烧。|Wǒ mèimei gǎnmào le, késou, hái yǒu yìdiǎnr fāshāo.}} ({{一点儿|yìdiǎnr}} = a little)",
            modelAnswer:
              "My little sister has caught a cold; she's coughing and also has a slight fever.",
            markScheme: [
              "妹妹 = little/younger sister",
              "感冒了 = has caught a cold (new situation)",
              "咳嗽 = coughing",
              "一点儿发烧 = a slight fever / a little feverish",
            ],
            commonError:
              "Missing the 了: 感冒了 means she HAS CAUGHT a cold (a change), not that she habitually catches colds.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "core",
            hints: ["Three symptoms are listed after 妹妹 — find all three."],
          },
          {
            id: "hlth-qa-a-q02",
            question:
              "Write in Chinese (characters or pinyin): 'My leg hurts. I want to go and see a doctor.' ({{想|xiǎng}} = to want to; {{去|qù}} = to go)",
            modelAnswer: "{{我腿疼。我想去看医生。|Wǒ tuǐ téng. Wǒ xiǎng qù kàn yīshēng.}}",
            markScheme: [
              "我腿疼 with no 的 and no 是",
              "想 before the verb phrase for 'want to'",
              "去看医生 (or 去看病 / 去医院看病)",
            ],
            commonError: "我的腿是疼 ✗ — drop 的 and 是; 疼 is the verb.",
            guideRef: "At the doctor's: 你怎么了？",
            difficulty: "core",
            hints: [
              "Sentence 1: person + body part + 疼.",
              "Sentence 2: 我想 + 去 + see-a-doctor phrase.",
            ],
            solutions: [
              {
                label: "Frame assembly (recommended)",
                steps: [
                  "Hurt frame: 我 + 腿 + 疼 → 我腿疼。",
                  "Want-to frame: 我想 + verb phrase.",
                  "Verb phrase: 去 (go) + 看医生 (see a doctor) → 我想去看医生。",
                ],
              },
              {
                label: "Fix the English first",
                steps: [
                  "Rewrite the English the Chinese way: 'Me — leg hurts. I want-to go see-doctor.'",
                  "Now translate the rewritten version word-group by word-group: 我腿疼。我想去看医生。",
                  "Pre-translating into 'Chinese-shaped English' stops 的/是 sneaking in.",
                ],
              },
            ],
          },
          {
            id: "hlth-qa-a-q03",
            question:
              "Read the dialogue and answer in English.\n\n- 医生: {{你怎么了？|Nǐ zěnme le?}}\n- 安娜: {{我头疼，很累，不想吃饭。|Wǒ tóu téng, hěn lèi, bù xiǎng chīfàn.}}\n- 医生: {{你发烧了。要吃药，多睡觉，别去学校。|Nǐ fāshāo le. Yào chī yào, duō shuìjiào, bié qù xuéxiào.}}\n\n(a) List Anna's THREE symptoms. (b) What does the doctor discover? (c) What THREE instructions does she get?",
            modelAnswer:
              "(a) Headache, very tired, no appetite (doesn't want to eat). (b) She has a fever (你发烧了). (c) Take medicine, sleep more, and don't go to school.",
            markScheme: [
              "Symptoms: headache + tired + doesn't want to eat (all three)",
              "Diagnosis: fever ({{发烧|fāshāo}})",
              "Instructions: 吃药 take medicine; 多睡觉 sleep more; 别去学校 don't go to school",
            ],
            commonError:
              "Translating 别去学校 as 'go to school' — 别 flips the meaning to DON'T. Always check for 别/不 before a verb.",
            guideRef: "At the doctor's: 你怎么了？",
            difficulty: "core",
            hints: [
              "Anna's line lists symptoms separated by commas.",
              "The doctor's line: diagnosis first, then three commands — one uses 别.",
            ],
          },
          {
            id: "hlth-qa-a-q04",
            question:
              "Explain to a beginner why Chinese says {{我头疼|wǒ tóu téng}} — just three words — where English needs five ('my head hurts' plus the hidden 'is…-ing' idea). What TWO English habits must you switch off?",
            modelAnswer:
              "Habit 1: possessives. Chinese uses topic + comment — 'Me: head hurts' — so no 的/'my' is needed; the head obviously belongs to the topic. Habit 2: the verb 'to be'. 疼 is a full verb meaning 'hurts', so there's no 是, just like 我很累 and 我十二岁 have no 是. Switch off word-for-word translating and trust the frame person + body part + 疼.",
            markScheme: [
              "Topic + comment explains the missing 的/'my'",
              "疼 is itself the verb → no 是",
              "Parallel drawn to another no-是 pattern (我很累 / 我十二岁 / 我很好)",
            ],
            commonError:
              "Saying 'Chinese just drops words randomly' — both omissions follow rules (topic–comment; verbs/adjectives take no 是), and the exam rewards naming the rules.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "challenge",
            strategy: "Don't translate word-for-word",
            hints: [
              "Which two words does the wrong sentence 我的头是疼 add?",
              "For each added word, say WHY Chinese doesn't want it.",
            ],
          },
          {
            id: "hlth-qa-a-q05",
            question:
              "Body-part sort: from 头, 手, 肚子, 脚, 腿, write down (a) the ones that contain the flesh radical 月, and (b) what that radical originally was.",
            modelAnswer:
              "(a) 肚子, 脚, 腿 contain the 月-shaped flesh radical (头 and 手 do not — they are older pictographs). (b) It was originally 肉 (ròu, 'flesh/meat'), squashed thin to fit the left side of characters.",
            markScheme: [
              "Identifies 肚, 脚, 腿 as flesh-radical characters",
              "头 and 手 correctly excluded",
              "Radical comes from 肉 (flesh/meat)",
            ],
            commonError:
              "Calling the radical 'moon' — on the left of body words the 月 shape is squashed 肉, not 月 the moon.",
            guideRef: "Body parts: the 月 'flesh' radical secret",
            difficulty: "core",
            strategy: "Read the radical first",
            hints: ["Look at the left-hand component of each character, one by one."],
          },
          {
            id: "hlth-qa-a-q06",
            question:
              "Your teacher says: {{我今天不舒服，头很疼。|Wǒ jīntiān bù shūfu, tóu hěn téng.}} (a) Translate her sentence. (b) 很 has sneaked in before 疼 — what does 头很疼 add compared with plain 头疼?",
            modelAnswer:
              "(a) 'I don't feel well today; my head really aches.' (b) 很 intensifies the verb: 头很疼 = my head REALLY hurts / hurts a lot, whereas 头疼 just states the headache.",
            markScheme: [
              "不舒服 = doesn't feel well",
              "今天 = today, placed correctly in the translation",
              "头很疼 = head hurts a lot / really aches (很 intensifies)",
            ],
            commonError:
              "Assuming 很 is always meaningless glue — before adjectives (我很累) it's mostly rhythm, but before 疼 in 头很疼 it genuinely means 'really/a lot'.",
            guideRef: "Saying what hurts: 头疼 and the missing 的",
            difficulty: "core",
            hints: [
              "Translate 今天 and 不舒服 first, then the 疼 clause.",
              "Compare 我头疼 and 我头很疼 aloud — which sounds stronger?",
            ],
          },
        ],
      },
      {
        id: "hlth-qa-b",
        title: "Paper B — Advice & healthy habits",
        description: "Write advice with 应该/别, decode 多/少 phrases, and talk about healthy routines.",
        questions: [
          {
            id: "hlth-qa-b-q01",
            question:
              "Your friend says: {{我很累，每天很晚睡觉。|Wǒ hěn lèi, měitiān hěn wǎn shuìjiào.}} ({{晚|wǎn}} = late) Give ONE piece of advice in Chinese using 应该.",
            modelAnswer:
              "{{你应该早睡觉，多休息。|Nǐ yīnggāi zǎo shuìjiào, duō xiūxi.}} (Or: 你应该早睡早起 / 你应该多睡觉 — any sensible 应该 + verb advice.)",
            markScheme: [
              "你应该 + verb phrase",
              "Advice targets the problem (sleep earlier / rest more / sleep more)",
              "多/早 correctly placed BEFORE the verb",
            ],
            commonError: "睡觉多 ✗ or 睡觉早 ✗ — the modifier goes before the verb: 多睡觉, 早睡觉.",
            guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
            difficulty: "core",
            hints: [
              "The problem is late nights. What's the opposite of 晚睡觉?",
              "Mount the fix on 你应该….",
            ],
          },
          {
            id: "hlth-qa-b-q02",
            question:
              "Decode WITHOUT a dictionary and translate: {{多吃蔬菜，少喝可乐，每天运动。|Duō chī shūcài, shǎo hē kělè, měitiān yùndòng.}} ({{蔬菜|shūcài}} = vegetables) Then explain how the 多/少 pattern let you decode the first two phrases.",
            modelAnswer:
              "'Eat more vegetables, drink less cola, exercise every day.' The pattern 多/少 + verb dials the action up or down: 多吃蔬菜 = 'more-eat vegetables' → eat more vegetables; 少喝可乐 = 'less-drink cola' → drink less cola. Knowing the slot means new phrases decode themselves.",
            markScheme: [
              "多吃蔬菜 = eat more vegetables",
              "少喝可乐 = drink less cola",
              "每天运动 = exercise every day",
              "Explanation: 多/少 before the verb turn the action up/down",
            ],
            commonError:
              "Attaching 多/少 to the noun ('many vegetables', 'little cola') — Chinese is dialling the VERB, not counting the noun.",
            guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
            difficulty: "challenge",
            strategy: "Decode by slot, not by translation",
            hints: [
              "Chop each phrase: 多/少 + verb + object.",
              "Translate the verb first, then apply the dial.",
            ],
            solutions: [
              {
                label: "Slot machine (recommended)",
                steps: [
                  "Mark the slots: [多|少|每天] + [verb] + [object].",
                  "Phrase 1: 多 + 吃 + 蔬菜 → turn UP the eating of vegetables → eat more veg.",
                  "Phrase 2: 少 + 喝 + 可乐 → turn DOWN the drinking of cola → drink less cola.",
                  "Phrase 3: 每天 + 运动 → time word + verb → exercise every day.",
                ],
              },
              {
                label: "Analogy from a known phrase",
                steps: [
                  "You know 多喝水 = drink more water.",
                  "多吃蔬菜 has the identical shape with 吃/蔬菜 swapped in → eat more vegetables.",
                  "少喝可乐 is the same frame with the dial flipped to 少 → drink less cola.",
                ],
              },
            ],
          },
          {
            id: "hlth-qa-b-q03",
            question:
              "Your penpal 小文 writes: {{我生病了，喉咙很疼。|Wǒ shēngbìng le, hóulóng hěn téng.}} ({{喉咙|hóulóng}} = throat) Write a TWO-sentence reply: one 应该 sentence and one 别 sentence.",
            modelAnswer:
              "{{你应该多喝水，多休息。别吃糖，别多说话！|Nǐ yīnggāi duō hē shuǐ, duō xiūxi. Bié chī táng, bié duō shuōhuà!}} (Any medically sensible 应该 + 别 pair scores, e.g. 你应该看医生。别喝可乐。)",
            markScheme: [
              "应该 sentence with a suitable remedy (water/rest/doctor/medicine)",
              "别 sentence banning something throat-unfriendly",
              "多/少 (if used) placed before the verb",
              "Advice fits a sore throat",
            ],
            commonError:
              "别 + noun alone (别糖 ✗) — 别 needs a verb: 别吃糖.",
            guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
            difficulty: "challenge",
            strategy: "Build, don't memorise",
            hints: [
              "Even without knowing 喉咙, the 疼-frame tells you a body part hurts.",
              "应该 sentence: pick from the doctor's toolkit. 别 sentence: ban a verb, not a noun.",
            ],
          },
          {
            id: "hlth-qa-b-q04",
            question:
              "Write TWO Chinese sentences about your own healthy routine: one with 每天 + an exercise verb, and one using the …对身体好 pattern.",
            modelAnswer:
              "{{我每天跑步。跑步对身体好。|Wǒ měitiān pǎobù. Pǎobù duì shēntǐ hǎo.}} (Any exercise verb works: 游泳, 锻炼, 运动…)",
            markScheme: [
              "每天 placed BEFORE the verb (我每天游泳, not 我游泳每天)",
              "Recognisable exercise verb (跑步/游泳/锻炼/运动)",
              "X 对身体好 with the activity as X",
            ],
            commonError:
              "我游泳每天 ✗ — time words sit before the verb in Chinese, never at the end.",
            guideRef: "Staying healthy: 对身体好",
            difficulty: "core",
            hints: [
              "Sentence 1: 我 + 每天 + verb.",
              "Sentence 2: reuse your verb as the subject: [verb] 对身体好.",
            ],
          },
          {
            id: "hlth-qa-b-q05",
            question:
              "Translate into English, then answer the riddle: {{早睡早起身体好。你应该几点睡觉？|Zǎo shuì zǎo qǐ shēntǐ hǎo. Nǐ yīnggāi jǐ diǎn shuìjiào?}} ({{几点|jǐ diǎn}} = what time)",
            modelAnswer:
              "'Early to bed, early to rise keeps the body healthy. What time should you go to sleep?' A sensible answer: early — e.g. 九点/十点 (9 or 10 o'clock), because the saying recommends 早睡 (sleeping early).",
            markScheme: [
              "早睡早起身体好 translated as early to bed, early to rise → healthy body",
              "你应该几点睡觉 = what time should you sleep",
              "Answer consistent with the saying (an early time, with brief reason)",
            ],
            commonError:
              "Reading 几点 as 'a few o'clock' — 几 here is the question word 'what/how many', sitting exactly where the answer time will go.",
            guideRef: "Staying healthy: 对身体好",
            difficulty: "core",
            hints: [
              "You decoded 早睡早起 in the guide — reuse it.",
              "Question words sit in the answer's seat: 几点 → 九点.",
            ],
          },
          {
            id: "hlth-qa-b-q06",
            question:
              "Feelings check: translate the pairs and explain the grammar. (a) {{我很开心。|Wǒ hěn kāixīn.}} (b) {{我很饿，也很渴。|Wǒ hěn è, yě hěn kě.}} (c) Why is 我是开心 ✗ wrong?",
            modelAnswer:
              "(a) 'I'm happy.' (b) 'I'm hungry, and thirsty too.' (c) 是 is wrong because Chinese adjectives connect straight to the subject with 很 — no 'to be'. 是 links nouns (我是学生), never adjectives.",
            markScheme: [
              "(a) happy — 开心 (or glad)",
              "(b) hungry + also thirsty (也 = also)",
              "(c) adjectives take 很, not 是; 是 is for nouns",
            ],
            commonError:
              "Translating 很 as a heavy 'very' every time — with feelings it's mostly a grammatical glue whose 'very' flavour is light.",
            guideRef: "Staying healthy: 对身体好",
            difficulty: "core",
            hints: [
              "也 you know from earlier topics: 'also'.",
              "Which word class does 是 link — nouns or adjectives?",
            ],
          },
          {
            id: "hlth-qa-b-q07",
            question:
              "Mini-composition (3-4 sentences, characters or pinyin): You were ill last week ({{上个星期|shàng ge xīngqī}} = last week). Say (1) what was wrong, (2) that you went to see a doctor, (3) one thing the doctor said using 医生说, and (4) how you feel now ({{现在|xiànzài}} = now).",
            modelAnswer:
              "{{上个星期我生病了，头疼，还发烧。我去医院看医生。医生说我应该多休息，多喝水。现在我身体很好，很开心！|Shàng ge xīngqī wǒ shēngbìng le, tóu téng, hái fāshāo. Wǒ qù yīyuàn kàn yīshēng. Yīshēng shuō wǒ yīnggāi duō xiūxi, duō hē shuǐ. Xiànzài wǒ shēntǐ hěn hǎo, hěn kāixīn!}}",
            markScheme: [
              "Illness stated with 生病了 or a symptom in the 疼-frame",
              "去看医生 / 去医院 for the doctor visit",
              "医生说 + reported advice (应该/要/别 + verb)",
              "Present feeling with 现在 + 很 + adjective (no 是)",
              "Time words 上个星期/现在 before their verbs",
            ],
            commonError:
              "医生说我是应该休息 ✗ — no 是 before 应该; report the advice directly: 医生说我应该休息.",
            guideRef: "At the doctor's: 你怎么了？",
            difficulty: "challenge",
            strategy: "Learn the dialogue as a frame, swap the symptom",
            hints: [
              "One sentence per job: illness → visit → doctor's words → now.",
              "Reported advice = 医生说 + a normal advice sentence.",
              "Finish with a 很-feeling: 现在我很好/很开心.",
            ],
            solutions: [
              {
                label: "Four-sentence skeleton (recommended)",
                steps: [
                  "S1 (what was wrong): 上个星期我生病了，头疼。",
                  "S2 (the visit): 我去看医生。",
                  "S3 (the advice): 医生说我应该多休息。",
                  "S4 (now): 现在我很好。",
                  "Each sentence reuses one frame from this topic — nothing new is needed.",
                ],
              },
              {
                label: "Recycle the clinic dialogue",
                steps: [
                  "Take the guide's clinic dialogue and change it from conversation to story.",
                  "The patient's line becomes S1; going to the clinic becomes S2.",
                  "The doctor's line, wrapped in 医生说…, becomes S3.",
                  "Add a happy ending with 现在 + 很 + adjective.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
