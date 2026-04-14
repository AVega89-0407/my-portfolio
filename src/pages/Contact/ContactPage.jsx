import AnimatedSection from '../../components/Animation/AnimatedSection.jsx'
import contactImage from '../../assets/contact.PNG';
import useContactForm from '../../hooks/useContactForm.js';

import './ContactPage.css'

function ContactPage() {
  const { formData, handleChange, handleSubmit, status } = useContactForm();

  if (status === 'sent') {
    return (
      <AnimatedSection>
        <div className='contact-thankyou'>
          <h1>Thank you for your message!</h1>
          <p>I will get back to you as soon as possible.</p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <>
    <AnimatedSection>
    <article className='contact-intro'>
      <img src={contactImage} alt="contact image" className='contact-image' />
      <section>
      <h1>Get in Touch</h1>
      <p>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me by filling out the form below. I look forward to hearing from you!
      </p>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
    </article>
    </AnimatedSection>
    </>
  )
}

export default ContactPage