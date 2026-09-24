import { useState } from 'react';
import Section from './Section.jsx';
import { experience } from '../data/profile.js';

function Points({ points }) {
  return (
    <ul className="job-points">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const job = experience[selected];

  return (
    <Section id="experience" index="02" title="Experience">
      <div className="exp reveal">
        <div className="exp-tabs" role="tablist" aria-label="Employers">
          {experience.map((e, i) => (
            <button
              key={e.company}
              role="tab"
              id={`exp-tab-${i}`}
              aria-selected={selected === i}
              aria-controls="exp-panel"
              className={`exp-tab ${selected === i ? 'is-active' : ''}`}
              onClick={() => setSelected(i)}
            >
              <span className="exp-tab-company">{e.company}</span>
              <span className="exp-tab-period">{e.period}</span>
            </button>
          ))}
        </div>

        <article
          id="exp-panel"
          role="tabpanel"
          aria-labelledby={`exp-tab-${selected}`}
          className="exp-panel"
          key={selected}
        >
          <h3>
            {job.role} <span className="accent">@ {job.company}</span>
          </h3>
          <p className="job-meta">
            {job.period} · {job.location} · {job.type}
            {job.companyNote && <> · {job.companyNote}</>}
          </p>

          {job.groups
            ? job.groups.map((g) => (
                <div key={g.title} className="job-group">
                  <h4>{g.title}</h4>
                  <Points points={g.points} />
                </div>
              ))
            : <Points points={job.points} />}

          {job.clients && (
            <div className="job-clients">
              <h4>Clients &amp; engagements</h4>
              <ul>
                {job.clients.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          <ul className="tags">
            {job.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
