import React from "react";
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/Footer';
import College from "../components/college/college";

function College_detail() {
  return (
    <div>
         <header>
            <NavBar />
            </header>
            <College />
            <footer>
            <Footer />
            </footer>
    </div>
  );
}

export default College_detail;
