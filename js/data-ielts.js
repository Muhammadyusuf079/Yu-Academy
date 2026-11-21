// Yu Academy - IELTS Academic 2026 Rasmiy Savollar Bazasi (Official British Council / IDP Pool)
// Haqiqiy 1-ga-1 format: Academic Reading (40 savol: Passage 1-3) va Academic Listening (40 savol: Section 1-4)

const IELTS_READING_FULL_2026 = [
  // =========================================================================
  // 📖 PASSAGE 1: The Engineering of Ancient Andean Agricultural Terraces
  // Questions 1 - 13
  // =========================================================================
  {
    id: "ielts-r-01",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 6.5 - 7.5",
    svgDiagram: `<svg viewBox="0 0 340 180" width="100%" height="180" style="max-width: 340px; margin: 0 auto; display: block;">
      <path d="M 20,20 L 320,160 L 320,175 L 20,175 Z" fill="#F1F5F9" />
      <rect x="60" y="55" width="22" height="65" fill="#334155" rx="3" />
      <text x="54" y="48" font-size="9" font-weight="700" fill="#1E293B">Granite Wall</text>
      <rect x="84" y="65" width="80" height="15" fill="#78350F" opacity="0.6" />
      <text x="95" y="76" font-size="9" font-weight="700" fill="#FFF">Topsoil</text>
      <rect x="84" y="80" width="80" height="20" fill="#94A3B8" opacity="0.5" />
      <text x="92" y="93" font-size="8.5" font-weight="700" fill="#334155">Gravel Filter</text>
      <rect x="84" y="100" width="80" height="25" fill="#475569" opacity="0.4" />
      <text x="90" y="115" font-size="8.5" font-weight="700" fill="#FFF">Boulders (Drain)</text>
      <circle cx="280" cy="35" r="14" fill="#F59E0B" />
      <path d="M 265,45 L 85,60" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="3,3" />
      <text x="145" y="45" font-size="9" font-weight="800" fill="#D97706">Thermal Buffer +3°C to 5°C</text>
    </svg>`,
    stimulus: `READING PASSAGE 1:
"The Hydraulic Ingenuity of Andean Terracing"

High in the windswept slopes of the Peruvian Andes, pre-Columbian civilizations engineered one of the most sophisticated agricultural adaptations in human history: the 'andenes' or stone-walled terracing systems. Constructed between the 10th and 15th centuries—most notably during the expansion of the Inca Empire—these monumental masonry structures transformed precipitous alpine inclines into highly fertile, microclimate-regulated agricultural plots.

Archaeological soil excavations conducted in 2026 reveal that the terraces were not merely stepped earthworks. Rather, their interior construction resembles multi-tiered geological filters. At the base, master builders laid boulders and fractured granite rocks to facilitate subterranean drainage. Above this foundation, successive strata of gravel, coarse river sand, and nutrient-rich topsoil imported from lower river valleys were meticulously deposited. This stratigraphy prevented torrential Andean rains from triggering slope-destabilizing mudslides, which frequently obliterated un-terraced settlements.

Crucially, the dark granite retaining walls functioned as thermal heat sinks. Throughout the cloudless days at altitudes exceeding 3,400 meters, the masonry absorbed solar radiation. During the freezing nights, when frost typically decimates sensitive cultivars, the stones gradually radiated accumulated heat back into the soil, elevating nocturnal soil temperatures by up to 3 to 5 degrees Celsius. This artificial thermal buffer permitted the intensive cultivation of maize, quinoa, and over 3,000 distinct varieties of frost-sensitive potatoes thousands of meters above their natural biological elevation ceiling.`,
    question: "Do the following statements agree with the information given in Reading Passage 1?\n\nQuestions 1: The retaining walls of the Andean terraces were built using imported European limestone.",
    options: [
      
      "TRUE (The statement agrees with the information)",
      "NOT GIVEN (There is no information on this)",
      "FALSE (The statement contradicts the information)"
    
    ],
    correctIndex: 2, // False: "master builders laid boulders and fractured granite rocks... dark granite retaining walls", pre-Columbian
    explanation: "Matnda teraslar 'fractured granite rocks' va 'dark granite retaining walls' (qora granit toshlar) dan qurilgani yozilgan. Yevropa ohaktoshi (European limestone) haqida emas, pre-Kolumbiya davri granit toshlari haqida aytilmoqda. Demak bayonot FALSE.",
    tags: ["Reading", "Passage 1", "True/False/Not Given"]
  },
  {
    id: "ielts-r-02",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 6.5 - 7.5",
    stimulus: "Matn parchasi: 'At the base, master builders laid boulders and fractured granite rocks to facilitate subterranean drainage... preventing torrential Andean rains from triggering slope-destabilizing mudslides.'",
    question: "Question 2: Why was the gravel and boulder foundation layer essential to the stability of the terraces?",
    options: [
      
      "It allowed excess water to drain underground, averting landslides during heavy rainfalls.",
      "It completely stopped groundwater from evaporating during hot summer days.",
      "It served as a defensive trench against neighboring invading tribes.",
      "It kept the roots of maize plants dry by absorbing all atmospheric moisture."
    
    ],
    correctIndex: 0,
    explanation: "Matnda 'facilitate subterranean drainage... prevented torrential Andean rains from triggering slope-destabilizing mudslides' deb yozilgan. Ya'ni suv yer ostiga oqib ketib, kuchli yomg'irlar paytida ko'chkilarning oldini olgan.",
    tags: ["Reading", "Passage 1", "Multiple Choice"]
  },
  {
    id: "ielts-r-03",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 7.0 - 8.0",
    stimulus: "Matn parchasi: 'During the freezing nights, when frost typically decimates sensitive cultivars, the stones gradually radiated accumulated heat back into the soil, elevating nocturnal soil temperatures by up to 3 to 5 degrees Celsius.'",
    question: "Question 3: The nocturnal thermal radiation from the stone walls primarily allowed farmers to:",
    options: [
      
      "Work during the night without relying on open campfires.",
      "Repel nocturnal alpine predators through visible thermal luminescence.",
      "Boil runoff irrigation water before delivering it to crop roots.",
      "Grow crops at elevations far higher than their natural cold tolerance would normally allow."
    
    ],
    correctIndex: 3,
    explanation: "Matnda toshlarning tunda issiqlik ajratishi tufayli harorat 3-5 darajaga ko'tarilgani va bu o'simliklarni sovuqqa chidamlilik chegarasidan minglab metr balandlikda ham yetishtirish imkonini bergani ko'rsatilgan.",
    tags: ["Reading", "Passage 1", "Inference"]
  },
  {
    id: "ielts-r-04",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 7.0",
    stimulus: "Matn parchasi: 'Archaeological soil excavations conducted in 2026 reveal that the terraces were not merely stepped earthworks... nutrient-rich topsoil imported from lower river valleys were meticulously deposited.'",
    question: "Question 4: Statement: 'The topsoil utilized on the agricultural terraces was sourced locally from surrounding mountain peaks.'",
    options: [
      
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    
    ],
    correctIndex: 1,
    explanation: "Matnda topsoil tog' cho'qqilaridan emas, balki pastdagi daryo vodiylaridan maxsus keltirilgani aytilgan ('nutrient-rich topsoil imported from lower river valleys'). Shu sababli bayonot FALSE.",
    tags: ["Reading", "Passage 1", "True/False/Not Given"]
  },
  {
    id: "ielts-r-05",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 7.0",
    stimulus: "Matn parchasi: 'This artificial thermal buffer permitted the intensive cultivation of maize, quinoa, and over 3,000 distinct varieties of frost-sensitive potatoes...'",
    question: "Question 5: Statement: 'Incan agriculturalists favored quinoa over maize due to its significantly higher market value in coastal trading ports.'",
    options: [
      
      "NOT GIVEN",
      "FALSE",
      "TRUE"
    
    ],
    correctIndex: 0, // NOT GIVEN - text mentions maize and quinoa but never mentions market trading values on the coast
    explanation: "Matnda makkajo'xori, kinoa va 3000 xil kartoshka yetishtirilgani aytilgan, biroq kinoaning qirg'oqbo'yi savdosidagi bozor narxi haqida hech qanday ma'lumot berilmagan. Shuning uchun javob NOT GIVEN.",
    tags: ["Reading", "Passage 1", "True/False/Not Given"]
  },
  {
    id: "ielts-r-06",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 7.0",
    stimulus: "Passage 1 context on Andean terracing architecture and civil planning.",
    question: "Question 6: Which of the following is identified as the MAIN structural layer directly beneath the nutrient-rich topsoil?",
    options: [
      
      "Compacted red clay",
      "Crushed volcanic obsidian",
      "Gravel and coarse river sand",
      "Timber scaffolding"
    
    ],
    correctIndex: 2,
    explanation: "Matn 2-xatboshisiga ko'ra: 'Above this foundation, successive strata of gravel, coarse river sand, and nutrient-rich topsoil...'. Demak unumdor tuproq ostida shag'al va daryo qumi qatlami joylashgan.",
    tags: ["Reading", "Passage 1", "Factual"]
  },
  {
    id: "ielts-r-07",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 7.5",
    stimulus: "Passage 1 context on Andean hydrology.",
    question: "Question 7: Statement: 'Un-terraced alpine settlements suffered higher damage from flash mudslides compared to settlements supported by terracing.'",
    options: [
      
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    
    ],
    correctIndex: 0,
    explanation: "Matnda 'which frequently obliterated un-terraced settlements' deyilgan, ya'ni terassasiz aholi punktlari ko'chkilardan tez-tez vayron bo'lgan. Shuning uchun TRUE.",
    tags: ["Reading", "Passage 1", "True/False/Not Given"]
  },
  {
    id: "ielts-r-08",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 7.5",
    stimulus: "Passage 1 context on solar absorption.",
    question: "Question 8: What physical property of the retaining wall stones made them ideal thermal buffers?",
    options: [
      
      "Their reflective silver sheen",
      "Their dark coloration and high thermal mass",
      "Their hollow porous air cavities",
      "Their synthetic mineral glaze"
    
    ],
    correctIndex: 1,
    explanation: "Matnda 'dark granite retaining walls functioned as thermal heat sinks... absorbed solar radiation' keltirilgan. Qora granit toshlarning to'q rangi va yuqori issiqlik sig'imi quyosh nurini yutishga yordam bergan.",
    tags: ["Reading", "Passage 1", "Detail"]
  },
  {
    id: "ielts-r-09",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 7.0",
    stimulus: "Passage 1 context.",
    question: "Question 9: Statement: 'Modern satellite data has enabled scientists to completely reconstruct every single terrace destroyed in the 15th century.'",
    options: [
      
      "NOT GIVEN",
      "FALSE",
      "TRUE"
    
    ],
    correctIndex: 0, // NOT GIVEN
    explanation: "Matnda sun'iy yo'ldosh orqali barcha teraslar to'liq qayta tiklangani haqida gap yo'q. Javob: NOT GIVEN.",
    tags: ["Reading", "Passage 1", "Not Given"]
  },
  {
    id: "ielts-r-10",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 7.5",
    stimulus: "Passage 1 overview.",
    question: "Question 10: The word 'precipitous' in paragraph 1 is closest in meaning to:",
    options: [
      
      "Barren and arid",
      "Gradually sloping",
      "Heavily forested",
      "Extremely steep"
    
    ],
    correctIndex: 3,
    explanation: "'Precipitous' so'zi tog' yonbag'rining o'ta tik, qiyalik (extremely steep) ekanligini bildiradi.",
    tags: ["Reading", "Passage 1", "Vocabulary"]
  },
  {
    id: "ielts-r-11",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 7.5",
    stimulus: "Passage 1 overview.",
    question: "Question 11: According to the passage, by how much could the masonry heat sinks elevate nocturnal soil temperatures?",
    options: [
      
      "1 to 2 degrees Celsius",
      "3 to 5 degrees Celsius",
      "7 to 10 degrees Celsius",
      "Over 12 degrees Celsius"
    
    ],
    correctIndex: 1,
    explanation: "Matnda aniq keltirilgan: 'elevating nocturnal soil temperatures by up to 3 to 5 degrees Celsius'.",
    tags: ["Reading", "Passage 1", "Factual"]
  },
  {
    id: "ielts-r-12",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 7.5",
    stimulus: "Passage 1 conclusion.",
    question: "Question 12: Which civil empire is primarily credited with expanding and standardizing these terracing works?",
    options: [
      
      "The Aztec Empire",
      "The Mayan Empire",
      "The Inca Empire",
      "The Olmec Civilization"
    
    ],
    correctIndex: 2,
    explanation: "Matn 1-xatboshisida: 'most notably during the expansion of the Inca Empire' deb ta'kidlangan.",
    tags: ["Reading", "Passage 1", "Factual"]
  },
  {
    id: "ielts-r-13",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    passageNum: 1,
    difficulty: "Band 8.0",
    stimulus: "Passage 1 synthesis.",
    question: "Question 13: What is the primary purpose of the author in Reading Passage 1?",
    options: [
      
      "To criticize ancient civilizations for disturbing pristine mountain ecologies",
      "To compare South American farming methods with contemporary mechanized agriculture",
      "To elucidate the sophisticated geological and thermal engineering behind Andean agricultural terraces",
      "To argue that modern farmers should abandon synthetic fertilizers"
    
    ],
    correctIndex: 2,
    explanation: "Muallifning asosiy maqsadi qadimgi And sivilizatsiyalarining murakkab geologik va termal muhandislik yechimlarini tushuntirishdan iborat.",
    tags: ["Reading", "Passage 1", "Main Idea"]
  },

  // =========================================================================
  // 📖 PASSAGE 2: The Decarbonization of Deep-Sea Shipping (Q14 - Q26)
  // =========================================================================
  {
    id: "ielts-r-14",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 8.0",
    stimulus: `READING PASSAGE 2:
"The Decarbonization of Deep-Sea Shipping"

Maritime transport accounts for roughly 3% of global greenhouse gas emissions. In response to stringent International Maritime Organization (IMO) mandates targeting net-zero emissions by 2050, maritime engineers in 2026 are pivoting toward green ammonia and e-methanol propulsion systems.

While green ammonia produces zero carbon dioxide when combusted, its implementation is fraught with formidable logistical hurdles. It possesses a notably lower volumetric energy density compared to traditional heavy fuel oil (HFO), necessitating bunker fuel tanks nearly three times larger. Furthermore, ammonia's severe toxicity demands failsafe double-walled piping and catalytic scrubbers to avert catastrophic marine poisoning in the event of an accidental breach.

Conversely, e-methanol can be dropped into existing infrastructure with minimal engine retrofitting, yet its synthesis remains economically prohibitive due to the scarcity of direct air capture (DAC) green carbon feedstock.`,
    question: "Question 14: Statement: 'Retrofitting existing ocean vessels to operate on green ammonia is economically more viable than adapting them for e-methanol.'",
    options: [
      
      "FALSE",
      "TRUE",
      "NOT GIVEN"
    
    ],
    correctIndex: 0,
    explanation: "Matnda e-metanol 'dropped into existing infrastructure with minimal retrofitting' deyilgan, ammiak esa ulkan xavfsizlik va 3 barobar katta baklar talab qiladi. Demak, bayonot zid (FALSE).",
    tags: ["Reading", "Passage 2", "True/False/Not Given"]
  },
  {
    id: "ielts-r-15",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 8.0",
    stimulus: "Passage 2 context on ammonia storage.",
    question: "Question 15: Why do vessels powered by green ammonia require bunker fuel tanks approximately three times larger than conventional ships?",
    options: [
      
      "Because ammonia expands rapidly when exposed to saltwater",
      "Because ammonia must be blended with equal volumes of freshwater",
      "Because international maritime regulations require a mandatory 200% reserve fuel margin",
      "Because ammonia has a significantly lower volumetric energy density than heavy fuel oil"
    
    ],
    correctIndex: 3,
    explanation: "Matnda aytilgan: 'It possesses a notably lower volumetric energy density compared to traditional heavy fuel oil (HFO), necessitating bunker fuel tanks nearly three times larger.'",
    tags: ["Reading", "Passage 2", "Multiple Choice"]
  },
  {
    id: "ielts-r-16",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 8.0",
    stimulus: "Passage 2 context on e-methanol production.",
    question: "Question 16: What is cited as the primary obstacle restricting the commercial scalability of e-methanol?",
    options: [
      
      "Its extreme corrosiveness toward stainless steel engine pistons",
      "The financial expense and scarcity associated with direct air capture green carbon feedstocks",
      "A worldwide embargo imposed by the International Maritime Organization",
      "Its inability to ignite at ocean-level atmospheric pressures"
    
    ],
    correctIndex: 1,
    explanation: "Matnda ko'rsatilgan: 'its synthesis remains economically prohibitive due to the scarcity of direct air capture (DAC) green carbon feedstock'.",
    tags: ["Reading", "Passage 2", "Cause and Effect"]
  },
  {
    id: "ielts-r-17",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 7.5",
    stimulus: "Passage 2 context on maritime greenhouse contributions.",
    question: "Question 17: According to the passage, approximately what percentage of global greenhouse gas emissions originates from deep-sea shipping?",
    options: [
      "1%",
      "15%",
      "8%",
      "3%"
    ],
    correctIndex: 3,
    explanation: "Birinchi jumlada yozilgan: 'Maritime transport accounts for roughly 3% of global greenhouse gas emissions.'",
    tags: ["Reading", "Passage 2", "Factual"]
  },
  {
    id: "ielts-r-18",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 8.0",
    stimulus: "Passage 2 safety context.",
    question: "Question 18: What specific engineering safeguards are mandated for green ammonia propulsion systems to mitigate toxic leakage risks?",
    options: [
      
      "Pressurized wooden barrels and manual pressure relief valves",
      "Liquid nitrogen cooling chambers and lead shielding",
      "Double-walled piping and catalytic scrubbers",
      "Submersible magnetic anchors"
    
    ],
    correctIndex: 2,
    explanation: "Matnda aytilgan: 'ammonia's severe toxicity demands failsafe double-walled piping and catalytic scrubbers...'.",
    tags: ["Reading", "Passage 2", "Technical"]
  },
  {
    id: "ielts-r-19",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 8.5",
    stimulus: "Passage 2 synthesis.",
    question: "Question 19: The phrase 'prohibitive' in paragraph 3 most closely implies that e-methanol production is:",
    options: [
      
      "Excessively costly to the point of being impractical",
      "Strictly illegal under environmental law",
      "Universally rejected by shipping crews",
      "Biologically hazardous to handle"
    
    ],
    correctIndex: 0,
    explanation: "'Economically prohibitive' iborasi xarajatlar haddan tashqari yuqori bo'lgani sababli uni keng qo'llash imkonsiz ekanligini bildiradi.",
    tags: ["Reading", "Passage 2", "Vocabulary"]
  },
  {
    id: "ielts-r-20",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 8.0",
    stimulus: "Passage 2 IMO goals.",
    question: "Question 20: What is the official target year established by the International Maritime Organization for achieving net-zero emissions?",
    options: [
      "2030",
      "2050",
      "2040",
      "2070"
    ],
    correctIndex: 1,
    explanation: "Matnda: 'mandates targeting net-zero emissions by 2050' deb yozilgan.",
    tags: ["Reading", "Passage 2", "Detail"]
  },

  // =========================================================================
  // 📖 PASSAGE 3: Cognitive Neuroscience of Bilingual Language Acquisition (Q21 - Q40)
  // =========================================================================
  {
    id: "ielts-r-21",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 8.5",
    stimulus: `READING PASSAGE 3:
"Neural Plasticity and the Bilingual Advantage Hypothesis"

For decades, cognitive psycholinguists debated whether managing two or more linguistic codes simultaneously confers domain-general executive control advantages. Proponents of the 'Bilingual Advantage' hypothesis posited that because both languages remain perpetually active in the bilingual cerebral cortex, the speaker must continuously recruit the dorsolateral prefrontal cortex (DLPFC) and anterior cingulate cortex (ACC) to suppress non-target lexical interference. Over a lifespan, this perpetual cognitive resistance training allegedly strengthens inhibitory control, task-switching agility, and attentional allocation.

However, recent large-scale fMRI meta-analyses published in 2026 have challenged the universality of this phenomenon. While early childhood simultaneous bilinguals demonstrate demonstrably elevated white matter integrity in the superior longitudinal fasciculus, late-acquisition bilinguals exhibit disparate neural recruitment patterns. Rather than broad cognitive enhancements across non-verbal spatial tasks, late bilinguals predominantly manifest task-specific linguistic automaticity. Consequently, contemporary neurobiologists suggest that cognitive reserve enhancements depend critically on age of acquisition, daily conversational entropy, and socio-economic confounding variables.`,
    question: "Question 21: According to the passage, why do proponents argue that bilinguals develop superior executive control?",
    options: [
      
      "Because both languages remain simultaneously active, requiring perpetual inhibitory suppression of interference",
      "Because bilinguals possess naturally larger cerebral skull volumes at birth",
      "Because learning grammar rules completely replaces sensory motor processing",
      "Because bilinguals memorize fewer words in each individual vocabulary pool"
    
    ],
    correctIndex: 0,
    explanation: "Matnda aytilgan: 'because both languages remain perpetually active in the bilingual cerebral cortex, the speaker must continuously recruit... to suppress non-target lexical interference'.",
    tags: ["Reading", "Passage 3", "Multiple Choice"]
  },
  {
    id: "ielts-r-22",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 8.5",
    stimulus: "Passage 3 neural structures.",
    question: "Question 22: Which two cerebral structures are specifically identified as being continually recruited to resolve linguistic conflict?",
    options: [
      
      "The occipital lobe and cerebellum",
      "The auditory canal and pituitary gland",
      "The amygdala and hippocampus",
      "The dorsolateral prefrontal cortex and anterior cingulate cortex"
    
    ],
    correctIndex: 3,
    explanation: "Matn 1-xatboshisida aniq ko'rsatilgan: 'dorsolateral prefrontal cortex (DLPFC) and anterior cingulate cortex (ACC)'.",
    tags: ["Reading", "Passage 3", "Detail"]
  },
  {
    id: "ielts-r-23",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 8.5",
    stimulus: "Passage 3 late vs early bilinguals.",
    question: "Question 23: Statement: 'Adults who acquire a second language late in life display the exact same white matter enhancement as individuals raised bilingually from infancy.'",
    options: [
      
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    
    ],
    correctIndex: 1, // False: late bilinguals exhibit disparate neural recruitment, early bilinguals have elevated white matter
    explanation: "Matn 2-xatboshisiga ko'ra kech o'rganganlar (late-acquisition bilinguals) boshqacha nevrologik ko'rsatkichlarga ega bo'ladi va ularda bolalikdan o'rganganlar kabi oq modda (white matter) bir xil kuchaymaydi. Shuning uchun FALSE.",
    tags: ["Reading", "Passage 3", "True/False/Not Given"]
  },
  {
    id: "ielts-r-24",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 9.0",
    stimulus: "Passage 3 conclusion.",
    question: "Question 24: What overarching conclusion do contemporary neurobiologists draw regarding cognitive reserve in bilingual speakers?",
    options: [
      
      "Cognitive gains are absolute and occur uniformly across all demographics without exception.",
      "Learning a second language after the age of twelve produces zero functional neurological changes.",
      "Cognitive enhancements are highly contingent on factors such as acquisition age, language entropy, and socioeconomic conditions.",
      "Non-verbal spatial processing is permanently impaired by multilingual fluency."
    
    ],
    correctIndex: 2,
    explanation: "Oxirgi jumla: 'cognitive reserve enhancements depend critically on age of acquisition, daily conversational entropy, and socio-economic confounding variables'.",
    tags: ["Reading", "Passage 3", "Synthesis"]
  }
,
{
    id: "ielts-r-25",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 7.5",
    stimulus: `READING PASSAGE 2: 'Quantum Metrology and Optical Clocks'

Modern optical lattice clocks trap tens of thousands of neutral strontium atoms within an interference pattern of laser light. By interrogating these atoms with ultra-stable lasers at optical frequencies—over 400 trillion oscillations per second—these devices achieve a fractional frequency uncertainty of 10^-18. At this level of precision, the clocks can detect the gravitational dilation of time predicted by general relativity across height differences of less than one centimeter on Earth's surface.`,
    question: "According to Passage 2, why can optical lattice clocks detect gravitational time dilation across vertical elevations as small as one centimeter?",
    options: [
      "Because they measure gravity using magnetic levitation rather than atomic resonance",
      "Because their laser interrogation at optical frequencies yields an unprecedented uncertainty of 10^-18",
      "Because they are shielded completely from Earth's cosmic and solar radiation",
      "Because they utilize radioactive cesium isotope decay in deep subterranean mines"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Nima sababdan optik soatlar 1 sm balandlikdagi vaqt sekinlashuvini aniqlay olishi so'ralgan.\n2-Qadam: Matnda 'interrogating these atoms with ultra-stable lasers at optical frequencies... achieve a fractional frequency uncertainty of 10^-18' ko'rsatilgan.\n3-Qadam: Aynan shu 10^-18 aniqlik va optik chastota sababli 1 sm balandlikdagi relyativistik vaqt farqini o'lchash mumkin.\n4-Qadam: To'g'ri javob: Because their laser interrogation at optical frequencies yields an unprecedented uncertainty of 10^-18.",
    tags: ["Reading", "Passage 2", "Quantum Metrology"]
  },
  {
    id: "ielts-r-26",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 8.0",
    stimulus: "Matn parchasi: 'Unlike microwave cesium standards that oscillate at 9.2 gigahertz, optical clocks operate at frequencies approximately 100,000 times higher in the visible spectrum. This immense frequency multiplier inherently divides time into exponentially finer ticks, drastically mitigating quantum projection noise.'",
    question: "Statement: 'Traditional microwave cesium clocks divide seconds into finer increments than modern optical clocks.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 1,
    explanation: "1-Qadam: Bayonot: 'An'anaviy seziy soatlari soniyani zamonaviy optik soatlarga qaraganda maydaroq bo'laklarga bo'ladi'.\n2-Qadam: Matnda aksincha: optik soatlar 100,000 baravar yuqori chastotada ishlaydi va 'inherently divides time into exponentially finer ticks' (vaqtni ancha nozik belgilarga bo'ladi).\n3-Qadam: Bayonot matnga mutlaqo zid (contradicts).\n4-Qadam: To'g'ri javob: FALSE.",
    tags: ["Reading", "Passage 2", "True/False/Not Given"]
  },
  {
    id: "ielts-r-27",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 8.0",
    stimulus: "Matn parchasi: 'Geophysicists anticipate deploying portable optical clocks across volcanic calderas to monitor subterranean magma chamber movements in real time, bypassing the limitations of satellite radar interferometry which is often corrupted by tropospheric moisture.'",
    question: "What operational advantage do portable optical clocks offer geophysicists compared to satellite radar?",
    options: [
      "They cost a tiny fraction of conventional seismometer equipment",
      "They operate without being distorted by moisture in the Earth's lower atmosphere",
      "They forecast earthquakes three months before tectonic slippage occurs",
      "They emit radar beams that penetrate molten basalt rock up to twenty kilometers"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Sun'iy yo'ldosh radaridan optik soatlarning ustunligi so'ralgan.\n2-Qadam: 'bypassing the limitations of satellite radar interferometry which is often corrupted by tropospheric moisture' (troposfera namligi tufayli buziladigan sun'iy yo'ldosh radaridan farqli o'laroq).\n3-Qadam: Atmosfera namligi ta'siridan xoli bo'lishi.\n4-Qadam: To'g'ri javob: They operate without being distorted by moisture in the Earth's lower atmosphere.",
    tags: ["Reading", "Passage 2", "Geophysics"]
  },
  {
    id: "ielts-r-28",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    passageNum: 2,
    difficulty: "Band 8.5",
    stimulus: "Matn parchasi: 'A secondary application lies in probing potential temporal variations in fundamental physical constants. Any observed drift between differing optical transitions across astronomical intervals would provide empirical evidence for physics beyond the Standard Model.'",
    question: "Scientists believe that observing discrepancies between different optical atomic clocks over time could:",
    options: [
      "Disprove the existence of gravity throughout the solar system",
      "Provide physical verification of phenomena not explained by the Standard Model of particle physics",
      "Halt the expansion of the universe within observable galaxies",
      "Cause satellite navigation constellations to lose orbit stability"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Optik soatlardagi siljishlar fanga nimani berishi aniqlanadi.\n2-Qadam: 'would provide empirical evidence for physics beyond the Standard Model' (Standart modeldan tashqari fizika uchun amaliy dalil bo'ladi).\n3-Qadam: Standart model bilan tushuntirib bo'lmaydigan hodisalarni isbotlaydi.\n4-Qadam: To'g'ri javob: Provide physical verification of phenomena not explained by the Standard Model of particle physics.",
    tags: ["Reading", "Passage 2", "Theoretical Physics"]
  },
  {
    id: "ielts-r-29",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 8.0",
    stimulus: `READING PASSAGE 3: 'Mycorrhizal Networks and Arboreal Communication'

Beneath the temperate forest floor lies an extensive subterranean web formed by ectomycorrhizal fungal hyphae connecting the root tips of disparate tree species. Termed the 'Common Mycorrhizal Network' (CMN), this biological internet facilitates bidirectional carbon transfer. Radioisotope tracing demonstrates that mature 'hub trees' transfer surplus photosynthetic sucrose to shaded juvenile understory saplings, dramatically enhancing forest regeneration following canopy disturbance.`,
    question: "What role do mature 'hub trees' perform within the common mycorrhizal network?",
    options: [
      "They secrete toxins to kill neighboring competing species",
      "They allocate surplus photosynthetic sugars to juvenile saplings deprived of direct sunlight",
      "They absorb all underground moisture to starve parasitic weeds",
      "They cut off nitrogen flow to declining older forest trees"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Katta daraxtlarning ('hub trees') vazifasi so'ralgan.\n2-Qadam: 'transfer surplus photosynthetic sucrose to shaded juvenile understory saplings' (ortiqcha fotosintetik shakarni soyadagi yosh nihollarga o'tkazadi).\n3-Qadam: Yosh nihollarga ozuqa berish.\n4-Qadam: To'g'ri javob: They allocate surplus photosynthetic sugars to juvenile saplings deprived of direct sunlight.",
    tags: ["Reading", "Passage 3", "Forest Ecology"]
  },
  {
    id: "ielts-r-30",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 8.5",
    stimulus: "Matn parchasi: 'Crucially, when an aphid infestation attacks a specific Douglas fir, the damaged tree transmits systemic defensive volatile warnings through the fungal conduits within six hours. Recipient unattacked trees immediately upregulate defensive tannin and protease inhibitor production prior to insect arrival.'",
    question: "How do neighboring trees benefit from fungal signaling during an insect infestation?",
    options: [
      "They close their root membranes completely to prevent fungal spore infection",
      "They pre-emptively synthesize defensive chemicals like tannins before pests reach them",
      "They shed all their foliage to enter a state of temporary biological dormancy",
      "They emit audible ultrasonic vibrations to scare away aphids"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Qo'shni daraxtlar zamburug' signallari orqali qanday foyda olishi so'ralgan.\n2-Qadam: 'Recipient unattacked trees immediately upregulate defensive tannin and protease inhibitor production prior to insect arrival'.\n3-Qadam: Zararkunandalar yetib kelmasdan oldin himoya kimyoviy moddalarini (tannin) ishlab chiqaradi.\n4-Qadam: To'g'ri javob: They pre-emptively synthesize defensive chemicals like tannins before pests reach them.",
    tags: ["Reading", "Passage 3", "Biochemical Defense"]
  },
  {
    id: "ielts-r-31",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 8.0",
    stimulus: "Matn parchasi: 'Skeptics of arboreal altruism argue that fungal hyphae do not act as benevolent couriers. Instead, mycorrhizal fungi act as market traders, directing carbon and phosphorus to whichever tree provides the highest reciprocal nutritional return.'",
    question: "According to skeptics, mycorrhizal fungi transport resources primarily because:",
    options: [
      "They seek to maximize their own metabolic returns in a reciprocal trading dynamic",
      "They are genetically programmed to sacrifice themselves for canopy biodiversity",
      "They rely on tree bark to protect their reproductive fruitbodies from rainfall",
      "They are unable to distinguish between different tree species in dense soil"
    ],
    correctIndex: 0,
    explanation: "1-Qadam: Skeptik olimlarning qarashi so'ralgan.\n2-Qadam: 'act as market traders, directing carbon and phosphorus to whichever tree provides the highest reciprocal nutritional return'.\n3-Qadam: O'zlari uchun eng yuqori ozuqaviy foyda (reciprocal return) olish uchun savdo qiladi.\n4-Qadam: To'g'ri javob: They seek to maximize their own metabolic returns in a reciprocal trading dynamic.",
    tags: ["Reading", "Passage 3", "Critical Argument"]
  },
  {
    id: "ielts-r-32",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 8.0",
    stimulus: "Matn parchasi: 'Clear-cut industrial forestry obliterates fungal hyphal integrity. Soil core assays show that replanted monoculture pine plantations take up to eight decades to re-establish complex mycorrhizal interconnectivity.'",
    question: "Statement: 'Commercial monoculture tree plantations recover functional mycorrhizal networks within two to three years of replanting.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 1,
    explanation: "1-Qadam: Bayonot: 'Monokultura plantatsiyalar 2-3 yilda zamburug' tarmog'ini tiklaydi'.\n2-Qadam: Matnda 'take up to eight decades (80 yilgacha vaqt oladi)' deyilgan.\n3-Qadam: 2-3 yil 80 yilga mutlaqo ziddir (FALSE).\n4-Qadam: To'g'ri javob: FALSE.",
    tags: ["Reading", "Passage 3", "True/False/Not Given"]
  },
  {
    id: "ielts-r-33",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 8.5",
    stimulus: `READING PASSAGE 3: 'Directed Evolution and De Novo Enzyme Design'

By implementing machine-learning models trained on evolutionary protein sequences alongside cryogenic electron microscopy, bioengineers can now perform de novo enzyme design. Rather than modifying existing natural catalysts, computational models generate entirely artificial polypeptide backbones capable of catalyzing abiotic chemical reactions, such as the Diels-Alder cycloaddition, which have no biological counterpart in nature.`,
    question: "De novo enzyme design differs fundamentally from classical protein engineering because it:",
    options: [
      "Constructs entirely novel catalytic proteins from scratch instead of modifying natural enzymes",
      "Relies entirely on trial-and-error chemical crystallization in petri dishes",
      "Uses only bacterial DNA without computational modeling",
      "Cannot accelerate reactions that occur outside living cells"
    ],
    correctIndex: 0,
    explanation: "1-Qadam: De novo ferment dizaynining klassik usuldan farqi.\n2-Qadam: 'Rather than modifying existing natural catalysts, computational models generate entirely artificial polypeptide backbones' (mavjud fermentlarni o'zgartirish o'rniga noldan butunlay sun'iy oqsillar yaratadi).\n3-Qadam: Noldan yangi oqsillar hosil qilish.\n4-Qadam: To'g'ri javob: Constructs entirely novel catalytic proteins from scratch instead of modifying natural enzymes.",
    tags: ["Reading", "Passage 3", "Synthetic Biology"]
  },
  {
    id: "ielts-r-34",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 8.5",
    stimulus: "Matn parchasi: 'The primary kinetic metric for engineered biocatalysts is catalytic efficiency, represented as kcat/KM. Modern in silico designed enzymes approach the diffusion-controlled physical limit of 10^8 to 10^9 M^-1 s^-1, matching the perfection achieved by natural enzymes over three billion years of evolution.'",
    question: "According to the text, reaching the diffusion-controlled limit indicates that an engineered enzyme:",
    options: [
      "Requires hours of pre-heating before chemical turnover begins",
      "Catalyzes reactions as rapidly as substrate molecules physically collide with the active site",
      "Produces toxic byproducts that damage surrounding cellular membranes",
      "Ceases function whenever environmental temperature rises above room level"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Diffuziya bilan chegaralangan limitga yetishish nimani anglatadi.\n2-Qadam: Fizikada diffuziya limiti — substrat molekulasi faol markaz bilan to'qnashishi bilanoq reaksiya yuz beradigan maksimal tezlikdir.\n3-Qadam: 'Catalyzes reactions as rapidly as substrate molecules physically collide'.\n4-Qadam: To'g'ri javob: Catalyzes reactions as rapidly as substrate molecules physically collide with the active site.",
    tags: ["Reading", "Passage 3", "Enzyme Kinetics"]
  },
  {
    id: "ielts-r-35",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    passageNum: 3,
    difficulty: "Band 8.5",
    stimulus: "Matn parchasi: 'In the field of environmental bioremediation, engineered PETase variants depolymerize post-consumer polyethylene terephthalate plastics into pure monomeric terephthalic acid within 16 hours at 50 degrees Celsius, enabling closed-loop infinite recycling without petrochemical input.'",
    question: "What makes engineered PETase variants groundbreaking for plastic recycling?",
    options: [
      "They convert plastics directly into combustible gasoline fuels within seconds",
      "They break down consumer plastic waste into pristine raw monomers within 16 hours for infinite reuse",
      "They solidify toxic liquid chemical waste into harmless building bricks",
      "They eliminate the need for sorting plastics by melting all polymers at extreme temperatures"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: PETase fermentining qayta ishlashdagi asosiy yutug'i.\n2-Qadam: 'depolymerize post-consumer PET plastics into pure monomeric terephthalic acid within 16 hours... enabling closed-loop infinite recycling'.\n3-Qadam: Chiqindi plastmassani 16 soatda toza xom-ashyo monomerlariga ajratadi.\n4-Qadam: To'g'ri javob: They break down consumer plastic waste into pristine raw monomers within 16 hours for infinite reuse.",
    tags: ["Reading", "Passage 3", "Bioremediation"]
  }
,
  {
    id: "ielts-r-37",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 7.0",
    stimulus: "The architectural heritage of vernacular stone windcatchers (badgirs) across arid West Asian settlements illustrates passive cooling engineering. By capturing elevated desert breezes and funneling airflow across subterranean water reservoirs (qanats), badgirs achieve an interior temperature reduction of up to 12°C without artificial power.",
    question: "Statement: 'Windcatchers operate effectively without relying on electrical energy.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Bayonot: 'Badgir shamol tutgichlari elektr energiyasiga tayanmasdan samarali ishlaydi'.\n2-Qadam: Matnda 'without artificial power' (sun'iy quvvatsiz) ekanligi ochiq yozilgan.\n3-Qadam: Bu bayonot matnga to'liq mos keladi.\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 1", "True/False/Not Given"]
  },
  {
    id: "ielts-r-38",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "Synthetic biology utilizes enzymatic cascades to deconstruct polyethylene terephthalate (PET) plastics into terephthalic acid and ethylene glycol monomers within hours. When immobilized on magnetic nanoparticles, these engineered esterases exhibit a 400% increase in thermal resilience at 70°C.",
    question: "What advantage do magnetic nanoparticles confer to the engineered esterases?",
    options: ["They allow the enzymes to maintain structural stability at high temperatures.", "They accelerate radioactive decay of industrial heavy metals.", "They convert plastic waste directly into drinkable water.", "They prevent the enzymes from dissolving in organic solvents."],
    correctIndex: 0,
    explanation: "1-Qadam: Nanopartikllar fermentga qanday afzallik berishi so'ralgan.\n2-Qadam: Matnda 'exhibit a 400% increase in thermal resilience at 70°C' aytilgan.\n3-Qadam: Demak, yuqori haroratda ferment barqarorligini (thermal resilience) ta'minlaydi.\n4-Qadam: To'g'ri javob: They allow the enzymes to maintain structural stability at high temperatures.",
    tags: ["Reading", "Passage 2", "Multiple Choice"]
  },
  {
    id: "ielts-r-39",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 8.5",
    stimulus: "The neurocomputational hypothesis of predictive processing posits that the human cerebral cortex is fundamentally an engine of hypothesis generation. Rather than passively waiting for sensory afferents to build perceptions from the bottom up, the brain continuously broadcasts top-down prior models, updating them only when an error signal (prediction discrepancy) is registered.",
    question: "According to predictive processing, perception is predominantly driven by:",
    options: ["Top-down predictive models that are revised when error signals occur", "Raw sensory inputs processed without prior cognitive expectations", "Random chemical fluctuations within synaptic vesicles", "Immediate reflex actions controlled exclusively by the spinal cord"],
    correctIndex: 0,
    explanation: "1-Qadam: Prediktiv jarayon nazariyasiga ko'ra idrok nima orqali boshqarilishi so'ralgan.\n2-Qadam: Matnda 'brain continuously broadcasts top-down prior models, updating them only when an error signal is registered' keltirilgan.\n3-Qadam: To'g'ri javob: Top-down predictive models that are revised when error signals occur.",
    tags: ["Reading", "Passage 3", "Multiple Choice"]
  },
  {
    id: "ielts-r-40",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 2: 'Glaciology and Polar Ice Cores'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Ice core air bubbles preserve prehistoric atmospheric gas ratios.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Muz yadrolaridagi pufakchalar qadimgi atmosferani saqlaydi - to'g'ri (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 2", "Glaciology and Polar Ice Cores"]
  },
  {
    id: "ielts-r-41",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 3: 'Marine Bioluminescence'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Why do deep-sea anglerfish host symbiotic photobacteria?",
    options: ["To attract prey into striking range in perpetual darkness", "To blind large predators with sudden flashes", "To photosynthesize sugars on the abyssal floor", "To generate electrical shocks for territorial defense"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Bioluminessensiya qorong'uda o'ljani o'ziga jalb qilish uchun xizmat qiladi.\n4-Qadam: To'g'ri javob: To attract prey into striking range in perpetual darkness.",
    tags: ["Reading", "Passage 3", "Marine Bioluminescence"]
  },
  {
    id: "ielts-r-42",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 1: 'Urban Microclimate Mitigation'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Green roofs lower building indoor temperatures by reflective albedo.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: O'simlikli tomlar binolarni tabiiy sovitadi va haroratni pasaytiradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 1", "Urban Microclimate Mitigation"]
  },
  {
    id: "ielts-r-43",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 2: 'Cognitive Ethology in Corvids'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "What demonstrated meta-tool use in New Caledonian crows?",
    options: ["Using a short stick to retrieve a longer stick that reaches meat", "Mimicking predatory hawk vocalizations to steal eggs", "Hiding nuts exclusively in magnetic north orientations", "Cracking snail shells against volcanic basalt rocks"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qarg'alar boshqa bir asbobni olish uchun oraliq asbobdan foydalangan.\n4-Qadam: To'g'ri javob: Using a short stick to retrieve a longer stick that reaches meat.",
    tags: ["Reading", "Passage 2", "Cognitive Ethology in Corvids"]
  },
  {
    id: "ielts-r-44",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 3: 'Archaeometallurgy of the Bronze Age'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Tin reserves were universally abundant in early Mesopotamian river basins.'",
    options: ["FALSE", "TRUE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qalay Mesopotamiyada bo'lmagan, uzoqdan import qilingan. Bayonot noto'g'ri (FALSE).\n4-Qadam: To'g'ri javob: FALSE.",
    tags: ["Reading", "Passage 3", "Archaeometallurgy of the Bronze Age"]
  },
  {
    id: "ielts-r-45",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 1: 'Renewable Geothermal Systems'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Which geological feature is indispensable for enhanced geothermal systems?",
    options: ["Hot crystalline basement rock fractured by hydraulic pressure", "Superficial sand dunes with zero subsurface moisture", "Extinct coral atolls in equatorial shallow lagoons", "Permafrost tundra underlain by methane clathrates"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Gidravlik bosim bilan yorilgan issiq tub jinslar talab qilinadi.\n4-Qadam: To'g'ri javob: Hot crystalline basement rock fractured by hydraulic pressure.",
    tags: ["Reading", "Passage 1", "Renewable Geothermal Systems"]
  },
  {
    id: "ielts-r-46",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 2: 'Linguistic Typology and Polysynthesis'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Polysynthetic languages assemble multiple morphemes into single sentence-words.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Polisintetik tillarda bitta so'z butun gap ma'nosini beradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 2", "Linguistic Typology and Polysynthesis"]
  },
  {
    id: "ielts-r-47",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 3: 'Plant Epigenetics and Priming'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "How do primed plants respond to subsequent pathogen outbreaks?",
    options: ["By deploying immune defensive compounds faster and more vigorously", "By shedding all foliage permanently before winter", "By mutational rearrangement of nuclear chromosome counts", "By halting cellular respiration until soil drains"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Oldindan tayyorlangan o'simliklar patogenga nisbatan tezroq himoya moddalarini chiqaradi.\n4-Qadam: To'g'ri javob: By deploying immune defensive compounds faster and more vigorously.",
    tags: ["Reading", "Passage 3", "Plant Epigenetics and Priming"]
  },
  {
    id: "ielts-r-48",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 1: 'Glaciology and Polar Ice Cores'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Ice core air bubbles preserve prehistoric atmospheric gas ratios.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Muz yadrolaridagi pufakchalar qadimgi atmosferani saqlaydi - to'g'ri (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 1", "Glaciology and Polar Ice Cores"]
  },
  {
    id: "ielts-r-49",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 2: 'Marine Bioluminescence'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Why do deep-sea anglerfish host symbiotic photobacteria?",
    options: ["To attract prey into striking range in perpetual darkness", "To blind large predators with sudden flashes", "To photosynthesize sugars on the abyssal floor", "To generate electrical shocks for territorial defense"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Bioluminessensiya qorong'uda o'ljani o'ziga jalb qilish uchun xizmat qiladi.\n4-Qadam: To'g'ri javob: To attract prey into striking range in perpetual darkness.",
    tags: ["Reading", "Passage 2", "Marine Bioluminescence"]
  },
  {
    id: "ielts-r-50",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 3: 'Urban Microclimate Mitigation'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Green roofs lower building indoor temperatures by reflective albedo.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: O'simlikli tomlar binolarni tabiiy sovitadi va haroratni pasaytiradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 3", "Urban Microclimate Mitigation"]
  },
  {
    id: "ielts-r-51",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 1: 'Cognitive Ethology in Corvids'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "What demonstrated meta-tool use in New Caledonian crows?",
    options: ["Using a short stick to retrieve a longer stick that reaches meat", "Mimicking predatory hawk vocalizations to steal eggs", "Hiding nuts exclusively in magnetic north orientations", "Cracking snail shells against volcanic basalt rocks"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qarg'alar boshqa bir asbobni olish uchun oraliq asbobdan foydalangan.\n4-Qadam: To'g'ri javob: Using a short stick to retrieve a longer stick that reaches meat.",
    tags: ["Reading", "Passage 1", "Cognitive Ethology in Corvids"]
  },
  {
    id: "ielts-r-52",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 2: 'Archaeometallurgy of the Bronze Age'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Tin reserves were universally abundant in early Mesopotamian river basins.'",
    options: ["FALSE", "TRUE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qalay Mesopotamiyada bo'lmagan, uzoqdan import qilingan. Bayonot noto'g'ri (FALSE).\n4-Qadam: To'g'ri javob: FALSE.",
    tags: ["Reading", "Passage 2", "Archaeometallurgy of the Bronze Age"]
  },
  {
    id: "ielts-r-53",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 3: 'Renewable Geothermal Systems'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Which geological feature is indispensable for enhanced geothermal systems?",
    options: ["Hot crystalline basement rock fractured by hydraulic pressure", "Superficial sand dunes with zero subsurface moisture", "Extinct coral atolls in equatorial shallow lagoons", "Permafrost tundra underlain by methane clathrates"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Gidravlik bosim bilan yorilgan issiq tub jinslar talab qilinadi.\n4-Qadam: To'g'ri javob: Hot crystalline basement rock fractured by hydraulic pressure.",
    tags: ["Reading", "Passage 3", "Renewable Geothermal Systems"]
  },
  {
    id: "ielts-r-54",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 1: 'Linguistic Typology and Polysynthesis'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Polysynthetic languages assemble multiple morphemes into single sentence-words.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Polisintetik tillarda bitta so'z butun gap ma'nosini beradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 1", "Linguistic Typology and Polysynthesis"]
  },
  {
    id: "ielts-r-55",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 2: 'Plant Epigenetics and Priming'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "How do primed plants respond to subsequent pathogen outbreaks?",
    options: ["By deploying immune defensive compounds faster and more vigorously", "By shedding all foliage permanently before winter", "By mutational rearrangement of nuclear chromosome counts", "By halting cellular respiration until soil drains"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Oldindan tayyorlangan o'simliklar patogenga nisbatan tezroq himoya moddalarini chiqaradi.\n4-Qadam: To'g'ri javob: By deploying immune defensive compounds faster and more vigorously.",
    tags: ["Reading", "Passage 2", "Plant Epigenetics and Priming"]
  },
  {
    id: "ielts-r-56",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 3: 'Glaciology and Polar Ice Cores'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Ice core air bubbles preserve prehistoric atmospheric gas ratios.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Muz yadrolaridagi pufakchalar qadimgi atmosferani saqlaydi - to'g'ri (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 3", "Glaciology and Polar Ice Cores"]
  },
  {
    id: "ielts-r-57",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 1: 'Marine Bioluminescence'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Why do deep-sea anglerfish host symbiotic photobacteria?",
    options: ["To attract prey into striking range in perpetual darkness", "To blind large predators with sudden flashes", "To photosynthesize sugars on the abyssal floor", "To generate electrical shocks for territorial defense"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Bioluminessensiya qorong'uda o'ljani o'ziga jalb qilish uchun xizmat qiladi.\n4-Qadam: To'g'ri javob: To attract prey into striking range in perpetual darkness.",
    tags: ["Reading", "Passage 1", "Marine Bioluminescence"]
  },
  {
    id: "ielts-r-58",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 2: 'Urban Microclimate Mitigation'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Green roofs lower building indoor temperatures by reflective albedo.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: O'simlikli tomlar binolarni tabiiy sovitadi va haroratni pasaytiradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 2", "Urban Microclimate Mitigation"]
  },
  {
    id: "ielts-r-59",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 3: 'Cognitive Ethology in Corvids'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "What demonstrated meta-tool use in New Caledonian crows?",
    options: ["Using a short stick to retrieve a longer stick that reaches meat", "Mimicking predatory hawk vocalizations to steal eggs", "Hiding nuts exclusively in magnetic north orientations", "Cracking snail shells against volcanic basalt rocks"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qarg'alar boshqa bir asbobni olish uchun oraliq asbobdan foydalangan.\n4-Qadam: To'g'ri javob: Using a short stick to retrieve a longer stick that reaches meat.",
    tags: ["Reading", "Passage 3", "Cognitive Ethology in Corvids"]
  },
  {
    id: "ielts-r-60",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 1: 'Archaeometallurgy of the Bronze Age'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Tin reserves were universally abundant in early Mesopotamian river basins.'",
    options: ["FALSE", "TRUE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qalay Mesopotamiyada bo'lmagan, uzoqdan import qilingan. Bayonot noto'g'ri (FALSE).\n4-Qadam: To'g'ri javob: FALSE.",
    tags: ["Reading", "Passage 1", "Archaeometallurgy of the Bronze Age"]
  },
  {
    id: "ielts-r-61",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 2: 'Renewable Geothermal Systems'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Which geological feature is indispensable for enhanced geothermal systems?",
    options: ["Hot crystalline basement rock fractured by hydraulic pressure", "Superficial sand dunes with zero subsurface moisture", "Extinct coral atolls in equatorial shallow lagoons", "Permafrost tundra underlain by methane clathrates"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Gidravlik bosim bilan yorilgan issiq tub jinslar talab qilinadi.\n4-Qadam: To'g'ri javob: Hot crystalline basement rock fractured by hydraulic pressure.",
    tags: ["Reading", "Passage 2", "Renewable Geothermal Systems"]
  },
  {
    id: "ielts-r-62",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 3: 'Linguistic Typology and Polysynthesis'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Polysynthetic languages assemble multiple morphemes into single sentence-words.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Polisintetik tillarda bitta so'z butun gap ma'nosini beradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 3", "Linguistic Typology and Polysynthesis"]
  },
  {
    id: "ielts-r-63",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 1: 'Plant Epigenetics and Priming'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "How do primed plants respond to subsequent pathogen outbreaks?",
    options: ["By deploying immune defensive compounds faster and more vigorously", "By shedding all foliage permanently before winter", "By mutational rearrangement of nuclear chromosome counts", "By halting cellular respiration until soil drains"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Oldindan tayyorlangan o'simliklar patogenga nisbatan tezroq himoya moddalarini chiqaradi.\n4-Qadam: To'g'ri javob: By deploying immune defensive compounds faster and more vigorously.",
    tags: ["Reading", "Passage 1", "Plant Epigenetics and Priming"]
  },
  {
    id: "ielts-r-64",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 2: 'Glaciology and Polar Ice Cores'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Ice core air bubbles preserve prehistoric atmospheric gas ratios.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Muz yadrolaridagi pufakchalar qadimgi atmosferani saqlaydi - to'g'ri (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 2", "Glaciology and Polar Ice Cores"]
  },
  {
    id: "ielts-r-65",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 3: 'Marine Bioluminescence'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Why do deep-sea anglerfish host symbiotic photobacteria?",
    options: ["To attract prey into striking range in perpetual darkness", "To blind large predators with sudden flashes", "To photosynthesize sugars on the abyssal floor", "To generate electrical shocks for territorial defense"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Bioluminessensiya qorong'uda o'ljani o'ziga jalb qilish uchun xizmat qiladi.\n4-Qadam: To'g'ri javob: To attract prey into striking range in perpetual darkness.",
    tags: ["Reading", "Passage 3", "Marine Bioluminescence"]
  },
  {
    id: "ielts-r-66",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 1: 'Urban Microclimate Mitigation'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Green roofs lower building indoor temperatures by reflective albedo.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: O'simlikli tomlar binolarni tabiiy sovitadi va haroratni pasaytiradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 1", "Urban Microclimate Mitigation"]
  },
  {
    id: "ielts-r-67",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 2: 'Cognitive Ethology in Corvids'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "What demonstrated meta-tool use in New Caledonian crows?",
    options: ["Using a short stick to retrieve a longer stick that reaches meat", "Mimicking predatory hawk vocalizations to steal eggs", "Hiding nuts exclusively in magnetic north orientations", "Cracking snail shells against volcanic basalt rocks"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qarg'alar boshqa bir asbobni olish uchun oraliq asbobdan foydalangan.\n4-Qadam: To'g'ri javob: Using a short stick to retrieve a longer stick that reaches meat.",
    tags: ["Reading", "Passage 2", "Cognitive Ethology in Corvids"]
  },
  {
    id: "ielts-r-68",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 3: 'Archaeometallurgy of the Bronze Age'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Tin reserves were universally abundant in early Mesopotamian river basins.'",
    options: ["FALSE", "TRUE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qalay Mesopotamiyada bo'lmagan, uzoqdan import qilingan. Bayonot noto'g'ri (FALSE).\n4-Qadam: To'g'ri javob: FALSE.",
    tags: ["Reading", "Passage 3", "Archaeometallurgy of the Bronze Age"]
  },
  {
    id: "ielts-r-69",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 1: 'Renewable Geothermal Systems'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Which geological feature is indispensable for enhanced geothermal systems?",
    options: ["Hot crystalline basement rock fractured by hydraulic pressure", "Superficial sand dunes with zero subsurface moisture", "Extinct coral atolls in equatorial shallow lagoons", "Permafrost tundra underlain by methane clathrates"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Gidravlik bosim bilan yorilgan issiq tub jinslar talab qilinadi.\n4-Qadam: To'g'ri javob: Hot crystalline basement rock fractured by hydraulic pressure.",
    tags: ["Reading", "Passage 1", "Renewable Geothermal Systems"]
  },
  {
    id: "ielts-r-70",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 2: 'Linguistic Typology and Polysynthesis'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Polysynthetic languages assemble multiple morphemes into single sentence-words.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Polisintetik tillarda bitta so'z butun gap ma'nosini beradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 2", "Linguistic Typology and Polysynthesis"]
  },
  {
    id: "ielts-r-71",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 3: 'Plant Epigenetics and Priming'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "How do primed plants respond to subsequent pathogen outbreaks?",
    options: ["By deploying immune defensive compounds faster and more vigorously", "By shedding all foliage permanently before winter", "By mutational rearrangement of nuclear chromosome counts", "By halting cellular respiration until soil drains"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Oldindan tayyorlangan o'simliklar patogenga nisbatan tezroq himoya moddalarini chiqaradi.\n4-Qadam: To'g'ri javob: By deploying immune defensive compounds faster and more vigorously.",
    tags: ["Reading", "Passage 3", "Plant Epigenetics and Priming"]
  },
  {
    id: "ielts-r-72",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 1: 'Glaciology and Polar Ice Cores'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Ice core air bubbles preserve prehistoric atmospheric gas ratios.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Muz yadrolaridagi pufakchalar qadimgi atmosferani saqlaydi - to'g'ri (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 1", "Glaciology and Polar Ice Cores"]
  },
  {
    id: "ielts-r-73",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 2: 'Marine Bioluminescence'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Why do deep-sea anglerfish host symbiotic photobacteria?",
    options: ["To attract prey into striking range in perpetual darkness", "To blind large predators with sudden flashes", "To photosynthesize sugars on the abyssal floor", "To generate electrical shocks for territorial defense"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Bioluminessensiya qorong'uda o'ljani o'ziga jalb qilish uchun xizmat qiladi.\n4-Qadam: To'g'ri javob: To attract prey into striking range in perpetual darkness.",
    tags: ["Reading", "Passage 2", "Marine Bioluminescence"]
  },
  {
    id: "ielts-r-74",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 3: 'Urban Microclimate Mitigation'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Green roofs lower building indoor temperatures by reflective albedo.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: O'simlikli tomlar binolarni tabiiy sovitadi va haroratni pasaytiradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 3", "Urban Microclimate Mitigation"]
  },
  {
    id: "ielts-r-75",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 1: 'Cognitive Ethology in Corvids'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "What demonstrated meta-tool use in New Caledonian crows?",
    options: ["Using a short stick to retrieve a longer stick that reaches meat", "Mimicking predatory hawk vocalizations to steal eggs", "Hiding nuts exclusively in magnetic north orientations", "Cracking snail shells against volcanic basalt rocks"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qarg'alar boshqa bir asbobni olish uchun oraliq asbobdan foydalangan.\n4-Qadam: To'g'ri javob: Using a short stick to retrieve a longer stick that reaches meat.",
    tags: ["Reading", "Passage 1", "Cognitive Ethology in Corvids"]
  },
  {
    id: "ielts-r-76",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 2: 'Archaeometallurgy of the Bronze Age'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Tin reserves were universally abundant in early Mesopotamian river basins.'",
    options: ["FALSE", "TRUE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qalay Mesopotamiyada bo'lmagan, uzoqdan import qilingan. Bayonot noto'g'ri (FALSE).\n4-Qadam: To'g'ri javob: FALSE.",
    tags: ["Reading", "Passage 2", "Archaeometallurgy of the Bronze Age"]
  },
  {
    id: "ielts-r-77",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 3: 'Renewable Geothermal Systems'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Which geological feature is indispensable for enhanced geothermal systems?",
    options: ["Hot crystalline basement rock fractured by hydraulic pressure", "Superficial sand dunes with zero subsurface moisture", "Extinct coral atolls in equatorial shallow lagoons", "Permafrost tundra underlain by methane clathrates"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Gidravlik bosim bilan yorilgan issiq tub jinslar talab qilinadi.\n4-Qadam: To'g'ri javob: Hot crystalline basement rock fractured by hydraulic pressure.",
    tags: ["Reading", "Passage 3", "Renewable Geothermal Systems"]
  },
  {
    id: "ielts-r-78",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 1: 'Linguistic Typology and Polysynthesis'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Polysynthetic languages assemble multiple morphemes into single sentence-words.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Polisintetik tillarda bitta so'z butun gap ma'nosini beradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 1", "Linguistic Typology and Polysynthesis"]
  },
  {
    id: "ielts-r-79",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 2: 'Plant Epigenetics and Priming'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "How do primed plants respond to subsequent pathogen outbreaks?",
    options: ["By deploying immune defensive compounds faster and more vigorously", "By shedding all foliage permanently before winter", "By mutational rearrangement of nuclear chromosome counts", "By halting cellular respiration until soil drains"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Oldindan tayyorlangan o'simliklar patogenga nisbatan tezroq himoya moddalarini chiqaradi.\n4-Qadam: To'g'ri javob: By deploying immune defensive compounds faster and more vigorously.",
    tags: ["Reading", "Passage 2", "Plant Epigenetics and Priming"]
  },
  {
    id: "ielts-r-80",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 3: 'Glaciology and Polar Ice Cores'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Ice core air bubbles preserve prehistoric atmospheric gas ratios.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Muz yadrolaridagi pufakchalar qadimgi atmosferani saqlaydi - to'g'ri (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 3", "Glaciology and Polar Ice Cores"]
  },
  {
    id: "ielts-r-81",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 1: 'Marine Bioluminescence'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Why do deep-sea anglerfish host symbiotic photobacteria?",
    options: ["To attract prey into striking range in perpetual darkness", "To blind large predators with sudden flashes", "To photosynthesize sugars on the abyssal floor", "To generate electrical shocks for territorial defense"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Bioluminessensiya qorong'uda o'ljani o'ziga jalb qilish uchun xizmat qiladi.\n4-Qadam: To'g'ri javob: To attract prey into striking range in perpetual darkness.",
    tags: ["Reading", "Passage 1", "Marine Bioluminescence"]
  },
  {
    id: "ielts-r-82",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 2: 'Urban Microclimate Mitigation'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Green roofs lower building indoor temperatures by reflective albedo.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: O'simlikli tomlar binolarni tabiiy sovitadi va haroratni pasaytiradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 2", "Urban Microclimate Mitigation"]
  },
  {
    id: "ielts-r-83",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 3: 'Cognitive Ethology in Corvids'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "What demonstrated meta-tool use in New Caledonian crows?",
    options: ["Using a short stick to retrieve a longer stick that reaches meat", "Mimicking predatory hawk vocalizations to steal eggs", "Hiding nuts exclusively in magnetic north orientations", "Cracking snail shells against volcanic basalt rocks"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qarg'alar boshqa bir asbobni olish uchun oraliq asbobdan foydalangan.\n4-Qadam: To'g'ri javob: Using a short stick to retrieve a longer stick that reaches meat.",
    tags: ["Reading", "Passage 3", "Cognitive Ethology in Corvids"]
  },
  {
    id: "ielts-r-84",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 1: 'Archaeometallurgy of the Bronze Age'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Tin reserves were universally abundant in early Mesopotamian river basins.'",
    options: ["FALSE", "TRUE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qalay Mesopotamiyada bo'lmagan, uzoqdan import qilingan. Bayonot noto'g'ri (FALSE).\n4-Qadam: To'g'ri javob: FALSE.",
    tags: ["Reading", "Passage 1", "Archaeometallurgy of the Bronze Age"]
  },
  {
    id: "ielts-r-85",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 2: 'Renewable Geothermal Systems'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Which geological feature is indispensable for enhanced geothermal systems?",
    options: ["Hot crystalline basement rock fractured by hydraulic pressure", "Superficial sand dunes with zero subsurface moisture", "Extinct coral atolls in equatorial shallow lagoons", "Permafrost tundra underlain by methane clathrates"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Gidravlik bosim bilan yorilgan issiq tub jinslar talab qilinadi.\n4-Qadam: To'g'ri javob: Hot crystalline basement rock fractured by hydraulic pressure.",
    tags: ["Reading", "Passage 2", "Renewable Geothermal Systems"]
  },
  {
    id: "ielts-r-86",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 3: 'Linguistic Typology and Polysynthesis'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Polysynthetic languages assemble multiple morphemes into single sentence-words.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Polisintetik tillarda bitta so'z butun gap ma'nosini beradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 3", "Linguistic Typology and Polysynthesis"]
  },
  {
    id: "ielts-r-87",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 1: 'Plant Epigenetics and Priming'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "How do primed plants respond to subsequent pathogen outbreaks?",
    options: ["By deploying immune defensive compounds faster and more vigorously", "By shedding all foliage permanently before winter", "By mutational rearrangement of nuclear chromosome counts", "By halting cellular respiration until soil drains"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Oldindan tayyorlangan o'simliklar patogenga nisbatan tezroq himoya moddalarini chiqaradi.\n4-Qadam: To'g'ri javob: By deploying immune defensive compounds faster and more vigorously.",
    tags: ["Reading", "Passage 1", "Plant Epigenetics and Priming"]
  },
  {
    id: "ielts-r-88",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 2: 'Glaciology and Polar Ice Cores'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Ice core air bubbles preserve prehistoric atmospheric gas ratios.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Muz yadrolaridagi pufakchalar qadimgi atmosferani saqlaydi - to'g'ri (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 2", "Glaciology and Polar Ice Cores"]
  },
  {
    id: "ielts-r-89",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 3: 'Marine Bioluminescence'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Why do deep-sea anglerfish host symbiotic photobacteria?",
    options: ["To attract prey into striking range in perpetual darkness", "To blind large predators with sudden flashes", "To photosynthesize sugars on the abyssal floor", "To generate electrical shocks for territorial defense"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Bioluminessensiya qorong'uda o'ljani o'ziga jalb qilish uchun xizmat qiladi.\n4-Qadam: To'g'ri javob: To attract prey into striking range in perpetual darkness.",
    tags: ["Reading", "Passage 3", "Marine Bioluminescence"]
  },
  {
    id: "ielts-r-90",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 1: 'Urban Microclimate Mitigation'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Green roofs lower building indoor temperatures by reflective albedo.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: O'simlikli tomlar binolarni tabiiy sovitadi va haroratni pasaytiradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 1", "Urban Microclimate Mitigation"]
  },
  {
    id: "ielts-r-91",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 2: 'Cognitive Ethology in Corvids'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "What demonstrated meta-tool use in New Caledonian crows?",
    options: ["Using a short stick to retrieve a longer stick that reaches meat", "Mimicking predatory hawk vocalizations to steal eggs", "Hiding nuts exclusively in magnetic north orientations", "Cracking snail shells against volcanic basalt rocks"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qarg'alar boshqa bir asbobni olish uchun oraliq asbobdan foydalangan.\n4-Qadam: To'g'ri javob: Using a short stick to retrieve a longer stick that reaches meat.",
    tags: ["Reading", "Passage 2", "Cognitive Ethology in Corvids"]
  },
  {
    id: "ielts-r-92",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 3: 'Archaeometallurgy of the Bronze Age'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Tin reserves were universally abundant in early Mesopotamian river basins.'",
    options: ["FALSE", "TRUE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Qalay Mesopotamiyada bo'lmagan, uzoqdan import qilingan. Bayonot noto'g'ri (FALSE).\n4-Qadam: To'g'ri javob: FALSE.",
    tags: ["Reading", "Passage 3", "Archaeometallurgy of the Bronze Age"]
  },
  {
    id: "ielts-r-93",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 1",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 1: 'Renewable Geothermal Systems'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Which geological feature is indispensable for enhanced geothermal systems?",
    options: ["Hot crystalline basement rock fractured by hydraulic pressure", "Superficial sand dunes with zero subsurface moisture", "Extinct coral atolls in equatorial shallow lagoons", "Permafrost tundra underlain by methane clathrates"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Gidravlik bosim bilan yorilgan issiq tub jinslar talab qilinadi.\n4-Qadam: To'g'ri javob: Hot crystalline basement rock fractured by hydraulic pressure.",
    tags: ["Reading", "Passage 1", "Renewable Geothermal Systems"]
  },
  {
    id: "ielts-r-94",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 2",
    difficulty: "Band 8.0",
    stimulus: "READING PASSAGE 2: 'Linguistic Typology and Polysynthesis'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "Statement: 'Polysynthetic languages assemble multiple morphemes into single sentence-words.'",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Polisintetik tillarda bitta so'z butun gap ma'nosini beradi (TRUE).\n4-Qadam: To'g'ri javob: TRUE.",
    tags: ["Reading", "Passage 2", "Linguistic Typology and Polysynthesis"]
  },
  {
    id: "ielts-r-95",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Reading: Passage 3",
    difficulty: "Band 7.5",
    stimulus: "READING PASSAGE 3: 'Plant Epigenetics and Priming'\nScientific investigations conducted in 2026 demonstrate the fundamental principles governing this phenomenon.",
    question: "How do primed plants respond to subsequent pathogen outbreaks?",
    options: ["By deploying immune defensive compounds faster and more vigorously", "By shedding all foliage permanently before winter", "By mutational rearrangement of nuclear chromosome counts", "By halting cellular respiration until soil drains"],
    correctIndex: 0,
    explanation: "1-Qadam: Savol matni va berilgan kontekst tahlil qilindi.\n2-Qadam: Matndagi ilmiy dalil bilan variant solishtirildi.\n3-Qadam: Oldindan tayyorlangan o'simliklar patogenga nisbatan tezroq himoya moddalarini chiqaradi.\n4-Qadam: To'g'ri javob: By deploying immune defensive compounds faster and more vigorously.",
    tags: ["Reading", "Passage 3", "Plant Epigenetics and Priming"]
  }
];

// =========================================================================
// 🎧 LISTENING FULL 2026 (40 SAVOL: SECTION 1 - 4)
// =========================================================================
const IELTS_LISTENING_FULL_2026 = [
  // --- SECTION 1: Everyday Dialogue (Q1 - Q10) ---
  {
    id: "ielts-l-01",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 1: Campus Housing Registration",
    difficulty: "Band 6.0 - 7.0",
    stimulus: `AUDIO TRANSCRIPT (Listening Section 1):
Officer: "Good morning! University International Housing Office. How can I help you today?"
Student: "Hello, yes, my name is Arthur Pendelton, and I'd like to finalize my accommodation booking for the Michaelmas semester."
Officer: "Certainly, Arthur. Let me pull up your student record. Could you spell your surname for verification?"
Student: "Yes, it is P-E-N-D-E-L-T-O-N."
Officer: "Thank you. And which residence hall did you select as your primary preference?"
Student: "I originally wanted Elmwood Hall because of the ensuite bathrooms, but the waiting list was over six months. So I've opted for Ashburton Manor instead."`,
    question: "Question 1: Which accommodation hall has the student ultimately registered for?",
    options: [
      
      "Elmwood Hall",
      "St. Michael's College",
      "Ashburton Manor",
      "Riverside Lodge"
    
    ],
    correctIndex: 2, // Elmwood was full, opted for Ashburton Manor
    explanation: "Talaba Elmwood Hall da navbat 6 oy ekani sababli, Ashburton Manor ni tanlaganini aytadi: 'So I've opted for Ashburton Manor instead.'",
    tags: ["Listening", "Section 1", "Distractors"]
  },
  {
    id: "ielts-l-02",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 1: Campus Housing Registration",
    difficulty: "Band 6.5",
    stimulus: `Officer: "Right, Ashburton Manor. Now, room types: standard single room with shared kitchen is £185 per week, while the premium studio with private kitchenette is £240. However, since you booked prior to August 1st, an early-bird concession brings the studio down to £215."
Student: "That sounds reasonable! I'll take the studio at the discounted £215 rate."`,
    question: "Question 2: How much will Arthur pay per week for his studio apartment?",
    options: [
      
      "£215",
      "£185",
      "£240",
      "£260"
    
    ],
    correctIndex: 0,
    explanation: "Ofitser dastlab £240 deydi, lekin 1-avgustgacha chegirma bilan £215 ekanini aytadi va talaba £215 lik variantni qabul qiladi.",
    tags: ["Listening", "Section 1", "Prices"]
  },
  {
    id: "ielts-l-03",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 1: Campus Housing Registration",
    difficulty: "Band 6.5",
    stimulus: `Officer: "Splendid. And your intended arrival date on campus?"
Student: "My flight lands at Heathrow on the 18th of September, but my check-in will be the following morning, on the 19th."
Officer: "Noted: check-in confirmed for September 19th."`,
    question: "Question 3: On what date will the student officially check in to the hall?",
    options: [
      
      "September 17th",
      "September 18th",
      "September 20th",
      "September 19th"
    
    ],
    correctIndex: 3,
    explanation: "Talabaning samolyoti 18-sentabrda qo'nadi, lekin check-in 19-sentabr kuni bo'ladi: 'check-in will be the following morning, on the 19th'.",
    tags: ["Listening", "Section 1", "Dates"]
  },

  // --- SECTION 3: Academic Tutorial (Q21 - Q30) ---
{
    id: "ielts-l-04",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 1: Campus Sports Centre Registration",
    difficulty: "Band 6.5",
    stimulus: "Receptionist: 'Our standard student off-peak membership is £24 per month, but if you sign up for the full academic year upfront, you get a 20% discount, bringing the annual total to £230 instead of £288.'",
    question: "Question 4: What is the discounted fee for an upfront full-year gym registration?",
    options: ["£240", "£230", "£288", "£200"],
    correctIndex: 1,
    explanation: "1-Qadam: Dialogda to'liq yillik oldindan to'lov narxi so'ralgan.\n2-Qadam: Qabulxona xodimi aniq aytadi: 'bringing the annual total to £230 instead of £288'.\n3-Qadam: Tinglangan summa: £230.\n4-Qadam: To'g'ri javob: £230.",
    tags: ["Listening", "Section 1", "Numbers"]
  },
  {
    id: "ielts-l-05",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 1: Student Accommodation Office",
    difficulty: "Band 7.0",
    stimulus: "Housing Officer: 'The security deposit of £350 is fully refundable provided notice is given 30 days prior to departure and no structural repair is required.'",
    question: "Question 5: Under what condition is the housing security deposit refunded in full?",
    options: [
      "The student moves out immediately without informing staff",
      "Notice is submitted 30 days in advance and the room remains undamaged",
      "The student signs a second-year lease contract",
      "All utilities are prepaid through the student union bank portal"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Qaytariladigan depozit sharti tinglanadi.\n2-Qadam: 'provided notice is given 30 days prior to departure and no structural repair is required'.\n3-Qadam: 30 kun oldin ogohlantirish va hech qanday shikast yetkazilmagan bo'lishi lozim.\n4-Qadam: To'g'ri javob: Notice is submitted 30 days in advance and the room remains undamaged.",
    tags: ["Listening", "Section 1", "Multiple Choice"]
  },
  {
    id: "ielts-l-06",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 1: Community Language Exchange",
    difficulty: "Band 6.5",
    stimulus: "Coordinator: 'Our conversation cafe originally convened on Tuesdays, but due to room availability, we have permanently shifted all weekly sessions to Thursday evenings from 6:30 to 8:00 PM in Seminar Hall B.'",
    question: "Question 6: On which day does the Language Exchange session now take place?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    correctIndex: 2,
    explanation: "1-Qadam: Haftaning qaysi kuni yangi uchrashuv o'tkazilishi so'ralgan.\n2-Qadam: 'originally convened on Tuesdays, but... permanently shifted all weekly sessions to Thursday evenings'.\n3-Qadam: Eski kun seshanba edi, lekin yangisi payshanba (Thursday).\n4-Qadam: To'g'ri javob: Thursday.",
    tags: ["Listening", "Section 1", "Distractor Awareness"]
  },
  {
    id: "ielts-l-07",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 2: University Library Orientation",
    difficulty: "Band 7.0",
    stimulus: "Librarian: 'The fourth floor houses our Silent Research Quad. Mobile phones must be set to airplane mode, and even whispered discussions are strictly prohibited to maintain deep cognitive focus.'",
    question: "Question 7: What regulation is unique to the fourth floor of the library?",
    options: [
      "Laptops and digital tablets are forbidden",
      "No verbal communication whatsoever is permitted",
      "Only postgraduate faculty members may enter",
      "Books cannot be borrowed for more than two consecutive hours"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: To'rtinchi qavatdagi maxsus qoidani aniqlash.\n2-Qadam: 'even whispered discussions are strictly prohibited' (hatto pichirlab gapirish ham taqiqlangan).\n3-Qadam: Hech qanday og'zaki muloqotga ruxsat berilmaydi.\n4-Qadam: To'g'ri javob: No verbal communication whatsoever is permitted.",
    tags: ["Listening", "Section 2", "Orientation"]
  },
  {
    id: "ielts-l-08",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 2: Botanical Conservatory Guide",
    difficulty: "Band 7.5",
    stimulus: "Guide: 'The automated misting system triggers precisely when relative humidity dips below 78 percent, simulating the cloud forest canopy and preserving epiphytic orchids.'",
    question: "Question 8: The conservatory's automated misting system activates when:",
    options: [
      "Ambient solar radiation exceeds midday threshold levels",
      "Atmospheric relative humidity falls under 78%",
      "Soil moisture probes detect zero mineral nitrogen",
      "Visitors enter the tropical rainforest greenhouse corridor"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Tumanlatish tizimi qachon ishga tushishi eshitiladi.\n2-Qadam: 'when relative humidity dips below 78 percent'.\n3-Qadam: 'Dips below' = falls under (78% dan pastga tushganda).\n4-Qadam: To'g'ri javob: Atmospheric relative humidity falls under 78%.",
    tags: ["Listening", "Section 2", "Paraphrasing"]
  },
  {
    id: "ielts-l-09",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 2: Coastal Wetland Conservation Briefing",
    difficulty: "Band 7.0",
    stimulus: "Coordinator: 'Volunteers participating in the tidal marsh survey must wear protective rubber waders and carry GPS loggers, while synthetic single-use gloves are strictly banned to prevent microplastic shedding.'",
    question: "Question 9: Why are volunteers prohibited from wearing synthetic disposable gloves during the wetland survey?",
    options: [
      "They restrict finger dexterity when measuring juvenile crabs",
      "They tear easily on coarse oyster reefs",
      "They pose an environmental hazard by shedding microplastics into the marsh",
      "They conduct static electricity that interferes with GPS satellite signals"
    ],
    correctIndex: 2,
    explanation: "1-Qadam: Bir martalik sintetik qo'lqoplar nima sababdan taqiqlangani so'ralgan.\n2-Qadam: 'strictly banned to prevent microplastic shedding' (mikroplastik to'kilishining oldini olish uchun).\n3-Qadam: Atrof-muhitga mikroplastik ifloslanish xavfi tug'dirishi.\n4-Qadam: To'g'ri javob: They pose an environmental hazard by shedding microplastics into the marsh.",
    tags: ["Listening", "Section 2", "Cause & Effect"]
  },
  {
    id: "ielts-l-10",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 2: City Transit Innovation Scheme",
    difficulty: "Band 7.5",
    stimulus: "Transport Director: 'By integrating open-loop contactless fare capping, commuters who complete five transit journeys within a calendar week automatically travel free of charge for the remainder of that weekend.'",
    question: "Question 10: Commuters qualify for complimentary weekend journeys if they:",
    options: [
      "Complete at least five paid trips earlier during the same calendar week",
      "Purchase an annual express tram season ticket online",
      "Travel exclusively outside peak morning rush hour periods",
      "Register their biometric digital ID at metro station gates"
    ],
    correctIndex: 0,
    explanation: "1-Qadam: Dam olish kunlari bepul yurish sharti tinglanadi.\n2-Qadam: 'commuters who complete five transit journeys within a calendar week automatically travel free'.\n3-Qadam: Hafta davomida kamida 5 ta to'lovli sayohatni amalga oshirish kifoya.\n4-Qadam: To'g'ri javob: Complete at least five paid trips earlier during the same calendar week.",
    tags: ["Listening", "Section 2", "Condition"]
  },
  {
    id: "ielts-l-11",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 3: Marine Biology Research Tutorial",
    difficulty: "Band 8.0",
    stimulus: "Dr. Evans: 'Traditional satellite telemetry tags required battery replacement every six months. In contrast, our current bio-logging units harvest thermal energy from temperature gradients between sea surface layers and ocean abyssal depths.'",
    question: "Question 11: The breakthrough in the team's newly designed telemetry tags is that they:",
    options: [
      "Transmit data via low-frequency underwater sonic pulses",
      "Generate operational electrical energy from vertical oceanic thermal differentials",
      "Biodegrade harmlessly within twenty days after detaching from whales",
      "Store four terabytes of continuous sonar telemetry onboard"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Yangi telemetriya qurilmasining asosiy afzalligi so'ralgan.\n2-Qadam: 'harvest thermal energy from temperature gradients between sea surface layers and ocean abyssal depths'.\n3-Qadam: Suv yuzasi va chuqurlikdagi harorat farqidan (thermal differentials) energiya oladi.\n4-Qadam: To'g'ri javob: Generate operational electrical energy from vertical oceanic thermal differentials.",
    tags: ["Listening", "Section 3", "Academic Paraphrase"]
  },
  {
    id: "ielts-l-12",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 3: Urban Climatology Seminar",
    difficulty: "Band 8.0",
    stimulus: "Student Maya: 'Our field sensor logs confirmed that sedum green roofs did not merely lower surface temperature; through evapotranspiration, they reduced building HVAC electrical peak load by 32 percent.'",
    question: "Question 12: According to Maya's sensor findings, the most substantial benefit of vegetative sedum roofs was:",
    options: [
      "A 32% decline in peak air-conditioning electricity demand",
      "A complete elimination of urban storm sewer runoff",
      "Absorption of 90% of particulate heavy metal pollutants",
      "A quadrupling of commercial property resale values"
    ],
    correctIndex: 0,
    explanation: "1-Qadam: Sedum tomlarining eng asosiy foydasi tinglanadi.\n2-Qadam: 'reduced building HVAC electrical peak load by 32 percent'.\n3-Qadam: HVAC (ventilyatsiya va havoni sovutish) elektr sarfini 32% ga kamaytirgan.\n4-Qadam: To'g'ri javob: A 32% decline in peak air-conditioning electricity demand.",
    tags: ["Listening", "Section 3", "Technical Terminology"]
  },
  {
    id: "ielts-l-13",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 3: Autonomous Robotics Project Review",
    difficulty: "Band 8.0",
    stimulus: "Professor Chen: 'When designing real-time obstacle avoidance, reducing LiDAR scan resolution halved computational latency from 40 milliseconds to 20 milliseconds, which was crucial for high-speed robotic stability.'",
    question: "Question 13: Halving the sensor scan resolution enabled the autonomous robot to:",
    options: [
      "Map terrain at three times the maximum operational distance",
      "Slash computational processing lag to twenty milliseconds for enhanced stability",
      "Double battery endurance when traversing uneven gravel substrates",
      "Eliminate reliance on external GPS satellite constellations"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: LiDAR rezolyutsiyasini kamaytirish qanday natija bergani tinglanadi.\n2-Qadam: 'halved computational latency from 40 ms to 20 ms, which was crucial for high-speed robotic stability'.\n3-Qadam: Hisoblash kechikishini 20 ms ga tushirib barqarorlikni oshirdi.\n4-Qadam: To'g'ri javob: Slash computational processing lag to twenty milliseconds for enhanced stability.",
    tags: ["Listening", "Section 3", "Engineering Discussion"]
  },
  {
    id: "ielts-l-14",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 3: Renewable Grid Integration Tutorial",
    difficulty: "Band 8.0",
    stimulus: "Student Liam: 'Intermittency of offshore wind farms is best mitigated by co-locating proton-exchange membrane electrolyzers to convert excess curtailment electricity directly into green hydrogen storage.'",
    question: "Question 14: What strategy does Liam recommend to balance fluctuations in offshore wind generation?",
    options: [
      "Installing traditional coal-fired spinning reserves along coastal grids",
      "Utilizing surplus curtailed electricity to produce hydrogen fuel on-site via electrolyzers",
      "Mandating nationwide industrial power rationing during wind lulls",
      "Exporting all excess energy to overseas mainland grids at discounted spot rates"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Shamol stansiyalari tebranishini muvozanatlash usuli.\n2-Qadam: 'convert excess curtailment electricity directly into green hydrogen storage via electrolyzers'.\n3-Qadam: Ortiqcha elektrni elektroliz orqali vodorod shaklida saqlash.\n4-Qadam: To'g'ri javob: Utilizing surplus curtailed electricity to produce hydrogen fuel on-site via electrolyzers.",
    tags: ["Listening", "Section 3", "Critical Evaluation"]
  },
  {
    id: "ielts-l-15",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 4: Academic Lecture - Paleoclimatology",
    difficulty: "Band 8.5",
    stimulus: "Lecturer: 'By quantifying the ratio of oxygen-18 to oxygen-16 preserved inside ancient trapped air bubbles within the Antarctic EPICA core, researchers can reconstruct global atmospheric temperatures dating back 800,000 years.'",
    question: "Question 15: Scientists infer past atmospheric temperatures over eight millennia primarily by analyzing:",
    options: [
      "The depth of volcanic ash layers embedded within continental ice sheets",
      "The ratio between stable oxygen isotopes trapped in subterranean ice bubbles",
      "The magnetic alignment of fossilized iron crystals in oceanic silt",
      "The rate of ancient radioactive carbon decay in petrified tree rings"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Qadimgi harorat qanday ko'rsatkich orqali aniqlangani tinglanadi.\n2-Qadam: 'quantifying the ratio of oxygen-18 to oxygen-16... inside ancient trapped air bubbles'.\n3-Qadam: Kislorod izotoplari nisbati (oxygen-18 / oxygen-16).\n4-Qadam: To'g'ri javob: The ratio between stable oxygen isotopes trapped in subterranean ice bubbles.",
    tags: ["Listening", "Section 4", "Paleoclimatology"]
  },
  {
    id: "ielts-l-16",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 4: Academic Lecture - Marine Bioluminescence",
    difficulty: "Band 8.5",
    stimulus: "Lecturer: 'Deep-sea anglerfish do not synthesize light autonomously; instead, their glowing esca is colonized by symbiotic Photobacterium species, which produce photons via enzyme-catalyzed luciferin oxidation in exchange for glucose.'",
    question: "Question 16: The luminescence in the anglerfish's lure is produced as a result of:",
    options: [
      "Phosphorescent minerals ingested from hydrothermal mineral vents",
      "Symbiotic bacteria that emit light during enzyme-driven oxidation in return for nutrients",
      "Spontaneous electrical impulses generated by specialized dermal electrocytes",
      "Chemical reactions triggered solely when deep-sea pressure exceeds 400 atmospheres"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Dengiz tubidagi yorug'lik manbai sababi tinglanadi.\n2-Qadam: 'colonized by symbiotic Photobacterium species, which produce photons via enzyme-catalyzed luciferin oxidation in exchange for glucose'.\n3-Qadam: Simbiotik bakteriyalar ozuqa evaziga fermentativ oksidlanish orqali yorug'lik chiqaradi.\n4-Qadam: To'g'ri javob: Symbiotic bacteria that emit light during enzyme-driven oxidation in return for nutrients.",
    tags: ["Listening", "Section 4", "Biochemistry"]
  },
  {
    id: "ielts-l-17",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 4: Academic Lecture - Biomimetic Architecture",
    difficulty: "Band 8.5",
    stimulus: "Lecturer: 'Architect Mick Pearce modeled the Eastgate Centre in Harare after Macrotermes termite mounds, utilizing chimney convective drafts to expel warm interior air while drawing cool night air through foundational chambers without mechanical refrigeration.'",
    question: "Question 17: The Eastgate Centre's ventilation system achieves passive climate regulation by:",
    options: [
      "Pumping pressurized subterranean groundwater through wall cavities",
      "Harnessing chimney convection currents to cycle cool ambient air without air conditioning",
      "Using reflective mirrored exterior glazing to deflect 95% of direct sunlight",
      "Generating internal drafts with high-velocity mechanical wind turbines"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Binoning tabiiy ventilyatsiyasi qanday ishlashi tinglanadi.\n2-Qadam: 'utilizing chimney convective drafts to expel warm interior air while drawing cool night air... without mechanical refrigeration'.\n3-Qadam: Mo'ri orqali konvektiv havo oqimi konditsionersiz tabiiy sovutish beradi.\n4-Qadam: To'g'ri javob: Harnessing chimney convection currents to cycle cool ambient air without air conditioning.",
    tags: ["Listening", "Section 4", "Architecture"]
  },
  {
    id: "ielts-l-18",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 4: Academic Lecture - Computational Linguistics",
    difficulty: "Band 8.5",
    stimulus: "Lecturer: 'The decisive structural divergence of self-attention Transformer architectures lies in their capacity to compute all-to-all token associations in parallel, completely superseding the sequential token bottleneck inherent to recurrent recurrent neural networks.'",
    question: "Question 18: What architectural feature gave Transformer models a decisive advantage over earlier RNNs?",
    options: [
      "Their ability to process every token simultaneously in parallel rather than one after another",
      "Their total reliance on handwritten grammatical phrase-structure rules",
      "Their elimination of matrix multiplication during neural weight updates",
      "Their specialized optimization for 8-bit analog transistor hardware"
    ],
    correctIndex: 0,
    explanation: "1-Qadam: Transformer modellarining RNN dan asosiy afzalligi so'ralgan.\n2-Qadam: 'capacity to compute all-to-all token associations in parallel, completely superseding the sequential token bottleneck'.\n3-Qadam: Tokenlarni ketma-ket emas, parallel ravishda bir paytning o'zida hisoblash qobiliyati.\n4-Qadam: To'g'ri javob: Their ability to process every token simultaneously in parallel rather than one after another.",
    tags: ["Listening", "Section 4", "AI Science"]
  },
  {
    id: "ielts-l-19",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 4: Academic Lecture - Cognitive Neuroscience",
    difficulty: "Band 8.5",
    stimulus: "Lecturer: 'Entorhinal grid cells fire in a periodic hexagonal tessellation across Euclidean space, providing mammalian brains with an intrinsic metric coordinate system for path integration and spatial orientation.'",
    question: "Question 19: Neural grid cells in the entorhinal cortex assist navigation by:",
    options: [
      "Storing photographic mental snapshots of prominent physical landmarks",
      "Creating a hexagonal metric coordinate map that tracks self-motion and distance",
      "Regulating emotional adrenaline surges whenever animals lose their geographic path",
      "Translating magnetic earth currents into auditory navigation cues"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: Grid hujayralari qanday navigatsiya vazifasini bajarishi tinglanadi.\n2-Qadam: 'fire in a periodic hexagonal tessellation... providing an intrinsic metric coordinate system for path integration'.\n3-Qadam: Olti burchakli (hexagonal) koordinatalar tarmog'i masofa va harakatni hisoblaydi.\n4-Qadam: To'g'ri javob: Creating a hexagonal metric coordinate map that tracks self-motion and distance.",
    tags: ["Listening", "Section 4", "Neuroscience"]
  },
  {
    id: "ielts-l-20",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 4: Academic Lecture - Precision Agriculture",
    difficulty: "Band 8.0",
    stimulus: "Lecturer: 'Normalized Difference Vegetation Index (NDVI) telemetry operates on the biological reality that healthy chlorophyllic foliage absorbs visible red photon radiation while powerfully reflecting near-infrared wavelengths.'",
    question: "Question 20: Healthy vegetation is detected by NDVI aerial drones because it:",
    options: [
      "Emits visible green luminescence during photosynthetic carbon assimilation",
      "Absorbs red spectral wavelengths while strongly reflecting near-infrared energy",
      "Repels all atmospheric nitrogen ions through stomatal electrical polarization",
      "Reflects ultraviolet radiation while absorbing thermal infrared wavelengths completely"
    ],
    correctIndex: 1,
    explanation: "1-Qadam: NDVI orqali sog'lom o'simlikni aniqlash printsipi.\n2-Qadam: 'healthy chlorophyllic foliage absorbs visible red photon radiation while powerfully reflecting near-infrared wavelengths'.\n3-Qadam: Qizil nurni yutib, infraqizil (near-infrared) nurlarni kuchli aks ettiradi.\n4-Qadam: To'g'ri javob: Absorbs red spectral wavelengths while strongly reflecting near-infrared energy.",
    tags: ["Listening", "Section 4", "Environmental Science"]
  },
  {
    id: "ielts-l-21",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 3: Graduate Tutorial Discussion",
    difficulty: "Band 8.0",
    stimulus: `AUDIO TRANSCRIPT (Listening Section 3):
Tutor: "Now, let us examine your team’s proposal for the municipal smart grid system. Elena, what were your initial findings regarding battery storage?"
Elena: "Initially, we intended to recommend conventional lithium-iron-phosphate arrays because of their ubiquity. However, our lifecycle cost projection revealed that sodium-ion units, despite their marginally bulkier footprint, offer superior thermal stability and virtually eliminate dependency on volatile rare-earth supply chains."
Tutor: "An astute deduction. And Jack, what about peak-shaving mechanisms?"
Jack: "We concluded that automated dynamic tariff incentives yield greater peak-load reduction than static scheduled load-shedding."`,
    question: "Question 21: According to Elena, why did the team ultimately select sodium-ion batteries over lithium-iron-phosphate?",
    options: [
      
      "Because sodium-ion batteries require significantly less physical installation space",
      "Because they offer greater thermal safety and mitigate reliance on scarce raw minerals",
      "Because lithium batteries are completely prohibited in modern urban zones",
      "Because sodium-ion batteries were already the most common system in use"
    
    ],
    correctIndex: 1,
    explanation: "Elena ta'kidlaydi: 'sodium-ion units... offer superior thermal stability and virtually eliminate dependency on volatile rare-earth supply chains'.",
    tags: ["Listening", "Section 3", "Academic"]
  },
  {
    id: "ielts-l-22",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Listening Section 3: Graduate Tutorial Discussion",
    difficulty: "Band 8.0",
    stimulus: "Jack's statement on peak shaving: 'We concluded that automated dynamic tariff incentives yield greater peak-load reduction than static scheduled load-shedding.'",
    question: "Question 22: Jack's research on electrical peak-shaving demonstrated that:",
    options: [
      
      "Switching off electricity manually at scheduled hours was most effective",
      "Solar panels could not operate efficiently during peak twilight hours",
      "Consumers refused to adapt their energy consumption habits regardless of price",
      "Automated variable pricing structures produced higher peak demand reduction than static blackouts"
    
    ],
    correctIndex: 3,
    explanation: "Jack aytadi: 'automated dynamic tariff incentives yield greater peak-load reduction than static scheduled load-shedding' (avtomatik o'zgaruvchan tariflar statik o'chirishdan samaraliroq).",
    tags: ["Listening", "Section 3", "Inference"]
  }
,
  {
    id: "ielts-l-20",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Campus Accommodation Office', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the earliest move-in date for the newly renovated postgraduate dormitories?",
    options: ["September 12th", "August 28th", "October 1st", "September 25th"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Dialogda talabalar uchun ko'chib o'tishning eng erta sanasi 12-sentyabr deb aytildi.\n4-Qadam: To'g'ri javob: September 12th.",
    tags: ["Listening", "Section 1", "Campus Accommodation Office"]
  },
  {
    id: "ielts-l-21",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'University Sports Center Registration', we will examine the procedures and findings outlined in your study brief.",
    question: "Which sports facility requires booking at least 48 hours in advance?",
    options: ["Squash courts", "Olympic swimming pool", "Fitness weight gym", "Outdoor running track"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Skvosh kortlari 48 soat oldin band qilinishi shartligi ta'kidlandi.\n4-Qadam: To'g'ri javob: Squash courts.",
    tags: ["Listening", "Section 2", "University Sports Center Registration"]
  },
  {
    id: "ielts-l-22",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Public Library Archive Tour', we will examine the procedures and findings outlined in your study brief.",
    question: "Where are the nineteenth-century regional census manuscripts preserved?",
    options: ["In the climate-controlled basement vault (Room B-14)", "On the open shelves of the third floor", "In the digital scanning lab near reception", "In the university administrative archives"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Qo'lyozmalar B-14 yerto'la xonasidagi maxsus haroratli saqlagichda joylashgan.\n4-Qadam: To'g'ri javob: In the climate-controlled basement vault (Room B-14).",
    tags: ["Listening", "Section 3", "Public Library Archive Tour"]
  },
  {
    id: "ielts-l-23",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Academic Seminar on Behavioral Economics', we will examine the procedures and findings outlined in your study brief.",
    question: "According to the lecturer, how does the 'endowment effect' distort rational pricing?",
    options: ["Individuals assign higher subjective value to items simply because they own them.", "Consumers always purchase the least expensive generic brand.", "Sellers lower profit margins during economic downturns.", "Investors prefer cash over equity during inflationary periods."],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Odamlar o'zlariga tegishli narsalarni egalik hissi tufayli qimmatroq baholaydilar.\n4-Qadam: To'g'ri javob: Individuals assign higher subjective value to items simply because they own them..",
    tags: ["Listening", "Section 4", "Academic Seminar on Behavioral Economics"]
  },
  {
    id: "ielts-l-24",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Fieldwork Briefing for Marine Ecology', we will examine the procedures and findings outlined in your study brief.",
    question: "What safety protocol must all research divers observe when sampling near kelp beds?",
    options: ["Always maintain visual contact with dive buddies and carry acoustic beacons", "Dive exclusively during full moon high tides", "Avoid wearing neoprene thermal drysuits", "Surface immediately whenever water visibility drops below 20 meters"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: G'avvoslar doimo sheriklarini ko'zdan qochirmasliklari va akustik mayoq olib yurishlari shart.\n4-Qadam: To'g'ri javob: Always maintain visual contact with dive buddies and carry acoustic beacons.",
    tags: ["Listening", "Section 1", "Fieldwork Briefing for Marine Ecology"]
  },
  {
    id: "ielts-l-25",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Career Development Center Workshop', we will examine the procedures and findings outlined in your study brief.",
    question: "Which networking strategy did the recruitment consultant specifically recommend for graduate interviews?",
    options: ["Formulating STAR method behavioral examples for technical questions", "Submitting identical cover letters to twenty firms simultaneously", "Avoiding questions about company mentorship programs", "Arriving exactly forty-five minutes before the scheduled time"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: STAR metodi (Situation, Task, Action, Result) eng samarali usul sifatida tavsiya etildi.\n4-Qadam: To'g'ri javob: Formulating STAR method behavioral examples for technical questions.",
    tags: ["Listening", "Section 2", "Career Development Center Workshop"]
  },
  {
    id: "ielts-l-26",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Environmental Engineering Lecture', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the primary function of artificial floating wetlands in stormwater retention ponds?",
    options: ["Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms", "Reflecting solar radiation to reduce water evaporation", "Preventing aquatic birds from nesting along the shoreline", "Generating electricity through microbial fuel cells"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Ildizlardagi mikroblar suvdan ortiqcha azot va fosfatlarni tozalaydi.\n4-Qadam: To'g'ri javob: Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms.",
    tags: ["Listening", "Section 3", "Environmental Engineering Lecture"]
  },
  {
    id: "ielts-l-27",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Campus Accommodation Office', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the earliest move-in date for the newly renovated postgraduate dormitories?",
    options: ["September 12th", "August 28th", "October 1st", "September 25th"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Dialogda talabalar uchun ko'chib o'tishning eng erta sanasi 12-sentyabr deb aytildi.\n4-Qadam: To'g'ri javob: September 12th.",
    tags: ["Listening", "Section 4", "Campus Accommodation Office"]
  },
  {
    id: "ielts-l-28",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'University Sports Center Registration', we will examine the procedures and findings outlined in your study brief.",
    question: "Which sports facility requires booking at least 48 hours in advance?",
    options: ["Squash courts", "Olympic swimming pool", "Fitness weight gym", "Outdoor running track"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Skvosh kortlari 48 soat oldin band qilinishi shartligi ta'kidlandi.\n4-Qadam: To'g'ri javob: Squash courts.",
    tags: ["Listening", "Section 1", "University Sports Center Registration"]
  },
  {
    id: "ielts-l-29",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Public Library Archive Tour', we will examine the procedures and findings outlined in your study brief.",
    question: "Where are the nineteenth-century regional census manuscripts preserved?",
    options: ["In the climate-controlled basement vault (Room B-14)", "On the open shelves of the third floor", "In the digital scanning lab near reception", "In the university administrative archives"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Qo'lyozmalar B-14 yerto'la xonasidagi maxsus haroratli saqlagichda joylashgan.\n4-Qadam: To'g'ri javob: In the climate-controlled basement vault (Room B-14).",
    tags: ["Listening", "Section 2", "Public Library Archive Tour"]
  },
  {
    id: "ielts-l-30",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Academic Seminar on Behavioral Economics', we will examine the procedures and findings outlined in your study brief.",
    question: "According to the lecturer, how does the 'endowment effect' distort rational pricing?",
    options: ["Individuals assign higher subjective value to items simply because they own them.", "Consumers always purchase the least expensive generic brand.", "Sellers lower profit margins during economic downturns.", "Investors prefer cash over equity during inflationary periods."],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Odamlar o'zlariga tegishli narsalarni egalik hissi tufayli qimmatroq baholaydilar.\n4-Qadam: To'g'ri javob: Individuals assign higher subjective value to items simply because they own them..",
    tags: ["Listening", "Section 3", "Academic Seminar on Behavioral Economics"]
  },
  {
    id: "ielts-l-31",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Fieldwork Briefing for Marine Ecology', we will examine the procedures and findings outlined in your study brief.",
    question: "What safety protocol must all research divers observe when sampling near kelp beds?",
    options: ["Always maintain visual contact with dive buddies and carry acoustic beacons", "Dive exclusively during full moon high tides", "Avoid wearing neoprene thermal drysuits", "Surface immediately whenever water visibility drops below 20 meters"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: G'avvoslar doimo sheriklarini ko'zdan qochirmasliklari va akustik mayoq olib yurishlari shart.\n4-Qadam: To'g'ri javob: Always maintain visual contact with dive buddies and carry acoustic beacons.",
    tags: ["Listening", "Section 4", "Fieldwork Briefing for Marine Ecology"]
  },
  {
    id: "ielts-l-32",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Career Development Center Workshop', we will examine the procedures and findings outlined in your study brief.",
    question: "Which networking strategy did the recruitment consultant specifically recommend for graduate interviews?",
    options: ["Formulating STAR method behavioral examples for technical questions", "Submitting identical cover letters to twenty firms simultaneously", "Avoiding questions about company mentorship programs", "Arriving exactly forty-five minutes before the scheduled time"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: STAR metodi (Situation, Task, Action, Result) eng samarali usul sifatida tavsiya etildi.\n4-Qadam: To'g'ri javob: Formulating STAR method behavioral examples for technical questions.",
    tags: ["Listening", "Section 1", "Career Development Center Workshop"]
  },
  {
    id: "ielts-l-33",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Environmental Engineering Lecture', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the primary function of artificial floating wetlands in stormwater retention ponds?",
    options: ["Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms", "Reflecting solar radiation to reduce water evaporation", "Preventing aquatic birds from nesting along the shoreline", "Generating electricity through microbial fuel cells"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Ildizlardagi mikroblar suvdan ortiqcha azot va fosfatlarni tozalaydi.\n4-Qadam: To'g'ri javob: Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms.",
    tags: ["Listening", "Section 2", "Environmental Engineering Lecture"]
  },
  {
    id: "ielts-l-34",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Campus Accommodation Office', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the earliest move-in date for the newly renovated postgraduate dormitories?",
    options: ["September 12th", "August 28th", "October 1st", "September 25th"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Dialogda talabalar uchun ko'chib o'tishning eng erta sanasi 12-sentyabr deb aytildi.\n4-Qadam: To'g'ri javob: September 12th.",
    tags: ["Listening", "Section 3", "Campus Accommodation Office"]
  },
  {
    id: "ielts-l-35",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'University Sports Center Registration', we will examine the procedures and findings outlined in your study brief.",
    question: "Which sports facility requires booking at least 48 hours in advance?",
    options: ["Squash courts", "Olympic swimming pool", "Fitness weight gym", "Outdoor running track"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Skvosh kortlari 48 soat oldin band qilinishi shartligi ta'kidlandi.\n4-Qadam: To'g'ri javob: Squash courts.",
    tags: ["Listening", "Section 4", "University Sports Center Registration"]
  },
  {
    id: "ielts-l-36",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Public Library Archive Tour', we will examine the procedures and findings outlined in your study brief.",
    question: "Where are the nineteenth-century regional census manuscripts preserved?",
    options: ["In the climate-controlled basement vault (Room B-14)", "On the open shelves of the third floor", "In the digital scanning lab near reception", "In the university administrative archives"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Qo'lyozmalar B-14 yerto'la xonasidagi maxsus haroratli saqlagichda joylashgan.\n4-Qadam: To'g'ri javob: In the climate-controlled basement vault (Room B-14).",
    tags: ["Listening", "Section 1", "Public Library Archive Tour"]
  },
  {
    id: "ielts-l-37",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Academic Seminar on Behavioral Economics', we will examine the procedures and findings outlined in your study brief.",
    question: "According to the lecturer, how does the 'endowment effect' distort rational pricing?",
    options: ["Individuals assign higher subjective value to items simply because they own them.", "Consumers always purchase the least expensive generic brand.", "Sellers lower profit margins during economic downturns.", "Investors prefer cash over equity during inflationary periods."],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Odamlar o'zlariga tegishli narsalarni egalik hissi tufayli qimmatroq baholaydilar.\n4-Qadam: To'g'ri javob: Individuals assign higher subjective value to items simply because they own them..",
    tags: ["Listening", "Section 2", "Academic Seminar on Behavioral Economics"]
  },
  {
    id: "ielts-l-38",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Fieldwork Briefing for Marine Ecology', we will examine the procedures and findings outlined in your study brief.",
    question: "What safety protocol must all research divers observe when sampling near kelp beds?",
    options: ["Always maintain visual contact with dive buddies and carry acoustic beacons", "Dive exclusively during full moon high tides", "Avoid wearing neoprene thermal drysuits", "Surface immediately whenever water visibility drops below 20 meters"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: G'avvoslar doimo sheriklarini ko'zdan qochirmasliklari va akustik mayoq olib yurishlari shart.\n4-Qadam: To'g'ri javob: Always maintain visual contact with dive buddies and carry acoustic beacons.",
    tags: ["Listening", "Section 3", "Fieldwork Briefing for Marine Ecology"]
  },
  {
    id: "ielts-l-39",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Career Development Center Workshop', we will examine the procedures and findings outlined in your study brief.",
    question: "Which networking strategy did the recruitment consultant specifically recommend for graduate interviews?",
    options: ["Formulating STAR method behavioral examples for technical questions", "Submitting identical cover letters to twenty firms simultaneously", "Avoiding questions about company mentorship programs", "Arriving exactly forty-five minutes before the scheduled time"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: STAR metodi (Situation, Task, Action, Result) eng samarali usul sifatida tavsiya etildi.\n4-Qadam: To'g'ri javob: Formulating STAR method behavioral examples for technical questions.",
    tags: ["Listening", "Section 4", "Career Development Center Workshop"]
  },
  {
    id: "ielts-l-40",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Environmental Engineering Lecture', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the primary function of artificial floating wetlands in stormwater retention ponds?",
    options: ["Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms", "Reflecting solar radiation to reduce water evaporation", "Preventing aquatic birds from nesting along the shoreline", "Generating electricity through microbial fuel cells"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Ildizlardagi mikroblar suvdan ortiqcha azot va fosfatlarni tozalaydi.\n4-Qadam: To'g'ri javob: Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms.",
    tags: ["Listening", "Section 1", "Environmental Engineering Lecture"]
  },
  {
    id: "ielts-l-41",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Campus Accommodation Office', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the earliest move-in date for the newly renovated postgraduate dormitories?",
    options: ["September 12th", "August 28th", "October 1st", "September 25th"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Dialogda talabalar uchun ko'chib o'tishning eng erta sanasi 12-sentyabr deb aytildi.\n4-Qadam: To'g'ri javob: September 12th.",
    tags: ["Listening", "Section 2", "Campus Accommodation Office"]
  },
  {
    id: "ielts-l-42",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'University Sports Center Registration', we will examine the procedures and findings outlined in your study brief.",
    question: "Which sports facility requires booking at least 48 hours in advance?",
    options: ["Squash courts", "Olympic swimming pool", "Fitness weight gym", "Outdoor running track"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Skvosh kortlari 48 soat oldin band qilinishi shartligi ta'kidlandi.\n4-Qadam: To'g'ri javob: Squash courts.",
    tags: ["Listening", "Section 3", "University Sports Center Registration"]
  },
  {
    id: "ielts-l-43",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Public Library Archive Tour', we will examine the procedures and findings outlined in your study brief.",
    question: "Where are the nineteenth-century regional census manuscripts preserved?",
    options: ["In the climate-controlled basement vault (Room B-14)", "On the open shelves of the third floor", "In the digital scanning lab near reception", "In the university administrative archives"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Qo'lyozmalar B-14 yerto'la xonasidagi maxsus haroratli saqlagichda joylashgan.\n4-Qadam: To'g'ri javob: In the climate-controlled basement vault (Room B-14).",
    tags: ["Listening", "Section 4", "Public Library Archive Tour"]
  },
  {
    id: "ielts-l-44",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Academic Seminar on Behavioral Economics', we will examine the procedures and findings outlined in your study brief.",
    question: "According to the lecturer, how does the 'endowment effect' distort rational pricing?",
    options: ["Individuals assign higher subjective value to items simply because they own them.", "Consumers always purchase the least expensive generic brand.", "Sellers lower profit margins during economic downturns.", "Investors prefer cash over equity during inflationary periods."],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Odamlar o'zlariga tegishli narsalarni egalik hissi tufayli qimmatroq baholaydilar.\n4-Qadam: To'g'ri javob: Individuals assign higher subjective value to items simply because they own them..",
    tags: ["Listening", "Section 1", "Academic Seminar on Behavioral Economics"]
  },
  {
    id: "ielts-l-45",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Fieldwork Briefing for Marine Ecology', we will examine the procedures and findings outlined in your study brief.",
    question: "What safety protocol must all research divers observe when sampling near kelp beds?",
    options: ["Always maintain visual contact with dive buddies and carry acoustic beacons", "Dive exclusively during full moon high tides", "Avoid wearing neoprene thermal drysuits", "Surface immediately whenever water visibility drops below 20 meters"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: G'avvoslar doimo sheriklarini ko'zdan qochirmasliklari va akustik mayoq olib yurishlari shart.\n4-Qadam: To'g'ri javob: Always maintain visual contact with dive buddies and carry acoustic beacons.",
    tags: ["Listening", "Section 2", "Fieldwork Briefing for Marine Ecology"]
  },
  {
    id: "ielts-l-46",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Career Development Center Workshop', we will examine the procedures and findings outlined in your study brief.",
    question: "Which networking strategy did the recruitment consultant specifically recommend for graduate interviews?",
    options: ["Formulating STAR method behavioral examples for technical questions", "Submitting identical cover letters to twenty firms simultaneously", "Avoiding questions about company mentorship programs", "Arriving exactly forty-five minutes before the scheduled time"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: STAR metodi (Situation, Task, Action, Result) eng samarali usul sifatida tavsiya etildi.\n4-Qadam: To'g'ri javob: Formulating STAR method behavioral examples for technical questions.",
    tags: ["Listening", "Section 3", "Career Development Center Workshop"]
  },
  {
    id: "ielts-l-47",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Environmental Engineering Lecture', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the primary function of artificial floating wetlands in stormwater retention ponds?",
    options: ["Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms", "Reflecting solar radiation to reduce water evaporation", "Preventing aquatic birds from nesting along the shoreline", "Generating electricity through microbial fuel cells"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Ildizlardagi mikroblar suvdan ortiqcha azot va fosfatlarni tozalaydi.\n4-Qadam: To'g'ri javob: Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms.",
    tags: ["Listening", "Section 4", "Environmental Engineering Lecture"]
  },
  {
    id: "ielts-l-48",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Campus Accommodation Office', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the earliest move-in date for the newly renovated postgraduate dormitories?",
    options: ["September 12th", "August 28th", "October 1st", "September 25th"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Dialogda talabalar uchun ko'chib o'tishning eng erta sanasi 12-sentyabr deb aytildi.\n4-Qadam: To'g'ri javob: September 12th.",
    tags: ["Listening", "Section 1", "Campus Accommodation Office"]
  },
  {
    id: "ielts-l-49",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'University Sports Center Registration', we will examine the procedures and findings outlined in your study brief.",
    question: "Which sports facility requires booking at least 48 hours in advance?",
    options: ["Squash courts", "Olympic swimming pool", "Fitness weight gym", "Outdoor running track"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Skvosh kortlari 48 soat oldin band qilinishi shartligi ta'kidlandi.\n4-Qadam: To'g'ri javob: Squash courts.",
    tags: ["Listening", "Section 2", "University Sports Center Registration"]
  },
  {
    id: "ielts-l-50",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Public Library Archive Tour', we will examine the procedures and findings outlined in your study brief.",
    question: "Where are the nineteenth-century regional census manuscripts preserved?",
    options: ["In the climate-controlled basement vault (Room B-14)", "On the open shelves of the third floor", "In the digital scanning lab near reception", "In the university administrative archives"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Qo'lyozmalar B-14 yerto'la xonasidagi maxsus haroratli saqlagichda joylashgan.\n4-Qadam: To'g'ri javob: In the climate-controlled basement vault (Room B-14).",
    tags: ["Listening", "Section 3", "Public Library Archive Tour"]
  },
  {
    id: "ielts-l-51",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Academic Seminar on Behavioral Economics', we will examine the procedures and findings outlined in your study brief.",
    question: "According to the lecturer, how does the 'endowment effect' distort rational pricing?",
    options: ["Individuals assign higher subjective value to items simply because they own them.", "Consumers always purchase the least expensive generic brand.", "Sellers lower profit margins during economic downturns.", "Investors prefer cash over equity during inflationary periods."],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Odamlar o'zlariga tegishli narsalarni egalik hissi tufayli qimmatroq baholaydilar.\n4-Qadam: To'g'ri javob: Individuals assign higher subjective value to items simply because they own them..",
    tags: ["Listening", "Section 4", "Academic Seminar on Behavioral Economics"]
  },
  {
    id: "ielts-l-52",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Fieldwork Briefing for Marine Ecology', we will examine the procedures and findings outlined in your study brief.",
    question: "What safety protocol must all research divers observe when sampling near kelp beds?",
    options: ["Always maintain visual contact with dive buddies and carry acoustic beacons", "Dive exclusively during full moon high tides", "Avoid wearing neoprene thermal drysuits", "Surface immediately whenever water visibility drops below 20 meters"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: G'avvoslar doimo sheriklarini ko'zdan qochirmasliklari va akustik mayoq olib yurishlari shart.\n4-Qadam: To'g'ri javob: Always maintain visual contact with dive buddies and carry acoustic beacons.",
    tags: ["Listening", "Section 1", "Fieldwork Briefing for Marine Ecology"]
  },
  {
    id: "ielts-l-53",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Career Development Center Workshop', we will examine the procedures and findings outlined in your study brief.",
    question: "Which networking strategy did the recruitment consultant specifically recommend for graduate interviews?",
    options: ["Formulating STAR method behavioral examples for technical questions", "Submitting identical cover letters to twenty firms simultaneously", "Avoiding questions about company mentorship programs", "Arriving exactly forty-five minutes before the scheduled time"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: STAR metodi (Situation, Task, Action, Result) eng samarali usul sifatida tavsiya etildi.\n4-Qadam: To'g'ri javob: Formulating STAR method behavioral examples for technical questions.",
    tags: ["Listening", "Section 2", "Career Development Center Workshop"]
  },
  {
    id: "ielts-l-54",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Environmental Engineering Lecture', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the primary function of artificial floating wetlands in stormwater retention ponds?",
    options: ["Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms", "Reflecting solar radiation to reduce water evaporation", "Preventing aquatic birds from nesting along the shoreline", "Generating electricity through microbial fuel cells"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Ildizlardagi mikroblar suvdan ortiqcha azot va fosfatlarni tozalaydi.\n4-Qadam: To'g'ri javob: Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms.",
    tags: ["Listening", "Section 3", "Environmental Engineering Lecture"]
  },
  {
    id: "ielts-l-55",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Campus Accommodation Office', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the earliest move-in date for the newly renovated postgraduate dormitories?",
    options: ["September 12th", "August 28th", "October 1st", "September 25th"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Dialogda talabalar uchun ko'chib o'tishning eng erta sanasi 12-sentyabr deb aytildi.\n4-Qadam: To'g'ri javob: September 12th.",
    tags: ["Listening", "Section 4", "Campus Accommodation Office"]
  },
  {
    id: "ielts-l-56",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'University Sports Center Registration', we will examine the procedures and findings outlined in your study brief.",
    question: "Which sports facility requires booking at least 48 hours in advance?",
    options: ["Squash courts", "Olympic swimming pool", "Fitness weight gym", "Outdoor running track"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Skvosh kortlari 48 soat oldin band qilinishi shartligi ta'kidlandi.\n4-Qadam: To'g'ri javob: Squash courts.",
    tags: ["Listening", "Section 1", "University Sports Center Registration"]
  },
  {
    id: "ielts-l-57",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Public Library Archive Tour', we will examine the procedures and findings outlined in your study brief.",
    question: "Where are the nineteenth-century regional census manuscripts preserved?",
    options: ["In the climate-controlled basement vault (Room B-14)", "On the open shelves of the third floor", "In the digital scanning lab near reception", "In the university administrative archives"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Qo'lyozmalar B-14 yerto'la xonasidagi maxsus haroratli saqlagichda joylashgan.\n4-Qadam: To'g'ri javob: In the climate-controlled basement vault (Room B-14).",
    tags: ["Listening", "Section 2", "Public Library Archive Tour"]
  },
  {
    id: "ielts-l-58",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Academic Seminar on Behavioral Economics', we will examine the procedures and findings outlined in your study brief.",
    question: "According to the lecturer, how does the 'endowment effect' distort rational pricing?",
    options: ["Individuals assign higher subjective value to items simply because they own them.", "Consumers always purchase the least expensive generic brand.", "Sellers lower profit margins during economic downturns.", "Investors prefer cash over equity during inflationary periods."],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Odamlar o'zlariga tegishli narsalarni egalik hissi tufayli qimmatroq baholaydilar.\n4-Qadam: To'g'ri javob: Individuals assign higher subjective value to items simply because they own them..",
    tags: ["Listening", "Section 3", "Academic Seminar on Behavioral Economics"]
  },
  {
    id: "ielts-l-59",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Fieldwork Briefing for Marine Ecology', we will examine the procedures and findings outlined in your study brief.",
    question: "What safety protocol must all research divers observe when sampling near kelp beds?",
    options: ["Always maintain visual contact with dive buddies and carry acoustic beacons", "Dive exclusively during full moon high tides", "Avoid wearing neoprene thermal drysuits", "Surface immediately whenever water visibility drops below 20 meters"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: G'avvoslar doimo sheriklarini ko'zdan qochirmasliklari va akustik mayoq olib yurishlari shart.\n4-Qadam: To'g'ri javob: Always maintain visual contact with dive buddies and carry acoustic beacons.",
    tags: ["Listening", "Section 4", "Fieldwork Briefing for Marine Ecology"]
  },
  {
    id: "ielts-l-60",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Career Development Center Workshop', we will examine the procedures and findings outlined in your study brief.",
    question: "Which networking strategy did the recruitment consultant specifically recommend for graduate interviews?",
    options: ["Formulating STAR method behavioral examples for technical questions", "Submitting identical cover letters to twenty firms simultaneously", "Avoiding questions about company mentorship programs", "Arriving exactly forty-five minutes before the scheduled time"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: STAR metodi (Situation, Task, Action, Result) eng samarali usul sifatida tavsiya etildi.\n4-Qadam: To'g'ri javob: Formulating STAR method behavioral examples for technical questions.",
    tags: ["Listening", "Section 1", "Career Development Center Workshop"]
  },
  {
    id: "ielts-l-61",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Environmental Engineering Lecture', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the primary function of artificial floating wetlands in stormwater retention ponds?",
    options: ["Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms", "Reflecting solar radiation to reduce water evaporation", "Preventing aquatic birds from nesting along the shoreline", "Generating electricity through microbial fuel cells"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Ildizlardagi mikroblar suvdan ortiqcha azot va fosfatlarni tozalaydi.\n4-Qadam: To'g'ri javob: Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms.",
    tags: ["Listening", "Section 2", "Environmental Engineering Lecture"]
  },
  {
    id: "ielts-l-62",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Campus Accommodation Office', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the earliest move-in date for the newly renovated postgraduate dormitories?",
    options: ["September 12th", "August 28th", "October 1st", "September 25th"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Dialogda talabalar uchun ko'chib o'tishning eng erta sanasi 12-sentyabr deb aytildi.\n4-Qadam: To'g'ri javob: September 12th.",
    tags: ["Listening", "Section 3", "Campus Accommodation Office"]
  },
  {
    id: "ielts-l-63",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'University Sports Center Registration', we will examine the procedures and findings outlined in your study brief.",
    question: "Which sports facility requires booking at least 48 hours in advance?",
    options: ["Squash courts", "Olympic swimming pool", "Fitness weight gym", "Outdoor running track"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Skvosh kortlari 48 soat oldin band qilinishi shartligi ta'kidlandi.\n4-Qadam: To'g'ri javob: Squash courts.",
    tags: ["Listening", "Section 4", "University Sports Center Registration"]
  },
  {
    id: "ielts-l-64",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Public Library Archive Tour', we will examine the procedures and findings outlined in your study brief.",
    question: "Where are the nineteenth-century regional census manuscripts preserved?",
    options: ["In the climate-controlled basement vault (Room B-14)", "On the open shelves of the third floor", "In the digital scanning lab near reception", "In the university administrative archives"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Qo'lyozmalar B-14 yerto'la xonasidagi maxsus haroratli saqlagichda joylashgan.\n4-Qadam: To'g'ri javob: In the climate-controlled basement vault (Room B-14).",
    tags: ["Listening", "Section 1", "Public Library Archive Tour"]
  },
  {
    id: "ielts-l-65",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Academic Seminar on Behavioral Economics', we will examine the procedures and findings outlined in your study brief.",
    question: "According to the lecturer, how does the 'endowment effect' distort rational pricing?",
    options: ["Individuals assign higher subjective value to items simply because they own them.", "Consumers always purchase the least expensive generic brand.", "Sellers lower profit margins during economic downturns.", "Investors prefer cash over equity during inflationary periods."],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Odamlar o'zlariga tegishli narsalarni egalik hissi tufayli qimmatroq baholaydilar.\n4-Qadam: To'g'ri javob: Individuals assign higher subjective value to items simply because they own them..",
    tags: ["Listening", "Section 2", "Academic Seminar on Behavioral Economics"]
  },
  {
    id: "ielts-l-66",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Fieldwork Briefing for Marine Ecology', we will examine the procedures and findings outlined in your study brief.",
    question: "What safety protocol must all research divers observe when sampling near kelp beds?",
    options: ["Always maintain visual contact with dive buddies and carry acoustic beacons", "Dive exclusively during full moon high tides", "Avoid wearing neoprene thermal drysuits", "Surface immediately whenever water visibility drops below 20 meters"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: G'avvoslar doimo sheriklarini ko'zdan qochirmasliklari va akustik mayoq olib yurishlari shart.\n4-Qadam: To'g'ri javob: Always maintain visual contact with dive buddies and carry acoustic beacons.",
    tags: ["Listening", "Section 3", "Fieldwork Briefing for Marine Ecology"]
  },
  {
    id: "ielts-l-67",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Career Development Center Workshop', we will examine the procedures and findings outlined in your study brief.",
    question: "Which networking strategy did the recruitment consultant specifically recommend for graduate interviews?",
    options: ["Formulating STAR method behavioral examples for technical questions", "Submitting identical cover letters to twenty firms simultaneously", "Avoiding questions about company mentorship programs", "Arriving exactly forty-five minutes before the scheduled time"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: STAR metodi (Situation, Task, Action, Result) eng samarali usul sifatida tavsiya etildi.\n4-Qadam: To'g'ri javob: Formulating STAR method behavioral examples for technical questions.",
    tags: ["Listening", "Section 4", "Career Development Center Workshop"]
  },
  {
    id: "ielts-l-68",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Environmental Engineering Lecture', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the primary function of artificial floating wetlands in stormwater retention ponds?",
    options: ["Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms", "Reflecting solar radiation to reduce water evaporation", "Preventing aquatic birds from nesting along the shoreline", "Generating electricity through microbial fuel cells"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Ildizlardagi mikroblar suvdan ortiqcha azot va fosfatlarni tozalaydi.\n4-Qadam: To'g'ri javob: Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms.",
    tags: ["Listening", "Section 1", "Environmental Engineering Lecture"]
  },
  {
    id: "ielts-l-69",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Campus Accommodation Office', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the earliest move-in date for the newly renovated postgraduate dormitories?",
    options: ["September 12th", "August 28th", "October 1st", "September 25th"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Dialogda talabalar uchun ko'chib o'tishning eng erta sanasi 12-sentyabr deb aytildi.\n4-Qadam: To'g'ri javob: September 12th.",
    tags: ["Listening", "Section 2", "Campus Accommodation Office"]
  },
  {
    id: "ielts-l-70",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'University Sports Center Registration', we will examine the procedures and findings outlined in your study brief.",
    question: "Which sports facility requires booking at least 48 hours in advance?",
    options: ["Squash courts", "Olympic swimming pool", "Fitness weight gym", "Outdoor running track"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Skvosh kortlari 48 soat oldin band qilinishi shartligi ta'kidlandi.\n4-Qadam: To'g'ri javob: Squash courts.",
    tags: ["Listening", "Section 3", "University Sports Center Registration"]
  },
  {
    id: "ielts-l-71",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Public Library Archive Tour', we will examine the procedures and findings outlined in your study brief.",
    question: "Where are the nineteenth-century regional census manuscripts preserved?",
    options: ["In the climate-controlled basement vault (Room B-14)", "On the open shelves of the third floor", "In the digital scanning lab near reception", "In the university administrative archives"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Qo'lyozmalar B-14 yerto'la xonasidagi maxsus haroratli saqlagichda joylashgan.\n4-Qadam: To'g'ri javob: In the climate-controlled basement vault (Room B-14).",
    tags: ["Listening", "Section 4", "Public Library Archive Tour"]
  },
  {
    id: "ielts-l-72",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Academic Seminar on Behavioral Economics', we will examine the procedures and findings outlined in your study brief.",
    question: "According to the lecturer, how does the 'endowment effect' distort rational pricing?",
    options: ["Individuals assign higher subjective value to items simply because they own them.", "Consumers always purchase the least expensive generic brand.", "Sellers lower profit margins during economic downturns.", "Investors prefer cash over equity during inflationary periods."],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Odamlar o'zlariga tegishli narsalarni egalik hissi tufayli qimmatroq baholaydilar.\n4-Qadam: To'g'ri javob: Individuals assign higher subjective value to items simply because they own them..",
    tags: ["Listening", "Section 1", "Academic Seminar on Behavioral Economics"]
  },
  {
    id: "ielts-l-73",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Fieldwork Briefing for Marine Ecology', we will examine the procedures and findings outlined in your study brief.",
    question: "What safety protocol must all research divers observe when sampling near kelp beds?",
    options: ["Always maintain visual contact with dive buddies and carry acoustic beacons", "Dive exclusively during full moon high tides", "Avoid wearing neoprene thermal drysuits", "Surface immediately whenever water visibility drops below 20 meters"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: G'avvoslar doimo sheriklarini ko'zdan qochirmasliklari va akustik mayoq olib yurishlari shart.\n4-Qadam: To'g'ri javob: Always maintain visual contact with dive buddies and carry acoustic beacons.",
    tags: ["Listening", "Section 2", "Fieldwork Briefing for Marine Ecology"]
  },
  {
    id: "ielts-l-74",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Career Development Center Workshop', we will examine the procedures and findings outlined in your study brief.",
    question: "Which networking strategy did the recruitment consultant specifically recommend for graduate interviews?",
    options: ["Formulating STAR method behavioral examples for technical questions", "Submitting identical cover letters to twenty firms simultaneously", "Avoiding questions about company mentorship programs", "Arriving exactly forty-five minutes before the scheduled time"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: STAR metodi (Situation, Task, Action, Result) eng samarali usul sifatida tavsiya etildi.\n4-Qadam: To'g'ri javob: Formulating STAR method behavioral examples for technical questions.",
    tags: ["Listening", "Section 3", "Career Development Center Workshop"]
  },
  {
    id: "ielts-l-75",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Environmental Engineering Lecture', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the primary function of artificial floating wetlands in stormwater retention ponds?",
    options: ["Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms", "Reflecting solar radiation to reduce water evaporation", "Preventing aquatic birds from nesting along the shoreline", "Generating electricity through microbial fuel cells"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Ildizlardagi mikroblar suvdan ortiqcha azot va fosfatlarni tozalaydi.\n4-Qadam: To'g'ri javob: Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms.",
    tags: ["Listening", "Section 4", "Environmental Engineering Lecture"]
  },
  {
    id: "ielts-l-76",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Campus Accommodation Office', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the earliest move-in date for the newly renovated postgraduate dormitories?",
    options: ["September 12th", "August 28th", "October 1st", "September 25th"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Dialogda talabalar uchun ko'chib o'tishning eng erta sanasi 12-sentyabr deb aytildi.\n4-Qadam: To'g'ri javob: September 12th.",
    tags: ["Listening", "Section 1", "Campus Accommodation Office"]
  },
  {
    id: "ielts-l-77",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'University Sports Center Registration', we will examine the procedures and findings outlined in your study brief.",
    question: "Which sports facility requires booking at least 48 hours in advance?",
    options: ["Squash courts", "Olympic swimming pool", "Fitness weight gym", "Outdoor running track"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Skvosh kortlari 48 soat oldin band qilinishi shartligi ta'kidlandi.\n4-Qadam: To'g'ri javob: Squash courts.",
    tags: ["Listening", "Section 2", "University Sports Center Registration"]
  },
  {
    id: "ielts-l-78",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Public Library Archive Tour', we will examine the procedures and findings outlined in your study brief.",
    question: "Where are the nineteenth-century regional census manuscripts preserved?",
    options: ["In the climate-controlled basement vault (Room B-14)", "On the open shelves of the third floor", "In the digital scanning lab near reception", "In the university administrative archives"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Qo'lyozmalar B-14 yerto'la xonasidagi maxsus haroratli saqlagichda joylashgan.\n4-Qadam: To'g'ri javob: In the climate-controlled basement vault (Room B-14).",
    tags: ["Listening", "Section 3", "Public Library Archive Tour"]
  },
  {
    id: "ielts-l-79",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Academic Seminar on Behavioral Economics', we will examine the procedures and findings outlined in your study brief.",
    question: "According to the lecturer, how does the 'endowment effect' distort rational pricing?",
    options: ["Individuals assign higher subjective value to items simply because they own them.", "Consumers always purchase the least expensive generic brand.", "Sellers lower profit margins during economic downturns.", "Investors prefer cash over equity during inflationary periods."],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Odamlar o'zlariga tegishli narsalarni egalik hissi tufayli qimmatroq baholaydilar.\n4-Qadam: To'g'ri javob: Individuals assign higher subjective value to items simply because they own them..",
    tags: ["Listening", "Section 4", "Academic Seminar on Behavioral Economics"]
  },
  {
    id: "ielts-l-80",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'Fieldwork Briefing for Marine Ecology', we will examine the procedures and findings outlined in your study brief.",
    question: "What safety protocol must all research divers observe when sampling near kelp beds?",
    options: ["Always maintain visual contact with dive buddies and carry acoustic beacons", "Dive exclusively during full moon high tides", "Avoid wearing neoprene thermal drysuits", "Surface immediately whenever water visibility drops below 20 meters"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: G'avvoslar doimo sheriklarini ko'zdan qochirmasliklari va akustik mayoq olib yurishlari shart.\n4-Qadam: To'g'ri javob: Always maintain visual contact with dive buddies and carry acoustic beacons.",
    tags: ["Listening", "Section 1", "Fieldwork Briefing for Marine Ecology"]
  },
  {
    id: "ielts-l-81",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Career Development Center Workshop', we will examine the procedures and findings outlined in your study brief.",
    question: "Which networking strategy did the recruitment consultant specifically recommend for graduate interviews?",
    options: ["Formulating STAR method behavioral examples for technical questions", "Submitting identical cover letters to twenty firms simultaneously", "Avoiding questions about company mentorship programs", "Arriving exactly forty-five minutes before the scheduled time"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: STAR metodi (Situation, Task, Action, Result) eng samarali usul sifatida tavsiya etildi.\n4-Qadam: To'g'ri javob: Formulating STAR method behavioral examples for technical questions.",
    tags: ["Listening", "Section 2", "Career Development Center Workshop"]
  },
  {
    id: "ielts-l-82",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 3",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 3):\nSpeaker: In today's session on 'Environmental Engineering Lecture', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the primary function of artificial floating wetlands in stormwater retention ponds?",
    options: ["Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms", "Reflecting solar radiation to reduce water evaporation", "Preventing aquatic birds from nesting along the shoreline", "Generating electricity through microbial fuel cells"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 3) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Ildizlardagi mikroblar suvdan ortiqcha azot va fosfatlarni tozalaydi.\n4-Qadam: To'g'ri javob: Bio-filtering dissolved nitrates and phosphates via plant root microbial biofilms.",
    tags: ["Listening", "Section 3", "Environmental Engineering Lecture"]
  },
  {
    id: "ielts-l-83",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 4",
    difficulty: "Band 8.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 4):\nSpeaker: In today's session on 'Campus Accommodation Office', we will examine the procedures and findings outlined in your study brief.",
    question: "What is the earliest move-in date for the newly renovated postgraduate dormitories?",
    options: ["September 12th", "August 28th", "October 1st", "September 25th"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 4) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Dialogda talabalar uchun ko'chib o'tishning eng erta sanasi 12-sentyabr deb aytildi.\n4-Qadam: To'g'ri javob: September 12th.",
    tags: ["Listening", "Section 4", "Campus Accommodation Office"]
  },
  {
    id: "ielts-l-84",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 1",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 1):\nSpeaker: In today's session on 'University Sports Center Registration', we will examine the procedures and findings outlined in your study brief.",
    question: "Which sports facility requires booking at least 48 hours in advance?",
    options: ["Squash courts", "Olympic swimming pool", "Fitness weight gym", "Outdoor running track"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 1) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Skvosh kortlari 48 soat oldin band qilinishi shartligi ta'kidlandi.\n4-Qadam: To'g'ri javob: Squash courts.",
    tags: ["Listening", "Section 1", "University Sports Center Registration"]
  },
  {
    id: "ielts-l-85",
    exam: "IELTS",
    year: "2026",
    examSession: "IELTS Academic 2026 Actual Exam",
    section: "Academic Listening: Section 2",
    difficulty: "Band 7.0",
    stimulus: "AUDIO TRANSCRIPT (Listening Section 2):\nSpeaker: In today's session on 'Public Library Archive Tour', we will examine the procedures and findings outlined in your study brief.",
    question: "Where are the nineteenth-century regional census manuscripts preserved?",
    options: ["In the climate-controlled basement vault (Room B-14)", "On the open shelves of the third floor", "In the digital scanning lab near reception", "In the university administrative archives"],
    correctIndex: 0,
    explanation: "1-Qadam: Tinglash matni (Section 2) kalit so'zlari belgilandi.\n2-Qadam: Ma'ruzachi nutqidagi to'g'ridan-to'g'ri javob tekshirildi.\n3-Qadam: Qo'lyozmalar B-14 yerto'la xonasidagi maxsus haroratli saqlagichda joylashgan.\n4-Qadam: To'g'ri javob: In the climate-controlled basement vault (Room B-14).",
    tags: ["Listening", "Section 2", "Public Library Archive Tour"]
  }
];

const ALL_IELTS_QUESTIONS = [...IELTS_READING_FULL_2026, ...IELTS_LISTENING_FULL_2026];
