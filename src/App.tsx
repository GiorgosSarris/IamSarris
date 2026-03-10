import { useEffect, useState } from 'react'
import './App.css'

type Route = 'home' | 'section-1' | 'section-2' | 'section-3' | 'section-5' | 'contact-me'

type ArticleLink = {
  route: Exclude<Route, 'home'>
  label: string
  kicker: string
  blurb: string
  href?: string
}

type ResumeSection = {
  title: string
  body?: string[]
  bullets?: string[]
}

const articleLinks: ArticleLink[] = [
  {
    route: 'section-1',
    label: 'Βιογραφικό Σημείωμα',
    kicker: 'Greek CV',
    blurb: 'Opens the Greek version of the CV in an article-style page.',
  },
  {
    route: 'section-2',
    label: 'Curriculum Vitae',
    kicker: 'English CV',
    blurb: 'Opens the English translation of the CV in the same editorial style.',
  },
  {
    route: 'section-3',
    label: 'GitHub',
    kicker: 'External Link',
    blurb: 'Opens your GitHub profile in a new browser tab.',
    href: 'https://github.com/GiorgosSarris',
  },
  {
    route: 'section-5',
    label: 'LinkedIn',
    kicker: 'External Link',
    blurb: 'Opens your LinkedIn profile in a new browser tab.',
    href: 'https://www.linkedin.com/in/%CE%B3%CE%B9%CF%8E%CF%81%CE%B3%CE%BF%CF%82-%CF%83%CE%B1%CF%81%CF%81%CE%AE%CF%82-b917753ab/',
  },
  {
    route: 'contact-me',
    label: 'Contact Me',
    kicker: 'Directory',
    blurb: 'Keeps the contact details in one clean article block.',
  },
]

type HistoricalFeature = {
  className: string
  kicker: string
  title: string
  body: string
}

type DatelineStory = {
  dateline: string
  headline: string
  summary: string
}

const historicalTicker = [
  '1453 Siege Live',
  '1821 Revolution Feed',
  '1666 Fire Update',
  '1776 Press Run',
  '1522 Siege Watch',
  '490 BCE Naval Push',
]

const historicalFeatures: HistoricalFeature[] = [
  {
    className: 'faded-article faded-article-a',
    kicker: 'City Desk',
    title: '1453 • Constantinople',
    body: 'Engineers report every breach along the Theodosian walls via blink telegraphs, urging a last-minute software patch for the defenses.',
  },
  {
    className: 'faded-article faded-article-b',
    kicker: 'Field Notes',
    title: '1821 • Peloponnese',
    body: 'Messolonghi couriers beam encrypted Filiki Eteria ciphers to allied camps, keeping the uprising synchronized like a global newsroom.',
  },
  {
    className: 'faded-article faded-article-c',
    kicker: 'Science',
    title: '1666 • London',
    body: 'Thermal sensors along the Thames map the Great Fire in real time while architects livestream safer blueprints to the guilds.',
  },
  {
    className: 'faded-article faded-article-d',
    kicker: 'Diplomatic Pouch',
    title: '1776 • Philadelphia',
    body: 'The Declaration committee signs with secure cloud ink and pushes notifications to every royal court watching the colonies.',
  },
  {
    className: 'faded-article faded-article-e',
    kicker: 'Explorers',
    title: '1519 • Tenochtitlan',
    body: 'Cartographers upload interactive lake charts so returning ships can navigate the New World with fresh telemetry.',
  },
]

const datelineStories: DatelineStory[] = [
  {
    dateline: 'Athens • 490 BCE',
    headline: 'Marathon run goes live',
    summary: 'Signal runners stream every heartbeat of the battle to the Agora using bronze relay towers.',
  },
  {
    dateline: 'Alexandria • 48 BCE',
    headline: 'Library starts cloud backup',
    summary: 'Scribes digitize scrolls on rolling carts to keep every treatise safe amid political turmoil.',
  },
  {
    dateline: 'London • 1666',
    headline: 'Bucket brigade gets hyperlinked',
    summary: 'Notification beacons reroute citizens to safe lanes while Sir Christopher Wren publishes rebuilding drafts.',
  },
  {
    dateline: 'Constantinople • 1453',
    headline: 'Walls broadcast telemetry',
    summary: 'Sensors in cannon ports transmit barrel heat so crews know when to rotate artillery.',
  },
  {
    dateline: 'Florence • 1504',
    headline: 'David receives patch notes',
    summary: 'Michelangelo posts changelog entries for the marble statue and crowdsources critiques from patrons.',
  },
  {
    dateline: 'Quito • 1736',
    headline: 'Equator mission sends stories',
    summary: 'French geographers publish daily snaps of measuring instruments to lock in the zero parallel.',
  },
]

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
  'Mathematical Analysis I',
  'Computer Architecture I',
  'Data Structures and Programming Techniques',
  'Electromagnetism',
  'Mathematical Analysis II',
  'Object-Oriented Programming',
  'Probability and Statistics',
  'Signals and Systems',
  'Algorithms and Complexity',
  'Communication Networks I',
  'Communication Systems',
  'Database Design and Use',
  'Database Systems Implementation',
  'Operating Systems',
  'Computer Graphics',
  'Numerical Analysis',
  'Number Theory',
  'Artificial Intelligence I',
  'Data Mining Techniques',
  'Structure and Institutions of the European Union',
  'Educational Psychology',
  'Project Management and Scientific Presentation / Writing Techniques',
  'Innovation and Entrepreneurship',
]

