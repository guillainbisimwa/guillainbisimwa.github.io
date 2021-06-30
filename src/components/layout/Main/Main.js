import 'bootstrap/scss/bootstrap.scss';
import { FaTwitter, FaFacebook, FaFile, FaGithub, FaLinkedin, FaAngellist, FaMedium } from 'react-icons/fa';

const Main = () => {
    return (
        <section id="home" className="home row mt-5">
          <div
            className="user_info col-md-7 col-sm-12 d-flex align-self-center flex-column"
          >
            <h1 className="fw-bold"><span className="c-primary">I'm</span> Guillain</h1>
            <blockquote className="blockquote">
              <p className="mt-3">
                Full-Stack Web Developer. Able to collaborate within a
                productive team both remotely and locally. Don't hesitate to
                contact me.
              </p>
              <footer className="blockquote-footer c-gray">Guillain BISIMWA</footer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1pk1DedK4cquTUmTBW6Cgfz1iaJGpdsHN/view?usp=sharing"
                className="btn bg-primary_ text-light mt-3"
                >Get my resume  <FaFile />
              </a>
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
            </blockquote>
          </div>
          <div className="user_pic col-md d-none d-md-flex justify-content-end">
            <img id="profile" className="w-50 m-5" alt="Guillain" src='./assets/banner-pic.png' />
          </div>
        </section>
    )
}

export default Main;