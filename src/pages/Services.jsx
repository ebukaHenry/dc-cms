import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../components/Back";

export default function Services() {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const [services] = useState([
        {
            id: 1,
            title: "Sunday Worship Service",
            date: "2026-08-02",
            startTime: "09:00 AM",
            endTime: "11:30 AM",
            venue: "Main Auditorium",
            status: "Upcoming"
        },
        {
            id: 2,
            title: "Bible Study",
            date: "2026-08-05",
            startTime: "05:30 PM",
            endTime: "07:00 PM",
            venue: "Church Hall",
            status: "Upcoming"
        },
        {
            id: 3,
            title: "Night Vigil",
            date: "2026-08-08",
            startTime: "10:00 PM",
            endTime: "05:00 AM",
            venue: "Main Auditorium",
            status: "Draft"
        }
    ]);

    const filteredServices = useMemo(() => {

        return services.filter(service =>
            service.title.toLowerCase().includes(search.toLowerCase())
        );

    }, [search, services]);

    return (
        <div className="services-page px-2">
            <Back />

            <div className="page-header">
                <div>
                    <h3>Services</h3>
                    <small>Manage church services</small>
                </div>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/services/new")}
                >
                    <i className="bi bi-plus-lg"></i>
                    Add
                </button>
            </div>

            <div className="search-box">
                <i className="bi bi-search"></i>
                <input
                    type="text"
                    placeholder="Search service..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {
                filteredServices.length === 0 ?
                    (
                        <div className="empty-state">
                            <i className="bi bi-calendar-x"></i>
                            <h5>No services found</h5>
                        </div>
                    )
                    :
                    filteredServices.map(service => (
                        <div
                            key={service.id}
                            className="service-card"
                            onClick={() => navigate(`/services/${service.id}`)}
                        >

                            <div className="service-left">
                                <div className="service-icon">
                                    <i className="bi bi-calendar-event"></i>
                                </div>
                            </div>

                            <div className="service-middle">
                                <h5>
                                    {service.title}
                                </h5>

                                <p>
                                    <i className="bi bi-calendar3"></i>
                                    {" "}
                                    {service.date}
                                </p>

                                <p>
                                    <i className="bi bi-clock"></i>
                                    {" "}
                                    {service.startTime}
                                    {" - "}
                                    {service.endTime}
                                </p>

                                <p>
                                    <i className="bi bi-geo-alt"></i>
                                    {" "}
                                    {service.venue}
                                </p>
                            </div>

                            <div className="service-right">
                                <span
                                    className={`status-pill ${service.status.toLowerCase()}`}
                                >
                                    {service.status}
                                </span>
                                <i className="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
}