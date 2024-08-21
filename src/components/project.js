import React from 'react';
import './project.css';
// import img from ./profile.png

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className='text'>My Projects</h2>
      <section id ="projects" className='Project-section'><div className="projects-grid">
        {/* Repeat this div for each project */}
        <div className="project-card">
        <img src={require('./profile.png')} alt="Project Thumbnail" />
        <a href="https://moorthik.neocities.org/response/response"><h3 className='text'>User Profile Creation</h3></a>
          <p className='text'>A simple User profile Creation Webapage same as Google Form with response page.</p>
        </div>
      </div>
      <div className="projects-grid"></div>
    </section>
    <section id ="projects" className='Project-section'><div className="projects-grid">
        {/* Repeat this div for each project */}
        <div className="project-card">
        <img src={require('./news.png')} alt="Project Thumbnail" />
        <a href="https://moorthik.neocities.org/fridayproject/ns"><h3 className='text'>News Paper in Regional Language</h3></a>
        <p className='text'>News Paper in regional language with CSS and Bootstrap, having a Form with response page.</p>
        </div>
      </div>
      <div className="projects-grid"></div>
    </section>
      <section id ="projects" className='Project-section'><div className="projects-grid">
        {/* Repeat this div for each project */}
        <div className="project-card">
        <img src={require('./port.png')} alt="Project Thumbnail" />
        <a href="https://moorthik.neocities.org/photograph%20portfolio/Photoportfolio"><h3 className='text'>Self Porfolio in Photography</h3></a>
          <p className='text'>A Self Portfolio that show case my explorings and my photograph through this webpage.</p>
        </div>
      </div>
      <div className="projects-grid"></div>
    </section>
      <div className="projects-grid">
        {/* Repeat this div for each project */}
        <div className="project-card">
        <img src={require('./bj.png')} alt="Project Thumbnail" />
        <a href="https://moorthik.neocities.org/firstcopy/bf"><h3 className='text'>A Firstcopy</h3></a>
          <p className='text'>This is the website that represent a Copy of another website that I used to make as practice.</p>
        </div>
      </div>
      <div className="projects-grid"></div>
    </section>
    
  );
};

export default Projects;
