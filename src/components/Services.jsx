const SERVICES = [
  {
    icon: 'bx-code-alt',
    title: 'Web Development',
    text: 'Building responsive, modern and user-friendly websites and web interfaces.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    icon: 'bx-laptop',
    title: 'Software Development',
    text: 'Developing practical software solutions and web applications using modern development practices.',
    tags: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    icon: 'bx-data',
    title: 'Database & Backend',
    text: 'Working with databases and backend technologies, including MySQL, SQL and REST APIs.',
    tags: ['MySQL', 'SQL', 'REST API'],
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <p className="section-subtitle">What I can build and work on</p>

      <div className="services-container">
        {SERVICES.map((s) => (
          <div className="services-box" key={s.title}>
            <div className="services-icon"><i className={`bx ${s.icon}`}></i></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ul className="skill-tags">
              {s.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;