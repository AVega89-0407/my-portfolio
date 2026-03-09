import AnimatedSection from '../../components/Animation/AnimatedSection.jsx'
import Skills from '../../components/Skills/Skills.jsx'
import aboutMeImage from '../../assets/about.PNG';

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
      <p>I'm a frontend developer currently studying web development.
I enjoy building responsive and user-friendly web applications
using React, JavaScript, and modern CSS.
<br /><br />
Before transitioning into tech, I worked in education,
which helped me develop strong communication and
problem-solving skills.
<br /><br />
I'm currently looking for opportunities where I can
continue growing as a developer and contribute to
meaningful projects.</p>
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