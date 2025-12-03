import './app.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './pages/homePage.jsx';
import { Route, Routes } from 'react-router-dom';
import Medical_page from './pages/medical_page.jsx';
import Non_medical_page from './pages/Non_Medical_Page.jsx';
import College_detail from './pages/college_detail.jsx';


function App() {
  return (
    <div className='app' >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/medical' element={<Medical_page />} />
        <Route path='/non-medical' element={<Non_medical_page />} />
        <Route path='/college' element={<College_detail />} />

      </Routes>
    </div>
  )
}

export default App
