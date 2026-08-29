import type { AccentColor } from '../data/newspaper'
import { contactItems } from '../data/resume'
import { corkboardBackgroundStyle } from '../corkboardBackground'

interface Props {
  accentColor: AccentColor
  onBack: () => void
}

function ContactArticle({ accentColor, onBack }: Props) {
  return (
    <main className="flyer-page">
      <button className="back-link" onClick={onBack} type="button">
        ← Back
      </button>

      <div className="corkboard-frame" style={corkboardBackgroundStyle}>
        <article className="flyer-sheet flyer-sheet-contact">
          <header className="flyer-header">
            <span className={`flyer-kicker flyer-kicker-${accentColor}`}>Directory</span>
            <h1>Contact Me</h1>
          </header>

          <div className="contact-grid">
            {contactItems.map((item) => (
              <div className="contact-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}

export default ContactArticle
