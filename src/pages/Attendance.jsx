import { useNavigate } from "react-router-dom";
import Back from "../components/Back";

export default function Attendance() {

    const navigate = useNavigate();

    // Mock data (Replace with API later)
    const attendance = {
        service: "Sunday Worship Service",
        date: "Sunday, August 2, 2026",
        time: "09:00 AM",
        status: "LIVE",
        totalMembers: 142,
        male: 61,
        female: 81,
        visitors: 18,
        registeredMembers: 520,

        recent: [

            {
                id: 1,
                name: "Ebuka Henry Okafor",
                time: "09:02 AM"
            },

            {
                id: 2,
                name: "Grace Johnson",
                time: "09:05 AM"
            },

            {
                id: 3,
                name: "David Peter",
                time: "09:08 AM"
            }
        ]
    };

    const progress = Math.round(
        (attendance.totalMembers / attendance.registeredMembers) * 100
    );

    return (

        <div className="attendance-page px-2">
            <Back />
            <div className="attendance-service-card">

                <div>
                    <h3>{attendance.service}</h3>
                    <small>
                        {attendance.date} • {attendance.time}
                    </small>
                </div>

                <span className="live-badge">
                    {attendance.status}
                </span>
            </div>

            <div className="attendance-grid">

                <div className="attendance-stat-card">
                    <i className="bi bi-people-fill"></i>
                    <h2>{attendance.totalMembers}</h2>
                    <span>Members</span>
                </div>

                <div className="attendance-stat-card">
                    <i className="bi bi-person-fill"></i>
                    <h2>{attendance.male}</h2>
                    <span>Male</span>
                </div>
                <div className="attendance-stat-card">
                    <i className="bi bi-person-fill-check"></i>
                    <h2>{attendance.female}</h2>
                    <span>Female</span>
                </div>

                <div className="attendance-stat-card">
                    <i className="bi bi-person-plus-fill"></i>
                    <h2>{attendance.visitors}</h2>
                    <span>Visitors</span>
                </div>
            </div>

            <div className="attendance-progress">
                <div className="progress-header">
                    <strong>Attendance Progress</strong>
                    <span>
                        {attendance.totalMembers} / {attendance.registeredMembers}
                    </span>
                </div>

                <div className="progress">
                    <div
                        className="progress-bar"
                        style={{
                            width: `${progress}%`
                        }}
                    >
                        {progress}%
                    </div>
                </div>
            </div>

            <div className="attendance-actions">
                <button
                    className="action-card"
                    onClick={() => navigate("/attendance/manual")}
                >
                    <i className="bi bi-person-check-fill"></i>
                    Manual Check-in
                </button>

                <button
                    className="action-card"
                    onClick={() => navigate("/attendance/visitor")}
                >
                    <i className="bi bi-person-plus-fill"></i>
                    Visitor Check-in
                </button>

                <button
                    className="action-card"
                    onClick={() => navigate("/attendance/members")}
                >
                    <i className="bi bi-list-check"></i>
                    Members
                </button>

                <button
                    className="action-card"
                    onClick={() => navigate("/attendance/report")}
                >
                    <i className="bi bi-bar-chart-fill"></i>
                    Report
                </button>
            </div>

            <div className="recent-checkins">
                <div className="section-title">
                    <h5>
                        Recent Check-ins
                    </h5>
                </div>

                {
                    attendance.recent.map(person => (
                        <div
                            key={person.id}
                            className="checkin-card"
                        >

                            <div className="checkin-avatar">
                                {person.name
                                    .split(" ")
                                    .map(word => word[0])
                                    .join("")
                                    .substring(0,2)}
                            </div>

                            <div className="checkin-info">
                                <strong>
                                    {person.name}
                                </strong>

                                <small>
                                    Checked in successfully
                                </small>
                            </div>
                            <div className="checkin-time">
                                {person.time}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}