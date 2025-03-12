import React, { useEffect, useState } from "react";

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const CommonModal = () => {
  const [formData, setFormData] = useState({
    address: "",
    date: formatDate(new Date()),
    time: "",
  });

  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    const modalElement = document.getElementById("exampleModal");
    
    if (modalElement) {
      const resetForm = () => setFormData({ address: "", date: formatDate(new Date()), time: "" });
      modalElement.addEventListener("hidden.bs.modal", resetForm);
      return () => modalElement.removeEventListener("hidden.bs.modal", resetForm);
    }
  }, []);

  const timingsByAddress = {
    Address1: ["10:00 am - 03:00 pm"],
    Address2: ["03:30 pm - 08:30 pm"],
  };

  const redirectionLinks = {
    Address1: "https://www.omegahospitals.com/doctors/dr-jayini-p-rammohen",
    Address2: "/",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, ...(name === "address" && { time: "" }) }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.address) newErrors.address = "Please select a location.";
    if (!formData.date) newErrors.date = "Please select a date.";
    if (!formData.time) newErrors.time = "Please select a time.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (formData.address) {
      window.open(redirectionLinks[formData.address], "_blank");
    }

    setTimeout(() => {
      document.querySelector('[data-bs-dismiss="modal"]')?.click();
      setFormData({ address: "", date: formatDate(new Date()), time: "" });
    }, 1000);
  };

  return (
    <div className="CommonModal-parent">
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header  text-white">
              <h5 className="modal-title" id="exampleModalLabel">Request An Appointment</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                
                {/* Location Selection */}
                <h5 className="mb-3">Choose Location</h5>
                <div className="row g-3">
                  {["Address1", "Address2"].map((addr, index) => (
                    <div className="col-md-6" key={addr}>
                      <div className={`card p-3 border ${formData.address === addr ? "border-primary" : ""}`}>
                        <div className="form-check">
                          <input 
                            type="radio" 
                            name="address" 
                            value={addr} 
                            className="form-check-input" 
                            checked={formData.address === addr} 
                            onChange={handleInputChange} 
                          />
                          <label className="form-check-label ms-2 fw-bold">{index === 0 ? "Omega Hospital" : "Nallagandla Clinic"}</label>
                        </div>
                        <p className="text-muted small mb-0">
                          {index === 0 ? "CHR lane, road number 1, seven hills colony, Gachibowli, Hyderabad, Telangana 500032." : "RISE commercial complex, 3rd floor, over van lavino cafe, opp. to Aparna sarovar grande, Nallagandla,Telangana 500019."}
                        </p>
                      </div>
                    </div>
                  ))}
                  {errors.address && <small className="text-danger">{errors.address}</small>}
                </div>

                {/* Date & Time Selection */}
                <div className="mt-4">
                  <p className="fw-bold">Please confirm your appointment details:</p>
                  <div className="row g-3">
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Date</label>
                      <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="form-control" />
                      {errors.date && <small className="text-danger">{errors.date}</small>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-bold">Time</label>
                      <select name="time" value={formData.time} onChange={handleInputChange} className="form-select">
                        <option value="">Select Time</option>
                        {formData.address && timingsByAddress[formData.address]?.map((timing) => (
                          <option key={timing} value={timing}>{timing}</option>
                        ))}
                      </select>
                      {errors.time && <small className="text-danger">{errors.time}</small>}
                    </div>

                  </div>
                </div>

                {/* Modal Footer */}
                <div className="modal-footer mt-4">
                  <button type="submit" className="btn btn-primary px-4">Request Appointment</button>
                  <button type="button" className="btn btn-secondary px-4" data-bs-dismiss="modal">Cancel</button>
                </div>
              
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