const greekResume: ResumeSection[] = [
  {
    title: 'Σύντομη Παρουσίαση',
    body: [
      'Φοιτητής Πληροφορικής στο ΕΚΠΑ με ισχυρό υπόβαθρο σε αλγορίθμους, βάσεις δεδομένων, λειτουργικά συστήματα και τεχνητή νοημοσύνη.',
      'Εμπειρία σε C, C++, Python, Java, Assembly και SQL, με εξοικείωση σε Linux και ανάπτυξη backend / frontend εφαρμογών.',
    ],
  },
  {
    title: 'Thesis',
    body: [
      'Ανάπτυξη ολοκληρωμένου συστήματος αξιολόγησης εργασιών προγραμματισμού με Backend σε Python και Frontend σε Streamlit.',
      'Η εφαρμογή επιτρέπει σε καθηγητές να αξιολογούν εργασίες σε C, C++, Python, Java και JavaScript.',
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
    title: 'Τεχνικές Δεξιότητες',
    bullets: [
      'Languages: C, C++, Python, Java, Assembly, SQL',
      'Tools: Linux Terminal, GCC, Git',
      'Databases: SQL',
      'Other: AI Agents, Data Mining, Debugging, Electrical Wiring',
      'Operating Systems: Linux, Windows',
    ],
  },
  {
    title: 'Εκπαίδευση',
    body: [
      'Προπτυχιακός Φοιτητής, Τμήμα Πληροφορικής και Τηλεπικοινωνιών, Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών (2023 - Σήμερα).',
    ],
    bullets: greekCourses,
  },
  {
    title: 'Επαγγελματική Εμπειρία',
    bullets: [
      'Σερβιτόρος, Εστιατόριο «Σκλήθρι», Σκιάθος (2022 - 2025)',
      'Σερβιτόρος Παραλίας / Beach Bar με 7 έτη εμπειρίας',
      'Ανάπτυξη υπευθυνότητας, διαχείρισης πίεσης και ομαδικής συνεργασίας.',
    ],
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
]

const englishResume: ResumeSection[] = [
  {
    title: 'Profile',
    body: [
      'Computer Science student at the National and Kapodistrian University of Athens with a strong background in algorithms, databases, operating systems and artificial intelligence.',
      'Hands-on experience with C, C++, Python, Java, Assembly and SQL, along with familiarity in Linux and backend / frontend application development.',
    ],
  },
  {
    title: 'Thesis',
    body: [
      'Development of an integrated programming assignment evaluation system with a Python backend and a Streamlit frontend.',
      'The application allows instructors to assess assignments written in C, C++, Python, Java and JavaScript.',
    ],
    bullets: [
      'Student folder and file analysis.',
      'Automatic programming language detection.',
      'Extraction of critical information from source code.',
      'Combination of assignment brief and instructor requirements.',
      'Generation of personalized quizzes ready for eClass.',
    ],
  },
  {
    title: 'Technical Skills',
    bullets: [
      'Languages: C, C++, Python, Java, Assembly, SQL',
      'Tools: Linux Terminal, GCC, Git',
      'Databases: SQL',
      'Other: AI Agents, Data Mining, Debugging, Electrical Wiring',
      'Operating Systems: Linux, Windows',
    ],
  },
  {
    title: 'Education',
    body: [
      'Undergraduate Student, Department of Informatics and Telecommunications, National and Kapodistrian University of Athens (2023 - Present).',
    ],
    bullets: englishCourses,
  },
  {
    title: 'Work Experience',
    bullets: [
      'Waiter, Sklithri Restaurant, Skiathos (2022 - 2025)',
      'Beach waiter / beach bar service with 7 years of experience',
      'Built responsibility, pressure management and strong teamwork skills.',
    ],
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
]

const contactItems = [
  { label: 'Phone', value: '6947011911', href: 'tel:6947011911' },
  { label: 'Email', value: 'sarrisgeorge5@gmail.com', href: 'mailto:sarrisgeorge5@gmail.com' },
  { label: 'GitHub', value: 'github.com/GiorgosSarris', href: 'https://github.com/GiorgosSarris' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/giorgos-sarris',
    href: 'https://www.linkedin.com/in/%CE%B3%CE%B9%CF%8E%CF%81%CE%B3%CE%BF%CF%82-%CF%83%CE%B1%CF%81%CF%81%CE%AE%CF%82-b917753ab/',
  },
]

function getRouteFromHash(): Route {
  const hash = window.location.hash.replace('#', '')

  if (
    hash === 'section-1' ||
    hash === 'section-2' ||
    hash === 'section-3' ||
    hash === 'section-5' ||
    hash === 'contact-me'
  ) {
    return hash
  }

  return 'home'
}

function navigateTo(route: Route) {
  window.location.hash = route === 'home' ? '' : route
}

function openArticle(item: ArticleLink) {
  if (item.href) {
    window.open(item.href, '_blank', 'noopener,noreferrer')
    return
  }

  navigateTo(item.route)
}

function ResumeArticle({
  title,
  subtitle,
  sections,
}: {
  title: string
  subtitle: string
  sections: ResumeSection[]
}) {
  return (
    <main className="resume-page">
      <button className="back-link" onClick={() => navigateTo('home')}>
        Back
      </button>
      <article className="resume-sheet">
        <header className="resume-header">
          <span className="resume-kicker">{subtitle}</span>
          <h1>{title}</h1>
        </header>

        <div className="resume-grid">
          {sections.map((section) => (
            <section className="resume-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}

function ContactArticle() {
  return (
    <main className="resume-page">
      <button className="back-link" onClick={() => navigateTo('home')}>
        Back
      </button>
      <article className="resume-sheet contact-sheet">
        <header className="resume-header">
          <span className="resume-kicker">Directory</span>
          <h1>Contact Me</h1>
        </header>

        <div className="contact-grid">
          {contactItems.map((item) => (
            <a className="contact-card" href={item.href} key={item.label} target="_blank" rel="noreferrer">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </article>
    </main>
  )
}

function App() {
  const [route, setRoute] = useState<Route>(getRouteFromHash())

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRouteFromHash())
    }

    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  if (route === 'section-1') {
    return <ResumeArticle title="Γεώργιος Νικόλαος Σαρρής" subtitle="Βιογραφικό Σημείωμα" sections={greekResume} />
  }

  if (route === 'section-2') {
    return <ResumeArticle title="Georgios Nikolaos Sarris" subtitle="Curriculum Vitae" sections={englishResume} />
  }

  if (route === 'contact-me') {
    return <ContactArticle />
  }

  return (
    <main className="newspaper-home">
      <section className="newspaper-layout" aria-label="Navigation articles">
        <div className="paper-stack paper-stack-left" aria-hidden="true" />
        <div className="paper-stack paper-stack-right" aria-hidden="true" />

        <header className="newspaper-masthead">
          <span className="masthead-rule" aria-hidden="true" />
          <h1>The Portfolio Times</h1>
          <span className="masthead-rule" aria-hidden="true" />
        </header>

        <section className="news-strip lead-strip" aria-hidden="true">
          <span className="strip-label">Front Page</span>
          <p>Live desk: siege balloons over Constantinople push alerts while Renaissance printers upload fresh schematics for the future.</p>
        </section>

        <section className="news-strip chronicle-strip" aria-hidden="true">
          <span className="strip-label">Chronicle</span>
          <p>1821: the Filiki feed ignites. 1666: the fire maps itself in real time. 1504: David gets design review comments.</p>
        </section>

        <button className="article-card article-card-lead" onClick={() => openArticle(articleLinks[0])} type="button">
          <span className="article-kicker">{articleLinks[0].kicker}</span>
          <h2>{articleLinks[0].label}</h2>
          <span className="article-divider" aria-hidden="true" />
          <p>{articleLinks[0].blurb}</p>
        </button>

        <aside className="sidebar-note" aria-hidden="true">
          <span className="sidebar-kicker">Notebook</span>
          <h3>Chrononaut Editors</h3>
          <p>They print yesterday and medieval dispatches side by side, reserving the prime headline for your portfolio.</p>
        </aside>

        <button className="article-card article-card-profile" onClick={() => openArticle(articleLinks[1])} type="button">
          <span className="article-kicker">{articleLinks[1].kicker}</span>
          <h2>{articleLinks[1].label}</h2>
          <span className="article-divider" aria-hidden="true" />
          <p>{articleLinks[1].blurb}</p>
        </button>

        <section className="mini-column" aria-hidden="true">
          <span className="mini-kicker">Morning Brief</span>
          <p>Reports from Piraeus say triremes with onboard Wi-Fi dock at sunrise delivering tablets filled with code.</p>
        </section>

        <button className="article-card article-card-github" onClick={() => openArticle(articleLinks[2])} type="button">
          <span className="article-kicker">{articleLinks[2].kicker}</span>
          <h2>{articleLinks[2].label}</h2>
          <span className="article-divider" aria-hidden="true" />
          <p>{articleLinks[2].blurb}</p>
        </button>

        <section className="quote-block" aria-hidden="true">
          <p>“The best front page streams both marathons and pull requests in one bulletin.”</p>
        </section>

        <button className="article-card article-card-contact" onClick={() => openArticle(articleLinks[4])} type="button">
          <span className="article-kicker">{articleLinks[4].kicker}</span>
          <h2>{articleLinks[4].label}</h2>
          <span className="article-divider" aria-hidden="true" />
          <p>{articleLinks[4].blurb}</p>
        </button>

        <section className="ticker-row" aria-hidden="true">
          {historicalTicker.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        {historicalFeatures.map((feature) => (
          <section className={feature.className} aria-hidden="true" key={feature.title}>
            <span className="mini-kicker">{feature.kicker}</span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </section>
        ))}

        <button className="article-card article-card-extra" onClick={() => openArticle(articleLinks[3])} type="button">
          <span className="article-kicker">{articleLinks[3].kicker}</span>
          <h2>{articleLinks[3].label}</h2>
          <span className="article-divider" aria-hidden="true" />
          <p>{articleLinks[3].blurb}</p>
        </button>

        <section className="timeline-grid" aria-label="Historic live feed">
          {datelineStories.map((story) => (
            <article className="timeline-card" key={story.headline}>
              <span className="timeline-meta">{story.dateline}</span>
              <h3>{story.headline}</h3>
              <p>{story.summary}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}

export default App
