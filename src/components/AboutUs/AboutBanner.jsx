import React, { useEffect } from 'react'
import CommonBanner from '../CommonBanner'
import { Link } from 'react-router-dom'

const AboutBanner = () => {
    useEffect(() => {
        // Check if there's an anchor link (e.g., #aboutYashwanth)
        if (window.location.hash) {
            // Use a timeout to ensure the page is loaded before scrolling
            setTimeout(() => {
                const element = document.querySelector(window.location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element
                }
            }, 0);
        }
    }, []); // Empty dependency array to run only once when the component is mounted

    return ( 
        <>
            <CommonBanner title={"About Us"} text={"About Us"}/>
            <div className='about-content-parent'>
                <div className='about-abs-image'>
                    <img src="/assets/images/Frame-about.png" alt="" />
                </div>
                <div className='about-content-sub'>
                    <div className="container-lg">
                        <div className="row p-0 m-0 align-items-center">
                            <div className="col-md-6">
                                <div className='about-mainimage'>
                                    <img src="/assets/images/Group 47652.png" alt="" />
                                    <div className='about-doctor-text'>
                                        <h5>Dr Jayini P Rammohen</h5>
                                        <small>One of the Best Orthopedic Doctors In Hyderabad</small>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6"  >
                                <div className='about-main-content'>
                                    <p><b>About</b> </p>
                                    <h4 className='text-success'>Dr Jayini P Rammohen </h4>
                                    <p>Jayini P Rammohen is a leading and reputed Orthopedician and Joint Replacement Surgeon. He has 23+ years of experience.</p>
                                    <br />
                                    <p>His expertise includes Knee Replacement, Hip Replacement, Reverse Shoulder Arthroplasty, Acl Reconstruction, cruciate ligament reconstruction, frozen shoulder treatment, sports injury treatment/rehabilitation, primary hip & knee arthroplasty, soft tissue injury management, revision hip & knee arthroplasty, articular degenerative disease treatment, Achilles tendon rupture treatment, pain management/counselling, etc.</p>

                                    <button className='bgn btn-success  mt-3  commonButton'><Link className='text-white' to="/JayiniRammohen">Read More</Link></button>

                                    <div className='about-buttons'  id='aboutYashwanth'>
                                        <button><Link to='/contact-us'>Book An Appointment</Link></button>
                                        <button> <i class="fa-solid fa-phone me-2"></i> <a href="tel:9137454545">9137 45 45 45</a></button>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-content-parent mt-5'>
                <div className='about-abs-image'>
                    <img src="/assets/images/Frame-about.png" alt="" />
                </div>
                <div className='about-content-sub'>
                    <div className="container-lg">
                    <div className="row p-0 m-0 align-items-center justify-content-center">
                          
                            <div className="col-md-5">
                                <div className='yashwanthPokala my-5'>
                                    <p><b>About</b> </p>
                                    <h4 className='text-success'><b>Dr Yashwanth Pokala</b></h4>
                                    <p>Yashwanth Pokala is an experienced Physiotherapist and Ergonomist with over 10 years of experience. </p>
                                    <br />
                                    <p>His expertise includes sports injury rehabilitation, post-operative recovery, shoulder rotator cuff injuries, knee ligament & meniscus tears, slipped disc management, ergonomics, vertigo management, stroke rehabilitation, dry needling, cupping, and strength conditioning.</p>

                                    <button className='bgn btn-success  mt-3  commonButton'><Link className='text-white' to="/yasnwanth-pokala">Read More</Link></button>

                                    <div className='about-buttons'>
                                        <button><Link to='/contact-us'>Book An Appointment</Link></button>
                                        <button> <i class="fa-solid fa-phone me-2"></i> <a href="tel:9137464646">9137 46 46 46</a></button>
                                    </div>

                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className='about-mainimage'>
                                    <img src="/assets/images/yashwanthPokala.jpg" alt="" />
                                    <div className='about-doctor-text'>
                                        <h5>Dr Yashwanth Pokala</h5>
                                        <small>Head of Physiotherapy
                                        </small>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBanner