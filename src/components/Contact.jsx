import Section from './Section.jsx';
import { profile } from '../data/profile.js';
import { LinkedInIcon, GitHubIcon, MailIcon, PhoneIcon, ArrowIcon } from './Icons.jsx';

export default function Contact() {
  const { links } = profile;
  const channels = [
    links.email && { label: 'Email', value: links.email, href: `mailto:${links.email}`, Icon: MailIcon },
    { label: 'LinkedIn', value: 'in/nidhinbabu44', href: links.linkedin, Icon: LinkedInIcon },
    links.github && { label: 'GitHub', value: links.github.replace(/^https?:\/\/(www\.)?/, ''), href: links.github, Icon: GitHubIcon },
    links.phone && { label: 'Phone', value: links.phone, href: `tel:${links.phone.replace(/\s/g, '')}`, Icon: PhoneIcon },
  ].filter(Boolean);

  return (
    <Section id="contact" index="06" title="Let's work together" className="contact">
      <div className="contact-card reveal">
        <p className="contact-lead">
          I&apos;m open to conversations about full-stack development, LIMS implementation and healthcare technology projects. The quickest way to reach me is below.
        </p>
        <ul className="contact-links">
          {channels.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="contact-icon">
                  <Icon />
                </span>
                <span className="contact-text">
                  <small>{label}</small>
                  {value}
                </span>
                <ArrowIcon className="contact-arrow" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React.
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </Section>
  );
}
