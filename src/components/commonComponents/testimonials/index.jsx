
import './testimonial.css'
// import React, { useState, useRef } from 'react';
import React, { useRef, useState, useEffect } from "react";

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

import { Container, Row, Col } from 'react-bootstrap';

import clientimg1 from './../../../assets/images/client_user.jpg';
import copmanyimg from './../../../assets/images/blog_1.jpg';


import Heading from '../heading';
import { Thumbs } from 'swiper/modules';


import { faStar as solidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const images = [clientimg1, clientimg1, clientimg1, clientimg1, clientimg1, clientimg1, clientimg1, clientimg1, clientimg1];
export default function Testimonials() {

  const [mainSlider, setMainSlider] = useState(null);
  const [thumbSlider, setThumbSlider] = useState(null);

  const mainRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    setMainSlider(mainRef.current);
    setThumbSlider(thumbRef.current);
  }, []);

  // 👉 Main Slider settings
  const mainSettings = {
    asNavFor: thumbSlider,
    ref: mainRef,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false, // Slide effect
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // 👉 Thumbnail settings
  const thumbSettings = {
    asNavFor: mainSlider,
    ref: thumbRef,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    vertical: true, // 👈 vertical mode 
    verticalSwiping: true, // 👈 importantautoplay: true,
    autoplaySpeed: 3000,

  };



  return (
    <>
      <div>
        <section className="it_testimonail_block it_testimonailnew_block">
          <Container>
            <Heading headbg="Review" headtext="Our Testimonial" subheadtext="What our clients say about us" textAlign="text-center" />
            <Row className='align-items-center'>
              <Col lg="4" md="12" sm="12">
                <div className='it_tetimonilal_company'>
                  <LazyLoadImage effect="blur" src={copmanyimg} className='img-fluid' alt='Company Image' />
                </div>
              </Col>
              <Col lg="6" md="12" sm="12">
                <div className="it-testimonail-info testimonail_shapes">
                  <div className="slider client_feedback">

                    <div style={{ maxWidth: "800px", margin: "auto" }}>
                      {/* 🔵 Main Slider */}
                      <Slider {...mainSettings}>
                        {images.map((img, index) => (
                          <div key={index}>



                            <div className="it_testimonial_item">
                              <div className="it_message_item">
                                <div className="it_message_contant animatable moveUp">
                                  <div className='it_ratingbox'>
                                    <FontAwesomeIcon icon={solidStar} />
                                    <FontAwesomeIcon icon={solidStar} />
                                    <FontAwesomeIcon icon={solidStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                    <FontAwesomeIcon icon={regularStar} />
                                  </div>
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
                                    <LazyLoadImage effect="blur"
                                      src={clientimg1}
                                      alt={`Slide ${index}`} />
                                  </div>
                                  <h5 className="animatable bounceInRight">Arshad Jamil</h5>
                                  <h6 className="animatable bounceInLeft"> 8 Month ago</h6>
                                </div>
                              </div>
                            </div>
                          </div>




                        ))}
                      </Slider>

                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="2" md="2" sm="12">
                <div className='it_thumbnil'>

                  {/* 🟢 Thumbnail Slider */}
                  <Slider {...thumbSettings} style={{ marginTop: "15px" }}>
                    {images.map((img, index) => (
                      <div key={index}>
                        <div className='it_userinfo_block'>
                          <div className='it_imgbox'>
                            <LazyLoadImage effect="blur"
                              src={img}
                              alt={`Thumb ${index}`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

// export default Testimonial





