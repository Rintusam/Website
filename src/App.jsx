import './app.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './pages/homePage.jsx';
import { Route, Routes } from 'react-router-dom';
import Medical_page from './pages/medical_page.jsx';
import Non_medical_page from './pages/non_medical_page.jsx';
import College_detail from './pages/College_detail.jsx';
import Contact_page from './pages/Contact_page.jsx';

function App() {
  return (
    <div className='app' >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/medical' element={<Medical_page />} />
        <Route path='/non-medical' element={<Non_medical_page />} />
        <Route path='/college' element={<College_detail />} />
        <Route path='/contact' element={<Contact_page />} />
      </Routes>
    </div>
  )
}

export default App
