import React from 'react'
import Image from 'next/image'

const Faq = () => {
  return (
    <div id="faq" className="faq-area default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="site-heading text-center">
                        <h2>Qustion and <span>Answer</span></h2>
                        <h4>Most common and important answer</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 video-faq">
                    <div className="video">
                        <Image width={600} height={400} src="/img/faq.avif" alt="Thumb" />
                    </div>
                </div>
                <div className="col-md-6 faq-items">
                    <div className="acd-items acd-arrow">
                        <div className="panel-group symb" id="accordion">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#ac1">
                                            <span>1</span> What technologies do you specialize in?
                                        </a>
                                    </h4>
                                </div>
                                <div id="ac1" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <p>
                                            I specialize in React, Next.js, Node.js, MongoDB, AWS, and Figma. These technologies allow me to create modern, high-performance web solutions with excellent user experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#ac2">
                                            <span>2</span> Can you provide examples of your previous work? 
                                        </a>
                                    </h4>
                                </div>
                                <div id="ac2" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>
                                            Absolutely! You can find a portfolio showcasing my recent projects, along with detailed case studies that highlight the challenges, solutions, and outcomes of each project. Feel free to explore the showcased work to get a better sense of my capabilities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#ac3">
                                            <span>3</span> How do you approach new projects?
                                        </a>
                                    </h4>
                                </div>
                                <div id="ac3" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>
                                            I start by thoroughly understanding your project goals, target audience, and unique requirements. Then, I follow a structured process that includes planning, design, development, testing, and deployment, with regular communication to ensure your vision is realized every step of the way. Collaboration is key to success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#ac4">
                                            <span>4</span> What support and maintenance services do you offer after project completion?
                                        </a>
                                    </h4>
                                </div>
                                <div id="ac4" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>
                                            I provide ongoing support and maintenance services to ensure your website or web application continues to run smoothly and stays up-to-date with the latest technologies and security patches. Whether its fixing bugs, making updates, or scaling the application, Im here to support your digital presence long-term.
                                        </p>
                                    </div>
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

export default Faq