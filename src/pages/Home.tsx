import { useState } from 'react'
import type { ArticleLink } from '../data/newspaper'
import { articleLinks } from '../data/newspaper'
import BrandIcon from '../components/BrandIcon'
import { corkboardBackgroundStyle } from '../corkboardBackground'

interface Props {
  onOpen: (item: ArticleLink) => void
}

// Drop a personal photo at public/profile.jpg to have it appear here — until
// then a plain placeholder shows instead of a broken-image icon.
const profilePhoto = `${import.meta.env.BASE_URL}profile.jpg`

// Just for flavor, in the spirit of a sports scouting report — deliberately
// generic (not actual job skills) so it stays a joke, not a claim.
const prospectStats = [
  { label: 'Work Ethic', value: 88 },
  { label: 'Luck', value: 12 },
  { label: 'Sarcasm', value: 95 },
  { label: 'Caffeine Addiction', value: 100 },
]

function Home({ onOpen }: Props) {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <main className="corkboard-page">
      <div className="corkboard-frame" style={corkboardBackgroundStyle}>
        <div className="corkboard-note">
          <span className="pin-dot pin-dot-note" aria-hidden="true" />

          <div className="prospect-head">
            <span className="prospect-tag">Prospect File</span>
            <h1>
              Curriculum <span className="note-accent">Vitae</span>
            </h1>
            <p className="prospect-tagline">Software Engineer — Developer Profile</p>
          </div>

          <div className="prospect-body">
            <div className="prospect-photo">
              {photoOk ? (
                <img src={profilePhoto} alt="Γιώργος Σαρρής" onError={() => setPhotoOk(false)} />
              ) : (
                <span className="prospect-photo-placeholder">Photo</span>
              )}
            </div>

            <div className="prospect-stats">
              {prospectStats.map((stat) => (
                <div className="prospect-stat-row" key={stat.label}>
                  <span className="prospect-stat-label">{stat.label}</span>
                  <div className="prospect-stat-bar">
                    <span style={{ width: `${stat.value}%` }} />
                  </div>
                  <span className="prospect-stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pin-cards">
          {articleLinks.map((item, index) =>
            item.variant === 'polaroid' ? (
              <button
                key={item.route}
                className={`pin-card pin-card-photo pin-card-${index} pin-card-${item.color}`}
                onClick={() => onOpen(item)}
                type="button"
              >
                <span className="pin-dot" aria-hidden="true" />
                <span className={`pin-photo-frame pin-photo-frame-${item.icon}`}>
                  {item.icon && <BrandIcon name={item.icon} />}
                </span>
                <span className="pin-caption">{item.label}</span>
              </button>
            ) : (
              <button
                key={item.route}
                className={`pin-card pin-card-${index} pin-card-${item.color}`}
                onClick={() => onOpen(item)}
                type="button"
              >
                <span className="pin-dot" aria-hidden="true" />
                <span className="pin-tag">{item.kicker}</span>
                <span className="pin-label">{item.label}</span>
                <p className="pin-desc">{item.description}</p>
              </button>
            ),
          )}
        </div>
      </div>
    </main>
  )
}

export default Home
