import { useState } from "react";
import Back from "../components/Back";

export default function Settings() {

    const [users, setUsers] = useState([
        {
            id: 1,
            fullname: "System Administrator",
            username: "admin",
            role: "Admin"
        },
        {
            id: 2,
            fullname: "John Doe",
            username: "johndoe",
            role: "User"
        }
    ]);

    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        role: "User"
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        });
    };

    const createUser = () => {

        if (
            !formData.fullname ||
            !formData.username ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            alert("Please complete all fields.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const user = {
            id: Date.now(),
            fullname: formData.fullname,
            username: formData.username,
            role: formData.role
        };

        setUsers([...users, user]);

        setFormData({
            fullname: "",
            username: "",
            password: "",
            confirmPassword: "",
            role: "User"
        });

        const modal = window.bootstrap.Modal.getInstance(
            document.getElementById("newUserModal")
        );
        modal.hide();
    };

    const deleteUser = (id) => {
        if (!window.confirm("Delete this user?")) return;
        setUsers(users.filter(user => user.id !== id));

    };

    const updatePassword = () => {

        if (
            !passwordData.currentPassword ||
            !passwordData.newPassword ||
            !passwordData.confirmPassword
        ) {
            alert("Complete all password fields.");
            return;
        }

        if (
            passwordData.newPassword !==
            passwordData.confirmPassword
        ) {
            alert("Passwords do not match.");
            return;
        }

        alert("Password updated successfully.");

        setPasswordData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        });
    };

    return (
        <div className="settings-page px-2">
            <Back />

            <div className="page-title mb-4">
                <h3>Settings</h3>
                <p>Manage users and your account.</p>
            </div>

            {/* CHANGE PASSWORD */}

            <div className="settings-card">

                <h5 className="mb-3">
                    Change Password
                </h5>

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Current Password"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="New Password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Confirm New Password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                />

                <button
                    className="btn btn-primary"
                    onClick={updatePassword}
                >
                    Update Password
                </button>

            </div>

            {/* USERS */}

            <div className="settings-card">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>User Management</h5>

                    <button
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#newUserModal"
                    >
                        + New User
                    </button>
                </div>

                {
                    users.map(user => (
                        <div
                            className="user-card"
                            key={user.id}
                        >

                            <div>

                                <strong>
                                    {user.fullname}
                                </strong>
                                <br />

                                <small>
                                    {user.username}
                                </small>
                            </div>

                            <div>

                                <span className="badge bg-primary me-2">
                                    {user.role}
                                </span>

                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* CREATE USER MODAL */}

            <div
                className="modal fade"
                id="newUserModal"
                tabIndex="-1"
            >

                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">

                            <h5 className="modal-title">
                                Create User
                            </h5>

                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>

                        <div className="modal-body">

                            <input
                                className="form-control mb-3"
                                placeholder="Full Name"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />

                            <select
                                className="form-select mb-3"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option>User</option>
                                <option>Admin</option>
                            </select>

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                className="btn btn-primary"
                                onClick={createUser}
                            >
                                Create User
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}