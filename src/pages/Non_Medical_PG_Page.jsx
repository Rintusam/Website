import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
import Medical from '../components/medical/Medical';

function Non_Medical_PG_Page() {

    const title = "Postgraduate Non-Medical Programs: Excel in Your Chosen Field";
    const description = "Advance your career with our specialized postgraduate programs across diverse fields including technology, management, and sciences.";


    const items = [
        { title: "M.Tech/M.E", image: "/mtech.jpg" },
        { title: "Ph.D in Engineering", image: "/phdengineering.jpg" },
        { title: "M.Sc", image: "/msc.jpg" },
        { title: "M.B.A", image: "/mba.jpg" },
        { title: "M.Com", image: "/mcom.jpg" },
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

export default Non_Medical_PG_Page
