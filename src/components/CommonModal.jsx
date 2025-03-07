import React, { useEffect, useState } from "react";

// Utility function to format the date
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const CommonModal = ({ selectedDate }) => {
  const [formData, setFormData] = useState({
    address: "",
    date: formatDate(new Date()),
    time: "",
    name: "",
    phonenumber: "",
    email: "",
  });

  useEffect(() => {
    if (selectedDate) {
      setFormData((prev) => ({ ...prev, date: formatDate(selectedDate) }));
    }
  }, [selectedDate]);

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const timingsByAddress = {
    Address1: ["10:00 am - 03:00 pm"],
    Address2: ["03:30 pm - 08:30 pm"],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      const updatedData = { ...prevFormData, [name]: value };

      if (name === "address") {
        updatedData.time = "";
      }

      return updatedData;
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.address.trim()) errors.address = "Select any one Address";
    if (!formData.time.trim()) errors.time = "Select any one time";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.phonenumber.trim())
      errors.phonenumber = "Phone number is required";
    if (!/^\d{10}$/.test(formData.phonenumber))
      errors.phonenumber = "Phone number is invalid";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length > 0) {
      return; // Stop form submission if there are validation errors
    }
  
    setIsLoading(true);
  
    // Define redirection links
    const redirectionLinks = {
      Address1: "https://www.omegahospitals.com/doctors/dr-jayini-p-rammohen",
      Address2: "https://your-nallagandla-clinic-link.com",
    };
  
    // Navigate to the respective link
    if (formData.address && redirectionLinks[formData.address]) {
      window.location.href = redirectionLinks[formData.address];
    }
  };
  

  return (
    <div className="CommonModal-parent">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content" style={{ width: "100%" }}>
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Request An Appointment
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <h5>Choose Location</h5>
                <div className="modal-locations">
                  <div className="contact-location">
                    <div className="d-flex">
                      <input
                        type="radio"
                        name="address"
                        id="address"
                        onChange={handleInputChange}
                        value="Address1"
                      />
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h5>Omega Hospital</h5>
                      <p>CHR Lane, Rd Number 1, Seven Hills Colony, Gachibowli, Hyderabad, Telangana 500032</p>
                    </div>
                  </div>
                  <div className="contact-location">
                    <div className="d-flex">
                      <input
                        type="radio"
                        name="address"
                        id="address"
                        onChange={handleInputChange}
                        value="Address2"
                      />
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h5>Nallagandla Clinic</h5>
                      <p>
                        RISE Commercial Complex, 3rd Floor, Over Van Lavino
                        Cafe, Opp. to APARNA SAROVAR GRANDE,
                        Nallagandla,Telangana 500019.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal-body-div2">
                  <p className="time-heading">
                    Please confirm that you would like to request the following
                    appointment:
                  </p>
                  <div className="modal-body-div2-sub">
                    <div className="modal-timings">
                      <label htmlFor="Date">Date</label>
                      <br />
                      <input
                        type="date"
                        name="date"
                        onChange={handleInputChange}
                        value={formData.date}
                        id=""
                      />
                    </div>
                    <div className="modal-timings">
                      <label htmlFor="Time">Time</label>
                      <br />
                      <select
                        name="time"
                        onChange={handleInputChange}
                        value={formData.time}
                        id="time"
                      >
                        <option value="">Select Time</option>
                        {formData.address &&
                          timingsByAddress[formData.address]?.map((timing) => (
                            <option key={timing} value={timing}>
                              {timing}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-body-div2">
                  <p className="time-heading">Your Information:</p>
                  <p className="time-heading">
                    Please enter your name and email address:
                  </p>
                  <div className="modal-body-div2-sub">
                    <div className="modal-timings">
                      <label htmlFor="Name">Name</label>
                      <br />
                      <input
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                        value={formData?.name || ""}
                        id=""
                      />
                      {errors.name && (
                        <p className="error text-danger">{errors.name}</p>
                      )}
                    </div>
                    <div className="modal-timings">
                      <label htmlFor="Contact">Contact</label>
                      <br />
                      <input
                        type="text"
                        name="phonenumber"
                        onChange={handleInputChange}
                        value={formData?.phonenumber || ""}
                        id=""
                      />
                      {errors.phonenumber && (
                        <p className="error text-danger">
                          {errors.phonenumber}
                        </p>
                      )}
                    </div>
                    <div className="modal-timings mt-2">
                      <label htmlFor="Email ID">Email ID</label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        value={formData?.email || ""}
                        id=""
                      />
                      {errors.email && (
                        <p className="error text-danger">{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="submit"
                    name="submit"
                    disabled={isLoading}
                    className={isLoading ? "loading" : ""}
                  >
                    {isLoading
                      ? "Submitting please wait..."
                      : "Request Appointment"}
                  </button>
                  <button type="button" data-bs-dismiss="modal" >
                    Cancel
                  </button>
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
