import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
import Medical from '../components/medical/Medical';

function Non_Medical_PG_Page() {

    const title = "Postgraduate Non-Medical Programs: Excel in Your Chosen Field";
    const description = "Advance your career with our specialized postgraduate programs across diverse fields including technology, management, and sciences.";


    const items = [
        { title: "M.Tech (Master of Technology)", image: "/w.jpg" },
        { title: "M.Sc (Master of Science)", image: "/w.jpg" },
        { title: "M.Arch (Master of Architecture)", image: "/w.jpg" },
        { title: "MBA (Master of Business Administration)", image: "/w.jpg" },
        { title: "MCA (Master of Computer Applications)", image: "/w.jpg" },
        { title: "M.Sc Data Science", image: "/w.jpg" },
        { title: "Master of Hotel Management", image: "/w.jpg" },
        { title: "M.Sc Artificial Intelligence", image: "/w.jpg" },
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
