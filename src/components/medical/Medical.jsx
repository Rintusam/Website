import React from "react";
import "./Medical.css";

function Medical({items , title, description}) {
    

    return (
        <div className="medical-page">

            <div className="grid-banner-wrapper">

                {/* Text Centered */}
                <div className="medical-header">
                    <h1>{title}</h1>
                    <p>
                        {description}
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
