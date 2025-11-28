import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, XCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'dhruvtikhande23915@gmail.com',
      href: 'mailto:dhruvtikhande23915@gmail.com',
      color: '#EF4444'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      href: 'https://www.linkedin.com/in/dhruv-tikhande-3010b8296/',
      color: '#0077B5'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Check out my repositories',
      href: 'https://github.com/Dhruv-Tikhande',
      color: '#171717'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <header className="contact__header">
          <h2 className="contact__title">Let's Work Together</h2>
          <p className="contact__subtitle">
            Ready to collaborate, discuss ideas, or explore opportunities? I'd love to hear from you!
          </p>
        </header>
        
        <div className="contact__content">
          <div className="contact__info">
            <h3 className="contact__info-title">Get in touch</h3>
            <p className="contact__info-text">
              Whether you have a project in mind, want to collaborate, or just want to say hello,
              feel free to reach out through any of these channels.
            </p>
            
            <div className="contact__methods">
              {contactMethods.map((method, index) => (
                <a 
                  key={method.title}
                  href={method.href}
                  className="contact-method"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--method-color': method.color
                  } as React.CSSProperties}
                >
                  <div className="contact-method__icon">
                    <method.icon size={24} />
                  </div>
                  <div className="contact-method__content">
                    <h4 className="contact-method__title">{method.title}</h4>
                    <p className="contact-method__description">{method.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <form className="contact__form" onSubmit={handleSubmit}>
            <h3 className="contact__form-title">Send me a message</h3>
            
            <div className="form__grid">
              <div className="form__group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form__input"
                  placeholder=" "
                  required
                />
                <label className="form__label">Full Name</label>
              </div>
              
              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form__input"
                  placeholder=" "
                  required
                />
                <label className="form__label">Email Address</label>
              </div>
            </div>
            
            <div className="form__group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form__input"
                placeholder=" "
                required
              />
              <label className="form__label">Subject</label>
            </div>
            
            <div className="form__group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form__textarea"
                placeholder=" "
                rows={5}
                required
              ></textarea>
              <label className="form__label">Message</label>
            </div>
            
            <button 
              type="submit" 
              className={`form__submit ${submitStatus !== 'idle' ? `form__submit--${submitStatus}` : ''}`}
              disabled={submitStatus === 'loading'}
            >
              {submitStatus === 'loading' && (
                <>
                  <div className="spinner"></div>
                  <span>Sending...</span>
                </>
              )}
              {submitStatus === 'success' && (
                <>
                  <CheckCircle size={20} />
                  <span>Message Sent!</span>
                </>
              )}
              {submitStatus === 'error' && (
                <>
                  <XCircle size={20} />
                  <span>Try Again</span>
                </>
              )}
              {submitStatus === 'idle' && (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;