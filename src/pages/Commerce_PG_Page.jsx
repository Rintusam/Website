import React from 'react'
import NavBar from '../components/navbar/navbar'
import Medical from '../components/medical/Medical'
import Footer from '../components/footer/Footer'

function Commerce_PG_Page() {
    const title = "Commerce Postgraduate Programs";
    const description = "Advance your commerce and business career with our specialized postgraduate programs.";

    const items = [
        { title: "M.B.A", image: "/mba.jpg" },
        { title: "M.Com", image: "/mcom.jpg" },
    ];

    return (
        <div>
            <NavBar />
            <Medical items={items} title={title} description={description} />
            <Footer />
        </div>
    )
}

export default Commerce_PG_Page
