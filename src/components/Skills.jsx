const SKILL_GROUPS = [
  {
    icon: 'bx-code-alt',
    title: 'Frontend',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Responsive Design'],
  },
  {
    icon: 'bx-terminal',
    title: 'Programming',
    tags: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    icon: 'bx-server',
    title: 'Backend & Database',
    tags: ['SQL', 'MySQL', 'REST API'],
  },
  {
    icon: 'bx-wrench',
    title: 'Tools & Workflow',
    tags: ['Git', 'GitHub', 'VS Code', 'Vite'],
  },
  {
    icon: 'bx-palette',
    title: 'Design / UI-UX',
    tags: ['Figma', 'UI/UX Design', 'Graphic Design'],
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