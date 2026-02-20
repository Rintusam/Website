import React from 'react'
import NavBar from '../components/navbar/navbar'
import Medical from '../components/medical/Medical'
import Footer from '../components/footer/Footer'

function Science_UG_Page() {
    const title = "Science Undergraduate Programs";
    const description = "Explore a wide range of science undergraduate programs in engineering, healthcare, pharmacy, and pure sciences.";

    const items = [
        { title: "Nursing", image: "/nursing.jpg" },
        { title: "B.Tech/B.E (Engineering)", image: "/engineering.jpeg" },
        { title: "Paramedical", image: "/paramedical.jpg" },
        { title: "B.Sc", image: "/bsc.jpeg" },
        { title: "Pharmacy", image: "/pharmacy.jpg" },
        { title: "Architecture", image: "/arch.jpg" },
        { title: "Bachelor of Physiotherapy(BPT)", image: "/physiotherapy.jpg" },
        { title: "B.Sc(Medical)", image: "/bscMedical.jpg" },
    ];

    return (
        <div>
            <NavBar />
            <Medical items={items} title={title} description={description} />
            <Footer />
        </div>
    )
}

export default Science_UG_Page
