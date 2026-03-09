import AnimatedSection from '../../components/Animation/AnimatedSection.jsx'
import Skills from '../../components/Skills/Skills.jsx'
import aboutMeImage from '../../assets/about.png';

import { FaDownload } from 'react-icons/fa';

import './AboutPage.css'

function AboutPage() {
  return (
    <>
    <AnimatedSection>
    <div className="about-page">
      <img src={aboutMeImage} alt="About me" className="profile-picture" />
    <article className="about-me">
      <h1>Hi, I'm Andrea</h1>
      <p>Frontend Developer</p>
      <p>I'm passionate about creating beautiful and functional web applications. I have experience with React, JavaScript, and CSS. I'm always eager to learn new technologies and improve my skills.</p>
      <p>If you'd like to connect or learn more about me, feel free to look at my CV!</p>
      <button onClick={() => window.open('/cv.pdf', '_blank')}><FaDownload /> Download CV</button>
    </article>
    </div>
    <Skills />
    </AnimatedSection>
    </>
  )
}

export default AboutPage