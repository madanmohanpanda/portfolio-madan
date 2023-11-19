import { useState } from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Nav from './components/Nav/Nav';
import Servises from './components/services/Servises';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';




import './App.css'
import Testimonial from './components/testimonials/Testimonial';

function App() {
 
  return (
    <>
    <div className="outer-container">
      <Nav />
      <Header />
      
      
      <Experience />
      <Contact />
      {/* <Servises />
      <Portfolio />
      <Testimonial />
      <Footer /> */}
        </div>
    </>
  )
}

export default App
