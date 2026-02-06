import AnimatedSection from '../../components/Animation/AnimatedSection.jsx'

import './AboutPage.css'

function AboutPage() {
  return (
    <>
    <AnimatedSection>
    <div className="about-page">
      <img src="/src/assets/about-me.png" alt="Profile" className="profile-picture" />
    <article className="about-me">
      <h1>Hi, I'm Andrea 👋</h1>
      <p>Frontend Developer</p>
      <p>I'm passionate about creating beautiful and functional web applications. I have experience with React, JavaScript, and CSS. I'm always eager to learn new technologies and improve my skills.</p>
      <p>In my free time, I enjoy hiking, cooking, and traveling. I'm also a big fan of cats 🐱.</p>
      <p>If you'd like to connect or learn more about me, feel free to reach out!</p>
      <button>Download Resume</button>
    </article>
    </div>
    </AnimatedSection>
    </>
  )
}

export default AboutPage