import { useState } from 'react';

const FORM_ENDPOINT = 'https://formspree.io/f/mvojodbp';
const EMAIL = 'wazidlikhon@gmail.com';

const CONTACTS = [
  { icon: 'bx-envelope', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: 'bx-phone', label: 'Phone', value: '+880 1759256575', href: 'tel:+8801759256575' },
  { icon: 'bxl-github', label: 'GitHub', value: 'github.com/Likhons', href: 'https://github.com/Likhons', external: true },
  { icon: 'bx-map', label: 'Location', value: 'Dhaka, Bangladesh' },
];

function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="contact" id="contact">
      <p className="hero-status contact-badge">
        <span className="hero-status-dot" aria-hidden="true"></span>
        Open to Software Development opportunities
      </p>
      <h2 className="heading">Get In <span>Touch</span></h2>
      <p className="section-subtitle">
        Looking for a Software Development or Web Development role — feel free to reach out.
      </p>

      <div className="contact-wrapper">
        <div className="contact-info">
          {CONTACTS.map((c) => {
            const inner = (
              <>
                <span className="contact-icon"><i className={`bx ${c.icon}`}></i></span>
                <div><h4>{c.label}</h4><p>{c.value}</p></div>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                className="contact-info-item"
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {inner}
              </a>
            ) : (
              <div key={c.label} className="contact-info-item">{inner}</div>
            );
          })}
        </div>

        <form
          action={FORM_ENDPOINT}
          method="post"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="input-box">
            <input type="text" name="Full Name" placeholder="Full Name" aria-label="Full Name" autoComplete="name" required />
            <input type="email" name="Email" placeholder="Email Address" aria-label="Email Address" autoComplete="email" required />
          </div>
          <div className="input-box">
            <input type="tel" name="Mobile Number" placeholder="Mobile Number" aria-label="Mobile Number" autoComplete="tel" />
            <input type="text" name="Email Subject" placeholder="Subject" aria-label="Subject" />
          </div>
          <textarea name="User Message" rows="8" placeholder="Your Message" aria-label="Your Message" required></textarea>
          {/* Honeypot: hidden from people, catches basic spam bots */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : <>Send Message <i className="bx bx-send"></i></>}
          </button>
          <p className={`form-status ${status}`} role="status" aria-live="polite">
            {status === 'success' && 'Thank you! Your message has been sent.'}
            {status === 'error' && `Something went wrong. Please try again or email me at ${EMAIL}.`}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;