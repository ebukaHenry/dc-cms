import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../components/Back";
// import api from "../utils/api";

export default function VisitorAttendance() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        invitedBy: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        /*
            Backend

            await api.post("/attendance/visitor", formData);

        */

        setTimeout(() => {

            setLoading(false);

            navigate("/attendance-success", {
                state: {
                    type: "visitor",
                    name: formData.firstName,
                    service: "Sunday Worship Service"
                }
            });
        }, 1000);
    };

    return (

        <div className="attendance-form-page">
            <Back />

            <div className="attendance-form-card">

                <h2>
                    Visitor Check-In
                </h2>

                <p>
                    Welcome! Kindly complete the form below.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>First Name</label>

                        <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Middle Name</label>

                        <input
                            type="text"
                            name="middleName"
                            className="form-control"
                            value={formData.middleName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">

                        <label>Last Name</label>

                        <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">
                        <label>Phone Number</label>

                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-4">

                        <label>
                            Invited By (Optional)
                        </label>

                        <input
                            type="text"
                            name="invitedBy"
                            className="form-control"
                            value={formData.invitedBy}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                        disabled={loading}
                    >
                        {
                            loading
                                ? "Checking In..."
                                : "Complete Check-In"
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}