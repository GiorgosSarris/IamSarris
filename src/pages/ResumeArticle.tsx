import type { AccentColor } from '../data/newspaper'
import type { ResumeSection } from '../data/resume'
import { corkboardBackgroundStyle } from '../corkboardBackground'

interface Props {
  title: string
  subtitle: string
  sections: ResumeSection[]
  accentColor: AccentColor
  onBack: () => void
}

function ResumeArticle({ title, subtitle, sections, accentColor, onBack }: Props) {
  return (
    <main className="flyer-page">
      <button className="back-link" onClick={onBack} type="button">
        ← Back
      </button>

      <div className="corkboard-frame" style={corkboardBackgroundStyle}>
        <article className="flyer-sheet">
          <header className="flyer-header">
            <span className={`flyer-kicker flyer-kicker-${accentColor}`}>{subtitle}</span>
            <h1>{title}</h1>
          </header>

          <div className="flyer-grid">
            {sections.map((section) => (
              <section className="flyer-block" key={section.title}>
                <h2>{section.title}</h2>

                {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

                {section.experience?.map((item) => (
                  <div className="flyer-experience-item" key={item.role}>
                    <div className="flyer-experience-heading">
                      <strong>{item.role}</strong>
                      <span>{item.period}</span>
                    </div>
                    {item.summary && <p>{item.summary}</p>}
                    {item.bullets && (
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}

export default ResumeArticle
