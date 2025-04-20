import React from 'react';
import Services from '../components/Services';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Button from '../components/Button';
function Home()
{
    return (
      <section className="home">
        <div className="container">
           <Header />
           <Services />
           <About />
           <Projects />
        </div>
      </section>
    );
}
export default Home