import React from 'react'
import NavBar from '../components/navbar/navbar'
import Medical from '../components/medical/Medical'
import Footer from '../components/footer/Footer'

function Science_PG_Page() {
    const title = "Science Postgraduate Programs";
    const description = "Advance your science career with specialized postgraduate programs in engineering, pharmacy, and applied sciences.";

    const items = [
        { title: "M.Tech/M.E", image: "/mtech.jpg" },
        { title: "Ph.D in Engineering", image: "/phdengineering.jpg" },
        { title: "M.Sc", image: "/msc.jpg" },
        { title: "M.Sc Nursing", image: "/mscnurse.jpg" },
        { title: "M.Pharm", image: "/Mpharm.jpg" },
        { title: "Pharm.D (Post Baccalaureate)", image: "/pharmD(pb).jpg" },
        { title: "Ph.D in Pharmacy", image: "/phdpharmacy.jpg" },
    ];

    return (
        <div>
            <NavBar />
            <Medical items={items} title={title} description={description} />
            <Footer />
        </div>
    )
}

export default Science_PG_Page
