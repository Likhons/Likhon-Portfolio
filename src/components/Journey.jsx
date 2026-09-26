// The years and milestone text are unchanged. "stage" is a short label taken
// from what each milestone describes, so the progression reads at a glance:
// university -> projects -> specialisation -> career.
const MILESTONES = [
  {
    year: '2023',
    stage: 'University',
    title: 'Started B.Sc. in CSE',
    text: 'Began my B.Sc. in Computer Science & Engineering at Daffodil International University.',
  },
  {
    year: '2024',
    stage: 'Projects',
    title: 'Building Projects',
    text: 'Started building academic and university projects while strengthening programming and software development fundamentals.',
  },
  {
    year: '2025',
    stage: 'Exploration',
    title: 'Exploring New Areas',
    text: 'Explored Web Development, AI, and Machine Learning through academic projects and self-learning.',
  },
  {
    year: '2026',
    stage: 'Specialisation',
    title: 'Chose Software Development',
    text: 'Chose Software Development as my major and focused more deeply on web development, software engineering, and practical development skills.',
  },
  {
    year: 'Now',
    stage: 'Career',
    title: 'Open to Opportunities',
    text: 'Looking for Software Development opportunities where I can apply my skills, learn from real-world projects, and grow as a developer.',
    current: true,
  },
];

function Journey() {
  return (
    <section className="journey" id="journey" aria-labelledby="journey-title">
      <h2 className="heading" id="journey-title">My <span>Journey</span></h2>
      <p className="section-subtitle">From university to software development</p>

      <ol className="timeline">
        {MILESTONES.map((m) => (
          <li
            className={`timeline-item${m.current ? ' current' : ''}`}
            key={m.year}
            aria-current={m.current ? 'step' : undefined}
          >
            <span className="timeline-dot" aria-hidden="true"></span>
            <div className="timeline-meta">
              <span className="timeline-year">{m.year}</span>
              <span className="timeline-stage">{m.stage}</span>
            </div>
            <div className="timeline-body">
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Journey;