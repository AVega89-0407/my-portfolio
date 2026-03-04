import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

import Hamburger from 'hamburger-react'

const Navbar = () => {

const [isOpen, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className='navbar-top'>
      <p className="navbar-name">Andrea Vega</p>
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