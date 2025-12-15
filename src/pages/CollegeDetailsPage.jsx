import React from 'react';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/Footer';
import CollegeDetails from '../components/college_details/CollegeDetails';

const CollegeDetailsPage = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main style={{ minHeight: '80vh', marginTop: '20px' }}>
                <CollegeDetails />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default CollegeDetailsPage;
