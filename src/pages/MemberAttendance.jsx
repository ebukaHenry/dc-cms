import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import api from "../utils/api";

export default function MemberAttendance() {

    const navigate = useNavigate();

    const [phone, setPhone] = useState("");

    const [loading, setLoading] = useState(false);

    const [member, setMember] = useState(null);

    const [error, setError] = useState("");

    const searchMember = async () => {

        if (!phone) {
            setError("Phone number is required.");
            return;
        }
        
        setLoading(true);
        setError("");

        /*
        Backend

        const res = await api.post("/members/lookup",{

            phone

        });

        setMember(res.data);
        */

        // Mock Data

        setTimeout(() => {

            if(phone === "08031234567"){
                setMember({
                    id:1,
                    membershipNo:"M001",
                    firstName:"Ebuka",
                    lastName:"Okafor",
                    phone:"08031234567",
                    department:"Media"
                });
            }

            else{
                setError("No member found.");
                setMember(null);
            }
            setLoading(false);
        },1000);
    };

    const confirmAttendance = async () => {

        /*
        await api.post("/attendance/checkin",{

            memberId:member.id,

            sessionToken

        });
        */

        navigate("/attendance-success",{

            state:{

                name:`${member.firstName} ${member.lastName}`
            }
        });
    };

    return(

        <div className="attendance-form-page px-2">
            <div className="attendance-form-card">
                <h2>
                    Member Attendance
                </h2>

                {/* <p>
                    Enter your registered phone number.
                </p> */}

                <div className="mb-3">

                    <label>
                        Enter your registered phone number.
                    </label>

                    <input
                        className="form-control"
                        placeholder="08031234567"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                    />
                </div>

                <button
                    className="btn btn-primary w-100 mb-3"
                    onClick={searchMember}
                    disabled={loading}
                >
                    {
                        loading
                        ?
                        "Searching..."
                        :
                        "Search"
                    }
                </button>

                <button
                    className="btn btn-success w-100"
                    onClick={()=> navigate("/member-form")}
                    >
                        Register
                </button>

                {
                    error &&
                    <div className="alert alert-danger mt-3">
                        {error}
                    </div>
                }

                {
                    member &&
                    <div className="member-preview">

                        <div className="member-avatar">
                            {member.firstName[0]}
                            {member.lastName[0]}
                        </div>

                        <h4>
                            {member.firstName} {member.lastName}
                        </h4>

                        <p>
                            {member.membershipNo}
                        </p>

                        <p>
                            {member.department}
                        </p>

                        <p>
                            {member.phone}
                        </p>

                        <button
                            className="btn btn-success w-100"
                            onClick={confirmAttendance}
                        >
                            Confirm Attendance
                        </button>

                        
                    </div>
                }
         </div>
        </div>
    );
}