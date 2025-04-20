import React from 'react';
import Logo from '../data/img/manfirst.webp';
import Button from '../components/Button';
function About()
{
    return (
        <section className="aboutpage"> 
          <div className="container">
          <div className="about">
        <div className="row">
          <div className="col-md-6">
          <p className="text-muted text-sub-title">Let's explain myself</p>

            <h2 className="sub-title text-muted hakkimda">ABOUT</h2>
            <p className="text-muted aciklama">
            I'm Hema Chandu sugguna, currently pursuing B.Tech computer science with a passion for full stack web development. During my studies, I
              focused on building a strong foundation in both frontend and backend technologies, with a particular
              interest in React.            </p><br></br>
            <p className="text-muted aciklama">
            I've completed several personal projects that showcase my skills in creating responsive user interfaces
              and implementing server-side logic. I'm eager to apply my knowledge in a professional setting and continue
              growing as a developer.
            </p>        <br></br>
            
            
            <br></br>
            <div className="about-buttons">
            <a rel="noreferrer" target="_blank" href="https://github.com/ChanduSugguna01?tab=repositories"  class="btn mr-1" > <i class="fab fa-github"></i> Github</a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hema-chandu-sugguna-a1a941251/"  class="btn mr-1" > <i class="fab fa-linkedin"></i> Linkedin</a>

            </div>
            <div>
            <h4 className="sub-title text-muted hakkimda">Skills</h4><br></br>
            <p className='text-muted aciklama'>I have Experience in HTML, CSS, Python, C, C++, React and Java</p>
            </div>

            

          </div>
          
        </div>
      </div>
          </div>
        </section>
    );
}
export default About