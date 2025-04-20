import React from 'react';
import Logo from '../data/img/manfirst.webp';
import Button from '../components/Button';
import './About.css'; // Make sure to import the CSS for animations

function About() {
  return (
    <section className="aboutpage"> 
      <div className="container">
        <div className="about">
          <div className="row">
            <div className="col-md-6">
              <p className="text-muted text-sub-title animated fadeIn">Let's explain myself</p>
              <h2 className="sub-title text-muted hakkimda animated slideInLeft">ABOUT</h2>
              <p className="text-muted aciklama animated fadeInUp">
                I'm Hema Chandu Sugguna, currently pursuing B.Tech computer science with a passion for full stack web development. During my studies, I focused on building a strong foundation in both frontend and backend technologies, with a particular interest in React.
              </p><br></br>
              <p className="text-muted aciklama animated fadeInUp">
                I've completed several personal projects that showcase my skills in creating responsive user interfaces and implementing server-side logic. I'm eager to apply my knowledge in a professional setting and continue growing as a developer.
              </p> <br></br>
              <div className="about-buttons animated fadeInUp">
                <a rel="noreferrer" target="_blank" href="https://github.com/ChanduSugguna01?tab=repositories" className="btn mr-1"> <i className="fab fa-github"></i> Github</a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hema-chandu-sugguna-a1a941251/" className="btn mr-1"> <i className="fab fa-linkedin"></i> Linkedin</a>
              </div>
              <div>
                <h4 className="sub-title text-muted hakkimda animated slideInRight">Skills</h4><br></br>
                <ul className="skills-list">
                  <li className="skill-item animated fadeInUp">HTML</li>
                  <li className="skill-item animated fadeInUp">CSS</li>
                  <li className="skill-item animated fadeInUp">Python</li>
                  <li className="skill-item animated fadeInUp">C</li>
                  <li className="skill-item animated fadeInUp">C++</li>
                  <li className="skill-item animated fadeInUp">React</li>
                  <li className="skill-item animated fadeInUp">Java</li>
                </ul>
              </div>
              <div>
                <h4 className="sub-title text-muted hakkimda animated slideInRight">Certificates</h4><br></br>
                <ul className="skills-list">
                <a href="https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12212353_450_08-24-2024.pdf"><li className="skill-item animated fadeInUp">Python Data Mastery: From Fundamentals to Machine Learning  </li></a>
                <a href="https://www.coursera.org/account/accomplishments/verify/WTKFEEW4BC7G"> <li className="skill-item animated fadeInUp">The Bits and Bytes of Computer Networking</li></a>
                <a href="https://www.coursera.org/account/accomplishments/verify/N3QFLBG42GH9"> <li className="skill-item animated fadeInUp">Generative AI with Large Language Models</li></a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
