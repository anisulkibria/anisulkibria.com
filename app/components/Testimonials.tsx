"use client";
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-elastic-carousel'

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials-area bg-gray default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="site-heading text-center">
                        <h2>Client <span>Feedback</span></h2>
                        <h4>What clients say about me</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="row">
                        <div className="testimonial-items owl-carousel owl-theme">
                            <Carousel>
                            <div className="testimonial-item">
                                <div className="thumb col-md-4">
                                    <Image width={200} height={200} src="/img/marlon.jpeg" alt="Thumb" />
                                </div>
                                <div className="info col-md-8">
                                    <div className="content">
                                        <p> 
                                            Extremely talented web developer. Implemented Figma designs perfectly, including complex animation elements. 
                                        </p>
                                        <h4>Marlon Misra</h4>
                                        <span>Cofounder/CEO at Copilot</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="thumb col-md-4">
                                    <Image width={200} height={200} src="/img/james.jpeg" alt="Thumb" />
                                </div>
                                <div className="info col-md-8">
                                    <div className="content">
                                        <p> 
                                            Highly recommend for anything to do with web development! Highly professional and timely throughout.
                                        </p>
                                        <h4>James McClements</h4>
                                        <span>Institutional Adviser at Euroz Hartleys Limited</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="thumb col-md-4">
                                    <Image width={200} height={200} src="/img/manisha.jpeg" alt="Thumb" />
                                </div>
                                <div className="info col-md-8">
                                    <div className="content">
                                        <p> 
                                            It was good working with Anisul. With minimum instructions, he was able to understand the requirement and deliver high quality work. There was no need of any revisions. Very quick turnaround. Highly recommended!
                                        </p>
                                        <h4>Manisha Malik</h4>
                                        <span>Policy Advisor at Ontario Ministry of Energy</span>
                                    </div>
                                </div>
                            </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials