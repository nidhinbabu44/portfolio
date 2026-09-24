import Section from './Section.jsx';
import { profile } from '../data/profile.js';

const FOCUS = [
  { title: 'Full-stack engineering', body: 'React frontends, Node/Express APIs, and tuned MS-SQL, MySQL and MongoDB databases.' },
  { title: 'Laboratory informatics', body: 'LabVantage LIMS configuration, custom Java actions, UAT and go-live support.' },
  { title: 'Business analysis', body: 'Turning clinical and lab workflows into clear requirements and working software.' },
];

export default function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="about-grid">
        <div className="about-text reveal">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="lang-list">
            {profile.languages.map((l) => (
              <li key={l.name}>
                <strong>{l.name}</strong> <span>{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="focus-list">
          {FOCUS.map((f, i) => (
            <li key={f.title} className="focus-card reveal" style={{ '--d': `${i * 80}ms` }}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
