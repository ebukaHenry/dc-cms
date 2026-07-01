import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../components/Back";

export default function GenerateQR() {

    const [service] = useState({
        name: "Sunday Worship Service",
        date: "Sunday, August 2, 2026",
        time: "9:00 AM",
        status: "LIVE"
    });

    const navigate = useNavigate();

    // Backend will return this later
    const qrUrl =
        "https://attendance.yourchurch.com?token=4ec3f4a6-3c19-47ef-bc85";

    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);

    return (

        <div className="generate-qr-page px-2">
            <Back />

            <div className="service-card">
                <h3>{service.name}</h3>
                <p>{service.date}</p>
                <p>{service.time}</p>
                <span className="live-badge">
                    {service.status}
                </span>
            </div>

            <div className="qr-card">

                {/* Replace with backend generated QR */}
                <div className="qr-card">

            <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrUrl)}`}
               alt="QR Code"
                className="qr-image"
                onClick={() => navigate("/landing")}
                style={{ cursor: "pointer" }}
            />

            <h4>Scan To Check Attendance</h4>

            <p>
                Click the QR image to simulate scanning.
            </p>

            </div>

                <h4>Scan To Check Attendance</h4>
                <p>
                    Members and visitors should scan this QR code.
                </p>
            </div>

            <div className="countdown-card">

                <h5>QR Session</h5>
                <div className="countdown">
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                </div>

                <small>
                    QR expires automatically when the service ends.
                </small>
            </div>

            <div className="attendance-summary">

                <div className="summary-box">
                    <h3>142</h3>
                    <small>Members</small>
                </div>

                <div className="summary-box">
                    <h3>18</h3>
                    <small>Visitors</small>
                </div>
            </div>
        </div>
    );
}