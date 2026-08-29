export type ExperienceItem = {
  role: string
  period: string
  summary?: string
  bullets?: string[]
}

export type ResumeSection = {
  title: string
  body?: string[]
  bullets?: string[]
  experience?: ExperienceItem[]
}

const greekCourses = [
  'Γραμμική Άλγεβρα',
  'Διακριτά Μαθηματικά',
  'Εισαγωγή στον Προγραμματισμό',
  'Εισαγωγή στην Πληροφορική και Τηλεπικοινωνίες',
  'Λογική Σχεδίαση',
  'Ανάλυση 1',
  'Αρχιτεκτονική Υπολογιστών 1',
  'Δομές Δεδομένων και Τεχνικές Προγραμματισμού',
  'Ηλεκτρομαγνητισμός',
  'Ανάλυση 2',
  'Αντικειμενοστραφής Προγραμματισμός',
  'Πιθανότητες και Στατιστική',
  'Σήματα και Συστήματα',
  'Αλγόριθμοι και Πολυπλοκότητα',
  'Δίκτυα Επικοινωνιών 1',
  'Συστήματα Επικοινωνιών',
  'Σχεδίαση και Χρήση Βάσεων Δεδομένων',
  'Υλοποίηση Συστημάτων Βάσεων Δεδομένων',
  'Λειτουργικά Συστήματα',
  'Γραφικά',
  'Αριθμητική Ανάλυση',
  'Θεωρία Αριθμών',
  'Τεχνητή Νοημοσύνη 1',
  'Τεχνικές Εξόρυξης Δεδομένων',
  'Αναγνώριση Προτύπων - Μηχανική Μάθηση',
  'Προγραμματισμός Συστημάτων',
  'Αλγόριθμοι Θεμελίωσης Μηχανικής Μάθησης',
  'Δομή και Θεσμοί Ευρωπαϊκής Ένωσης',
  'Παιδαγωγική Ψυχολογία',
  'Διοίκηση Έργων και Τεχνικές Παρουσίασης και Συγγραφής Επιστημονικών Εκθέσεων',
  'Καινοτομία και Επιχειρηματικότητα',
]

const englishCourses = [
  'Linear Algebra',
  'Discrete Mathematics',
  'Introduction to Programming',
  'Introduction to Informatics and Telecommunications',
  'Logic Design',
  'Analysis 1',
  'Computer Architecture 1',
  'Data Structures and Programming Techniques',
  'Electromagnetism',
  'Analysis 2',
  'Object-Oriented Programming',
  'Probability and Statistics',
  'Signals and Systems',
  'Algorithms and Complexity',
  'Communication Networks 1',
  'Communication Systems',
  'Database Design and Use',
  'Implementation of Database Systems',
  'Operating Systems',
  'Graphics',
  'Numerical Analysis',
  'Number Theory',
  'Artificial Intelligence 1',
  'Data Mining Techniques',
  'Pattern Recognition - Machine Learning',
  'Systems Programming',
  'Foundations of Machine Learning Algorithms',
  'Structure and Institutions of the European Union',
  'Educational Psychology',
  'Project Management and Techniques for Presentation and Writing Scientific Reports',
  'Innovation and Entrepreneurship',
]

export const greekResume: ResumeSection[] = [
  {
    title: 'Σύντομη Παρουσίαση',
    body: [
      'Φοιτητής Πληροφορικής στο ΕΚΠΑ με ισχυρό υπόβαθρο σε αλγορίθμους, βάσεις δεδομένων, λειτουργικά συστήματα και τεχνητή νοημοσύνη.',
      'Εμπειρία σε C, C++, Python, Java, Assembly, JavaScript, PHP, HTML, CSS και SQL. Εξοικειωμένος με περιβάλλον Linux και ανάπτυξη εφαρμογών backend/frontend.',
    ],
  },
  {
    title: 'Πτυχιακή Εργασία (Thesis)',
    body: [
      'Ανάπτυξη ολοκληρωμένου συστήματος αξιολόγησης εργασιών προγραμματισμού.',
      'Backend: Python | Frontend: Streamlit. Η εφαρμογή επιτρέπει σε καθηγητές να αξιολογούν εργασίες σε C, C++, Python, Java και JavaScript.',
    ],
    bullets: [
      'Ανάλυση φακέλων και αρχείων φοιτητών.',
      'Αυτόματη αναγνώριση γλώσσας προγραμματισμού.',
      'Εξαγωγή κρίσιμων πληροφοριών από τον κώδικα.',
      'Συνδυασμός εκφώνησης και απαιτήσεων καθηγητή.',
      'Δημιουργία εξατομικευμένου quiz έτοιμου για eClass.',
    ],
  },
  {
    title: 'Επαγγελματική Εμπειρία',
    experience: [
      {
        role: 'Full Stack Software Engineer — Ironcloud Solutions',
        period: 'Μάιος 2026 – Σήμερα',
        summary: 'Συμμετοχή σε διάφορα έργα, μεταξύ των οποίων:',
        bullets: [
          'mytimologisi: mytimologisi.gr',
          'Νέα ιστοσελίδα της ΓΥΣ: web.gys.gr',
          'ipartsgroup.gr της Interamerican',
          'Εργασίες συντήρησης hardware και υποδομής για την Bildium Constructions',
        ],
      },
      {
        role: 'Σερβιτόρος — Εστιατόριο «Σκλήθρι», Σκιάθος',
        period: '2022 – 2025',
        summary: 'Ανάπτυξη υπευθυνότητας, διαχείρισης πίεσης και ομαδικής συνεργασίας.',
      },
      {
        role: 'Σερβιτόρος Παραλίας / Beach Bar',
        period: '7 έτη εμπειρίας',
        summary: 'Εξυπηρέτηση πελατών και διαχείριση φιλοξενίας σε απαιτητικό περιβάλλον.',
      },
    ],
  },
  {
    title: 'Τεχνικές Δεξιότητες',
    bullets: [
      'Languages: C, C++, Python, Java, Assembly, SQL, JavaScript, PHP, HTML, CSS',
      'Tools: Linux Terminal, GCC, Git, Webecr, REST API',
      'Databases: SQL',
      'Operating Systems: Linux (Ubuntu, Manjaro), Windows, IBM i IFS',
      'Other: Full Stack Software Engineering, PC Hardware, Server Building, AI Agents, Data Mining, Debugging, Electrical Wiring',
    ],
  },
  {
    title: 'Εκπαίδευση',
    body: [
      'Προπτυχιακός Φοιτητής – Τμήμα Πληροφορικής & Τηλεπικοινωνιών, Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών (2023 – Σήμερα).',
      'Ενδεικτικά Περασμένα Μαθήματα:',
    ],
    bullets: greekCourses,
  },
  {
    title: 'Γλώσσες',
    bullets: [
      'Ελληνικά: Μητρική',
      'Αγγλικά: C2 (Proficiency Michigan)',
      'Γαλλικά: B2 (DELF)',
      'Ιταλικά: Καλά',
    ],
  },
  {
    title: 'Δίπλωμα Οδήγησης',
    bullets: [
      'Κάτοχος διπλώματος οδήγησης μηχανής και αυτοκινήτου.',
      'Διαθέτω δικό μου μέσο μεταφοράς, εξασφαλίζοντας αξιόπιστη και έγκαιρη προσέλευση στην εργασία.',
    ],
  },
]

