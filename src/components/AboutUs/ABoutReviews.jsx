import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import core styles and other Swiper styles
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination styles
import 'swiper/css/navigation'; // Navigation styles

// Import required Swiper modules
import { Pagination, Autoplay } from 'swiper/modules';

const ABoutReviews = () => {
    return (
        <div className='ABoutReviews-parent'>
                            <h2 className='text-center pb-5' style={{fontWeight:"700"}}>What Our Patients Say</h2>
            <div className="container">
               
                <div className="col-md-12 col-lg-9 mx-auto">
                    {/* Swiper Component */}
                    <Swiper
                        spaceBetween={30}    // Space between slides
                        slidesPerView={1}    // Number of slides to show at once
                        loop={true}          // Infinite loop
                        autoplay={{
                            delay: 3000,     
                            disableOnInteraction: false, 
                        }}
                        pagination={{
                            clickable: true,   // Enable clickable pagination
                        }}
                        modules={[Pagination, Autoplay]}
                        
                    >
                        {/* Slide 1 */} <br /><br />
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/about-review.png" alt="Review 1" />
                                            </div>
                                            <p>We have been Dr.Jayani's patient since past few years. He is excellent in his work of diagnosis as well as recommending treatment and medicine. Entire staff is equally good at the clinic. I would highly recommend anyone looking for orthopedic doctor as he is best at his work.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/about-review2.png" alt="Review 2" />
                                            </div>
                                            <p>Dr Jayani has been very helpful in the mine and my husband's journey of reliving the orthopedic pain. His treatments are accurate and very helpful.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/Artboard 4.png" alt="Review 2" />
                                            </div>
                                            <p>my in law sustained a leg fracture which happened back in July 1st week and i visited a clinic nearby my home and the orthopedician put a Plaster of Paris for him and after 45 days of removal he said my in law would require a surgery. Then I visited Dr. Jayini for his opinion and he checked my uncle and said he don't require a surgery and started him on partial weight bearing for two more weeks followed by now my in law is advised to start with out Walker and he is able to walk normally.
                                                And he is the real people's Doctor...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/Artboard 1.png" alt="Review 2" />
                                            </div>
                                            <p>The doctor is absolutely kind and patient and doesn’t scare you or make you spend more.am happy with my experience .and the administration is kind as well.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/profile (4).png" alt="Review 2" />
                                            </div>
                                            <p>My experience have been very good. I had pain in my knee and got it operated. The doctor suggested me good medication, injections and physiotherapy. Kudos to the experienced and cordial staff at the clinic ..
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/profile (3).png" alt="Review 2" />
                                            </div>
                                            <p>My mother has underwent 2 TKR surgeries on different knees over the last 2 years. Jayini Sir is excellent with his diagnosis and patience. He recommends surgery only as a last resort. Focus is more on self-healing and food diet including supplements to augment bone weaknesses. Certainly recommended.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/profile (2).png" alt="Review 2" />
                                            </div>
                                            <p>Dr Jayini is very good doctor, I already know him from the time he has done knee replacement of my mother-in-law which was successful and now she is happily enjoying her life without pain and pain killers.
                                            </p>
                                            <p>He will listen to all ur queries patiently and will explain each and everything in detail to understand the root cause of the problem. I think he is one of the best ortho doctor, I have ever visited. I would advise everyone for joint replacement surgery.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/profile (1).png" alt="Review 2" />
                                            </div>
                                            <p>I came to Dr. Jayini with torn ACL. He was cool and calm, examined me and suggested that I need to go for ACL reconstruction. It has been two months since my surgery and I am recovering very well. All thanks to Dr Jayini.
                                            </p>
                                            <p>Why I recommend him? - He very calm, friendly, his patience, listens to your problems very carefully and gives best medication and he helps you to gain confidence about your recovery.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ABoutReviews;
