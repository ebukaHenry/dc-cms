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
        town: "",
        landmark: "",
        state: "Anambra",
        departments: [{ department_id: "", role: "" }],
        trainings: [],
        belongsToCell: "",
        cellLeader: "",
        status: "Active",
        joinedDate: ""
    });

    // const lgas = ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"];
   
    const anambraData = {
  "state": "Anambra",
  "lgas": {
    "Aguata": [
      "Achina", "Aguluezechukwu", "Akpo", "Ameysi", "Ekwulobia", 
      "Ezinifite", "Ikenga", "Igbo-Ukwu", "Isuofia", "Nkpologwu", 
      "Oneeh", "Uga", "Umuchu", "Umuona"
    ],
    "Anambra East": [
      "Aguleri", "Enugwu-Aguleri", "Eziagulu-Otu", "Enugwu-Otu", 
      "Igbariam", "Nando", "Nsugbe", "Otuocha", "Umuleri"
    ],
    "Anambra West": [
      "EziAnam", "Ifite-Anam", "Nzam", "Olumbanasa", "Oroma-Etiti", 
      "Umuenwelum", "Umueze-Anam", "Umuoba-Anam"
    ],
    "Anaocha": [
      "Adazi-Ani", "Adazi-Enu", "Adazi-Nnukwu", "Agulu", "Aguluzigbo", 
      "Akwaeze", "Ichida", "Neni", "Nri", "Obeledu"
    ],
    "Awka North": [
      "Achalla", "Amansea", "Amanuke", "Ebenebe", "Isu-Aniocha", 
      "Mgbakwu", "Ugbene", "Ugbuenu", "Urum"
    ],
    "Awka South": [
      "Amawbia", "Awka", "Ezinato", "Isiagu", "Mbaukwu", 
      "Nibo", "Nise", "Okpuno", "Umuawulu"
    ],
    "Ayamelum": [
      "Anaku", "Ifite-Ogwuari", "Igbakwu", "Omor", "Omasi", 
      "Umeelum", "Umumbo", "Umuerum"
    ],
    "Dunukofia": [
      "Ifitedunu", "Nawgu", "Ukpo", "Ukwulu", "Umudioka", "Umunachi"
    ],
    "Ekwusigo": [
      "Ichi", "Oraifite", "Ozubulu", "Ukpor"
    ],
    "Idemili North": [
      "Abatete", "Eziowelle", "Ideani", "Nkpor", "Obosi", 
      "Ogidi", "Okafi", "Oraukwu", "Uke", "Umuoji"
    ],
    "Idemili South": [
      "Alor", "Awka-Etiti", "Nnobi", "Nnokwa", "Oba", "Ojoto"
    ],
    "Ihiala": [
      "Amorka", "Azia", "Ihiala", "Ihembosi", "Isseke", 
      "Mbosi", "Okija", "Osumoghu", "Ubuluisiuzor", "Uli"
    ],
    "Njikoka": [
      "Abagana", "Enugwu-Agidi", "Enugwu-Ukwu", "Nawfia", "Nimo", "Nri"
    ],
    "Nnewi North": [
      "Nnewi Metropolis"
    ],
    "Nnewi South": [
      "Akwaihedi", "Amichi", "Ebenator", "Ekwulumili", "Osumenyi", 
      "Ukpor", "Unubi", "Utuh"
    ],
    "Ogbaru": [
      "Akili-Ogidi", "Akili-Ozizor", "Atani", "Ekwindizu", "Mputu", 
      "Obeagwe", "Ogbakuba", "Ogwuaniocha", "Ohita", "Oshita", 
      "Ossomala", "Osuche", "Umunankwo", "Umuzu"
    ],
    "Onitsha North": [
      "Onitsha Inland Town", "GRA", "Odoakpu"
    ],
    "Onitsha South": [
      "Fegge", "Woliwo", "Owerri Road Axis"
    ],
    "Orumba North": [
      "Ajalli", "Amaetiti", "Awa", "Awgbu", "Ekwulobia", 
      "Nanka", "Ndikelionwu", "Ndiokolo", "Ndiokpalaeze", 
      "Ndiowu", "Ndiukwuenu", "Oko", "Omogho", "Ufuma"
    ],
    "Orumba South": [
      "Agbudu", "Akpu", "Enugwu-Umuonyia", "Eziagu", "Ihite", 
      "Isulo", "Nawfija", "Ndirokpulueze", "Nkerehi", "Ogbunka", 
      "Owerre-Ezukala", "Umunze", "Umuomaku"
    ],
    "Oyi": [
      "Awkuzu", "Nkwelle-Ezunaka", "Ogbunike", "Umunya", "Umudioka"
    ]
  }
};

const towns = formData.lga
    ? anambraData.lgas[formData.lga] || []
    : [];

    const TRAINING_OPTIONS = ["DCA-Basic", "DCA-Advance", "DLI-Basic", "DLI-Advance", "Encounter Retreat"];
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

                    <div className="col-md-4 mb-3">
                        <label>State</label>
                        <input type="text" value="Anambra" className="form-control" disabled />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>LGA</label>
                        <select 
                            className="form-select" 
                            name="lga"
                            value={formData.lga}
                            onChange={handleChange}
                            required
                            >
                        <option value="">Select LGA</option>
                            {Object.keys(anambraData.lgas).map(lga => (
                            <option key={lga} value={lga}>{lga}</option>
                         ))}
                        </select>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>Town / City</label>
                        <select 
                            className="form-select" 
                            name="town"
                            value={formData.town} 
                            onChange={handleChange}
                            required
                            disabled={!formData.lga}
                    >
                    <option value="">Select Town</option>
                        {towns.map(town => (
                        <option key={town} value={town}>{town}</option>
                    ))}
                    </select>
                    </div>

                    <div className="col-12 mb-3">
                        <label>Landmark / Nearest Bus Stop</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="landmark" 
                            value={formData.landmark}
                            onChange={handleChange}
                            placeholder="e.g. Near St. John's Cathedral, Nkpor"
                            required
                        />
                    </div>
                </div>

                    {/* <div className="mb-3">
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
                    </div> */}


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

                    <div className="mb-3">
                        <label className="fw-bold">Do you belong to a cell?</label>
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="belongsToCell"
                            value="Yes"
                            checked={formData.belongsToCell === "Yes"}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Yes</label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="belongsToCell"
                            value="No"
                            checked={formData.belongsToCell === "No"}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">No</label>
                    </div>
                    {formData.belongsToCell === "Yes" && (
                    <div className="mt-3">
                        <label>Cell Leader's Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cellLeader"
                            value={formData.cellLeader}
                            onChange={handleChange}
                            placeholder="Enter Cell Leader's Name"
                        />
                    </div>
                )}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-4">
                    Submit Member
                </button>
            </form>
        </div>
    );
}
