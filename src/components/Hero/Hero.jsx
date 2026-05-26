import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaSass, FaDownload, FaFigma, FaNodeJs, FaEye } from 'react-icons/fa';
import { GraduationCap, MapPin, MessageSquareText } from 'lucide-react';
import './Hero.css';

import profileImage from '../../assets/me.png';
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <article className='hero-text'>
      <span><p className="hero-role">Frontend Developer</p>  <p className="hero-role">React · JavaScript · CSS</p></span>
      <h1 className="hero-title">Hi, I'm Andrea — <br /> I build interfaces <br /> people <em>love</em> to use</h1>
        <p className="hero-subtitle">Frontend developer with a background in education. I care about clean code, accessibility, and the small details that make a big difference.</p>
        <p className="hero-education"><GraduationCap /> Previously in education · now building for the web</p>
        <button className="hero-button" onClick={() => window.open('/cv.pdf', '_blank')}><FaDownload />  Download CV</button>
        <NavLink to="/projects" className="hero-link"><FaEye /> View Projects</NavLink>
      </article>
      <article className='hero-image-section'>
      <img src={profileImage} alt="Andrea Vega" className="hero-image" />
      <section className="hero-icons">
        <FaReact size={48} color="#61DBFB" title="React" />
        <FaHtml5 size={48} color="#E34C26" title="HTML5" />
        <FaCss3  size={48} color="#264DE4" title="CSS3" />
        <FaJsSquare size={48} color="#F0DB4F" title="JavaScript" />
        <FaSass size={48} color="#CD6799" title="Sass" />
          <FaFigma size={48} color='#F24E1E' title='Figma' />
          <FaNodeJs size={48} color='#68A063' title='Node.js' />
        </section>
        <article className="hero-info">
          <MapPin style={{ marginRight: '0.5rem', color: 'var(--primary)', backgroundColor: '#e0e7ff', borderRadius: '10px', padding: '0.5rem' }} size={35} /><span> Based in Sweden
            <p>Open to remote & hybrid</p>
          </span>
        </article>
        <article className="hero-info">
          <MessageSquareText style={{ marginRight: '0.5rem', color: 'var(--primary)', backgroundColor: '#e0e7ff', borderRadius: '10px', padding: '0.5rem' }} size={35} /><span> Always responds within 24 hours
            <a href="mailto: andrea.vega@live.se">andrea.vega@live.se</a>
          </span>
        </article>
      </article>
    </section>
  );
};
export default Hero;