import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
import Medical from '../components/medical/medical';

function Non_medical_page() {

    const title = "Non-Medical Studies: Explore Your Future in Diverse Fields";
    const description = "Embark on a rewarding journey in non-medical careers. Select to discover programs, colleges, and admission details.";


    const items = [
        { title: "B-Tech/M-Tech", image: "/engineering.jpeg" },
        { title: "LAW", image: "/law.jpg" },
        { title: "B-Arch", image: "/barch.jpg" },
        { title: "Aviation ", image: "/aviation.jpg" },
        { title: "BBA/MBA", image: "/bba.jpg" },
        /*{ title: "Lab Technician", image: "/hero.jpg" },
        { title: "Microbiology", image: "/hero.jpg" },
        { title: "BDS (Dentistry)", image: "/hero.jpg" },*/
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
