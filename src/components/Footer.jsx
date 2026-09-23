const FOOTER_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#journey', label: 'Journey' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

const FOOTER_SOCIAL = [
  { href: 'https://github.com/Likhons', icon: 'bxl-github', label: 'GitHub' },
  { href: 'mailto:wazidlikhon@gmail.com', icon: 'bx-envelope', label: 'Email', internal: true },
  { href: 'https://www.facebook.com/Wazid.Official1', icon: 'bxl-facebook', label: 'Facebook' },
  { href: 'https://instagram.com/hasanwazid', icon: 'bxl-instagram', label: 'Instagram' },
  { href: 'https://www.youtube.com/channel/UCyM6jYpH5CgvLDOHUL7vHng', icon: 'bxl-youtube', label: 'YouTube' },
];

const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#home" className="logo">W<span>.</span>Likhon</a>
          <p>Software Developer &amp; CSE graduate building clean, reliable and user-friendly web applications.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            {FOOTER_SOCIAL.map((s) => (
              <a
                key={s.href}
                href={s.href}
                aria-label={s.label}
                {...(s.internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <i className={`bx ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {YEAR} Wazid Hasan Likhon. All rights reserved.</p>
        <a href="#home" className="back-to-top" aria-label="Back to top">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;