import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaSass } from 'react-icons/fa';
import './Hero.css';

import profileImage from '../../assets/profile.png';

const Hero = () => {
  return (
    <section className="hero">
      <img src={profileImage} alt="Andrea Vega" className="hero-image" />
      <article className='hero-text'>
      <h1 className="hero-title">Aspiring Frontend Developer</h1>
      <p className="hero-subtitle">I build beautiful and functional things for the web.</p>
      <div className="hero-icons">
        <FaReact size={48} color="#61DBFB" title="React" />
        <FaHtml5 size={48} color="#E34C26" title="HTML5" />
        <FaCss3  size={48} color="#264DE4" title="CSS3" />
        <FaJsSquare size={48} color='#FFEA00' title='JavaScript' />
        <FaSass size={48} color='#F2B3DB' title='Sass' />
      </div>
        </article>
    </section>
  );
};
export default Hero;