import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">MyPortfolio</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
