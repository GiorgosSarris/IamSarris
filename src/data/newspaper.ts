export type Route = 'home' | 'section-1' | 'section-2' | 'section-3' | 'section-5' | 'contact-me'

export type AccentColor = 'yellow' | 'pink' | 'blue' | 'green' | 'orange'

export type ArticleLink = {
  route: Exclude<Route, 'home'>
  label: string
  kicker: string
  description: string
  color: AccentColor
  variant?: 'polaroid'
  icon?: 'github' | 'linkedin'
  href?: string
}

export const articleLinks: ArticleLink[] = [
  {
    route: 'section-1',
    label: 'Βιογραφικό Σημείωμα',
    kicker: 'Greek CV',
    description: 'Πλήρες βιογραφικό στα ελληνικά — σπουδές, εμπειρία και δεξιότητες.',
    color: 'yellow',
  },
  {
    route: 'section-2',
    label: 'Curriculum Vitae',
    kicker: 'English CV',
    description: 'Full academic and professional background, in English.',
    color: 'pink',
  },
  {
    route: 'section-3',
    label: 'GitHub',
    kicker: 'External Link',
    description: 'Open-source code, personal projects and repositories.',
    color: 'orange',
    variant: 'polaroid',
    icon: 'github',
    href: 'https://github.com/GiorgosSarris',
  },
  {
    route: 'section-5',
    label: 'LinkedIn',
    kicker: 'External Link',
    description: 'Professional profile, network and career updates.',
    color: 'blue',
    variant: 'polaroid',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/%CE%B3%CE%B9%CF%8E%CF%81%CE%B3%CE%BF%CF%82-%CF%83%CE%B1%CF%81%CF%81%CE%AE%CF%82-b917753ab/',
  },
  {
    route: 'contact-me',
    label: 'Contact Me',
    kicker: 'Directory',
    description: 'Phone, email and social links to get in touch directly.',
    color: 'green',
  },
]
