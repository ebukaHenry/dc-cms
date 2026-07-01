import { useLocation, useNavigate } from "react-router-dom";

export default function AttendanceSuccess() {

    const location = useLocation();

    const navigate = useNavigate();

    const {
        name = "Guest",
        service = "Sunday Worship Service",
        type = "member"
    } = location.state || {};

    const hour = new Date().getHours();

    let greeting = "Hello";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    const handleClose = () => {

    // Clear temporary state if needed

    window.close();

    };

    return (

        <div className="attendance-success-page px-2">

            <div className="attendance-success-card">

                <div className="success-icon">
                    <i className="bi bi-check-circle-fill"></i>
                </div>

                <h2>
                    Attendance Recorded
                </h2>

                <h4>
                    {greeting}, {name}!
                </h4>

                <p>
                    Welcome to
                    <strong> {service}</strong>.
                </p>

                {

                    type === "visitor"

                    ?

                    <p>
                        Thank you for worshipping with us today.
                        We pray you have a wonderful experience.
                    </p>

                    :

                    <p>
                        Your attendance has been recorded successfully.
                        Please proceed into the auditorium and enjoy the service.
                    </p>
                }

                <div className="success-footer">
                    God bless you.
                </div>

                <button
                    className="btn btn-primary w-100 mt-4"
                    onClick={handleClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}