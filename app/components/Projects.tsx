import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id="projects" className="team-area default-padding bottom-less">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="site-heading text-center">
                        <h2>Recent <span>Projects</span></h2>
                        <h4>Explore my recent projects</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="team-items">
                    <div className="col-md-4 single-item">
                        <div className="item">
                            <div className="thumb">
                                <Image width={200} height={300} src="/img/project1.png" alt="Thumb" />
                                <div className="overlay">
                                    <h4>Theme Fantome</h4>
                                    <p>
                                        Developed with React, Next.js and Bootstrap
                                    </p>
                                    <div className="social">
                                        <ul>
                                            <li className="link">
                                                <a href="https://themefantome.com"><i className="fas fa-link"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <h4>Theme Fantome</h4>
                                <p>Developed with Next.js</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 single-item">
                        <div className="item">
                            <div className="thumb">
                                <Image width={200} height={300} src="/img/project2.png" alt="Thumb" />
                                <div className="overlay">
                                    <h4>Copilot Blog</h4>
                                    <p>
                                        Developed with Next.js and TailwindCSS
                                    </p>
                                    <div className="social">
                                        <ul>
                                            <li className="link">
                                                <a href="https://www.copilot.com/blog"><i className="fas fa-link"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <h4>Copilot Blog</h4>
                                <p>Developed with Next.js and TailwindCSS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 single-item">
                        <div className="item">
                            <div className="thumb">
                                <Image width={200} height={300} src="/img/project3.png" alt="Thumb" />
                                <div className="overlay">
                                    <h4>Bext Blog</h4>
                                    <p>
                                        Next Blog
                                    </p>
                                    <div className="social">
                                        <ul>
                                            <li className="link">
                                                <a href="https://hmc.chartmetric.com/"><i className="fas fa-link"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <h4>Next Blog</h4>
                                <p>Developed with Ghost and TailwindCSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects