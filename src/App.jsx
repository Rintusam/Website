import './app.css';
import React from 'react'
import NavBar from './components/navbar/navbar.jsx'
import Banner from './components/banner/banner.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className='app' >
      <NavBar/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App
