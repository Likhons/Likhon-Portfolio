const SKILL_GROUPS = [
  {
    icon: 'bx-code-alt',
    title: 'Frontend',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Responsive Design'],
  },
  {
    icon: 'bx-server',
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'REST API', 'JWT Authentication'],
  },
  {
    icon: 'bx-data',
    title: 'Database',
    tags: ['PostgreSQL', 'SQL'],
  },
  {
    icon: 'bx-wrench',
    title: 'Tools & Workflow',
    tags: ['Git', 'GitHub', 'VS Code', 'Vite', 'Docker'],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <p className="section-subtitle">Technologies and tools I work with</p>

      <div className="skills-container">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-item" key={group.title}>
            <div className="skill-title">
              <i className={`bx ${group.icon}`}></i>
              {group.title}
            </div>
            <ul className="skill-tags">
              {group.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;