import { useEffect, useState } from 'react'
import './App.css'
import type { ArticleLink, Route } from './data/newspaper'
import { articleLinks } from './data/newspaper'
import { greekResume, englishResume } from './data/resume'
import Home from './pages/Home'
import ResumeArticle from './pages/ResumeArticle'
import ContactArticle from './pages/ContactArticle'

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

// Carries the color of the pinned card you clicked on the home board into
// the page it opens, so it reads as "walking into" that same photo.
function accentFor(route: Route) {
  return articleLinks.find((item) => item.route === route)?.color ?? 'yellow'
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
    return (
      <ResumeArticle
        title="Γεώργιος Νικόλαος Σαρρής"
        subtitle="Βιογραφικό Σημείωμα"
        sections={greekResume}
        accentColor={accentFor('section-1')}
        onBack={() => navigateTo('home')}
      />
    )
  }

  if (route === 'section-2') {
    return (
      <ResumeArticle
        title="Georgios Nikolaos Sarris"
        subtitle="Curriculum Vitae"
        sections={englishResume}
        accentColor={accentFor('section-2')}
        onBack={() => navigateTo('home')}
      />
    )
  }

  if (route === 'contact-me') {
    return <ContactArticle accentColor={accentFor('contact-me')} onBack={() => navigateTo('home')} />
  }

  return <Home onOpen={openArticle} />
}

export default App
