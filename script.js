/* ==========================================================================
   גלעד היימן — Portfolio
   Data pulled from Figma file "portfolio" (key: NyqnHpGwVPbP2GvlGp7koc).
   Only the "HomePage/Kibutzim" frame (node 4146:361) is finished in Figma —
   that project renders with its full image gallery below. The other seven
   projects are wired up with their real title/description text (already
   authored in the Figma file) and their rail thumbnail, but their gallery
   pages are still placeholders — swap in real images the same way Kibutzim's
   are wired once those frames are finished. Each project below lists the
   Figma node id of its frame so re-pulling design context later is a
   one-line lookup.
   ========================================================================== */

// Per-project tag/label lists live on each project object now (`tags`).
// DEFAULT_TAGS is the placeholder set for projects that haven't gotten
// their own labels yet — swap a project's `tags` field for its real list
// once Gilad gives it, same as description text and images are filled in
// one project at a time.
const DEFAULT_TAGS = [
  'תלוי מקום', 'פריפריה', 'תיעודי', 'רישום', 'צילום',
  'ניסיוני', 'אדריכלות', 'מחקר גרפי', 'ספקולטיבי', 'שיתוף פעולה',
];

const PROJECTS = [
  {
    id: 'ratner41',
    figmaNode: '4173:1049', // Ratner41
    title: 'רטנר 41',
    titleEn: 'Ratner 41',
    year: '2026',
    description: [
      '״רטנר 41״ הוא פרויקט מולטי-דיסציפלינרי, שנוצר מתוך שיתוף פעולה בין המחלקה לתקשורת חזותית ובית הספר לאדריכלות. הוא מלווה שיכון רכבת גנרי לכאורה בחיפה בשלב האחרון של חייו — בניין שעדיין מתפקד כמרחב מגורים אך כבר נמצא בסוף שלב חתימות הבעלים לפינוי-בינוי.',
      'דרך מסמכים ארכיוניים, תצלומים, ראיונות עם אנשי מקצוע ודיירים, הודעות ווטסאפ ומדיומים נוספים, הפרויקט חושף את מעגלי החיים של הבניין וחותם באפשרות לשימור אדפטיבי שלו כמרחב ציבורי פתוח-בנוי המחבר בין הרחוב, הוואדי והקהילה',
    ],
    descriptionEn: [
      '"Ratner 41" is a multidisciplinary project created through a collaboration between the Department of Visual Communication and the School of Architecture. It follows a seemingly generic railway-style housing block (shikun rakevet) in Haifa during the final stage of its life. The building, which still functions as a residential space but is already nearing the end of the owners\' signing phase for urban renewal (pinui-binui), is read here as a living body: one that was born out of the public housing promise of the 1960s, grew older with its tenants, and now faces uprooting.',
      'Through archival documents, photographs, interviews with professionals and tenants, WhatsApp messages, and other mediums, the project uncovers the life cycles of the building—nature and landscape, promise, habitation, erosion, another promise, parting, and the possibility of rebirth. As a concluding act, the project discusses the potential for adaptive preservation of the building as an open-built public space connecting the street, the wadi, and the community',
    ],
    tags: ['תלוי מקום', 'תיעודי', 'צילום', 'אדריכלות', 'מחקר גרפי', 'שיתוף פעולה'],
    tagsEn: ['Site-Specific', 'Documentary', 'Photography', 'Architecture', 'Visual Research', 'Collaboration'],
    // Optional per-project field (see renderInfoPanel/articleLink handling):
    // a bold, arrow-marked link to outside press coverage, sitting between
    // the description and the tags list. Only Ratner 41 has one so far — a
    // project without this field simply skips that block entirely.
    articleLink: {
      url: 'https://www.haaretz.co.il/gallery/architecture/2026-07-21/ty-article-magazine/.premium/0000019f-7fee-d4a5-a5ff-7fef255a0000?gift=854b42e628b84ce5be1a4750a29cf89f#google_vignette',
      label: 'לינק לכתבה בהארץ',
      labelEn: 'link to the article in HaAretz',
    },
    // Real documentation photography (the printed book on its own studio
    // backdrop), same convention as כאן היה עץ תות / שנת שלום: no matting,
    // full-bleed edge-to-edge, rail thumbnail reuses the gallery's own
    // first image. thumbBg/bg sampled from the photo's own backdrop tone.
    thumb: 'assets/gallery/ratner41-1.jpg',
    thumbBg: '#e7e5e0',
    bg: '#e7e5e0',
    galleryFullBleed: true,
    images: [
      'assets/gallery/ratner41-1.jpg',
      'assets/gallery/ratner41-2.jpg',
      'assets/gallery/ratner41-3.jpg',
      'assets/gallery/ratner41-4.jpg',
      'assets/gallery/ratner41-5.jpg',
      'assets/gallery/ratner41-6.jpg',
      'assets/gallery/ratner41-7.jpg',
      'assets/gallery/ratner41-8.jpg',
      'assets/gallery/ratner41-9.jpg',
      'assets/gallery/ratner41-10.jpg',
      'assets/gallery/ratner41-11.jpg',
    ],
    ready: true,
  },
  {
    id: 'kibutzim',
    figmaNode: '4146:361', // HomePage/Kibutzim — finished
    title: 'המעבדה לתרבות קיבוצית',
    titleEn: 'The Laboratory For Kibbutz Culture',
    year: '2026',
    description: [
      'המעבדה לתרבות קיבוצית חוקרת את הקיבוץ, כיום, בעת בה סוגיות של שיקום, שיתופיות, אקולוגיה, איחזור ושימור מבנים, צורות חיים חלופיות לעיר, נקשרות ועולות לדיון מחודש בשאלת הקיבוץ המשתנה.',
      'שיתוף הפעולה עם המעבדה נולד מתוך הבנה שפעולות המיפוי והמחקר הן בבסיס הפעולה העיצובית. העיצוב הגרפי הוא משתתף פעיל בסוגיות המחקר של המעבדה, ומשפיע על המטודולוגיות ונקודות המבט שלה.  חווית המשתמש באתר משקפת ומציפה את הסיפורים העולים מתוך תוצרי המחקר של המעבדה',
    ],
    descriptionEn: [
      'The Laboratory for Kibbutz Culture researches the kibbutz today, at a time when issues of rehabilitation, collectivism, ecology, the restoration and preservation of buildings, and alternative lifestyles to the city, are intertwined and resurfacing for renewed discussion regarding the changing kibbutz.',
      "The collaboration with the laboratory was born from the understanding that mapping and research activities are at the core of the design process. Graphic design is an active participant in the laboratory's research inquiries, influencing its methodologies and perspectives. The user experience on the website reflects and highlights the stories emerging from the laboratory's research outcomes",
    ],
    tags: ['עיצוב נתונים', 'אדריכלות', 'מבוסס מחקר', 'תלוי מקום'],
    tagsEn: ['Data Design', 'Architecture', 'Research-Based', 'Site-Specific'],
    // Rail thumbnail is the gallery's own first image (its poster frame),
    // shown inset on the project's own background color — same treatment
    // as the gallery panel itself, not a separately-cropped edge-to-edge
    // asset. `thumbFramed` tells renderRail() to use the inset layout.
    thumb: 'assets/gallery/kibutzim-1-poster.jpg',
    thumbBg: '#519a5d',
    thumbFramed: true,
    bg: '#519a5d',
    // The Figma frame has three stacked image slots (that's what makes this
    // column taller than the viewport and scrollable, like the rail). The
    // third one (node 4164:378, "3 4") has no image fill in Figma yet — it's
    // listed as `null` here so the gallery still renders at the correct
    // scrollable height; swap it for a real path once that slot is designed.
    // The first two slots are videos instead of plain images: `poster` is
    // each one's resting-state frame (shown when not hovered — extracted
    // from the video's own first frame), `sources` plays on loop while
    // hovered.
    images: [
      {
        poster: 'assets/gallery/kibutzim-1-poster.jpg',
        // Two encodes so whichever the browser supports is used — Safari
        // only reliably plays H.264 mp4, some Chromium builds only ship
        // with the royalty-free VP9/webm decoder.
        sources: [
          { src: 'assets/gallery/kibutzim-1.webm', type: 'video/webm' },
          { src: 'assets/gallery/kibutzim-1.mp4', type: 'video/mp4' },
        ],
      },
      {
        poster: 'assets/gallery/kibutzim-2-poster.jpg',
        sources: [
          { src: 'assets/gallery/kibutzim-2.webm', type: 'video/webm' },
          { src: 'assets/gallery/kibutzim-2.mp4', type: 'video/mp4' },
        ],
      },
      'assets/gallery/kibutzim-3.png',
    ],
    ready: true,
  },
  {
    id: 'schoken',
    figmaNode: '4164:383', // Schoken — text finished, gallery not yet designed
    title: 'מכון שוקן',
    titleEn: 'Schocken Institute',
    year: '2026',
    description: [
      'מכון שוקן הוא מוסד מחקר וותיק, המהווה מרחב לקיום ועידוד מחקר בתחום מדעי היהדות ותרבות הספר.',
      'תהליך ׳המיתוג מחדש׳ למכון חוזר ושואב מעקרונות העיצוב שהנחיל זלמן שוקן עם משה שפיצר ופרנציסקה ברוך, אך בה בזמן שואף להיות רלוונטי לערכים ולעשייה העכשווית של המכון',
    ],
    descriptionEn: [
      'The Schocken Institute is a long-standing research institution that serves as a space for conducting and promoting research in the fields of Jewish studies and book culture.',
      "The 'rebranding' process for the institute revisits and draws upon the design principles established by Salman Schocken alongside Moshe Spitzer and Franzisca Baruch, while simultaneously striving to be relevant to the contemporary values and activities of the institute",
    ],
    tags: ['ניסוח זהות גרפית', 'עיצוב לתרבות'],
    tagsEn: ['Visual Identity', 'Design for Culture'],
    // Temporary thumbnail (institute logo lockup) until the real gallery is designed.
    thumb: 'assets/thumbs/schoken.png',
    thumbBg: '#e7e8e9',
    bg: '#e7e8e9',
    // Higher-resolution re-export of the same logo lockup, as the
    // gallery's first image, so the page shows something real instead of
    // the "still being designed" placeholder. Each poster after it is
    // pre-composited (in the source asset itself) onto a bg-matching grey
    // canvas with its own margin, so — like the logo — it's rendered
    // full-bleed rather than matted: the two treatments are visually
    // identical here since the margin is already baked into the image,
    // and full-bleed is what picks up the standard divider (border-top
    // between stacked images, border-bottom on the last one) without
    // needing a one-off CSS rule for this project's matted case.
    images: ['assets/gallery/schocken-1.png', 'assets/gallery/schocken-poster-1.jpg', 'assets/gallery/schocken-poster-2.png', 'assets/gallery/schocken-poster-4.png', 'assets/gallery/schocken-poster-5.jpg'],
    galleryFullBleed: true,
    ready: true,
  },
  {
    id: 'mactoob',
    figmaNode: '4164:513', // Mactoob
    title: 'מַכְּתוּבּ',
    titleEn: 'Mactoob',
    year: '2024',
    description: [
      'מַכְּתוּבּ הוא פרויקט תרגום עצמאי השוכן בתוך מכון ון ליר, ירושלים. היצירות המתורגמות במסגרת הפרויקט, הן יצירות מופת מהספרות הערבית ומיועדות לקהל קורא העברית.',
      'שיתוף הפעולה עם מכתוב (במסגרת המעבדה לעיצוב חברתי בבצלאל) כלל עיצוב ופיתוח מחדש של אתר הארגון. במסגרת הפרוייקט גובשה שפה גרפית חדשה, וממשק אינטראקטיבי שמאפשר קריאה איטית, שיטוט והתמצאות בשלוש שפות',
    ],
    descriptionEn: [
      'Maktoob is an independent translation project housed within the Van Leer Jerusalem Institute. The works translated as part of the project are masterpieces of Arabic literature, intended for a Hebrew-reading audience.',
      "The collaboration with Maktoob (as part of the Social Design Lab at Bezalel) included the redesign and redevelopment of the organization's website. Within the framework of the project, a new graphic language was developed, along with an interactive interface that enables slow reading, browsing, and navigation across three languages",
    ],
    tags: ['ניסוח זהות גרפית', 'עיצוב לתרבות'],
    tagsEn: ['Visual Identity', 'Design for Culture'],
    // Rail thumbnail is the gallery's own first image, inset on the
    // project's background color — same treatment as Kibutzim.
    thumb: 'assets/gallery/mactoob-1.png',
    thumbBg: '#6f4f36',
    thumbFramed: true,
    bg: '#6f4f36',
    // Website screenshots, same convention as Kibutzim: full-browser-window
    // captures shown on a solid Figma-sourced background color (brown here,
    // sampled from the rail thumbnail's own edge — see thumbBg above).
    // Images are uploaded one at a time in gallery order; more slots get
    // appended here as they arrive.
    images: [
      'assets/gallery/mactoob-1.png',
      'assets/gallery/mactoob-2.png',
      'assets/gallery/mactoob-3.png',
      'assets/gallery/mactoob-4.png',
    ],
    ready: true,
  },
  {
    id: 'kan-haia-etz-tut',
    figmaNode: '4164:653', // KanHaiaEtzTut — "כאן היה עץ תות"
    title: '״כאן היה עץ תות״',
    titleEn: 'Here Was a Mulberry Tree',
    year: '2025',
    description: [
      'הכפר ליפתא אוצר בתוכו עדויות אילמות לחיים שאינם. הוא מהווה קפסולת זמן שמכילה בתוכה שרידי התיישבות מתקופות שונות. בניגוד לכפרים ערביים רבים שנכבשו ב־1948, בתיה של ליפתא נותרו במקומם. אמנם מבניה ורחובותיה נתונים להזנחה והיוו מוקד שמזמין אליו ״דיירים״ מוזנחים. במובנים רבים ליפתא היא פצע פתוח שלא הגליד. מקום שמספר סיפור של אסון והזנחה.',
      'העלמת העין מצד הרשויות הביאו לאיכול איטי של הכפר. הטבע חוזר ומשתלט עליו וצומח מתוכו. כך הולכות ונעלמות הראיות לחיים שהיו בכפר, ולזיכרון דייריו. בשנת 2004, ביוזמת מינהל מקרקעי ישראל ועיריית ירושלים, פורסמה תכנית לשינוי ייעודו של שטח הכפר לבניית שכונת יוקרה. על פי התכנית ייבנו בליפתא כמאתיים וארבעים יחידות דיור, מלון, משרדים וחדרי אירוח. על פי תכנית זו תהפוך ליפתא למתחם בעל אופי תיירותי־מסחרי ובכך תטושטש כמעט סופי זהותו של המקום. זהו אקט שאינו רק מסחרי, אלא גם אקט פוליטי השולל מבן המיעוט את זכותו לזיכרון.',
      '״כָּאן הָיָה עֵץ תּוּת״ היא תערוכה המגיבה למציאות המשתנה של המקום. היא משמשת כפעולת שימור אחרונה בזמן קריטי – רגע לפני שהנופים משנים את פניהם לעד. בזמן דמדומים, בין מלחמת העצמאות למיזמי נדל״ן במאה ה־21, ובזמן ״מלחמת התקומה״ - נאספו ממצאים המהווים עדויות ומעין קפסולת זמן לאנשים שנשכחו ונשכחים',
    ],
    descriptionEn: [
      'The village of Lifta holds within it silent testimonies to lives that are no more. It serves as a time capsule containing remnants of settlement from various periods. Unlike many Arab villages conquered in 1948, the houses of Lifta remained in place. However, its structures and streets are subject to neglect and have become a focal point inviting neglected "tenants." In many ways, Lifta is an open wound that has not healed—a place that tells a story of disaster and neglect.',
      'The authorities\' turning a blind eye has led to the slow erosion of the village. Nature is returning and taking over, growing from within it. Thus, the evidence of the lives that existed in the village, and the memory of its inhabitants, are fading away. In 2004, at the initiative of the Israel Land Administration and the Jerusalem Municipality, a plan was published to rezone the village\'s land for the construction of a luxury neighborhood. According to the plan, about two hundred and forty housing units, a hotel, offices, and guest rooms will be built in Lifta. Under this plan, Lifta will transform into a complex with a tourist-commercial character, thereby almost definitively blurring the identity of the place. This is an act that is not solely commercial, but also a political act that denies the minority their right to memory.',
      '"Here Was a Mulberry Tree" is an exhibition that responds to the changing reality of the location. It serves as a final act of preservation at a critical time – a moment before the landscapes change their faces forever. In a time of twilight, between the War of Independence and 21st-century real estate projects, and during the "War of Revival" – findings were gathered that constitute testimonies and a kind of time capsule for people who have been, and are being, forgotten',
    ],
    tags: ['עיצוב במרחב', 'תלוי מקום', 'מרובה פלטפורמות', 'ספקולטיבי'],
    tagsEn: ['Installation', 'Site-Specific', 'Multi-Platform', 'Speculative'],
    // Real installation photography rather than a website screenshot — no
    // matting/inset here (that treatment is for showing a site "floating"
    // on a backdrop that isn't part of it). The photo itself fills the
    // column edge-to-edge, flush with the dividing lines, both in the
    // gallery and as the rail thumbnail. thumbBg is just a fallback while
    // the image loads, sampled from the photo's own tones.
    thumb: 'assets/gallery/kan-haia-etz-tut-1.jpg',
    thumbBg: '#c4c3c3',
    bg: '#c4c3c3',
    galleryFullBleed: true,
    images: [
      'assets/gallery/kan-haia-etz-tut-1.jpg',
      // Cropped to match Figma: a vertical slice of the original portrait
      // photo (y 324–1236 of the 1366×2048 upload), not the full frame —
      // matched against the Figma reference screenshot at ~99% template
      // confidence rather than eyeballed.
      'assets/gallery/kan-haia-etz-tut-2.jpg',
      'assets/gallery/kan-haia-etz-tut-3.jpg',
      'assets/gallery/kan-haia-etz-tut-4.jpg',
      'assets/gallery/kan-haia-etz-tut-5.jpg',
      // The two exhibition posters side by side, on their own gray backdrop
      // and margins already composed into the asset itself (not the
      // project's own bg color — this graphic brings its own matting), so
      // it's added the same way as the full-bleed photos: no extra CSS
      // treatment needed, the image already looks right edge-to-edge.
      'assets/gallery/kan-haia-etz-tut-6.png',
    ],
    ready: true,
  },
  {
    id: 'shnat-shalom',
    figmaNode: '4173:961', // ShnatShalom
    title: 'שנת שלום',
    titleEn: 'A Year Of Peace',
    year: '2025',
    description: [
      'שנת שלום הוא פרויקט ארכיון אלטרנטיבי. הוא נשען על כרטיסי ’שנת שלום’ של אוסף הספרייה הלאומית בירושלים, ומציע קריאה חדשה שלהם. הקטלוג המחודש של הכרטיסים מבקש להשוות את איחולי השלום לאורך השנים למצב השלום בפועל של אותן שנים.',
      'הפרויקט עושה שימוש בכלי הקטלוג ככלי סיפורי, המייצר חוויית שימוש ביקורתית באוסף. הקיטלוג האלטרנטיבי משתמש במניפולציות גרפיות על חומרי המקור וכך מציע התמצאות בתוך מערכת חדשה',
    ],
    descriptionEn: [
      '"A Year of Peace" is an alternative archive project. It draws upon the \'Year of Peace\' cards from the collection of the National Library in Jerusalem, offering a new reading of them. The renewed catalog of the cards seeks to compare the wishes for peace over the years with the actual state of peace during those same years.',
      'The project utilizes the cataloging tool as a narrative device, creating a critical user experience within the collection. The alternative cataloging employs graphic manipulations on the source materials, thereby offering orientation and navigation within a new system',
    ],
    tags: ['ארכיון', 'מרובה פלטפורמות', 'עיצוב במרחב', 'ניסיוני'],
    tagsEn: ['Archive', 'Multi-Platform', 'Installation', 'Experimental'],
    // Real photography (documentation of the printed archive piece), same
    // convention as כאן היה עץ תות: no matting, full-bleed edge-to-edge,
    // and the rail thumbnail reuses this same gallery image rather than a
    // separately-cropped asset. bg is a neutral gray averaged from the
    // photo's own wall/floor tones, not a pulled Figma value.
    thumb: 'assets/gallery/shnat-shalom-1.jpg',
    thumbBg: '#cac9c8',
    bg: '#cac9c8',
    galleryFullBleed: true,
    images: [
      'assets/gallery/shnat-shalom-1.jpg',
      'assets/gallery/shnat-shalom-2.jpg',
      'assets/gallery/shnat-shalom-3.jpg',
      'assets/gallery/shnat-shalom-4.jpg',
      'assets/gallery/shnat-shalom-5.jpg',
      'assets/gallery/shnat-shalom-6.jpg',
      'assets/gallery/shnat-shalom-7.jpg',
    ],
    ready: true,
  },
  {
    id: 'drawjlm',
    figmaNode: '4173:1117', // DrawJLM — "צייר.י ירושלים"
    title: 'צייר.י ירושלים',
    titleEn: 'Draw Jerusalem',
    year: '2024',
    description: [
      'ירושלים טומנת בתוכה את רגשותיה הסובייקטיביים של מיליוני האנשים שעברו בה. במובן זה, ירושלים אחת ואובייקטיבית אינה קיימת. היא מתפרשת בעיני רואיה במרקם חי של זיכרון, צבע, סאונד ומערכות יחסים.',
      'צייר.י ירושלים הוא ספר מחקר, המבקש ממאה תושבים – יהודים וערבים, דתיים, חילונים וחרדים – לצייר לי את ירושלים כפי שהיא מצטיירת בחווייתם האישית. לא מדובר במפת דרכים או מבט־על אדריכלי, אלא ברישום אינטואיטיבי, המורכב מקווים חופשיים, צבעים שנבחרו על פי תחושה. רישום חופשי של דמות האדם ביחס לעיר שסביבו.',
      'דרך מאות הקווים שמתחו על הדף נולדה עיר אחרת: עיר שמצטיירת בכל פעם מחדש, אבל חוזרת על עצמה במאפיינים מסוימים, ומשקפת את המתח שבין האישי לקולקטיבי ובין המופשט לפיגורטיבי. הדימויים שחזרו אצל קבוצות שונות חשפו עומקים של שוני – תרבותי, חברתי – אך גם נקודות חיבור מפתיעות',
    ],
    descriptionEn: [
      'Jerusalem holds within it the subjective emotions of the millions of people who have passed through it. In this sense, a single, objective Jerusalem does not exist. It is interpreted through the eyes of its beholders as a living tapestry of memory, color, sound, and relationships.',
      'Draw Jerusalem is a research book that asks one hundred residents—Jews and Arabs, religious, secular, and ultra-Orthodox—to draw Jerusalem for me as it is portrayed in their personal experience. It is not a roadmap or an architectural bird\'s-eye view, but rather an intuitive sketch, composed of freehand lines and colors chosen by feeling. It is a freehand drawing of the individual in relation to the city surrounding them.',
      'Through the hundreds of lines drawn on the page, a different city was born: a city that is rendered anew each time, yet repeats itself in certain characteristics, reflecting the tension between the personal and the collective, and between the abstract and the figurative. The recurring images among different groups revealed depths of difference—cultural and social—but also surprising points of connection',
    ],
    tags: ['תלוי מקום', 'רישום', 'ניסיוני', 'מחקר גרפי', 'מבוסס משתתפים'],
    tagsEn: ['Site-Specific', 'Drawing', 'Experimental', 'Visual Research', 'Participant-Based'],
    // Real product photography (the book on its own studio backdrop), same
    // convention as ratner41 / כאן היה עץ תות / שנת שלום: no matting,
    // full-bleed edge-to-edge, rail thumbnail reuses the gallery's own
    // first image. thumbBg/bg sampled from the photo's own backdrop color.
    thumb: 'assets/gallery/drawjlm-1.jpg',
    thumbBg: '#01a5d5',
    bg: '#01a5d5',
    galleryFullBleed: true,
    images: [
      'assets/gallery/drawjlm-1.jpg',
      'assets/gallery/drawjlm-2.jpg',
      'assets/gallery/drawjlm-3.jpg',
      'assets/gallery/drawjlm-4.jpg',
      'assets/gallery/drawjlm-5.jpg',
      'assets/gallery/drawjlm-6.jpg',
      'assets/gallery/drawjlm-7.jpg',
      'assets/gallery/drawjlm-8.jpg',
      'assets/gallery/drawjlm-9.jpg',
      'assets/gallery/drawjlm-10.jpg',
      'assets/gallery/drawjlm-11.jpg',
    ],
    ready: true,
  },
  {
    id: 'eretz-noi',
    figmaNode: '4173:1186', // EretzNoi — only the cover card exists so far, no body copy yet
    title: 'ארץ נוי אביונה',
    titleEn: 'Eretz Noi Avyona',
    year: '2024',
    description: [
      '״ארץ נוי אביונה״ היא אסופת טקסטים שבוחנת את הכוחות הכלכליים בחברה הישראלית. האסופה בוחנת את תופעת הניידות החברתית הנמוכה, יוקר המחייה, ופערים כלכליים באוכלוסייה הישראלית דרך טקסטים שונים. ביניהם רשימת חלומות מספרי מחזור בבית ספר בערד, רשימת מחירים של מוצרים בפיקוח, שמות המשפחה של 100 העשירים בישראל ועוד',
    ],
    descriptionEn: [
      'Eretz Noi Avyona is a collection of texts that examines the economic forces within Israeli society. The anthology explores the phenomenon of low social mobility, the cost of living, and economic disparities in the Israeli population through various texts. Among these are a list of dreams from school yearbooks in Arad, a price list of price-regulated products, the surnames of the 100 wealthiest individuals in Israel, and more',
    ],
    tags: ['אסופת טקסטים', 'פריפריה', 'ניסיוני'],
    tagsEn: ['Text Collection', 'Periphery', 'Experimental'],
    // Real product photography (the book on its own studio backdrop), same
    // convention as ratner41 / drawjlm / כאן היה עץ תות / שנת שלום: no
    // matting, full-bleed edge-to-edge, rail thumbnail reuses the gallery's
    // own first image. thumbBg/bg sampled from the photo's own backdrop color.
    thumb: 'assets/gallery/eretz-noi-1.jpg',
    thumbBg: '#e7e5e1',
    bg: '#e7e5e1',
    galleryFullBleed: true,
    images: [
      'assets/gallery/eretz-noi-1.jpg',
      'assets/gallery/eretz-noi-2.jpg',
      'assets/gallery/eretz-noi-3.jpg',
      'assets/gallery/eretz-noi-4.jpg',
      'assets/gallery/eretz-noi-5.jpg',
      'assets/gallery/eretz-noi-6.jpg',
      'assets/gallery/eretz-noi-7.jpg',
      'assets/gallery/eretz-noi-8.jpg',
      'assets/gallery/eretz-noi-9.jpg',
      'assets/gallery/eretz-noi-10.jpg',
      'assets/gallery/eretz-noi-11.jpg',
    ],
    ready: true,
  },
];

