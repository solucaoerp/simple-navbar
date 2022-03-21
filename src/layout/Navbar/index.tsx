import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-inverse navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="https://github.com/solucaoerp"><GitHubIcon /></a>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <ul className="nav navbar-nav navbar-right collapse navbar-collapse">
                    <li className="active"><Link to="/pg1">Page 1</Link></li>
                    <li><Link to="/pg2/1">Page 2</Link></li>
                    <li><Link to="/pg3">Page 3</Link></li>
                    <li><Link to="/pg4">Page 4</Link></li>
                    <li><Link to="/pg5">Page 5</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;