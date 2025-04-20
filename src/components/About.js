import Logo from '../data/img/manfirst.webp';
import Button from '../components/Button';
import './Header.css'; // Add this CSS file for animations

function Header() {
  return (
    <div className="about">
      <div className="row">
        <div className="col-md-6">
          <p className="text-muted text-sub-title fade-in">Let's explain myself</p>

          <h2 className="sub-title text-muted hakkimda slide-in-left">ABOUT</h2>

          <p className="text-muted aciklama fade-up">
            I'm Hema Chandu Sugguna, currently pursuing B.Tech computer science with a passion for full stack web development. During my studies, I
            focused on building a strong foundation in both frontend and backend technologies, with a particular
            interest in React.
          </p>

          <br />
          <div className="about-buttons fade-in-delayed">
            <Button to="/projects/" text="Works" class="btn mr-1" />
            <Button to="/about/" text="Read more..." class="btn-outline" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
