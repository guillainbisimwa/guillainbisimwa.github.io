import 'bootstrap/scss/bootstrap.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return (
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
    );
}

export default NavBar;