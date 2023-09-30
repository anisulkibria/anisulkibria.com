import React from 'react'

const Services = () => {
  return (
    <div id="services" className="we-offer-area carousel-shadow text-center default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="site-heading text-center">
                        <h2>What I <span>Offer</span></h2>
                        <h4>Services to help you</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="our-offer-carousel owl-carousel owl-theme">

                        <div className="item">
                            <i className="flaticon-sketch"></i>
                            <h4>Web Design</h4>
                            <p>
                                I will design the website for you with Figma and provide the design file
                            </p>
                        </div>

                        <div className="item">
                            <i className="flaticon-cloud-computing"></i>
                            <h4>Web Development</h4>
                            <p>
                                I will develop the webiste with the cutting edge technologies
                            </p>
                        </div>

                        <div className="item">
                            <i className="flaticon-collaboration"></i>
                            <h4>Server Management</h4>
                            <p>
                                I will deploy the website and maintain for the future 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services