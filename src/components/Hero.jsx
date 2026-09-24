import { useEffect, useState } from 'react';
import { profile, stats } from '../data/profile.js';
import { LinkedInIcon, GitHubIcon, PinIcon, DownloadIcon } from './Icons.jsx';
import asset from '../utils/asset.js';

// Types out each role, pauses, deletes it, then moves to the next.
function useTypewriter(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0]);
      return;
    }
    const word = words[i % words.length];
    let t;
    if (!deleting && text === word) t = setTimeout(() => setDeleting(true), hold);
    else if (deleting && text === '') {
      setDeleting(false);
      setI((n) => n + 1);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? erase : type
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, type, erase, hold]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Open to full-stack &amp; LIMS projects
          </p>
          <h1>
            Hi, I&apos;m <span className="accent">{profile.name}</span>.
          </h1>
          <p className="hero-role" aria-label={profile.roles.join(', ')}>
            <span aria-hidden="true">
              {role}
              <span className="caret" />
            </span>
          </p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <LinkedInIcon /> LinkedIn
            </a>
            {profile.links.github && (
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <GitHubIcon /> GitHub
              </a>
            )}
            {profile.links.resume && (
              <a href={asset(profile.links.resume)} className="btn btn-ghost" download>
                <DownloadIcon /> Resume
              </a>
            )}
          </div>

          <p className="hero-location">
            <PinIcon /> {profile.location}
          </p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="avatar-ring">
            {profile.photo ? (
              <img src={asset(profile.photo)} alt="" className="avatar" />
            ) : (
              <div className="avatar avatar--initials">{profile.initials}</div>
            )}
          </div>
          <div className="code-card">
            <div className="code-card-bar">
              <span />
              <span />
              <span />
              <em>engineer.js</em>
            </div>
            <pre>
              <code>
                <span className="tk-k">const</span> <span className="tk-v">nidhin</span> = {'{'}
                {'\n  '}stack: [<span className="tk-s">&apos;React&apos;</span>, <span className="tk-s">&apos;Node&apos;</span>, <span className="tk-s">&apos;Java&apos;</span>, <span className="tk-s">&apos;SQL&apos;</span>],
                {'\n  '}domain: <span className="tk-s">&apos;LabVantage LIMS&apos;</span>,
                {'\n  '}based: <span className="tk-s">&apos;Dubai&apos;</span>,
                {'\n  '}learning: <span className="tk-s">&apos;GenAI&apos;</span>,
                {'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
