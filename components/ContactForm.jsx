'use client';

import { useState } from 'react';

export default function ContactForm({ intro = 'Tell us about your business and we will get back to you.' }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <section className="contact-section card">
      <h2>Contact Us</h2>
      <p>{intro}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />

        <button type="submit">Send Enquiry</button>
        {sent ? <p className="form-note">Thank you. Your message has been received.</p> : null}
      </form>
    </section>
  );
}
