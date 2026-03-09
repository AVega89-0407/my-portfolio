import Projects from '../../components/Projects/Projects.jsx'
import AnimatedSection from '../../components/Animation/AnimatedSection.jsx'
import projectImage from '../../assets/project-img.png';

import './ProjectsPage.css'

function ProjectsPage() {
  return (
    <>
    <AnimatedSection>
      <article className='projects-intro'>
      <img src={projectImage} alt="profile image projects" />
      <section>
      <h1>My Projects</h1>
      <p>
        Here are some of the projects I've worked on recently. Each project showcases my skills in frontend development, including React, JavaScript, and CSS. Feel free to explore the projects and see how I approach problem-solving and design!
      </p>
      </section>
      </article>
      <Projects />
    </AnimatedSection>
    </>
  )
}

export default ProjectsPage;