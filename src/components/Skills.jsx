import Section from './Section.jsx';
import { skills } from '../data/profile.js';

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills & tools">
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={s.group} className="skill-card reveal" style={{ '--d': `${(i % 3) * 80}ms` }}>
            <h3>{s.group}</h3>
            <ul>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