// Pulled from the real "Abou/HomePage/Kibutzim" About frame (node 4164:269) —
// the one Figma frame with a finished About layout. Text is reproduced
// verbatim from Figma, including two apparent typos in the source file:
// the skills heading reads "מיונמנויות" (likely meant "מיומנויות") and the
// phone number is a 9-digit "058795432" (an Israeli mobile is normally 10
// digits). Left as-is on purpose — flag to fix in Figma if they're really
// typos, and this will re-pull correctly once they're fixed there.
const ABOUT = {
  contact: {
    heading: 'יצירת קשר',
    email: 'giladhai6@gmail.com',
    phone: '058795432',
    instagram: '@giladhai6',
  },
  contactEn: {
    heading: 'Contact',
  },
  bio: [
    'מתמחה בעיצוב מערכות גרפיות וטיפוגרפיות מורכבות (בדפוס ובפלטפורמות אינטראקטיביות), בעיצוב ספרים ומוצרי דפוס, ובפיתוח זהויות גרפיות.',
    'אני רואה בעיצוב אמצעי לקריאה מחודשת של המציאות. אני משתמש בעיצוב ככלי מחקרי, המאפשר לבחון סוגיות בתחומים מגוונים. תהליך העיצוב שלי מבוסס על שיתוף פעולה עם תחומי ידע ועשייה שונים — אדריכלות, תרבות ועשייה חברתית — וממקם את העיצוב כשחקן שותף בתהליך המחשבה והיצירה.',
  ],
  // Hebrew and English now run in the same order (specialization paragraph
  // first, philosophy paragraph second) — Gilad updated the Hebrew to match
  // the English translation, dropping the old second paragraph's trailing
  // "ולא רק כנותן שירות חיצוני" clause, which isn't in the English either.
  bioEn: [
    'I specialize in the design of complex graphic and typographic systems (in print and on interactive platforms), book and print design, and the development of graphic identities.',
    'I view design as a means for a renewed reading of reality. I use design as a research tool, enabling the exploration of issues across diverse fields. My design process is rooted in collaboration with various fields of knowledge and practice—architecture, culture, and social engagement—positioning design as an active partner in the process of thought and creation.',
  ],
  // Low-res crop straight out of the Figma frame (141×137, same limitation
  // as the other Figma-sourced images) — swap for a real file once supplied.
  portrait: 'assets/about/portrait.jpg',
  sections: [
    {
      heading: 'רקע אקדמי',
      entries: [
        { text: 'בוגר המחלקה לתקשורת חזותית בבצלאל (B.Des)', tag: '2022 - 2026' },
      ],
    },
    {
      heading: 'תעסוקה',
      entries: [
        { text: 'שותף במעבדה לתרבות קיבוצית. עיצוב פלטפורמה אינטראקטיבית ואפיון הצגת חומרי המחקר', tag: '2024 - 2026' },
        { text: 'מיתוג מחדש למכון שוקן למדעי היהדות', tag: '2026' },
        { text: 'שיתוף פעולה עם עמותת ״שכנות טובה״. עיצוב חומרים פדגוגיים ככלי לחילופי שפה ומפגש בין יהודים לערבים בירושלים', tag: '2026' },
      ],
    },
    {
      heading: 'מיונמנויות',
      entries: [
        { lines: ['InDesign', 'Photoshop', 'Illustrator', 'Premiere Pro', 'Figma'], tag: 'שליטה בתוכנות' },
        { text: 'Claud code', tag: 'פיתוח ל web' },
      ],
    },
  ],
  // Full English translation of the right column. Tag values that are just
  // year numbers (e.g. "2022 - 2026") aren't repeated here since they don't
  // need translating — sectionsEnFor() below falls back to the Hebrew tag
  // whenever tagEn is omitted.
  sectionsEn: [
    {
      heading: 'Academic Background',
      entries: [
        { text: 'Graduate of the Department of Visual Communication at Bezalel Academy of Art and Design (B.Des)', tag: '2022 - 2026' },
      ],
    },
    {
      heading: 'Employment',
      entries: [
        { text: "Partner at the Laboratory for Kibbutz Culture. Design of an interactive platform and specification of the research materials' presentation", tag: '2024 - 2026' },
        { text: 'Rebranding for the Schocken Institute for Jewish Studies', tag: '2026' },
        { text: "Collaboration with the 'Good Neighbors' Association — design of pedagogical materials as a tool for language exchange and encounters between Jews and Arabs in Jerusalem", tag: '2026' },
      ],
    },
    {
      heading: 'Skills',
      entries: [
        { lines: ['InDesign', 'Photoshop', 'Illustrator', 'Premiere Pro', 'Figma'], tag: 'Software Proficiency' },
        { text: 'Claud code', tag: 'Web Development' },
      ],
    },
  ],
};

