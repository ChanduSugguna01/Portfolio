import { NavLink } from 'react-router-dom';
  
function Footer()
{    
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-muted footer-title">Hema Chandu Sugguna</p>
                        
                    </div>
                    <div className="col-md-3">
                    
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About Me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Contact Information</p>

                    <a href="tel:+905469619221" className="text-muted">Phone: +91 70752 97908</a><br></br>
                    <a href="mailto:iletisim@burhankocadag.com" className="text-muted">Mail: chandusugguna@gmail.com</a>

                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Social Media</p>

                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hema-chandu-sugguna-a1a941251/" className="text-muted">Linkedin</a><br></br>
                    <a rel="noreferrer" target="_blank" href="https://github.com/ChanduSugguna01?tab=repositories" className="text-muted">Github</a><br></br>

                    </div>
                </div>
            </div>

        </footer>
    );
}
export default Footer