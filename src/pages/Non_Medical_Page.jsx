import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
import Medical from '../components/medical/Medical';

function Non_medical_page() {

    const title = "Non-Medical Studies: Explore Your Future in Diverse Fields";
    const description = "Embark on a rewarding journey in non-medical careers. Select to discover programs, colleges, and admission details.";


    const items = [
        { title: "B.Tech/B.E (Engineering)", image: "/engineering.jpeg" },
        { title: "Bachelor Degree(B.Sc)", image: "/bsc.jpeg" },
        { title: "Architecture", image: "/arch.jpg" },
        { title: "Management & Services", image: "/management.jpg" },
        { title: "B.B.A", image: "/bba.jpg" },
        { title: "B.Com", image: "/bcom.jpg" },
        { title: "BA", image: "/ba.jpg" },
        { title: "B.Voc", image: "bvoc.jpg" },
        { title: "B.C.A", image: "/bca.jpg" },
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

export default Non_medical_page
