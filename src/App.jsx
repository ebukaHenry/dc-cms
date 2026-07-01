import { Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Attendance from "./pages/Attendance";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import GenerateQR from "./pages/GenerateQR";
import MemberForm from "./pages/MemberForm";
import MemberAttendance from "./pages/MemberAttendance";
import VisitorAttendance from "./pages/VisitorAttendance";
import AttendanceSuccess from "./pages/AttendanceSuccess";
import Landing from "./pages/Landing";
import Visitors from "./pages/visitors";



function App() {

    return (

        <Routes>
            <Route path="/" element={<Splash />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<MainLayout />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/members" element={<Members />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/generate-qr" element={<GenerateQR />} />
            <Route path="/member-form" element={<MemberForm />} />
            <Route path="/member-attendance" element={<MemberAttendance />} />
            <Route path="/visitor-attendance" element={<VisitorAttendance />} />
            <Route path="/attendance-success" element={<AttendanceSuccess />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/visitors" element={<Visitors />} />
                
        </Routes>
        

    );

}

export default App;