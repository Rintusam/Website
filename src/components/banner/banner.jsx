import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className="banner">
            <div className="content">

                <h1 className="title">
                    Unlock Your Potential <br />
                    Your Future Awaits
                </h1>

                <h3 className="subtitle">
                    Choose the right path and build a career that truly matches your goals.
                </h3>

        <div className="button-group">

      <Link to="/medical" className="box-btn medical-box">
        <span className="icon">🩺</span>
        <span>Medical Studies</span>
      </Link>

      <Link to="/non-medical" className="box-btn nonmedical-box">
        <span className="icon">⚛️</span>
        <span>Non-Medical Fields</span>
      </Link>
    
          
        </div>

            </div>

            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
