import React from 'react'
import NavBar from '../components/navbar/navbar'
import Medical from '../components/medical/Medical'
import Footer from '../components/footer/Footer'


function Medical_PG_Page() {
    const title = "Postgraduate Medical Programs: Advance Your Healthcare Career";
    const description = "Take your medical expertise to the next level with our postgraduate programs. Explore specialized fields and advanced medical education.";

    const items = [
        { title: "M.Sc Nursing", image: "/w.jpg" },
        { title: "M.Pharm", image: "/w.jpg" },
        { title: "Ph.D.(P.B)", image: "/w.jpg" },
        { title: "Master of Physiotherapy (MPT)", image: "/w.jpg" },
        { title: "M.Sc Medical Microbiology", image: "/w.jpg" },
        { title: "M.Sc Clinical Psychology", image: "/w.jpg" },
        { title: "Master of Public Health (MPH)", image: "/w.jpg" },
    ];


    return (
        <div>
            <NavBar />
            <Medical items={items} title={title} description={description} />
            <Footer />
        </div>
    )
}

export default Medical_PG_Page
