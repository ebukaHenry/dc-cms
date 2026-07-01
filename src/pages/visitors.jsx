import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../components/Back";

// Mock Data
export const mockVisitors = [
    {
        id: 1,
        firstName: "Chinedu",
        middleName: "Emmanuel",
        lastName: "Okoro",
        phone: "08034567890",
        invitedBy: "Pastor Michael Chimezie",
        date: "2026-07-01",
        service: "Sunday Worship"
    },
    {
        id: 2,
        firstName: "Aisha",
        middleName: "Ngozi",
        lastName: "Adebayo",
        phone: "09087654321",
        invitedBy: "Sis. Mary Okafor",
        date: "2026-07-01",
        service: "Sunday Worship"
    },
    {
        id: 3,
        firstName: "Emeka",
        middleName: "Chukwudi",
        lastName: "Nwosu",
        phone: "07011223344",
        invitedBy: "",
        date: "2026-07-01",
        service: "Sunday Worship"
    },
    {
        id: 4,
        firstName: "Fatima",
        middleName: "Abigail",
        lastName: "Ibrahim",
        phone: "08155667788",
        invitedBy: "Bro. David Eze",
        date: "2026-07-01",
        service: "Sunday Worship"
    },
    {
        id: 5,
        firstName: "Oluwaseun",
        middleName: "Michael",
        lastName: "Adeyemi",
        phone: "09099887766",
        invitedBy: "Pastor Mike Johnson",
        date: "2026-07-01",
        service: "Sunday Worship"
    },
    {
        id: 6,
        firstName: "Chioma",
        middleName: "Blessing",
        lastName: "Onwuka",
        phone: "08022334455",
        invitedBy: "Sis. Mercy Nwankwo",
        date: "2026-07-01",
        service: "Sunday Worship"
    }
];

export default function VisitorAttendance() {


    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        invitedBy: ""
    });

    const [loading, setLoading] = useState(false);

    // Load Mock Data Function
    // const loadMockData = () => {
    //     const randomVisitor = mockVisitors[Math.floor(Math.random() * mockVisitors.length)];
    //     setFormData({
    //         firstName: randomVisitor.firstName,
    //         middleName: randomVisitor.middleName,
    //         lastName: randomVisitor.lastName,
    //         phone: randomVisitor.phone,
    //         invitedBy: randomVisitor.invitedBy
    //     });
    // }
    return (
        <div className="px-2">
            <Back />
            <h2>MVPs</h2>
            <div className="attendance-form-card">
                

                {/* Mock Data Button */}
                {mockVisitors.length > 0 && (
                    mockVisitors.map((visitor) => (
                        <div key={visitor.id} className="mock-visitor-card border-bottom py-2">
                            <p>
                                <strong>{visitor.firstName} {visitor.middleName} {visitor.lastName}</strong>
                            </p>
                            <p>Phone: {visitor.phone}</p>
                            <p>Invited By: {visitor.invitedBy}</p>
                        </div>
                    ))
                )}
                
                </div>
                </div>
    )}