import React from 'react';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/Footer';
import Disclaimer from '../components/legal/Disclaimer';

const DisclaimerPage = () => {
    return (
        <div className="page-wrapper">
            <NavBar />
            <main>
                <Disclaimer />
            </main>
            <Footer />
        </div>
    );
};

export default DisclaimerPage;
