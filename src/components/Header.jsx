import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header({ toggleSidebar }) {

    const { user } = useContext(AuthContext);

    const getInitials = () => {

        if (!user?.name) return "AD";

        return user.name
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase();

    };

    return (

        <header className="app-header">

            <button className="menu-btn" onClick={toggleSidebar}>
                <i className="bi bi-list"></i>
            </button>

            <div className="header-title">
                Church CMS
            </div>

            <div className="header-profile">
                {getInitials()}
            </div>

        </header>

    );

}