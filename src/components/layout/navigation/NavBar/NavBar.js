import 'bootstrap/scss/bootstrap.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <div>
            <nav className="row d-none d-md-block">
                <div className="col-sm p-2 d-flex justify-content-end col-gap bg-dark pe-3">
                    <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://web.facebook.com/guylarocheg"
                    rel="noopener"
                    className="text-white ms-2"> <FontAwesomeIcon icon={faRetweet} /> </a>
                    <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/gullain_bisimwa"
                    rel="noopener"
                    className="text-white ms-2"><FontAwesomeIcon icon={faRetweet} /> </a>
                    <a href="#" rel="noopener" className="text-white ms-2">English</a>
                    <a href="#" rel="noopener" className="text-white ms-2">Français</a>

                </div>
            </nav>
            <header className="ps-2 mt-3 container" >
                <nav className="row">
                    <nav className="col-sm-12 navbar navbar-expand-md p-1">
                        <div>
                            <button
                                className="navbar-toggler border-0 fw-bold mt-4"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarTogglerMenu"
                                aria-controls="navbarTogglerMenu"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <img
                                src="https://img.icons8.com/flat_round/64/000000/list--v1.png"
                                alt="Menu"
                                />
                            </button>
                            </div>

                            <div className="collapse navbar-collapse" id="navbarTogglerMenu">
                            <a
                                className="navbar-brand p-0 d-none d-md-block"
                                href="#"
                                rel="noopener"
                            >
                            <img id="avatar" width="50" alt="Logo" src="https://img.icons8.com/cotton/64/000000/checked-laptop.png"/>
                            </a>
                            <div className="navbar-nav me-auto"></div>

                            <div className="form-inline my-2 my-lg-0 p-2 p-md-0 fw-bold">
                                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="ms-4 ms-md-0 nav-item">
                                    <a
                                    href="#home"
                                    rel="noopener"
                                    className="nav-link c-primary d-block d-md-none1"
                                    >Home +</a>
                                </li>
                                <li className="ms-4 nav-item">
                                    <a
                                    href="#experiences"
                                    rel="noopener"
                                    className="nav-link text-white"
                                    >Experiences</a>
                                </li>
                                <li className="ms-4 ms-md-0 nav-item">
                                    <a href="#skills" rel="noopener" className="nav-link text-white"
                                    >Skills</a>
                                </li>
                                <li className="ms-4 nav-item">
                                    <a
                                    href="#projects"
                                    rel="noopener"
                                    className="nav-link text-white"
                                    >Projects</a>
                                </li>
                                <li className="ms-4 nav-item">
                                    <a
                                    href="blog.html"
                                    rel="noopener"
                                    className="nav-link text-white"
                                    >Blog</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a
                                    className="btn bg-primary_ text-light"
                                    href="tel:+243-828-598-304"
                                    >
                                    Click to Call
                                    <i className="fas fa-phone"></i> +243-828-598-304
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;