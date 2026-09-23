const BASE = import.meta.env.BASE_URL;

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={`${BASE}about.webp`} alt="Portrait of Wazid Hasan Likhon" loading="lazy" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Software Developer &amp; CSE Graduate</h3>
        <p>
          I'm a software developer with a B.Sc. in Computer Science and Engineering from
          Daffodil International University, where I focused on Software Development. I enjoy
          building clean, responsive web applications and turning ideas into reliable,
          user-friendly software.
        </p>
        <p>
          I care about readable code, solid fundamentals and continuous learning. Outside of
          coding, I create content and keep up with new technology.
        </p>
        <div className="about-stats">
          <div className="stat-box">
            <i className="bx bxs-graduation"></i>
            <h4>B.Sc. in CSE</h4>
            <p>Education</p>
          </div>
          <div className="stat-box">
            <i className="bx bx-buildings"></i>
            <h4>Daffodil International University</h4>
            <p>University</p>
          </div>
          <div className="stat-box">
            <i className="bx bx-code-alt"></i>
            <h4>Software Development</h4>
            <p>Track</p>
          </div>
        </div>
        <a href="#contact" className="btn">Let's Talk</a>
      </div>
    </section>
  );
}

export default About;