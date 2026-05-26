import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import HomePage from '../pages/HomePage.jsx'
import AboutPage from '../pages/About/AboutPage.jsx'
import ProjectsPage from '../pages/project/ProjectsPage.jsx'
import ContactPage from '../pages/Contact/ContactPage.jsx'
import AnimatedSection from '../components/Animation/AnimatedSection.jsx'

import Section from '../components/Section.jsx'


function MainLayout() {
  return (
    <>
   
      <Navbar />
      <main>
        <Section id="home">
          <HomePage />
        </Section>
        <Section id="about" dark>
          <AboutPage />
        </Section>
          <Section id="projects">
          <ProjectsPage />
        </Section>
        <Section id="contact" dark>
          <ContactPage />
        </Section>
        </main>
        <Footer />
    
    </>
  )
}

export default MainLayout