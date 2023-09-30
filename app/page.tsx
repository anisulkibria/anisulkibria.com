
import Image from "next/image"
import Carousel from 'react-elastic-carousel';

import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Banner />
    <About />
    <Services />
    <Skills />
    <Overview />
    <Projects />
    <Testimonials />
    <Faq />
    <Contact />
    </>
  )
}