const state = {
  activeId: PROJECTS[0].id,
  view: 'project', // 'project' | 'about'
  lang: 'en', // 'he' | 'en' — English is the site's default; see applyLanguage()
  // Index into the active project's `images` array while its click-to-expand
  // stack view is open, or null the rest of the time.
  expandedIndex: null,
};

const layoutEl = document.querySelector('.layout');
const infoPanel = document.getElementById('infoPanel');
const galleryPanel = document.getElementById('galleryPanel');
const galleryScroll = document.getElementById('galleryScroll');
const worksRail = document.getElementById('worksRail');
const worksLink = document.getElementById('worksLink');
const siteNameLink = document.getElementById('siteNameLink');
const langToggle = document.getElementById('langToggle');

function getProject(id) {
  return PROJECTS.find((p) => p.id === id) || PROJECTS[0];
}

// Per-project titles are translated one at a time (starting with kibutzim);
// any project without a `titleEn` yet just keeps showing its Hebrew title
// even while the site is in English mode. Same typographic treatment either
// way — only the string changes, every caller below still goes through
// this one function instead of reading `project.title` directly.
function projectTitle(project) {
  if (state.lang === 'en' && project.titleEn) {
    return project.titleEn;
  }
  return project.title;
}

// Same one-field-at-a-time approach as projectTitle(): each project only
// switches to its `descriptionEn`/`tagsEn` once that field has actually
// been authored, so translating a project stays a per-field, per-project
// rollout — kibutzim has all three (title/description/tags) now; every
// other project falls back to Hebrew for whichever fields aren't done yet.
function projectDescription(project) {
  if (state.lang === 'en' && project.descriptionEn) {
    return project.descriptionEn;
  }
  return project.description;
}

