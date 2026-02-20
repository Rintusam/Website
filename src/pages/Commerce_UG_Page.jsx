import React from 'react'
import NavBar from '../components/navbar/navbar'
import Medical from '../components/medical/Medical'
import Footer from '../components/footer/Footer'

function Commerce_UG_Page() {
    const title = "Commerce Undergraduate Programs";
    const description = "Build a strong foundation in business, finance, and commerce with our undergraduate programs.";

    const items = [
        { title: "Management & Services", image: "/management.jpg" },
        { title: "B.B.A", image: "/bba.jpg" },
        { title: "B.Com", image: "/bcom.jpg" },
        { title: "B.C.A", image: "/bca.jpg" },
    ];

    return (
        <div>
            <NavBar />
            <Medical items={items} title={title} description={description} />
            <Footer />
        </div>
    )
}

export default Commerce_UG_Page
