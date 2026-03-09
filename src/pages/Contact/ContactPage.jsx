import AnimatedSection from '../../components/Animation/AnimatedSection.jsx'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
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
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me by sending an email or connecting on LinkedIn. I look forward to hearing from you!
      </p>
           <a className='contact-icons'
          href="mailto:andrea.vega@live.se"><FaEnvelope /> andrea.vega@live.se</a>
          <br />
          <a className='contact-icons'
          href="https://www.linkedin.com/in/andrea-vega-pi%C3%B1ones-19718b138/" 
          target="_blank" rel="noopener noreferrer"><FaLinkedin /> linkedin.com/in/andrea-vega</a>
          <br />
          <a className='contact-icons'
                 target="_blank" rel="noopener noreferrer"
                href="https://github.com/AVega89-0407"><FaGithub />Avega89-0407</a>
      </section>
    </article>

    </AnimatedSection>
    </>
  )
}

export default ContactPage