function projectTags(project) {
  if (state.lang === 'en' && project.tagsEn) {
    return project.tagsEn;
  }
  return project.tags || DEFAULT_TAGS;
}

function renderAboutRail() {
  worksRail.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'about-rail';

  // Whole-column translation (not the gradual per-field rollout used for
  // project copy) — sectionsEn mirrors sections' structure 1:1 in English.
  const railIsEnglish = state.lang === 'en' && !!ABOUT.sectionsEn;
  if (railIsEnglish) {
    wrap.dir = 'ltr';
  }
  const sections = railIsEnglish ? ABOUT.sectionsEn : ABOUT.sections;

  sections.forEach((section) => {
    const sectionEl = document.createElement('div');
    sectionEl.className = 'about-section';

    const heading = document.createElement('h2');
    heading.className = 'about-section-heading';
    heading.textContent = section.heading;
    sectionEl.appendChild(heading);

    section.entries.forEach((entry) => {
      const row = document.createElement('div');
      row.className = 'about-entry';
      // .about-entry hardcodes direction: rtl in CSS (so the [dir='ltr']
      // HTML attribute alone can't override it — needs a matching
      // .about-entry[dir='ltr'] rule, see style.css). Flipping it swaps
      // which side the tag/text columns land on — tag moves from flush-
      // right to flush-left — which is the "switch the sides" Gilad asked
      // for, not a separate reordering of the DOM.
      if (railIsEnglish) {
        row.dir = 'ltr';
      }

      // Tag/year first in DOM: in the RTL flex row this lands it at the
      // right — flush with the section heading's right edge, per Figma
      // (the year sits at the top-right of each entry; the body text is
      // the one inset to its left, not the other way around).
      const tag = document.createElement('span');
      tag.className = 'about-entry-tag';
      // Year ranges (e.g. "2022 - 2026") are plain numerics — without an
      // explicit direction the bidi algorithm reorders the two numbers
      // around the hyphen inside the surrounding RTL text (the same bug
      // fixed earlier on the @giladhai6 contact link). The skills tags
      // ("שליטה בתוכנות", "פיתוח ל web") are Hebrew phrases with an
      // occasional embedded Latin word — those need to stay in the default
      // RTL flow, or forcing ltr reorders the whole phrase backwards.
      if (/\d/.test(entry.tag)) {
        tag.dir = 'ltr';
      }
      tag.textContent = `[${entry.tag}]`;
      row.appendChild(tag);

      const text = document.createElement('div');
      text.className = 'about-entry-text';
      if (entry.lines) {
        entry.lines.forEach((line) => {
          const lineEl = document.createElement('span');
          lineEl.textContent = line;
          text.appendChild(lineEl);
        });
      } else {
        text.textContent = entry.text;
      }
      row.appendChild(text);

      sectionEl.appendChild(row);
    });

    wrap.appendChild(sectionEl);
  });

  worksRail.appendChild(wrap);
}

