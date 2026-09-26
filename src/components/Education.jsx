// Degree details. "highlight" marks the Software Development major,
// which is the focus of this portfolio.
const DETAILS = [
  { label: 'University', value: 'Daffodil International University' },
  { label: 'Major / Track', value: 'Software Development', highlight: true },
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
    <section className="education" id="education" aria-labelledby="education-title">
      <h2 className="heading" id="education-title">My <span>Education</span></h2>
      <p className="section-subtitle">B.Sc. in CSE with a Software Development major</p>

      <div className="education-container">
        <div className="education-card education-card-primary">
          <div className="education-icon"><i className="bx bxs-graduation" aria-hidden="true"></i></div>
          <span className="education-label">Degree</span>
          <h3>B.Sc. in Computer Science &amp; Engineering</h3>
          <dl className="education-details">
            {DETAILS.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd className={d.highlight ? 'is-highlight' : undefined}>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="education-card">
          <div className="education-icon"><i className="bx bx-book-open" aria-hidden="true"></i></div>
          <span className="education-label">Focus areas</span>
          <h3>Explored through academic projects</h3>
          <ul className="education-list">
            {FOCUS_AREAS.map((item) => (
              <li key={item}>
                <i className="bx bx-check-circle" aria-hidden="true"></i>
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