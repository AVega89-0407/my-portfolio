import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

import Hamburger from 'hamburger-react'


function Navbar() {

const [isOpen, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className='navbar-top'>
      <NavLink to="/" className="navbar-name"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-astroid-icon lucide-astroid"><path d="M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203"/></svg><p>andrea.dev</p></NavLink>
        <ul className="navbar-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <section className="hamburger">
        <Hamburger direction='left'
        toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <ul className="mobile-menu">
              <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
              <li><NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
            </ul>
          )}
        </section>
        </nav>
    </header>
  );
};
export default Navbar;