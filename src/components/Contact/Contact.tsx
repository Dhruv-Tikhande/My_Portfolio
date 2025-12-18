import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    if (!name || !email || !message) {
      setError('Please fill all required fields.');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: subject || 'Portfolio Contact',
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // ✅ Send auto-reply AFTER main email is sent
        return emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          {
            from_name: name,
            from_email: email,
            message: message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      })
      .then(() => {
        setSuccess('Thanks for reaching out! I’ll get back to you soon.');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch(() => {
        setError('Something went wrong. Please try again later.');
      })
      .finally(() => setLoading(false));     
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <header className="contact__header">
          <h2 className="contact__title">Let’s Work Together</h2>
          <p className="contact__subtitle">
            Ready to collaborate, discuss ideas, or explore opportunities.
          </p>
        </header>

        <div className="contact__content">
          {/* LEFT */}
          <div className="contact__info">
            <h3 className="contact__info-title">Get in touch</h3>
            <p className="contact__info-text">
              Whether you have a project in mind or just want to say hello.
            </p>

            <div className="contact__methods">
              <div
                className="contact-method"
                style={{ '--method-color': '#ef4444' } as React.CSSProperties}
              >
                <div className="contact-method__icon">
                  <Mail />
                </div>
                <div className="contact-method__content">
                  <div className="contact-method__title">Email</div>
                  <p className="contact-method__description">
                    dhruvtikhande23915@gmail.com
                  </p>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/dhruv-tikhande-3010b8296"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                style={{ '--method-color': '#0a66c2' } as React.CSSProperties}
              >
                <div className="contact-method__icon">
                  <Linkedin />
                </div>
                <div className="contact-method__content">
                  <div className="contact-method__title">LinkedIn</div>
                  <p className="contact-method__description">
                    Connect professionally
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Dhruv-Tikhande"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                style={{ '--method-color': '#111827' } as React.CSSProperties}
              >
                <div className="contact-method__icon">
                  <Github />
                </div>
                <div className="contact-method__content">
                  <div className="contact-method__title">GitHub</div>
                  <p className="contact-method__description">
                    Check out my repositories
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <h3 className="contact__form-title">Send me a message</h3>

            <div className="form__grid">
              <div className="form__group">
                <input
                  className="form__input"
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="form__label">Full Name</label>
              </div>

              <div className="form__group">
                <input
                  className="form__input"
                  type="email"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form__label">Email Address</label>
              </div>
            </div>

            <div className="form__group">
              <input
                className="form__input"
                placeholder=" "
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <label className="form__label">Subject (optional)</label>
            </div>

            <div className="form__group">
              <textarea
                className="form__textarea"
                placeholder=" "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label className="form__label">Message</label>
            </div>

            {success && <p className="form__success">{success}</p>}
            {error && <p className="form__error">{error}</p>}

            <button className="form__submit" type="submit" disabled={loading}>
              <Send size={18} />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
