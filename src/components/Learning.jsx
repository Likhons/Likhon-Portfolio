// Grounded in the Journey section's 2025 milestone ("Explored Web
// Development, AI, and Machine Learning through academic projects and
// self-learning"). Kept to that same scope — nothing new is claimed here.
const EXPLORING = ['Artificial Intelligence', 'Machine Learning'];

function Learning() {
  return (
    <section className="learning" id="learning" aria-labelledby="learning-title">
      <div className="learning-panel">
        <div className="learning-icon"><i className="bx bx-bulb" aria-hidden="true"></i></div>
        <div className="learning-text">
          <h2 id="learning-title">Currently Exploring</h2>
          <p>Continuing to grow beyond my core stack through self-learning and academic projects.</p>
        </div>
        <ul className="learning-tags" aria-label="Topics I'm currently exploring">
          {EXPLORING.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Learning;