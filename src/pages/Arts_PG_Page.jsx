import React from 'react'
import NavBar from '../components/navbar/navbar'
import Medical from '../components/medical/Medical'
import Footer from '../components/footer/Footer'

function Arts_PG_Page() {
    const title = "Arts Postgraduate Programs";
    const description = "Deepen your knowledge in humanities, social sciences, and creative fields with our postgraduate programs.";

    const items = [
        { title: "M.A", image: "/ma.jpg" },
    ];

    return (
        <div>
            <NavBar />
            <Medical items={items} title={title} description={description} />
            <Footer />
        </div>
    )
}

export default Arts_PG_Page
