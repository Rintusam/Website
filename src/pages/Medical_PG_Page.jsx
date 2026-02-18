import React from 'react'
import NavBar from '../components/navbar/navbar'
import Medical from '../components/medical/Medical'
import Footer from '../components/footer/Footer'


function Medical_PG_Page() {
    const title = "Postgraduate Medical Programs: Advance Your Healthcare Career";
    const description = "Take your medical expertise to the next level with our postgraduate programs. Explore specialized fields and advanced medical education.";

    const items = [
        { title: "M.Sc Nursing", image: "/mscnurse.jpg" },
        { title: "M.Pharm", image: "/Mpharm.jpg" },
        { title: "Pharm.D.(P.B)", image: "/pharmD(pb).jpg" },
        { title: "Ph.D in Pharmacy", image: "/phdpharmacy.jpg" },
        { title: "M.Sc (Master of Science)", image: "/MscMed.jpg" },
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
