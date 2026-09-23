const SKILL_GROUPS = [
  {
    icon: 'bx-code-alt',
    title: 'Frontend Development',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Responsive Design'],
  },
  {
    icon: 'bx-server',
    title: 'Programming & Backend',
    tags: ['C', 'C++', 'Python', 'JavaScript', 'SQL', 'MySQL', 'REST API'],
  },
  {
    icon: 'bx-wrench',
    title: 'Tools & Workflow',
    tags: ['Git', 'GitHub', 'VS Code', 'Vite'],
  },
  {
    icon: 'bx-palette',
    title: 'Design',
    tags: ['Figma', 'UI/UX Design', 'Graphic Design'],
  },
];

const TOOLS = [
  { icon: 'bxl-html5', label: 'HTML5' },
  { icon: 'bxl-css3', label: 'CSS3' },
  { icon: 'bxl-javascript', label: 'JavaScript' },
  { icon: 'bxl-react', label: 'React' },
  { icon: 'bxl-git', label: 'Git' },
  { icon: 'bxl-github', label: 'GitHub' },
  { icon: 'bxl-figma', label: 'Figma' },
  { icon: 'bx-code-curly', label: 'VS Code' },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <p className="section-subtitle">Technologies and tools I work with</p>

      <div className="skills-container">
        <div className="skills-left">
          <h3>Technical Skills</h3>
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

        <div className="skills-right">
          <h3>Tools &amp; Technologies</h3>
          <div className="tools-grid">
            {TOOLS.map((t) => (
              <div className="tool-card" key={t.label}>
                <i className={`bx ${t.icon}`}></i>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;