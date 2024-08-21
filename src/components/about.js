import React from 'react';
import './about.css';

const Intro = () => {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-content">
        <h1 className="name">Hi, I'm Moorthi</h1>
        <p>
          I'm a passionate <span className="highlight">Front-End Developer</span> dedicated to crafting seamless and engaging user experiences. With a keen eye for design and a love for clean code, I specialize in bringing ideas to life on the web.
        </p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default Intro;
