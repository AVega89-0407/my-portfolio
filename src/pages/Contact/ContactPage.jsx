import AnimatedSection from '../../components/Animation/AnimatedSection.jsx'
import contactImage from '../../assets/contact.PNG';

import './ContactPage.css'

function ContactPage() {

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
      <form className='contact-form' action="https://formspree.io/f/mbdqljaj" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
    </article>
    </AnimatedSection>
    </>
  )
}

export default ContactPage