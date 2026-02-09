import './Skills.css';

import { FaLaptopCode, FaDatabase, FaTh, FaCheck } from 'react-icons/fa';

function Skills() {
  return (
    <div className="skills">    
        <h2>Skills Overview</h2>
        <p className='skill-text'>I'm a Frontend student and these are some of my skills from my education.</p>
        <div className="skills-card">
            <div className="skill-item">
                <p className='skill-icon'><FaLaptopCode /></p>
                <h3>Frontend</h3>   
                <ul>
                    <li><FaCheck /> React</li>
                    <li><FaCheck /> JavaScript</li>
                    <li><FaCheck /> Node.js</li>
                    <li><FaCheck /> HTML/CSS/SASS/Tailwind</li>
                    </ul>
            </div>
            <div className="skill-item">
                <p className='skill-icon'><FaDatabase /></p>
                <h3>Backend</h3>
                 <ul>
                    <li><FaCheck /> Node.js</li>
                    <li><FaCheck /> Express</li>
                    <li><FaCheck /> MongoDB</li>
                    </ul>
            </div>
            <div className="skill-item">
                <p className='skill-icon'><FaTh /></p>
                <h3>Others</h3>
                  <ul>
                    <li><FaCheck /> Git</li>
                    <li><FaCheck /> GitHub</li>
                    <li><FaCheck /> Figma</li>
                    <li><FaCheck /> Adobe XD</li>
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills