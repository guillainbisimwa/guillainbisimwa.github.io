import { FaTwitter, FaFacebook, FaFile, FaGithub, FaLinkedin, FaAngellist, FaMedium } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="row text-white my-5 text-center">
        <div className="mt-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/gullain_bisimwa"
                  rel="noopener"
                  className="text-white ms-2"
                  ><FaTwitter /></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://web.facebook.com/guylarocheg"
                  rel="noopener"
                  className="text-white ms-2"
                  ><FaFacebook /></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/guillainbisimwa"
                  rel="noopener"
                  className="text-white ms-2"
                  ><FaGithub /></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/guillainbisimwa/"
                  rel="noopener"
                  className="text-white ms-2"
                  > <FaLinkedin /> </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://angel.co/u/guillain-bisimwa"
                  rel="noopener"
                  className="text-white ms-2"
                  ><FaAngellist /></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@guillainbisimwa"
                  rel="noopener"
                  className="text-white ms-2"
                  ><FaMedium /></a>
              </div>
        <b className="mt-4">© 2021 Guillain BISIMWA</b>
      </footer>
    )
}

export default Footer;