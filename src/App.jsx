import './app.css';
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './pages/homePage.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import Medical_page from './pages/medical_page.jsx';
import Non_medical_page from './pages/non_medical_page.jsx';
import Medical_PG_Page from './pages/Medical_PG_Page.jsx';
import Non_Medical_PG_Page from './pages/Non_Medical_PG_Page.jsx';
import Science_UG_Page from './pages/Science_UG_Page.jsx';
import Science_PG_Page from './pages/Science_PG_Page.jsx';
import Commerce_UG_Page from './pages/Commerce_UG_Page.jsx';
import Commerce_PG_Page from './pages/Commerce_PG_Page.jsx';
import Arts_UG_Page from './pages/Arts_UG_Page.jsx';
import Arts_PG_Page from './pages/Arts_PG_Page.jsx';
import College_detail from './pages/college_select.jsx';
import Contact_page from './pages/Contact_page.jsx';
import About_page from './pages/About_page.jsx';
import Collect_Details from './pages/Collect_Details.jsx';
import CollegeDetailsPage from './pages/CollegeDetailsPage.jsx';
import WhatsAppButton from './components/whatsapp_button/WhatsAppButton.jsx';
import FloatingEnquiry from './components/floating_enquiry/FloatingEnquiry.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsConditionsPage from './pages/TermsConditionsPage.jsx';
import DisclaimerPage from './pages/DisclaimerPage.jsx';


function App() {
  const location = useLocation();
  const isCollegeDetails = location.pathname.startsWith('/college-details/');
  const isCollegePage = location.pathname === '/college';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='app' >
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* Stream routes — Science / Commerce / Arts */}
        <Route path='/science' element={<Science_UG_Page />} />
        <Route path='/science-pg' element={<Science_PG_Page />} />
        <Route path='/commerce' element={<Commerce_UG_Page />} />
        <Route path='/commerce-pg' element={<Commerce_PG_Page />} />
        <Route path='/arts' element={<Arts_UG_Page />} />
        <Route path='/arts-pg' element={<Arts_PG_Page />} />
        {/* Legacy routes — kept to avoid breaking bookmarks */}
        <Route path='/medical' element={<Medical_page />} />
        <Route path='/non-medical' element={<Non_medical_page />} />
        <Route path='/medical-pg' element={<Medical_PG_Page />} />
        <Route path='/non-medical-pg' element={<Non_Medical_PG_Page />} />
        <Route path='/college' element={<College_detail />} />
        <Route path='/contact' element={<Contact_page />} />
        <Route path='/about' element={<About_page />} />
        <Route path='/collect_form' element={<Collect_Details />} />
        <Route path='/college-details/:id' element={<CollegeDetailsPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/terms-conditions' element={<TermsConditionsPage />} />
        <Route path='/disclaimer' element={<DisclaimerPage />} />

      </Routes>
      {!isCollegeDetails && (
        <div className={isCollegePage ? 'desktop-only-whatsapp' : ''}>
          <WhatsAppButton />
        </div>
      )}
      {!isCollegeDetails && !isCollegePage && <FloatingEnquiry />}
    </div>
  )
}

export default App
