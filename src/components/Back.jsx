import { useNavigate } from "react-router-dom";

export default function Back() {
    const navigate = useNavigate();

    return (
        <button 
            type="button" 
            className="btn btn-outline-none mb-3"
            onClick={() => navigate(-1)}
            style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "1rem", cursor: "pointer" }}
        >
            ← Back
        </button>
    );
}
