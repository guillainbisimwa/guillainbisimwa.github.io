import github from './../../../assets/github.png'

const Skils = () => {
    return (
    <section id="experiences" class="row mt-5">
        <div class="section_title col-sm">
          <p class="c-primary">My Experience</p>
          <h2>EXPERIENCES AND <span class="c-primary">SKILLS</span></h2>
        </div>
        <div
          class="section_details d-none d-md-flex col-sm align-self-center"
        >
          <div class="sep me-2"></div>
            Full-stack Developer [ JavaScript | React / Redux |
          Ruby / Rails, Python, SQL ]. Currently looking for new opportunities.
        </div>
        <div class="exp row d-flex col-gap">
          <div
            class="p-3 col-12 col-md border mt-3 me-3 border-light d-flex flex-column my-exp"
          >
            <div class="sep-b">
              <p class="c-primary">August 2020 - present</p>
              <h5>Mentor</h5>
              <p>
                Currently helping students from around the world learn HTML /
                CSS / JS / React / Redux / Ruby/Rails and to grow both
                professionally and personally.
              </p>
            </div>
          </div>
          <div
            class="p-3 col-12 col-md border mt-3 me-3 border-light d-flex flex-column my-exp"
          >
            <div class="sep-b">
              <p class="c-primary">February 2019 - June 2020</p>
              <h5>IT support and database manager</h5>
              <p>
                Deploying and maintaining 
                <a class="" href="https://twitter.com/cerhis_org"> <ins>cerhis</ins> </a>
                software, a mobile health information system in a hospital.
                Using Couchbase, Couchbase sync gateway, JSON, node js...
              </p>
            </div>
          </div>
          <div
            class="p-3 col-12 col-md border mt-3 me-3 border-light d-flex flex-column my-exp"
          >
            <div class="sep-b">
              <p class="c-primary">December 2016 - June 2018</p>
              <h5>Full stack web developer</h5>
              <p>
                Developed full-stack web applications that processed,
                analyzed, Managed, optimized, and updated MYSQL databases,
                PHP, and JavaScript applications...
              </p>
            </div>
          </div>
        </div>
        <div class="row pt-5 ">
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src={github} alt="html" />
                    </div>
                    <div class="skills-name">
                        <p>html</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/css.png" alt="css" />
                    </div>
                    <div class="skills-name">
                        <p>css</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/javascript.png" alt="javascript" />
                    </div>
                    <div class="skills-name">
                        <p>javascript</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/bootstrap.png" alt="bootstrap" />
                    </div>
                    <div class="skills-name">
                        <p>bootstrap</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/jquery.png" alt="jquery" />
                    </div>
                    <div class="skills-name">
                        <p>jquery</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/sass.png" alt="sass" />
                    </div>
                    <div class="skills-name">
                        <p>sass</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/wordpress.png" alt="wordpress" />
                    </div>
                    <div class="skills-name">
                        <p>wordpress</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/react.png" alt="react" />
                    </div>
                    <div class="skills-name">
                        <p>react</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/github.png" alt="github" />
                    </div>
                    <div class="skills-name">
                        <p>github</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/vscode.png" alt="vscode" />
                    </div>
                    <div class="skills-name">
                        <p>vscode</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/photoshop.png" alt="photoshop" />
                    </div>
                    <div class="skills-name">
                        <p>photoshop</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2">
                <div class="skills-card">
                    <div class="skills-img">
                        <img src="assets/images/illustrator.png" alt="illustrator" />
                    </div>
                    <div class="skills-name">
                        <p>illustrator</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Skils;