import React from 'react'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
const playfair = Playfair_Display({ subsets: ['latin'] })

const Skills = () => {
  return (
    <div id="skills" className="features-area cell-items default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="site-heading text-center">
                        <h2 className='{playfair.className}'>My <span>Skills</span></h2>
                        <h4>Here are my skills</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="features-items icon-solid">
                    <div className="col-md-7">
                        <div className="items-box inc-cell">
                            <div className="col-md-6 col-sm-6 equal-height">
                                <div className="item">
                                    <div className="info">
                                        <h4>Front-End Development</h4>
                                        <p>
                                            React, Next.js, HTML, CSS, JavaScript, TypeScript
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 equal-height">
                                <div className="item">
                                    <div className="info">
                                        <h4>Back-End Development</h4>
                                        <p>
                                            Node.js, Express.js, RESTful API, MongoDB
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 equal-height">
                                <div className="item">
                                    <div className="info">
                                        <h4>Collaboration & Deployment</h4>
                                        <p>
                                            AWS (Amazon Web Services), Git, GitHub
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 equal-height">
                                <div className="item">
                                    <div className="info">
                                        <h4>UI/UX Design</h4>
                                        <p>
                                            Figma (Design and Prototyping), UI/UX Design Principles
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="thumb">
                            <Image width={450} height={300} src="/img/web-dev.svg" alt="Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills