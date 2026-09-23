import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/Wazid.Official1', icon: 'bxl-facebook', label: 'Facebook' },
  { href: 'https://instagram.com/hasanwazid', icon: 'bxl-instagram', label: 'Instagram' },
  { href: 'https://www.tiktok.com/@wazidhasan07', icon: 'bxl-tiktok', label: 'TikTok' },
  { href: 'https://github.com/Likhons', icon: 'bxl-github', label: 'GitHub' },
  { href: 'https://www.youtube.com/channel/UCyM6jYpH5CgvLDOHUL7vHng', icon: 'bxl-youtube', label: 'YouTube' },
];

const BASE = import.meta.env.BASE_URL;

function Home() {
  const typedElRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElRef.current, {
      strings: ['Software Developer', 'Web Developer', 'Frontend Developer'],
      typeSpeed: 80,
      backSpeed: 55,
      backDelay: 1600,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="home-greeting">Web Developer • Software Development • CSE Graduate</p>
        <h1>Wazid Hasan <span>Likhon</span></h1>
        <h3>I'm a <span className="multiple-text" ref={typedElRef}></span></h3>
        <p className="home-desc">
          B.Sc. in Computer Science &amp; Engineering graduate from Daffodil International
          University (Software Development track). I build clean, responsive and reliable
          web applications, and I'm always learning to write better software.
        </p>
        <div className="home-buttons">
          <a href="#portfolio" className="btn">
            View My Projects <i className="bx bx-right-arrow-alt"></i>
          </a>
          <a href={`${BASE}download-cv.pdf`} className="btn btn-outline" download>
            <i className="bx bx-download"></i> Download CV
          </a>
        </div>
        <div className="social-media">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
              <i className={`bx ${s.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="home-img">
        <div className="img-glow"></div>
        <img src={`${BASE}dev-5.webp`} alt="Wazid Hasan Likhon" loading="eager" fetchPriority="high" />
      </div>
    </section>
  );
}

export default Home;