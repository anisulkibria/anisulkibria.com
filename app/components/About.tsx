import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="about-area bg-gray default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-5 thumb">
                    <Image width={450} height={450} src="/img/anisul.jpg" alt="Thumb" />
                </div>
                <div className="col-md-7 default info">
                    <h4>Why Chose Me</h4>
                    <h2>My Commitment to Excellence <br/>as expert developer</h2>
                    <p>
                        Discover the Reasons to Collaborate with a Full-Stack Web Developer Proficient in React, Next.js, Node.js, MongoDB, and AWS
                    </p>
                    <ul>
                        <li>
                            <h5>Expertise in Cutting-Edge Technologies</h5>
                            <span>Proficient in React, Next.js, Node.js, MongoDB, and AWS, ensuring modern, high-performance solutions.</span>
                        </li>
                        <li>
                            <h5>End-to-End Development Capabilities</h5>
                            <span>From front-end design to back-end server development, I handle it all for a streamlined process.</span>
                        </li>
                        <li>
                            <h5>Cloud-Powered Solutions</h5>
                            <span>Leveraging AWS, I can deploy and maintain your web applications in a secure, highly available, and cost-effective cloud environment.</span>
                        </li>
                    </ul>
                    <a href="https://www.linkedin.com/in/anisulkibria/" className="btn circle btn-theme effect btn-md">Read more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About