import { useMemo, useState } from 'react';
import Section from './Section.jsx';
import { projects, profile } from '../data/profile.js';
import { GitHubIcon, ArrowIcon } from './Icons.jsx';

export default function Projects() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], []);
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" index="03" title="Selected projects">
      <div className="filters reveal" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button key={c} className={`chip ${filter === c ? 'is-active' : ''}`} aria-pressed={filter === c} onClick={() => setFilter(c)}>
            {c}
            <span className="chip-count">{c === 'All' ? projects.length : projects.filter((p) => p.category === c).length}</span>
          </button>
        ))}
      </div>

      <ul className="project-grid">
        {shown.map((p) => (
          <li key={p.title} className={`project-card ${p.featured && filter === 'All' ? 'project-card--featured' : ''}`}>
            <div className="project-top">
              <span className="project-cat">{p.category}</span>
              <span className="project-period">{p.period}</span>
            </div>
            <h3>{p.title}</h3>
            <p className="project-org">{p.org}</p>
            <p className="project-desc">{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {(p.repo || p.live) && (
              <div className="project-links">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <GitHubIcon width={15} height={15} /> Code
                  </a>
                )}
                {p.repo2 && (
                  <a href={p.repo2.url} target="_blank" rel="noreferrer">
                    <GitHubIcon width={15} height={15} /> {p.repo2.label}
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <ArrowIcon width={15} height={15} /> Live
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {profile.links.github && (
        <p className="projects-more reveal">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GitHubIcon /> See more on GitHub
          </a>
        </p>
      )}
    </Section>
  );
}