function renderRail() {
  // Mobile-only hook: the About page's rail content (vertically-stacked
  // sections) needs a completely different layout from the project rail's
  // horizontal thumbnail strip — see .works-rail--about in style.css.
  worksRail.classList.toggle('works-rail--about', state.view === 'about');

  if (state.view === 'about') {
    renderAboutRail();
    return;
  }

  worksRail.innerHTML = '';
  // Every project always has a card in the rail, including the one currently
  // on screen — its card just switches to the "active" white/title-and-year
  // treatment below instead of being omitted the way the old "other works"
  // list used to.
  PROJECTS.forEach((project) => {
    const isActive = project.id === state.activeId;
    const card = document.createElement('button');
    card.type = 'button';
    card.className = isActive ? 'works-card works-card--active' : 'works-card';
    // Match the card's own background to the thumbnail's edge color so any
    // hairline gap from the crop blends in instead of showing the generic
    // placeholder gray. The active card still gets this — it's just hidden
    // under the white overlay, so the height stays identical either way.
    card.style.backgroundColor = project.thumbBg || 'var(--color-placeholder-bg)';

    if (project.thumbFramed) {
      // Inset layout: the thumbnail is the gallery's own first image sitting
      // on the project's background color, not a full-bleed crop.
      const frame = document.createElement('span');
      frame.className = 'works-card-frame';
      const img = document.createElement('img');
      img.src = project.thumb;
      img.alt = projectTitle(project);
      frame.appendChild(img);
      card.appendChild(frame);
    } else {
      const img = document.createElement('img');
      img.src = project.thumb;
      img.alt = projectTitle(project);
      card.appendChild(img);
    }

    const label = document.createElement('span');
    label.className = 'works-card-label';
    label.textContent = projectTitle(project);
    card.appendChild(label);

    // Same title+year overlay markup for every card, active or not — CSS
    // alone decides when it shows: always-on and solid white for the active
    // card, hover-only and at 66% opacity (so the thumbnail shows through)
    // for every other card. Sized via position:absolute so it rides on top
    // of the (still-present) thumbnail image rather than needing a
    // hardcoded height — the card's natural height keeps coming from that
    // image either way.
    const overlay = document.createElement('span');
    overlay.className = 'works-card-active-overlay';
    const overlayTitle = document.createElement('span');
    overlayTitle.className = 'works-card-active-title';
    overlayTitle.textContent = projectTitle(project);
    overlay.appendChild(overlayTitle);
    const overlayYear = document.createElement('span');
    overlayYear.className = 'works-card-active-year';
    overlayYear.textContent = project.year ? `[${project.year}]` : '';
    overlay.appendChild(overlayYear);
    card.appendChild(overlay);

    card.addEventListener('click', () => selectProject(project.id));
    worksRail.appendChild(card);
  });
}

