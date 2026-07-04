import { NavLink } from "react-router-dom";
//import logo from "../assets/images/dc-logo.png";

export default function Sidebar({ isOpen, closeSidebar }) {
  const menus = [
    {
      title: "Dashboard",
      icon: "bi-speedometer2",
      path: "/dashboard",
    },
    {
      title: "Members",
      icon: "bi-people",
      path: "/members",
    },
    {
      title: "Attendance",
      icon: "bi-qr-code-scan",
      path: "/attendance",
    },
    {
      title: "Generate QR",
      icon: "bi-upc-scan",
      path: "/generate-qr",
    },
    {
      title: "Visitors",
      icon: "bi-person-plus",
      path: "/visitors",
    },
    {
      title: "Departments",
      icon: "bi-diagram-3",
      path: "/departments",
    },
    {
      title: "Reports",
      icon: "bi-bar-chart",
      path: "/reports",
    },
    {
      title: "MVPs",
      icon: "bi-award",
      path: "/mvps",
    },
    {
      title: "Users",
      icon: "bi-person-badge",
      path: "/users",
    },
    {
      title: "Settings",
      icon: "bi-gear",
      path: "/settings",
    },
  ];

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? "show-overlay" : ""}`} onClick={closeSidebar} />

      <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <i className="bi bi-building-fill"></i>
            {/* <img src={logo} alt="dc-logo" /> */}
          </div>

          <div>
            <h5>DC CMS</h5>
            <small>Administration</small>
          </div>
        </div>

        <div className="sidebar-menu">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active-link"
                  : "sidebar-link"
              }
            >
              <i className={`bi ${menu.icon}`}></i>

              <span>{menu.title}</span>
            </NavLink>
          ))}
        </div>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <i className="bi bi-box-arrow-right"></i>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}