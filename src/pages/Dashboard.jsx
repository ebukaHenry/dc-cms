import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Back from "../components/Back";

export default function Dashboard() {

    const { user } = useContext(AuthContext);

    return (

        <div className="container px-2">
            <Back />

            <div className="dashboard-header">
                <h3>
                    Good Morning 👋
                </h3>
                <p>
                    {user?.name || "Administrator"}
                </p>
            </div>

            <div className="row dashboard-grid">
                <div className="col-12 col-md-6 dashboard-card">
                    <i className="bi bi-people-fill"></i>
                    <h2>542</h2>
                    <span>Members</span>
                </div>

                <div className="col-12 col-md-6 dashboard-card">
                    <i className="bi bi-qr-code-scan"></i>
                    <h2>87</h2>
                    <span>Attendance</span>
                </div>

                <div className="col-12 col-md-6 dashboard-card">
                    <i className="bi bi-person-plus-fill"></i>
                    <h2>12</h2>
                    <span>Visitors</span>
                </div>

               
            </div>

            <div className="dashboard-section">
                <h5>
                    Today's Services
                </h5>

                <div className="service-card">
                    <div>
                        <strong>
                            Sunday Worship
                        </strong>
                        <br />
                        <small>
                            09:00 AM
                        </small>
                    </div>
                    <i className="bi bi-chevron-right"></i>
                </div>

                <div className="service-card">
                    <div>

                        <strong>
                            Bible Study
                        </strong>
                        <br />

                        <small>
                            05:00 PM
                        </small>
                    </div>
                    <i className="bi bi-chevron-right"></i>
                </div>
            </div>

            <div className="dashboard-section">
                <h5>
                    Recent Activities
                </h5>

                <div className="activity-item">
                    <i className="bi bi-check-circle-fill text-success"></i>
                    John Doe checked in
                </div>

                <div className="activity-item">
                    <i className="bi bi-check-circle-fill text-success"></i>
                    Visitor registered
                </div>

                <div className="activity-item">
                    <i className="bi bi-check-circle-fill text-success"></i>
                    QR generated successfully
                </div>
            </div>
        </div>

    );

}