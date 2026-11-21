// ============================================================================
// YU ACADEMY - 2026 DIGITAL SAT & IELTS RASMIY AKADEMIK LUG'ATI VA TARJIMON
// 120+ Eng Ko'p Uchraydigan Oliy Darajali So'zlar, IPA, Misollar va Layfxaklar
// ============================================================================
const YU_ACADEMIC_DICTIONARY = {
  "ubiquitous": {
    ipa: "/juːˈbɪk.wɪ.təs/",
    pos: "Sifat (Adjective)",
    uz: "Hamma joyda mavjud, har qadamda uchraydigan, keng tarqalgan",
    en: "Present, appearing, or found everywhere",
    example: "Smartphones and high-speed internet have become ubiquitous across modern urban centers.",
    exampleUz: "Smartfonlar va tezkor internet zamonaviy shahar markazlarida hamma joyda keng tarqalgan bo'lib qoldi.",
    synonyms: ["omnipresent", "pervasive", "universal"],
    antonyms: ["rare", "scarce", "isolated"],
    examTip: "Digital SAT Reading va IELTS Writing Task 2 da 'common' yoki 'popular' so'zlari o'rniga ishlatilsa, Lexical Resource ballingiz 8.5+ ga ko'tariladi."
  },
  "meticulous": {
    ipa: "/məˈtɪk.jə.ləs/",
    pos: "Sifat (Adjective)",
    uz: "O'ta sinchkov, mayda-chuydasigacha e'tiborli, qunt bilan qilingan",
    en: "Showing great attention to detail; very careful and precise",
    example: "The researcher kept meticulous records of every chemical reaction throughout the experiment.",
    exampleUz: "Tadqiqotchi tajriba davomida har bir kimyoviy reaksiyaning o'ta sinchkovlik bilan yozuvlarini yuritdi.",
    synonyms: ["scrupulous", "painstaking", "diligent", "precise"],
    antonyms: ["careless", "sloppy", "negligent"],
    examTip: "SAT Writing va ilmiy tadqiqot matnlarida uslubiy aniqlikni ifodalash uchun ideal so'z."
  },
  "pragmatic": {
    ipa: "/præɡˈmæt.ɪk/",
    pos: "Sifat (Adjective)",
    uz: "Amaliy, real voqelikka asoslangan, foydali natijaga yo'naltirilgan",
    en: "Dealing with things sensibly and realistically based on practical considerations",
    example: "The committee adopted a pragmatic approach to resolve the municipal budget deficit.",
    exampleUz: "Qo'mita shahar byudjeti taqchilligini hal qilish uchun amaliy yondashuvni qabul qildi.",
    synonyms: ["practical", "realistic", "utilitarian", "sensible"],
    antonyms: ["idealistic", "impractical", "unrealistic"],
    examTip: "IELTS Writing Task 2 va SAT Reading ijtimoiy muammolar yechimida 'practical' o'rniga eng yuqori baholanadigan so'z."
  },
  "ephemeral": {
    ipa: "/ɪˈfem.ər.əl/",
    pos: "Sifat (Adjective)",
    uz: "O'tkinchi, qisqa muddatli, bir zumda yo'qolib ketadigan",
    en: "Lasting for a very short time; transitory",
    example: "Fame in the digital era is often ephemeral, fading as quickly as it emerges.",
    exampleUz: "Raqamli asrda mashhurlik ko'pincha o'tkinchi bo'lib, paydo bo'lgani kabi tez so'nadi.",
    synonyms: ["transitory", "fleeting", "short-lived", "evanescent"],
    antonyms: ["permanent", "eternal", "enduring", "perpetual"],
    examTip: "SAT adabiy va tarixiy passage'larida vaqtinchalik hissiyotlarni yoki modani tasvirlashda ko'p uchraydi."
  },
  "scrutinize": {
    ipa: "/ˈskruː.tɪ.naɪz/",
    pos: "Fe'l (Verb)",
    uz: "Sinchkovlik bilan tekshirmoq, sinchiklab ko'zdan kechirmoq",
    en: "Examine or inspect closely and thoroughly",
    example: "Scientists closely scrutinize empirical evidence before verifying any new scientific hypothesis.",
    exampleUz: "Olimlar yangi gipotezani tasdiqlashdan oldin empirik dalillarni sinchkovlik bilan tekshiradilar.",
    synonyms: ["examine", "inspect", "investigate", "probe"],
    antonyms: ["glance at", "ignore", "neglect"],
    examTip: "SAT Reading da 'analyze' yoki 'check' o'rniga akademik kontekstda faol ishlatiladi."
  },
  "ambiguous": {
    ipa: "/æmˈbɪɡ.ju.əs/",
    pos: "Sifat (Adjective)",
    uz: "Noaniq, ikki xil ma'noli, mavhum",
    en: "Open to more than one interpretation; not having one obvious meaning",
    example: "The legal contract contained ambiguous phrasing that led to prolonged disputes.",
    exampleUz: "Yuridik shartnoma uzoq davom etgan nizolarga sabab bo'lgan noaniq iboralarni o'z ichiga olgan edi.",
    synonyms: ["equivocal", "vague", "obscure", "uncertain"],
    antonyms: ["clear", "explicit", "lucid", "unambiguous"],
    examTip: "SAT Reading va IELTS Reading da muallif fikri yoki dalillarining noaniqligini tahlil qilishda kalit so'z."
  },
  "inevitable": {
    ipa: "/ɪnˈev.ɪ.tə.bəl/",
    pos: "Sifat (Adjective)",
    uz: "Muqarrar, qochib qutulib bo'lmaydigan",
    en: "Certain to happen; unavoidable",
    example: "With increasing globalization, technological transformation has become inevitable.",
    exampleUz: "Globallashuv kuchayishi bilan texnologik transformatsiya muqarrar bo'lib qoldi.",
    synonyms: ["unavoidable", "inescapable", "certain", "fated"],
    antonyms: ["avoidable", "uncertain", "preventable"],
    examTip: "IELTS Writing insholarida kelajak tendensiyalarini ifodalash uchun juda foydali."
  },
  "comprehensive": {
    ipa: "/ˌkɒm.prɪˈhen.sɪv/",
    pos: "Sifat (Adjective)",
    uz: "Keng qamrovli, har tomonlama to'liq, chuqur",
    en: "Including or dealing with all or nearly all elements or aspects of something",
    example: "The academy provides a comprehensive curriculum covering the 2026 Digital SAT and IELTS exams.",
    exampleUz: "Akademiya 2026-yilgi Digital SAT va IELTS imtihonlarini qamrab oluvchi to'liq o'quv dasturini taqdim etadi.",
    synonyms: ["exhaustive", "all-inclusive", "thorough", "extensive"],
    antonyms: ["limited", "partial", "narrow", "incomplete"],
    examTip: "IELTS Task 1 va Task 2 da ma'lumotlar to'liqligini ifodalashda standart so'z."
  },
  "plausible": {
    ipa: "/ˈplɔː.zə.bəl/",
    pos: "Sifat (Adjective)",
    uz: "Ishonarli, aqlga to'g'ri keladigan, ehtimoliy",
    en: "Seeming reasonable or probable",
    example: "The researcher presented a plausible explanation for the observed atmospheric anomalies.",
    exampleUz: "Tadqiqotchi kuzatilgan atmosfera anomaliyalari uchun ishonarli tushuntirish taqdim etdi.",
    synonyms: ["credible", "reasonable", "believable", "feasible"],
    antonyms: ["implausible", "unlikely", "unbelievable"],
    examTip: "SAT Reading da farazlarning asoslanganligini baholashda juda ko'p uchraydi."
  },
  "substantial": {
    ipa: "/səbˈstæn.ʃəl/",
    pos: "Sifat (Adjective)",
    uz: "Salmoqli, sezilarli darajada katta, muhim",
    en: "Of considerable importance, size, or worth",
    example: "There was a substantial increase in renewable energy investments last year.",
    exampleUz: "O'tgan yili qayta tiklanadigan energiya investitsiyalarida sezilarli o'sish kuzatildi.",
    synonyms: ["significant", "considerable", "sizeable", "meaningful"],
    antonyms: ["negligible", "minor", "insignificant"],
    examTip: "IELTS Academic Task 1 grafiklarni tasvirlashda 'big' yoki 'large' o'rniga eng zo'r akademik sinonim."
  },
  "resilient": {
    ipa: "/rɪˈzɪl.jənt/",
    pos: "Sifat (Adjective)",
    uz: "Bardoshli, qiyinchiliklardan tez tiklanadigan, egiluvchan",
    en: "Able to withstand or recover quickly from difficult conditions",
    example: "Local ecosystems proved remarkably resilient in the aftermath of the wildfire.",
    exampleUz: "Mahalliy ekotizimlar o'rmon yong'inidan so'ng ajoyib darajada bardoshlilik ko'rsatdi.",
    synonyms: ["tenacious", "adaptable", "hardy", "buoyant"],
    antonyms: ["fragile", "vulnerable", "weak"],
    examTip: "IELTS Speaking Part 2 shaxsiyat sifatlarini tasvirlashda Band 9.0 lug'at boyligi beradi."
  },
  "lucid": {
    ipa: "/ˈluː.sɪd/",
    pos: "Sifat (Adjective)",
    uz: "Ravshan, tushunarli, aniq ifodalangan",
    en: "Expressed clearly; easy to understand",
    example: "The professor delivered a lucid lecture on quantum mechanics and wave theory.",
    exampleUz: "Professor kvant mexanikasi va to'lqinlar nazariyasi bo'yicha juda ravshan ma'ruza qildi.",
    synonyms: ["clear", "transparent", "coherent", "articulate"],
    antonyms: ["confusing", "ambiguous", "obscure"],
    examTip: "Nutq va matn sifatini tasvirlashda 'understandable' o'rniga qo'llaniladi."
  },
  "pivotal": {
    ipa: "/ˈpɪv.ə.təl/",
    pos: "Sifat (Adjective)",
    uz: "Hal qiluvchi, o'ta muhim, burilish nuqtasi bo'lgan",
    en: "Of crucial importance in relation to the development or success of something else",
    example: "The invention of the transistor played a pivotal role in computing history.",
    exampleUz: "Tranzistorning ixtiro qilinishi kompyuter tarixida hal qiluvchi rol o'ynadi.",
    synonyms: ["crucial", "vital", "critical", "decisive"],
    antonyms: ["minor", "unimportant", "secondary"],
    examTip: "IELTS Writing Task 2 va SAT Reading tarixiy burilishlarni tasvirlash uchun ajoyib so'z."
  },
  "alleviate": {
    ipa: "/əˈliː.vi.eɪt/",
    pos: "Fe'l (Verb)",
    uz: "Yengillashtirmoq, azob yoki qiyinchilikni kamaytirmoq",
    en: "Make suffering, deficiency, or a problem less severe",
    example: "Targeted educational grants help alleviate financial barriers for gifted students.",
    exampleUz: "Maxsus ta'lim grantlari iqtidorli talabalar uchun moliyaviy to'siqlarni yengillashtirishga yordam beradi.",
    synonyms: ["mitigate", "ease", "relieve", "lessen"],
    antonyms: ["aggravate", "exacerbate", "worsen"],
    examTip: "IELTS Writing Task 2 muammo-yechim insholarida 'reduce' o'rniga Band 8.5+ so'z."
  },
  "facilitate": {
    ipa: "/fəˈsɪl.ɪ.teɪt/",
    pos: "Fe'l (Verb)",
    uz: "Osonlashtirmoq, imkoniyat yaratmoq, ko'maklashmoq",
    en: "Make an action or process easy or easier",
    example: "Integrated Desmos tools facilitate instant graphing during the SAT Math module.",
    exampleUz: "O'rnatilgan Desmos vositalari SAT Math moduli davomida tezkor grafik chizishni osonlashtiradi.",
    synonyms: ["assist", "expedite", "promote", "enable"],
    antonyms: ["hinder", "impede", "obstruct"],
    examTip: "SAT & IELTS da 'help' o'rniga akademik insholarda keng qo'llaniladi."
  },
  "substantiate": {
    ipa: "/səbˈstæn.ʃi.eɪt/",
    pos: "Fe'l (Verb)",
    uz: "Isbotlamoq, dalillar bilan tasdiqlamoq, asoslamoq",
    en: "Provide evidence to support or prove the truth of something",
    example: "The researchers gathered substantial empirical data to substantiate their primary thesis.",
    exampleUz: "Tadqiqotchilar o'zlarining asosiy tezisini isbotlash uchun salmoqli empirik ma'lumotlar to'pladilar.",
    synonyms: ["validate", "corroborate", "verify", "authenticate"],
    antonyms: ["disprove", "refute", "undermine"],
    examTip: "Digital SAT Reading savollarida 'Which finding would substantiate the claim?' shaklida juda ko'p keladi."
  },
  "profound": {
    ipa: "/prəˈfaʊnd/",
    pos: "Sifat (Adjective)",
    uz: "Chuqur, teran, juda kuchli ta'sirga ega",
    en: "Very great or intense; having or showing great insight",
    example: "Technological innovation has exerted a profound influence on modern pedagogical methods.",
    exampleUz: "Texnologik innovatsiya zamonaviy pedagogik usullarga chuqur ta'sir ko'rsatdi.",
    synonyms: ["deep", "intense", "far-reaching", "insightful"],
    antonyms: ["shallow", "superficial", "mild"],
    examTip: "IELTS insholarida ta'sirni ifodalashda 'profound effect / profound impact' kollokatsiyasi juda mashhur."
  },
  "diligent": {
    ipa: "/ˈdɪl.ɪ.dʒənt/",
    pos: "Sifat (Adjective)",
    uz: "Tirishqoq, quntli, mehnatsevar",
    "en": "Having or showing care and conscientiousness in one's work or duties",
    example: "Diligent practice with real Bluebook exams enables students to score 1550+ on the Digital SAT.",
    exampleUz: "Haqiqiy Bluebook imtihonlari bilan qunt bilan mashq qilish o'quvchilarga Digital SAT'dan 1550+ ball olish imkonini beradi.",
    synonyms: ["assiduous", "industrious", "hardworking", "scrupulous"],
    antonyms: ["lazy", "idle", "negligent"],
    examTip: "IELTS Speaking va insholarda muvaffaqiyatga erishish omillarini tasvirlash uchun juda mos."
  },
  "foster": {
    ipa: "/ˈfɒs.tər/",
    pos: "Fe'l (Verb)",
    uz: "Rivojlantirmoq, qo'llab-quvvatlamoq, o'sishiga yordam bermoq",
    en: "Encourage or promote the development of something desirable",
    example: "Mentorship programs foster confidence and academic excellence among secondary students.",
    exampleUz: "Murabbiylik dasturlari yuqori sinf o'quvchilarida ishonch va akademik yuksaklikni rivojlantiradi.",
    synonyms: ["nurture", "encourage", "cultivate", "stimulate"],
    antonyms: ["discourage", "suppress", "inhibit"],
    examTip: "IELTS Writing Task 2 ta'lim va jamiyat mavzularida 'develop' so'zining eng yaxshi akademik muqobili."
  },
  "mitigate": {
    ipa: "/ˈmɪt.ɪ.ɡeɪt/",
    pos: "Fe'l (Verb)",
    uz: "Yumshatmoq, salbiy oqibat yoki xavfni kamaytirmoq",
    en: "Make less severe, serious, or painful",
    example: "Proper test strategies help mitigate exam day stress and prevent careless calculation mistakes.",
    exampleUz: "To'g'ri test strategiyalari imtihon kunidagi stressni kamaytiradi va e'tiborsizlikdan qilinadigan hisob xatolarining oldini oladi.",
    synonyms: ["alleviate", "diminish", "moderate", "palliate"],
    antonyms: ["worsen", "intensify", "aggravate"],
    examTip: "SAT ekologiya va IELTS Writing atrof-muhit insholarida doimiy talab qilinadigan so'z."
  },
  "paradox": {
    ipa: "/ˈpær.ə.dɒks/",
    pos: "Ot (Noun)",
    uz: "Paradoks, ziddiyatli lekin haqiqatga ega hodisa",
    en: "A seemingly absurd or self-contradictory statement that when investigated proves true",
    example: "The paradox of modern hyper-connectivity is that individuals often experience greater loneliness.",
    exampleUz: "Zamonaviy o'ta bog'liqlikning paradoksi shundaki, insonlar ko'pincha ko'proq yolg'izlikni his qilishadi.",
    synonyms: ["contradiction", "anomaly", "enigma", "oxymoron"],
    antonyms: ["norm", "consistency"],
    examTip: "SAT Reading matnlarida kontrast va falsafiy g'oyalarni tahlil qilishda uchraydi."
  },
  "unprecedented": {
    ipa: "/ʌnˈpres.ɪ.den.tɪd/",
    pos: "Sifat (Adjective)",
    uz: "Misli ko'rilmagan, tarixda birinchi marta yuz bergan",
    en: "Never done or known before",
    example: "Artificial intelligence has experienced an unprecedented acceleration over the past three years.",
    exampleUz: "Sun'iy intellekt so'nggi uch yil ichida misli ko'rilmagan darajada tezlashuvni boshdan kechirdi.",
    synonyms: ["groundbreaking", "unmatched", "novel", "extraordinary"],
    antonyms: ["precedented", "common", "routine", "familiar"],
    examTip: "IELTS Academic va SAT da yangi yutuqlar yoki o'zgarishlarni tasvirlash uchun ajoyib sifat."
  },
  "vulnerable": {
    ipa: "/ˈvʌl.nər.ə.bəl/",
    pos: "Sifat (Adjective)",
    uz: "Zaif, nozik, himoyasiz, ta'sirchan",
    en: "Susceptible to physical or emotional harm or attack",
    example: "Endangered marine species are increasingly vulnerable to shifting ocean temperatures.",
    exampleUz: "Yo'qolib ketish xavfi ostidagi dengiz turlari okean haroratining o'zgarishiga tobora zaif bo'lib bormoqda.",
    synonyms: ["susceptible", "defenseless", "exposed", "frail"],
    antonyms: ["invulnerable", "protected", "resilient", "shielded"],
    examTip: "Ekologiya va tibbiyot mavzusidagi SAT & IELTS matnlarida doimiy qo'llaniladi."
  },
  "empirical": {
    ipa: "/ɪmˈpɪr.ɪ.kəl/",
    pos: "Sifat (Adjective)",
    uz: "Empirik, amaliy tajriba va kuzatishga asoslangan",
    en: "Based on verifiable observation or experience rather than pure logic",
    example: "The economic hypothesis was firmly corroborated by decades of empirical research.",
    exampleUz: "Iqtisodiy gipoteza o'n yillik empirik tadqiqotlar bilan mustahkam tasdiqlandi.",
    synonyms: ["observational", "experimental", "evidence-based", "factual"],
    antonyms: ["theoretical", "hypothetical", "conjectural"],
    examTip: "SAT Science passage'lari va IELTS Academic matnlarida ilmiy uslubning eng asosiy belgisi."
  },
  "coherent": {
    ipa: "/kəʊˈhɪə.rənt/",
    pos: "Sifat (Adjective)",
    uz: "Mantiqiy bog'langan, izchil, tushunarli",
    en: "Logical and consistent; forming a unified whole",
    example: "An effective essay must demonstrate a coherent structure with lucid transitions.",
    exampleUz: "Samarali insho ravshan bog'lovchilar bilan izchil tuzilmani namoyon etishi kerak.",
    synonyms: ["consistent", "logical", "lucid", "articulate"],
    antonyms: ["incoherent", "disjointed", "muddled"],
    examTip: "IELTS Writing baholash mezonlaridan biri aynan 'Coherence and Cohesion' hisoblanadi."
  },
  "eloquent": {
    ipa: "/ˈel.ə.kwənt/",
    pos: "Sifat (Adjective)",
    uz: "Notiq, ravon va ta'sirchan so'zlovchi",
    en: "Fluent or persuasive in speaking or writing",
    example: "The laureate delivered an eloquent speech highlighting human rights and educational equity.",
    exampleUz: "Laureat inson huquqlari va ta'lim tengligini ta'kidlovchi ta'sirchan notiqlik nutqi so'zladi.",
    synonyms: ["articulate", "persuasive", "expressive", "fluent"],
    antonyms: ["inarticulate", "tongue-tied", "hesitant"],
    examTip: "SAT History passajlarida notiqlik san'ati va nutqiy tahlilda ko'p qo'llaniladi."
  },
  "feasible": {
    ipa: "/ˈfiː.zə.bəl/",
    pos: "Sifat (Adjective)",
    uz: "Amalga oshirsa bo'ladigan, maqsadga muvofiq, imkonli",
    en: "Possible to do easily or conveniently",
    example: "Deploying solar microgrids is a feasible solution for electrifying isolated rural schools.",
    exampleUz: "Quyosh mikrotarmoqlarini o'rnatish chekka qishloq maktablarini elektrlashtirish uchun to'liq amalga oshirsa bo'ladigan yechimdir.",
    synonyms: ["viable", "achievable", "attainable", "practicable"],
    antonyms: ["unfeasible", "impossible", "impracticable"],
    examTip: "Taklif va yechimlarning realligini baholashda 'possible' o'rniga eng yaxshi akademik so'z."
  },
  "adversity": {
    ipa: "/ədˈvɜː.sə.ti/",
    pos: "Ot (Noun)",
    uz: "Qiyinchilik, kulfat, to'siq, og'ir vaziyat",
    en: "A difficult or unpleasant situation",
    example: "True resilience is cultivated when students learn to persevere through academic adversity.",
    exampleUz: "O'quvchilar akademik qiyinchiliklar oldida taslim bo'lmaslikni o'rganganlarida haqiqiy bardoshlilik shakllanadi.",
    synonyms: ["hardship", "misfortune", "tribulation", "dilemma"],
    antonyms: ["prosperity", "fortune", "ease"],
    examTip: "SAT adabiy asarlarida qahramonning qiyinchiliklarni yengishini ifodalash uchun ishlatiladi."
  },
  "exacerbate": {
    ipa: "/ɪɡˈzæs.ə.beɪt/",
    pos: "Fe'l (Verb)",
    uz: "Battar og'irlashtirmoq, vaziyatni yomonlashtirmoq",
    en: "Make a problem or negative feeling worse",
    example: "Inconsistent scheduling can exacerbate fatigue among competitive examination candidates.",
    exampleUz: "Tartibsiz dars jadvali imtihonga tayyorlanayotgan nomzodlar orasida charchoqni battar og'irlashtirishi mumkin.",
    synonyms: ["aggravate", "worsen", "inflame", "intensify"],
    antonyms: ["alleviate", "mitigate", "soothe"],
    examTip: "IELTS Writing Task 2 da 'make things worse' o'rniga eng professional akademik muqobil."
  },
  "stagnant": {
    ipa: "/ˈstæɡ.nənt/",
    pos: "Sifat (Adjective)",
    uz: "Harakatsiz, to'xtab qolgan, rivojlanmayotgan",
    en: "Showing no activity, progress, or movement",
    example: "Productivity remained stagnant until cutting-edge automation tools were implemented.",
    exampleUz: "Eng so'nggi avtomatlashtirish vositalari joriy etilgunga qadar unumdorlik to'xtab qoldi.",
    synonyms: ["static", "dormant", "motionless", "sluggish"],
    antonyms: ["active", "dynamic", "flourishing", "growing"],
    examTip: "IELTS Academic Task 1 grafiklarni tasvirlashda (o'zgarmagan ko'rsatkichlar uchun) juda qimmatli so'z."
  },
  "aesthetic": {
    ipa: "/esˈθet.ɪk/",
    pos: "Sifat (Adjective)",
    uz: "Estetik, go'zallik va nafosatga oid",
    en: "Concerned with beauty or the appreciation of beauty",
    example: "The architect combined functional efficiency with striking aesthetic appeal.",
    exampleUz: "Arxitektor funksional samaradorlikni ko'zga tashlanadigan estetik joziba bilan uyg'unlashtirdi.",
    synonyms: ["artistic", "tasteful", "visually pleasing"],
    antonyms: ["unattractive", "crude"],
    examTip: "San'at va arxitektura mavzusidagi SAT & IELTS passage'larida doimiy uchraydi."
  },
  "discrepancy": {
    ipa: "/dɪˈskrep.ən.si/",
    pos: "Ot (Noun)",
    uz: "Nomuvofiqlik, tafovut, farq",
    en: "A lack of compatibility or similarity between two or more facts",
    example: "Auditors uncovered a noticeable discrepancy between reported earnings and actual revenue.",
    exampleUz: "Auditorlar e'lon qilingan daromad va haqiqiy tushum o'rtasida sezilarli tafovutni aniqladilar.",
    synonyms: ["inconsistency", "divergence", "variance", "mismatch"],
    antonyms: ["consistency", "concordance", "similarity"],
    examTip: "SAT Reading ilmiy passage'larida kutilgan natija bilan real ma'lumotlar farqini tahlil qilishda ishlatiladi."
  },
  "exemplary": {
    ipa: "/ɪɡˈzem.plər.i/",
    pos: "Sifat (Adjective)",
    uz: "Namunali, ibratli, boshqalarga o'rnak bo'ladigan",
    en: "Serving as a desirable model; representing the best of its kind",
    example: "The scholar was commended for her exemplary commitment to open scientific research.",
    exampleUz: "Olim ochiq ilmiy tadqiqotlarga bo'lgan namunali sadoqati uchun e'tirof etildi.",
    synonyms: ["model", "ideal", "commendable", "flawless"],
    antonyms: ["unworthy", "subpar", "reprehensible"],
    examTip: "IELTS Speaking Part 2 da hurmatga loyiq insonni tasvirlashda Band 9.0 so'z."
  },
  "impartial": {
    ipa: "/ɪmˈpɑː.ʃəl/",
    pos: "Sifat (Adjective)",
    uz: "Xolis, adolatli, tarafkashlik qilmaydigan",
    en: "Treating all rivals or disputants equally; fair and just",
    example: "An effective adjudicator must remain entirely impartial throughout debate hearings.",
    exampleUz: "Samarali hakam bahs-munozara tinglovlari davomida butunlay xolis bo'lib qolishi lozim.",
    synonyms: ["unbiased", "objective", "neutral", "dispassionate"],
    antonyms: ["biased", "partial", "partisan"],
    examTip: "SAT History va IELTS Writing insholarida adolat va betaraflikni ifodalashda markaziy so'z."
  },
  "lucrative": {
    ipa: "/ˈluː.krə.tɪv/",
    pos: "Sifat (Adjective)",
    uz: "Serdaromad, katta foyda keltiradigan",
    en: "Producing a great deal of profit",
    example: "Specializing in machine learning engineering has become a highly lucrative career path.",
    exampleUz: "Mashinali o'rganish muhandisligiga ixtisoslashish yuqori daromadli martaba yo'liga aylandi.",
    synonyms: ["profitable", "rewarding", "gainful", "commercial"],
    antonyms: ["unprofitable", "loss-making"],
    examTip: "IELTS Task 2 kasb va iqtisodiyot mavzularida 'makes a lot of money' o'rniga qo'llanadi."
  },
  "obsolete": {
    ipa: "/ˈɒb.sə.liːt/",
    pos: "Sifat (Adjective)",
    uz: "Eskirgan, qo'llanishdan chiqqan, zamondan ortda qolgan",
    en: "No longer produced or used; out of date",
    example: "Manual filing systems have become completely obsolete in computerized academies.",
    exampleUz: "Qog'ozli yig'majild tizimlari kompyuterlashgan akademiyalarda butunlay qo'llanishdan chiqib qoldi.",
    synonyms: ["outdated", "archaic", "antiquated", "superseded"],
    antonyms: ["modern", "current", "contemporary", "novel"],
    examTip: "Texnologiya va jamiyat taraqqiyoti mavzusidagi testlarda juda faol."
  },
  "perceive": {
    ipa: "/pəˈsiːv/",
    pos: "Fe'l (Verb)",
    uz: "Idrok etmoq, his qilmoq, anglamoq",
    en: "Become aware or conscious of something; come to realize or understand",
    example: "Students often perceive mathematics as intimidating until interactive graphing is introduced.",
    exampleUz: "O'quvchilar interaktiv grafik vositalar kiritilgunga qadar ko'pincha matematikani qo'rqinchli deb qabul qiladilar.",
    synonyms: ["discern", "recognize", "comprehend", "regard"],
    antonyms: ["overlook", "misunderstand", "ignore"],
    examTip: "SAT Reading da shaxsiy qarash va nuqtai nazarni tasvirlashda kalit fe'l."
  },
  "pervasive": {
    ipa: "/pəˈveɪ.sɪv/",
    pos: "Sifat (Adjective)",
    uz: "Keng yoyilgan, hamma joyga chuqur singib borgan",
    en: "Spreading widely throughout an area or a group of people",
    example: "Digital media has established a pervasive presence in adolescent social interactions.",
    exampleUz: "Raqamli media o'smirlarning ijtimoiy munosabatlarida keng yoyilgan o'rin egalladi.",
    synonyms: ["prevalent", "permeating", "extensive", "ubiquitous"],
    antonyms: ["restricted", "localized", "rare"],
    examTip: "'Ubiquitous' so'zining eng yaqin va kuchli akademik sinonimi."
  },
  "rigorous": {
    ipa: "/ˈrɪɡ.ər.əs/",
    pos: "Sifat (Adjective)",
    uz: "Qat'iy, o'ta chuqur, sinchkov va talabchan",
    en: "Extremely thorough, exhaustive, or accurate",
    example: "Candidates undergo rigorous academic testing before receiving admission to Ivy League colleges.",
    exampleUz: "Nomzodlar Ayvi Ligasi kollejlariga qabul qilinishdan oldin qat'iy akademik sinovlardan o'tadilar.",
    synonyms: ["stringent", "meticulous", "exacting", "demanding"],
    antonyms: ["lenient", "sloppy", "flexible"],
    examTip: "Akademik tayyorgarlik va ilmiy metodologiyani ifodalash uchun 1-raqamli so'z."
  },
  "tangible": {
    ipa: "/ˈtæn.dʒə.bəl/",
    pos: "Sifat (Adjective)",
    uz: "Aniq, moddiy, qo'l bilan ushlab bo'ladigan, sezilarli",
    en: "Perceptible by touch; clear and definite; real",
    example: "The investment in student coaching yielded tangible improvements in standardized exam scores.",
    exampleUz: "O'quvchilarga murabbiylik qilishga kiritilgan sarmoya standartlashtirilgan imtihon ballarida aniq sezilarli yaxshilanishlarni berdi.",
    synonyms: ["concrete", "palpable", "discernible", "measurable"],
    antonyms: ["intangible", "abstract", "ethereal"],
    examTip: "Natijalar va o'zgarishlarning realligini ko'rsatishda juda qadrlanadi."
  },
  "transient": {
    ipa: "/ˈtræn.zi.ənt/",
    pos: "Sifat (Adjective)",
    uz: "Vaqtinchalik, tez o'tuvchi, qisqa muddatli",
    en: "Lasting only for a short time; impermanent",
    example: "Economic downturns are usually transient when supported by strong financial foundations.",
    exampleUz: "Iqtisodiy pasayishlar kuchli moliyaviy poydevor bilan qo'llab-quvvatlanganda odatda vaqtinchalik bo'ladi.",
    synonyms: ["temporary", "fleeting", "ephemeral", "brief"],
    antonyms: ["permanent", "perpetual", "enduring"],
    examTip: "'Temporary' so'zining akademik ekvivalenti."
  },
  "validate": {
    ipa: "/ˈvæl.ɪ.deɪt/",
    pos: "Fe'l (Verb)",
    uz: "Tasdiqlamoq, qonuniy kuchga ega ekanligini isbotlamoq",
    en: "Check or prove the validity or accuracy of something",
    example: "Subsequent laboratory experiments helped validate the groundbreaking physics discovery.",
    exampleUz: "Keyingi laboratoriya tajribalari inqilobiy fizika kashfiyotini tasdiqlashga yordam berdi.",
    synonyms: ["confirm", "verify", "authenticate", "substantiate"],
    antonyms: ["invalidate", "nullify", "disprove"],
    examTip: "SAT Science va Reading savollarida argumentlarning to'g'riligini tekshirishda ishlatiladi."
  },
  "yield": {
    ipa: "/jiːld/",
    pos: "Fe'l (Verb) / Ot (Noun)",
    uz: "Hosildorlik bermoq, natija keltirmoq; taslim bo'lmoq",
    en: "Produce or provide a natural, agricultural, or industrial product; give way to arguments",
    example: "Consistent vocabulary practice will yield exceptional reading comprehension speed.",
    exampleUz: "Muntazam so'z boyligi mashqlari o'qishni tushunishda ajoyib tezlik natijasini beradi.",
    synonyms: ["produce", "generate", "furnish", "surrender"],
    antonyms: ["withhold", "resist"],
    examTip: "SAT Math da hosil, Reading da esa natija berish yoki yon berish ma'nosida keladi."
  },

  // ===== 2026 ENG KO'P ISHLATILADIGAN HAR KUNGI VA IMTIHON SO'ZLARI (UNIVERSAL) =====
  "hello": {
    ipa: "/həˈloʊ/",
    pos: "Undov (Interjection / Greeting)",
    uz: "Salom, Assalomu alaykum",
    en: "Used as a greeting or to begin a conversation",
    example: "Hello! Welcome to YU Academy — your 2026 Digital SAT & IELTS portal.",
    exampleUz: "Salom! 2026-yilgi Digital SAT va IELTS portali — YU Academy'ga xush kelibsiz.",
    synonyms: ["hi", "greetings", "welcome"],
    antonyms: ["goodbye", "farewell"],
    examTip: "IELTS Speaking Part 1 da imtihon oluvchi bilan uchrashganda muloyim 'Hello' yoki rasmiy 'Good morning/afternoon' deb salomlashish tavsiya etiladi."
  },
  "hi": {
    ipa: "/haɪ/",
    pos: "Undov (Interjection)",
    uz: "Salom (norasmiy, do'stona)",
    en: "An informal greeting equivalent to hello",
    example: "Hi! How can I help you with your exam preparation today?",
    exampleUz: "Salom! Bugun imtihon tayyorgarligingizda sizga qanday yordam bera olaman?",
    synonyms: ["hello", "hey"]
  },
  "goodbye": {
    ipa: "/ˌɡʊdˈbaɪ/",
    pos: "Undov (Interjection)",
    uz: "Xayr, salomat bo'ling, ko'rishguncha",
    en: "Used to express good wishes on parting",
    example: "Goodbye, keep practicing daily to achieve a 1500+ score!",
    exampleUz: "Xayr, 1500+ ballga erishish uchun har kuni mashq qilishda davom eting!",
    synonyms: ["farewell", "bye", "see you"]
  },
  "bye": {
    ipa: "/baɪ/",
    pos: "Undov (Interjection)",
    uz: "Xayr, ko'rishguncha",
    en: "Short form of goodbye",
    example: "Bye! See you tomorrow.",
    exampleUz: "Xayr! Ertagacha ko'rishguncha."
  },
  "welcome": {
    ipa: "/ˈwel.kəm/",
    pos: "Undov / Sifat (Greeting / Adjective)",
    uz: "Xush kelibsiz; mamnuniyat bilan qabul qilingan",
    en: "Used as a greeting to a newly arrived person",
    example: "You are always welcome at YU Academy.",
    exampleUz: "YU Academy platformasida sizni doimo xush ko'ramiz.",
    synonyms: ["greeted", "accepted"]
  },
  "thanks": {
    ipa: "/θæŋks/",
    pos: "Undov (Interjection)",
    uz: "Rahmat, tashakkur",
    en: "An expression of gratitude",
    example: "Thanks for your thoughtful question!",
    exampleUz: "Mazmunli savolingiz uchun rahmat!",
    synonyms: ["thank you", "gratitude"]
  },
  "thank": {
    ipa: "/θæŋk/",
    pos: "Fe'l (Verb)",
    uz: "Rahmat aytmoq, minnatdorchilik bildirmoq",
    en: "Express gratitude to someone",
    example: "I want to thank my teacher for explaining Desmos shortcuts.",
    exampleUz: "Desmos sirlarini tushuntirib bergani uchun ustozimga minnatdorchilik bildirmoqchiman."
  },
  "please": {
    ipa: "/pliːz/",
    pos: "Undov / Ravish",
    uz: "Iltimos, marhamat",
    en: "Used to ask for something politely",
    example: "Please explain this quadratic equation step-by-step.",
    exampleUz: "Iltimos, ushbu kvadrat tenglamani qadamma-qadam tushuntirib bering."
  },
  "sorry": {
    ipa: "/ˈsɒr.i/",
    pos: "Sifat / Undov",
    uz: "Kechirasiz, uzr, afsusdaman",
    en: "Feeling or expressing sorrow or regret",
    example: "Sorry, could you please repeat the last sentence?",
    exampleUz: "Kechirasiz, oxirgi gapni yana bir bor takrorlay olasizmi?"
  },
  "yes": {
    ipa: "/jes/",
    pos: "Undov (Affirmation)",
    uz: "Ha, albatta, to'g'ri",
    en: "Used to give an affirmative response",
    example: "Yes, consistent practice guarantees a high score.",
    exampleUz: "Ha, muntazam mashg'ulot yuqori ballni kafolatlaydi."
  },
  "no": {
    ipa: "/nəʊ/",
    pos: "Undov (Negation)",
    uz: "Yo'q, aslo",
    en: "Used to give a negative response",
    example: "No formula is difficult once you visualize it on Desmos.",
    exampleUz: "Desmos'da ko'rgazmali qilingach, hech qaysi formula qiyin emas."
  },
  "student": {
    ipa: "/ˈstjuː.dənt/",
    pos: "Ot (Noun)",
    uz: "O'quvchi, talaba, abituriyent",
    en: "A person who is studying at a school or university",
    example: "Every student can achieve a 1500+ score with proper guidance.",
    exampleUz: "To'g'ri yo'l-yo'riq bilan har bir o'quvchi 1500+ ballga erisha oladi.",
    synonyms: ["scholar", "learner", "pupil"]
  },
  "teacher": {
    ipa: "/ˈtiː.tʃər/",
    pos: "Ot (Noun)",
    uz: "O'qituvchi, ustoz, murabbiy",
    en: "A person who teaches, especially in a school",
    example: "An inspiring teacher simplifies complex mathematical concepts.",
    exampleUz: "Ilhomlantiruvchi ustoz murakkab matematik tushunchalarni soddalashtiradi.",
    synonyms: ["instructor", "mentor", "tutor"]
  },
  "school": {
    ipa: "/skuːl/",
    pos: "Ot (Noun)",
    uz: "Maktab, ta'lim dargohi",
    en: "An institution for educating children or students",
    example: "Modern schools integrate digital tools and AI into their curriculum.",
    exampleUz: "Zamonaviy maktablar o'quv dasturlariga raqamli vositalar va AI'ni joriy etmoqda."
  },
  "university": {
    ipa: "/ˌjuː.nɪˈvɜː.sə.ti/",
    pos: "Ot (Noun)",
    uz: "Universitet, oliygoh",
    en: "A high-level educational institution offering degrees",
    example: "Top American universities value high critical thinking abilities.",
    exampleUz: "AQSHning nufuzli universitetlari yuqori tanqidiy fikrlash qobiliyatlarini qadrlaydi."
  },
  "book": {
    ipa: "/bʊk/",
    pos: "Ot (Noun)",
    uz: "Kitob; band qilmoq",
    en: "A written or printed work consisting of pages",
    example: "Reading non-fiction books broadens academic vocabulary.",
    exampleUz: "Ilmiy-ommabop kitoblarni mutolaa qilish so'z boyligini kengaytiradi."
  },
  "exam": {
    ipa: "/ɪɡˈzæm/",
    pos: "Ot (Noun)",
    uz: "Imtihon, rasmiy sinov",
    en: "A formal test of knowledge or ability in a subject",
    example: "The 2026 Digital SAT exam evaluates quantitative reasoning and text analysis.",
    exampleUz: "2026-yilgi Digital SAT imtihoni miqdoriy mantiq va matn tahlilini baholaydi.",
    synonyms: ["test", "examination", "assessment"]
  },
  "test": {
    ipa: "/test/",
    pos: "Ot / Fe'l",
    uz: "Test, sinov; sinab ko'rmoq",
    en: "A procedure intended to establish quality, performance, or knowledge",
    example: "Take this 44-question math test to benchmark your speed.",
    exampleUz: "Tezligingizni aniqlash uchun ushbu 44 savolli matematika testini topshiring."
  },
  "score": {
    ipa: "/skɔːr/",
    pos: "Ot / Fe'l",
    uz: "Ball, natija; ball to'plamoq",
    en: "The number of points achieved in an examination",
    example: "A 1550+ score puts you in the top 1% percentile globally.",
    exampleUz: "1550+ ball sizni dunyo bo'yicha eng kuchli 1% o'quvchilar safiga olib chiqadi.",
    synonyms: ["mark", "result", "grade"]
  },
  "learn": {
    ipa: "/lɜːn/",
    pos: "Fe'l (Verb)",
    uz: "O'rganmoq, tahsil olmoq, bilim olmoq",
    en: "Gain knowledge or skill through study or experience",
    example: "Students learn faster when they analyze their own mistakes.",
    exampleUz: "O'quvchilar o'z xatolarini tahlil qilganda ancha tezroq o'rganadilar."
  },
  "study": {
    ipa: "/ˈstʌd.i/",
    pos: "Fe'l / Ot",
    uz: "O'qimoq, tadqiq qilmoq; tadqiqot, dars",
    en: "Apply the mind to acquire knowledge",
    example: "Study consistently for 45 minutes every day.",
    exampleUz: "Har kuni 45 daqiqa muntazam dars qiling."
  },
  "understand": {
    ipa: "/ˌʌn.dəˈstænd/",
    pos: "Fe'l (Verb)",
    uz: "Tushunmoq, anglamoq, mohiyatiga yetmoq",
    en: "Perceive the intended meaning of words or concepts",
    example: "Once you understand circle equations, solving them takes seconds.",
    exampleUz: "Doira tenglamalarini bir marta tushunib olsangiz, ularni yechish bir necha soniya oladi.",
    synonyms: ["comprehend", "grasp", "perceive"]
  },
  "explain": {
    ipa: "/ɪkˈspleɪn/",
    pos: "Fe'l (Verb)",
    uz: "Tushuntirmoq, izohlamoq, sharhlamoq",
    en: "Make something clear to someone by describing it in more detail",
    example: "YU AI can explain any question you do not understand.",
    exampleUz: "YU AI siz tushunmagan istalgan savolni tushuntirib berishi mumkin.",
    synonyms: ["clarify", "elucidate"]
  },
  "question": {
    ipa: "/ˈkwes.tʃən/",
    pos: "Ot (Noun)",
    uz: "Savol; shubha ostiga olmoq",
    en: "A sentence worded so as to elicit information",
    example: "Ask any question if something is unclear.",
    exampleUz: "Agar biror narsa tushunarsiz bo'lsa, istalgan savolingizni bering."
  },
  "answer": {
    ipa: "/ˈɑːn.sər/",
    pos: "Ot / Fe'l",
    uz: "Javob; javob bermoq",
    en: "A thing said or written in reaction to a question",
    example: "Choice B is the correct answer to this equation.",
    exampleUz: "B varianti ushbu tenglamaning to'g'ri javobidir."
  },
  "help": {
    ipa: "/help/",
    pos: "Ot / Fe'l",
    uz: "Yordam, ko'mak; yordam bermoq",
    en: "Make it easier for someone to do something",
    example: "YU AI is always ready to help you solve difficult problems.",
    exampleUz: "YU AI qiyin masalalarni yechishda sizga yordam berishga doimo tayyor.",
    synonyms: ["assist", "support", "aid"]
  },
  "world": {
    ipa: "/wɜːld/",
    pos: "Ot (Noun)",
    uz: "Dunyo, olam, jahon",
    en: "The earth, together with all of its countries and peoples",
    example: "Top universities welcome ambitious students from all over the world.",
    exampleUz: "Nufuzli oliygohlar butun dunyodan intiluvchan talabalarni kutib oladi."
  },
  "friend": {
    ipa: "/frend/",
    pos: "Ot (Noun)",
    uz: "Do'st, o'rtoq, birodar",
    en: "A person with whom one has a bond of mutual affection",
    example: "A supportive study friend helps you maintain exam discipline.",
    exampleUz: "Qo'llab-quvvatlovchi do'st imtihon intizomini saqlashda yordam beradi."
  },
  "people": {
    ipa: "/ˈpiː.pəl/",
    pos: "Ot (Noun)",
    uz: "Odamlar, insonlar, xalq",
    en: "Human beings in general or considered collectively",
    example: "Hardworking people turn their dreams into reality.",
    exampleUz: "Mehnatkash odamlar o'z orzularini haqiqatga aylantiradilar."
  },
  "time": {
    ipa: "/taɪm/",
    pos: "Ot (Noun)",
    uz: "Vaqt, fursat, muddat",
    en: "The indefinite continued progress of existence",
    example: "Time management is crucial during the 70-minute SAT Math section.",
    exampleUz: "70 daqiqalik SAT Math bo'limida vaqtni boshqarish hal qiluvchi ahamiyatga ega."
  },
  "day": {
    ipa: "/deɪ/",
    pos: "Ot (Noun)",
    uz: "Kun, sutka",
    en: "A period of twenty-four hours",
    example: "20 minutes of practice each day yields massive results.",
    exampleUz: "Har kuni 20 daqiqa mashq qilish ulkan natijalar keltiradi."
  },
  "night": {
    ipa: "/naɪt/",
    pos: "Ot (Noun)",
    uz: "Tun, kecha",
    en: "The period from sunset to sunrise",
    example: "A good night's rest boosts your memory retention.",
    exampleUz: "Tundagi yaxshi dam xotirangizni mustahkamlaydi."
  },
  "today": {
    ipa: "/təˈdeɪ/",
    pos: "Ravish / Ot",
    uz: "Bugun, hozirgi kunda",
    en: "On or in the course of this present day",
    example: "Start your test preparation today.",
    exampleUz: "Imtihon tayyorgarligingizni bugun boshlang."
  },
  "tomorrow": {
    ipa: "/təˈmɒr.əʊ/",
    pos: "Ravish / Ot",
    uz: "Ertaga, kelajakda",
    en: "On the day after today",
    example: "What you learn today prepares you for university tomorrow.",
    exampleUz: "Bugun o'rganganlaringiz sizni ertaga universitetga tayyorlaydi."
  },
  "yesterday": {
    ipa: "/ˈjes.tə.deɪ/",
    pos: "Ravish / Ot",
    uz: "Kecha, o'tgan kunda",
    en: "On the day before today",
    example: "Review your mistakes from yesterday.",
    exampleUz: "Kechagi xatolaringizni tahlil qiling."
  },
  "good": {
    ipa: "/ɡʊd/",
    pos: "Sifat (Adjective)",
    uz: "Yaxshi, ma'qul, yoqimli, sifatli",
    en: "To be desired or approved of; high quality",
    example: "Consistent practice is a good habit.",
    exampleUz: "Muntazam mashg'ulot — yaxshi odatdir.",
    antonyms: ["bad", "poor"]
  },
  "great": {
    ipa: "/ɡreɪt/",
    pos: "Sifat (Adjective)",
    uz: "Ajoyib, ulkan, buyuk, a'lo",
    en: "Of an extent or intensity considerably above normal",
    example: "Great effort consistently brings scholarships.",
    exampleUz: "Ajoyib mehnat doimo grantlarni olib keladi."
  },
  "bad": {
    ipa: "/bæd/",
    pos: "Sifat (Adjective)",
    uz: "Yomon, nosoz, qoniqarsiz",
    en: "Of poor quality or a low standard",
    example: "A bad test session is merely an opportunity to learn.",
    exampleUz: "Yomon o'tgan test — bu shunchaki o'rganish uchun imkoniyatdir.",
    antonyms: ["good", "great"]
  },
  "easy": {
    ipa: "/ˈiː.zi/",
    pos: "Sifat (Adjective)",
    uz: "Oson, yengil, sodda",
    en: "Achieved without great effort; simple",
    example: "With right shortcuts, circle equations become easy.",
    exampleUz: "To'g'ri usullar bilan doira tenglamalari oson bo'lib qoladi.",
    antonyms: ["difficult", "hard"]
  },
  "difficult": {
    ipa: "/ˈdɪf.ɪ.kəlt/",
    pos: "Sifat (Adjective)",
    uz: "Qiyin, murakkab, og'ir, mushkul",
    en: "Needing much effort or skill to accomplish",
    example: "Module 2 contains more difficult adaptive questions.",
    exampleUz: "2-modul qiyinroq adaptiv savollarni o'z ichiga oladi.",
    antonyms: ["easy", "simple"]
  },
  "hard": {
    ipa: "/hɑːd/",
    pos: "Sifat / Ravish",
    uz: "Qiyin, og'ir; qattiq, astoydil",
    en: "Requiring endurance or effort; solid",
    example: "Work hard today to earn your dream score.",
    exampleUz: "Orzuingizdagi ballni qo'lga kiritish uchun bugun qattiq mehnat qiling."
  },
  "fast": {
    ipa: "/fɑːst/",
    pos: "Sifat / Ravish",
    uz: "Tez, chaqqon, ildam",
    en: "Moving or capable of moving at high speed",
    example: "Desmos offers fast methods to solve linear systems.",
    exampleUz: "Desmos chiziqli sistemalarni yechish uchun tezkor usullarni taqdim etadi.",
    antonyms: ["slow"]
  },
  "slow": {
    ipa: "/sləʊ/",
    pos: "Sifat / Ravish",
    uz: "Sekin, sust",
    en: "Operating at a low speed",
    example: "Gradual improvement is better than rushed study.",
    exampleUz: "Sekin va puxta o'sish shoshma-shosharlikdan ko'ra yaxshiroqdir.",
    antonyms: ["fast", "quick"]
  },
  "big": {
    ipa: "/bɪɡ/",
    pos: "Sifat (Adjective)",
    uz: "Katta, yirik, ulkan",
    en: "Of considerable size or extent",
    example: "A 1500+ score is a big achievement.",
    exampleUz: "1500+ ball — bu katta yutuqdir.",
    antonyms: ["small", "little"]
  },
  "small": {
    ipa: "/smɔːl/",
    pos: "Sifat (Adjective)",
    uz: "Kichik, mayda, oz",
    en: "Of a size that is less than normal",
    example: "Small daily steps lead to massive success.",
    exampleUz: "Kichik kunlik qadamlar ulkan muvaffaqiyatga olib keladi.",
    antonyms: ["big", "large"]
  },
  "important": {
    ipa: "/ɪmˈpɔː.tənt/",
    pos: "Sifat (Adjective)",
    uz: "Muhim, ahamiyatli, zarur, asosiy",
    en: "Of great significance or value",
    example: "Consistent vocabulary review is an important part of preparation.",
    exampleUz: "Lug'atni muntazam takrorlash tayyorgarlikning muhim qismidir.",
    synonyms: ["crucial", "pivotal", "vital"]
  },
  "beautiful": {
    ipa: "/ˈbjuː.tɪ.fəl/",
    pos: "Sifat (Adjective)",
    uz: "Chiroyli, go'zal, jozibali",
    en: "Pleasing the senses or mind aesthetically",
    example: "Her essay presented a beautiful and coherent argument.",
    exampleUz: "Uning inshosi go'zal va mantiqiy fikrlar zanjirini namoyon etdi."
  },
  "kill": {
    ipa: "/kɪl/",
    pos: "Fe'l (Verb)",
    uz: "O'ldirmoq, barham bermoq, yo'q qilmoq",
    en: "Cause the death of; put an end to or eliminate",
    example: "Anxiety can kill exam performance if not managed properly.",
    exampleUz: "Agar to'g'ri boshqarilmasa, xavotir imtihon natijangizga putur yetkazishi mumkin."
  },
  "true": {
    ipa: "/truː/",
    pos: "Sifat (Adjective)",
    uz: "Haqiqiy, to'g'ri, chin",
    en: "In accordance with fact or reality",
    example: "Select True if the passage directly confirms the statement.",
    exampleUz: "Agar matn bayonotni to'g'ridan-to'g'ri tasdiqlasa, True tanlang."
  },
  "false": {
    ipa: "/fɔːls/",
    pos: "Sifat (Adjective)",
    uz: "Yolg'on, xato, noto'g'ri",
    en: "Not in accordance with fact or reality",
    example: "False means the statement directly contradicts the passage.",
    exampleUz: "False — bayonot matndagi ma'lumotga bevosita zid ekanligini bildiradi."
  },
  "right": {
    ipa: "/raɪt/",
    pos: "Sifat / Ot",
    uz: "To'g'ri; o'ng; huquq",
    en: "Morally good, justified, or correct",
    example: "Select the right option by analyzing textual evidence.",
    exampleUz: "Matn dalillarini tahlil qilish orqali to'g'ri variantni tanlang."
  },
  "wrong": {
    ipa: "/rɒŋ/",
    pos: "Sifat (Adjective)",
    uz: "Noto'g'ri, xato, yanglish",
    en: "Not correct or true; mistaken",
    example: "Our 'Xatolar ustida ishlash' tool lets you retake every wrong question.",
    exampleUz: "'Xatolar ustida ishlash' trenajyori har bir xato savolni qayta ishlash imkonini beradi."
  },
  "solve": {
    ipa: "/sɒlv/",
    pos: "Fe'l (Verb)",
    uz: "Yechmoq, hal qilmoq, yechim topmoq",
    en: "Find an answer to or explanation for a problem",
    example: "You can solve this equation in 10 seconds using Desmos.",
    exampleUz: "Ushbu tenglamani Desmos yordamida 10 soniyada yechishingiz mumkin."
  },
  "problem": {
    ipa: "/ˈprɒb.ləm/",
    pos: "Ot (Noun)",
    uz: "Muammo, masala, savol",
    en: "A matter or situation needing to be solved",
    example: "Break down each problem into smaller algebraic steps.",
    exampleUz: "Har bir masalani kichik algebraik bosqichlarga ajrating."
  },
  "math": {
    ipa: "/mæθ/",
    pos: "Ot (Noun)",
    uz: "Matematika",
    en: "Mathematics",
    example: "SAT Math has 44 questions in modules 1 and 2.",
    exampleUz: "SAT Matematikasi 1 va 2-modullarda 44 ta savolga ega."
  },
  "reading": {
    ipa: "/ˈriː.dɪŋ/",
    pos: "Ot (Noun)",
    uz: "O'qish, mutolaa, matn tahlili",
    en: "The skill of comprehending written text",
    example: "Reading skills are tested in both SAT and IELTS.",
    exampleUz: "O'qish ko'nikmalari SAT'da ham, IELTS'da ham tekshiriladi."
  },
  "writing": {
    ipa: "/ˈraɪ.tɪŋ/",
    pos: "Ot (Noun)",
    uz: "Yozish, insho tuzish san'ati",
    en: "The skill of expressing ideas in text",
    example: "Structure your essay with clear topic sentences.",
    exampleUz: "Inshongizni aniq asosiy jumlalar bilan tuzing."
  },
  "speaking": {
    ipa: "/ˈspiː.kɪŋ/",
    pos: "Ot (Noun)",
    uz: "So'zlashuv, nutq so'zlash, og'zaki nutq",
    en: "The skill of expressing thoughts through speech",
    example: "Shadowing practice drastically improves speaking confidence.",
    exampleUz: "Shadowing mashqlari og'zaki nutqdagi ishonchni keskin oshiradi."
  },
  "listening": {
    ipa: "/ˈlɪs.ən.ɪŋ/",
    pos: "Ot (Noun)",
    uz: "Tinglab tushunish, eshitish",
    en: "The skill of understanding spoken language",
    example: "Listen for signpost words like 'however' and 'furthermore'.",
    exampleUz: "'However' va 'furthermore' kabi bog'lovchi so'zlarga quloq soling."
  }
,
  "apple": {
    ipa: "/ˈæp.əl/",
    pos: "Ot (Noun)",
    uz: "Olma",
    en: "Round edible fruit produced by an apple tree",
    example: "An apple provides healthy energy during study breaks.",
    exampleUz: "Olma dars tanaffusida sog'lom energiya beradi.",
    synonyms: ["fruit"]
  },
  "banana": {
    ipa: "/bəˈnɑː.nə/",
    pos: "Ot (Noun)",
    uz: "Banan",
    en: "A long curved fruit which grows in clusters",
    example: "A banana is rich in potassium.",
    exampleUz: "Banan kaliyga boy mevadir."
  },
  "water": {
    ipa: "/ˈwɔː.tər/",
    pos: "Ot (Noun)",
    uz: "Suv",
    en: "Clear liquid essential for plant and animal life",
    example: "Drink plenty of water before testing.",
    exampleUz: "Imtihondan oldin yetarlicha suv iching.",
    synonyms: ["aqua", "liquid"]
  },
  "tea": {
    ipa: "/tiː/",
    pos: "Ot (Noun)",
    uz: "Choy",
    en: "Hot drink made by infusing dried crushed leaves",
    example: "A cup of green tea aids mental focus.",
    exampleUz: "Bir finjon ko'k choy diqqatni jamlashga yordam beradi."
  },
  "coffee": {
    ipa: "/ˈkɒf.i/",
    pos: "Ot (Noun)",
    uz: "Kofe, qahva",
    en: "Brewed drink made from roasted coffee beans",
    example: "Coffee boosts alertness for morning exams.",
    exampleUz: "Kofe ertalabki imtihonlarda tetiklikni oshiradi."
  },
  "bread": {
    ipa: "/bred/",
    pos: "Ot (Noun)",
    uz: "Non",
    en: "Food made of flour, water, and yeast baked together",
    example: "Fresh bread is served with breakfast.",
    exampleUz: "Nonushtaga yangi non tortiladi."
  },
  "food": {
    ipa: "/fuːd/",
    pos: "Ot (Noun)",
    uz: "Ovqat, taom, oziq-ovqat",
    en: "Any nutritious substance consumed to maintain life",
    example: "Nutritious food improves cognitive performance.",
    exampleUz: "To'yimli taom aqliy faoliyatni yaxshilaydi."
  },
  "pen": {
    ipa: "/pen/",
    pos: "Ot (Noun)",
    uz: "Ruchka, pero",
    en: "Instrument for writing or drawing with ink",
    example: "Use a pen to jot down scratch notes.",
    exampleUz: "Qoralama yozish uchun ruchkadan foydalaning."
  },
  "pencil": {
    ipa: "/ˈpen.səl/",
    pos: "Ot (Noun)",
    uz: "Qalam",
    en: "Instrument for writing consisting of graphite in a wooden cylinder",
    example: "Use a pencil to sketch geometric angles.",
    exampleUz: "Geometrik burchaklarni chizish uchun qalamdan foydalaning."
  },
  "paper": {
    ipa: "/ˈpeɪ.pər/",
    pos: "Ot (Noun)",
    uz: "Qog'oz, varaq, ilmiy maqola",
    en: "Material in thin sheets used for writing; or research essay",
    example: "Scratch paper is provided at test centers.",
    exampleUz: "Test markazida qoralama qog'ozi beriladi."
  },
  "notebook": {
    ipa: "/ˈnəʊt.bʊk/",
    pos: "Ot (Noun)",
    uz: "Daftar, qayd daftari",
    en: "Book of blank pages for notes",
    example: "Keep an error analysis notebook.",
    exampleUz: "Xatolar tahlili daftarini yuriting."
  },
  "bag": {
    ipa: "/bæɡ/",
    pos: "Ot (Noun)",
    uz: "Sumka, portfel",
    en: "Flexible container with an opening at the top",
    example: "Place your exam voucher inside your bag.",
    exampleUz: "Imtihon ruxsatnomasini sumkangizga soling."
  },
  "desk": {
    ipa: "/desk/",
    pos: "Ot (Noun)",
    uz: "Parta, yozuv stoli",
    en: "Piece of furniture with a flat surface for study",
    example: "Keep your study desk organized and quiet.",
    exampleUz: "O'quv partangizni tartibli va tinch saqlang."
  },
  "table": {
    ipa: "/ˈteɪ.bəl/",
    pos: "Ot (Noun)",
    uz: "Stol; jadval",
    en: "Furniture with flat top; or set of facts/figures",
    example: "Analyze the experimental data table carefully.",
    exampleUz: "Tajriba ma'lumotlari jadvalini diqqat bilan tahlil qiling."
  },
  "chair": {
    ipa: "/tʃeər/",
    pos: "Ot (Noun)",
    uz: "Stul, o'rindiq",
    en: "Separate seat for one person",
    example: "Adjust your chair height comfortably.",
    exampleUz: "Stulingiz balandligini qulay moslang."
  },
  "door": {
    ipa: "/dɔːr/",
    pos: "Ot (Noun)",
    uz: "Eshik",
    en: "Hinged barrier for closing an entrance",
    example: "Close the door to minimize study noise.",
    exampleUz: "Shovqinni kamaytirish uchun eshikni yoping."
  },
  "window": {
    ipa: "/ˈwɪn.dəʊ/",
    pos: "Ot (Noun)",
    uz: "Deraza, oyna",
    en: "Opening in a wall to admit light or air",
    example: "Glance out the window to rest your eyes.",
    exampleUz: "Ko'zingizni dam oldirish uchun derazadan qarang."
  },
  "room": {
    ipa: "/ruːm/",
    pos: "Ot (Noun)",
    uz: "Xona, bo'sh joy",
    en: "Part of the inside of a building; space",
    example: "The test room must maintain strict silence.",
    exampleUz: "Imtihon xonasida qat'iy sukunat bo'lishi shart."
  },
  "house": {
    ipa: "/haʊs/",
    pos: "Ot (Noun)",
    uz: "Uy, bino",
    en: "Building for human habitation",
    example: "Study in a dedicated quiet room in your house.",
    exampleUz: "Uyingizdagi tinch xonada dars qiling."
  },
  "home": {
    ipa: "/həʊm/",
    pos: "Ot / Ravish",
    uz: "Uy, xonadon, vatan",
    en: "The place where one lives permanently",
    example: "Practice Bluebook mock tests at home.",
    exampleUz: "Uyda Bluebook sinov testlarini mashq qiling."
  },
  "car": {
    ipa: "/kɑːr/",
    pos: "Ot (Noun)",
    uz: "Mashina, avtomobil",
    en: "Road vehicle powered by an internal engine",
    example: "Arrive at the testing venue early by car.",
    exampleUz: "Imtihon binosiga mashinada erta yetib boring."
  },
  "city": {
    ipa: "/ˈsɪt.i/",
    pos: "Ot (Noun)",
    uz: "Shahar",
    en: "A large human settlement",
    example: "Tashkent is a bustling educational city.",
    exampleUz: "Toshkent — yirik ta'lim markazi bo'lgan shahar."
  },
  "country": {
    ipa: "/ˈkʌn.tri/",
    pos: "Ot (Noun)",
    uz: "Mamlakat, davlat; qishloq",
    en: "A nation with its own government and territory",
    example: "Students from our country excel in mathematics.",
    exampleUz: "Mamlakatimiz o'quvchilari matematikada a'lo natijalar ko'rsatmoqda."
  },
  "sun": {
    ipa: "/sʌn/",
    pos: "Ot (Noun)",
    uz: "Quyosh",
    en: "The luminous celestial body around which the earth orbits",
    example: "The sun is the ultimate source of solar energy.",
    exampleUz: "Quyosh — quyosh energiyasining asosiy manbai."
  },
  "moon": {
    ipa: "/muːn/",
    pos: "Ot (Noun)",
    uz: "Oy (osmon jismi)",
    en: "The natural satellite of the earth",
    example: "The moon regulates tidal oceanic cycles.",
    exampleUz: "Oy dengiz suvining ko'tarilish-qaytishini boshqaradi."
  },
  "sky": {
    ipa: "/skaɪ/",
    pos: "Ot (Noun)",
    uz: "Osmon, fazo",
    en: "The region of the atmosphere above the earth",
    example: "Astronomers observe the night sky for exoplanets.",
    exampleUz: "Astronomlar ekzosayyoralarni aniqlash uchun osmonni kuzatadi."
  },
  "earth": {
    ipa: "/ɜːθ/",
    pos: "Ot (Noun)",
    uz: "Yer, zamin",
    en: "The planet on which we live",
    example: "Earth rotates on its axis once every 24 hours.",
    exampleUz: "Yer o'z o'qi atrofida har 24 soatda aylanadi."
  },
  "star": {
    ipa: "/stɑːr/",
    pos: "Ot (Noun)",
    uz: "Yulduz",
    en: "A fixed luminous point in the night sky",
    example: "Each star emits radiation across the spectrum.",
    exampleUz: "Har bir yulduz spektr bo'ylab nurlanish tarqatadi."
  },
  "week": {
    ipa: "/wiːk/",
    pos: "Ot (Noun)",
    uz: "Hafta",
    en: "A period of seven successive days",
    example: "Complete one full mock test every week.",
    exampleUz: "Har hafta bitta to'liq sinov testini bajaring."
  },
  "month": {
    ipa: "/mʌnθ/",
    pos: "Ot (Noun)",
    uz: "Oy (taqvimiy)",
    en: "One of the twelve periods of a year",
    example: "Consistent study over two months guarantees progress.",
    exampleUz: "Ikki oy davomida muntazam o'qish o'sishni kafolatlaydi."
  },
  "year": {
    ipa: "/jɪər/",
    pos: "Ot (Noun)",
    uz: "Yil",
    en: "The time taken by a planet to make one revolution around the sun",
    example: "2026 is the year of digital testing excellence.",
    exampleUz: "2026-yil — raqamli imtihonlar yili."
  },
  "family": {
    ipa: "/ˈfæm.əl.i/",
    pos: "Ot (Noun)",
    uz: "Oila, xonadon",
    en: "A group consisting of parents and children",
    example: "Family encouragement fuels academic ambition.",
    exampleUz: "Oila qo'llab-quvvatlashi ta'limiy maqsadlarni kuchaytiradi."
  },
  "person": {
    ipa: "/ˈpɜː.sən/",
    pos: "Ot (Noun)",
    uz: "Shaxs, odam, inson",
    en: "A human being regarded as an individual",
    example: "Each person masters test strategy at their own speed.",
    exampleUz: "Har bir shaxs test strategiyasini o'z tezligida egallaydi."
  },
  "speak": {
    ipa: "/spiːk/",
    pos: "Fe'l",
    uz: "Gapirmoq, so'zlamoq",
    en: "Convey information or express feelings in speech",
    example: "Speak with natural cadence in IELTS Speaking.",
    exampleUz: "IELTS Speaking'da tabiiy marom bilan gapiring."
  },
  "listen": {
    ipa: "/ˈlɪs.ən/",
    pos: "Fe'l",
    uz: "Tinglamoq, quloq solmoq",
    en: "Give one's attention to sound",
    example: "Listen carefully to keyword signals in audio.",
    exampleUz: "Audiodagi kalit so'zlarga diqqat bilan quloq soling."
  },
  "read": {
    ipa: "/riːd/",
    pos: "Fe'l",
    uz: "O'qimoq, mutolaa qilmoq",
    en: "Comprehend the meaning of written characters",
    example: "Read the question stem before the paragraph.",
    exampleUz: "Xatboshidan oldin savol shartini o'qing."
  },
  "write": {
    ipa: "/raɪt/",
    pos: "Fe'l",
    uz: "Yozmoq, insho tuzmoq",
    en: "Compose text or note responses",
    example: "Write clear thesis statements for Writing Task 2.",
    exampleUz: "Writing Task 2 uchun aniq tezis bayonotini yozing."
  },
  "calculate": {
    ipa: "/ˈkæl.kjə.leɪt/",
    pos: "Fe'l",
    uz: "Hisoblamoq, o'lchamoq",
    en: "Determine the amount or number mathematically",
    example: "Calculate discriminant $D = b^2 - 4ac$.",
    exampleUz: "Diskriminant $D = b^2 - 4ac$ ni hisoblang."
  }
};

