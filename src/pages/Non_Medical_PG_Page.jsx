import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
import Medical from '../components/medical/Medical';

function Non_Medical_PG_Page() {

    const title = "Postgraduate Non-Medical Programs: Excel in Your Chosen Field";
    const description = "Advance your career with our specialized postgraduate programs across diverse fields including technology, management, and sciences.";


    const items = [
        { title: "M.Tech/M.E", image: "/w.jpg" },
        { title: "Ph.D in Engineering", image: "/w.jpg" },
        { title: "M.Sc", image: "/w.jpg" },
        { title: "M.B.A", image: "/w.jpg" },
        { title: "M.Com", image: "/w.jpg" },
        { title: "M.A", image: "/w.jpg" },
    
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
