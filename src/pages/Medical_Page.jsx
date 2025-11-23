import React from 'react'
import NavBar from '../components/navbar/navbar'
import Medical from '../components/medical/medical'
import Footer from '../components/footer/Footer'



function Medical_page() {
    const title = "Medical Studies: Explore Your Future in Healthcare";
    const description = "Embark on a rewarding journey in healthcare. Select to discover programs, colleges, and admission details.";

    const items = [
        { title: "BSC Nursing", image: "/hero.jpg" },
        { title: "General Nursing", image: "/hero.jpg" },
        { title: "Paramedical Sciences", image: "/hero.jpg" },
        { title: "MBBS (Medicine)", image: "/hero.jpg" },
        { title: "Physiotherapy", image: "/hero.jpg" },
        { title: "Lab Technician", image: "/hero.jpg" },
        { title: "Microbiology", image: "/hero.jpg" },
        { title: "BDS (Dentistry)", image: "/hero.jpg" },
    ];


    return (
        <div>
            <NavBar />
            <Medical items={items} title = {title } description={description}/>
            <Footer />
        </div>
    )
}

export default Medical_page
