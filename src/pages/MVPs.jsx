import React, { useState } from 'react';
import Back from "../components/Back";

const MVP = () => {
  const initialMvps = [
    {
      id: 1,
      name: "John Adebayo",
      address: "12 Church Street, Old Rd",
      lga: "Idemili North",
      phone: "08012345678",
      gender: "Male",
      maritalStatus: "Married",
      dob: "15-03",
      howDidYouHear: "Friend",
      enjoyedService: "The worship session was powerful",
      comeBack: "Yes",
      becomeMember: "Yes",
      prayerRequest: "Pray for my family and business",
      department: "Media",
      talkToMinister: "Yes",
      notes: "Very enthusiastic first timer"
    },
    {
      id: 2,
      name: "Sarah Okafor",
      address: "5 Umuasele Fegge, Onitsha",
      lga: "Awka South",
      phone: "09098765432",
      gender: "Female",
      maritalStatus: "Single",
      dob: "22-11",
      howDidYouHear: "Social Media",
      enjoyedService: "The message was very practical",
      comeBack: "Yes",
      becomeMember: "Maybe",
      prayerRequest: "Prayer for healing",
      department: "Youth",
      talkToMinister: "No",
      notes: ""
    }
  ];

  const [mvps, setMvps] = useState(initialMvps);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedMvp, setSelectedMvp] = useState(null);

  const [formData, setFormData] = useState({
    name: "", address: "", lga: "", phone: "", gender: "", maritalStatus: "",
    dob: "", howDidYouHear: "", enjoyedService: "", comeBack: "Yes",
    becomeMember: "No", prayerRequest: "", department: "", talkToMinister: "No", notes: ""
  });

  const lgas = ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Name and Phone are required!");
      return;
    }

    const newMvp = { id: Date.now(), ...formData };
    setMvps(prev => [newMvp, ...prev]);
    setShowAddModal(false);

    setFormData({
      name: "", address: "", lga: "", phone: "", gender: "", maritalStatus: "",
      dob: "", howDidYouHear: "", enjoyedService: "", comeBack: "Yes",
      becomeMember: "No", prayerRequest: "", department: "", talkToMinister: "No", notes: ""
    });
  };

  const openDetails = (mvp) => {
    setSelectedMvp(mvp);
    setShowDetailsModal(true);
  };

  return (
    <div className="container-fluid p-3 p-md-4">
      <Back />
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <h2 className="fw-bold text-primary mb-0">
          <i className="bi bi-people me-2"></i>MVP Management
        </h2>
        <button 
          className="btn btn-primary btn-lg w-100 w-md-auto"
          onClick={() => setShowAddModal(true)}
        >
          <i className="bi bi-plus-circle me-2"></i>Add New MVP
        </button>
      </div>

      {/* MVP Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th className="d-none d-md-table-cell">Address</th>
                  <th className="d-none d-lg-table-cell">LGA</th>
                  <th className="d-none d-md-table-cell">Gender</th>
                  <th>DOB</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {mvps.map(mvp => (
                  <tr key={mvp.id} className="cursor-pointer" onClick={() => openDetails(mvp)}>
                    <td className="fw-semibold">{mvp.name}</td>
                    <td>{mvp.phone}</td>
                    <td className="d-none d-md-table-cell text-muted">{mvp.address}</td>
                    <td className="d-none d-lg-table-cell">{mvp.lga}</td>
                    <td className="d-none d-md-table-cell">{mvp.gender}</td>
                    <td>{mvp.dob}</td>
                    <td className="text-center">
                      <button 
                        className="btn btn-sm btn-outline-primary"
                        onClick={(e) => { e.stopPropagation(); openDetails(mvp); }}
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add New MVP Modal */}
      <div className={`modal fade ${showAddModal ? 'show d-block' : ''}`} style={{ backgroundColor: showAddModal ? 'rgba(0,0,0,0.5)' : 'transparent' }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">New MVP Registration</h5>
              <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="modal-body" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                {/* Form fields remain the same as previous version */}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" name="name" required value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone <span className="text-danger">*</span></label>
                    <input type="tel" className="form-control" name="phone" required value={formData.phone} onChange={handleInputChange} />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value={formData.address} onChange={handleInputChange} />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">LGA</label>
                    <select className="form-select" name="lga" value={formData.lga} onChange={handleInputChange}>
                      <option value="">Select LGA</option>
                      {lgas.map(lga => <option key={lga} value={lga}>{lga}</option>)}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Gender</label>
                    <select className="form-select" name="gender" value={formData.gender} onChange={handleInputChange}>
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Marital Status</label>
                    <select className="form-select" name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange}>
                      <option value="">Select</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Date of Birth (DD-MM)</label>
                    <input type="text" className="form-control" name="dob" placeholder="15-03" value={formData.dob} onChange={handleInputChange} />
                  </div>

                  {/* Service Feedback Section - same as before */}
                  <div className="col-12 mt-4">
                    <h5 className="border-bottom pb-2">Service Feedback</h5>
                  </div>

                  <div className="col-12">
                    <label className="form-label">How did you hear about us?</label>
                    <input type="text" className="form-control" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleInputChange} />
                  </div>

                  <div className="col-12">
                    <label className="form-label">What did you enjoy about the service?</label>
                    <textarea className="form-control" rows="3" name="enjoyedService" value={formData.enjoyedService} onChange={handleInputChange}></textarea>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Would you like to come back?</label>
                    <select className="form-select" name="comeBack" value={formData.comeBack} onChange={handleInputChange}>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Maybe">Maybe</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Become a member?</label>
                    <select className="form-select" name="becomeMember" value={formData.becomeMember} onChange={handleInputChange}>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Maybe">Maybe</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Prayer Request</label>
                    <textarea className="form-control" rows="3" name="prayerRequest" value={formData.prayerRequest} onChange={handleInputChange}></textarea>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Preferred Department</label>
                    <select className="form-select" name="department" value={formData.department} onChange={handleInputChange}>
                      <option value="">Select Department</option>
                      <option value="Youth">Youth</option>
                      <option value="Media">Media</option>
                      <option value="Music">Music/Worship</option>
                      <option value="Prayer">Prayer</option>
                      <option value="Evangelism">Evangelism</option>
                      <option value="Children">Children</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Talk to Minister / Staff?</label>
                    <select className="form-select" name="talkToMinister" value={formData.talkToMinister} onChange={handleInputChange}>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Additional Notes</label>
                    <textarea className="form-control" rows="2" name="notes" value={formData.notes} onChange={handleInputChange}></textarea>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-check-circle me-2"></i>Save MVP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Details Modal - Same as previous version */}
      <div className={`modal fade ${showDetailsModal ? 'show d-block' : ''}`} style={{ backgroundColor: showDetailsModal ? 'rgba(0,0,0,0.5)' : 'transparent' }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">
                <i className="bi bi-person me-2"></i>{selectedMvp?.name}
              </h5>
              <button type="button" className="btn-close" onClick={() => setShowDetailsModal(false)}></button>
            </div>
            
            <div className="modal-body" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
              {selectedMvp && (
                <div className="row g-3">
                  <div className="col-6 col-md-4"><strong>Phone:</strong><br/>{selectedMvp.phone}</div>
                  <div className="col-6 col-md-4"><strong>Gender:</strong><br/>{selectedMvp.gender}</div>
                  <div className="col-12 col-md-4"><strong>DOB:</strong><br/>{selectedMvp.dob}</div>
                  
                  <div className="col-12"><strong>Address:</strong><br/>{selectedMvp.address}</div>
                  <div className="col-12"><strong>LGA:</strong><br/>{selectedMvp.lga}</div>

                  <hr className="my-3" />

                  <div className="col-12">
                    <h6 className="fw-bold">Service Experience</h6>
                    <p><strong>How they heard:</strong> {selectedMvp.howDidYouHear || '—'}</p>
                    <p><strong>Enjoyed:</strong> {selectedMvp.enjoyedService || '—'}</p>
                    <p><strong>Come back:</strong> {selectedMvp.comeBack}</p>
                    <p><strong>Become member:</strong> {selectedMvp.becomeMember}</p>
                  </div>

                  {selectedMvp.prayerRequest && (
                    <div className="col-12">
                      <h6 className="fw-bold">Prayer Request</h6>
                      <div className="alert alert-info">{selectedMvp.prayerRequest}</div>
                    </div>
                  )}

                  {selectedMvp.department && <div className="col-12"><strong>Department:</strong> {selectedMvp.department}</div>}
                  
                  {selectedMvp.talkToMinister === "Yes" && (
                    <div className="col-12 alert alert-warning">
                      Wants to speak with a minister or staff
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowDetailsModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVP;