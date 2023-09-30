import React from 'react'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
const playfair = Playfair_Display({ subsets: ['latin'] })

const Overview = () => {
  return (
    <div id="overview" className="work-list-area include-arrow default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="site-heading text-center">
                        <h2 className='{playfair.className}'>How <span>I work</span></h2>
                        <h4>My working process</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 overview-items solid-items">
                    <div className="row">
                        <div className="single-item">
                            <div className="col-md-6 thumb">
                                <Image width={500} height={500} src="/img/process1.svg" alt="Thumb" />
                            </div>
                            <div className="col-md-6 info">
                                <h3>Planning and Design</h3>
                                <p>From Idea to User-Focused Design</p>
                                <ul>
                                    <li> 
                                        <h4>Conceptualization and Ideation </h4> 
                                        Transforming your project goals into a clear design vision.
                                    </li>
                                    <li>
                                        <h4>Wireframing and Prototyping</h4>
                                        Creating structured layouts and interactive prototypes for visualizing the concept.
                                    </li>
                                    <li>
                                        <h4>Design Collaboration</h4>
                                        Engaging in iterative refinements while closely collaborating with you to ensure the design aligns with your vision in Figma.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-item reverse">
                            <div className="col-md-6 thumb">
                                <Image width={500} height={500} src="/img/process2.svg" alt="Thumb" />
                            </div>
                            <div className="col-md-6 info">
                                <h3>Complete Development</h3>
                                <p>
                                    Turning Designs into Functional Solutions
                                </p>
                                <ul>
                                    <li> 
                                        <h4>Front-End Implementation</h4> 
                                        Bringing the visual design to life, making it interactive and user-friendly.
                                    </li>
                                    <li>
                                        <h4>Back-End Architecture</h4>
                                        Building a robust server infrastructure that powers your applications core functionalities.
                                    </li>
                                    <li>
                                        <h4>Integration and Functionality</h4>
                                        Ensuring seamless interaction between front-end and back-end components for a cohesive and feature-rich application.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-item">
                            <div className="col-md-6 thumb">
                                <Image width={500} height={500} src="/img/process3.svg" alt="Thumb" />
                            </div>
                            <div className="col-md-6 info">
                                <h3>Test and Deploy</h3>
                                <p>
                                    Ensuring Quality and Deploying with Precision 
                                </p>
                                <ul>
                                    <li> 
                                        <h4>Thorough Quality Assurance</h4> 
                                        Conducting extensive testing to identify and resolve any issues, ensuring reliability and performance.
                                    </li>
                                    <li>
                                        <h4>User-Centric Evaluation</h4>
                                        Incorporating user feedback to enhance the user experience and meet their specific needs.
                                    </li>
                                    <li>
                                        <h4>Efficient Deployment</h4>
                                        Leveraging AWS for scalable and efficient deployment, ensuring your application runs smoothly in a production environment.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview