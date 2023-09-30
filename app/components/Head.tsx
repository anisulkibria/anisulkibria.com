import React from 'react'
import Image from 'next/image'

const Head = () => {
  return (
    <header id="home">
        <nav className="navbar navbar-default attr-border navbar-sticky bootsnav">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="/">
                        <Image width={130} height={20} src="/img/logo.png" className="logo logo-display" alt="Logo" />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                        <li>
                            <a className="smooth-menu" href="#about">About</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#services">Services</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#overview">Overview</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#projects">Projects</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#testimonials">Testimonials</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#faq">Faq</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#contact">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Head