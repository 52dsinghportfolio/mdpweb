
import './testimonial.css'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Swiper, SwiperSlide } from 'swiper/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Container } from 'react-bootstrap';

import clientimg1 from './../../../assets/images/client_user.jpg';
import Heading from '../heading';
import { Thumbs } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Testimonial() {
  return (
    <>
      <div>
        <section className="it_testimonail_block">
          <Container>
            <Heading headbg="Review" headtext="Our Testimonial" subheadtext="What our clients say about us" textAlign="text-center" />
            <div className="it-testimonail-info">
              <div className="slider client_feedback">
                <Swiper
                  navigation={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 600000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={30}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                    1200: { slidesPerView: 2 },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="it_testimonial_item">
                        <div className="it_message_item">
                          <div className="it_message_contant animatable moveUp">
                            <p>
                              <span>
                                <FontAwesomeIcon icon={faQuoteLeft} />
                              </span>
                              Excellent devlopment of my sites pages in affordable cost.All team members are very helpful and knolegble.  Thankyou So much.
                              <span>
                                <FontAwesomeIcon icon={faQuoteRight} />
                              </span>
                            </p>
                          </div>
                          <div className="it_userinfo_block">
                            <div className="it_imgbox animatable bounceInLeft">
                              <LazyLoadImage effect="blur" src={clientimg1} className="img-fluid" alt="review User" />
                            </div>
                            <h5 className="animatable bounceInRight">Arshad Jamil</h5>
                            <h6 className="animatable bounceInLeft"> 8 Month ago</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div>
                      <div className="it_testimonial_item">
                        <div className="it_message_item">
                          <div className="it_message_contant animatable moveUp">
                            <p>
                              <span>
                                <FontAwesomeIcon icon={faQuoteLeft} />
                              </span>
                              Excellent devlopment of my sites pages in affordable cost.All team members are very helpful and knolegble.  Thankyou So much.
                              <span>
                                <FontAwesomeIcon icon={faQuoteRight} />
                              </span>
                            </p>
                          </div>
                          <div className="it_userinfo_block">
                            <div className="it_imgbox animatable bounceInLeft">
                              <LazyLoadImage effect="blur" src={clientimg1} className="img-fluid" alt="review User" />
                            </div>
                            <h5 className="animatable bounceInRight">Arshad Jamil</h5>
                            <h6 className="animatable bounceInLeft"> 8 Month ago</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                  
                  <SwiperSlide>
                    <div>
                      <div className="it_testimonial_item">
                        <div className="it_message_item">
                          <div className="it_message_contant animatable moveUp">
                            <p>
                              <span>
                                <FontAwesomeIcon icon={faQuoteLeft} />
                              </span>
                              Excellent devlopment of my sites pages in affordable cost.All team members are very helpful and knolegble.  Thankyou So much.
                              <span>
                                <FontAwesomeIcon icon={faQuoteRight} />
                              </span>
                            </p>
                          </div>
                          <div className="it_userinfo_block">
                            <div className="it_imgbox animatable bounceInLeft">
                              <LazyLoadImage effect="blur" src={clientimg1} className="img-fluid" alt="review User" />
                            </div>
                            <h5 className="animatable bounceInRight">Arshad Jamil</h5>
                            <h6 className="animatable bounceInLeft"> 8 Month ago</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  
                  <SwiperSlide>
                    <div>
                      <div className="it_testimonial_item">
                        <div className="it_message_item">
                          <div className="it_message_contant animatable moveUp">
                            <p>
                              <span>
                                <FontAwesomeIcon icon={faQuoteLeft} />
                              </span>
                              Excellent devlopment of my sites pages in affordable cost.All team members are very helpful and knolegble.  Thankyou So much.
                              <span>
                                <FontAwesomeIcon icon={faQuoteRight} />
                              </span>
                            </p>
                          </div>
                          <div className="it_userinfo_block">
                            <div className="it_imgbox animatable bounceInLeft">
                              <LazyLoadImage effect="blur" src={clientimg1} className="img-fluid" alt="review User" />
                            </div>
                            <h5 className="animatable bounceInRight">Arshad Jamil</h5>
                            <h6 className="animatable bounceInLeft"> 8 Month ago</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  
                  <SwiperSlide>
                    <div>
                      <div className="it_testimonial_item">
                        <div className="it_message_item">
                          <div className="it_message_contant animatable moveUp">
                            <p>
                              <span>
                                <FontAwesomeIcon icon={faQuoteLeft} />
                              </span>
                              Excellent devlopment of my sites pages in affordable cost.All team members are very helpful and knolegble.  Thankyou So much.
                              <span>
                                <FontAwesomeIcon icon={faQuoteRight} />
                              </span>
                            </p>
                          </div>
                          <div className="it_userinfo_block">
                            <div className="it_imgbox animatable bounceInLeft">
                              <LazyLoadImage effect="blur" src={clientimg1} className="img-fluid" alt="review User" />
                            </div>
                            <h5 className="animatable bounceInRight">Arshad Jamil</h5>
                            <h6 className="animatable bounceInLeft"> 8 Month ago</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </Container>
        </section>

      </div>
    </>
  )
}

// export default Testimonial





