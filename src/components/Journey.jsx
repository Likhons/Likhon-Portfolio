const MILESTONES = [
  {
    year: '2023',
    title: 'Started B.Sc. in CSE',
    text: 'Began my B.Sc. in Computer Science & Engineering at Daffodil International University.',
  },
  {
    year: '2024',
    title: 'Building Projects',
    text: 'Started building academic and university projects while strengthening programming and software development fundamentals.',
  },
  {
    year: '2025',
    title: 'Exploring New Areas',
    text: 'Explored Web Development, AI, and Machine Learning through academic projects and self-learning.',
  },
  {
    year: '2026',
    title: 'Chose Software Development',
    text: 'Chose Software Development as my major and focused more deeply on web development, software engineering, and practical development skills.',
  },
  {
    year: 'Now',
    title: 'Open to Opportunities',
    text: 'Looking for Software Development opportunities where I can apply my skills, learn from real-world projects, and grow as a developer.',
    current: true,
  },
];

function Journey() {
  return (
    <section className="journey" id="journey">
      <h2 className="heading">My <span>Journey</span></h2>
      <p className="section-subtitle">My academic and development path so far</p>

      <ol className="timeline">
        {MILESTONES.map((m) => (
          <li className={`timeline-item ${m.current ? 'current' : ''}`} key={m.year}>
            <span className="timeline-dot" aria-hidden="true"></span>
            <div className="timeline-card">
              <span className="timeline-year">{m.year}</span>
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