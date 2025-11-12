import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import ContactForm from "./components/ContactForm";
import Aos from "aos";
import "aos/dist/aos.css"
import NET from 'vanta/src/vanta.net'

const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
  return (
    <>
          <Navbar />
          <div className="container">
            <Home />
            <Skills />
            <Projects />
            <Contact />

            <section id="contact" data-aos="fade-up">
                <ContactForm />
            </section>
          </div>
    </>
  );
};
export default App;



