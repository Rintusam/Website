import React from 'react';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/Footer';
import TermsConditions from '../components/legal/TermsConditions';

const TermsConditionsPage = () => {
    return (
        <div className="page-wrapper">
            <NavBar />
            <main>
                <TermsConditions />
            </main>
            <Footer />
        </div>
    );
};

export default TermsConditionsPage;
