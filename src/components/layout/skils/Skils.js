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
          Freelance Full-stack Developer [ JavaScript | React | Redux | Ruby |
          RoR ]. Currently looking for new opportunities.
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
                <ins><a class="" href="http://cerhis.org">cerhis</a></ins>
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
        
    </section>
    )
}

export default Skils;