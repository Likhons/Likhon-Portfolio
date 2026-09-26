// Reframed as capability, not paid service — no client/freelance claims.
// Each "builds" item is a concrete example of the kind of thing the stack
// supports, not a repeat of the Skills section's tag list.
const CAPABILITIES = [
  {
    index: '01',
    title: 'Web Applications',
    text: 'Responsive, user-friendly interfaces and full web apps built with React and modern JavaScript.',
    builds: ['Portfolio & landing pages', 'Multi-page React apps', 'Interactive UI components'],
  },
  {
    index: '02',
    title: 'Software Projects',
    text: 'Practical software built through coursework and self-study, from console programs to small applications.',
    builds: ['C / C++ programs', 'Python scripts & tools', 'Academic & practice projects'],
  },
  {
    index: '03',
    title: 'Backend & Database Solutions',
    text: 'Structured data and simple backend logic to support the applications above.',
    builds: ['MySQL schema design', 'SQL queries & reporting', 'REST API integration'],
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">What I Can <span>Build</span></h2>
      <p className="section-subtitle">Where my current skills and projects fit</p>

      <div className="services-container">
        {CAPABILITIES.map((c) => (
          <div className="services-box" key={c.title}>
            <span className="services-index" aria-hidden="true">{c.index}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <ul className="services-builds">
              {c.builds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;