export const englishResume: ResumeSection[] = [
  {
    title: 'Professional Summary',
    body: [
      'Computer Science student at the National and Kapodistrian University of Athens with a strong background in algorithms, databases, operating systems, and artificial intelligence.',
      'Experienced in C, C++, Python, Java, Assembly, JavaScript, PHP, HTML, CSS, and SQL. Familiar with Linux environments and backend/frontend application development.',
    ],
  },
  {
    title: 'Thesis',
    body: [
      'Development of an Integrated Programming Assignment Evaluation System.',
      'Backend: Python | Frontend: Streamlit. The application allows instructors to evaluate assignments in C, C++, Python, Java, and JavaScript.',
    ],
    bullets: [
      'Analysis of student folders and files.',
      'Automatic identification of programming languages.',
      'Extraction of critical information from code.',
      'Integration of assignment prompts and instructor requirements.',
      'Generation of personalized quizzes ready for eClass.',
    ],
  },
  {
    title: 'Professional Experience',
    experience: [
      {
        role: 'Full Stack Software Engineer — Ironcloud Solutions',
        period: 'May 2026 – Present',
        summary: 'Contributing to various projects including:',
        bullets: [
          'mytimologisi: mytimologisi.gr',
          'New website of GYS: web.gys.gr',
          'ipartsgroup.gr of Interamerican',
          'Hardware maintenance and infrastructure work for Bildium Constructions',
        ],
      },
      {
        role: 'Waiter — "Sklithri" Restaurant, Skiathos',
        period: '2022 – 2025',
        summary: 'Developed responsibility, pressure management, and teamwork.',
      },
      {
        role: 'Beach Bar Waiter — Skiathos',
        period: '7 years of experience',
        summary: 'Customer service and high-pressure hospitality management.',
      },
    ],
  },
  {
    title: 'Technical Skills',
    bullets: [
      'Languages: C, C++, Python, Java, Assembly, SQL, JavaScript, PHP, HTML, CSS',
      'Tools: Linux Terminal, GCC, Git, Webecr, REST API',
      'Databases: SQL',
      'Operating Systems: Linux (Ubuntu, Manjaro), Windows, IBM i IFS',
      'Other: Full Stack Software Engineering, PC Hardware, Server Building, AI Agents, Data Mining, Debugging, Electrical Wiring',
    ],
  },
  {
    title: 'Education',
    body: [
      'Undergraduate Student - Department of Informatics and Telecommunications, National and Kapodistrian University of Athens (2023 - Present).',
      'Representative Completed Courses:',
    ],
    bullets: englishCourses,
  },
  {
    title: 'Languages',
    bullets: [
      'Greek: Native',
      'English: C2 (Michigan Proficiency)',
      'French: B2 (DELF)',
      'Italian: Good',
    ],
  },
  {
    title: 'Driving License',
    bullets: [
      'Holder of both motorcycle and car driving licenses.',
      'Own means of transportation, ensuring reliable and punctual arrival at work.',
    ],
  },
]

export const contactItems = [
  { label: 'Phone', value: '6947011911', href: 'tel:6947011911' },
  { label: 'Email', value: 'sarrisgeorge5@gmail.com', href: 'mailto:sarrisgeorge5@gmail.com' },
  { label: 'GitHub', value: 'github.com/GiorgosSarris', href: 'https://github.com/GiorgosSarris' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/giorgos-sarris',
    href: 'https://www.linkedin.com/in/%CE%B3%CE%B9%CF%8E%CF%81%CE%B3%CE%BF%CF%82-%CF%83%CE%B1%CF%81%CF%81%CE%AE%CF%82-b917753ab/',
  },
]
