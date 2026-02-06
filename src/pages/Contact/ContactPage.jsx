import AnimatedSection from '../../components/Animation/AnimatedSection.jsx'

import './ContactPage.css'

function ContactPage() {
  return (
    <>
    <AnimatedSection>
    <article className='contact-intro'>
      <img src="/src/assets/contact-img.png" alt="contact image" className='contact-image' />
      <section>
      <h1>Get in Touch</h1>
      <p>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through the contact form below or connect with me on social media. I look forward to hearing from you!
      </p>
      </section>
    </article>
    <form className="contact-form">
      <h1>Contact Me</h1>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name.." />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email.." />
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Write something.." style={{height:'200px'}}></textarea>
      <button type="submit">Submit</button>
    </form>
    </AnimatedSection>
    </>
  )
}

export default ContactPage