import { useState } from "react";
import membersData from "../data/member";
import Back from "../components/Back";
import { useNavigate } from "react-router-dom";

export default function Members() {

    const [members] = useState(membersData);
    const navigate = useNavigate();

    return (
        <div className="px-2">
            <Back />
            <div className="page-header">
                <h3>Members</h3>
                <button className="btn btn-primary" onClick={()=> navigate("/member-form")}>
                    <i className="bi bi-plus-lg"></i>
                    Add
                </button>
            </div>

            <div className="search-box">
                <i className="bi bi-search"></i>
                <input
                    type="text"
                    placeholder="Search member..."
                />

            </div>
            {
                members.map(member=>(
                    <div
                        key={member.id}
                        className="member-card"
                    >

                        <div className="member-avatar">
                            {member.firstName[0]}
                            {member.lastName[0]}
                        </div>

                        <div className="member-info">
                            <h6>
                                {member.firstName} {member.lastName}
                            </h6>

                            <small>
                                {member.membershipNo}
                            </small>
                            <br/>
                            <small>
                                {member.department}
                            </small>

                        </div>

                        <button className="btn btn-light">
                            <i className="bi bi-three-dots-vertical"></i>
                        </button>
                    </div>

                ))

            }

        </div>

    );

}