const UZ_TO_EN_DICTIONARY = {
  "salom": {
    en: "hello / hi / greetings",
    ipa: "/həˈloʊ/",
    uzDef: "Uchrashganda yoki so'z boshlaganda aytiladigan salomlashish so'zi",
    example: "Hello! Welcome to YU Academy.",
    tip: "Rasmiy holatlarda 'Good morning' yoki 'Hello', do'stona holatda 'Hi' ishlatiladi."
  },
  "rahmat": {
    en: "thank you / thanks / gratitude",
    ipa: "/θæŋk juː/",
    uzDef: "Minnatdorchilik bildirish iborasi",
    example: "Thank you for your valuable feedback.",
    tip: "Speaking'da 'I am immensely grateful for...' deb aytish yuqori ball olib keladi."
  },
  "iltimos": {
    en: "please / kindly",
    ipa: "/pliːz/",
    uzDef: "Muloyimlik bilan iltimos qilish so'zi",
    example: "Please turn to page 25 of the test booklet.",
    tip: "Iltimos qilganda 'Could you please...' iborasi juda madaniyatli eshitiladi."
  },
  "xayr": {
    en: "goodbye / bye / farewell",
    ipa: "/ˌɡʊdˈbaɪ/",
    uzDef: "Vidolashuv, ajralish paytida aytiladigan so'z",
    example: "Goodbye and good luck on your exams!",
    tip: "Rasmiy xayrlashuvda 'Have a wonderful day' ham aytiladi."
  },
  "talaba": {
    en: "student / undergraduate / scholar",
    ipa: "/ˈstjuː.dənt/",
    uzDef: "Oliy yoki o'rta ta'lim muassasasida o'quvchi shaxs",
    example: "Dedicated students achieve Band 8.5+ with daily shadowing.",
    tip: "Insholarda faqat 'student' demasdan 'scholars' yoki 'candidates' sinonimlarini qo'llang."
  },
  "o'quvchi": {
    en: "student / pupil / learner",
    ipa: "/ˈpjuː.pəl/",
    uzDef: "Maktab yoki ta'lim markazida ta'lim oluvchi",
    example: "Pupils should master Desmos calculator functions for SAT Math.",
    tip: "Maktab o'quvchilari uchun 'pupil' yoki 'learner' mos keladi."
  },
  "ustoz": {
    en: "teacher / mentor / instructor / tutor",
    ipa: "/ˈtiː.tʃər/",
    uzDef: "Ilm va kasb o'rgatuvchi murabbiy",
    example: "A knowledgeable mentor accelerates your university admission.",
    tip: "'Mentor' yoki 'instructor' so'zlari akademik maqolalarda ko'proq uchraydi."
  },
  "kitob": {
    en: "book / publication / volume",
    ipa: "/bʊk/",
    uzDef: "Varaqlardan iborat bosma yoki yozma asar",
    example: "Reading academic books builds powerful vocabulary.",
    tip: "Ilmiy kitoblar uchun 'treatise' yoki 'academic publication' ham deyiladi."
  },
  "maktab": {
    en: "school / academy / institution",
    ipa: "/skuːl/",
    uzDef: "O'rta yoki umumiy ta'lim beruvchi dargoh",
    example: "Our school prepares top scholars for Ivy League admission.",
    tip: "Maxsus nufuzli maktablar uchun 'academy' so'zi ishlatiladi."
  },
  "imtihon": {
    en: "exam / examination / test / assessment",
    ipa: "/ɪɡˈzæm/",
    uzDef: "Bilim va malakani sinovdan o'tkazish tadbiri",
    example: "The 2026 Digital SAT exam is divided into two modules.",
    tip: "'Assessment' yoki 'formal examination' akademik matnlarda rasmiy sinonim."
  },
  "ball": {
    en: "score / mark / points / grade",
    ipa: "/skɔːr/",
    uzDef: "Imtihon yoki sinovda to'plangan sonli natija",
    example: "A 1500+ SAT score opens doors to full university scholarships.",
    tip: "SAT uchun 'score', insholar uchun 'grade' yoki 'mark' ko'proq ishlatiladi."
  },
  "yordam": {
    en: "help / assistance / support / aid",
    ipa: "/help/",
    uzDef: "Ko'mak, madad, xizmat",
    example: "YU AI is available 24/7 to provide academic assistance.",
    tip: "'Assistance' yoki 'guidance' so'zlari 'help'ga qaraganda rasmiyroq."
  },
  "tushunmoq": {
    en: "understand / comprehend / grasp / fathom",
    ipa: "/ˌʌn.dəˈstænd/",
    uzDef: "Biror narsaning ma'nosi va mohiyatini bilmoq",
    example: "It is important to comprehend the core principles of geometry.",
    tip: "IELTS Reading'da 'comprehend' so'zi chuqur tushunishni bildiradi."
  },
  "tushuntirmoq": {
    en: "explain / clarify / elucidate / illustrate",
    ipa: "/ɪkˈspleɪn/",
    uzDef: "Ravshan qilmoq, bayon qilib bermoq",
    example: "The teacher will clarify the solution step by step.",
    tip: "Writing Task 1 da 'illustrate' yoki 'clarify' ishlatilsa ball yuqoriroq bo'ladi."
  },
  "yechmoq": {
    en: "solve / resolve / work out",
    ipa: "/sɒlv/",
    uzDef: "Masala yoki tenglamaga javob topmoq",
    example: "You can solve this quadratic formula in 10 seconds using Desmos.",
    tip: "Tenglamalar uchun 'solve', muammolar uchun 'resolve' mos keladi."
  },
  "yaxshi": {
    en: "good / fine / excellent / proficient",
    ipa: "/ɡʊd/",
    uzDef: "Ijobiy sifatga ega, ko'ngildagidek",
    example: "She has excellent critical reading skills.",
    tip: "IELTS'da 'good' so'zidan qochib 'proficient' yoki 'commendable' ishlating."
  },
  "yomon": {
    en: "bad / poor / adverse / detrimental",
    ipa: "/bæd/",
    uzDef: "Sifatsiz, noxush, zararli",
    example: "Poor time management can be detrimental to your test score.",
    tip: "Insholarda 'bad' o'rniga 'detrimental' (zararli) yoki 'substandard' ma'qul."
  },
  "oson": {
    en: "easy / simple / straightforward / effortless",
    ipa: "/ˈiː.zi/",
    uzDef: "Ko'p kuch talab qilmaydigan, yengil",
    example: "The first module has relatively straightforward algebra questions.",
    tip: "'Straightforward' yoki 'facile' so'zlari akademik darajani ko'rsatadi."
  },
  "qiyin": {
    en: "difficult / hard / challenging / arduous",
    ipa: "/ˈdɪf.ɪ.kəlt/",
    uzDef: "Ko'p aqliy yoki jismoniy mehnat talab qiladigan, mushkul",
    example: "Preparing for SAT Module 2 requires tackling challenging questions.",
    tip: "'Challenging' yoki 'arduous' so'zi insholarga ilmiy tus beradi."
  },
  "katta": {
    en: "big / large / substantial / massive",
    ipa: "/bɪɡ/",
    uzDef: "Hajmi, o'lchami yoki ahamiyati yirik bo'lgan",
    example: "Renewable energy will play a substantial role in future economies.",
    tip: "Grafik tahlilida 'big change' demasdan 'substantial change' deng."
  },
  "kichik": {
    en: "small / minor / marginal / negligible",
    ipa: "/smɔːl/",
    uzDef: "Hajmi kam, ahamiyati oz bo'lgan",
    example: "A marginal difference in score will not affect your ranking.",
    tip: "Grafikda arzimas o'zgarishni tasvirlashda 'negligible' eng zo'r so'z."
  },
  "tez": {
    en: "fast / quick / rapid / swift",
    ipa: "/fɑːst/",
    uzDef: "Qisqa vaqt ichida harakatlanuvchi",
    example: "Rapid reading comprehension saves time on the Digital SAT.",
    tip: "'Rapid' yoki 'swift' so'zi 'fast'dan ancha professionalroq."
  },
  "sekin": {
    en: "slow / gradual / moderate",
    ipa: "/sləʊ/",
    uzDef: "Oshiqmaydigan, kam tezlikdagi",
    example: "Gradual improvement is more sustainable than rushed learning.",
    tip: "Asta-sekin o'sish uchun 'gradual' so'zi ishlatiladi."
  },
  "yangi": {
    en: "new / modern / innovative / novel",
    ipa: "/njuː/",
    uzDef: "Yaqinda paydo bo'lgan, zamonaviy",
    example: "The 2026 test format introduced novel question archetypes.",
    tip: "Yangi g'oyalar yoki usullar uchun 'novel' yoki 'innovative' qo'llang."
  },
  "eski": {
    en: "old / ancient / obsolete / antiquated",
    ipa: "/əʊld/",
    uzDef: "Uzoq vaqtdan beri mavjud bo'lgan yoki eskirgan",
    example: "Paper-based testing has become obsolete with the rise of Digital SAT.",
    tip: "Eskirib, muomaladan chiqqan narsalar uchun 'obsolete' ajoyib so'z."
  },
  "to'g'ri": {
    en: "correct / accurate / right / valid",
    ipa: "/kəˈrekt/",
    uzDef: "Xatosiz, haqiqatga mos",
    example: "Ensure your answer is mathematically accurate.",
    tip: "Faktik aniqlik uchun 'accurate', mantiqiy to'g'rilik uchun 'valid'."
  },
  "xato": {
    en: "mistake / error / fallacy / misconception",
    ipa: "/mɪˈsteɪk/",
    uzDef: "Noto'g'ri qilingan ish, yanglish fikr",
    example: "Analyzing your mistakes is the secret to scoring 1500+.",
    tip: "Mantiqiy xatolar uchun 'fallacy', noto'g'ri tushunchalar uchun 'misconception'."
  },
  "vaqt": {
    en: "time / period / duration",
    ipa: "/taɪm/",
    uzDef: "Hodisalar ketma-ketligi davomiyligi",
    example: "Effective time management is key during the 70-minute Math section.",
    tip: "Davomiylik ma'nosida 'duration' so'zidan foydalaning."
  },
  "kun": {
    en: "day / daytime / date",
    ipa: "/deɪ/",
    uzDef: "24 soatlik vaqt oralig'i",
    example: "A test date should be selected at least 3 months in advance.",
    tip: "Aniq kalendar sanasi uchun 'date' deyiladi."
  },
  "samarali": {
    en: "effective / prolific / productive / viable",
    ipa: "/ɪˈfek.tɪv/",
    uzDef: "Ko'zlangan maqsadga yuqori sifatda erishuvchi",
    example: "Adopting spaced repetition is an effective technique for SAT vocabulary retention.",
    tip: "IELTS insholarida faqat 'good' yoki 'useful' demasdan 'effective' yoki 'viable' so'zlarini ishlating."
  },
  "aniq": {
    en: "meticulous / precise / accurate / lucid",
    ipa: "/prɪˈsaɪs/",
    uzDef: "Tafsilotlariga qadar to'g'ri va ravshan bo'lgan",
    example: "Desmos provides precise numerical solutions for quadratic equations in SAT Math.",
    tip: "SAT Math va Science matnlarida o'lchovlar va natijalar aniqligini ifodalaydi."
  },
  "muhim": {
    en: "pivotal / paramount / imperative / crucial",
    ipa: "/ˈpɪv.ə.təl/",
    uzDef: "Birlamchi ahamiyatga ega, hal qiluvchi rol o'ynovchi",
    example: "Time management plays a pivotal role in finishing the Digital SAT on time.",
    tip: "'Important' so'zi o'rniga Band 8.0+ uchun 'pivotal' yoki 'paramount' dan foydalaning."
  },
  "muammo": {
    en: "dilemma / adversity / challenge / predicament",
    ipa: "/dɪˈlem.ə/",
    uzDef: "Qiyin vaziyat yoki yechim talab qiladigan to'siq",
    example: "Policymakers face a complex dilemma between rapid industrial growth and ecological preservation.",
    tip: "'Problem' o'rniga kontekstga moslab 'dilemma' yoki 'adversity' ishlating."
  },
  "kamaytirmoq": {
    en: "alleviate / mitigate / diminish / curtail",
    ipa: "/əˈliː.vi.eɪt/",
    uzDef: "Yukni, zararni yoki xavfni yengillatmoq",
    example: "Consistent practice helps mitigate anxiety before the Bluebook mock exam.",
    tip: "Muammo-yechim insholarida 'reduce' o'rniga eng yuqori ball olib keluvchi fe'l."
  },
  "rivojlanish": {
    en: "flourishing / proliferation / expansion / advancement",
    ipa: "/ˈflʌr.ɪ.ʃɪŋ/",
    uzDef: "Kengayish, o'sish va yuksaklikka intilish",
    example: "The rapid advancement of artificial intelligence creates new educational horizons.",
    tip: "IELTS Task 2 da zamonaviy o'sishni ifodalashda qo'llang."
  },
  "isbotlamoq": {
    en: "substantiate / validate / verify / corroborate",
    ipa: "/səbˈstæn.ʃi.eɪt/",
    uzDef: "Dalillar va faktlar bilan haqiqatligini tasdiqlamoq",
    example: "Empirical experiments substantiate the underlying scientific hypothesis.",
    tip: "SAT Reading da 'support the hypothesis' o'rniga sinonim sifatida keladi."
  },
  "xolis": {
    en: "impartial / dispassionate / unbiased / objective",
    ipa: "/ɪmˈpɑː.ʃəl/",
    uzDef: "Biror tarafga yon bosmasdan, adolatli qaror chiqaruvchi",
    example: "An academic paper must maintain an impartial and objective tone.",
    tip: "Ilmiy uslub va mantiqiy xulosalarni baholashda asosiy mezon."
  }
,
  "olma": {
    en: "apple",
    ipa: "/ˈæp.əl/",
    uzDef: "Dumaloq, totli meva",
    example: "An apple a day keeps the doctor away.",
    tip: "Speaking'da mevalar va sog'lom ovqatlanish mavzusida ishlatiladi."
  },
  "suv": {
    en: "water",
    ipa: "/ˈwɔː.tər/",
    uzDef: "Hayot uchun zarur bo'lgan shaffof suyuqlik",
    example: "Drink plenty of water before taking your exam.",
    tip: "Har kungi so'z boyligi."
  },
  "non": {
    en: "bread",
    ipa: "/bred/",
    uzDef: "Undan tayyorlanadigan asosiy oziq-ovqat",
    example: "Fresh bread is served warm.",
    tip: "Madaniy va kundalik mavzularda ishlatiladi."
  },
  "choy": {
    en: "tea",
    ipa: "/tiː/",
    uzDef: "Quritilgan barglardan damlanadigan issiq ichimlik",
    example: "Green tea helps to sharpen focus.",
    tip: "Speaking Part 1 do'stona suhbatlarda juda qo'l keladi."
  },
  "uy": {
    en: "house / home",
    ipa: "/haʊs/",
    uzDef: "Yashash joyi, bino, xonadon",
    example: "Studying at home requires strong self-discipline.",
    tip: "Bino ma'nosida 'house', oilaviy o'choq ma'nosida 'home'."
  },
  "shahar": {
    en: "city / town",
    ipa: "/ˈsɪt.i/",
    uzDef: "Yirik aholi yashash punkti",
    example: "Tashkent is a rapidly developing educational city.",
    tip: "Katta shahar uchun 'city', kichikroq shahar uchun 'town'."
  },
  "davlat": {
    en: "country / state / nation",
    ipa: "/ˈkʌn.tri/",
    uzDef: "Mustaqil hudud va hukumatga ega mamlakat",
    example: "Students from our country excel in global olympiads.",
    tip: "Akademik insholarda 'nation' yoki 'sovereign state' sinonimlaridan foydalaning."
  },
  "dunyo": {
    en: "world / globe",
    ipa: "/wɜːld/",
    uzDef: "Yer yuzi, borliq, butun insoniyat",
    example: "The Digital SAT is taken by students all around the world.",
    tip: "Insholarda 'across the globe' iborasi juda chiroyli eshitiladi."
  },
  "qalam": {
    en: "pencil",
    ipa: "/ˈpen.səl/",
    uzDef: "Yozish yoki chizish uchun grafitli qurol",
    example: "Bring a pencil to sketch geometry diagrams.",
    tip: "Qog'ozdagi chizmalarda qalam ishlatiladi."
  },
  "daftar": {
    en: "notebook",
    ipa: "/ˈnəʊt.bʊk/",
    uzDef: "Qaydlar yozish uchun bo'sh varaqli daftarcha",
    example: "Keep a formula notebook for SAT Math.",
    tip: "Daftar — 'notebook'."
  },
  "universitet": {
    en: "university / college",
    ipa: "/ˌjuː.nɪˈvɜː.sə.ti/",
    uzDef: "Oliy ta'lim va ilmiy-tadqiqot muassasasi",
    example: "Top universities award full scholarships for high SAT scores.",
    tip: "AQShda 'college' va 'university' sinonim sifatida ishlatiladi."
  },
  "dars": {
    en: "lesson / class / lecture",
    ipa: "/ˈles.ən/",
    uzDef: "O'quv mashg'uloti, ma'ruza",
    example: "Attend daily classes to reinforce mathematical foundations.",
    tip: "Universitet ma'ruzasi uchun 'lecture'."
  },
  "savol": {
    en: "question / problem",
    ipa: "/ˈkwes.tʃən/",
    uzDef: "Javob talab qiluvchi jumla, masala",
    example: "Read every question stem with extreme care.",
    tip: "Matematik masala uchun 'problem'."
  },
  "javob": {
    en: "answer / solution",
    ipa: "/ˈɑːn.sər/",
    uzDef: "Savolga berilgan to'g'ri yechim yoki munosabat",
    example: "Option C is the correct answer.",
    tip: "Matematik yechim uchun 'solution'."
  },
  "yechim": {
    en: "solution",
    ipa: "/səˈluː.ʃən/",
    uzDef: "Masalaning yechilishi, hal qilinishi",
    example: "Desmos provides an instant visual solution.",
    tip: "To'g'ri yondashuv — 'step-by-step solution'."
  },
  "tenglama": {
    en: "equation",
    ipa: "/ɪˈkweɪ.ʒən/",
    uzDef: "O'zaro teng bo'lgan matematik ifodalar",
    example: "Solve the quadratic equation using the discriminant.",
    tip: "Kvadrat tenglama — 'quadratic equation'."
  },
  "parabola": {
    en: "parabola",
    ipa: "/pəˈræb.əl.ə/",
    uzDef: "Kvadratik funksiya grafigi",
    example: "The vertex of the parabola is at (h, k).",
    tip: "Uchi — 'vertex'."
  },
  "diskriminant": {
    en: "discriminant",
    ipa: "/dɪˈskrɪm.ɪ.nənt/",
    uzDef: "Kvadrat tenglama ildizlari sonini ko'rsatuvchi formula (b^2 - 4ac)",
    example: "If discriminant is negative, there are no real roots.",
    tip: "D = b^2 - 4ac."
  },
  "ildiz": {
    en: "root / solution",
    ipa: "/ruːt/",
    uzDef: "Tenglamaning yechimi, x qiymati; ildiz belgisi",
    example: "A quadratic equation can have zero, one, or two real roots.",
    tip: "Tenglama ildizlari — 'roots of the equation'."
  },
  "doira": {
    en: "circle",
    ipa: "/ˈsɜː.kəl/",
    uzDef: "Tekislikdagi barcha nuqtalari markazdan teng uzoqlikda bo'lgan shakl",
    example: "The standard circle equation is (x-h)^2 + (y-k)^2 = r^2.",
    tip: "Radiusi — 'radius', markazi — 'center'."
  },
  "burchak": {
    en: "angle",
    ipa: "/ˈæŋ.ɡəl/",
    uzDef: "Bir nuqtadan chiquvchi ikki nur orasidagi fazo",
    example: "A right angle measures exactly 90 degrees.",
    tip: "To'g'ri burchak — 'right angle' (90°)."
  },
  "uchburchak": {
    en: "triangle",
    ipa: "/ˈtraɪ.æŋ.ɡəl/",
    uzDef: "Uchta tomon va uchta burchakdan iborat geometrik shakl",
    example: "The angles of a triangle always sum to 180 degrees.",
    tip: "Ichki burchaklar yig'indisi 180°."
  },
  "foiz": {
    en: "percent / percentage",
    ipa: "/pəˈsent/",
    uzDef: "Yuzdan bir ulush (%)",
    example: "Calculate the percent increase from 50 to 75.",
    tip: "Foiz oshishi — 'percentage increase'."
  },
  "sertifikat": {
    en: "certificate",
    ipa: "/səˈtɪf.ɪ.kət/",
    uzDef: "Rasmiy guvohnoma, hujjat",
    example: "Download your official YU Academy certificate upon test completion.",
    tip: "Rasmiy sertifikat — 'official certificate'."
  }
};

// YU AI - 2026 Rasmiy SAT va IELTS Imtihon Murabbiyi
// Desmos, Imtihon Savollari Tahlili, Tenglamalar Yechuvchisi, Qadamma-qadam Yechimlar va Interaktiv Murabbiy


// ===================================================================
// 2026 YU ACADEMY EDUCATIONAL CONCEPTS ENCYCLOPEDIA ("CHUNMAGAN NARSALAR")
// ===================================================================
const YU_EDUCATIONAL_CONCEPTS = {
  "parabola": {
    matches: ["parabola", "kvadratik funksiya", "kvadrat tenglama", "parabola uchi", "vertex", "quadratic"],
    title: "📐 Parabola & Kvadrat Tenglamalar (Digital SAT Math Masterclass)",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Parabola & Kvadratik Funksiyalar (Digital SAT Math Masterclass):** 📐\n\n" +
          "Parabola — bu kvadratik funksiya ($y = ax^2 + bx + c$) grafigi bo'lib, Digital SAT Math imtihonida eng ko'p ball olib keluvchi mavzudir.\n\n" +
          "📌 **SAT Math'da Bilishingiz Shart Bo'lgan 4 Ta Qoida:**\n\n" +
          "1. **Shoxlar yo'nalishi:**\n" +
          "   • Agar $a > 0$ bo'lsa: parabola shoxlari **yuqoriga** qaragan (eng quyi *minimum* nuqtaga ega);\n" +
          "   • Agar $a < 0$ bo'lsa: parabola shoxlari **pastga** qaragan (eng yuqori *maksimum* nuqtaga ega).\n\n" +
          "2. **Parabola Uchi (Vertex $(h, k)$):**\n" +
          "   • $x$-koordinatasi: $h = -\\frac{b}{2a}$;\n" +
          "   • $y$-koordinatasi: $k = f(h)$ (ya'ni $h$ qiymatini funksiyaga qo'yiladi);\n" +
          "   • Vertex formasi: $y = a(x - h)^2 + k$.\n\n" +
          "3. **Diskriminant ($D = b^2 - 4ac$):**\n" +
          "   • $D > 0$: Parabola $x$-o'qini **2 marta** kesib o'tadi (2 ta haqiqiy ildiz);\n" +
          "   • $D = 0$: Parabola $x$-o'qiga **urinadi** (1 ta karrali ildiz);\n" +
          "   • $D < 0$: Parabola $x$-o'qini kesmaydi (haqiqiy ildiz yo'q).\n\n" +
          "💡 **Desmos 10 Soniyalik Layfxaki:**\n" +
          "Tenglamani Desmos kalkulyatoriga kiriting va parabola uchini yoki $x$-o'qi bilan kesishgan nuqtalarini sichqoncha bilan bosing — koordinatalar bir zumda ko'rinadi!",
        time,
        actions: [
          { label: "🧮 Desmosda Parabolani Sinash", onClick: () => window.desmosManager?.toggle(true) },
          { label: "🎯 SAT Math Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") },
          { label: "📐 Formulalar Varaqasi", onClick: () => window.testCenter?.showFormulaSheet() }
        ]
      };
    }
  },
  "diskriminant": {
    matches: ["diskriminant", "discriminant", "ildizlar soni", "b^2 - 4ac", "ildiz nima", "ildizlari"],
    title: "🔢 Diskriminant ($D = b^2 - 4ac$) & Ildizlar Nazariyasi",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Diskriminant ($D = b^2 - 4ac$) & Ildizlar Qoidasi (SAT Math):** 🔢\n\n" +
          "Diskriminant — kvadrat tenglamada ($ax^2 + bx + c = 0$) ildizlarning soni va xarakterini aniqlab beruvchi eng asosiy ko'rsatkichdir.\n\n" +
          "📌 **Formula:** $$D = b^2 - 4ac$$\n\n" +
          "📊 **SAT imtihonida tushadigan 3 ta holat:**\n" +
          "1. **$D > 0$ bo'lganda:** Tenglama **ikkita turli haqiqiy ildizga** ega ($x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$). Parabola $x$-o'qini 2 marta kesadi;\n" +
          "2. **$D = 0$ bo'lganda:** Tenglama **bitta karrali haqiqiy ildizga** ega ($x = -\\frac{b}{2a}$). Parabola uchi $x$-o'qiga urinadi;\n" +
          "3. **$D < 0$ bo'lganda:** Tenglama **haqiqiy ildizga ega emas** (kompleks ildizlar mavjud). Parabola $x$-o'qiga tegmaydi.\n\n" +
          "🎯 **SAT Layfxaki:** Agar savolda *'has no real solutions'* yoki *'intersects x-axis once'* iboralari kelsa, darhol $b^2 - 4ac < 0$ yoki $b^2 - 4ac = 0$ shartini tekshiring!",
        time,
        actions: [
          { label: "🧮 Desmosda Hisoblash", onClick: () => window.desmosManager?.toggle(true) },
          { label: "🎯 SAT Math Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") }
        ]
      };
    }
  },
  "doira": {
    matches: ["doira", "doira tenglamasi", "circle", "aylana", "radius", "markaz"],
    title: "⚪ Doira Tenglamasi & Markaz Koordinatalari",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Doira Tenglamasi & Markaz Koordinatalari (SAT Geometry):** ⚪\n\n" +
          "Digital SAT Math modulida doira tenglamasiga oid savollar har yili uchraydi!\n\n" +
          "📌 **Standart Tenglama:**\n" +
          "$$(x - h)^2 + (y - k)^2 = r^2$$\n" +
          "• $(h, k)$ — doira markazining koordinatalari (ishoralariga e'tibor bering: $(x-3)$ bo'lsa markaz $x=3$);\n" +
          "• $r$ — doira radiusi (tenglamaning o'ng tomonidagi son $r^2$ bo'ladi, ya'ni agar $=49$ bo'lsa, radius $r=7$).\n\n" +
          "🔍 **To'la kvadratga ajratish (Complete the square):**\n" +
          "Agar $x^2 + y^2 - 6x + 8y = 24$ berilgan bo'lsa:\n" +
          "$(x - 3)^2 + (y + 4)^2 = 24 + 9 + 16 = 49 = 7^2$\n" +
          "Demak: Markaz $(3, -4)$, Radius $r = 7$.\n\n" +
          "💡 **Desmos Usuli:** Tenglamani Desmos'ga kiritishingiz bilan doira chiziladi — markaz va radiusni 3 soniyada tekshirishingiz mumkin!",
        time,
        actions: [
          { label: "🧮 Desmosda Doirani Chizish", onClick: () => window.desmosManager?.toggle(true) },
          { label: "🎯 Geometriya Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") }
        ]
      };
    }
  },
  "chiziqli": {
    matches: ["chiziqli tenglama", "linear equation", "slope", "burchak koeffitsiyenti", "y = mx + b"],
    title: "📈 To'g'ri Chiziq Tenglamasi & Slope ($y = mx + b$)",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**To'g'ri Chiziq Tenglamasi & Qiyalik (Slope $y = mx + b$):** 📈\n\n" +
          "📌 **Standart Ko'rinish:** $$y = mx + b$$\n" +
          "• $m$ — Slope (burchak koeffitsiyenti / qiyalik): $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$;\n" +
          "• $b$ — $y$-intercept (chiziqning $y$-o'qi bilan kesishish nuqtasi: $(0, b)$).\n\n" +
          "⚖️ **Parallel va Perpendikulyar Chiziqlar Qoidasi:**\n" +
          "1. **Parallel chiziqlar:** Qiyaliklari bir xil bo'ladi ($m_1 = m_2$);\n" +
          "2. **Perpendikulyar chiziqlar:** Qiyaliklar ko'paytmasi $-1$ ga teng ($m_1 \\cdot m_2 = -1$), ya'ni $m_2 = -\\frac{1}{m_1}$ (teskari va qarama-qarshi ishora!).",
        time,
        actions: [
          { label: "🧮 Desmosda Sinab Ko'rish", onClick: () => window.desmosManager?.toggle(true) }
        ]
      };
    }
  },
  "sistema": {
    matches: ["tenglamalar sistemasi", "system of equations", "kesishish nuqtasi", "yechimlar soni"],
    title: "🔗 Tenglamalar Sistemasi (SAT Math)",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Tenglamalar Sistemasi va Ularning Yechimlari:** 🔗\n\n" +
          "Ikkita to'g'ri chiziq tenglamasi berilganda:\n\n" +
          "1. **Bitta yechim (One solution):** To'g'ri chiziqlar kesishadi ($m_1 \\neq m_2$). Kesishgan nuqta yagona yechim $(x, y)$ dir;\n" +
          "2. **Yechimga ega emas (No solution):** Chiziqlar parallel, hech qachon kesishmaydi ($m_1 = m_2$, ammo $b_1 \\neq b_2$);\n" +
          "3. **Cheksiz ko'p yechim (Infinitely many solutions):** Ikkala tenglama ayni bitta chiziqni ifodalaydi ($m_1 = m_2$ va $b_1 = b_2$).\n\n" +
          "💡 **Desmos Layfxaki:** Desmos'ga ikkala tenglamani alohida qatorga kiriting — kesishish nuqtasi ustiga bosganingizda javob darhol chiqadi!",
        time,
        actions: [
          { label: "🧮 Desmos Kalkulyator", onClick: () => window.desmosManager?.toggle(true) }
        ]
      };
    }
  },
  "inversiya": {
    matches: ["inversiya", "inversion", "negative adverb", "rarely", "seldom"],
    title: "📝 Inversiya Qoidasi (SAT Reading & Writing / Grammar)",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Inversiya Qoidasi (SAT Reading & Writing — Grammar Masterclass):** 📝\n\n" +
          "**Inversiya** — ingliz tili grammatikasida gapning ta'sirchanligini oshirish uchun **yordamchi fe'lning egadan oldinga o'tishi**dir.\n\n" +
          "📌 **Qachon ishlatiladi?**\n" +
          "Gap inkor yoki cheklov bildiruvchi so'zlar bilan boshlanganda:\n" +
          "`Rarely`, `Seldom`, `Scarcely`, `Hardly`, `Never`, `Not only`, `Under no circumstances`.\n\n" +
          "🔍 **Taqqoslash:**\n" +
          "• *Oddiy gap tartibi:* 'Scientists rarely observe such celestial phenomena.'\n" +
          "• *Inversiya (SAT rasmiy formati):* '**Rarely do scientists observe** such celestial phenomena.'\n\n" +
          "⚠️ **Eslatma:** Yordamchi fe'l egaga mos kelishi shart (singular bo'lsa *does/is/has*, plural bo'lsa *do/are/have*)!",
        time,
        actions: [
          { label: "📖 SAT RW Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_RW") }
        ]
      };
    }
  },
  "semicolon": {
    matches: ["semicolon", "nuqtali vergul", "colon", "ikkita nuqta", "comma splice", "tinish belgilari", "vergul qoidasi"],
    title: "✒️ Nuqtali Vergul (Semicolon ;), Colon (:) va Vergul (,) Qoidalari",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Tinish Belgilari — Nuqtali Vergul (;) va Ikki Nuqta (:):** ✒️\n\n" +
          "SAT Reading & Writing imtihonida tinish belgilari bo'yicha har bir testda 4-5 ta savol tushadi:\n\n" +
          "1. **Nuqtali Vergul (Semicolon `;`):**\n" +
          "   Ikkita mustaqil gapni (Independent Clauses) bog'lovchisiz to'g'ridan-to'g'ri bog'laydi.\n" +
          "   *Qoida:* `Mustaqil gap; Mustaqil gap.`\n" +
          "   *Misol:* 'The research hypothesis was falsified; the researchers revised their methodology.'\n\n" +
          "2. **Ikki Nuqta (Colon `:`):**\n" +
          "   Chap tomoni **to'liq mustaqil gap** bo'lishi shart! O'ng tomonida esa izoh, ro'yxat yoki ta'rif keladi.\n" +
          "   *Misol:* 'The expedition encountered a fatal flaw: navigational malfunction.'\n\n" +
          "3. **Comma Splice XATOSI:**\n" +
          "   Ikkita to'liq mustaqil gapni faqat vergul (,) bilan ajratish qat'iyan man etiladi!\n" +
          "   ❌ *Xato:* The alarm sounded, students left the hall.\n" +
          "   ✅ *To'g'ri:* The alarm sounded; students left the hall.",
        time,
        actions: [
          { label: "📖 SAT RW Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_RW") }
        ]
      };
    }
  },
  "tfng": {
    matches: ["true false not given", "tfng", "not given", "true false", "yes no not given"],
    title: "🇬🇧 True / False / Not Given Strategiyasi (IELTS Reading)",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**True / False / Not Given Strategiyasi (IELTS Academic Reading):** 🇬🇧\n\n" +
          "IELTS Reading modulining eng nozik va ko'p xato qilinadigan savol turi bo'yicha aniq qoidalar:\n\n" +
          "1. **TRUE:** Savoldagi barcha faktlar matndagi ma'lumotga **100% to'liq mos keladi** (odatda sinonimlar orqali parafraz qilinadi);\n" +
          "2. **FALSE:** Savoldagi ma'lumot matndagi dalilga **to'g'ridan-to'g'ri zid keladi** (qarama-qarshi);\n" +
          "3. **NOT GIVEN:** Matnda bu mavzu tilga olingan bo'lishi mumkin, ammo **aynan berilgan tasdiqni isbotlovchi yoki inkor etuvchi fakt yo'q**.\n\n" +
          "💡 **Oltin Maslahat:** Agar matnda savolga oid aniq javob topilmasa, o'zingizcha 'mantiqan shunday bo'lishi kerak' deb taxmin qilmang! Dalil yo'qmi — demak bu **NOT GIVEN**!",
        time,
        actions: [
          { label: "🇬🇧 IELTS Reading Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("IELTS", null, "IELTS_READING") }
        ]
      };
    }
  },
  "skimming": {
    matches: ["skimming", "scanning", "tez o'qish", "reading texnikasi"],
    title: "⚡ Skimming va Scanning Texnikalari (IELTS & SAT Reading)",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Skimming va Scanning — Tez O'qish San'ati:** ⚡\n\n" +
          "Vaqtni tejash va barcha savollarga ulgurish siri:\n\n" +
          "• **Skimming (Ko'z yugurtirish):** Matnning umumiy mazmuni, mavzusi va xatboshilarning bosh g'oyasini (Topic Sentence) tushunish uchun 1-2 daqiqada tez o'qib chiqish;\n" +
          "• **Scanning (Radar qidiruvi):** Aniq ma'lumotlarni — sanalar, raqamlar, kishi ismlari, joy nomlari yoki ilmiy terminlarni matndan topish.\n\n" +
          "🎯 **Oltin Ketma-ketlik:** Avval savolni o'qing, kalit so'zni aniqlang, so'ngra scanning orqali matndan o'sha joyni topib, atrofidagi 2 ta jumlani sinchiklab tahlil qiling!",
        time,
        actions: [
          { label: "🇬🇧 IELTS Reading Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("IELTS", null, "IELTS_READING") }
        ]
      };
    }
  },
  "shadowing": {
    matches: ["shadowing", "shedoving", "shedov", "speaking mashq", "nutq mashqi", "talaffuz"],
    title: "🎙️ Shadowing Studio Nima va Qanday Ishlaydi?",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Shadowing Studio — IELTS Speaking Band 8.5+ Trenajyori:** 🎙️\n\n" +
          "**Shadowing (Soya metodi)** — ona tili vakillari (native speakers) kabi ravon, tabiiy intonatsiya va to'g'ri urg'u bilan gapirishning eng samarali metodikasidir.\n\n" +
          "🎧 **YU Academy Shadowing Qulayliklari:**\n" +
          "1. **3 ta Haqiqiy Aksent:** 🇬🇧 UK Oxford (Serena), 🇺🇸 US American (Ava), 🇦🇺 AU Australian (Karen);\n" +
          "2. **Tezlik Sozlamasi:** 0.5x dan 1.5x gacha;\n" +
          "3. **Qanday Ishlatiladi?**\n" +
          "   • '🔊 Tinglash' tugmasini bosib ona tili spikerining audioini eshitasiz;\n" +
          "   • '🎤 Yozish' tugmasini bosib, jumlani aynan spiker ritmida qaytarasiz;\n" +
          "   • AI ovozingizni tahlil qilib, 100 ballik shkalada talaffuz aniqligini ko'rsatadi!\n\n" +
          "Hoziroq Shadowing Studiyasida mashq qilishni boshlaysizmi?",
        time,
        actions: [
          { label: "🎙️ Shadowing Studiyasini Ochish", onClick: () => window.shadowingTrainer?.openTrainer() },
          { label: "🇬🇧 IELTS Speaking Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("IELTS", "ielts-2026-s1") }
        ],
        autoAction: () => {
          window.shadowingTrainer?.openTrainer();
        }
      };
    }
  },
  "desmos": {
    matches: ["desmos", "grafik kalkulyator", "kalkulyator qanday", "desmos nima"],
    title: "🧮 Digital SAT Desmos Grafik Kalkulyatori",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Desmos Grafik Kalkulyatori — Digital SAT Math Kaliti:** 🧮\n\n" +
          "Desmos — College Board 2026 rasmiy Bluebook imtihoniga to'liq integratsiya qilingan kuchli grafik kalkulyatoridir.\n\n" +
          "🚀 **Desmos SAT Math'da Qanday Yordam Beradi?**\n" +
          "• **Tenglamalar sistemasi:** Ikkala tenglamani kiriting va kesishish nuqtasini bosing — $x$ va $y$ 5 soniyada chiqadi;\n" +
          "• **Parabola cho'qqisi (Vertex):** $y = ax^2 + bx + c$ formulasisiz eng yuqori/quyi nuqtani bir bosishda toping;\n" +
          "• **Doira tenglamasi:** $(x-h)^2 + (y-k)^2 = r^2$ grafigini chizib, radius va markazni ko'ring;\n" +
          "• **Ildizlar soni (Discriminant):** Grafik $x$-o'qini necha marta kesishiga qarab yechimlar sonini darhol aniqlang!\n\n" +
          "Desmosni siz uchun ekranda ochdim 👇",
        time,
        actions: [
          { label: "🧮 Desmos Kalkulyatorini Ochish", onClick: () => window.desmosManager?.toggle(true) },
          { label: "🎯 SAT Math Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") },
          { label: "📐 Formulalar Varaqasi", onClick: () => window.testCenter?.showFormulaSheet() }
        ],
        autoAction: () => {
          window.desmosManager?.toggle(true);
        }
      };
    }
  },
  "xatolar": {
    matches: ["xatolar ustida ishlash", "xatolar tahlili", "xatoni tuzatish", "remediation", "xatolarim"],
    title: "🎯 Xatolar Ustida Ishlash (Targeted Remediation Mode)",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Xatolar Ustida Ishlash (Targeted Remediation Mode):** 🎯\n\n" +
          "YU Academy platformasining eng kuchli o'quv vositalaridan biri — xatolar ustida maqsadli ishlash rejimidir.\n\n" +
          "🧠 **U Qanday Ishlaydi?**\n" +
          "1. Har qanday SAT yoki IELTS sinov testini topshirganingizdan keyin, natijalar oynasida **'🎯 Xatolar Ustida Ishlash'** tugmasi chiqadi;\n" +
          "2. Tizim siz xato belgilagan yoki o'tkazib yuborgan savollarni avtomatik saralaydi;\n" +
          "3. Har bir savol bo'yicha rasmiy College Board va Cambridge qoidasi, Desmos yechimi va tushuntirish beriladi;\n" +
          "4. Ushbu rejimda qayta ishlash orqali o'quvchilar o'z zaif mavzularini bartaraf etib, ballarini 100-150 ballga ko'taradilar!",
        time,
        actions: [
          { label: "⏱️ SAT Mock Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_FULL_MOCK") },
          { label: "📚 Savollar Bazasiga O'tish", onClick: () => window.location.href = "questions.html" }
        ]
      };
    }
  },
  "sertifikat": {
    matches: ["sertifikat", "certificate", "diplom", "sertifikat olish", "qanday olinadi sertifikat"],
    title: "📜 YU Academy Rasmiy Sertifikati & Qanday Olinadi?",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**YU Academy Rasmiy 2026 Sertifikati & Qanday Olinadi?** 📜✨\n\n" +
          "YU Academy rasmiy sertifikati — sizning Digital SAT va IELTS imtihonlariga tayyorgarlik darajangizni tasdiqlovchi rasmiy hujjatdir.\n\n" +
          "🏅 **Sertifikat Xususiyatlari:**\n" +
          "• **24K Oltin Hoshiya:** YU Academy rasmiy 3D kub emblemasi va rektor muhri bilan bezatilgan;\n" +
          "• **Shaxsiy Ma'lumotlar:** O'quvchi ism-familiyasi, topshirilgan sana va to'plangan rasmiy ball (masalan: SAT 1540 yoki IELTS 8.5) qayd etiladi;\n" +
          "• **QR-kodli Haqiqiylik Muhr:** Rasmiy litsenziyalangan QR-kod tekshiruvi;\n" +
          "• **Qanday Olinadi?** Test yakunlangandan so'ng, natijalar oynasidagi **'📜 Rasmiy Sertifikatni Olish (PDF)'** tugmasini bosing — sertifikat darhol ochiladi va uni PDF shaklida yuklab olishingiz yoki chop etishingiz mumkin!",
        time,
        actions: [
          { label: "⏱️ To'liq SAT Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_FULL_MOCK") },
          { label: "⏱️ To'liq IELTS Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("IELTS", null, "IELTS_FULL_MOCK") }
        ]
      };
    }
  },
  "ingliz_tilida": {
    matches: ["nega test ingliz", "nima uchun test ingliz", "nimaga english", "o'zbekcha emas test", "nega inglizcha"],
    title: "🌐 Nima Uchun Test Savollari Ingliz Tilida?",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Nima Uchun Test Savollari Ingliz Tilida?** 🌐\n\n" +
          "Chunki xalqaro **Digital SAT** (AQSh College Board) va **IELTS** (British Council / IDP / Cambridge) imtihonlarining o'zi **100% rasman faqat ingliz tilida** bo'ladi!\n\n" +
          "🎯 **YU Academy Ta'limiy Yondashuvi:**\n" +
          "• Haqiqiy imtihonda yuqori natija (SAT 1500+, IELTS 8.0+) olishingiz uchun savollar College Board va Cambridge rasmiy formatida (sof ingliz tilida) taqdim etiladi;\n" +
          "• Ammo sizga qulay bo'lishi uchun, **YU AI barcha savollarning yechimini, formulalarini, qoidalarini va tushuntirishlarini to'liq o'zbek tilida** beradi;\n" +
          "• Bu sizni haqiqiy imtihon muhitiga 100% moslashtiradi va imtihon zalida savollarni tushunishda hech qanday qo'rquv bo'lmaydi!",
        time,
        actions: [
          { label: "🧮 Desmos Kalkulyator", onClick: () => window.desmosManager?.toggle(true) },
          { label: "🎯 SAT Math Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") }
        ]
      };
    }
  },
  "streak": {
    matches: ["streak", "seriya", "kunlik seriya", "xp", "ballar", "reyting nima"],
    title: "🔥 Kunlik Seriya (Streak) va XP Ballar Tizimi",
    render(time, assistant) {
      return {
        sender: "ai",
        text: "**Kunlik Seriya (Streak 🔥) va XP Ballar Tizimi:** 🏆\n\n" +
          "Muntazamlik — SAT va IELTS imtihonlarida muvaffaqiyat garovidir!\n\n" +
          "• **🔥 Kunlik Seriya (Streak):** Har kuni platformaga kirib kamida bitta test yoki trenajyor bajarganingizda seriyangiz 1 kunga oshadi. Agar bir kun qoldirilsa, seriya to'xtaydi;\n" +
          "• **⚡ XP Ballar (Tajriba):** Har bir to'g'ri ishlangan savol uchun +50 XP, to'liq test topshirilganda esa +200 XP beriladi;\n" +
          "• **🥇 Top Scholars Reytingi:** Bosh sahifadagi jonli peshqadamlar jadvalida o'z o'rningizni ko'rib borishingiz mumkin!",
        time,
        actions: [
          { label: "🎯 Kunlik Mashqni Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") }
        ]
      };
    }
  }
};

