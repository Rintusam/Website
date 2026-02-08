import React from 'react';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/Footer';
import PrivacyPolicy from '../components/legal/PrivacyPolicy';

const PrivacyPolicyPage = () => {
    return (
        <div className="page-wrapper">
            <NavBar />
            <main>
                <PrivacyPolicy />
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
