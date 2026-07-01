import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/dc-logo.png";

export default function Splash() {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => { navigate("/login"); }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="splash">

            <div className="pulse-circle">

                {/* <i className="bi bi-building"></i> */}
                <img src={logo} alt="dc-logo" />

            </div>

            <h2>DC CMS</h2>

            <p>Managing your church smarter</p>

            <div className="loading">

                <span></span>

                <span></span>

                <span></span>

            </div>

        </div>

    );

}