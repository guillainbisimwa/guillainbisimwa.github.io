import 'bootstrap/scss/bootstrap.scss'

const NavBar = () => {
    return (
        <nav class="row d-none d-md-block">
            <div class="col-sm p-2 d-flex justify-content-end col-gap bg-dark pe-3">
                <a target="_blank"
                rel="noopener noreferrer"
                href="https://web.facebook.com/guylarocheg"
                rel="noopener"
                class="text-white ms-2"><i class="fab fa-facebook"></i></a>
                <a target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/gullain_bisimwa"
                rel="noopener"
                class="text-white ms-2"><i class="fab fa-twitter"></i></a>
                <a href="#" rel="noopener" class="text-white ms-2">English</a>
                <a href="#" rel="noopener" class="text-white ms-2">Français</a>
            </div>
        </nav>
    );
}

export default NavBar;