function renderInfoPanel() {
  infoPanel.classList.toggle('info-panel--about', state.view === 'about');
  if (state.view === 'about') {
    // Figma's About frame only puts the contact block in this column — no
    // separate "About" title above it.
    infoPanel.innerHTML = '';
    const contact = document.createElement('div');
    contact.className = 'about-contact';
    // Email/phone/handle already carry their own dir="ltr" regardless of
    // language (needed so the digits/handle read correctly even in Hebrew
    // mode) — only the container's own dir flips with the language, which
    // is what actually moves the block's alignment left vs. right (see the
    // .about-contact[dir='ltr'] override in style.css).
    const contactIsEnglish = state.lang === 'en' && !!ABOUT.contactEn;
    if (contactIsEnglish) {
      contact.dir = 'ltr';
    }
    const contactHeading = contactIsEnglish ? ABOUT.contactEn.heading : ABOUT.contact.heading;
    contact.innerHTML = `
      <p class="about-contact-heading">${contactHeading}</p>
      <a dir="ltr" href="mailto:${ABOUT.contact.email}">${ABOUT.contact.email}</a>
      <a dir="ltr" href="tel:${ABOUT.contact.phone}">${ABOUT.contact.phone}</a>
      <a dir="ltr" href="https://instagram.com/${ABOUT.contact.instagram.replace('@', '')}" target="_blank" rel="noopener">${ABOUT.contact.instagram}</a>
    `;
    infoPanel.appendChild(contact);
    return;
  }

  const project = getProject(state.activeId);
  infoPanel.innerHTML = '';

  // Whether *this particular project* actually has English copy for the
  // field in question — state.lang can be 'en' while a given project still
  // only has, say, a translated title and not a translated description yet,
  // in which case that field stays Hebrew (and RTL) even in English mode.
  const titleIsEnglish = state.lang === 'en' && !!project.titleEn;
  const descriptionIsEnglish = state.lang === 'en' && !!project.descriptionEn;
  const tagsAreEnglish = state.lang === 'en' && !!project.tagsEn;

  const title = document.createElement('h1');
  title.className = 'info-title';
  // Left-aligned to match the (left-aligned) English description, same as
  // the tags list below — right-aligned is the Hebrew/RTL default.
  if (titleIsEnglish) {
    title.dir = 'ltr';
  }
  title.textContent = projectTitle(project);

  const year = document.createElement('p');
  year.className = 'info-year';
  // The year groups visually with the title, so it follows the title's
  // language/alignment rather than having its own translated field.
  if (titleIsEnglish) {
    year.dir = 'ltr';
  }
  year.textContent = project.year ? `[${project.year}]` : '';

  // On desktop, title/year are just plain siblings flowing down the panel
  // (see below — this wrapper adds no visual difference there). On mobile
  // (see the media query in style.css) they instead become the "collapsed
  // bar" mockup Gilad supplied: title+year stacked on one side, the round
  // expand button on the other, with the description/tags/article-link
  // beneath them hidden entirely rather than shown inline. This wrapper is
  // what makes that a single flex row instead of the button just landing
  // below the year. Its own dir mirrors the title's — same reasoning as
  // title.dir/year.dir above — so the row itself reverses correctly (title
  // side vs. button side swap) in English vs. Hebrew, not just the text
  // inside it.
  //
  // STATIC ONLY for now, per Gilad: the button renders but has no click
  // handler yet, and the description/tags are hidden outright on mobile
  // rather than toggled — the expand/collapse interaction is a deliberate
  // next step once this static look is confirmed correct.
  const header = document.createElement('div');
  header.className = 'info-panel-header';
  if (titleIsEnglish) {
    header.dir = 'ltr';
  }
  const titleBlock = document.createElement('div');
  titleBlock.className = 'info-title-block';
  titleBlock.appendChild(title);
  titleBlock.appendChild(year);
  header.appendChild(titleBlock);

  const expandToggle = document.createElement('button');
  expandToggle.type = 'button';
  expandToggle.className = 'info-expand-toggle';
  expandToggle.setAttribute('aria-label', 'Expand description');
  expandToggle.innerHTML =
    '<svg viewBox="0 0 14 14" aria-hidden="true">' +
    '<line x1="7" y1="1.5" x2="7" y2="12.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' +
    '<line x1="1.5" y1="7" x2="12.5" y2="7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' +
    '</svg>';
  header.appendChild(expandToggle);

  infoPanel.appendChild(header);

  const description = document.createElement('div');
  description.className = 'info-description';
  const descriptionParagraphs = projectDescription(project);
  if (descriptionParagraphs.length) {
    descriptionParagraphs.forEach((paragraph, index) => {
      const p = document.createElement('p');
      if (descriptionIsEnglish) {
        p.dir = 'ltr';
      }
      if (index === descriptionParagraphs.length - 1) {
        // The end-of-description dot has to land right after the last word,
        // not on a line of its own. A dot appended via CSS ::after is its
        // own atomic inline box, and browsers are free to wrap a line break
        // in right before it once the last word alone fills the line — that
        // stranded the dot on an empty line for some of the longer English
        // paragraphs. Pairing the last word and the dot inside one
        // white-space:nowrap span keeps them glued together regardless of
        // where the paragraph happens to wrap.
        const words = paragraph.split(' ');
        const lastWord = words.pop();
        if (words.length) {
          p.appendChild(document.createTextNode(words.join(' ') + ' '));
        }
        const lastWordWrap = document.createElement('span');
        lastWordWrap.className = 'info-last-word';
        lastWordWrap.appendChild(document.createTextNode(lastWord));
        const dot = document.createElement('span');
        dot.className = 'info-end-dot';
        lastWordWrap.appendChild(dot);
        p.appendChild(lastWordWrap);
      } else {
        p.textContent = paragraph;
      }
      description.appendChild(p);
    });
  } else {
    const note = document.createElement('div');
    note.className = 'info-empty-note';
    note.textContent = 'הטקסט לעמוד הזה עוד לא נכתב בפיגמה — ברגע שהוא יתווסף, הוא יופיע כאן אוטומטית.';
    description.appendChild(note);
  }
  infoPanel.appendChild(description);

  // Optional: a bold, arrow-marked link out to press coverage — only
  // rendered for a project that actually has an `articleLink` (Schoken, so
  // far; see its definition above). Sits between the description and the
  // tags list, with the same double-gap spacing (32px, matching
  // .info-year's own "twice the paragraph gap" convention) on both sides —
  // margin-collapsing against the description's last paragraph (16px) and
  // .info-glossary's own margin-top (32px) lands it at exactly 32px either
  // way, so it reads as one more block in the same rhythm rather than a
  // one-off gap.
  if (project.articleLink) {
    const articleLinkIsEnglish = state.lang === 'en' && !!project.articleLink.labelEn;
    const link = document.createElement('a');
    link.className = 'info-article-link';
    link.href = project.articleLink.url;
    link.target = '_blank';
    link.rel = 'noopener';
    if (articleLinkIsEnglish) {
      link.dir = 'ltr';
    }
    const label = document.createElement('span');
    label.textContent = articleLinkIsEnglish ? project.articleLink.labelEn : project.articleLink.label;
    link.appendChild(label);
    // Diagonal "external link" arrow, drawn the same way as the close
    // button's SVG X (see buildCloseButton) — a real stroked path rather
    // than a scaled text glyph, so its proportions stay exact. Second
    // child in DOM order (after the label) so it lands at the visual END
    // of the reading direction either way — after the text in RTL
    // (Hebrew), after the text in LTR (English, via dir="ltr" above) —
    // matching the Figma reference. Hebrew mirrors the same path
    // horizontally (--flip, see style.css) rather than using a second,
    // separately-drawn path — same glyph, just pointing the other way to
    // read correctly against RTL text.
    const arrowWrap = document.createElement('span');
    arrowWrap.className = articleLinkIsEnglish
      ? 'info-article-link-arrow'
      : 'info-article-link-arrow info-article-link-arrow--flip';
    arrowWrap.innerHTML =
      '<svg viewBox="0 0 12 12" aria-hidden="true">' +
      '<path d="M3,9 L9,3 M5,3 H9 V7" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round"/></svg>';
    link.appendChild(arrowWrap);
    infoPanel.appendChild(link);
  }

  const glossary = document.createElement('div');
  glossary.className = 'info-glossary';
  const list = document.createElement('ul');
  // Right-aligned (the RTL default) matches the Hebrew description, which is
  // also right-aligned. English descriptions are left-aligned (dir="ltr"
  // above), so the English tags list is switched to match that same left
  // alignment — keeping the two blocks visually consistent.
  if (tagsAreEnglish) {
    list.dir = 'ltr';
  }
  projectTags(project).forEach((tag) => {
    const li = document.createElement('li');
    li.textContent = `[${tag}]`;
    list.appendChild(li);
  });
  glossary.appendChild(list);
  infoPanel.appendChild(glossary);
}

