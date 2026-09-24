import Section from './Section.jsx';
import { education, certifications } from '../data/profile.js';
import { AwardIcon } from './Icons.jsx';

export default function Education() {
  return (
    <Section id="education" index="05" title="Education & certifications">
      <div className="edu-grid">
        <ol className="timeline reveal">
          {education.map((e) => (
            <li key={e.degree}>
              <span className="timeline-period">{e.period}</span>
              <h3>{e.degree}</h3>
              <p className="timeline-school">{e.school}</p>
              <p className="timeline-grade">Grade: {e.grade}</p>
              {e.note && <p className="timeline-note">{e.note}</p>}
            </li>
          ))}
        </ol>

        <ul className="cert-list">
          {certifications.map((c, i) => (
            <li key={c.title} className="cert reveal" style={{ '--d': `${i * 70}ms` }}>
              <span className="cert-icon">
                <AwardIcon />
              </span>
              <div>
                <h3>{c.title}</h3>
                <p>
                  {c.issuer} · {c.date}
                </p>
                {c.id && <p className="cert-id">ID {c.id}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
