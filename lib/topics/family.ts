import type { Topic } from "../types";

// Topic: Family & Friends — Cambridge IGCSE 0547 'personal and social life'.
// House style follows lib/topics/greetings.ts (the exemplar).

export const family: Topic = {
  id: "family",
  title: "Family & Friends",
  titleChinese: { hanzi: "家人与朋友", pinyin: "jiārén yǔ péngyou" },
  subject: "chinese",
  icon: "👨‍👩‍👧‍👦",
  color: "amber",
  intro:
    "Who's at home with you? In this topic you'll introduce everyone in your family, count them the Chinese way (in 'mouths'!), describe what people look like, and talk about pets and parents' jobs. Along the way you'll discover why Chinese refuses to say 'brother' without telling you who was born first — and how to dodge the single most common describing-people mistake.",
  guide: [
    {
      heading: "Meet the family: why 'brother' is two different words",
      discovery: {
        problem:
          "Try to translate 'I have a brother' into Chinese. You can't — not yet, and not because you're missing vocabulary. A Chinese speaker will immediately ask: older or younger? There is simply no everyday word that means just 'brother'. Why would a language be built like that?",
        idea:
          "Chinese family words have age order built in: {{哥哥|gēge|older brother}} vs {{弟弟|dìdi|younger brother}}, {{姐姐|jiějie|older sister}} vs {{妹妹|mèimei|younger sister}}. In Chinese culture, who is older matters — older siblings traditionally look after younger ones, and younger ones show respect. The vocabulary carries the culture. So before you translate, you must know the family!",
      },
      body:
        "Here is the core family, in pairs:\n\n- {{爸爸|bàba|dad}} and {{妈妈|māma|mum}}\n- {{哥哥|gēge|older brother}} and {{弟弟|dìdi|younger brother}}\n- {{姐姐|jiějie|older sister}} and {{妹妹|mèimei|younger sister}}\n- {{爷爷|yéye|grandpa (dad's dad)}} and {{奶奶|nǎinai|grandma (dad's mum)}}\n\nCareful with the grandparents: {{爷爷|yéye}} and {{奶奶|nǎinai}} are specifically your **father's** parents. (Your mum's parents get different words — see Think deeper.)\n\nTwo umbrella words round out the set: {{家人|jiārén|family members}} (literally 'home people') and {{朋友|péngyou|friend}}.\n\nTo introduce someone, point and say {{这是…|zhè shì…|this is…}}: {{这是我妈妈。|Zhè shì wǒ māma.|This is my mum.}} {{这是我朋友。|Zhè shì wǒ péngyou.|This is my friend.}}",
      whyItWorks:
        "Notice that the family words double up: 爸爸, 妈妈, 哥哥, 弟弟… Repeating the syllable makes the word warm and familiar — exactly like English 'papa' and 'mama'. And the older/younger split isn't random fussiness: in traditional Chinese families, age order sets who cares for whom, so the language never lets you leave it out. When vocabulary looks strange, look for the culture underneath.",
      strategies: ["Look for the culture under the vocabulary", "Learn words in contrasting pairs"],
      thinkDeeper:
        "Your mum's parents are {{外公|wàigōng|grandpa (mum's dad)}} and {{外婆|wàipó|grandma (mum's mum)}} — the character {{外|wài}} means 'outside', because historically a daughter 'married out' into her husband's family. Modern families don't think of grandma as an outsider, but the old words survived!",
      keyPoints: [
        "Sibling words encode age: 哥哥/弟弟 (brothers), 姐姐/妹妹 (sisters)",
        "爷爷 and 奶奶 are your dad's parents specifically",
        "家人 = family members; 朋友 = friend",
        "这是我妈妈 — introduce people with 这是…",
      ],
      vocab: [
        { hanzi: "爸爸", pinyin: "bàba", english: "dad, father", pos: "noun" },
        { hanzi: "妈妈", pinyin: "māma", english: "mum, mother", pos: "noun" },
        { hanzi: "哥哥", pinyin: "gēge", english: "older brother", pos: "noun" },
        { hanzi: "弟弟", pinyin: "dìdi", english: "younger brother", pos: "noun" },
        { hanzi: "姐姐", pinyin: "jiějie", english: "older sister", pos: "noun" },
        { hanzi: "妹妹", pinyin: "mèimei", english: "younger sister", pos: "noun" },
        { hanzi: "爷爷", pinyin: "yéye", english: "grandpa (paternal)", pos: "noun" },
        { hanzi: "奶奶", pinyin: "nǎinai", english: "grandma (paternal)", pos: "noun" },
        { hanzi: "家人", pinyin: "jiārén", english: "family members", pos: "noun" },
        {
          hanzi: "朋友",
          pinyin: "péngyou",
          english: "friend",
          pos: "noun",
          example: { hanzi: "这是我朋友。", pinyin: "Zhè shì wǒ péngyou.", english: "This is my friend." },
        },
      ],
      patterns: [
        {
          pattern: "这是 + person",
          example: { hanzi: "这是我妈妈。", pinyin: "Zhè shì wǒ māma.", english: "This is my mum." },
          note: "The go-to pattern for introducing anyone — family, friends, teachers.",
        },
      ],
    },
    {
      heading: "Counting the family: 有, 没有 and the mouth measure 口",
      discovery: {
        problem:
          "A Chinese student says {{我家有五口人|wǒ jiā yǒu wǔ kǒu rén|my family has five people}}. Look at the word {{口|kǒu}} — its original meaning is 'mouth'. So the sentence literally says 'my home has five MOUTHS of people'. Why on earth would you count your family in mouths?",
        idea:
          "For centuries, a household meant mouths to feed at the family table. So {{口|kǒu}} became the special counting word for people **in your own household** — and it's still the natural way to give your family size today. Chinese counts almost everything with a measure word, and each one paints a little picture.",
      },
      body:
        "The verb {{有|yǒu|to have}} says what you've got: {{我有一个哥哥。|Wǒ yǒu yí gè gēge.|I have one older brother.}}\n\nTo say you *don't* have something, use {{没有|méiyǒu|to not have}}: {{我没有弟弟。|Wǒ méiyǒu dìdi.|I don't have a younger brother.}} **Never** 不有 — the verb 有 is the one verb in Chinese that refuses {{不|bù}} and insists on {{没|méi}}.\n\nTwo questions you must recognise:\n- {{你家有几口人？|Nǐ jiā yǒu jǐ kǒu rén?|How many people are in your family?}}\n- {{你有兄弟姐妹吗？|Nǐ yǒu xiōngdì jiěmèi ma?|Do you have brothers and sisters?}}\n\nA model answer, using {{和|hé|and}} to join the list: {{我家有四口人：爸爸、妈妈、姐姐和我。|Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ.|My family has four people: dad, mum, older sister and me.}}\n\nOne number trap: before a measure word, 'two' is {{两|liǎng}}, not {{二|èr}} — {{两个妹妹|liǎng gè mèimei|two younger sisters}}, never 二个妹妹.",
      whyItWorks:
        "Why 口 at home but {{个|gè}} elsewhere? 口 counts mouths fed at one family table — it belongs to the household. People outside your household take the all-purpose measure 个: {{我们班有二十个人|wǒmen bān yǒu èrshí gè rén|our class has twenty people}}. Saying 我家有五个人 is understandable, but 五口人 is what Chinese speakers actually say — the measure word tells the listener 'these are my household'. And notice 几 sits exactly where the answer number will go (你家有几口人 → 我家有五口人) — question words sit in the answer's seat, just like in Greetings.",
      strategies: ["Question words sit in the answer's seat", "Echo the question to build the answer"],
      keyPoints: [
        "有 = have; its negative is ALWAYS 没有, never 不有",
        "口 counts people in your own household: 我家有五口人",
        "个 is the all-purpose measure for people elsewhere: 二十个人",
        "'Two' before a measure word is 两: 两个妹妹",
        "你家有几口人？ / 你有兄弟姐妹吗？ are the two key questions",
      ],
      vocab: [
        {
          hanzi: "有",
          pinyin: "yǒu",
          english: "to have",
          pos: "verb",
          example: { hanzi: "我有一个哥哥。", pinyin: "Wǒ yǒu yí gè gēge.", english: "I have an older brother." },
        },
        { hanzi: "没有", pinyin: "méiyǒu", english: "to not have", pos: "verb" },
        { hanzi: "口", pinyin: "kǒu", english: "measure word for family members", pos: "measure word" },
        { hanzi: "个", pinyin: "gè", english: "general measure word", pos: "measure word" },
        { hanzi: "家", pinyin: "jiā", english: "home, family", pos: "noun" },
        { hanzi: "两", pinyin: "liǎng", english: "two (before a measure word)", pos: "number" },
        { hanzi: "兄弟姐妹", pinyin: "xiōngdì jiěmèi", english: "brothers and sisters, siblings", pos: "noun" },
        { hanzi: "和", pinyin: "hé", english: "and (joining nouns)", pos: "conjunction" },
      ],
      patterns: [
        {
          pattern: "我家有 + number + 口人",
          example: {
            hanzi: "我家有五口人。",
            pinyin: "Wǒ jiā yǒu wǔ kǒu rén.",
            english: "There are five people in my family.",
          },
          note: "口 is reserved for your own household's headcount.",
        },
        {
          pattern: "Subject + 没有 + noun",
          example: { hanzi: "我没有弟弟。", pinyin: "Wǒ méiyǒu dìdi.", english: "I don't have a younger brother." },
          note: "有 is negated with 没, never with 不.",
        },
        {
          pattern: "你有 + noun + 吗？",
          example: {
            hanzi: "你有兄弟姐妹吗？",
            pinyin: "Nǐ yǒu xiōngdì jiěmèi ma?",
            english: "Do you have brothers and sisters?",
          },
        },
      ],
    },
    {
      heading: "Whose is it? 的, the dropped 的 and plural 们",
      discovery: {
        problem:
          "The little word {{的|de}} glues owner to owned: {{我的书|wǒ de shū|my book}}, {{他的狗|tā de gǒu|his dog}}. But listen to real Chinese speakers talk about family: they say {{我妈妈|wǒ māma|my mum}}, not 我的妈妈. The 的 has vanished. Books need glue but mums don't — what's the rule?",
        idea:
          "The closer the relationship, the less glue you need. Family members, close friends and groups you belong to feel like part of you, so 的 drops out: {{我妈妈|wǒ māma}}, {{我家|wǒ jiā|my home}}, {{我们学校|wǒmen xuéxiào|our school}}. Objects you merely own keep the 的: 我的书, 我的狗.",
      },
      body:
        "**Possession with 的**: owner + {{的|de}} + thing. {{妈妈的朋友|māma de péngyou|mum's friend}}, {{我朋友的猫|wǒ péngyou de māo|my friend's cat}}. You can even chain it — read chains left to right, each 的 meaning 'apostrophe-s': {{我朋友的妹妹|wǒ péngyou de mèimei|my friend's younger sister}}.\n\n**Dropping 的**: after a pronoun, with close relationships, natives drop it — {{我妈妈|wǒ māma}}, {{你哥哥|nǐ gēge}}, {{他家|tā jiā}}. Keeping it (我的妈妈) isn't wrong, just a little stiff.\n\n**Plural 们**: {{们|men}} pluralises people words — {{我们|wǒmen|we}}, {{你们|nǐmen|you (plural)}}, {{他们|tāmen|they}}, {{朋友们|péngyoumen|friends}}. But 们 never teams up with a number: 'three friends' is {{三个朋友|sān gè péngyou}}, never 三个朋友们 — the number already shows it's plural.\n\nTo ask who someone is: {{这是谁？|Zhè shì shéi?|Who is this?}} — {{谁|shéi|who}} sits, as always, right where the answer will go.",
      whyItWorks:
        "Why can 的 drop for family but not for books? Because 的 marks a *boundary* between you and a separate thing. Your book is a separate object, so the boundary word stays. Your mum, your home, your class — Chinese treats these as extensions of yourself, so the boundary word feels unnecessary. Grammar is drawing a little map of closeness.",
      strategies: ["Read 的-chains left to right, like apostrophe-s", "Closeness shrinks grammar"],
      keyPoints: [
        "owner + 的 + thing: 我的书, 他的狗",
        "Drop 的 for close relationships: 我妈妈, 我家, 我们学校",
        "们 makes people plural: 我们, 他们, 朋友们",
        "Never combine a number with 们: 三个朋友, not 三个朋友们",
        "这是谁？ = Who is this?",
      ],
      vocab: [
        { hanzi: "的", pinyin: "de", english: "possessive particle ('s)", pos: "particle" },
        { hanzi: "们", pinyin: "men", english: "plural marker for people", pos: "particle" },
        { hanzi: "我们", pinyin: "wǒmen", english: "we, us", pos: "pronoun" },
        { hanzi: "你们", pinyin: "nǐmen", english: "you (plural)", pos: "pronoun" },
        { hanzi: "他们", pinyin: "tāmen", english: "they, them", pos: "pronoun" },
        {
          hanzi: "谁",
          pinyin: "shéi",
          english: "who",
          pos: "question word",
          example: { hanzi: "这是谁？", pinyin: "Zhè shì shéi?", english: "Who is this?" },
        },
        { hanzi: "这", pinyin: "zhè", english: "this", pos: "pronoun" },
      ],
      patterns: [
        {
          pattern: "Owner + 的 + thing",
          example: {
            hanzi: "我朋友的妹妹很可爱。",
            pinyin: "Wǒ péngyou de mèimei hěn kě'ài.",
            english: "My friend's younger sister is very cute.",
          },
          note: "Chains read left to right: my friend → my friend's younger sister.",
        },
        {
          pattern: "Pronoun + family member (no 的)",
          example: { hanzi: "我妈妈是医生。", pinyin: "Wǒ māma shì yīshēng.", english: "My mum is a doctor." },
          note: "Close relationships drop the 的 — it sounds more natural.",
        },
      ],
    },
    {
      heading: "Describing people: the 很 bridge (and why 是 is wrong)",
      discovery: {
        problem:
          "An English-speaking student wrote {{她是很漂亮|tā shì hěn piàoliang}} for 'She IS very pretty' — a word-for-word translation. Every Chinese teacher on the planet has crossed this sentence out. The correct version is {{她很漂亮|tā hěn piàoliang}}, with no 是 at all. But 是 means 'is'… doesn't it?",
        idea:
          "{{是|shì}} only links **nouns to nouns**: 她是学生 (she = a student). Adjectives never take 是. Instead they connect through {{很|hěn}}: subject + 很 + adjective. Remember Greetings, where ages also refused 是? Same deep rule: Chinese adjectives behave like verbs — they don't need 'to be' at all.",
      },
      body:
        "Your describing toolkit:\n\n- {{高|gāo|tall}} / {{矮|ǎi|short (height)}}\n- {{大|dà|big}} / {{小|xiǎo|small}}\n- {{长|cháng|long}} / {{短|duǎn|short (length)}}\n- {{漂亮|piàoliang|pretty}}, {{帅|shuài|handsome}}, {{可爱|kě'ài|cute}}, {{聪明|cōngming|clever}}, {{好|hǎo|good, nice}}\n\nBuild sentences with subject + {{很|hěn}} + adjective: {{我哥哥很高。|Wǒ gēge hěn gāo.|My older brother is tall.}} {{她很聪明。|Tā hěn cōngming.|She is clever.}}\n\nFor hair and eyes, describe the part: {{她的头发很长。|Tā de tóufa hěn cháng.|Her hair is long.}} {{他的眼睛很大。|Tā de yǎnjing hěn dà.|His eyes are big.}} Note the pair of 'shorts': {{矮|ǎi}} for people's height, {{短|duǎn}} for length — short hair is 短, a short person is 矮.\n\n**Placing 也 and 都**: both sit after the subject and before 很 — never at the front, never at the end. {{我也很高。|Wǒ yě hěn gāo.|I'm also tall.}} {{我们都很聪明。|Wǒmen dōu hěn cōngming.|We're all clever.}}\n\nTo join two descriptions, don't reach for 和 — use a comma and {{也|yě}}: {{我的猫很小，也很可爱。|Wǒ de māo hěn xiǎo, yě hěn kě'ài.|My cat is small and very cute.}}",
      whyItWorks:
        "Why is 很 there at all? It's a bridge more than a booster. A bare adjective sounds like a comparison — 他高 hints 'HE's the tall one (not the others)'. Slotting in 很 fills the grammar gap and removes the comparing flavour, which is why this 很 is usually unstressed and often doesn't really mean 'very'. So: nouns link with 是 (她是学生), adjectives link with 很 (她很聪明) — two lanes, no mixing.",
      strategies: ["Don't translate word-for-word", "Two lanes: 是 for nouns, 很 for adjectives"],
      keyPoints: [
        "Subject + 很 + adjective: 她很漂亮 — NEVER 她是很漂亮",
        "是 links nouns only: 她是学生 ✓, 她是高 ✗",
        "矮 = short (height); 短 = short (length, e.g. hair)",
        "也 and 都 go after the subject, before 很",
        "Join descriptions with a comma + 也, not 和",
      ],
      vocab: [
        { hanzi: "高", pinyin: "gāo", english: "tall", pos: "adjective" },
        { hanzi: "矮", pinyin: "ǎi", english: "short (height)", pos: "adjective" },
        { hanzi: "漂亮", pinyin: "piàoliang", english: "pretty, beautiful", pos: "adjective" },
        { hanzi: "帅", pinyin: "shuài", english: "handsome", pos: "adjective" },
        { hanzi: "可爱", pinyin: "kě'ài", english: "cute, lovable", pos: "adjective" },
        {
          hanzi: "聪明",
          pinyin: "cōngming",
          english: "clever, smart",
          pos: "adjective",
          example: { hanzi: "我妹妹很聪明。", pinyin: "Wǒ mèimei hěn cōngming.", english: "My younger sister is clever." },
        },
        { hanzi: "头发", pinyin: "tóufa", english: "hair", pos: "noun" },
        { hanzi: "眼睛", pinyin: "yǎnjing", english: "eye(s)", pos: "noun" },
        { hanzi: "长", pinyin: "cháng", english: "long", pos: "adjective" },
        { hanzi: "短", pinyin: "duǎn", english: "short (length)", pos: "adjective" },
      ],
      patterns: [
        {
          pattern: "Subject + 很 + adjective",
          example: { hanzi: "我哥哥很高。", pinyin: "Wǒ gēge hěn gāo.", english: "My older brother is tall." },
          note: "No 是! This 很 is a bridge and is often not stressed as 'very'.",
        },
        {
          pattern: "Subject + 也 / 都 + 很 + adjective",
          example: { hanzi: "我们都很聪明。", pinyin: "Wǒmen dōu hěn cōngming.", english: "We are all clever." },
          note: "也 and 都 always sit between the subject and 很.",
        },
      ],
    },
    {
      heading: "Pets and jobs: 只, 条, 养 and 在…工作",
      discovery: {
        problem:
          "In Chinese you can't say 'three cats' — you must say {{三只猫|sān zhī māo|three (animal-measure) cats}}. But a fish is {{一条鱼|yì tiáo yú}}, with a completely different counting word. Cats get 只, fish get 条, family members got 口… what decides which counter a noun takes?",
        idea:
          "Measure words sort nouns by shape and kind: {{只|zhī}} for most animals (cats, dogs, birds), {{条|tiáo}} for long, bendy things — fish, and also rivers and roads! English does this too, just less often: two *slices* of bread, three *sheets* of paper. Chinese simply does it for everything.",
      },
      body:
        "The pets: {{狗|gǒu|dog}}, {{猫|māo|cat}}, {{鸟|niǎo|bird}}, {{鱼|yú|fish}}. Count them with the right measure: {{一只狗|yì zhī gǒu}}, {{两只鸟|liǎng zhī niǎo}}, {{两条鱼|liǎng tiáo yú}}.\n\nThe verb for keeping pets is {{养|yǎng|to keep, to raise}}: {{我家养一只狗。|Wǒ jiā yǎng yì zhī gǒu.|My family keeps a dog.}} Ask a friend: {{你家养狗吗？|Nǐ jiā yǎng gǒu ma?|Does your family keep a dog?}}\n\n**Jobs** are nouns, so here 是 IS correct (remember the two lanes!): {{我爸爸是工程师。|Wǒ bàba shì gōngchéngshī.|My dad is an engineer.}} Useful jobs: {{老师|lǎoshī|teacher}}, {{医生|yīshēng|doctor}}, {{工程师|gōngchéngshī|engineer}}, {{商人|shāngrén|businessman/businesswoman}}.\n\nTo say **where** someone works, the place goes BEFORE the verb: subject + {{在|zài|at, in}} + place + {{工作|gōngzuò|to work}}. {{我妈妈在医院工作。|Wǒ māma zài yīyuàn gōngzuò.|My mum works at a hospital.}} {{他在新加坡工作。|Tā zài Xīnjiāpō gōngzuò.|He works in Singapore.}}\n\nAsk about jobs with {{你爸爸做什么工作？|Nǐ bàba zuò shénme gōngzuò?|What job does your dad do?}} — {{做|zuò|to do}}, and 什么 sitting in the answer's seat as usual.",
      whyItWorks:
        "Why does the place come before the verb? Chinese sets the scene first, then acts: 'my mum — at the hospital — works'. English does the opposite ('works at a hospital'), which is why 我妈妈工作在医院 is a classic word-order error. And the two-lane rule from the last section pays off here: 他是医生 uses 是 because 'doctor' is a noun; 他很高 uses 很 because 'tall' is an adjective. Same person, two lanes.",
      strategies: ["Set the scene before the verb", "Sort nouns by shape to pick the measure word"],
      thinkDeeper:
        "条 counts long bendy things, so Chinese counts fish, rivers, roads — even trousers! — with the same word: {{一条鱼|yì tiáo yú}}, 一条路 (one road). Once you know the 'shape logic', new measure words stop being random.",
      keyPoints: [
        "只 for most animals: 一只猫, 一只狗, 一只鸟",
        "条 for long bendy things: 一条鱼",
        "养 = to keep (a pet): 我家养一只狗",
        "Jobs take 是 (they're nouns): 我爸爸是工程师",
        "Place before verb: 在 + place + 工作 — 我妈妈在医院工作",
      ],
      vocab: [
        { hanzi: "狗", pinyin: "gǒu", english: "dog", pos: "noun" },
        { hanzi: "猫", pinyin: "māo", english: "cat", pos: "noun" },
        { hanzi: "鸟", pinyin: "niǎo", english: "bird", pos: "noun" },
        { hanzi: "鱼", pinyin: "yú", english: "fish", pos: "noun" },
        { hanzi: "只", pinyin: "zhī", english: "measure word for most animals", pos: "measure word" },
        { hanzi: "条", pinyin: "tiáo", english: "measure word for long bendy things (fish)", pos: "measure word" },
        {
          hanzi: "养",
          pinyin: "yǎng",
          english: "to keep, to raise (pets)",
          pos: "verb",
          example: { hanzi: "我家养一只猫。", pinyin: "Wǒ jiā yǎng yì zhī māo.", english: "My family keeps a cat." },
        },
        { hanzi: "医生", pinyin: "yīshēng", english: "doctor", pos: "noun" },
        { hanzi: "工程师", pinyin: "gōngchéngshī", english: "engineer", pos: "noun" },
        { hanzi: "商人", pinyin: "shāngrén", english: "businessman, businesswoman", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "Number + measure word + noun",
          example: { hanzi: "我有两条鱼。", pinyin: "Wǒ yǒu liǎng tiáo yú.", english: "I have two fish." },
          note: "只 for most animals; 条 for long bendy things like fish.",
        },
        {
          pattern: "Subject + 在 + place + 工作",
          example: {
            hanzi: "我爸爸在公司工作。",
            pinyin: "Wǒ bàba zài gōngsī gōngzuò.",
            english: "My dad works at a company.",
          },
          note: "Set the scene first: the place always comes before the verb.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "爸爸", pinyin: "bàba", english: "dad, father", pos: "noun" },
      { hanzi: "妈妈", pinyin: "māma", english: "mum, mother", pos: "noun" },
      {
        hanzi: "哥哥",
        pinyin: "gēge",
        english: "older brother",
        pos: "noun",
        example: { hanzi: "我哥哥很高。", pinyin: "Wǒ gēge hěn gāo.", english: "My older brother is tall." },
      },
      { hanzi: "弟弟", pinyin: "dìdi", english: "younger brother", pos: "noun" },
      { hanzi: "姐姐", pinyin: "jiějie", english: "older sister", pos: "noun" },
      { hanzi: "妹妹", pinyin: "mèimei", english: "younger sister", pos: "noun" },
      { hanzi: "爷爷", pinyin: "yéye", english: "grandpa (dad's dad)", pos: "noun" },
      { hanzi: "奶奶", pinyin: "nǎinai", english: "grandma (dad's mum)", pos: "noun" },
      { hanzi: "家人", pinyin: "jiārén", english: "family members", pos: "noun" },
      { hanzi: "朋友", pinyin: "péngyou", english: "friend", pos: "noun" },
      {
        hanzi: "有",
        pinyin: "yǒu",
        english: "to have",
        pos: "verb",
        example: {
          hanzi: "我家有五口人。",
          pinyin: "Wǒ jiā yǒu wǔ kǒu rén.",
          english: "There are five people in my family.",
        },
      },
      { hanzi: "没有", pinyin: "méiyǒu", english: "to not have", pos: "verb" },
      { hanzi: "口", pinyin: "kǒu", english: "measure word for family members", pos: "measure word" },
      { hanzi: "两", pinyin: "liǎng", english: "two (before a measure word)", pos: "number" },
      { hanzi: "兄弟姐妹", pinyin: "xiōngdì jiěmèi", english: "siblings", pos: "noun" },
      { hanzi: "的", pinyin: "de", english: "possessive particle ('s)", pos: "particle" },
      { hanzi: "们", pinyin: "men", english: "plural marker for people", pos: "particle" },
      { hanzi: "高", pinyin: "gāo", english: "tall", pos: "adjective" },
      { hanzi: "矮", pinyin: "ǎi", english: "short (height)", pos: "adjective" },
      {
        hanzi: "漂亮",
        pinyin: "piàoliang",
        english: "pretty",
        pos: "adjective",
        example: { hanzi: "她很漂亮。", pinyin: "Tā hěn piàoliang.", english: "She is very pretty." },
      },
      { hanzi: "帅", pinyin: "shuài", english: "handsome", pos: "adjective" },
      { hanzi: "可爱", pinyin: "kě'ài", english: "cute", pos: "adjective" },
      { hanzi: "聪明", pinyin: "cōngming", english: "clever", pos: "adjective" },
      { hanzi: "头发", pinyin: "tóufa", english: "hair", pos: "noun" },
      { hanzi: "眼睛", pinyin: "yǎnjing", english: "eye(s)", pos: "noun" },
      { hanzi: "长", pinyin: "cháng", english: "long", pos: "adjective" },
      { hanzi: "短", pinyin: "duǎn", english: "short (length)", pos: "adjective" },
      { hanzi: "都", pinyin: "dōu", english: "all, both", pos: "adverb" },
      { hanzi: "狗", pinyin: "gǒu", english: "dog", pos: "noun" },
      { hanzi: "猫", pinyin: "māo", english: "cat", pos: "noun" },
      { hanzi: "只", pinyin: "zhī", english: "measure word for animals", pos: "measure word" },
      { hanzi: "条", pinyin: "tiáo", english: "measure word for fish (long things)", pos: "measure word" },
      {
        hanzi: "养",
        pinyin: "yǎng",
        english: "to keep (pets)",
        pos: "verb",
        example: { hanzi: "你家养狗吗？", pinyin: "Nǐ jiā yǎng gǒu ma?", english: "Does your family keep a dog?" },
      },
      { hanzi: "医生", pinyin: "yīshēng", english: "doctor", pos: "noun" },
      {
        hanzi: "工作",
        pinyin: "gōngzuò",
        english: "to work; job",
        pos: "verb/noun",
        example: {
          hanzi: "我妈妈在医院工作。",
          pinyin: "Wǒ māma zài yīyuàn gōngzuò.",
          english: "My mum works at a hospital.",
        },
      },
    ],
    patterns: [
      {
        pattern: "我家有 + number + 口人",
        example: {
          hanzi: "我家有四口人。",
          pinyin: "Wǒ jiā yǒu sì kǒu rén.",
          english: "There are four people in my family.",
        },
      },
      {
        pattern: "Subject + 没有 + noun",
        example: { hanzi: "我没有哥哥。", pinyin: "Wǒ méiyǒu gēge.", english: "I don't have an older brother." },
      },
      {
        pattern: "Subject + 很 + adjective",
        example: { hanzi: "我朋友很聪明。", pinyin: "Wǒ péngyou hěn cōngming.", english: "My friend is clever." },
      },
      {
        pattern: "Subject + 也 / 都 + 很 + adjective",
        example: { hanzi: "他们都很可爱。", pinyin: "Tāmen dōu hěn kě'ài.", english: "They are all cute." },
      },
      {
        pattern: "Number + measure word + noun",
        example: { hanzi: "两只猫和一条鱼", pinyin: "liǎng zhī māo hé yì tiáo yú", english: "two cats and one fish" },
      },
      {
        pattern: "Subject + 在 + place + 工作",
        example: {
          hanzi: "我爸爸在新加坡工作。",
          pinyin: "Wǒ bàba zài Xīnjiāpō gōngzuò.",
          english: "My dad works in Singapore.",
        },
      },
    ],
    mnemonics: [
      {
        hanzi: "家",
        tip: "A roof (宀) with a pig (豕) underneath — in ancient China, a pig under your roof meant a settled, well-fed HOME.",
      },
      {
        hanzi: "好",
        tip: "女 (woman) + 子 (child) side by side = 'good' — a mother with her child, the picture of all being well.",
      },
      {
        hanzi: "猫",
        tip: "The animal radical 犭 plus 苗 (miáo) for the sound — the cat even says its own pinyin: miāo!",
      },
      {
        hanzi: "眼睛",
        tip: "Both characters contain 目, the eye radical — a picture of an eye turned on its side. Two 目, two eyes.",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "fam-quiz-mcq-q01",
        question: "What does {{姐姐|jiějie}} mean?",
        options: ["Younger sister", "Older sister", "Older brother", "Younger brother"],
        answerIndex: 1,
        explanation:
          "姐姐 is your OLDER sister; your younger sister is {{妹妹|mèimei}}. Chinese sibling words always encode who was born first.",
        guideRef: "Meet the family: why 'brother' is two different words",
        difficulty: "warmup",
      },
      {
        id: "fam-quiz-mcq-q02",
        question: "Your penpal mentions her {{奶奶|nǎinai}}. Who is she talking about?",
        options: [
          "Her dad's mother (grandma)",
          "Her dad's father (grandpa)",
          "Her mum",
          "Her older sister",
        ],
        answerIndex: 0,
        explanation:
          "奶奶 is grandma on the father's side. Grandpa on that side is {{爷爷|yéye}}; mum's parents get different words entirely (外公/外婆).",
        guideRef: "Meet the family: why 'brother' is two different words",
        difficulty: "warmup",
      },
      {
        id: "fam-quiz-mcq-q03",
        question: "Which is the natural way to say 'There are five people in my family'?",
        options: [
          "{{我家有五个人。|Wǒ jiā yǒu wǔ gè rén.}}",
          "{{我家有五口人。|Wǒ jiā yǒu wǔ kǒu rén.}}",
          "{{我家是五口人。|Wǒ jiā shì wǔ kǒu rén.}}",
          "{{我家五口有人。|Wǒ jiā wǔ kǒu yǒu rén.}}",
        ],
        answerIndex: 1,
        explanation:
          "Household headcounts take the 'mouth' measure {{口|kǒu}}: 我家有五口人. 五个人 is understandable but not the set phrase for your own family; 是 is the wrong verb (you HAVE family members); the last option is scrambled.",
        guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
        difficulty: "core",
        hints: [
          "Think about the 'mouths to feed' discovery.",
          "The verb is 有, and family members at home take a special measure word.",
        ],
      },
      {
        id: "fam-quiz-mcq-q04",
        question: "How do you say 'I don't have a younger brother'?",
        options: [
          "{{我不有弟弟。|Wǒ bù yǒu dìdi.}}",
          "{{我没有弟弟。|Wǒ méiyǒu dìdi.}}",
          "{{我没弟弟有。|Wǒ méi dìdi yǒu.}}",
          "{{我不是弟弟。|Wǒ bú shì dìdi.}}",
        ],
        answerIndex: 1,
        explanation:
          "有 is the one verb that refuses 不 — its negative is always {{没有|méiyǒu}}. 我不是弟弟 means 'I am not a younger brother', which answers a different question!",
        guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
        difficulty: "core",
        hints: ["Which little word is the ONLY one allowed to negate 有?", "不有 does not exist in Mandarin."],
      },
      {
        id: "fam-quiz-mcq-q05",
        question: "Which sentence correctly says 'She is very pretty'?",
        options: [
          "{{她是漂亮。|Tā shì piàoliang.}}",
          "{{她是很漂亮。|Tā shì hěn piàoliang.}}",
          "{{她很漂亮。|Tā hěn piàoliang.}}",
          "{{很她漂亮。|Hěn tā piàoliang.}}",
        ],
        answerIndex: 2,
        explanation:
          "Adjectives take the 很 bridge, never 是: subject + 很 + adjective. 她是很漂亮 is the classic word-for-word translation error — 是 links nouns only.",
        guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
        difficulty: "core",
        hints: ["Is 漂亮 a noun or an adjective?", "Two lanes: 是 for nouns, 很 for adjectives."],
        strategy: "Two lanes: 是 for nouns, 很 for adjectives",
      },
      {
        id: "fam-quiz-mcq-q06",
        question:
          "Your friend says {{我很高|wǒ hěn gāo|I'm tall}} — and you're tall too. How do you say 'I'm ALSO tall'?",
        options: [
          "{{我也很高。|Wǒ yě hěn gāo.}}",
          "{{也我很高。|Yě wǒ hěn gāo.}}",
          "{{我很高也。|Wǒ hěn gāo yě.}}",
          "{{我很也高。|Wǒ hěn yě gāo.}}",
        ],
        answerIndex: 0,
        explanation:
          "也 has one legal seat: after the subject, before 很 + adjective. Unlike English 'also/too', it can never start or end the sentence.",
        guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
        difficulty: "core",
        hints: ["也 sits between the subject and the rest.", "Subject + 也 + 很 + adjective."],
      },
      {
        id: "fam-quiz-mcq-q07",
        question: "How do you say 'one fish'?",
        options: [
          "{{一只鱼|yì zhī yú}}",
          "{{一条鱼|yì tiáo yú}}",
          "{{一口鱼|yì kǒu yú}}",
          "{{一个鱼|yí gè yú}}",
        ],
        answerIndex: 1,
        explanation:
          "Fish are long and bendy, so they take {{条|tiáo}} — the same measure word as rivers and roads. 只 is for most other animals; 口 counts family members.",
        guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
        difficulty: "warmup",
      },
      {
        id: "fam-quiz-mcq-q08",
        question: "What does {{我妈妈在医院工作。|Wǒ māma zài yīyuàn gōngzuò.}} tell you?",
        options: [
          "My mum is a doctor.",
          "My mum works at a hospital.",
          "My mum is at home today.",
          "My mum likes hospitals.",
        ],
        answerIndex: 1,
        explanation:
          "在 + place + 工作 = works AT that place ({{医院|yīyuàn|hospital}}). She might well be a doctor — but the sentence only states where she works, so don't infer more than the words say.",
        guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
        difficulty: "core",
        hints: ["Find the place word between 在 and 工作.", "工作 = to work; the sentence says where."],
      },
      {
        id: "fam-quiz-mcq-q09",
        question:
          "Challenge — decode: {{我哥哥和我姐姐都很聪明，可是我不聪明。|Wǒ gēge hé wǒ jiějie dōu hěn cōngming, kěshì wǒ bù cōngming.}} ({{可是|kěshì}} = but). Which statement is TRUE?",
        options: [
          "Both the speaker's older brother and older sister are clever.",
          "The speaker's younger brother is clever.",
          "Everyone in the sentence, including the speaker, is clever.",
          "The speaker's older sister is not clever.",
        ],
        answerIndex: 0,
        explanation:
          "都 scoops up everything before it — 哥哥 AND 姐姐 are both clever. 可是我不聪明 then excludes the speaker (modestly!). No younger brother appears anywhere: 哥哥 is the OLDER brother.",
        guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
        difficulty: "challenge",
        strategy: "Break long sentences into pattern-sized pieces",
        hints: [
          "Chunk it: [我哥哥和我姐姐] + 都很聪明 + 可是 + [我不聪明].",
          "Who exactly does 都 cover? And is 哥哥 older or younger?",
        ],
      },
      {
        id: "fam-quiz-mcq-q10",
        question:
          "Challenge: {{我朋友的妹妹有两只小猫。|Wǒ péngyou de mèimei yǒu liǎng zhī xiǎo māo.}} Who owns the kittens?",
        options: [
          "My friend",
          "My friend's younger sister",
          "My younger sister",
          "My friend's older sister",
        ],
        answerIndex: 1,
        explanation:
          "Read the 的-chain left to right like apostrophe-s: 我朋友 (my friend) + 的妹妹 (…'s younger sister). She is the subject of 有, so SHE owns the two kittens.",
        guideRef: "Whose is it? 的, the dropped 的 and plural 们",
        difficulty: "challenge",
        strategy: "Read 的-chains left to right, like apostrophe-s",
        hints: [
          "Peel the chain: 我朋友 → 我朋友的妹妹.",
          "Whoever sits directly before 有 is the owner.",
        ],
      },
    ],
    qa: [
      {
        id: "fam-quiz-qa-q01",
        question:
          "Translate into Chinese: 'I have one older brother and two younger sisters.' (Characters or pinyin.)",
        modelAnswer: "{{我有一个哥哥和两个妹妹。|Wǒ yǒu yí gè gēge hé liǎng gè mèimei.}}",
        markScheme: [
          "Verb {{有|yǒu}} for 'have'",
          "{{一个哥哥|yí gè gēge}} with the measure word 个",
          "{{两个妹妹|liǎng gè mèimei}} using 两, not 二",
          "List joined with {{和|hé}}",
        ],
        commonError: "二个妹妹 ✗ — before a measure word, 'two' is always 两.",
        guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
        difficulty: "warmup",
        hints: ["Pattern: 我有 + number + 个 + person.", "Which 'two' goes before a measure word?"],
      },
      {
        id: "fam-quiz-qa-q02",
        question:
          "Your penpal writes: {{你家有几口人？你家有谁？|Nǐ jiā yǒu jǐ kǒu rén? Nǐ jiā yǒu shéi?|How many people in your family? Who are they?}} Reply in Chinese: four people — dad, mum, older sister and you.",
        modelAnswer:
          "{{我家有四口人：爸爸、妈妈、姐姐和我。|Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ.|My family has four people: dad, mum, older sister and me.}}",
        markScheme: [
          "{{我家有|wǒ jiā yǒu}} echoing the question",
          "Correct count {{四口人|sì kǒu rén}} with the measure 口",
          "All four members listed, including {{我|wǒ}}",
          "List joined with {{和|hé}} before the last item",
        ],
        commonError:
          "我家有四个人 — understandable, but your own household is counted in 口; also don't forget to count yourself!",
        guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
        difficulty: "core",
        hints: [
          "几 sits in the answer's seat — swap it for the number.",
          "Count yourself as one of the four.",
          "Shape: 我家有…口人：A、B、C和我。",
        ],
        solutions: [
          {
            label: "Echo the question (recommended)",
            steps: [
              "Take 你家有几口人 and swap 你→我: 我家有…口人.",
              "几 sits where the answer goes — replace it with 四: 我家有四口人.",
              "Answer 有谁 by listing: 爸爸、妈妈、姐姐和我 — with 和 before the final person.",
            ],
          },
          {
            label: "List first, then count",
            steps: [
              "Write the members down: 爸爸, 妈妈, 姐姐, 我 — that's 4 mouths at the table.",
              "Slot the count into the frame 我家有 + number + 口人.",
              "Join the two halves with a colon: 我家有四口人：爸爸、妈妈、姐姐和我。",
            ],
          },
        ],
      },
      {
        id: "fam-quiz-qa-q03",
        question:
          "Read the passage, then answer in English. {{我叫王明。我家有五口人：爸爸、妈妈、哥哥、妹妹和我。爸爸是工程师，他在公司工作。妈妈是医生。我们家养一只狗，它很小，也很可爱。|Wǒ jiào Wáng Míng. Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, gēge, mèimei hé wǒ. Bàba shì gōngchéngshī, tā zài gōngsī gōngzuò. Māma shì yīshēng. Wǒmen jiā yǎng yì zhī gǒu, tā hěn xiǎo, yě hěn kě'ài.}} (a) How many people are in Wang Ming's family? (b) What is his dad's job, and where does he work? (c) What is his mum's job? (d) Describe the family pet.",
        modelAnswer:
          "(a) Five. (b) His dad is an engineer and works at a company. (c) His mum is a doctor. (d) They keep a dog; it is small and very cute.",
        markScheme: [
          "Five people ({{五口人|wǔ kǒu rén}})",
          "Dad: engineer ({{工程师|gōngchéngshī}}), works at a company ({{公司|gōngsī}})",
          "Mum: doctor ({{医生|yīshēng}})",
          "Pet: a dog, small and cute ({{一只狗|yì zhī gǒu}}, 很小, 很可爱)",
        ],
        commonError:
          "Mixing up 哥哥 (older brother) and 弟弟 (younger brother) when identifying who is in the family — check the age direction of each sibling word.",
        guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
        difficulty: "core",
        hints: [
          "Scan for the number before 口人.",
          "Jobs come after 是; workplaces sit between 在 and 工作.",
        ],
      },
      {
        id: "fam-quiz-qa-q04",
        question:
          "A classmate wrote {{她是很漂亮。|Tā shì hěn piàoliang.}} to mean 'She is very pretty.' Explain the mistake and write the correct sentence.",
        modelAnswer:
          "是 only links nouns to nouns (e.g. {{她是学生|tā shì xuésheng|she is a student}}). 漂亮 is an adjective, and Chinese adjectives never take 是 — they connect with 很 instead: {{她很漂亮。|Tā hěn piàoliang.}} The classmate translated English 'is' word-for-word.",
        markScheme: [
          "Identifies that 是 is wrong before an adjective",
          "States that 是 links nouns (noun = noun sentences)",
          "States that adjectives use 很 (subject + 很 + adjective)",
          "Gives the corrected sentence 她很漂亮",
        ],
        commonError:
          "'Fixing' the sentence to 她是漂亮 — still wrong! Deleting 很 doesn't help; it's the 是 that must go.",
        guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
        difficulty: "core",
        hints: [
          "What kind of word is 漂亮 — noun or adjective?",
          "Remember the two lanes: 是 for nouns, 很 for adjectives.",
        ],
      },
      {
        id: "fam-quiz-qa-q05",
        question:
          "Challenge — translate into Chinese: 'My friend's older brother is very tall and very handsome. He works in Singapore.'",
        modelAnswer:
          "{{我朋友的哥哥很高，也很帅。他在新加坡工作。|Wǒ péngyou de gēge hěn gāo, yě hěn shuài. Tā zài Xīnjiāpō gōngzuò.}}",
        markScheme: [
          "的-chain {{我朋友的哥哥|wǒ péngyou de gēge}} in the right order",
          "很 + adjective twice, joined with a comma and {{也|yě}} (no 是, no 和)",
          "{{在新加坡工作|zài Xīnjiāpō gōngzuò}} with the place BEFORE 工作",
        ],
        commonError:
          "他工作在新加坡 ✗ — English word order. In Chinese you set the scene first: 在 + place + 工作.",
        guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
        difficulty: "challenge",
        strategy: "Set the scene before the verb",
        hints: [
          "Build the owner chain first: my friend → my friend's older brother.",
          "Join two adjectives with a comma + 也, not 和.",
          "Where does 在新加坡 go — before or after 工作?",
        ],
        solutions: [
          {
            label: "Chunk by pattern",
            steps: [
              "Owner chain: 我朋友 + 的 + 哥哥 → 我朋友的哥哥 ('my friend's older brother').",
              "Descriptions: subject + 很高, then comma + 也很帅 — adjectives take 很, never 是, and pair with 也 rather than 和.",
              "Workplace: subject + 在 + 新加坡 + 工作 — place before verb.",
            ],
          },
          {
            label: "Fix the English order first",
            steps: [
              "Rearrange the English into Chinese order: 'My friend's older brother very tall, also very handsome. He at Singapore works.'",
              "Now translate each word in place: 我朋友的哥哥很高，也很帅。他在新加坡工作。",
              "Check the two danger spots: no 是 before adjectives; 在新加坡 sits before 工作.",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "fam-mcq-a",
        title: "Paper A — My family",
        description: "Family members, 有/没有, the measure 口, possessive 的 and plural 们.",
        questions: [
          {
            id: "fam-mcq-a-q01",
            question: "What does {{弟弟|dìdi}} mean?",
            options: ["Older brother", "Younger brother", "Younger sister", "Older sister"],
            answerIndex: 1,
            explanation:
              "弟弟 is your YOUNGER brother; the older brother is {{哥哥|gēge}}. Age order is built into every sibling word.",
            guideRef: "Meet the family: why 'brother' is two different words",
            difficulty: "warmup",
          },
          {
            id: "fam-mcq-a-q02",
            question: "Which word means your father's father?",
            options: ["{{爷爷|yéye}}", "{{奶奶|nǎinai}}", "{{爸爸|bàba}}", "{{哥哥|gēge}}"],
            answerIndex: 0,
            explanation:
              "爷爷 is grandpa on your dad's side; 奶奶 is that grandma. Your mum's parents have their own separate words.",
            guideRef: "Meet the family: why 'brother' is two different words",
            difficulty: "warmup",
          },
          {
            id: "fam-mcq-a-q03",
            question: "What does {{家人|jiārén}} mean?",
            options: ["Friends", "Family members", "House", "Classmates"],
            answerIndex: 1,
            explanation: "家 (home) + 人 (people) = the people of your home — your family members.",
            guideRef: "Meet the family: why 'brother' is two different words",
            difficulty: "warmup",
          },
          {
            id: "fam-mcq-a-q04",
            question: "What is {{你家有几口人？|Nǐ jiā yǒu jǐ kǒu rén?}} asking?",
            options: [
              "How many people are in your family?",
              "Who is in your family?",
              "Do you have brothers and sisters?",
              "How old is your family?",
            ],
            answerIndex: 0,
            explanation:
              "几 asks 'how many' and sits exactly where the number will go in the answer: 我家有五口人. 'Who is in your family?' would be 你家有谁？",
            guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
            difficulty: "core",
            hints: ["几 always asks for a number.", "The answer will be 我家有…口人."],
          },
          {
            id: "fam-mcq-a-q05",
            question: "How do you say 'I don't have an older sister'?",
            options: [
              "{{我没有姐姐。|Wǒ méiyǒu jiějie.}}",
              "{{我不有姐姐。|Wǒ bù yǒu jiějie.}}",
              "{{我没有妹妹。|Wǒ méiyǒu mèimei.}}",
              "{{我有没姐姐。|Wǒ yǒu méi jiějie.}}",
            ],
            answerIndex: 0,
            explanation:
              "有 is negated by 没, giving 没有. Watch the vocabulary trap: 妹妹 is the YOUNGER sister, so option three denies the wrong sibling.",
            guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
            difficulty: "core",
            hints: ["不有 doesn't exist.", "姐姐 or 妹妹 — which one is the older sister?"],
          },
          {
            id: "fam-mcq-a-q06",
            question: "How do you say 'two younger brothers'?",
            options: [
              "{{二个弟弟|èr gè dìdi}}",
              "{{两个弟弟|liǎng gè dìdi}}",
              "{{两口弟弟|liǎng kǒu dìdi}}",
              "{{二两弟弟|èr liǎng dìdi}}",
            ],
            answerIndex: 1,
            explanation:
              "Before a measure word, 'two' is always 两 — so 两个弟弟. 口 is only for counting your whole household's 人, not individual siblings.",
            guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
            difficulty: "core",
            hints: ["二 counts in maths; a different 'two' goes before measure words."],
          },
          {
            id: "fam-mcq-a-q07",
            question:
              "Fill the gap to say 'My older brother and I are both students': {{我|wǒ}} ___ {{哥哥都是学生。|gēge dōu shì xuésheng.}}",
            options: ["{{和|hé}}", "{{也|yě}}", "{{的|de}}", "{{吗|ma}}"],
            answerIndex: 0,
            explanation:
              "和 joins the two nouns (我和哥哥), and 都 then says 'both'. 的 would make 'my older brother' the only subject, and 也/吗 don't join nouns at all.",
            guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
            difficulty: "core",
            hints: ["You need to JOIN two people into one subject.", "都 ('both') needs a plural subject before it."],
          },
          {
            id: "fam-mcq-a-q08",
            question: "Which of these is NOT correct Chinese?",
            options: [
              "{{我们|wǒmen}}",
              "{{你们|nǐmen}}",
              "{{他们|tāmen}}",
              "{{三个朋友们|sān gè péngyoumen}}",
            ],
            answerIndex: 3,
            explanation:
              "们 never combines with a number — the number 三 already shows there's more than one, so it's 三个朋友. The three plural pronouns are all fine.",
            guideRef: "Whose is it? 的, the dropped 的 and plural 们",
            difficulty: "core",
            hints: ["们 and numbers do the same job.", "Would you say 'three friendses' in English?"],
          },
          {
            id: "fam-mcq-a-q09",
            question: "What does {{这是谁？|Zhè shì shéi?}} mean?",
            options: ["Who is this?", "What is this?", "Where is this?", "Whose is this?"],
            answerIndex: 0,
            explanation:
              "谁 = who, and it sits where the answer will go: 这是谁？ → 这是我爷爷。 'What is this?' would use 什么 instead.",
            guideRef: "Whose is it? 的, the dropped 的 and plural 们",
            difficulty: "core",
          },
          {
            id: "fam-mcq-a-q10",
            question: "What does {{我爸爸是商人。|Wǒ bàba shì shāngrén.}} mean?",
            options: [
              "My dad is a doctor.",
              "My dad is a businessman.",
              "My dad is an engineer.",
              "My dad is a teacher.",
            ],
            answerIndex: 1,
            explanation:
              "商人 = businessperson (商 trade + 人 person). Doctor is 医生, engineer is 工程师, teacher is 老师. Jobs are nouns, so 是 is correct here.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "core",
          },
          {
            id: "fam-mcq-a-q11",
            question:
              "Challenge: a student correctly says {{我们班有二十个人|wǒmen bān yǒu èrshí gè rén|our class has twenty people}} but also {{我家有五口人|wǒ jiā yǒu wǔ kǒu rén}}. Why 个 for the class but 口 for the family?",
            options: [
              "口 is only for counting members of your own household; other groups of people take 个.",
              "口 is used for big numbers and 个 for small numbers.",
              "They are interchangeable — either sentence could use either word.",
              "个 can only be used for students.",
            ],
            answerIndex: 0,
            explanation:
              "口 ('mouth') pictures mouths fed at the family table, so it's reserved for your own household. Everyone else — classmates, friends, strangers — is counted with the all-purpose 个.",
            guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
            difficulty: "challenge",
            strategy: "Look for the culture under the vocabulary",
            hints: ["Think about what 口 literally means.", "Whose mouths does a household feed?"],
          },
          {
            id: "fam-mcq-a-q12",
            question:
              "Challenge — read: {{我姓李。我家有六口人：爸爸、妈妈、爷爷、奶奶、弟弟和我。我没有哥哥，也没有姐姐。|Wǒ xìng Lǐ. Wǒ jiā yǒu liù kǒu rén: bàba, māma, yéye, nǎinai, dìdi hé wǒ. Wǒ méiyǒu gēge, yě méiyǒu jiějie.}} Which statement is TRUE?",
            options: [
              "Li has an older brother.",
              "Li's grandparents live as part of the six-person household.",
              "Li has an older sister.",
              "There are five people in Li's family.",
            ],
            answerIndex: 1,
            explanation:
              "爷爷 and 奶奶 are listed inside the 六口人 — counted as household mouths, so they live as part of the family. The passage explicitly denies an older brother AND an older sister (没有哥哥，也没有姐姐), and the count is six, not five.",
            guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
            difficulty: "challenge",
            strategy: "Use the measure word as evidence",
            hints: [
              "Who exactly is listed inside the 六口人?",
              "What does being counted in 口 tell you about where the grandparents live?",
            ],
          },
        ],
      },
      {
        id: "fam-mcq-b",
        title: "Paper B — Describing people & pets",
        description: "Adjectives with 很, the 是-trap, 也/都, hair and eyes, pets and measure words.",
        questions: [
          {
            id: "fam-mcq-b-q01",
            question: "What does {{高|gāo}} mean?",
            options: ["Short", "Tall", "Big", "Cute"],
            answerIndex: 1,
            explanation: "高 = tall. Its opposite for people's height is {{矮|ǎi}}.",
            guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
            difficulty: "warmup",
          },
          {
            id: "fam-mcq-b-q02",
            question: "What does {{可爱|kě'ài}} mean?",
            options: ["Clever", "Pretty", "Cute", "Tall"],
            answerIndex: 2,
            explanation:
              "可爱 literally means 'able to be loved' — lovable, cute. 聪明 is clever and 漂亮 is pretty.",
            guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
            difficulty: "warmup",
          },
          {
            id: "fam-mcq-b-q03",
            question: "Which animal is a {{猫|māo}}?",
            options: ["Dog", "Bird", "Fish", "Cat"],
            answerIndex: 3,
            explanation: "猫 = cat — it even sounds like miāo! 狗 is dog, 鸟 is bird, 鱼 is fish.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "warmup",
          },
          {
            id: "fam-mcq-b-q04",
            question: "Which sentence correctly says 'Her hair is long'?",
            options: [
              "{{她的头发很长。|Tā de tóufa hěn cháng.}}",
              "{{她的头发是长。|Tā de tóufa shì cháng.}}",
              "{{她的很长头发。|Tā de hěn cháng tóufa.}}",
              "{{她长很头发。|Tā cháng hěn tóufa.}}",
            ],
            answerIndex: 0,
            explanation:
              "Describe the part with subject + 很 + adjective: 她的头发 (her hair) + 很长. 是 never links to an adjective, and 很长 can't wander in front of the noun in this pattern.",
            guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
            difficulty: "core",
            hints: ["The subject is 'her hair', not 'her'.", "Adjectives connect with 很, never 是."],
          },
          {
            id: "fam-mcq-b-q05",
            question: "Choose the measure word: {{三|sān}} ___ {{鸟|niǎo|bird}}",
            options: ["{{只|zhī}}", "{{条|tiáo}}", "{{口|kǒu}}", "{{岁|suì}}"],
            answerIndex: 0,
            explanation:
              "Most animals — cats, dogs, birds — take 只. 条 is for long bendy things like fish, 口 counts household members, 岁 counts years of age.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "core",
            hints: ["Is a bird long and bendy like a fish?"],
          },
          {
            id: "fam-mcq-b-q06",
            question: "What does {{我家养狗。|Wǒ jiā yǎng gǒu.}} mean?",
            options: [
              "My family keeps a dog (dogs).",
              "My house is a dog.",
              "I like dogs.",
              "My family sells dogs.",
            ],
            answerIndex: 0,
            explanation:
              "养 means to keep or raise (a pet) — so 我家养狗 says the family keeps dogs at home. Liking dogs would use a different verb entirely.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "core",
          },
          {
            id: "fam-mcq-b-q07",
            question: "Which word is the opposite of {{高|gāo|tall}} when describing a person?",
            options: ["{{矮|ǎi}}", "{{大|dà}}", "{{小|xiǎo}}", "{{短|duǎn}}"],
            answerIndex: 0,
            explanation:
              "矮 = short in height (people, buildings). 短 is short in LENGTH — short hair is 短, a short person is 矮. Mixing them up is a classic slip.",
            guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
            difficulty: "core",
            hints: ["Chinese has two 'shorts' — height vs length."],
          },
          {
            id: "fam-mcq-b-q08",
            question: "How do you say 'We are all clever'?",
            options: [
              "{{我们都很聪明。|Wǒmen dōu hěn cōngming.}}",
              "{{都我们很聪明。|Dōu wǒmen hěn cōngming.}}",
              "{{我们很聪明都。|Wǒmen hěn cōngming dōu.}}",
              "{{我们很都聪明。|Wǒmen hěn dōu cōngming.}}",
            ],
            answerIndex: 0,
            explanation:
              "都 sits in the same seat as 也: after the subject, before 很 + adjective. It can't lead the sentence, end it, or squeeze inside 很聪明.",
            guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
            difficulty: "core",
            hints: ["Same seat as 也: subject + 都 + 很 + adjective."],
          },
          {
            id: "fam-mcq-b-q09",
            question:
              "Why is {{他是老师|tā shì lǎoshī}} correct, but {{他是高|tā shì gāo}} wrong?",
            options: [
              "是 links a noun to a noun (老师); adjectives like 高 connect with 很 instead.",
              "老师 is more polite than 高.",
              "是 can only be used about family members.",
              "高 needs the plural marker 们 first.",
            ],
            answerIndex: 0,
            explanation:
              "Two lanes: 是 equates nouns (he = a teacher), while adjectives are verb-like and take the 很 bridge — 他很高. Politeness and 们 have nothing to do with it.",
            guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
            difficulty: "core",
            strategy: "Two lanes: 是 for nouns, 很 for adjectives",
            hints: ["What kind of word is 老师? What kind is 高?"],
          },
          {
            id: "fam-mcq-b-q10",
            question: "What does {{他的眼睛很大。|Tā de yǎnjing hěn dà.}} mean?",
            options: ["His eyes are big.", "His hair is long.", "His eyes are small.", "He is tall."],
            answerIndex: 0,
            explanation:
              "眼睛 = eyes, 大 = big — 'his eyes are big'. Hair would be 头发, and small would be 小.",
            guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
            difficulty: "core",
          },
          {
            id: "fam-mcq-b-q11",
            question: "Challenge — spot the error. Which sentence is WRONG?",
            options: [
              "{{我姐姐很漂亮。|Wǒ jiějie hěn piàoliang.}}",
              "{{我姐姐是学生。|Wǒ jiějie shì xuésheng.}}",
              "{{我姐姐是很漂亮。|Wǒ jiějie shì hěn piàoliang.}}",
              "{{我姐姐也很聪明。|Wǒ jiějie yě hěn cōngming.}}",
            ],
            answerIndex: 2,
            explanation:
              "是很漂亮 mixes the two lanes: 是 is for nouns (是学生 ✓), adjectives take 很 alone (很漂亮 ✓, 也很聪明 ✓). 是 + 很 + adjective is the classic English-speaker error.",
            guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
            difficulty: "challenge",
            strategy: "Two lanes: 是 for nouns, 很 for adjectives",
            hints: [
              "Three sentences follow the rules; one mixes two patterns together.",
              "Can 是 and a 很 + adjective ever share one sentence slot?",
            ],
          },
          {
            id: "fam-mcq-b-q12",
            question: "Challenge: which pairing of measure word and animal is WRONG?",
            options: [
              "{{一只狗|yì zhī gǒu}}",
              "{{一条鱼|yì tiáo yú}}",
              "{{一只鸟|yì zhī niǎo}}",
              "{{一条猫|yì tiáo māo}}",
            ],
            answerIndex: 3,
            explanation:
              "Cats take 只 like most animals — 一只猫. 条 belongs to long bendy things (fish, rivers, roads), and a cat isn't one of them.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "challenge",
            strategy: "Sort nouns by shape to pick the measure word",
            hints: ["条 = long and bendy. Which animal here isn't?"],
          },
          {
            id: "fam-mcq-b-q13",
            question:
              "Challenge — read: {{我朋友叫安娜。她很高，她的头发很长，眼睛很大。她家养两条鱼和一只鸟，可是没有狗。|Wǒ péngyou jiào Ānnà. Tā hěn gāo, tā de tóufa hěn cháng, yǎnjing hěn dà. Tā jiā yǎng liǎng tiáo yú hé yì zhī niǎo, kěshì méiyǒu gǒu.}} Which statement is TRUE?",
            options: [
              "Anna keeps a dog.",
              "Anna's family keeps two fish and one bird.",
              "Anna is short and has short hair.",
              "Anna's eyes are small.",
            ],
            answerIndex: 1,
            explanation:
              "养两条鱼和一只鸟 = keeps two fish and one bird; 可是没有狗 rules out the dog. She is 高 (tall) with 长 (long) hair and 大 (big) eyes — so the other options all contradict the text.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "challenge",
            strategy: "Break long sentences into pattern-sized pieces",
            hints: [
              "Find the pets after 养, and watch for 没有.",
              "Check each adjective: 高? 长? 大?",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "fam-qa-a",
        title: "Paper A — Writing about my family",
        description: "Translating and writing about family members, 有/没有 and jobs.",
        questions: [
          {
            id: "fam-qa-a-q01",
            question:
              "Translate into Chinese: 'This is my mum. She is a teacher.' (Characters or pinyin.)",
            modelAnswer: "{{这是我妈妈。她是老师。|Zhè shì wǒ māma. Tā shì lǎoshī.}}",
            markScheme: [
              "Introduction with {{这是|zhè shì}}",
              "{{我妈妈|wǒ māma}} (的 optional — natives drop it)",
              "{{她是老师|tā shì lǎoshī}} — 是 correct here because 老师 is a noun",
            ],
            commonError:
              "她很老师 ✗ — 很 is only for adjectives. 'Teacher' is a noun, so this is exactly where 是 belongs.",
            guideRef: "Meet the family: why 'brother' is two different words",
            difficulty: "warmup",
            hints: ["Introduce with 这是…", "Is 'teacher' a noun or an adjective? Pick the right lane."],
          },
          {
            id: "fam-qa-a-q02",
            question:
              "Translate into Chinese: 'My family has four people: dad, mum, older brother and me.'",
            modelAnswer:
              "{{我家有四口人：爸爸、妈妈、哥哥和我。|Wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.}}",
            markScheme: [
              "{{我家有|wǒ jiā yǒu}} opening",
              "{{四口人|sì kǒu rén}} using the household measure 口",
              "哥哥 chosen (older brother, not 弟弟)",
              "List ends with {{和我|hé wǒ}}",
            ],
            commonError:
              "四个人 — grammatical, but your own household is counted in 口; examiners look for 我家有…口人.",
            guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
            difficulty: "core",
            hints: ["Household headcounts take a special measure word.", "Older brother = 哥哥 or 弟弟?"],
          },
          {
            id: "fam-qa-a-q03",
            question:
              "Your penpal asks: {{你有兄弟姐妹吗？|Nǐ yǒu xiōngdì jiěmèi ma?|Do you have siblings?}} Reply in Chinese: you have no brothers or sisters, but ({{可是|kěshì|but}}) your family keeps a dog.",
            modelAnswer:
              "{{我没有兄弟姐妹，可是我家养一只狗。|Wǒ méiyǒu xiōngdì jiěmèi, kěshì wǒ jiā yǎng yì zhī gǒu.}}",
            markScheme: [
              "{{没有|méiyǒu}} to negate 有 (never 不有)",
              "{{兄弟姐妹|xiōngdì jiěmèi}} for siblings",
              "{{可是|kěshì}} linking the contrast",
              "{{养一只狗|yǎng yì zhī gǒu}} with the measure 只",
            ],
            commonError: "我不有兄弟姐妹 ✗ — 有 is the one verb that only 没 can negate.",
            guideRef: "Counting the family: 有, 没有 and the mouth measure 口",
            difficulty: "core",
            hints: [
              "Echo the question: 你有…吗 → 我没有…",
              "Keeping a pet is 养, and dogs take the measure 只.",
            ],
          },
          {
            id: "fam-qa-a-q04",
            question:
              "Explain the grammar: why can Chinese speakers say {{我妈妈|wǒ māma}} without {{的|de}}, when 'my book' must be {{我的书|wǒ de shū}}?",
            modelAnswer:
              "的 normally glues owner to owned. But for close relationships — family members, close friends, and groups you belong to like 我家 or 我们学校 — the 的 drops, because Chinese treats these people and places as part of you rather than separate possessions. A book is just an object you own, so it keeps the boundary word 的. 我的妈妈 isn't wrong, just unnaturally stiff.",
            markScheme: [
              "的 marks possession between owner and owned",
              "Close relationships (family, close friends, your home/school) drop 的",
              "Objects like 书 keep 的",
              "Notes that 我的妈妈 is grammatical but less natural",
            ],
            commonError:
              "Claiming 我的妈妈 is 'wrong' — it isn't; it's just stiff. The rule is about naturalness, not legality.",
            guideRef: "Whose is it? 的, the dropped 的 and plural 们",
            difficulty: "core",
            hints: [
              "Think about which nouns feel like part of you.",
              "Compare: 我妈妈 / 我家 / 我们学校 vs 我的书 / 我的狗.",
            ],
          },
          {
            id: "fam-qa-a-q05",
            question:
              "Translate into Chinese: 'My grandpa doesn't work. My mum works at a school.' ({{学校|xuéxiào}} = school.)",
            modelAnswer:
              "{{我爷爷不工作。我妈妈在学校工作。|Wǒ yéye bù gōngzuò. Wǒ māma zài xuéxiào gōngzuò.}}",
            markScheme: [
              "{{不工作|bù gōngzuò}} — ordinary verbs are negated with 不",
              "{{在学校|zài xuéxiào}} placed BEFORE {{工作|gōngzuò}}",
              "爷爷 for grandpa, 妈妈 for mum, with 的 naturally dropped",
            ],
            commonError:
              "我妈妈工作在学校 ✗ — English order. Chinese sets the scene first: 在 + place + verb.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "core",
            hints: [
              "工作 is a normal verb — which negator does it take?",
              "Scene first: where does 在学校 sit?",
            ],
            solutions: [
              {
                label: "Slot into the frames",
                steps: [
                  "Frame 1: subject + 不 + verb → 我爷爷 + 不 + 工作.",
                  "Frame 2: subject + 在 + place + 工作 → 我妈妈 + 在学校 + 工作.",
                  "Join as two sentences: 我爷爷不工作。我妈妈在学校工作。",
                ],
              },
              {
                label: "Reorder the English first",
                steps: [
                  "Rewrite in Chinese order: 'My grandpa not works. My mum at school works.'",
                  "Translate word by word in place: 我爷爷不工作。我妈妈在学校工作。",
                  "Check: 有 would need 没, but 工作 is a normal verb, so 不 is right — and note 不 stays bù before the 1st tone of 工.",
                ],
              },
            ],
          },
          {
            id: "fam-qa-a-q06",
            question:
              "Challenge — write 3-4 Chinese sentences introducing your family using these facts: five people in the family; your dad is an engineer; your younger sister is eight years old and very cute.",
            modelAnswer:
              "{{我家有五口人。|Wǒ jiā yǒu wǔ kǒu rén.}} {{我爸爸是工程师。|Wǒ bàba shì gōngchéngshī.}} {{我妹妹今年八岁，她很可爱。|Wǒ mèimei jīnnián bā suì, tā hěn kě'ài.}}",
            markScheme: [
              "{{我家有五口人|wǒ jiā yǒu wǔ kǒu rén}} with the measure 口",
              "Dad's job with 是: {{我爸爸是工程师|wǒ bàba shì gōngchéngshī}}",
              "Sister's age with NO 是: {{八岁|bā suì}}",
              "Description with 很: {{她很可爱|tā hěn kě'ài}}",
              "妹妹 chosen (younger sister)",
            ],
            commonError:
              "我妹妹是八岁 ✗ — ages never take 是 (remember Greetings!). And 她是很可爱 ✗ — adjectives take 很 alone.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "challenge",
            strategy: "One fact, one pattern",
            hints: [
              "Match each fact to a pattern you know: 有…口人 / 是 + job / age + 岁 / 很 + adjective.",
              "Two traps hide here: ages and adjectives BOTH refuse 是.",
              "Join the age and the description with a comma: …八岁，她很可爱。",
            ],
            solutions: [
              {
                label: "One fact, one pattern",
                steps: [
                  "Fact 1 (five people) → frame 我家有…口人 → 我家有五口人。",
                  "Fact 2 (dad = engineer): a job is a noun → 是 lane → 我爸爸是工程师。",
                  "Fact 3 (sister, 8, cute): age pattern number + 岁 with no 是, then 很 + adjective → 我妹妹今年八岁，她很可爱。",
                ],
              },
              {
                label: "Answer the hidden questions",
                steps: [
                  "Turn the facts into questions a penpal would ask: 你家有几口人？你爸爸做什么工作？你妹妹几岁？她可爱吗？",
                  "Answer each with the question's own shape: 我家有五口人。我爸爸是工程师。我妹妹八岁。她很可爱。",
                  "Polish by joining the last two into one sentence with a comma.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fam-qa-b",
        title: "Paper B — Describing people, pets & reading",
        description: "Describing appearance, fixing measure-word errors, penpal replies and a reading passage.",
        questions: [
          {
            id: "fam-qa-b-q01",
            question: "Translate into Chinese: 'My cat is small and very cute.'",
            modelAnswer: "{{我的猫很小，也很可爱。|Wǒ de māo hěn xiǎo, yě hěn kě'ài.}}",
            markScheme: [
              "{{我的猫|wǒ de māo}} with 的 (a pet is a possession — keep the 的)",
              "{{很小|hěn xiǎo}} — no 是",
              "Second adjective joined with a comma + {{也|yě}}: {{也很可爱|yě hěn kě'ài}}",
            ],
            commonError:
              "我的猫很小和很可爱 ✗ — 和 joins nouns, not descriptions. Use a comma and 也 to stack adjectives.",
            guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
            difficulty: "warmup",
            hints: ["Two descriptions = comma + 也.", "和 is for joining nouns like 爸爸和妈妈."],
          },
          {
            id: "fam-qa-b-q02",
            question:
              "Describe your friend in Chinese: he is tall, his hair is short, and his eyes are big.",
            modelAnswer:
              "{{我朋友很高，他的头发很短，眼睛很大。|Wǒ péngyou hěn gāo, tā de tóufa hěn duǎn, yǎnjing hěn dà.}}",
            markScheme: [
              "{{很高|hěn gāo}} for tall — no 是",
              "Hair: {{头发很短|tóufa hěn duǎn}} using 短 (length), not 矮",
              "Eyes: {{眼睛很大|yǎnjing hěn dà}}",
              "Parts described as their own subjects (他的头发…, 眼睛…)",
            ],
            commonError:
              "头发很矮 ✗ — 矮 is short in HEIGHT. Hair is short in LENGTH, so it takes 短.",
            guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
            difficulty: "core",
            hints: [
              "Describe each body part as its own little subject: his hair + 很 + adjective.",
              "Chinese has two 'shorts' — which one is for hair?",
            ],
          },
          {
            id: "fam-qa-b-q03",
            question:
              "Read the passage, then answer in English. {{我叫大卫。我家有三口人：爸爸、妈妈和我。我没有兄弟姐妹，可是我家养一只狗和两条鱼。狗叫小白，它很聪明。爸爸是医生，妈妈在公司工作。|Wǒ jiào Dàwèi. Wǒ jiā yǒu sān kǒu rén: bàba, māma hé wǒ. Wǒ méiyǒu xiōngdì jiěmèi, kěshì wǒ jiā yǎng yì zhī gǒu hé liǎng tiáo yú. Gǒu jiào Xiǎobái, tā hěn cōngming. Bàba shì yīshēng, māma zài gōngsī gōngzuò.}} (a) Does David have any brothers or sisters? (b) What pets does his family keep? (c) What is the dog called, and what is it like? (d) What do his parents do?",
            modelAnswer:
              "(a) No — he has no siblings. (b) One dog and two fish. (c) The dog is called Xiaobai ('Little White') and it is very clever. (d) His dad is a doctor; his mum works at a company.",
            markScheme: [
              "No siblings ({{没有兄弟姐妹|méiyǒu xiōngdì jiěmèi}})",
              "One dog and two fish ({{一只狗和两条鱼|yì zhī gǒu hé liǎng tiáo yú}})",
              "Dog named 小白, described as clever ({{聪明|cōngming}})",
              "Dad: doctor; mum: works at a company ({{公司|gōngsī}})",
            ],
            commonError:
              "Saying the mum's job is 'company' — 在公司工作 only tells you WHERE she works, not what her job title is.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "core",
            hints: [
              "没有…可是… flags a 'no, but…' structure.",
              "Count the pets from their measure words: 一只…, 两条….",
            ],
          },
          {
            id: "fam-qa-b-q04",
            question:
              "Your friend wrote {{我有三条猫和一个狗。|Wǒ yǒu sān tiáo māo hé yí gè gǒu.}} Find and fix the TWO measure-word mistakes, then write the corrected sentence.",
            modelAnswer:
              "Cats take 只, not 条 (they aren't long and bendy), and animals take 只, not the general 个: {{我有三只猫和一只狗。|Wǒ yǒu sān zhī māo hé yì zhī gǒu.}}",
            markScheme: [
              "Spots 三条猫 ✗ → {{三只猫|sān zhī māo}}",
              "Spots 一个狗 ✗ → {{一只狗|yì zhī gǒu}}",
              "Explains 条 = long bendy things; 只 = most animals",
              "Writes the full corrected sentence",
            ],
            commonError:
              "Fixing only one of the two errors — always re-scan the whole sentence after your first correction.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "core",
            hints: [
              "Which animals genuinely take 条?",
              "个 is the lazy default — but animals have their own measure word.",
            ],
          },
          {
            id: "fam-qa-b-q05",
            question:
              "Your penpal asks: {{你家养宠物吗？|Nǐ jiā yǎng chǒngwù ma?|Does your family keep pets?}} Reply in Chinese: yes — one bird, and it is small and very cute.",
            modelAnswer:
              "{{我家养一只鸟，它很小，也很可爱。|Wǒ jiā yǎng yì zhī niǎo, tā hěn xiǎo, yě hěn kě'ài.}}",
            markScheme: [
              "{{我家养|wǒ jiā yǎng}} echoing the question's verb",
              "{{一只鸟|yì zhī niǎo}} with the measure 只",
              "{{它|tā|it}} (or repeated 鸟) as the subject of the description",
              "Adjectives with 很, joined by comma + 也",
            ],
            commonError:
              "一条鸟 ✗ — birds take 只. 条 is only for long bendy things like fish.",
            guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
            difficulty: "core",
            hints: [
              "Echo the question's verb 养 in your answer.",
              "Bird measure word: is a bird long and bendy?",
            ],
          },
          {
            id: "fam-qa-b-q06",
            question:
              "Challenge — translate into Chinese: 'My older brother's friend is very handsome. He is tall, and his dog is also very big.'",
            modelAnswer:
              "{{我哥哥的朋友很帅。他很高，他的狗也很大。|Wǒ gēge de péngyou hěn shuài. Tā hěn gāo, tā de gǒu yě hěn dà.}}",
            markScheme: [
              "的-chain {{我哥哥的朋友|wǒ gēge de péngyou}} — the 的 after 哥哥 must stay",
              "{{很帅|hěn shuài}} and {{很高|hěn gāo}} with no 是",
              "{{他的狗|tā de gǒu}} keeping 的 (a pet is a possession)",
              "{{也|yě}} after the subject 他的狗, before 很大",
            ],
            commonError:
              "我哥哥朋友 ✗ — you may drop 的 after a pronoun (我哥哥), but the link between 哥哥 and 朋友 still needs 的: 我哥哥的朋友.",
            guideRef: "Whose is it? 的, the dropped 的 and plural 们",
            difficulty: "challenge",
            strategy: "Read 的-chains left to right, like apostrophe-s",
            hints: [
              "Build the chain step by step: my older brother → my older brother's friend.",
              "Which 的 in the chain is droppable, and which must stay?",
              "'Also' = 也, sitting after its subject 他的狗.",
            ],
            solutions: [
              {
                label: "Chunk by pattern",
                steps: [
                  "Chain: 我(的)哥哥 + 的 + 朋友 → 我哥哥的朋友 — drop the first 的 (close relation after a pronoun), keep the second.",
                  "Descriptions: 很帅, 很高 — adjectives take the 很 lane, no 是.",
                  "Last clause: subject 他的狗 + 也 + 很大 — 也 sits after the subject, before 很.",
                ],
              },
              {
                label: "Sentence by sentence from English",
                steps: [
                  "Sentence 1: 'My older brother's friend / is very handsome' → 我哥哥的朋友 + 很帅。",
                  "Sentence 2 has two halves joined by 'and': 他很高 + comma + 他的狗也很大。",
                  "Check the traps: no 是 before 帅/高/大, and 也 never starts its clause.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
