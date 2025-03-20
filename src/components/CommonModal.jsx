import React, { useEffect, useState } from "react";

const CommonModal = () => {
  const [formData, setFormData] = useState({
    address: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const modalElement = document.getElementById("exampleModal");

    if (modalElement) {
      const resetForm = () => setFormData({ address: "" });
      modalElement.addEventListener("hidden.bs.modal", resetForm);
      return () => modalElement.removeEventListener("hidden.bs.modal", resetForm);
    }
  }, []);

  const redirectionLinks = {
    Address1: "https://www.omegahospitals.com/doctors/dr-jayini-p-rammohen",
    Address2: "https://calendly.com/jayiniclinics/appointment?month=2025-03",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.address) newErrors.address = "Please select a location.";
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
      setFormData({ address: "" });
    }, 1000);
  };

  return (
    <div className="CommonModal-parent">
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header text-white">
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
                          {index === 0 ? "CHR lane, road number 1, seven hills colony, Gachibowli, Hyderabad, Telangana 500032." : "RISE commercial complex, 3rd floor, over Van Lavino Cafe, Nallagandla,Telangana 500019."}
                        </p>
                      </div>
                    </div>
                  ))}
                  {errors.address && <small className="text-danger">{errors.address}</small>}
                </div>

                {/* Modal Footer */}
                <div className="modal-footer mt-4">
                  <button type="submit" className="btn btn-primary px-4">Request An Appointment</button>
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
