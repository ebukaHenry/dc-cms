import { NavLink } from "react-router-dom";

export default function BottomNav() {

    const menus = [

        {
            name: "Dashboard",
            icon: "bi-house-door-fill",
            path: "/dashboard"
        },

        {
            name: "Members",
            icon: "bi-people-fill",
            path: "/members"
        },

        {
            name: "Attendance",
            icon: "bi-qr-code-scan",
            path: "/attendance"
        },

        {
            name: "More",
            icon: "bi-grid-fill",
            path: "/settings"
        }

    ];

    return (

        <nav className="bottom-nav">

            {
                menus.map(menu => (
                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) =>
                            isActive
                                ? "bottom-link active-bottom"
                                : "bottom-link"
                        }
                    >
                        <i className={`bi ${menu.icon}`}></i>
                        <small>{menu.name}</small>
                    </NavLink>
                ))
            }

        </nav>

    );
}