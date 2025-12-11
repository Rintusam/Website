import React from 'react';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/navbar';
import About from '../components/about/About';

const About_page = () => {
  return (
    <div className="page-wrapper">
      <NavBar /> 
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default About_page;