import React, { useState } from 'react';
import './Contact.css'; // optional custom styling

const ContactForm = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

const response = await fetch(process.env.REACT_APP_FORMSPREE_URL, {
  method: 'POST',
  body: data,
  headers: { Accept: 'application/json' },
});


    if (response.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" rows="5" required />
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>

      {status === 'success' && <p style={{ color: 'green' }}>Thanks! Your message has been sent.</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Oops! Something went wrong.</p>}
    </form>
  );
};

export default ContactForm;
