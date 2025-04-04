import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CommonModal from "../CommonModal";

const ContactDetails = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowModal(true);
    setTimeout(() => {
      const modalTrigger = document.getElementById("modalTrigger");
      if (modalTrigger) modalTrigger.click();
    }, 100);
  };

  return (
    <>
      <div className="ContactDetails-parent">
        <div className="container-lg">
          <div className="col-lg-10 mx-auto">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="contact-left">
                  <h4>Contact Details :</h4>
                  <p>
                    Get in touch with us for any medical-related questions and
                    about our services.
                  </p>

                  <div className="contact-location">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                      <h5>Omega Hospital</h5>
                      <p>
                        CHR Lane, Rd Number 1, Seven Hills Colony, Gachibowli,
                        Hyderabad, Telangana 500032
                      </p>
                    </div>
                  </div>
                  <div className="contact-location">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                      <h5>Nallagandla Clinic</h5>
                      <p>
                        Plot 101/D, RISE Commercial Complex, 3rd Floor, Over Van
                        Lavino Cafe, opp. to Aparna Sarovar Grande, Nallagandla,
                        Telangana 500019
                      </p>
                    </div>
                  </div>
                  <div className="contact-location">
                    <i className="fa-solid fa-envelope"></i>
                    <div>
                      <h5>Email</h5>
                      <p>
                        <a href="mailto:jayiniclinics@gmail.com">
                          jayiniclinics@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-location">
                    <i className="fa-solid fa-phone"></i>
                    <div>
                      <h5>Book An Appointment</h5>
                      <p>
                        <a href="tel:+91-9137454545">+91 - 9137454545</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="calender-parent">
                  {/* <h4 className="text-center">Book Your Appointment</h4> */}
                  <div className="contact-location">
                    <div>
                    <div className="d-flex gap-2">
                        <i className="fa-solid fa-location-dot"></i>
                        <h5>Omega Hospital</h5>
                      </div>
                      <p>
                        CHR Lane, Rd Number 1, Seven Hills Colony, Gachibowli,
                        Hyderabad, Telangana 500032
                      </p>
             
                      <button><a target="_blank" href="https://www.omegahospitals.com/doctors/dr-jayini-p-rammohen">Book An Appointment</a> </button>
                    </div>
                  </div>
                  <div className="contact-location">
                    <div>
                      <div className="d-flex gap-2">
                        <i className="fa-solid fa-location-dot"></i>
                        <h5>Nallagandla Clinic</h5>
                      </div>
                      <p>
                        Plot 101/D, RISE Commercial Complex, 3rd Floor, Over Van
                        Lavino Cafe, Nallagandla,
                        Telangana 500019
                      </p>
                  
                      <button><a target="_blank" href="https://calendly.com/jayiniclinics/appointment?month=2025-03">Book An Appointment</a></button>
                    </div>
                  </div>
                  <div className="contact-location">
                    <div>
                      <div className="d-flex gap-2">
                        <i className="fa-solid fa-location-dot"></i>
                        <h5>Physiotherapy  - Nallagandla </h5>
                      </div>
                      <p>
                        Plot 101/D, RISE Commercial Complex, 3rd Floor, Over Van
                        Lavino Cafe ,Nallagandla,
                        Telangana 500019
                      </p>
                      <div className="d-flex gap-2 mt-2">
                        <i class="fa-solid fa-phone"></i>
                        <a className="text-dark" href="+919137464646">+91 - 9137464646</a>
                      </div>
                      <button><a target="_blank" href="https://calendly.com/jayiniphysio/consultation"> Book An Appointment</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        id="modalTrigger"
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      {showModal && <CommonModal selectedDate={selectedDate} />}
    </>
  );
};

export default ContactDetails;
