import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const [service, setService] = useState({
        name: "Sunday Worship Service",
        date: "Sunday, August 2, 2026",
        time: "09:00 AM",
        status: "LIVE"
    });

    useEffect(() => {
        const token = searchParams.get("token");
        console.log("Session Token:", token);

        /*

        api.get(`/attendance/session/${token}`)

        setService(res.data)
        */

    }, []);

    return (

        <div className="landing-page">
            <div className="landing-card">

                <div className="landing-logo">
                    <i className="bi bi-building-fill"></i>
                </div>

                <h2>
                    Welcome
                </h2>

                <p>
                    {service.name}
                </p>

                <small>
                    {service.date}
                </small>
                <br />

                <small>
                    {service.time}
                </small>

                <div className="service-status">
                    {service.status}
                </div>

                <button
                    className="landing-btn member-btn"
                    onClick={() => navigate("/member-attendance")}
                >
                    <i className="bi bi-person-check-fill"></i>
                    I am a Member
                </button>

                <button
                    className="landing-btn visitor-btn"
                    onClick={() => navigate("/visitor-attendance")}
                >
                    <i className="bi bi-person-plus-fill"></i>
                    I am a Visitor
                </button>
            </div>
        </div>
    );
}