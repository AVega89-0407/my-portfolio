import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="contact">
      <h2>Get In Touch</h2>
      <a className='icons'
      href="mailto:andrea.vega@live.se"><FaEnvelope /></a>
      <a href="https://www.linkedin.com/in/andrea-vega-pi%C3%B1ones-19718b138/" 
      target="_blank" rel="noopener noreferrer"
      className='icons'><FaLinkedin /></a>
      <a className='icons'
       target="_blank" rel="noopener noreferrer"
      href="https://github.com/AVega89-0407"><FaGithub /></a>
       <a className='icons'
       target="_blank" rel="noopener noreferrer"
      href="https://www.instagram.com/andreavega.dev/"><FaInstagramSquare /></a>
    </footer>
  );
};

export default Footer;