import React from "react";
import "./Medical.css";

function Medical() {
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
        <div className="medical-page">

            <div className="grid-banner-wrapper">

                {/* Text Centered */}
                <div className="medical-header">
                    <h1>Medical Studies: Explore Your Future in Healthcare</h1>
                    <p>
                        Embark on a rewarding journey in healthcare. Select to discover
                        programs, colleges, and admission details.
                    </p>
                </div>

                <div className="grid-overlay"></div>

                {/* Grid */}
                <div className="medical-grid">
                    {items.map((item) => (
                        <div className="medical-card" key={item.title}>
                            <img src={item.image} alt={item.title} />
                            <div className="card-title">{item.title}</div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default Medical;
