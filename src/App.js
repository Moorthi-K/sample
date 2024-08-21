import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
