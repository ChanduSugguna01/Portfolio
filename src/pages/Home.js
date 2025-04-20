import React from 'react';
import Services from '../components/Services';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import './Home.css'; // ← Add animation styles here

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home-section fade-in">
          <Header />
        </div>
        <div className="home-section slide-up delay-1">
          <Services />
        </div>
        <div className="home-section slide-up delay-2">
          <About />
        </div>
        <div className="home-section zoom-in delay-3">
          <Projects />
        </div>
      </div>
    </section>
  );
}

export default Home;