function renderAboutGallery() {
  galleryPanel.style.background = '#ffffff';
  galleryScroll.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'about-bio-panel';

  const bioIsEnglish = state.lang === 'en' && !!ABOUT.bioEn;
  const bioParagraphs = bioIsEnglish ? ABOUT.bioEn : ABOUT.bio;
  bioParagraphs.forEach((paragraph) => {
    const p = document.createElement('p');
    if (bioIsEnglish) {
      p.dir = 'ltr';
    }
    p.textContent = paragraph;
    wrap.appendChild(p);
  });

  const portrait = document.createElement('img');
  portrait.className = 'about-portrait';
  portrait.src = ABOUT.portrait;
  portrait.alt = 'גלעד היימן';
  wrap.appendChild(portrait);

  galleryScroll.appendChild(wrap);
}

// Builds the actual media element (video or img) for one gallery src — used
// by buildGalleryImageWrap, so the normal stacked list and the expanded
// stack view stay visually identical instead of drifting apart over time.
// Returns null for an empty slot (project.images entries can be `null` —
// see Kibutzim's third slot — meaning the Figma frame reserves the spot but
// has no image fill yet).
function buildGalleryMedia(src, project) {
  if (src && typeof src === 'object' && src.sources) {
    // Hover-to-play clip: rests on its poster frame (the video's own first
    // frame), plays on loop while the pointer is over it, and resets back
    // to the poster frame — not just paused mid-clip — the moment the
    // pointer leaves. attachHoverPlay() below wires up that behavior on
    // whichever wrapper ends up containing this element.
    const video = document.createElement('video');
    video.className = 'gallery-video';
    video.poster = src.poster;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', projectTitle(project));
    src.sources.forEach(({ src: sourceSrc, type }) => {
      const sourceEl = document.createElement('source');
      sourceEl.src = sourceSrc;
      sourceEl.type = type;
      video.appendChild(sourceEl);
    });
    return video;
  }
  if (src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = projectTitle(project);
    return img;
  }
  return null;
}

function attachHoverPlay(wrap, video) {
  wrap.addEventListener('mouseenter', () => {
    video.play().catch(() => {
      // Autoplay can be blocked in some browsers even on hover with no
      // user-gesture history yet — failing silently just leaves the poster
      // frame showing, which is a safe fallback.
    });
  });
  wrap.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
}

// The click-to-expand interaction is now the one system used across every
// project's gallery: clicking any image blows the whole stacked gallery up
// to full width (info panel + works-rail hidden) with every image still
// beneath each other, same dividers as the normal view, scrollable — see
// renderExpandedStack. Every image in every ready project is a valid entry
// point into it.
function isExpandableImage(project, index) {
  return true;
}

function expandImage(index) {
  state.expandedIndex = index;
  renderGallery();
}

function closeExpandedImage() {
  state.expandedIndex = null;
  renderGallery();
}

// The one close button shape used by the expanded stack view everywhere on
// the site.
function buildCloseButton(onClick) {
  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'gallery-expanded-close';
  closeBtn.setAttribute('aria-label', 'Close');
  // Drawn as an SVG X (two crossed lines) rather than a "×" text glyph —
  // a glyph's size/weight relative to the circle varies by font and is
  // hard to pin to a specific ratio; the SVG guarantees the ~42%-of-
  // diameter mark measured off the reference every time. viewBox is sized
  // to match the CSS display size 1:1 (see .gallery-expanded-close svg),
  // so stroke-width below is a real px value, directly comparable to the
  // button's own border-width when tuning "line weight" independently of
  // size.
  closeBtn.innerHTML =
    '<svg viewBox="0 0 10.8 10.8" aria-hidden="true">' +
    '<line x1="0.9" y1="0.9" x2="9.9" y2="9.9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
    '<line x1="9.9" y1="0.9" x2="0.9" y2="9.9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
    '</svg>';
  closeBtn.addEventListener('click', onClick);
  return closeBtn;
}

