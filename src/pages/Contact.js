import React from 'react';
import Button from '../components/Button';
import './Contact.css'; // ← Import animation styles

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-circle fade-in">
          <p className="text-muted footer-title slide-in-bottom">Contact me!</p>

          <p className="text-muted fade-up">Subject</p>
          <input className="input input-animate" placeholder="Subject" />

          <br /><br />

          <p className="text-muted fade-up">Email</p>
          <input className="input input-animate" placeholder="Email" />

          <br /><br />

          <p className="text-muted fade-up">Name</p>
          <input className="input input-animate" placeholder="Name" />

          <br /><br />

          <p className="text-muted fade-up">Message</p>
          <textarea className="input input-animate" placeholder="Message" />

          <br /><br />

          <div className="fade-in-delayed">
            <Button to="mailto:ceasersummer77@gmail.com" text="Contact" class="btn pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
