import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Reviews = () => {
  return (
    <>
      <div className="Reviews-parent">
        <div className="Reviews-sub-parent">
          <div className="container-lg">
            <div className="row p-0 m-0 text-white align-items-center">
              {/* Swiper Applied to Review Section */}
              <div className="col-md-10">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true} 
                  
                >
                  <SwiperSlide>
                    <div className="review-content">
                      <div>
                        <div className="d-flex justify-content-center">
                          <img src="/assets/images/about-review.png" alt="" />
                        </div>
                      </div>
                      <div className="review-text">
                        <p>
                        Dr. Jayini P Rammohen was fantastic with my knee pain.
                      They listened carefully, explained my treatment options
                      clearly, and the recommended medication has already made a
                      huge difference! I’m so happy to be back to my daily
                      routine with less pain. Highly recommended.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="review-content">
                      <div>
                        <div className="d-flex justify-content-center">
                          <img src="/assets/images/profile (2).png" alt="" />
                        </div>
                      </div>
                      <div className="review-text">
                        <p>
                        We have been Dr.Jayani's patient since past few years. He is excellent in his work of diagnosis as well as recommending treatment and medicine. Entire staff is equally good at the clinic. I would highly recommend anyone looking for orthopedic doctor as he is best at his work.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="review-content">
                      <div>
                        <div className="d-flex justify-content-center">
                          <img src="/assets/images/about-review2.png" alt="" />
                        </div>
                      </div>
                      <div className="review-text">
                        <p>
                        Dr Jayani has been very helpful in the mine and my husband's journey of reliving the orthopedic pain. His treatments are accurate and very helpful.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="review-content">
                      <div>
                        <div className="d-flex justify-content-center">
                          <img src="/assets/images/Artboard 4.png" alt="" />
                        </div>
                      </div>
                      <div className="review-text">
                        <p>
                        The doctor is absolutely kind and patient and doesn’t scare you or make you spend more.am happy with my experience .and the administration is kind as well.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>




                  <SwiperSlide>
                    <div className="review-content">
                      <div>
                        <div className="d-flex justify-content-center">
                          <img src="/assets/images/profile (5).png" alt="" />
                        </div>
                      </div>
                      <div className="review-text">
                        <p>
                        My experience have been very good. I had pain in my knee and got it operated. The doctor suggested me good medication, injections and physiotherapy. Kudos to the experienced and cordial staff at the clinic .
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="review-content">
                      <div>
                        <div className="d-flex justify-content-center">
                          <img src="/assets/images/profile (4).png" alt="" />
                        </div>
                      </div>
                      <div className="review-text">
                        <p>
                        My mother has underwent 2 TKR surgeries on different knees over the last 2 years. Jayini Sir is excellent with his diagnosis and patience. He recommends surgery only as a last resort. Focus is more on self-healing and food diet including supplements to augment bone weaknesses. Certainly recommended.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
               
                </Swiper>
              </div>
              <div className="col-md-2 text-center">
                <div className="google-image">
                  <a target="_blank" href="https://g.co/kgs/NGcUuS8">
                    <img src="/assets/images/google.png" alt="" />
                  </a>
                </div>
                <h3 className="text-success">1000+</h3>
                <div className="rating-stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
