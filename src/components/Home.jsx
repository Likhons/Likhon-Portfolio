const BASE = import.meta.env.BASE_URL;

// GitHub first: it is the most relevant profile for recruiters
const SOCIAL_LINKS = [
  { href: 'https://github.com/Likhons', icon: 'bxl-github', label: 'GitHub' },
  { href: 'https://www.youtube.com/channel/UCyM6jYpH5CgvLDOHUL7vHng', icon: 'bxl-youtube', label: 'YouTube' },
  { href: 'https://www.facebook.com/Wazid.Official1', icon: 'bxl-facebook', label: 'Facebook' },
  { href: 'https://instagram.com/hasanwazid', icon: 'bxl-instagram', label: 'Instagram' },
  { href: 'https://www.tiktok.com/@wazidhasan07', icon: 'bxl-tiktok', label: 'TikTok' },
];

// Kept in sync with the tags on the Skills section
const CORE_TECH = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Python', 'SQL', 'Git'];

function Home() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-status">
            <span className="hero-status-dot" aria-hidden="true"></span>
            Open to software development opportunities
          </p>

          <h1 className="hero-name" id="hero-title">Wazid Hasan Likhon</h1>

          <p className="hero-role">
            Software Developer <span className="hero-role-sub">· Web Development</span>
          </p>

          <p className="hero-desc">
            Fresh B.Sc. in Computer Science &amp; Engineering graduate from Daffodil
            International University (Software Development track). I build clean,
            responsive web applications with React and JavaScript, and I'm looking for
            a software development role where I can keep growing.
          </p>

          <ul className="hero-tech" aria-label="Core technologies">
            {CORE_TECH.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <a href="#portfolio" className="hero-btn hero-btn-primary">
              View Projects <i className="bx bx-right-arrow-alt" aria-hidden="true"></i>
            </a>
            <a
              href={`${BASE}download-cv.pdf`}
              className="hero-btn hero-btn-secondary"
              download="Wazid-Hasan-Likhon-CV.pdf"
            >
              <i className="bx bx-download" aria-hidden="true"></i> Download CV
            </a>
          </div>

          <ul className="hero-social" aria-label="Social profiles">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                >
                  <i className={`bx ${s.icon}`} aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait">
            <img
              src={`${BASE}dev-5.webp`}
              alt="Portrait of Wazid Hasan Likhon"
              width="800"
              height="1191"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="hero-edu-card">
            <i className="bx bxs-graduation" aria-hidden="true"></i>
            <div>
              <p className="hero-edu-title">B.Sc. in CSE</p>
              <p className="hero-edu-sub">Daffodil International University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;