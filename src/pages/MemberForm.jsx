import { useState } from "react";
import Back from "../components/Back";

export default function MemberForm() {
    const [formData, setFormData] = useState({
        membershipNo: "",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        dob: "",
        maritalStatus: "",
        phone: "",
        email: "",
        occupation: "",
        address: "",
        lga: "",
        departments: [{ department_id: "", role: "" }],
        trainings: [],
        status: "Active",
        joinedDate: ""
    });

    const lgas = ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"];
    const TRAINING_OPTIONS = ["DCA-Basic", "DCA-Advance", "DLI-Basic", "DLI-Advance", "Encounter Retreat", "Cell meeting"];
    const roles = ["HOD", "Assistant", "Secretary", "Member"];
    const DEPARTMENTS = [
        { id: 1, name: "Choir" }, { id: 2, name: "DC Training" }, { id: 3, name: "Technical" },
        { id: 4, name: "Teens Church" }, { id: 5, name: "Sanctuary" }, { id: 6, name: "Mvp" },
        { id: 7, name: "Kings kids" }, { id: 8, name: "Welfare" }, { id: 9, name: "Admin/Finance" },
        { id: 10, name: "Intercessory" }, { id: 11, name: "Traffic" }, { id: 12, name: "Protocol/ Security" },
        { id: 13, name: "Ushers" }, { id: 14, name: "Greeters" }, { id: 15, name: "Pastoral" },
        { id: 16, name: "Medical" }, { id: 17, name: "Media" }, { id: 18, name: "Evangelism" },
        { id: 19, name: "Drama/ Creatives" }, { id: 20, name: "I-care/ Information desk" }
    ];

    // Standard flat field changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // FIX: Specialized change handler for deep objects inside arrays
    const handleDeptChange = (index, field, value) => {
        const updatedDepartments = formData.departments.map((dept, i) => {
            if (i === index) {
                return { ...dept, [field]: value };
            }
            return dept;
        });

        setFormData({
            ...formData,
            departments: updatedDepartments
        });
    };

    const handleAddDept = () => {
        setFormData(prev => ({
            ...prev,
            departments: [...prev.departments, { department_id: '', role: '' }]
        }));
    };

    const handleRemoveDept = (index) => {
        setFormData(prev => ({
            ...prev,
            departments: prev.departments.filter((_, i) => i !== index)
        }));
    };

     const handleTrainingChange = (e) => {
        const { value, checked } = e.target;
        const currentTrainings = formData.trainings;

        if (checked) {
            // Add training if checked
            setFormData(prev => ({
                ...prev,
                trainings: [...currentTrainings, value]
            }));
        } else {
            // Remove training if unchecked
            setFormData(prev => ({
                ...prev,
                trainings: currentTrainings.filter(t => t !== value)
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="member-form-container">
            <Back />
            <div className="page-title">
                <h3>Add Member</h3>
                <p>Complete the information below.</p>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="form-section">
                    <h5>Personal Information</h5>
                    <div className="mb-3">
                        <label>First Name</label>
                        <input
                            className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Middle Name</label>
                        <input
                            className="form-control"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Last Name</label>
                        <input
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Gender</label>
                        <select
                            className="form-select"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            className="form-control"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="form-section">
                    <h5>Contact Information</h5>
                    <div className="mb-3">
                        <label>Phone</label>
                        <input
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Address</label>
                        <textarea
                            rows="3"
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>LGA</label>
                        <select
                            className="form-select"
                            name="lga"
                            value={formData.lga}
                            onChange={handleChange}
                        >
                            <option value="">Choose</option>
                            {lgas.map((lga) => (<option key={lga} value={lga}>{lga}</option>))}
                        </select>
                    </div>
                </div>

                {/* Church Information */}
                <div className="form-section">
                    <h5>Church Information</h5>
                    <div className="mb-3">
                        <label>Department & Role</label>
                        
                        {formData.departments.map((dept, index) => (
                            <div key={index} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                                {/* Department Dropdown */}
                                <select
                                    className="form-select"
                                    value={dept.department_id}
                                    onChange={(e) => handleDeptChange(index, "department_id", e.target.value)}
                                >
                                    <option value="">Choose department</option>
                                    {DEPARTMENTS.map((d) => (
                                        <option key={d.id} value={d.id}>{d.name}</option>
                                    ))}
                                </select>

                                {/* Role Dropdown */}
                                <select
                                    className="form-select"
                                    value={dept.role}
                                    onChange={(e) => handleDeptChange(index, "role", e.target.value)}
                                >
                                    <option value="">Role</option>
                                    {roles.map((r) => (
                                        <option key={r} value={r}>{r}</option>
                                    ))}
                                </select>

                                {/* Prevent removing the last row if you want at least 1 department */}
                                {formData.departments.length > 1 && (
                                    <button 
                                        type="button" 
                                        className="btn btn-danger" 
                                        onClick={() => handleRemoveDept(index)}
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}

                        <button 
                            type="button" 
                            className="btn btn-secondary btn-sm mt-2 rounded-pill px-3" 
                            onClick={handleAddDept}
                        >
                             Add Department
                        </button>
                    </div>

                    <div className="mb-3">
                        <label className="form-label d-block fw-bold">
                            Completed Trainings / Meetings
                        </label>
                        <div className="row">
                            {TRAINING_OPTIONS.map((training) => (
                                <div className="col-md-6 mb-2" key={training}>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={training.replace(/\s+/g, '-')}
                                            value={training}
                                            checked={formData.trainings.includes(training)}
                                            onChange={handleTrainingChange}
                                        />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor={training.replace(/\s+/g, '-')}
                                        >
                                            {training}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                    Submit Member
                </button>
                </form>
                </div>
    )}
                



// import { useState } from "react";
// import Back from "../components/Back";

// export default function MemberForm() {
//     const [formData, setFormData] = useState({
//         membershipNo: "",
//         firstName: "",
//         middleName: "",
//         lastName: "",
//         gender: "",
//         dob: "",
//         maritalStatus: "",
//         phone: "",
//         email: "",
//         occupation: "",
//         address: "",
//         lga: "",
//         departments: [{ department_id: "", role: "" }],
//         trainings: [],
//         status: "Active",
//         joinedDate: ""
//     });

//     const lgas = ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"];
//     const TRAINING_OPTIONS = ["DCA-Basic", "DCA-Advance", "DLI-Basic", "DLI-Advance", "Encounter Retreat", "Cell meeting"];
//     const roles = ["HOD", "Assistant", "Secretary", "Member"];
//     const DEPARTMENTS = [
//         { id: 1, name: "Choir" }, { id: 2, name: "DC Training" }, { id: 3, name: "Technical" },
//         { id: 4, name: "Teens Church" }, { id: 5, name: "Sanctuary" }, { id: 6, name: "Mvp" },
//         { id: 7, name: "Kings kids" }, { id: 8, name: "Welfare" }, { id: 9, name: "Admin/Finance" },
//         { id: 10, name: "Intercessory" }, { id: 11, name: "Traffic" }, { id: 12, name: "Protocol/ Security" },
//         { id: 13, name: "Ushers" }, { id: 14, name: "Greeters" }, { id: 15, name: "Pastoral" },
//         { id: 16, name: "Medical" }, { id: 17, name: "Media" }, { id: 18, name: "Evangelism" },
//         { id: 19, name: "Drama/ Creatives" }, { id: 20, name: "I-care/ Information desk" }
//     ];

//     // Standard flat field changes
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     // FIX: Specialized change handler for deep objects inside arrays
//     const handleDeptChange = (index, field, value) => {
//         const updatedDepartments = formData.departments.map((dept, i) => {
//             if (i === index) {
//                 return { ...dept, [field]: value };
//             }
//             return dept;
//         });

//         setFormData({
//             ...formData,
//             departments: updatedDepartments
//         });
//     };

//     const handleAddDept = () => {
//         setFormData(prev => ({
//             ...prev,
//             departments: [...prev.departments, { department_id: '', role: 'Member' }]
//         }));
//     };

//     const handleRemoveDept = (index) => {
//         setFormData(prev => ({
//             ...prev,
//             departments: prev.departments.filter((_, i) => i !== index)
//         }));
//     };

//      const handleTrainingChange = (e) => {
//         const { value, checked } = e.target;
//         const currentTrainings = formData.trainings;

//         if (checked) {
//             // Add training if checked
//             setFormData(prev => ({
//                 ...prev,
//                 trainings: [...currentTrainings, value]
//             }));
//         } else {
//             // Remove training if unchecked
//             setFormData(prev => ({
//                 ...prev,
//                 trainings: currentTrainings.filter(t => t !== value)
//             }));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     };

//     return (
//         <div className="member-form-container">
//             <Back />
//             <div className="page-title">
//                 <h3>Add Member</h3>
//                 <p>Complete the information below.</p>
//             </div>

//             <form onSubmit={handleSubmit}>
//                 {/* Personal Information */}
//                 <div className="form-section">
//                     <h5>Personal Information</h5>
//                     <div className="mb-3">
//                         <label>First Name</label>
//                         <input
//                             className="form-control"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label>Middle Name</label>
//                         <input
//                             className="form-control"
//                             name="middleName"
//                             value={formData.middleName}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label>Last Name</label>
//                         <input
//                             className="form-control"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label>Gender</label>
//                         <select
//                             className="form-select"
//                             name="gender"
//                             value={formData.gender}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select</option>
//                             <option>Male</option>
//                             <option>Female</option>
//                         </select>
//                     </div>

//                     <div className="mb-3">
//                         <label>Date of Birth</label>
//                         <input
//                             type="date"
//                             className="form-control"
//                             name="dob"
//                             value={formData.dob}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 </div>

//                 {/* Contact Information */}
//                 <div className="form-section">
//                     <h5>Contact Information</h5>
//                     <div className="mb-3">
//                         <label>Phone</label>
//                         <input
//                             className="form-control"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label>Email</label>
//                         <input
//                             className="form-control"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label>Address</label>
//                         <textarea
//                             rows="3"
//                             className="form-control"
//                             name="address"
//                             value={formData.address}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label>LGA</label>
//                         <select
//                             className="form-select"
//                             name="lga"
//                             value={formData.lga}
//                             onChange={handleChange}
//                         >
//                             <option value="">Choose</option>
//                             {lgas.map((lga) => (<option key={lga} value={lga}>{lga}</option>))}
//                         </select>
//                     </div>
//                 </div>

//                 {/* Church Information */}
//                 <div className="form-section">
//                     <h5>Church Information</h5>
//                     <div className="mb-3">
//                         <label>Department & Role</label>
                        
//                         {formData.departments.map((dept, index) => (
//                             <div key={index} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
//                                 {/* Department Dropdown */}
//                                 <select
//                                     className="form-select"
//                                     value={dept.department_id}
//                                     onChange={(e) => handleDeptChange(index, "department_id", e.target.value)}
//                                 >
//                                     <option value="">Choose department</option>
//                                     {DEPARTMENTS.map((d) => (
//                                         <option key={d.id} value={d.id}>{d.name}</option>
//                                     ))}
//                                 </select>

//                                 {/* Role Dropdown */}
//                                 <select
//                                     className="form-select"
//                                     value={dept.role}
//                                     onChange={(e) => handleDeptChange(index, "role", e.target.value)}
//                                 >
//                                     <option value="">Role</option>
//                                     {roles.map((r) => (
//                                         <option key={r} value={r}>{r}</option>
//                                     ))}
//                                 </select>

//                                 {/* Prevent removing the last row if you want at least 1 department */}
//                                 {formData.departments.length > 1 && (
//                                     <button 
//                                         type="button" 
//                                         className="btn btn-danger" 
//                                         onClick={() => handleRemoveDept(index)}
//                                     >
//                                         Remove
//                                     </button>
//                                 )}
//                             </div>
//                         ))}

//                         <button 
//                             type="button" 
//                             className="btn btn-secondary btn-sm mt-2" 
//                             onClick={handleAddDept}
//                         >
//                             + Add Department
//                         </button>
//                     </div>
//                 </div>
//                 </form>
//                 </div>
//                 )}

