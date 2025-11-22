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
                    <Link to="/medical">
                        <button className="button">Medical</button>
                    </Link>

                    <Link to="/non-medical">
                        <button className="button">Non Medical</button>
                    </Link>
                </div>

            </div>

            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
