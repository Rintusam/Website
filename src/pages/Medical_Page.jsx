import React from 'react'
import NavBar from '../components/navbar/navbar'
import Medical from '../components/medical/Medical'
import Footer from '../components/footer/Footer'



function Medical_page() {
    const title = "Medical Studies: Explore Your Future in Healthcare";
    const description = "Embark on a rewarding journey in healthcare. Select to discover programs, colleges, and admission details.";

    const items = [
        { title: "Nursing", image: "/nursing.jpg" },
        { title: "Pharmacy", image: "/pharmacy.jpg" },
        { title: "Paramedical", image: "/paramedical.jpg" },
        { title: "Bachelor of Physiotherapy(BPT)", image: "/physiotherapy.jpg" },
        { title: "B.Sc(Bachelor of Science)", image: "/bscMedical.jpg" }
    ];


    return (
        <div>
            <NavBar />
            <Medical items={items} title={title} description={description} />
            <Footer />
        </div>
    )
}

export default Medical_page
