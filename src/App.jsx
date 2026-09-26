import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import Learning from './components/Learning';

function App() {
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [pageIn, setPageIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderHidden(true);
      document.body.classList.add('loaded');
      setPageIn(true);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-reveal: fade sections/cards in as they enter the viewport
  useEffect(() => {
    const revealEls = document.querySelectorAll(
      '.about-img, .about-content, ' +
      '.education-card, .timeline-item, ' +
      '.skill-item, ' +
      '.services-box, ' +
      '.portfolio-box, ' +
      '.learning-panel, ' +
      '.contact-info-item, .contact-form, ' +
      '.heading, .section-subtitle, ' +
      '.stat-box, .footer-content > *'
    );

    revealEls.forEach((el) => {
      el.classList.add('reveal');
      if (el.closest('.about-img') || el.closest('.contact-info-item')) {
        el.classList.add('from-left');
      } else if (el.closest('.contact-form')) {
        el.classList.add('from-right');
      }
    });

    document.querySelectorAll(
      '.services-container, .portfolio-container, .about-stats, .education-container'
    ).forEach((container) => container.classList.add('reveal-stagger'));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  // Touch "press" feedback on cards
  useEffect(() => {
    const cards = document.querySelectorAll('.services-box, .stat-box, .portfolio-box');

    function handleTouchStart(e) { e.currentTarget.style.transform = 'scale(0.97)'; }
    function handleTouchEnd(e) {
      const card = e.currentTarget;
      setTimeout(() => { card.style.transform = ''; }, 200);
    }

    cards.forEach((card) => {
      card.addEventListener('touchstart', handleTouchStart, { passive: true });
      card.addEventListener('touchend', handleTouchEnd, { passive: true });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('touchstart', handleTouchStart);
        card.removeEventListener('touchend', handleTouchEnd);
      });
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <CursorGlow />

      <div id="loader" className={loaderHidden ? 'hidden' : ''}>
        <div className="loader-logo">W<span>.</span>Likhon</div>
        <div className="loader-bar-wrap">
          <div className="loader-bar"></div>
        </div>
        <p className="loader-text">Loading…</p>
      </div>

      <div
        id="page-transition"
        className={pageIn ? 'slide-out' : ''}
        onAnimationEnd={() => setPageIn(false)}
      ></div>
      <div id="progress-bar"></div>

      <Header />
      <Home />
      <About />
      <Education />
      <Journey />
      <Skills />
      <Services />
<Portfolio />
<Learning />
<Contact />
      <Footer />
    </>
  );
}

export default App;