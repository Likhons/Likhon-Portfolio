const BASE = import.meta.env.BASE_URL;

// Quick facts. Everything here already appears elsewhere on the site
// (Education, Journey and Contact sections). "highlight" marks the one card
// recruiters most need, so it gets the accent treatment.
const FACTS = [
  { icon: 'bxs-graduation', label: 'Education', value: 'B.Sc. in CSE', detail: 'Daffodil International University' },
  { icon: 'bx-code-alt', label: 'Focus', value: 'Web Development', detail: 'Major: Software Development' },
  { icon: 'bx-map', label: 'Location', value: 'Dhaka, Bangladesh' },
  { icon: 'bx-briefcase', label: 'Status', value: 'Open to opportunities', detail: 'Software development roles', highlight: true },
];

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-img">
        <img
          src={`${BASE}about.webp`}
          alt="Wazid Hasan Likhon smiling while looking at his phone"
          width="800"
          height="1094"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="about-content">
        <h2 className="heading" id="about-title">About <span>Me</span></h2>
        <h3>CSE graduate focused on software and web development</h3>
        <p>
          Web development is my main focus. I enjoy turning ideas into clean, responsive
          applications with React and JavaScript, and I care about readable code, solid
          fundamentals and continuous learning.
        </p>
        <p>
          Through my degree I&apos;ve worked on academic projects in web platforms, relational
          databases, Linux scripting, compilers and embedded systems. I&apos;m now looking for a
          software development role where I can work on real projects and keep growing as a
          developer.
        </p>

        <ul className="about-stats" aria-label="Quick facts">
          {FACTS.map((fact) => (
            <li className={`stat-box${fact.highlight ? ' stat-box-highlight' : ''}`} key={fact.label}>
              <i className={`bx ${fact.icon}`} aria-hidden="true"></i>
              <div>
                <small className="stat-label">{fact.label}</small>
                <strong className="stat-value">{fact.value}</strong>
                {fact.detail && <small className="stat-detail">{fact.detail}</small>}
              </div>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-outline">Get in touch</a>
      </div>
    </section>
  );
}

export default About;