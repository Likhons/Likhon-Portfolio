const DETAILS = [
  { icon: 'bx-buildings', label: 'University', value: 'Daffodil International University' },
  { icon: 'bx-code-alt', label: 'Major / Track', value: 'Software Development' },
];

// Derived from the academic projects listed in the Portfolio section
const FOCUS_AREAS = [
  'Compiler design and lexical analysis',
  'Web platform development with Agile Scrum',
  'Relational databases with MySQL and SQL',
  'Linux automation with Bash scripting',
  'Embedded systems with Arduino',
];

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="heading">My <span>Education</span></h2>
      <p className="section-subtitle">Academic background</p>

      <div className="education-container">
        <div className="education-card">
          <div className="education-icon"><i className="bx bxs-graduation"></i></div>
          <span className="education-label">Degree</span>
          <h3>B.Sc. in Computer Science &amp; Engineering</h3>
          <ul className="education-details">
            {DETAILS.map((d) => (
              <li key={d.label}>
                <i className={`bx ${d.icon}`}></i>
                <div>
                  <small>{d.label}</small>
                  <strong>{d.value}</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="education-card">
          <div className="education-icon"><i className="bx bx-book-open"></i></div>
          <span className="education-label">Focus Areas</span>
          <h3>Explored through academic projects</h3>
          <ul className="education-list">
            {FOCUS_AREAS.map((item) => (
              <li key={item}>
                <i className="bx bx-check-circle"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;