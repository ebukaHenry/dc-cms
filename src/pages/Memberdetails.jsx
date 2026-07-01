import { useNavigate } from "react-router-dom";

export default function MemberDetails() {

    const navigate = useNavigate();

    const member = {

        membershipNo: "M001",

        firstName: "Ebuka",

        middleName: "Henry",

        lastName: "Okafor",

        gender: "Male",

        phone: "08031234567",

        email: "ebuka@gmail.com",

        address: "Port Harcourt",

        department: "Media",

        occupation: "Software Developer",

        maritalStatus: "Single",

        joinedDate: "2024-01-15",

        status: "Active"

    };

    return (

        <div className="member-details px-2">
            <button
                className="btn btn-light mb-3"
                onClick={() => navigate(-1)}
            >
                <i className="bi bi-arrow-left"></i>
                Back
            </button>

            <div className="profile-card">
                <div className="profile-avatar">
                    {member.firstName[0]}
                    {member.lastName[0]}
                </div>

                <h3>
                    {member.firstName} {member.middleName} {member.lastName}
                </h3>

                <span className="status-badge">
                    {member.status}
                </span>

                <p>
                    {member.membershipNo}
                </p>
            </div>

            <div className="details-card">

                <h5>
                    Personal Information
                </h5>

                <div className="info-row">
                    <span>Gender</span>
                    <strong>{member.gender}</strong>
                </div>

                <div className="info-row">
                    <span>Phone</span>
                    <strong>{member.phone}</strong>
                </div>

                <div className="info-row">
                    <span>Email</span>
                    <strong>{member.email}</strong>

                </div>
                <div className="info-row">
                    <span>Address</span>
                    <strong>{member.address}</strong>
                </div>

                <div className="info-row">
                    <span>Occupation</span>
                    <strong>{member.occupation}</strong>
                </div>

                <div className="info-row">
                    <span>Marital Status</span>
                    <strong>{member.maritalStatus}</strong>
                </div>
            </div>

            <div className="details-card">
                <h5>
                    Church Information
                </h5>
                <div className="info-row">
                    <span>Department</span>
                    <strong>{member.department}</strong>
                </div>

                <div className="info-row">
                    <span>Joined</span>
                    <strong>{member.joinedDate}</strong>
                </div>
            </div>

            <div className="details-card">
                <h5>
                    Quick Actions
                </h5>

                <div className="action-grid">
                    <button className="action-btn">
                        <i className="bi bi-pencil-square"></i>
                        Edit
                    </button>

                    <button className="action-btn">
                        <i className="bi bi-qr-code"></i>
                        QR Code
                    </button>

                    <button className="action-btn">
                        <i className="bi bi-calendar-check"></i>
                        Attendance
                    </button>

                    <button className="action-btn">
                        <i className="bi bi-cash-stack"></i>
                        Payments
                    </button>
                </div>
            </div>

            <div className="details-card">
                <h5>
                    Recent Attendance
                </h5>

                <div className="timeline-item">
                    Sunday Service
                    <small>
                        27 July 2025
                    </small>
                </div>

                <div className="timeline-item">
                    Bible Study
                    <small>
                        24 July 2025
                    </small>
                </div>
            </div>

            <div className="details-card">
                <h5>
                    Recent Payments
                </h5>

                <div className="timeline-item">
                    Offering - ₦5,000
                    <small>
                        27 July 2025
                    </small>
                </div>

                <div className="timeline-item">
                    Thanksgiving - ₦10,000
                    <small>
                        13 July 2025
                    </small>
                </div>
            </div>
        </div>
    );
}