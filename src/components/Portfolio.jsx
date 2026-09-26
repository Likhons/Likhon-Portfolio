import { useState } from 'react';

// To show a button, set `github` / `demo` to a real URL. Empty = no button.
// To show a screenshot, add `img: `${BASE}your-image.png`` to a project.
const projects = [
  {
    id: 1,
    featured: true,
    icon: 'bx-code-curly',
    label: 'Software / Web',
    categories: ['software', 'web'],
    title: 'Bangla Compiler & Lexical Analyzer',
    desc: 'A web-based compiler that performs lexical analysis and parsing on Bangla code, builds an abstract syntax tree, and translates it into executable Python.',
    tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: '',
    demo: '',
  },
  {
    id: 2,
    featured: true,
    icon: 'bx-buildings',
    label: 'Web / Software',
    categories: ['web', 'software'],
    title: 'University Central Internship & Company Communication Portal',
    desc: 'A role-based web platform connecting students, companies and coordinators for internship and recruitment activities, built with Agile Scrum.',
    tech: ['Web Development', 'Database', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: '',
    demo: '',
  },
  {
    id: 3,
    icon: 'bx-terminal',
    label: 'System / Linux',
    categories: ['system'],
    title: 'Linux User Management Automation Script',
    desc: 'A Linux CLI tool that automates user and group management with separate admin/user workflows, including password strength checks, SHA-256 hashing and action logging.',
    tech: ['Linux', 'Bash Shell Scripting', 'SHA-256'],
    github: '',
    demo: '',
  },
  {
    id: 4,
    icon: 'bx-data',
    label: 'Database',
    categories: ['database'],
    title: 'Bank Database Management System',
    desc: 'A database management project designed to model banking operations and demonstrate relational database concepts.',
    tech: ['MySQL', 'SQL', 'Database Management'],
    github: '',
    demo: '',
  },
  {
    id: 5,
    icon: 'bx-chip',
    label: 'Embedded / Hardware',
    categories: ['embedded'],
    title: 'Arduino Railway Crossing System',
    desc: 'An Arduino-based railway crossing safety system designed to demonstrate automated railway gate control using sensors and embedded logic.',
    tech: ['Arduino', 'Embedded C/C++', 'Sensors'],
    github: '',
    demo: '',
  },
];

const FILTERS = [
  { key: 'web', label: 'Web' },
  { key: 'software', label: 'Software' },
  { key: 'database', label: 'Database' },
  { key: 'system', label: 'System' },
  { key: 'embedded', label: 'Embedded' },
];

// Only show filters that actually have projects
const activeFilters = [
  { key: 'all', label: 'All' },
  ...FILTERS.filter((f) => projects.some((p) => p.categories.includes(f.key))),
];

function Portfolio() {
  const [filter, setFilter] = useState('all');

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">My <span>Projects</span></h2>
      <p className="section-subtitle">Selected academic projects</p>

      <div className="portfolio-filter">
        {activeFilters.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${filter === f.key ? 'active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="portfolio-container">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`portfolio-box ${p.featured ? 'portfolio-box-featured' : ''} ${filter !== 'all' && !p.categories.includes(filter) ? 'hidden' : ''}`}
            data-category={p.categories.join(' ')}
          >
            <div className="portfolio-thumb">
              {p.img ? (
                <img src={p.img} alt={p.title} loading="lazy" />
              ) : (
                <i className={`bx ${p.icon}`}></i>
              )}
              <span className="portfolio-badge">Academic Project</span>
            </div>
            <div className="portfolio-body">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <ul className="skill-tags">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(p.github || p.demo) && (
                <div className="portfolio-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`}>
                      <i className="bx bxl-github"></i> GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`}>
                      <i className="bx bx-link-external"></i> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;