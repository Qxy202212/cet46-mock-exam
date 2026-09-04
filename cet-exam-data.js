/**
 * 四级整卷演示数据 — 官方题号 1–25 / 26–35 / 36–45 / 46–55 + 写作/翻译
 * 对齐 2025-06 真题卷面结构；核心演示题保留校园咖啡店 / Eleven Madison Park 等内容
 */
(function (global) {
  var META = {
    title: "2026年英语四级考试真题一",
    totalItems: 57,
    maxScore: 95,
    passScore: 57,
    demoTotal: 31
  };

  var CLOZE_OPTIONS = [
    { key: "A", word: "analyze" }, { key: "B", word: "weekly" }, { key: "C", word: "inventory" },
    { key: "D", word: "patterns" }, { key: "E", word: "support" }, { key: "F", word: "accurate" },
    { key: "G", word: "meeting" }, { key: "H", word: "assistant" }, { key: "I", word: "sales" },
    { key: "J", word: "reports" }, { key: "K", word: "concerns" }, { key: "L", word: "expansion" },
    { key: "M", word: "inspired" }, { key: "N", word: "potential" }, { key: "O", word: "together" }
  ];

  var CLOZE_SEGS = [
    { type: "text", text: "Every Monday, the shop " }, { type: "blank", no: 26 },
    { type: "text", text: " prepares a " }, { type: "blank", no: 27 },
    { type: "text", text: " operation report. The " }, { type: "blank", no: 28 },
    { type: "text", text: " manager uses WPS AI to " }, { type: "blank", no: 29 },
    { type: "text", text: " last week's " }, { type: "blank", no: 30 },
    { type: "text", text: " data and find buying " }, { type: "blank", no: 31 },
    { type: "text", text: ". The report provides " }, { type: "blank", no: 32 },
    { type: "text", text: " for the morning " }, { type: "blank", no: 33 },
    { type: "text", text: " and helps adjust " }, { type: "blank", no: 34 },
    { type: "text", text: " before sharing highlights " }, { type: "blank", no: 35 },
    { type: "text", text: " with the whole team." }
  ];

  var MATCH_PARAS = [
    { key: "A", text: "Many employers still prefer candidates with recent workplace experience. They worry that long gaps on a résumé signal outdated skills, especially when technology changes rapidly across industries." },
    { key: "B", text: "Career counselors often advise older job seekers to rewrite their CVs around achievements rather than years of service. Clear results help hiring teams see value beyond age." },
    { key: "C", text: "Some companies have introduced reverse mentoring, pairing senior staff with younger employees who teach digital tools while learning leadership lessons in return." },
    { key: "D", text: "Government programs in several countries now subsidize mid-career training. The goal is to keep experienced workers productive instead of pushing them into early retirement." },
    { key: "E", text: "Recruiters admit that automated screening systems sometimes reject résumés with graduation years that look \"too old,\" even when the applicant is highly qualified." },
    { key: "F", text: "Flexible work arrangements can help people over 45 re-enter the labor market. Part-time roles and project-based contracts lower the risk for both sides." },
    { key: "G", text: "After a layoff, finding a similar job can take months. Changing fields entirely is harder still, because employers may question whether the applicant can adapt quickly enough." },
    { key: "H", text: "Professional networks matter more with age. Referrals from former colleagues often open doors that online applications alone cannot." },
    { key: "I", text: "Hiring managers say that when they look at applicants who have been out of work for a while, especially those over 45, they often assume those candidates need more training than younger applicants. They also tend to believe older unemployed workers are less adaptable. Some managers argue that government subsidies for retraining would help, while others prefer industry-backed certificates that prove real workplace skills." },
    { key: "J", text: "Learning new skills after 45 is possible, but not everyone joins training programs. Studies show that people from lower-income communities are less likely to enroll, even when courses are free. Those who feel least confident about returning to study are often the ones who need support the most." },
    { key: "K", text: "A recent survey found that many employers value work experience more than a \"perfect\" degree. Candidates who can demonstrate practical problem-solving often beat applicants with stronger academic records but little real-world practice." },
    { key: "L", text: "Ageism remains a barrier. At the same time, inexpensive or free training is widely available on platforms such as Udemy, Lynda.com and YouTube, making it easier for motivated learners to update skills without large tuition fees." },
    { key: "M", text: "Switching careers after 45 is difficult, and getting reemployed after a layoff can be even tougher. Still, continuous learning helps people stay employable, and society benefits when experienced workers remain in the labor force." }
  ];

  var CAREFUL_P1 = "New York's Eleven Madison Park is becoming a vegan (素食主义的) restaurant. The decision surprised many diners who knew the place for its rich meat and fish dishes. The chef said the change was about creativity and the future of fine dining, not a temporary experiment. Plant-based cooking, he argued, can still deliver the same sense of luxury that high-end guests expect.\n\nThe restaurant plans to rebuild its menu around vegetables, grains and creative culinary (烹饪的) techniques. Some long-time customers worry they will miss classic flavors, while others welcome the shift as a sign that top kitchens are taking sustainability more seriously. Industry watchers note that if a famous steakhouse-style destination can go fully plant-based, more restaurants may follow.";

  var CAREFUL_P2 = "With those born with natural talents, it feels as if they excel without really trying. But what about those of us who don't have a natural talent? Duckworth's Grit argues that talent may be overrated, and if you want real success, what you need is grit — passion plus persistence.\n\nGrit lifts unreasonable expectations off our shoulders. It tells us that perfection isn't the goal. Effort means more than natural ability. If at first you fail, try again with grit.";

  var LISTEN_META = [
    { section: "A", group: "ln-a1", material: "News Report One", range: [1, 2],
      directions: "Section A. Directions: In this section, you will hear three news reports. At the end of each news report, you will hear two or three questions. Both the news report and the questions will be spoken only once." },
    { section: "A", group: "ln-a2", material: "News Report Two", range: [3, 4],
      directions: "Section A. Directions: In this section, you will hear three news reports. At the end of each news report, you will hear two or three questions. Both the news report and the questions will be spoken only once." },
    { section: "A", group: "ln-a3", material: "News Report Three", range: [5, 7],
      directions: "Section A. Directions: In this section, you will hear three news reports. At the end of each news report, you will hear two or three questions. Both the news report and the questions will be spoken only once." },
    { section: "B", group: "ln-b1", material: "Conversation One", range: [8, 11],
      directions: "Section B. Directions: In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once." },
    { section: "B", group: "ln-b2", material: "Conversation Two", range: [12, 15],
      directions: "Section B. Directions: In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once." },
    { section: "C", group: "ln-c1", material: "Passage One", range: [16, 18],
      directions: "Section C. Directions: In this section, you will hear three passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once." },
    { section: "C", group: "ln-c2", material: "Passage Two", range: [19, 21],
      directions: "Section C. Directions: In this section, you will hear three passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once." },
    { section: "C", group: "ln-c3", material: "Passage Three", range: [22, 25],
      directions: "Section C. Directions: In this section, you will hear three passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once." }
  ];

  var LISTEN_RICH = {
    8: {
      stem: "Question 8. What does the woman mean?",
      options: [
        { key: "A", text: "She will finish the report after class." },
        { key: "B", text: "She has already submitted the assignment." },
        { key: "C", text: "She needs more time to collect the data." },
        { key: "D", text: "She is not going to attend the meeting." }
      ]
    },
    9: {
      stem: "Question 9. What will the man probably do next?",
      options: [
        { key: "A", text: "Call the professor immediately." },
        { key: "B", text: "Share his notes with the woman." },
        { key: "C", text: "Cancel the group discussion." },
        { key: "D", text: "Wait for the library to open." }
      ]
    }
  };

  var MATCH_RICH = {
    36: "Hiring managers believe unemployed workers over 45 lack good skills and are less adaptable.",
    37: "Switching to a new career is difficult and getting reemployed after a layoff is even tougher.",
    38: "Older job seekers are advised to highlight achievements instead of years of service.",
    39: "Reverse mentoring lets senior staff learn digital tools from younger colleagues.",
    40: "Government programs subsidize mid-career training to keep experienced workers productive.",
    41: "Automated screening systems may reject résumés with graduation years that look too old.",
    42: "Flexible work arrangements help people over 45 re-enter the labor market.",
    43: "Professional networks and referrals matter more as workers grow older.",
    44: "People from lower-income communities are less likely to join free training programs.",
    45: "Many employers value practical work experience more than a perfect degree."
  };

  var CAREFUL_RICH = {
    46: {
      stem: "What do we learn about New York's Eleven Madison Park?",
      options: [
        { key: "A", text: "It has been forced to close for renovation." },
        { key: "B", text: "It is turning into a vegan fine-dining restaurant." },
        { key: "C", text: "It will stop serving lunch to cut costs." },
        { key: "D", text: "It plans to open more branches overseas." }
      ]
    },
    47: {
      stem: "What is the chef's attitude toward plant-based fine dining?",
      options: [
        { key: "A", text: "It is only suitable for casual restaurants." },
        { key: "B", text: "It cannot replace traditional luxury dining." },
        { key: "C", text: "It can still offer creativity and a luxury experience." },
        { key: "D", text: "It should focus mainly on price competition." }
      ]
    }
  };

  function defaultOptions() {
    return [
      { key: "A", text: "Option A." },
      { key: "B", text: "Option B." },
      { key: "C", text: "Option C." },
      { key: "D", text: "Option D." }
    ];
  }

  function findListenMeta(n) {
    for (var i = 0; i < LISTEN_META.length; i++) {
      var m = LISTEN_META[i];
      if (n >= m.range[0] && n <= m.range[1]) return m;
    }
    return LISTEN_META[0];
  }

  function clozeDirections() {
    return "Section A. Directions: In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. You may not use any of the words in the bank more than once.";
  }

  function matchDirections() {
    return "Section B. Directions: In this section, you are going to read a passage with ten statements attached to it. Each statement contains information given in one of the paragraphs. Identify the paragraph from which the information is derived. You may choose a paragraph more than once. Each paragraph is marked with a letter.";
  }

  function carefulDirections() {
    return "Directions: There are 2 passages in this section. Each passage is followed by some questions or unfinished statements. For each of them there are four choices marked A), B), C) and D). You should decide on the best choice and mark the corresponding letter on Answer Sheet 2 with a single line through the centre.";
  }

  function buildQuestions() {
    var qs = [];
    var id = 1;

    qs.push({
      id: id++,
      section: "写作",
      kind: "writing",
      label: "写作题",
      score: 15,
      stem: "Directions: For this part, you are allowed 30 minutes to write an essay. You should write at least 120 words but no more than 180 words.",
      material: "写作要求：请以 “The Value of a Weekly Operation Report” 为题，结合校园咖啡店运营场景，说明周报如何帮助团队发现问题、调整库存并服务例会决策。要求观点明确、结构完整、语言规范。"
    });

    for (var n = 1; n <= 25; n++) {
      var lm = findListenMeta(n);
      var rich = LISTEN_RICH[n];
      qs.push({
        id: id++,
        section: "听力",
        kind: "listening",
        label: "听力题",
        score: 1,
        listenNo: n,
        listenGroup: lm.group,
        listenSection: lm.section,
        listenRange: lm.range,
        audio: "https://mock.audio/cet4/listening/q" + n + ".mp3",
        duration: 48,
        directions: lm.directions,
        material: lm.material,
        stem: rich ? rich.stem : ("Question " + n + ". [听力演示占位题 " + n + "]"),
        options: rich ? rich.options : defaultOptions()
      });
    }

    for (var b = 26; b <= 35; b++) {
      qs.push({
        id: id++,
        section: "阅读",
        kind: "banked_cloze",
        label: "选词填空",
        score: 1,
        clozeGroup: "bc-1",
        blankNo: b,
        directions: clozeDirections(),
        wordBank: CLOZE_OPTIONS.map(function (o) { return { key: o.key, word: o.word }; }),
        segments: CLOZE_SEGS,
        stem: b + ". Choose the best word for blank " + b + ".",
        options: CLOZE_OPTIONS.map(function (o) { return { key: o.key, text: o.word }; })
      });
    }

    for (var m = 36; m <= 45; m++) {
      qs.push({
        id: id++,
        section: "阅读",
        kind: "matching",
        label: "信息匹配",
        score: 1,
        matchGroup: "mt-1",
        matchNo: m,
        directions: matchDirections(),
        paragraphs: MATCH_PARAS,
        stem: MATCH_RICH[m] || ("Statement " + m + ": [信息匹配演示占位题 " + m + "]")
      });
    }

    for (var r = 46; r <= 55; r++) {
      var p2 = r >= 51;
      var richC = CAREFUL_RICH[r];
      qs.push({
        id: id++,
        section: "阅读",
        kind: "careful_reading",
        label: "仔细阅读",
        score: 2,
        passageGroup: p2 ? "cr-2" : "cr-1",
        passageTitle: p2 ? "Passage Two" : "Passage One",
        readingNo: r,
        readingRange: p2 ? [51, 55] : [46, 50],
        directions: carefulDirections(),
        passage: p2 ? CAREFUL_P2 : CAREFUL_P1,
        stem: richC ? richC.stem : ("Question " + r + ". [仔细阅读演示占位题 " + r + "]"),
        options: richC ? richC.options : defaultOptions()
      });
    }

    qs.push({
      id: id++,
      section: "翻译",
      kind: "translation",
      label: "翻译题",
      score: 15,
      stem: "请将下面的中文原文译成英语。",
      source: "云顶咖啡是校内一家小型连锁门店。每周一，店长都会根据上一周的销售流水，整理一份运营分析周报，为上午的例会提供数据支持。请用准确、通顺的英语表达上述内容。"
    });

    return qs;
  }

  /** 预览页顺序：写作 → 听力 → 阅读三节 → 翻译 */
  function buildPreviewItems() {
    var qs = buildQuestions();
    var byKind = {};
    qs.forEach(function (q) {
      var g = "other";
      if (q.kind === "writing") g = "writing";
      else if (q.kind === "listening") g = "listening";
      else if (q.kind === "banked_cloze") g = "cloze";
      else if (q.kind === "matching") g = "matching";
      else if (q.kind === "careful_reading") g = "careful";
      else if (q.kind === "translation") g = "translation";
      if (!byKind[g]) byKind[g] = [];
      byKind[g].push(q);
    });
    var order = ["writing", "listening", "cloze", "matching", "careful", "translation"];
    var items = [];
    var no = 1;
    order.forEach(function (g) {
      (byKind[g] || []).forEach(function (q) {
        var it = {
          no: no++,
          group: g,
          kind: q.kind === "banked_cloze" ? "cloze" : (q.kind === "careful_reading" ? "careful" : q.kind),
          score: q.score,
          label: q.label,
          stem: q.stem,
          options: q.options,
          material: q.material,
          source: q.source,
          directions: q.directions,
          passage: q.passage,
          passageTitle: q.passageTitle,
          listenNo: q.listenNo,
          listenSection: q.listenSection,
          listenRange: q.listenRange,
          listenGroup: q.listenGroup,
          audio: q.audio,
          duration: q.duration,
          blankNo: q.blankNo,
          matchNo: q.matchNo,
          readingNo: q.readingNo
        };
        items.push(it);
      });
    });
    return items;
  }

  function clozeItem(no, blankNo, mine, correct, analysis) {
    return {
      id: "c" + blankNo,
      no: no,
      section: "阅读",
      type: "选词填空",
      kind: "banked_cloze",
      blankNo: blankNo,
      max: 1,
      got: mine === correct ? 1 : 0,
      stem: blankNo + ". Choose the best word for blank " + blankNo + ".",
      options: CLOZE_OPTIONS.map(function (o) { return { key: o.key, text: o.word }; }),
      mine: mine,
      correct: correct,
      analysis: analysis
    };
  }

  function buildScoreItems() {
    var items = [];
    var no = 1;
    items.push({
      id: "w1", no: no++, section: "写作", type: "写作题", kind: "writing", max: 15, got: 8,
      stem: "Directions: For this part, you are allowed 30 minutes to write an essay. You should write at least 120 words but no more than 180 words.",
      material: "请以 “The Value of a Weekly Operation Report” 为题，结合校园咖啡店运营场景，说明周报如何帮助团队发现问题、调整库存并服务例会决策。要求观点明确、结构完整、语言规范。",
      mine: "The Value of a Weekly Operation Report\n\nEvery Monday, the campus coffee shop makes a weekly report. I think this report is very useful. It can help the team find problems and change the inventory. The report also give data for the morning meeting. If we don't have the report, the shop will have many problems. In conclusion, weekly operation report is important for the shop.",
      correct: "The Value of a Weekly Operation Report\n\nA weekly operation report is more than a pile of numbers. In a campus coffee shop, it turns last week's sales into decisions for the week ahead.\n\nFirst, the report helps the team find problems early. If a drink sells poorly for several days, the numbers make the drop visible before the morning meeting. Second, it guides inventory. When the shop knows which milk and syrups moved fastest, staff can restock with less waste. Finally, the report supports the Monday meeting: the manager can share clear figures, and everyone talks about the same facts rather than impressions.\n\nIn short, a short weekly report keeps a small campus shop focused, prepared, and easier to run.",
      analysis: "审题方向正确，能点出周报对发现问题和调整库存的作用，但例会决策写得浅，论证展开不足。结构上有开头与结尾，主体偏短。语言存在 The report also give 等主谓一致错误，词汇和句式较单一。综合 8/15，对应量表「基本切题，思想不够清楚，错误较多」。"
    });

    for (var n = 1; n <= 25; n++) {
      var got = 0;
      var mine = "";
      var correct = "B";
      var analysis = "听力演示占位解析。";
      if (n === 8) { mine = "A"; correct = "C"; got = 0; analysis = "女士表示数据未收齐，选 C。"; }
      if (n === 9) { mine = "B"; correct = "B"; got = 1; analysis = "男士答应分享笔记，选 B。"; }
      items.push({
        id: "l" + n, no: no++, listenNo: n, section: "听力", type: "听力题", kind: "listening",
        max: 1, got: got, material: findListenMeta(n).material,
        stem: "Question " + n + ".", options: defaultOptions(), mine: mine, correct: correct, analysis: analysis
      });
    }

    var clozeDemo = [
      [26, "H", "H", "assistant"], [27, "B", "B", "weekly"], [28, "I", "I", "sales"],
      [29, "A", "A", "analyze"], [30, "C", "F", "accurate"], [31, "D", "D", "patterns"],
      [32, "E", "E", "support"], [33, "J", "G", "meeting"], [34, "K", "C", "inventory"], [35, "O", "O", "together"]
    ];
    clozeDemo.forEach(function (row) {
      items.push(clozeItem(no++, row[0], row[1], row[2], "选词填空 " + row[0] + " 演示解析。"));
    });

    for (var m = 36; m <= 45; m++) {
      var gotM = 0, mineM = "A", correctM = "A", analysisM = "信息匹配演示占位。";
      if (m === 36) { mineM = "I"; correctM = "I"; gotM = 1; analysisM = "对应 I 段。"; }
      if (m === 37) { mineM = "G"; correctM = "M"; gotM = 0; analysisM = "完整对应 M 段。"; }
      items.push({
        id: "m" + m, no: no++, matchNo: m, section: "阅读", type: "信息匹配", kind: "matching",
        max: 1, got: gotM, stem: MATCH_RICH[m] || ("Statement " + m), mine: mineM, correct: correctM, analysis: analysisM
      });
    }

    for (var r = 46; r <= 55; r++) {
      var gotR = 0, mineR = "A", correctR = "A";
      if (r === 46) { mineR = "B"; correctR = "B"; gotR = 2; }
      if (r === 47) { mineR = "A"; correctR = "C"; gotR = 0; }
      items.push({
        id: "r" + r, no: no++, readingNo: r, section: "阅读", type: "仔细阅读", kind: "careful_reading",
        max: 2, got: gotR,
        stem: (CAREFUL_RICH[r] && CAREFUL_RICH[r].stem) || ("Question " + r),
        options: (CAREFUL_RICH[r] && CAREFUL_RICH[r].options) || defaultOptions(),
        mine: mineR, correct: correctR, analysis: "仔细阅读 " + r + " 演示解析。"
      });
    }

    items.push({
      id: "t1", no: no++, section: "翻译", type: "翻译题", kind: "translation", max: 15, got: 12,
      stem: "请将下面的中文原文译成英语。",
      source: "云顶咖啡是校内一家小型连锁门店。每周一，店长都会根据上一周的销售流水，整理一份运营分析周报，为上午的例会提供数据支持。请用准确、通顺的英语表达上述内容。",
      mine: "Yunding Coffee is a small chain store in the campus. Every Monday, the shop manager will according to last week's sales, make a operation analysis weekly report, to provide data support for a morning meeting.",
      correct: "Yunding Coffee is a small campus chain. Every Monday, the store manager compiles a weekly operation-analysis report based on the previous week's sales figures, providing data support for the morning meeting.",
      analysis: "信息点齐全：校内小型连锁、每周一、依据上周销售流水、整理运营分析周报、服务上午例会。语言方面存在 in the campus、a operation、make a report 等搭配与冠词问题，但不影响理解。综合 12/15，对应量表「信息点全，有搭配/冠词等错误但不影响理解」。"
    });

    return items;
  }

  /** 写作 / 翻译成绩报告单：四维量表 + 当前维度分支 */
  var SUBJECTIVE_RUBRICS = {
    writing: {
      tips: [
        "本题要求写一篇 120–180 词的议论文，标题为 The Value of a Weekly Operation Report。",
        "需结合校园咖啡店运营，说明周报如何帮助发现问题、调整库存并服务例会决策。",
        "考后按内容切题性、结构逻辑、语言准确性、语言丰富度与地道性四个维度给分。"
      ],
      steps: [
        "核对标题与场景是否切题，要点是否覆盖发现问题、调整库存、服务例会。",
        "检查是否具备开头—主体—结尾，段落是否有衔接。",
        "标记语法、冠词、主谓一致等语言错误。",
        "评估词汇与句式是否单一，是否出现中式表达。"
      ],
      dims: [
        {
          id: "relevance", name: "内容切题性", max: 4, got: 3,
          comment: "审题正确，能扣住周报价值；例会决策这一要点展开不足。",
          branches: [
            { name: "审题方向正确", desc: "抓住「周报对校园咖啡店运营的价值」，未跑题。", max: 2, got: 2 },
            { name: "要点覆盖完整", desc: "写到发现问题、调整库存；例会决策仅一笔带过。", max: 2, got: 1 }
          ]
        },
        {
          id: "logic", name: "结构逻辑", max: 3, got: 2,
          comment: "有开头与结尾，主体论证偏浅，段落展开不够。",
          branches: [
            { name: "篇章结构完整", desc: "具备引入、主体、收束，但主体只有短句堆叠。", max: 2, got: 1 },
            { name: "段落衔接清楚", desc: "有 In conclusion 等标记，层次尚可辨认。", max: 1, got: 1 }
          ]
        },
        {
          id: "accuracy", name: "语言准确性", max: 4, got: 2,
          comment: "存在主谓一致、冠词等错误，不影响大意但扣分明显。",
          branches: [
            { name: "语法规范", desc: "The report also give 主谓不一致；结论句缺冠词。", max: 2, got: 1 },
            { name: "用词准确", desc: "change the inventory 达意但不精确，宜用 adjust。", max: 2, got: 1 }
          ]
        },
        {
          id: "richness", name: "语言丰富度与地道性", max: 4, got: 1,
          comment: "词汇和句式偏简单，多为 I think / very useful 一类表达。",
          branches: [
            { name: "词汇多样性", desc: "useful、important、problems 反复出现，缺乏替换。", max: 2, got: 0 },
            { name: "句式变化与地道表达", desc: "以简单句为主，makes a weekly report 不够地道。", max: 2, got: 1 }
          ]
        }
      ]
    },
    translation: {
      tips: [
        "本题为汉译英，需完整译出云顶咖啡运营周报场景中的全部信息点。",
        "评分同时看信息完整度与英语表达质量，允许部分分。",
        "考后按内容切题性、结构逻辑、语言准确性、语言丰富度与地道性四个维度给分。"
      ],
      steps: [
        "拆出信息点：校内小型连锁、每周一、上周销售流水、运营分析周报、上午例会、数据支持。",
        "核对学生译文是否漏译、错译或增添无关信息。",
        "检查冠词、介词搭配、名词可数性等语言问题。",
        "判断表达是否通顺、地道，如 compile a report、campus chain。"
      ],
      dims: [
        {
          id: "relevance", name: "内容切题性", max: 5, got: 5,
          comment: "六个信息点均已译出，无漏译关键内容。",
          branches: [
            { name: "信息点完整", desc: "连锁门店、每周一、销售流水、周报、例会均覆盖。", max: 3, got: 3 },
            { name: "无漏译关键信息", desc: "「数据支持」与「运营分析」均有对应表达。", max: 2, got: 2 }
          ]
        },
        {
          id: "logic", name: "结构逻辑", max: 2, got: 2,
          comment: "两句对应原文层次，时间与目的关系清楚。",
          branches: [
            { name: "句序合理", desc: "先介绍门店，再写每周一的周报动作，与原文一致。", max: 1, got: 1 },
            { name: "衔接自然", desc: "Every Monday 承接首句，目的状语能看懂。", max: 1, got: 1 }
          ]
        },
        {
          id: "accuracy", name: "语言准确性", max: 5, got: 3,
          comment: "大意清楚，但有冠词、介词与词序问题。",
          branches: [
            { name: "语法正确", desc: "a operation 应为 an；will according to 缺谓语动词。", max: 3, got: 1 },
            { name: "搭配准确", desc: "in the campus 宜为 on campus；make a report 可接受但偏口语。", max: 2, got: 2 }
          ]
        },
        {
          id: "richness", name: "语言丰富度与地道性", max: 3, got: 2,
          comment: "能完成交际，用词偏直译，地道性不足。",
          branches: [
            { name: "表达地道", desc: "chain store in the campus、make a operation analysis weekly report 较生硬。", max: 2, got: 1 },
            { name: "用词得体", desc: "shop manager、sales、morning meeting 选择基本得体。", max: 1, got: 1 }
          ]
        }
      ]
    }
  };

  function sheetSectionName(q) {
    if (q.kind === "writing") return "Part I  写作";
    if (q.kind === "translation") return "Part IV  翻译";
    if (q.kind === "listening") {
      if (q.listenSection === "A") return "Part II  Section A  短篇新闻";
      if (q.listenSection === "B") return "Part II  Section B  长对话";
      return "Part II  Section C  听力篇章";
    }
    if (q.kind === "banked_cloze") return "Part III  Section A  选词填空";
    if (q.kind === "matching") return "Part III  Section B  信息匹配";
    if (q.kind === "careful_reading") return "Part III  Section C  仔细阅读";
    return q.section || q.label;
  }

  var SHEET_ORDER = [
    "Part I  写作",
    "Part II  Section A  短篇新闻",
    "Part II  Section B  长对话",
    "Part II  Section C  听力篇章",
    "Part III  Section A  选词填空",
    "Part III  Section B  信息匹配",
    "Part III  Section C  仔细阅读",
    "Part IV  翻译"
  ];

  function clozePlain() {
    return CLOZE_SEGS.map(function (s) {
      return s.type === "blank" ? "___" + s.no + "___" : s.text;
    }).join("");
  }

  function excerptOf(text, max) {
    var t = String(text || "").replace(/\s+/g, " ").trim();
    return t.length > max ? t.slice(0, max) + "…" : t;
  }

  /** 官方题库：按母题（材料/篇章）成组，卡片正文为 Directions + 材料，不拆小题 */
  function buildMotherItems(level) {
    level = level || "CET4";
    var qs = buildQuestions();
    var paper = level === "CET6" ? "2026年英语六级考试真题一" : "2026年英语四级考试真题一";
    var citeMul = level === "CET6" ? 0.62 : 1;
    var kp = level;
    var mothers = [];

    function add(cfg) {
      mothers.push({
        id: level + "-" + cfg.id,
        level: level,
        paper: paper,
        kind: cfg.kind,
        typeLabel: cfg.typeLabel,
        difficulty: cfg.difficulty,
        title: cfg.title,
        body: cfg.body,
        excerpt: cfg.body,
        childCount: cfg.childCount,
        qRange: cfg.qRange,
        score: cfg.score,
        tags: cfg.tags,
        cites: Math.max(12, Math.round(cfg.cites * citeMul)),
        schoolCites: cfg.schoolCites != null ? cfg.schoolCites : 0,
        source: "WPS 官方"
      });
    }

    var writing = qs.filter(function (q) { return q.kind === "writing"; })[0];
    add({
      id: "writing",
      kind: "writing",
      typeLabel: "作文题",
      difficulty: "简单",
      title: "Writing",
      body: writing.stem + "\n" + writing.material,
      childCount: 1,
      qRange: "Part I",
      score: 15,
      tags: [kp, "写作", "议论文", "校园生活"],
      cites: 99,
      schoolCites: 0
    });

    LISTEN_META.forEach(function (lm) {
      var start = lm.range[0];
      var end = lm.range[1];
      var count = end - start + 1;
      var diff = lm.section === "A" ? "简单" : (lm.section === "B" ? "中等" : "困难");
      var secName = lm.section === "A" ? "短篇新闻" : (lm.section === "B" ? "长对话" : "听力篇章");
      add({
        id: "listen-" + lm.group,
        kind: "listening",
        typeLabel: "听力题",
        difficulty: diff,
        title: lm.material,
        body: lm.directions + "\nQuestions " + start + " to " + end + " are based on the following " +
          (lm.section === "A" ? "news report" : (lm.section === "B" ? "conversation" : "passage")) +
          ". " + lm.material + ".",
        childCount: count,
        qRange: "Q" + start + "–Q" + end,
        score: count,
        tags: [kp, "听力理解", secName, lm.material],
        cites: 38 + start,
        schoolCites: start % 3
      });
    });

    add({
      id: "cloze",
      kind: "cloze",
      typeLabel: "选词填空",
      difficulty: "中等",
      title: "Section A 选词填空",
      body: clozeDirections() + "\n" + clozePlain(),
      childCount: 10,
      qRange: "Q26–Q35",
      score: 10,
      tags: [kp, "阅读理解", "选词填空", "词汇运用"],
      cites: 99,
      schoolCites: 0
    });

    add({
      id: "matching",
      kind: "matching",
      typeLabel: "信息匹配",
      difficulty: "困难",
      title: "Section B 信息匹配",
      body: matchDirections() + "\n" + MATCH_PARAS.map(function (p) {
        return p.key + ") " + p.text;
      }).join(" "),
      childCount: 10,
      qRange: "Q36–Q45",
      score: 10,
      tags: [kp, "阅读理解", "信息匹配", "段落定位"],
      cites: 74,
      schoolCites: 2
    });

    add({
      id: "careful-p1",
      kind: "careful",
      typeLabel: "仔细阅读",
      difficulty: "中等",
      title: "Passage One",
      body: carefulDirections() + "\nPassage One\n" + CAREFUL_P1,
      childCount: 5,
      qRange: "Q46–Q50",
      score: 10,
      tags: [kp, "阅读理解", "仔细阅读", "主旨细节"],
      cites: 156,
      schoolCites: 1
    });

    add({
      id: "careful-p2",
      kind: "careful",
      typeLabel: "仔细阅读",
      difficulty: "困难",
      title: "Passage Two",
      body: carefulDirections() + "\nPassage Two\n" + CAREFUL_P2,
      childCount: 5,
      qRange: "Q51–Q55",
      score: 10,
      tags: [kp, "阅读理解", "仔细阅读", "推理判断"],
      cites: 91,
      schoolCites: 0
    });

    var trans = qs.filter(function (q) { return q.kind === "translation"; })[0];
    add({
      id: "translation",
      kind: "translation",
      typeLabel: "翻译题",
      difficulty: "困难",
      title: "Translation",
      body: "Directions: For this part, you are allowed 30 minutes to translate a passage from Chinese into English.\n" +
        trans.stem + "\n" + trans.source,
      childCount: 1,
      qRange: "Part IV",
      score: 15,
      tags: [kp, "翻译", "汉译英", "校园场景"],
      cites: 63,
      schoolCites: 0
    });

    return mothers;
  }

  global.CET_EXAM = {
    META: META,
    CLOZE_OPTIONS: CLOZE_OPTIONS,
    CLOZE_SEGS: CLOZE_SEGS,
    MATCH_PARAS: MATCH_PARAS,
    CAREFUL_P1: CAREFUL_P1,
    CAREFUL_P2: CAREFUL_P2,
    buildQuestions: buildQuestions,
    buildPreviewItems: buildPreviewItems,
    buildScoreItems: buildScoreItems,
    SUBJECTIVE_RUBRICS: SUBJECTIVE_RUBRICS,
    buildMotherItems: buildMotherItems,
    sheetSectionName: sheetSectionName,
    SHEET_ORDER: SHEET_ORDER,
    jumpPrefer: {
      writing: { kind: "writing" },
      listening: { listenNo: 8 },
      cloze: { blankNo: 26 },
      matching: { matchNo: 36 },
      careful: { readingNo: 47 },
      translation: { kind: "translation" }
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
