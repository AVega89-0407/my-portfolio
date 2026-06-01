import './Navbar.css';


function Navbar() {


  return (
    <header className="navbar">
      <nav className='navbar-top'>
      <a className="navbar-name" href='#home'><img 
      src="./star.svg" alt="star icon" />
      <p>andrea.dev</p></a>
        <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <span className="available-badge">
  <span className="dot" />
  Open to work
</span>
        </nav>
    </header>
  );
};
export default Navbar;