// Builds one stacked gallery item, shared by both the normal (narrow,
// non-expanded) render loop below and renderExpandedStack, which reuses
// this verbatim just at full width instead of the narrower gallery column.
// `clickable` is what tells the two contexts apart: the normal view wires
// up the click-to-expand handler, the expanded stack doesn't (there's
// nothing further to expand into once you're already looking at the whole
// stack).
//
// `expandedContext` (true whenever this is called from renderExpandedStack)
// changes how a MATTED project (Kibutzim, Mactoob — a graphic shown
// "floating" on a solid-color backdrop, as opposed to real photography)
// gets released for full screen: it keeps its own colored matte background
// and the same inset ratio around the graphic — nothing about the graphic's
// own proportions or the matting percentage changes — only the ~900px cap
// and auto-centering margin that constrained it to the narrow column are
// dropped, so that colored matte itself stretches out to fill the full
// width, snapped edge-to-edge against the dividers, with the (now larger,
// same %) padding doing the rest. A `galleryFullBleed` project (real
// photography, no matte to begin with) is unaffected by expandedContext —
// it already renders edge-to-edge in both contexts via --full.
function buildGalleryImageWrap(project, index, clickable, expandedContext) {
  const wrap = document.createElement('div');
  const classes = ['gallery-image-wrap'];
  if (project.galleryFullBleed) {
    classes.push('gallery-image-wrap--full');
  } else if (expandedContext) {
    classes.push('gallery-image-wrap--stretched');
  }
  wrap.className = classes.join(' ');

  const media = buildGalleryMedia(project.images[index], project);
  if (media) {
    if (media.tagName === 'VIDEO') {
      attachHoverPlay(wrap, media);
    }
    wrap.appendChild(media);
  } else {
    // Slot exists in the Figma frame but has no image fill yet.
    const slot = document.createElement('div');
    slot.className = 'gallery-image-slot-empty';
    slot.textContent = 'התמונה הזו עדיין לא הועלתה בפיגמה';
    wrap.appendChild(slot);
  }

  if (clickable && isExpandableImage(project, index)) {
    wrap.classList.add('gallery-image-wrap--expandable');
    wrap.addEventListener('click', () => expandImage(index));
  }

  return wrap;
}

// The one expand treatment used everywhere on the site: instead of one
// image at a time with arrow zones to step through the gallery, expanding
// blows up the WHOLE stacked gallery to full width — every image stays
// right where it already was, beneath each other with the same dividers as
// the normal view — and scrolling through that bigger stack is the entire
// interaction. The close button can't be positioned relative to any single
// image here (there isn't one "the" expanded image), so it's pinned to the
// viewport itself instead (see .gallery-expanded-close in style.css) and
// lives outside galleryScroll, on the panel, so scrolling the stack
// doesn't carry it away.
function renderExpandedStack(project, index) {
  galleryScroll.innerHTML = '';

  project.images.forEach((src, i) => {
    galleryScroll.appendChild(buildGalleryImageWrap(project, i, false, true));
  });

  const closeBtn = buildCloseButton(() => closeExpandedImage());
  galleryPanel.appendChild(closeBtn);

  // Land on the image that was actually clicked, not always back at the
  // top of image 1 — expanding image 4 should feel like zooming in on
  // image 4, not resetting your place in the gallery.
  const targetWrap = galleryScroll.children[index];
  if (targetWrap) {
    targetWrap.scrollIntoView({ block: 'start' });
  }
}

function renderGallery() {
  // renderExpandedStack's close button lives on galleryPanel itself, not
  // inside galleryScroll (see there for why) — so it's the one piece of
  // expanded-view markup that survives a `galleryScroll.innerHTML = ''`
  // and has to be cleaned up explicitly, on every render, regardless of
  // which branch below actually runs. Otherwise closing the stack, or
  // switching projects/views out of it, leaves a dead fixed button
  // behind (and re-expanding the stack would stack a second one on top).
  galleryPanel.querySelectorAll('.gallery-expanded-close').forEach((el) => el.remove());

  // Mobile-only hook: the About page's bio+portrait shouldn't be trapped in
  // the same fixed-height internal-scroll box used for project image
  // galleries — see .gallery-panel--about in style.css.
  galleryPanel.classList.toggle('gallery-panel--about', state.view === 'about');

  const isExpanded = state.view === 'project' && state.expandedIndex !== null;
  // No transition anywhere here on purpose — Gilad asked for this switch to
  // be instant, same as the works-rail active-card treatment above.
  layoutEl.classList.toggle('layout--expanded', isExpanded);
  galleryScroll.classList.toggle('gallery-scroll--expanded', isExpanded);

  if (state.view === 'about') {
    renderAboutGallery();
    return;
  }

  const project = getProject(state.activeId);
  galleryPanel.style.background = project.bg;

  if (isExpanded) {
    renderExpandedStack(project, state.expandedIndex);
    return;
  }

  galleryScroll.innerHTML = '';

  if (project.ready && project.images.length) {
    project.images.forEach((src, index) => {
      galleryScroll.appendChild(buildGalleryImageWrap(project, index, true));
    });
    return;
  }

  const placeholder = document.createElement('div');
  placeholder.className = 'gallery-placeholder';
  const img = document.createElement('img');
  img.src = project.thumb;
  img.alt = projectTitle(project);
  placeholder.appendChild(img);
  const note = document.createElement('p');
  note.textContent = 'עמוד העבודה הזה עדיין בעיצוב בפיגמה — הגלריה תתעדכן כאן ברגע שהעמוד יהיה מוכן.';
  placeholder.appendChild(note);
  galleryScroll.appendChild(placeholder);
}

function renderTopbar() {
  worksLink.classList.toggle('is-active', state.view === 'project');
  siteNameLink.classList.toggle('is-active', state.view === 'about');
}

function render() {
  renderTopbar();
  renderInfoPanel();
  renderGallery();
  renderRail();
}

function selectProject(id) {
  state.activeId = id;
  state.view = 'project';
  render();
  galleryScroll.scrollTo({ top: 0 });
}

function showAbout() {
  state.view = 'about';
  render();
}

function showWorks() {
  state.view = 'project';
  render();
}

worksLink.addEventListener('click', (e) => {
  e.preventDefault();
  showWorks();
});

siteNameLink.addEventListener('click', (e) => {
  e.preventDefault();
  showAbout();
});

// Step 1 of the English-site rollout: just the topbar's own two labels
// (site name / "works" link), keyed by the `data-i18n` attribute already
// sitting on those elements in index.html. Per-project copy, the About
// page, and the RTL/LTR page direction are deliberately NOT touched yet —
// those come in later passes once this interaction is confirmed correct.
const I18N = {
  he: {
    name: 'גלעד היימן',
    works: 'עבודות',
  },
  en: {
    name: 'Gilad Heimann',
    works: 'Work',
  },
};

function applyLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute('data-lang', lang);
  state.lang = lang;
  const dict = I18N[lang] || I18N.he;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) {
      el.textContent = dict[key];
    }
  });
  // Re-render so every project title on screen (info panel heading, rail
  // active-overlay title, image alt text) picks up projectTitle()'s
  // language-aware result too — not just the topbar's own two labels.
  render();
}

langToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const next = html.getAttribute('data-lang') === 'en' ? 'he' : 'en';
  applyLanguage(next);
});

// English is the site's default (per Gilad) — applyLanguage() both sets the
// topbar labels and does the initial render(), so this replaces the old
// bare `render()` call rather than running alongside it.
applyLanguage('en');
