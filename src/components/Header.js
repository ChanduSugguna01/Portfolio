import Logo from '../data/img/man.jpg';
import Button from '../components/Button';
function Header()
{
    return (
        <header className="header">
        <div className="row">
          <div className="col-md-6">
            <p className="white title">
              Hi, this is 
            </p>
            <h1 className="purple name">Hema Chandu Sugguna</h1>
            <p className="text-muted">
            I'm Hema Chandu Sugguna, currently pursuing B.Tech computer science with a passion for full stack web development. During my studies, I
              focused on building a strong foundation in both frontend and backend technologies, with a particular
              interest in React and Python.

            </p>
            <br></br>
            <Button to="/contact/" text="Contact" class="btn" />
          </div>
          <br></br>
          <br></br>

          <div className="col-md-6 logo-col">
            <img className="img-fluid logo" alt="burhan kocadağ" src={Logo}></img>
          </div>
        </div>
      </header>

    )
}
export default Header