import { useEffect, useRef, useState } from 'react';

// Main navigation. Education, Journey and Services stay on the page but are not
// top-level links; SECTION_TO_NAV keeps the closest link highlighted while the
// reader is inside them.
const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_TO_NAV = {
  education: 'about',
  journey: 'about',
  services: 'skills',
  learning: 'contact',
};

function Header() {
  const navbarRef = useRef(null);
  const menuIconRef = useRef(null);
  const lastScrollY = useRef(0);
  const keepVisibleUntil = useRef(0);

  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [spin, setSpin] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(() => window.scrollY > 80); // correct on refresh mid-page
  const [hidden, setHidden] = useState(false);

  const closeNavbar = () => setNavOpen(false);

  // Apply theme to <body> and persist it
  useEffect(() => {
    document.body.classList.toggle('light-mode', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Mobile menu: lock body scroll and move focus into the menu when it opens.
  // The menu fades in with a visibility transition, so it cannot take focus on
  // the very first frame; wait a moment before focusing the first link.
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    if (!navOpen) return;
    const timer = setTimeout(() => navbarRef.current?.querySelector('a')?.focus(), 60);
    return () => clearTimeout(timer);
  }, [navOpen]);

  // Outside click / Escape key / swipe-left / leaving the mobile breakpoint close the menu
  useEffect(() => {
    if (!navOpen) return;

    function handleOutsideClick(e) {
      if (
        navbarRef.current &&
        menuIconRef.current &&
        !navbarRef.current.contains(e.target) &&
        !menuIconRef.current.contains(e.target)
      ) {
        closeNavbar();
      }
    }

    function handleEscape(e) {
      if (e.key === 'Escape') {
        closeNavbar();
        menuIconRef.current?.focus(); // hand focus back to the button that opened it
      }
    }

    let touchStartX = 0;
    function handleTouchStart(e) {
      touchStartX = e.changedTouches[0].screenX;
    }
    function handleTouchEnd(e) {
      const deltaX = touchStartX - e.changedTouches[0].screenX;
      if (deltaX > 60) closeNavbar();
    }

    // If the window is widened past the mobile breakpoint, drop the open state
    // so the body scroll lock cannot get stuck.
    const desktopQuery = window.matchMedia('(min-width: 769px)');
    function handleBreakpoint(e) {
      if (e.matches) closeNavbar();
    }

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    desktopQuery.addEventListener('change', handleBreakpoint);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      desktopQuery.removeEventListener('change', handleBreakpoint);
    };
  }, [navOpen]);

  // Sticky header, hide-on-scroll, active nav link, scroll progress bar
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    // Keep the header visible while an in-page link (#section) is smooth-scrolling
    function handleAnchorClick(e) {
      if (e.target.closest('a[href^="#"]')) keepVisibleUntil.current = Date.now() + 1500;
    }

    function updateActive() {
      let current = 'home';
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 250) current = sec.id;
      });
      setActiveId(SECTION_TO_NAV[current] ?? current);
    }

    function handleScroll() {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 80);

      if (scrollY > 300) {
        if (scrollY > lastScrollY.current + 5 && !navOpen && Date.now() > keepVisibleUntil.current) {
          setHidden(true);
        } else if (lastScrollY.current > scrollY + 5) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      lastScrollY.current = scrollY;

      updateActive();

      // The progress bar element lives in App.jsx
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const bar = document.getElementById('progress-bar');
      if (bar) bar.style.width = (scrollY / totalHeight) * 100 + '%';
    }

    updateActive(); // correct highlight on load / refresh mid-page

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleAnchorClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [navOpen]);

  function handleThemeToggle() {
    setSpin(true);
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }

  const headerClass = `header${scrolled ? ' sticky' : ''}${hidden ? ' header-hidden' : ''}`;

  return (
    // onFocus: if a keyboard user tabs into a header that scrolled away, bring it back
    <header className={headerClass} id="header" onFocus={() => setHidden(false)}>
      <a href="#home" className="logo" aria-label="W.Likhon, back to top">
        W<span>.</span>Likhon
      </a>

      <nav className={`navbar ${navOpen ? 'active' : ''}`} id="navbar" ref={navbarRef} aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeId === link.id ? 'active' : ''}
            aria-current={activeId === link.id ? 'location' : undefined}
            onClick={closeNavbar}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-right">
        <button
          type="button"
          className={`theme-toggle ${spin ? 'spin' : ''}`}
          id="theme-toggle"
          aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          onClick={handleThemeToggle}
          onAnimationEnd={() => setSpin(false)}
        >
          <i className={`bx ${theme === 'light' ? 'bx-sun' : 'bx-moon'}`} id="theme-icon" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          id="menu-icon"
          ref={menuIconRef}
          aria-label="Menu"
          aria-expanded={navOpen}
          aria-controls="navbar"
          onClick={() => setNavOpen((open) => !open)}
        >
          <i className={`bx ${navOpen ? 'bx-x' : 'bx-menu'}`} aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;