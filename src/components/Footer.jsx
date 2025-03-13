import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-parent text-black">
        <div className="footer-sub-parent">
          <div className="footer-abs-image">
            <img src="/assets/images/Frame (1).png" alt="" />
            <img src="/assets/images/Frame.png" alt="" />
          </div>
          <div className="col-lg-12 mx-auto">
            <div className="row m-0">
              <div className="col-md-6 col-lg-3">
                <div className="footer-links QuickLinksParent">
                  <h5 className="hideMobile">About Us</h5>
                  <Link to="/" data-discover="true" contenteditable="false" style={{cursor:"pointer"}}>
                    <div class="navbar-logo">
                      <img src="/assets/images/jayanilogo.jpg" alt="" />
                    </div>
                  </Link>
                  <p>Leading provider of orthopedic care and advanced physiotherapy, delivering expert treatment with cutting-edge technology.</p>
                </div>
              </div>


              <div className="col-md-6 col-lg-3">
                <div className="footer-links">
                  <h5>Our Services</h5>
                  <ul>
                    <li>
                      <a href="#">Regenerative Orthopaedics</a>
                    </li>
                    <li>
                      <a href="#">PRP/Growth Factor treatment</a>
                    </li>
                    <li>
                      <a href="#">Robotic Joint Replacement</a>
                    </li>
                    <li>
                      <a href="#"> Joint Replacement</a>
                    </li>
                    <li>
                      <a href="#">Sports Medicine</a>
                    </li>
                    <li>
                      <a href="#"> General Orthopaedics</a>
                    </li>
                    <li>
                      <a href="#">Advanced Physiotherapy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-content1">
                  <h5>Omega Hospital :</h5>
                  <div className="footer-address">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                      <p className="mb-2">Address :</p>
                      <p>
                      CHR lane, road number 1, seven hills colony, Gachibowli, Hyderabad, Telangana 500032.
                      </p>
                    </div>
                  </div>
                  <div className="footer-address py-2">
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:+919362454545">+919362454545</a>
                  </div>
                  <div className="footer-address ">
                      <i class="fa-solid fa-envelope"></i>
                      <a href="mailto:jayiniclinics@gmail.com">
                        jayiniclinics@gmail.com
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
              <div className="footer-content1 nallgandlaClinic">
                  <h5>Nallagandla Clinic :</h5>
                  <div className="footer-address">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                      <p className="mb-2">Address :</p>
                      <p>
                      RISE commercial complex, 3rd floor, over van lavino
                        cafe, opp. to Aparna sarovar grande,
                        Nallagandla,Telangana 500019.
                      </p>
                    </div>
                  </div>
                  <div className="footer-address py-2">
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:+919137454545">+919137454545</a>
                  </div>
                  <div className="footer-address ">
                      <i class="fa-solid fa-envelope"></i>
                      <a href="mailto:jayiniclinics@gmail.com">
                        jayiniclinics@gmail.com
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <img src="/assets/images/footer-bg-last.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
