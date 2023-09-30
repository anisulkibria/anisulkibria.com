import React from 'react'

const Banner = () => {
  return (
    <div className="banner-area text-small content-double button-effect bg-fixed">
        <div className="box-table">
            <div className="box-cell">
                <div className="container">
                    <div className="row">
                        <div className="double-items">
                            <div className="info col-md-6">
                                <div className="content inc-video">
                                    <h1>This is Anisul Kibria : JavaScript, Next.js, Node.js Full-stack Developer</h1>
                                    <p>
                                        👋, Do you want to develop your website? As a next.js expert, I will help you to develop your web application.
                                    </p>
                                    <a href="https://www.upwork.com/fl/anisul" className="btn circle btn-dark border btn-md">Hire Now</a>
                                </div>
                            </div>
                            <div className="form col-md-5 text-light col-md-offset-1">
                                <div className="form-info">
                                    <h2><span>FREE</span> Quote.</h2>
                                    <form action="https://formspree.io/f/mjvqpkke" method="POST">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Your best email" type="email" name="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <button type="submit">
                                                    Get FREE Quote
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner