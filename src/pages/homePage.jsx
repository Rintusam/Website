import React from 'react'
import NavBar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import Footer from '../components/footer/Footer'

function HomePage() {
    return (
        <div>
            <header>
            <NavBar />
            </header>
            <Banner />
            <footer>
            <Footer />
            </footer>
        </div>
    )
}

export default HomePage
