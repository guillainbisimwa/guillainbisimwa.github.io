const Contact = () => {
    return (
        <section className="pt-2">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <h2 className="fw-bold">
                  If you have got a project in mind, why not get in touch? Let's
                  work together.
                </h2>

                <p className="font-size-lg text-muted mb-7 mb-md-9">
                I'm available for interresting work or projects. Big or small.
                  You can contact me using the form below, or by emailing
                  <b> guillainbisimwa@hotmail.fr</b>
                </p>
              </div>
            </div>
            <div className="row justify-content-center pt-4">
              <div className="col-12 col-md-12 col-lg-10">
                <form
                  id="fs-frm"
                  name="simple-contact-form"
                  acceptCharset="utf-8"
                  action="https://formspree.io/f/myylgayb"
                  method="post"
                  >
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-5">
                        <label className="contactName"> Full name </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full name"
                          name="name"
                          id="full-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-5">
                        <label className="contactEmail"> Email </label>

                        <input
                          type="email"
                          className="form-control"
                          name="_replyto"
                          id="email-address"
                          placeholder="hello@domain.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group mb-7 mb-md-9">
                        <label className="contactMessage">
                          Put your message here
                        </label>

                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          rows="5"
                          placeholder="Put your message here"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <input
                        type="hidden"
                        name="_subject"
                        id="email-subject"
                        value="Contact Form Submission"
                      />
                     
                      <button
                        type="submit"
                        className="btn bg-primary_ text-light lift mt-3"
                        id="send_msg"
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            </div>
        </section>
    )
}

export default Contact;