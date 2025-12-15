import React from "react";
import { useLocation } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/Footer';
import College from "../components/college/college";

function College_detail() {
  const location = useLocation();
  const selectedCourse = location.state?.course || null;

  return (
    <div>
         <header>
            <NavBar />
            </header>
            <College selectedCourse={selectedCourse} />
            <footer>
            <Footer />
            </footer>
    </div>
  );
}

export default College_detail;
