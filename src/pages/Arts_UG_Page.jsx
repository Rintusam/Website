import React from 'react'
import NavBar from '../components/navbar/navbar'
import Medical from '../components/medical/Medical'
import Footer from '../components/footer/Footer'

function Arts_UG_Page() {
    const title = "Arts Undergraduate Programs";
    const description = "Explore language, humanities, law, and creative arts through our diverse undergraduate programs.";

    const items = [
        { title: "BA", image: "/ba.jpg" },
        { title: "B.Voc", image: "bvoc.jpg" },
        { title: "Law", image: "/law.jpg" },
    ];

    return (
        <div>
            <NavBar />
            <Medical items={items} title={title} description={description} />
            <Footer />
        </div>
    )
}

export default Arts_UG_Page