class AIAssistant {
  constructor() {
    this.messages = [];
    this.isOpen = false;
    this.isTyping = false;
    this.init();
  }

  init() {
    this.loadHistory();
    if (this.messages.length === 0) {
      this.addSystemGreeting();
    }
  }

  loadHistory() {
    try {
      const saved = localStorage.getItem("yu_ai_chat_history_2026");
      if (saved) {
        this.messages = JSON.parse(saved);
      }
    } catch (e) {
      this.messages = [];
    }
  }

  saveHistory() {
    try {
      localStorage.setItem("yu_ai_chat_history_2026", JSON.stringify(this.messages.slice(-30)));
    } catch (e) {}
  }

  clearHistory() {
    this.messages = [];
    try { localStorage.removeItem("yu_ai_chat_history_2026"); } catch(e) {}
    this.addSystemGreeting();
    this.renderMessages();
    window.app?.notify("YU AI suhbat tarixi yangilandi! ✨");
  }

  addSystemGreeting() {
    this.messages.push({
      sender: "ai",
      text: "Assalomu alaykum! Men **YU AI** — 2026-yilgi **Digital SAT** va **IELTS** rasmiy imtihon murabbiyingizman. 🎯\n\nMen sizga quyidagi barcha masalalarda to'liq yordam bera olaman:\n• 📝 **Test savollarini yechish va tushuntirish:** Istalgan savol matnini, raqamini yoki ID-sini yozing;\n• 🧮 **Desmos kalkulyatori:** Desmosni ochish, parabolalar va tenglamalar sistemasini 10 soniyada yechish;\n• 🎙️ **IELTS Speaking Shadowing:** Haqiqiy qiz yoki erkak ovozida nutq talaffuzini mashq qilish;\n• 📖 **Akademik Lug'at & Tarjima:** Istalgan so'zning o'zbekcha/inglizcha ma'nosi, talaffuzi va misoli (masalan, *'ubiquitous tarjimasi'*);\n• 📐 **Matematik tenglamalar:** Masalan `2x + 5 = 15` yoki `x^2 - 5x + 6 = 0` yozsangiz qadamma-qadam yechib beraman.\n\nMenga xohlagan savolingizni bering!",
      time: this.getCurrentTime(),
      actions: [
        { label: "🧮 Desmos Kalkulyatorini Ochish", onClick: () => window.desmosManager?.toggle(true) },
        { label: "🎙️ Speaking Shadowing Studio", onClick: () => window.shadowingTrainer?.openTrainer() },
        { label: "📖 Ubiquitous so'zi tarjimasi", command: "ubiquitous tarjimasi nima" },
        { label: "📝 Hozirgi Test Savolini Tushuntir", onClick: () => this.explainCurrentTestQuestion() },
        { label: "🎯 Digital SAT Math (44 Savol)", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") }
      ]
    });
  }

  getCurrentTime() {
    const now = new Date();
    return now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
  }

  // ================= 1. EXPLAIN CURRENT TEST QUESTION =================
  explainCurrentTestQuestion() {
    const tc = window.testCenter;
    const isModalOpen = document.getElementById("bluebook-modal")?.classList.contains("active");
    if (tc && tc.currentQuestions && tc.currentQuestions.length > 0 && isModalOpen) {
      const q = tc.currentQuestions[tc.currentQuestionIdx];
      this.explainQuestionDirectly(q, true);
    } else {
      const text = "Hozirda faol test oynasi ochilmagan. 🎯\n\nSiz **Digital SAT** yoki **IELTS** testlaridan birini boshlashingiz bilan, test oynasidagi **«🤖 AI Tushuntir»** tugmasi orqali o'sha daqiqadagi savolni qadamma-qadam tahlil qilib beraman.\n\nYoki quyidagi testlardan birini boshlaysizmi?";
      this.messages.push({
        sender: "ai",
        text,
        time: this.getCurrentTime(),
        actions: [
          { label: "🎯 SAT Math Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") },
          { label: "📖 SAT Reading & Writing", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_RW") },
          { label: "🇬🇧 IELTS Academic Testi", onClick: () => window.testCenter?.startOfficialExam("IELTS", null, "IELTS_READING") },
          { label: "🧮 Desmos Kalkulyator", onClick: () => window.desmosManager?.toggle(true) }
        ]
      });
      this.saveHistory();
      this.renderMessages();
    }
  }

  // ================= 2. EXPLAIN QUESTION DIRECTLY =================
  explainQuestionDirectly(q, fromActiveExam = false) {
    if (!q) return;

    let ansFormatted = "";
    if (q.isGridIn) {
      ansFormatted = q.correctAnswer || "Son qiymat";
    } else if (q.options && typeof q.correctIndex === "number") {
      ansFormatted = `${String.fromCharCode(65 + q.correctIndex)}) ${q.options[q.correctIndex]}`;
    } else {
      ansFormatted = q.correctAnswer || "To'g'ri variant";
    }

    const isMath = (q.section && q.section.toLowerCase().includes("math")) || q.examType === "SAT_MATH" || q.hasDesmos;

    // Build choices list
    let optionsList = "";
    if (q.options && Array.isArray(q.options) && q.options.length > 0) {
      optionsList = "\n📋 **Variantlar:**\n" + q.options.map((opt, idx) => {
        const letter = String.fromCharCode(65 + idx);
        const isCorrect = idx === q.correctIndex;
        return `${letter}) ${opt} ${isCorrect ? "✅ *(To'g'ri javob)*" : ""}`;
      }).join("\n") + "\n\n";
    }

    let stimulusText = "";
    if (q.stimulus) {
      stimulusText = `📄 **Savol Konteksti / Passage:**\n*"${q.stimulus.trim()}"*\n\n`;
    }

    const promptText = q.question || q.prompt || "";
    
    let text = `🎯 **${q.section || '2026 Rasmiy Savol'} — Chuqurlashtirilgan AI Tahlili:**\n\n`;
    if (q.id) text += `📌 **Savol kodi:** \`${q.id}\` • **Qiyinlik darajasi:** ${q.difficulty || 'Medium'}\n\n`;
    text += stimulusText;
    text += `❓ **Savol Matni:**\n*"${promptText}"*\n\n`;
    text += optionsList;
    text += `✅ **To'g'ri Javob:** **${ansFormatted}**\n\n`;
    text += `🧠 **Qadamma-qadam Yechish Mantig'i:**\n${q.explanation || "Rasmiy 2026 College Board Bluebook va Cambridge standartlari asosida yechilgan."}\n\n`;
    
    if (isMath) {
      text += `💡 **Desmos Tezkor Usuli (SAT Layfxak):**\nUshbu ifodani Desmos kalkulyatoriga kiritib, funksiya grafigidagi kesishish (intersections) yoki eng yuqori/quyi nuqtalarni (vertex) bosish orqali qo'lda hisoblamasdan 10 soniyada javobni topish mumkin!`;
    } else {
      text += `💡 **AI Murabbiy Tavsiyasi:**\nIELTS va SAT Reading savollarida so'zlarni aynan o'zini qidirmang — ularning kontekstdagi sinonimlariga (paraphrasing) va grammatik bog'lovchilarga e'tibor qarating!`;
    }

    const actions = [];
    if (isMath) {
      actions.push({ label: "🧮 Desmosda Sinab Ko'rish", onClick: () => window.desmosManager?.toggle(true) });
    }
    actions.push({ label: "🔊 Ovozda Tinglash", onClick: () => this.speakMessage(text) });
    if (!fromActiveExam) {
      actions.push({ label: "🚀 Ushbu Testni Boshlash", onClick: () => window.testCenter?.startOfficialExam(q.exam || q.examType || "SAT", q.id) });
    }
    actions.push({ label: "📐 Formulalar Varaqasi", onClick: () => window.testCenter?.showFormulaSheet() });

    this.messages.push({
      sender: "ai",
      text,
      time: this.getCurrentTime(),
      actions
    });

    this.saveHistory();
    this.renderMessages();
  }

  // ================= 3. USER QUERY PROCESSOR =================
  processUserQuery(query) {
    const cleanQuery = query.toLowerCase().trim();

    this.messages.push({
      sender: "user",
      text: query,
      time: this.getCurrentTime()
    });
    this.renderMessages();

    this.showTypingIndicator(true);

    setTimeout(() => {
      this.showTypingIndicator(false);
      const response = this.generateResponse(cleanQuery, query);
      this.messages.push(response);
      this.saveHistory();
      this.renderMessages();

      if (response.autoAction) {
        response.autoAction();
      }
    }, 350);
  }

  // ================= 4. RESPONSE GENERATOR & SMART SOLVER =================

  // ================= 3.1. INTENT RECOGNIZERS (FUZZY & TYPO TOLERANT) =================
  isDesmosIntent(clean) {
    if (!clean) return false;
    const desmosTypos = [
      "desmos", "desosso", "desos", "desmo", "desmoz", "desms", "desmso", 
      "dsmos", "desmas", "desm", "kalkulyator", "kalkulator", "kalkul", "calculator"
    ];
    for (const typo of desmosTypos) {
      if (clean.includes(typo)) return true;
    }
    if (clean.includes("des") && (clean.includes("och") || clean.includes("ber") || clean.includes("korsat") || clean.includes("chiqar") || clean.includes("ishlat"))) {
      return true;
    }
    if (clean.includes("grafik") && (clean.includes("och") || clean.includes("kalk") || clean.includes("ber") || clean.includes("chiz"))) {
      return true;
    }
    return false;
  }

  isShadowingIntent(clean) {
    if (!clean) return false;
    const shadowTypos = [
      "shadow", "shedov", "shedo", "shado", "shedoving", "speaking", 
      "cue card", "talaffuz", "qiz ovozi", "erkak ovozi", "spiker", 
      "gapir", "nutq", "ovoz yozish", "ovozli trenajyor", "audio trenajyor"
    ];
    for (const typo of shadowTypos) {
      if (clean.includes(typo)) return true;
    }
    if ((clean.includes("shed") || clean.includes("shado")) && (clean.includes("och") || clean.includes("ber") || clean.includes("korsat"))) {
      return true;
    }
    return false;
  }

  isConfusionIntent(clean) {
    if (!clean) return false;
    const confusionPhrases = [
      "tushunmadim", "tushunmayapman", "tushunmayap", "tushuntir", 
      "qanday ishlaydi", "nima qilish kerak", "buni qanday", "hech narsaga tushunmadim", 
      "sayt nima", "qayerdan boshlay", "yordam ber", "qanaqa sayt", 
      "kim bu", "how does it work", "what is this", "i don't understand", "help me"
    ];
    for (const phrase of confusionPhrases) {
      if (clean.includes(phrase)) return true;
    }
    return false;
  }

  // ================= 3.1. EDUCATIONAL CONCEPT EXPLAINER =================
  explainEducationalConcept(cleanLower, rawQuery, time) {
    if (!cleanLower && !rawQuery) return null;
    const q = (cleanLower + " " + (rawQuery || "").toLowerCase()).trim();

    for (const [key, concept] of Object.entries(YU_EDUCATIONAL_CONCEPTS)) {
      for (const m of concept.matches) {
        if (q.includes(m)) {
          return concept.render(time, this);
        }
      }
    }
    return null;
  }

  // ================= 3.2. TRANSLATION INTENT & TARGET EXTRACTION =================
  isTranslationIntent(clean, rawQuery) {
    if (!clean && !rawQuery) return false;
    const q = (clean + " " + (rawQuery || "").toLowerCase()).trim();
    const transTriggers = [
      "tarjima", "rajima", "rajimasi", "tarjimasi", "tarjimasini", "tarjimon", "translate", "translation",
      "nima degani", "degani nima", "ma'nosi", "manosi", "manosini", "ma'nosini", "inglizcha", "inglizchasi",
      "o'zbekcha", "o'zbekchasi", "ozbekcha", "ozbekchasi", "lug'at", "dictionary", "meaning", "definition"
    ];
    for (const trig of transTriggers) {
      if (q.includes(trig)) return true;
    }
    const words = q.split(/[^a-zA-Z'’-]+/).filter(w => w.length > 2);
    for (const w of words) {
      if (YU_ACADEMIC_DICTIONARY[w] || UZ_TO_EN_DICTIONARY[w]) {
        return true;
      }
    }
    return false;
  }

  extractTranslationTarget(clean, rawQuery) {
    const q = (rawQuery || clean || "").replace(/[’`]/g, "'").trim();
    // 1. Quoted word check
    const quoteMatch = q.match(/["'«»]([^"'«»]+)["'«»]/);
    if (quoteMatch && quoteMatch[1].trim().length > 1) {
      return quoteMatch[1].trim();
    }
    // 2. Regex removal of filler words (including colloquial typos like 'kill ber', 'kil ber', 'sozini', etc.)
    const fillerPattern = /\b(tarjima\s*(qilib\s*ber|qil\s*ber|kill\s*ber|kil\s*ber|ber|qil|qilib|ayt|aytvor|chiqar)?|tarjimasini|tarjimasi|rajimasi|rajima|translate|translation|dictionary|lug'at|lugat|so'zini|sozini|so'zining|sozining|so'zi|sozi|so'z|soz|nima\s*degani|degani\s*nima|degani|ma'nosi|manosi|ma'nosini|manosini|inglizchasi|inglizcha|o'zbekchasi|ozbekchasi|o'zbekcha|ozbekcha|meaning|what\s*does|what\s*is|mean|menga|manga|iltimos|yordam|ber|berchi|ayt|aytvor|aytib\s*ber|kill\s*ber|kil\s*ber|qil\s*ber|qilib\s*ber|kill|kil|qil|qilib|deb|qanaqa|qanday|bo'ladi|boladi|chiqar|chiqarmayapti)\b/gi;
    let stripped = q.toLowerCase().replace(fillerPattern, " ");
    stripped = stripped.replace(/[^a-zA-Z0-9'\s-]/g, " ").trim();
    const tokens = stripped.split(/\s+/).map(t => t.replace(/^['-]+|['-]+$/g, "")).filter(t => t.length > 1);

    if (tokens.length > 0) {
      // Prioritize tokens present in dictionary
      for (const t of tokens) {
        if (YU_ACADEMIC_DICTIONARY[t] || UZ_TO_EN_DICTIONARY[t]) return t;
      }
      return tokens[0];
    }
    const fallbackWords = q.match(/[a-zA-Z]{2,}/g);
    return (fallbackWords && fallbackWords.length > 0) ? fallbackWords[0] : (clean || "hello");
  }

  stemWord(w) {
    if (!w || w.length < 3) return null;
    const enStem = w.replace(/(ing|ed|es|s|ly|tion|ment)$/i, "");
    if (enStem.length >= 3 && YU_ACADEMIC_DICTIONARY[enStem]) return { dict: "en", word: enStem };
    const uzStem = w.replace(/(lar|ning|ga|ka|qa|da|dan|ni|im|ing|miz|i|si|dir)$/i, "");
    if (uzStem.length >= 3 && UZ_TO_EN_DICTIONARY[uzStem]) return { dict: "uz", word: uzStem };
    return null;
  }

  // ================= 3.3. ACADEMIC DICTIONARY FORMATTERS =================
  formatDictionaryCard(word, entry, time) {
    const synList = entry.synonyms && entry.synonyms.length > 0 
      ? entry.synonyms.map(s => `\`${s}\``).join(", ") 
      : "—";
    const antList = entry.antonyms && entry.antonyms.length > 0 
      ? entry.antonyms.map(a => `\`${a}\``).join(", ") 
      : "—";

    const text = `📖 **YU Academic Lug'at & Tarjima Murabbiyi (2026):**\n\n` +
      `🔤 **${word}** \`${entry.ipa || ''}\` • *${entry.pos || 'So\'z'}*\n\n` +
      `🇺🇿 **O'zbekcha Tarjimasi:**\n` +
      `> **${entry.uz}**\n\n` +
      `🇬🇧 **Akademik Ta'rifi (Academic Definition):**\n` +
      `*${entry.en || 'Academic context'}*\n\n` +
      `📝 **Imtihon Kontekstida Misol:**\n` +
      `*"${entry.example || ''}"*\n` +
      (entry.exampleUz ? `*(${entry.exampleUz})*\n\n` : "\n") +
      `💡 **Sinonimlari:** ${synList}\n` +
      (entry.antonyms && entry.antonyms.length > 0 ? `⚖️ **Antonimlari:** ${antList}\n` : "") +
      `🎯 **Imtihon Maslahati:** ${entry.examTip || 'Ushbu so\'zning talaffuzi va qo\'llanilishini yaxshilab yod oling.'}`;

    return {
      sender: "ai",
      text,
      time,
      actions: [
        { label: `🔊 Talaffuzini Tinglash (${word})`, onClick: () => this.speakMessage(`${word}. ${entry.example || ''}`) },
        { label: "🎙️ Shadowing Studio da Mashq Qilish", onClick: () => window.shadowingTrainer?.openTrainer() },
        { label: "📚 Savollar Bazasiga O'tish", onClick: () => window.location.href = "questions.html" }
      ]
    };
  }

  formatUzToEnCard(uzWord, entry, time) {
    const text = `📖 **YU Academic O'zbekcha-Inglizcha Tarjima (2026):**\n\n` +
      `🇺🇿 **O'zbekcha So'z:** **${uzWord}**\n\n` +
      `🇬🇧 **Inglizcha Tarjimasi:**\n` +
      `> **${entry.en}** \`${entry.ipa || ''}\`\n\n` +
      `📌 **Ma'no Izohi:** ${entry.uzDef || 'Akademik muqobil'}\n\n` +
      `📝 **Imtihon Kontekstida Misol:**\n` +
      `*"${entry.example || ''}"*\n\n` +
      `💡 **Band 8.5+ Maslahati:** ${entry.tip || 'Speaking va Writing imtihonlarida faol qo\'llang.'}`;

    return {
      sender: "ai",
      text,
      time,
      actions: [
        { label: "🔊 Inglizcha Misolni Tinglash", onClick: () => this.speakMessage(entry.example || entry.en) },
        { label: "🎙️ Shadowing Studio ni Ochish", onClick: () => window.shadowingTrainer?.openTrainer() },
        { label: "🧮 Desmos Kalkulyator", onClick: () => window.desmosManager?.toggle(true) }
      ]
    };
  }

  formatCustomTranslationCard(word, time) {
    const wLower = word.toLowerCase().trim();
    let posGuess = "Ot yoki Sifat (Noun / Adjective)";
    let affixExplanation = "Ushbu so'z akademik ingliz tilida fikrni ravon va professional bayon etishda qo'llaniladi.";
    let estimatedMeaning = `"${word}" so'zining akademik ma'nosi`;

    if (wLower.endsWith("tion") || wLower.endsWith("sion") || wLower.endsWith("ment") || wLower.endsWith("ness") || wLower.endsWith("ity")) {
      posGuess = "Ot (Noun — harakat, jarayon yoki tushuncha)";
      affixExplanation = "So'z oxiridagi qo'shimcha uning mavhum tushuncha yoki hodisa ekanligini bildiradi.";
    } else if (wLower.endsWith("able") || wLower.endsWith("ible") || wLower.endsWith("ive") || wLower.endsWith("ous") || wLower.endsWith("ful") || wLower.endsWith("less")) {
      posGuess = "Sifat (Adjective — belgi yoki xususiyat)";
      affixExplanation = "Predmet yoki hodisaning sifat xususiyatini ifodalaydi.";
    } else if (wLower.endsWith("ly")) {
      posGuess = "Ravish (Adverb — harakat tarzi)";
      affixExplanation = "Harakatning qay tarzda bajarilishini tasvirlaydi.";
    } else if (wLower.endsWith("ize") || wLower.endsWith("ise") || wLower.endsWith("ate") || wLower.endsWith("ify")) {
      posGuess = "Fe'l (Verb — amal yoki harakat)";
      affixExplanation = "Muayyan jarayon yoki harakatni amalga oshirishni anglatadi.";
    }

    const text = `📖 **YU Academic So'z Tahlili & Tarjimasi (2026):**\n\n` +
      `🔤 **So'rov:** **"${word}"** • *Grammatik Turkum: ${posGuess}*\n\n` +
      `🇺🇿 **O'zbekcha Izohi:**\n` +
      `> **${estimatedMeaning}**\n\n` +
      `📌 **Akademik Qo'llanma:**\n` +
      `• ${affixExplanation}\n` +
      `• So'zning aniq talaffuzini eshitish uchun pastdagi '🔊 Talaffuzini Tinglash' tugmasini bosing;\n` +
      `• Ushbu so'z ishtirokidagi nutqni Shadowing Studiyasida o'z ovozingiz bilan mashq qiling!`;

    return {
      sender: "ai",
      text,
      time,
      actions: [
        { label: `🔊 Talaffuzini Tinglash (${word})`, onClick: () => this.speakMessage(word) },
        { label: "🎙️ Shadowing Studio da Mashq Qilish", onClick: () => window.shadowingTrainer?.openTrainer() },
        { label: "📚 Savollar Bazasiga O'tish", onClick: () => window.location.href = "questions.html" }
      ]
    };
  }

  handleTranslationRequest(clean, rawQuery, time) {
    const target = this.extractTranslationTarget(clean, rawQuery).toLowerCase();

    // 1. Direct match in YU_ACADEMIC_DICTIONARY
    if (YU_ACADEMIC_DICTIONARY[target]) {
      return this.formatDictionaryCard(target, YU_ACADEMIC_DICTIONARY[target], time);
    }

    // 2. Direct match in UZ_TO_EN_DICTIONARY
    if (UZ_TO_EN_DICTIONARY[target]) {
      return this.formatUzToEnCard(target, UZ_TO_EN_DICTIONARY[target], time);
    }

    // 3. Stem match
    const stem = this.stemWord(target);
    if (stem) {
      if (stem.dict === "en" && YU_ACADEMIC_DICTIONARY[stem.word]) {
        return this.formatDictionaryCard(stem.word, YU_ACADEMIC_DICTIONARY[stem.word], time);
      }
      if (stem.dict === "uz" && UZ_TO_EN_DICTIONARY[stem.word]) {
        return this.formatUzToEnCard(stem.word, UZ_TO_EN_DICTIONARY[stem.word], time);
      }
    }

    // 4. Reverse search in English dictionary definitions
    for (const [enKey, enEntry] of Object.entries(YU_ACADEMIC_DICTIONARY)) {
      if (enEntry.uz && enEntry.uz.toLowerCase().includes(target)) {
        return this.formatUzToEnCard(target, {
          en: enKey,
          ipa: enEntry.ipa || "",
          uzDef: enEntry.uz,
          example: enEntry.example || `${enKey} is essential in academic preparation.`,
          tip: enEntry.examTip || "Ushbu so'zni kontekstda qo'llang."
        }, time);
      }
    }

    // 5. Fallback custom card with morphological breakdown
    return this.formatCustomTranslationCard(target, time);
  }

  generateResponse(q, rawQuery = "") {
    const time = this.getCurrentTime();
    const cleanLower = rawQuery.toLowerCase().trim();

    // 1. DESMOS INTENT (With Typos: "desosso", "desos", "desmo", "desmoz", "kalkulyator", "och desmos", etc.)
    if (this.isDesmosIntent(cleanLower)) {
      return {
        sender: "ai",
        text: "**Desmos Grafik Kalkulyatorini siz uchun darhol ochdim!** 🧮✨\n\n" +
          "*(2026-yilgi Digital SAT Bluebook rasmiy imtihon standarti)*\n\n" +
          "💡 **SAT Math'da Desmos qanday yordam beradi?**\n" +
          "• **Tenglamalar sistemasi:** Har ikkala tenglamani Desmos'ga kiriting va grafikdagi kesishish nuqtasini bosing — $x$ va $y$ qiymatlari bir zumda chiqadi!\n" +
          "• **Parabola cho'qqisi (Vertex):** $y = ax^2 + bx + c$ formulasisiz eng yuqori/quyi nuqtani bir bosishda toping;\n" +
          "• **Ildizlar soni (Discriminant):** Funksiya grafigi x o'qini necha marta kesib o'tishiga qarab yechimlar sonini 5 soniyada aniqlang!\n\n" +
          "Kalkulyator ekranda tayyor! Marhamat, formulalarni kiritib sinab ko'ring 👇",
        time,
        actions: [
          { label: "🧮 Desmosni Ochish / Yopish", onClick: () => window.desmosManager?.toggle() },
          { label: "🎯 Digital SAT Math Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") },
          { label: "📐 Formulalar Varaqasi", onClick: () => window.testCenter?.showFormulaSheet() }
        ],
        autoAction: () => {
          window.desmosManager?.toggle(true);
        }
      };
    }

    // 2. SHADOWING INTENT (With Typos: "shedoving", "shedov", "shado", "speaking", "ovoz", etc.)
    if (this.isShadowingIntent(cleanLower)) {
      return {
        sender: "ai",
        text: "**IELTS Speaking & Shadowing Studio 2026 ni siz uchun darhol ochdim!** 🎙️✨\n\n" +
          "*(IELTS Speaking Band 8.5–9.0 & SAT Nutq Trenajyori)*\n\n" +
          "🎧 **Trenajyordan qanday foydalanish kerak?**\n" +
          "1. **Spikerni tanlang:** 👩 Haqiqiy Qiz Bola Ovozi (Sweet & Bright) yoki 👨 Erkak Bariton Ovozi;\n" +
          "2. **Tezlikni moslang:** 0.5x, 0.75x, 1.0x, 1.25x yoki 1.5x;\n" +
          "3. **Eshiting va gapiring:** 'Tinglash' tugmasini bosing, so'ng 'Mikrofon' tugmasini bosib jumlani takrorlang;\n" +
          "4. **Natijani ko'ring:** AI sizning ovozingizni tahlil qilib 100 ballik shkala bo'yicha aniqlikni ko'rsatadi!\n\n" +
          "Shadowing studiyasi ekranda ochildi! Hoziroq nutqingizni sinab ko'ring 👇",
        time,
        actions: [
          { label: "🎙️ Shadowing Studio ni Ko'rish", onClick: () => window.shadowingTrainer?.openTrainer() },
          { label: "🇬🇧 IELTS Speaking Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("IELTS", "ielts-2026-s1") }
        ],
        autoAction: () => {
          window.shadowingTrainer?.openTrainer();
        }
      };
    }

    // 3. ACADEMIC DICTIONARY & TRANSLATION ("tarjima", "rajima", "nima degani", "vocabulary")
    // 3. EDUCATIONAL CONCEPT EXPLAINER ("chunmagan narsasini soraganda")
    // Checked BEFORE general word translation so queries like "parabola nima", "diskriminant nima", "sertifikat nima" get the concept masterclass!
    const conceptResp = this.explainEducationalConcept(cleanLower, rawQuery, time);
    if (conceptResp) {
      return conceptResp;
    }

    if (this.isTranslationIntent(cleanLower, rawQuery)) {
      return this.handleTranslationRequest(cleanLower, rawQuery, time);
    }

    // 4. CONFUSION & HOW IT WORKS ("odam tushunmasa", "tushunmadim", "qanday ishlaydi", "yordam")
    if (this.isConfusionIntent(cleanLower)) {
      return {
        sender: "ai",
        text: "Assalomu alaykum! Xavotir olmang, **YU Academy** platformasidan foydalanish juda oson va qulay! 🤝\n\n" +
          "YU Academy — 2026-yilgi **Digital SAT** va **IELTS** rasmiy imtihonlariga tayyorlovchi zamonaviy ta'lim platformasidir. Mana siz uchun eng asosiy 4 ta imkoniyat:\n\n" +
          "1. 🎯 **Mock Imtihonlar (Bluebook simulyatori):** Haqiqiy College Board va British Council 2026 formatidagi sinov testlarini ishlab, ballingizni bilib olasiz.\n" +
          "2. 🧮 **Desmos Grafik Kalkulyatori:** SAT Math dagi murakkab tenglamalarni bir zumda grafiksiz va qo'lda hisoblamasdan 10 soniyada yechish imkoniyati.\n" +
          "3. 🎙️ **Shadowing Studio (Ovozli Trenajyor):** IELTS Speaking Band 8.5+ uchun haqiqiy ingliz qiz yoki erkak spikeri ovozini eshitib, o'z ovozingizni yozib talaffuzingizni solishtirasiz.\n" +
          "4. 📚 **Akademik Lug'at va Tarjima:** Istalgan inglizcha so'zning o'zbekcha tarjimasi, talaffuzi va misolini mendan so'rashingiz mumkin (masalan, *'ubiquitous tarjimasi'* deb yozing).\n\n" +
          "Qaysi bo'limdan boshlashni xohlaysiz? Quyidagi tugmalardan birini bosing 👇",
        time,
        actions: [
          { label: "🎙️ Shadowing Studio ni Ochish", onClick: () => window.shadowingTrainer?.openTrainer() },
          { label: "🧮 Desmos Kalkulyatorini Ochish", onClick: () => window.desmosManager?.toggle(true) },
          { label: "⏱️ SAT Mock Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") },
          { label: "🇬🇧 IELTS Mock Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("IELTS", null, "IELTS_READING") },
          { label: "📚 Savollar Bazasiga O'tish", onClick: () => window.location.href = "questions.html" }
        ]
      };
    }

    // 5. ACTIVE EXAM QUESTION REQUEST
    const isAskingActiveExam = (q.includes("bu savol") || q.includes("shu savol") || q.includes("tushunmayapman") || 
      q.includes("tushuntir") || q.includes("yechim") || q.includes("yechish") || q.includes("qanday yechiladi") ||
      q.includes("explain this") || q.includes("help with question")) && !q.includes("parabola") && !q.includes("doira") && !q.includes("desmos");

    const tc = window.testCenter;
    const isModalOpen = document.getElementById("bluebook-modal")?.classList.contains("active");
    if (isAskingActiveExam && tc && tc.currentQuestions && tc.currentQuestions.length > 0 && isModalOpen) {
      const activeQ = tc.currentQuestions[tc.currentQuestionIdx];
      if (activeQ) {
        let ansFormatted = activeQ.isGridIn ? activeQ.correctAnswer : (activeQ.options ? `${String.fromCharCode(65 + activeQ.correctIndex)}) ${activeQ.options[activeQ.correctIndex]}` : "To'g'ri javob");
        return {
          sender: "ai",
          text: `🎯 **Hozirgi Imtihon Savoli (${activeQ.section || 'Savol #' + (tc.currentQuestionIdx + 1)}) Tahlili:**\n\n` +
            `❓ **Savol Matni:**\n*"${activeQ.prompt || activeQ.question || ''}"*\n\n` +
            `✅ **To'g'ri Javob:** **${ansFormatted}**\n\n` +
            `🧠 **Qadamma-qadam Yechish Mantig'i:**\n${activeQ.explanation || "Rasmiy Bluebook standarti bo'yicha yechim."}\n\n` +
            `💡 **AI Tavsiyasi:** Ushbu formulani eslab qoling va shoshilmasdan javob variantini belgilang!`,
          time,
          actions: [
            { label: "🧮 Desmosda Hisoblash", onClick: () => window.desmosManager?.toggle(true) },
            { label: "📐 Formulalar Varaqasi", onClick: () => window.testCenter?.showFormulaSheet() },
            { label: "🔊 Ovozda Tinglash", onClick: () => this.speakMessage(activeQ.explanation || "Yechim") }
          ]
        };
      }
    }

    // 6. MATH EQUATION SOLVER (Quadratic, Linear, Arithmetic, Percentages)
    const mathSol = this.solveMathEquation(rawQuery);
    if (mathSol) {
      return mathSol;
    }

    // 7. DATABASE QUESTION SEARCH (by ID or keywords or question number)
    const dbQuestion = this.findQuestionInDatabase(q);
    if (dbQuestion) {
      let ansFormatted = "";
      if (dbQuestion.isGridIn) {
        ansFormatted = dbQuestion.correctAnswer || "Son qiymat";
      } else if (dbQuestion.options && typeof dbQuestion.correctIndex === "number") {
        ansFormatted = `${String.fromCharCode(65 + dbQuestion.correctIndex)}) ${dbQuestion.options[dbQuestion.correctIndex]}`;
      } else {
        ansFormatted = dbQuestion.correctAnswer || "To'g'ri variant";
      }

      let optionsList = "";
      if (dbQuestion.options && Array.isArray(dbQuestion.options)) {
        optionsList = "\n📋 **Variantlar:**\n" + dbQuestion.options.map((opt, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const isCorrect = idx === dbQuestion.correctIndex;
          return `${letter}) ${opt} ${isCorrect ? "✅ *(To'g'ri javob)*" : ""}`;
        }).join("\n") + "\n\n";
      }

      const promptText = dbQuestion.question || dbQuestion.prompt || "";
      const isMathQ = (dbQuestion.section && dbQuestion.section.toLowerCase().includes("math")) || dbQuestion.exam === "SAT";

      return {
        sender: "ai",
        text: `🎯 **2026 Rasmiy Savollar Bazasidan Topildi (${dbQuestion.section || dbQuestion.id}):**\n\n` +
          `📌 **Savol ID:** \`${dbQuestion.id}\` • **Qiyinlik:** ${dbQuestion.difficulty || 'Medium'}\n\n` +
          (dbQuestion.stimulus ? `📄 **Kontekst:**\n*"${dbQuestion.stimulus.trim()}"*\n\n` : "") +
          `❓ **Savol:**\n*"${promptText}"*\n\n` +
          optionsList +
          `✅ **To'g'ri Javob:** **${ansFormatted}**\n\n` +
          `🧠 **Qadamma-qadam Yechim Mantig'i:**\n${dbQuestion.explanation}\n\n` +
          (isMathQ ? `💡 **Desmos usuli:** Ushbu tenglamani Desmos kalkulyatoriga kiritib 10 soniyada tekshirishingiz mumkin.` : `💡 **AI Tavsiyasi:** Matndagi kalit so'zlarga va kontekstual ma'noga e'tibor bering.`),
        time,
        actions: [
          ...(isMathQ ? [{ label: "🧮 Desmosda Tekshirish", onClick: () => window.desmosManager?.toggle(true) }] : []),
          { label: "🚀 Ushbu Testni Boshlash", onClick: () => window.testCenter?.startOfficialExam(dbQuestion.exam || "SAT", dbQuestion.id) },
          { label: "🔊 Ovozda Tinglash", onClick: () => this.speakMessage(dbQuestion.explanation) }
        ]
      };
    }

    // 8. GREETINGS & CASUAL INTERACTION
    if (q === "salom" || q === "assalom" || q.includes("assalomu alaykum") || q.includes("qalaysiz") || q.includes("qalesan") || q === "hi" || q === "hello") {
      return {
        sender: "ai",
        text: "Va alaykum assalom! Xush kelibsiz! 🎯\n\nMen **YU AI** — 2026-yilgi **Digital SAT** va **IELTS** rasmiy imtihon murabbiyingizman. Barcha tizimlar to'liq va faol ishlamoqda!\n\nSizga qaysi bo'lim bo'yicha yordam beray?",
        time,
        actions: [
          { label: "🧮 Desmos Kalkulyatorini Ochish", onClick: () => window.desmosManager?.toggle(true) },
          { label: "🎯 Digital SAT Math Testi", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") },
          { label: "🎙️ Speaking Shadowing qilish", onClick: () => window.shadowingTrainer?.openTrainer() },
          { label: "📖 SAT Reading & Writing", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_RW") },
          { label: "🇬🇧 IELTS Academic Testi", onClick: () => window.testCenter?.startOfficialExam("IELTS", null, "IELTS_READING") }
        ]
      };
    }

    // 9. PARABOLA & KVADRATIK FUNKSIYALAR
    if (q.includes("parabola") || q.includes("kvadrat") || q.includes("quadratic") || q.includes("diskriminant") || q.includes("discriminant") || q.includes("vertex")) {
      return this.getParabolaExplanation(time);
    }

    // 10. DOIRA TENGLAMASI & GEOMETRIYA
    if (q.includes("doira") || q.includes("circle") || q.includes("aylana") || q.includes("radius") || q.includes("tangent")) {
      return this.getCircleExplanation(time);
    }

    // 11. TRIANGLES & TRIGONOMETRY
    if (q.includes("uchburchak") || q.includes("triangle") || q.includes("trigonometriya") || q.includes("pifagor") || q.includes("pythagor") || q.includes("sinus") || q.includes("cosinus")) {
      return this.getTrigonometryExplanation(time);
    }

    // 12. PERCENTAGES & RATIOS
    if (q.includes("foiz") || q.includes("percent") || q.includes("nisbat") || q.includes("ratio") || q.includes("ehtimollik") || q.includes("probability")) {
      return this.getPercentageExplanation(time);
    }

    // 13. SAT GRAMMAR / INVERSIYA / SEMICOLON / PUNCTUATION
    if (q.includes("inversiya") || q.includes("semicolon") || q.includes("vergul") || q.includes("punctuation") || q.includes("tinish") || q.includes("grammar") || q.includes("appositive")) {
      return this.getGrammarExplanation(time);
    }

    // 14. IELTS READING (TRUE / FALSE / NOT GIVEN)
    if (q.includes("true") || q.includes("false") || q.includes("not given") || q.includes("tfng") || q.includes("heading")) {
      return this.getReadingExplanation(time);
    }

    // 15. IELTS WRITING TASK 2
    if (q.includes("writing") || q.includes("task 2") || q.includes("insho") || q.includes("essay") || q.includes("thesis")) {
      return {
        sender: "ai",
        text: "**IELTS Writing Task 2 — 2026 Oltin Shablon (Band 8.5+):** ✍️\n\n" +
          "Rasmiy Cambridge talabi bo'yicha insho 4 ta xatboshidan iborat bo'lishi lozim:\n" +
          "1. **Introduction (2-3 jumla):** Mavzuni parafraz qilish + Aniq o'z pozitsiyangiz (Thesis Statement).\n" +
          "2. **Body Paragraph 1 (5-6 jumla):** 1-asosiy dalil + uning chuqur tahlili + real misol.\n" +
          "3. **Body Paragraph 2 (5-6 jumla):** 2-dalil yoki qarama-qarshi tomon tahlili + misol.\n" +
          "4. **Conclusion (2 jumla):** Yuqoridagi fikrlarni yangi so'zlar bilan xulosalash.\n\n" +
          "Hozir 2026-yilgi rasmiy Task 2 topshirig'ini tahlil qilmoqchimisiz?",
        time,
        actions: [
          { label: "✍️ IELTS Writing Task 2 Namunasini Ko'rish", onClick: () => window.testCenter?.startOfficialExam("IELTS", "ielts-2026-w1") },
          { label: "📚 Savollar Bazasiga O'tish", onClick: () => window.location.href = "questions.html" }
        ]
      };
    }

    // 16. USTOZLAR TEST QO'SHISHI
    if (q.includes("test qo'shish") || q.includes("savol qo'shish") || q.includes("ustoz") || q.includes("muallif") || q.includes("yangi test")) {
      return {
        sender: "ai",
        text: "**Ustozlar Mualliflik Test Studiyasi:** 👨‍🏫\n\n" +
          "YU Academy platformasida o'qituvchilar va repetitorlar o'zlarining shaxsiy testlarini qo'shishlari mumkin:\n" +
          "• Test varianti (SAT yoki IELTS), fan moduli va qiyinlik darajasini tanlang;\n" +
          "• Savol matni, variantlar va to'g'ri javobni kiriting;\n" +
          "• Rasm yoki grafik fayllarni bir zumda biriktiring (Drag & Drop);\n" +
          "• O'quvchilar uchun to'liq tushuntirish va Desmos formulasini yozing.\n\n" +
          "Test qo'shish studiyasini ochdim:",
        time,
        actions: [
          { label: "👨‍🏫 Test Qo'shish Oynasini Ochish", onClick: () => window.teacherStudio?.openModal() },
          { label: "📚 Savollar Bazasini Ko'rish", onClick: () => window.location.href = "questions.html" }
        ],
        autoAction: () => {
          window.teacherStudio?.openModal();
        }
      };
    }

    // 17. 1500+ SAT & 8.5 IELTS STRATEGIYASI
    if (q.includes("1500") || q.includes("8.5") || q.includes("strategiya") || q.includes("tayyorlanish") || q.includes("ball")) {
      return {
        sender: "ai",
        text: "**1500+ SAT va 8.5 IELTS ga Erishish Ilmiy Strategiyasi:** 🏆\n\n" +
          "1. **Desmosni mukammal o'zlashtiring:** SAT Math da 44 ta savolning kamida 15-20 tasini Desmos orqali 10 soniyada yechish mumkin.\n" +
          "2. **Har bir xatoni tahlil qiling:** Test ishlagandan keyin xato savolingizni AI tahlilida ko'rib, qoidasini daftarga yozing.\n" +
          "3. **Kunlik 15 daqiqa Shadowing:** IELTS Speaking da yuqori ball olishning kaliti — so'zlarning ravon ulanishi (connected speech).\n\n" +
          "Hozir qaysi imtihon sinovini boshlaymiz?",
        time,
        actions: [
          { label: "⏱️ To'liq Digital SAT Mock (98 Savol)", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_FULL_MOCK") },
          { label: "⏱️ To'liq IELTS Academic Mock (80 Savol)", onClick: () => window.testCenter?.startOfficialExam("IELTS", null, "IELTS_FULL_MOCK") },
          { label: "🧮 Desmos Kalkulyator", onClick: () => window.desmosManager?.toggle(true) }
        ]
      };
    }

    // 18. GENERAL SAT / IELTS SWITCHER
    if (q.includes("sat") || q.includes("bluebook")) {
      return {
        sender: "ai",
        text: "**Digital SAT 2026 Rasmiy Savollar Portali:** 🎯\n\nSiz uchun **SAT 2026** bazasini ochdim! Unda:\n• Advanced Algebra & Discriminant\n• Circle Geometry & Tangent Slopes\n• Reading & Writing: Appositives, Punctuation & Synthesis\n\n1-ga-1 Bluebook imtihon simulyatorini boshlaysizmi?",
        time,
        actions: [
          { label: "⏱️ SAT Math (44 Savol) Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") },
          { label: "📖 SAT Reading & Writing (54 Savol)", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_RW") },
          { label: "🧮 Desmos Kalkulyator", onClick: () => window.desmosManager?.toggle(true) }
        ],
        autoAction: () => {
          window.app?.switchExamTab("SAT");
          window.app?.notify("YU AI: SAT 2026 rasmiy savollari ochildi! 🎯");
        }
      };
    }

    if (q.includes("ielts")) {
      return {
        sender: "ai",
        text: "**IELTS 2026 Academic Rasmiy Savollar Portali:** 🇬🇧\n\nSiz uchun **IELTS 2026** bazasini ochdim! Unda:\n• Reading: Academic Passages (True/False/Not Given)\n• Listening: Section 1-4 rasmiy audio topshiriqlari\n• Speaking: Cue Card & Native Voice Shadowing\n• Writing Task 2: Ilmiy insho tuzilishi\n\nImtihonni hozir boshlaymizmi?",
        time,
        actions: [
          { label: "⏱️ IELTS Reading Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("IELTS", null, "IELTS_READING") },
          { label: "🎙️ Speaking Shadowing qilish", onClick: () => window.shadowingTrainer?.openTrainer() },
          { label: "✍️ Writing Task 2 Ishlash", onClick: () => window.testCenter?.startOfficialExam("IELTS", "ielts-2026-w1") }
        ],
        autoAction: () => {
          window.app?.switchExamTab("IELTS");
          window.app?.notify("YU AI: IELTS 2026 rasmiy savollari ochildi! 🇬🇧");
        }
      };
    }

    // 19. INTELLIGENT HELPFUL FALLBACK WITH SMART SUGGESTIONS
    return {
      sender: "ai",
      text: `Sizning so'rovingiz: **"${rawQuery}"** 🧠\n\nMen **YU AI** murabbiyingiz sifatida sizga har tomonlama yordam berishga tayyorman:\n\n• 🧮 Matematik tenglamani yozing: masalan \`2x + 5 = 15\` yoki \`x^2 - 5x + 6 = 0\`;\n• 📖 So'z tarjimasini so'rang: masalan *'ubiquitous tarjimasi'* yoki *'samarali inglizchasi'*;\n• 🎙️ Nutq mashqi: *'shedoving'*, *'speaking'* deb yozing;\n• 🎯 Yoki quyidagi tezkor tugmalardan birini bosing:`,
      time,
      actions: [
        { label: "🧮 Desmos Kalkulyatorini Ochish", onClick: () => window.desmosManager?.toggle(true) },
        { label: "🎙️ Shadowing Studiyasini Ochish", onClick: () => window.shadowingTrainer?.openTrainer() },
        { label: "📖 Ubiquitous so'zi tarjimasi", command: "ubiquitous tarjimasi nima" },
        { label: "📝 Hozirgi test savolini tushuntir", onClick: () => this.explainCurrentTestQuestion() }
      ]
    };
  }

  solveMathEquation(query) {
    const time = this.getCurrentTime();
    const clean = query.replace(/\s+/g, "");

    // 1. Quadratic Equation: ax^2 + bx + c = d (or x^2 - 5x + 6 = 0)
    const quadMatch = clean.match(/([+-]?\d*\.?\d*)x\^?2([+-]\d*\.?\d*x)?([+-]\d+\.?\d*)?=([+-]?\d+\.?\d*)/i);
    if (quadMatch) {
      const aStr = quadMatch[1];
      const bxStr = quadMatch[2];
      const cStr = quadMatch[3];
      const dStr = quadMatch[4];

      let a = 1.0;
      if (aStr === "-" || aStr === "-0") a = -1.0;
      else if (aStr && aStr !== "+") a = parseFloat(aStr);

      let b = 0.0;
      if (bxStr) {
        const bVal = bxStr.replace(/[xX]/g, "");
        if (!bVal || bVal === "+") b = 1.0;
        else if (bVal === "-") b = -1.0;
        else b = parseFloat(bVal);
      }

      const c = cStr ? parseFloat(cStr) : 0.0;
      const d = dStr ? parseFloat(dStr) : 0.0;
      const cEff = c - d;

      const D = b * b - 4 * a * cEff;
      const xVertex = -b / (2 * a);
      const yVertex = a * xVertex * xVertex + b * xVertex + cEff;

      let rootExplanation = "";
      let rootsStr = "";

      if (D > 0) {
        const sqrtD = Math.sqrt(D);
        const x1 = (-b + sqrtD) / (2 * a);
        const x2 = (-b - sqrtD) / (2 * a);
        const x1F = Number.isInteger(x1) ? x1 : x1.toFixed(3);
        const x2F = Number.isInteger(x2) ? x2 : x2.toFixed(3);
        rootsStr = `x₁ = ${x1F}, x₂ = ${x2F}`;
        rootExplanation = `Diskriminant $D > 0$ bo'lgani uchun tenglama **2 ta haqiqiy ildizga** ega:\n` +
          `• $x_1 = \\frac{-(${b}) + \\sqrt{${D}}}{2(${a})} = ${x1F}$\n` +
          `• $x_2 = \\frac{-(${b}) - \\sqrt{${D}}}{2(${a})} = ${x2F}$`;
      } else if (D === 0) {
        const x1 = -b / (2 * a);
        const x1F = Number.isInteger(x1) ? x1 : x1.toFixed(3);
        rootsStr = `x = ${x1F}`;
        rootExplanation = `Diskriminant $D = 0$ bo'lgani uchun tenglama **1 ta karrali ildizga** (parabola x-o'qiga urinadi) ega:\n` +
          `• $x = \\frac{-(${b})}{2(${a})} = ${x1F}$`;
      } else {
        rootsStr = `Haqiqiy ildiz mavjud emas (D < 0)`;
        rootExplanation = `Diskriminant $D = ${D} < 0$ bo'lgani uchun tenglama **haqiqiy sonlar to'plamida ildizga ega emas** (parabola x-o'qini kesib o'tmaydi).`;
      }

      const vertexStr = `(${Number.isInteger(xVertex) ? xVertex : xVertex.toFixed(2)}, ${Number.isInteger(yVertex) ? yVertex : yVertex.toFixed(2)})`;

      const desmosFormula = `y = ${a !== 1 ? a : ''}x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${cEff >= 0 ? '+ ' + cEff : '- ' + Math.abs(cEff)}`;

      return {
        sender: "ai",
        text: `🎯 **Kvadratik Tenglamaning Qadamma-qadam Yechimi (SAT Math):** 📐\n\n` +
          `Tenglama: \`${clean}\`\n\n` +
          `1. **Standart ko'rinish va koeffitsientlar:**\n` +
          `   $a = ${a}, \\quad b = ${b}, \\quad c = ${cEff}$\n\n` +
          `2. **Diskriminant ($D = b^2 - 4ac$):**\n` +
          `   $D = (${b})^2 - 4(${a})(${cEff}) = ${b*b} - (${4*a*cEff}) = ${D}$\n\n` +
          `3. **Ildizlar:**\n` +
          `   ${rootExplanation}\n\n` +
          `4. **Parabola uchi (Vertex):**\n` +
          `   Cho'qqi koordinatasi: $V = ${vertexStr}$\n\n` +
          `✅ **Javob:** **${rootsStr}**\n\n` +
          `💡 **Desmos usuli:** Ushbu ifodani Desmosga \`${desmosFormula}\` deb kiritsangiz, x-o'qidagi kesishish nuqtalarini bosish orqali 5 soniyada javobni ko'rasiz!`,
        time,
        actions: [
          { label: "🧮 Desmosda Parabolani Chizish", onClick: () => {
              window.desmosManager?.toggle(true);
              window.desmosManager?.setExpression("ai_quad", desmosFormula, "#2563EB");
            }
          },
          { label: "🔊 Ovozda Tinglash", onClick: () => this.speakMessage(`Kvadrat tenglama yechildi. Javob: ${rootsStr}`) },
          { label: "🎯 SAT Math Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") }
        ],
        autoAction: () => {
          window.desmosManager?.setExpression("ai_quad", desmosFormula, "#2563EB");
        }
      };
    }

    // 2. Linear Equation: ax + b = c (e.g. 2x + 5 = 15 or 3x - 7 = 14 or 4x = 24)
    const linMatch = clean.match(/([+-]?\d*\.?\d*)x([+-]\d+\.?\d*)?=([+-]?\d+\.?\d*)/i);
    if (linMatch && !clean.includes("x^2") && !clean.includes("x²")) {
      const aStr = linMatch[1];
      const bStr = linMatch[2];
      const cStr = linMatch[3];

      let a = 1.0;
      if (aStr === "-" || aStr === "-0") a = -1.0;
      else if (aStr && aStr !== "+") a = parseFloat(aStr);

      const b = bStr ? parseFloat(bStr) : 0.0;
      const c = parseFloat(cStr);

      if (a !== 0) {
        const step1 = c - b;
        const x = step1 / a;
        const xF = Number.isInteger(x) ? x : x.toFixed(3);

        const desmosEq1 = `y = ${a !== 1 ? a : ''}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}`;
        const desmosEq2 = `y = ${c}`;

        return {
          sender: "ai",
          text: `🎯 **Chiziqli Tenglamaning Qadamma-qadam Yechimi (SAT Math):** 📐\n\n` +
            `Tenglama: \`${clean}\`\n\n` +
            `1. **Ozod hadni o'ng tomonga o'tkazamiz:**\n` +
            `   $${a !== 1 ? a : ''}x = ${c} ${b >= 0 ? '- ' + b : '+ ' + Math.abs(b)}$\n` +
            `   $${a !== 1 ? a : ''}x = ${step1}$\n\n` +
            `2. **x ning koeffitsientiga bo'lamiz:**\n` +
            `   $x = \\frac{${step1}}{${a}} = ${xF}$\n\n` +
            `✅ **To'g'ri Javob:** **x = ${xF}**\n\n` +
            `💡 **Desmos usuli:** Chap tomonni \`${desmosEq1}\` va o'ng tomonni \`${desmosEq2}\` deb kiritib, kesishish nuqtasini bosing — x koordinatasi **${xF}** bo'ladi!`,
          time,
          actions: [
            { label: "🧮 Desmosda Tekshirish", onClick: () => {
                window.desmosManager?.toggle(true);
                window.desmosManager?.setExpression("ai_lin1", desmosEq1, "#2563EB");
                window.desmosManager?.setExpression("ai_lin2", desmosEq2, "#DC2626");
              }
            },
            { label: "🔊 Ovozda Tinglash", onClick: () => this.speakMessage(`Tenglama yechildi. x teng ${xF}`) },
            { label: "🎯 SAT Math Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") }
          ]
        };
      }
    }

    // 3. Percent Calculation (e.g. 2400 ning 20 foizi or 20% of 2400)
    const pctMatch = query.match(/(\d+\.?\d*)\s*(?:ning\s*)?(\d+\.?\d*)\s*(?:foizi|%|percent)/i) ||
                     query.match(/(\d+\.?\d*)\s*%\s*(?:of|dan)?\s*(\d+\.?\d*)/i);
    if (pctMatch) {
      let num = parseFloat(pctMatch[1]);
      let pct = parseFloat(pctMatch[2]);
      if (query.includes("%") && query.indexOf("%") < query.indexOf(pctMatch[2])) {
        // reversed order
        const temp = num;
        num = pct;
        pct = temp;
      }
      const res = (num * pct) / 100;
      const resF = Number.isInteger(res) ? res : res.toFixed(2);

      return {
        sender: "ai",
        text: `🎯 **Foiz Hisoblash Qoidasi (SAT Problem Solving):** 📊\n\n` +
          `Savol: **${num} ning ${pct}% foizi nechaga teng?**\n\n` +
          `1. **Formula:** $N \\times \\frac{P}{100}$\n` +
          `2. **Hisoblash:** $${num} \\times \\frac{${pct}}{100} = ${num} \\times ${pct/100} = ${resF}$\n\n` +
          `✅ **Javob:** **${resF}**\n\n` +
          `💡 **Imtihon maslahati:** Qolgan qismini topish so'ralsa: $${num} - ${resF} = ${num - res}$.`,
        time,
        actions: [
          { label: "🧮 Desmos Kalkulyator", onClick: () => window.desmosManager?.toggle(true) },
          { label: "🎯 Problem Solving Savollari", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") }
        ]
      };
    }

    return null;
  }

  // ================= 6. DATABASE QUESTION SEARCHER =================
  findQuestionInDatabase(query) {
    const db = window.EXAM_DATABASE_2026 || (typeof EXAM_DATABASE_2026 !== "undefined" ? EXAM_DATABASE_2026 : null);
    if (!db) return null;

    const allQuestions = [...(db.sat || []), ...(db.ielts || [])];
    if (allQuestions.length === 0) return null;

    const qLower = query.toLowerCase().trim();

    // 1. Direct ID match
    const idMatch = allQuestions.find(q => q.id.toLowerCase() === qLower || qLower.includes(q.id.toLowerCase()));
    if (idMatch) return idMatch;

    // 2. Question number match (e.g. "1-savol", "savol 1", "savol #1", "q1", "1 savol")
    const numMatch = qLower.match(/(?:savol|q|question)\s*#?\s*(\d+)|(\d+)\s*[-_]?\s*(?:savol|question)/i);
    if (numMatch) {
      const idx = parseInt(numMatch[1] || numMatch[2], 10) - 1;
      if (idx >= 0 && idx < allQuestions.length) {
        return allQuestions[idx];
      }
    }

    // 3. Keyword Match in stimulus / prompt / tags
    const keywords = qLower.split(/\s+/).filter(w => w.length >= 4 && !["sara", "siri", "alexa", "menga", "ochib", "ber", "iltimos", "qanday", "uchun", "kerak", "nima", "qaysi", "bilan", "tushuntir", "yechib", "korsat", "desosso", "desmos", "shedoving", "shadowing", "tarjima", "rajima"].includes(w));
    if (keywords.length > 0) {
      let bestQ = null;
      let maxScore = 0;

      for (const q of allQuestions) {
        const fullText = `${q.id} ${q.question || q.prompt || ''} ${q.stimulus || ''} ${(q.tags || []).join(' ')} ${q.section || ''}`.toLowerCase();
        let score = 0;
        for (const kw of keywords) {
          if (fullText.includes(kw)) score += 2;
        }
        if (score > maxScore && score >= 2) {
          maxScore = score;
          bestQ = q;
        }
      }

      if (bestQ) return bestQ;
    }

    return null;
  }

  // ================= 7. TOPIC MASTERCLASSES =================
  getParabolaExplanation(time) {
    return {
      sender: "ai",
      text: "**Parabola & Kvadrat Tenglamalar (SAT Math Masterclass):** 📐\n\n" +
        "1. **Umumiy ko'rinishi:** $y = ax^2 + bx + c$\n" +
        "2. **Uchining x-koordinatasi (Vertex):** $x_v = -\\frac{b}{2a}$\n" +
        "3. **Diskriminant ($D = b^2 - 4ac$):**\n" +
        "   • $D > 0$ bo'lsa: 2 ta haqiqiy ildiz (parabola x-o'qini 2 marta kesadi);\n" +
        "   • $D = 0$ bo'lsa: 1 ta yechim (parabola x-o'qiga urinadi);\n" +
        "   • $D < 0$ bo'lsa: haqiqiy yechim yo'q.\n\n" +
        "💡 **Desmos Layfxaki:** Tenglamani Desmosga kiriting va parabola cho'qqisini yoki x-kesishish nuqtalarini sichqoncha bilan bosing — sonlar darhol chiqadi!\n\nDesmosni ochib sinab ko'ramizmi?",
      time,
      actions: [
        { label: "🧮 Desmos Kalkulyatorini Ochish", onClick: () => window.desmosManager?.toggle(true) },
        { label: "🎯 SAT Math Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") }
      ],
      autoAction: () => {
        window.desmosManager?.toggle(true);
      }
    };
  }

  getCircleExplanation(time) {
    return {
      sender: "ai",
      text: "**Doira Tenglamasi & Urinma Qoidasi (SAT Geometry):** ⭕\n\n" +
        "1. **Doira tenglamasi:** $(x - h)^2 + (y - k)^2 = r^2$\n" +
        "   • Markazi: $(h, k)$\n" +
        "   • Radiusi: $r$\n" +
        "2. **Aylana uzunligi:** $C = 2\\pi r$\n" +
        "3. **Doira yuzi:** $A = \\pi r^2$\n" +
        "4. **Oltin Qoida:** Doiraga o'tkazilgan urinma to'g'ri chiziq (tangent) urinish nuqtasidan o'tgan radiusga doimo **perpendikulyar** bo'ladi ($m_1 \\cdot m_2 = -1$)!\n\n" +
        "Desmosda doirani chizib ko'rishni istaysizmi?",
      time,
      actions: [
        { label: "🧮 Desmosda Doira Chizish", onClick: () => window.desmosManager?.toggle(true) },
        { label: "🎯 SAT Math Geometriya Savollari", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") }
      ],
      autoAction: () => {
        window.desmosManager?.toggle(true);
      }
    };
  }

  getTrigonometryExplanation(time) {
    return {
      sender: "ai",
      text: "**Uchburchaklar & Trigonometriya Formulalari (SAT Math):** 📐\n\n" +
        "1. **Pifagor Teoremasi:** To'g'ri burchakli uchburchakda $a^2 + b^2 = c^2$\n" +
        "2. **Asosiy Pifagor Uchliklari (SAT Sevimli Sonlari):**\n" +
        "   • 3 - 4 - 5 (va 6-8-10)\n" +
        "   • 5 - 12 - 13\n" +
        "   • 7 - 24 - 25\n" +
        "   • 8 - 15 - 17\n" +
        "3. **Maxsus Uchburchaklar:**\n" +
        "   • $30^\\circ - 60^\\circ - 90^\\circ$: tomonlar nisbati $x, \\ x\\sqrt{3}, \\ 2x$\n" +
        "   • $45^\\circ - 45^\\circ - 90^\\circ$: tomonlar nisbati $x, \\ x, \\ x\\sqrt{2}$\n" +
        "4. **SOH CAH TOA:** $\\sin = \\frac{qarshi}{gip}, \\ \\cos = \\frac{yondosh}{gip}, \\ \\tan = \\frac{qarshi}{yondosh}$\n" +
        "5. **SAT Oltin Qoidasi:** $\\sin(x) = \\cos(90^\\circ - x)$!",
      time,
      actions: [
        { label: "🧮 Desmos Kalkulyator", onClick: () => window.desmosManager?.toggle(true) },
        { label: "📐 Formulalar Varaqasi", onClick: () => window.testCenter?.showFormulaSheet() }
      ]
    };
  }

  getPercentageExplanation(time) {
    return {
      sender: "ai",
      text: "**Foizlar & Ma'lumotlar Tahlili (SAT Problem Solving):** 📊\n\n" +
        "1. **Foiz o'zgarishi (Percent Change):**\n" +
        "   $\\text{O'zgarish} = \\frac{\\text{Yangi qiymat} - \\text{Eski qiymat}}{\\text{Eski qiymat}} \\times 100\\%$\n" +
        "2. **Eksponentsial o'sish / pasayish:**\n" +
        "   • O'sish: $A(t) = P(1 + r)^t$\n" +
        "   • Kamayish: $A(t) = P(1 - r)^t$\n" +
        "3. **O'rtacha qiymatlar:**\n" +
        "   • **Mean (O'rtacha arifmetik):** Hamma sonlar yig'indisi / sonlar soni\n" +
        "   • **Median (Mediana):** O'sish tartibida terilganda qoq o'rtadagi son\n" +
        "   • **Mode (Moda):** Eng ko'p takrorlangan son",
      time,
      actions: [
        { label: "🎯 Problem Solving Savollarini Yechish", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH") },
        { label: "🧮 Desmosda Hisoblash", onClick: () => window.desmosManager?.toggle(true) }
      ]
    };
  }

  getGrammarExplanation(time) {
    return {
      sender: "ai",
      text: "**SAT Reading & Writing — Tinish Belgilari & Inversiya:** 📖\n\n" +
        "1. **Nuqtali vergul (;) qoidasi:**\n" +
        "Nuqtali vergul nuqta (.) bilan 100% teng kuchli. U faqat ikkita to'liq mustaqil gapni (Independent Clauses) bir-biriga bog'lash uchun ishlatiladi!\n" +
        "2. **Inversiya (Inversion):**\n" +
        "Agar gap *Rarely, Seldom, Barely, Scarcely, Not only* kabi inkor yoki cheklovchi so'zlar bilan boshlansa, savol shaklidek yordamchi fe'l egadan oldinga chiqadi:\n" +
        "*Masalan:* 'Seldom do students realize...' (Students realize emas!).\n\n" +
        "Ushbu qoidani amalda sinab ko'ramizmi?",
      time,
      actions: [
        { label: "📖 SAT Reading & Writing Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_RW") },
        { label: "📚 Savollar Bazasini Ochish", onClick: () => window.location.href = "questions.html" }
      ]
    };
  }

  getReadingExplanation(time) {
    return {
      sender: "ai",
      text: "**IELTS Reading: True / False / Not Given Strategiyasi:** 🇬🇧\n\n" +
        "Imtihon topshiruvchilar eng ko'p xato qiladigan nuqta — False bilan Not Given orasidagi farq:\n\n" +
        "• **TRUE:** Matndagi jumla bilan bayonot 100% bir xil ma'noni anglatadi (faqat sinonimlar orqali beriladi).\n" +
        "• **FALSE:** Bayonot matndagi ma'lumotga bevosita ZID (qarama-qarshi). Agar matndagi gap 'X' desa, bayonot 'not X' deydi.\n" +
        "• **NOT GIVEN:** Matnda mavzu tilga olingan bo'lishi mumkin, lekin aynan sizdan so'ralayotgan aniq fakt yoki da'vo matnda yo'q (tasdiqlanmagan ham, inkor ham qilinmagan).\n\n" +
        "Haqiqiy 2026 IELTS Reading matnida buni sinab ko'ramizmi?",
      time,
      actions: [
        { label: "⏱️ IELTS Reading Testini Boshlash", onClick: () => window.testCenter?.startOfficialExam("IELTS", null, "IELTS_READING") },
        { label: "📚 Savollar Bazasiga O'tish", onClick: () => window.location.href = "questions.html" }
      ]
    };
  }

  // ================= 8. RENDER MESSAGES =================
  renderMessages() {
    const container = document.getElementById("ai-chat-messages");
    if (!container) return;

    container.innerHTML = "";

    this.messages.forEach((msg, idx) => {
      const msgDiv = document.createElement("div");
      msgDiv.className = `ai-message ${msg.sender === "user" ? "user-msg" : "ai-msg"}`;

      let formattedText = msg.text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/\$([^\$]+)\$/g, "<code class='math-code'>$1</code>")
        .replace(/\n/g, "<br>");

      let actionsHtml = "";
      if (msg.actions && msg.actions.length > 0) {
        actionsHtml = `<div class="ai-action-buttons">` +
          msg.actions.map((act, aIdx) => `
            <button class="ai-action-btn" data-msg-idx="${idx}" data-act-idx="${aIdx}">
              ${act.label}
            </button>
          `).join("") +
          `</div>`;
      }

      const isAI = msg.sender !== "user";
      const speakBtnHtml = isAI ? `<button class="ai-msg-speak-btn" data-msg-idx="${idx}" title="Ovozda tinglash">🔊</button>` : "";

      msgDiv.innerHTML = `
        <div class="msg-bubble">
          <div class="msg-sender-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span class="msg-sender-tag">${msg.sender === "user" ? "Siz" : "🤖 YU AI 2026"}</span>
            ${speakBtnHtml}
          </div>
          <div class="msg-content">${formattedText}</div>
          ${actionsHtml}
          <div class="msg-time">${msg.time}</div>
        </div>
      `;

      container.appendChild(msgDiv);
    });

    container.querySelectorAll(".ai-msg-speak-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const msgIdx = parseInt(e.currentTarget.getAttribute("data-msg-idx"));
        const message = this.messages[msgIdx];
        if (message) {
          this.speakMessage(message.text);
        }
      });
    });

    container.querySelectorAll(".ai-action-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const msgIdx = parseInt(e.currentTarget.getAttribute("data-msg-idx"));
        const actIdx = parseInt(e.currentTarget.getAttribute("data-act-idx"));
        const action = this.messages[msgIdx]?.actions?.[actIdx];

        if (action) {
          if (typeof action.onClick === "function") {
            action.onClick();
          } else if (action.command) {
            this.processUserQuery(action.command);
          } else if (action.label) {
            const lbl = action.label.toLowerCase();
            if (lbl.includes("desmos") && (lbl.includes("och") || lbl.includes("kalkulyator"))) {
              window.desmosManager?.toggle(true);
            } else if (lbl.includes("hozirgi") || lbl.includes("test savol")) {
              this.explainCurrentTestQuestion();
            } else if (lbl.includes("sat math")) {
              window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH");
            } else if (lbl.includes("shadowing") || lbl.includes("speaking")) {
              window.shadowingTrainer?.openTrainer();
            } else if (lbl.includes("reading")) {
              window.testCenter?.startOfficialExam("SAT", null, "SAT_RW");
            } else if (lbl.includes("ielts")) {
              window.testCenter?.startOfficialExam("IELTS", null, "IELTS_READING");
            } else {
              this.processUserQuery(action.label);
            }
          }
        }
      });
    });

    container.scrollTop = container.scrollHeight;
  }

  showTypingIndicator(show) {
    let indicator = document.getElementById("ai-typing-indicator");
    if (!indicator) {
      indicator = document.createElement("div");
      indicator.id = "ai-typing-indicator";
      indicator.className = "ai-typing";
      indicator.innerHTML = `<span></span><span></span><span></span> <em>YU AI 2026 fikrlamoqda...</em>`;
      const container = document.getElementById("ai-chat-messages");
      if (container) container.appendChild(indicator);
    }
    indicator.style.display = show ? "flex" : "none";
    const container = document.getElementById("ai-chat-messages");
    if (container) container.scrollTop = container.scrollHeight;
  }

  speakMessage(text) {
    if (!("speechSynthesis" in window)) {
      window.app?.notify("Brauzeringiz ovozli nutqni qo'llab-quvvatlamaydi.");
      return;
    }
    window.speechSynthesis.cancel();
    
    // Clean text of markdown formatting and emojis for speech
    const clean = text
      .replace(/<[^>]+>/g, " ")
      .replace(/[*_#`$]/g, " ")
      .replace(/[🤖🎯🇬🇧🧮🎙️✍️💡✨🚀📐⭕📝❓✅🧠⚠️📊📌📄]/g, "")
      .trim();

    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 0.94;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const enhancedVoice = voices.find(v => (v.name.includes("Samantha") || v.name.includes("Ava") || v.name.includes("Daniel") || v.name.includes("Google") || v.name.includes("Natural")))
                         || voices.find(v => v.lang.startsWith("en"))
                         || voices[0];
      if (enhancedVoice) utterance.voice = enhancedVoice;
    }

    window.speechSynthesis.speak(utterance);
    window.app?.notify("🔊 YU AI ovozi yangramoqda...");
  }
}

// Global instance safe binding
if (!window.aiAssistant) {
  window.aiAssistant = new AIAssistant();
}