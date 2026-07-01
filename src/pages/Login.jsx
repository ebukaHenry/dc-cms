import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate = useNavigate();

    return(
        <div className="login-page">

            <div className="login-card">

                <h2>Welcome</h2>

                <p>Please sign in to continue</p>

                <input
                    className="form-control mb-3"
                    placeholder="Username"

                />

                <input
                    type="password"
                    className="form-control mb-4"
                    placeholder="Password"
                />

                <button className="btn btn-primary w-100" onClick={()=>navigate("/home")}>
                    Login
                </button>

            </div>

        </div>

    );

}