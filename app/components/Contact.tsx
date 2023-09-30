import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="contact-us-area default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="site-heading text-center">
                        <h2>Contact <span>Me</span></h2>
                        <h4>Do you Have Any Questions?</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 contact-form">
                    <h2>Lets lalk about your idea</h2>
                    <form action="https://formspree.io/f/xrgwobbq" method="POST" className="contact-form">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="form-group">
                                    <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                    <span className="alert-error"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                    <span className="alert-error"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="form-group comments">
                                    <textarea className="form-control" id="comments" name="message" placeholder="Tell me about the project"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <button type="submit" name="submit" id="submit">
                                    Send Message <i className="fa fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-12 alert-notification">
                            <div id="message" className="alert-msg"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact