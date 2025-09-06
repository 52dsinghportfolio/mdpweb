import React from 'react';
import './whychoose.css';

// import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
// import joinbanner from './../../../assets/images/jointeam.png';
// import branchimg from './../../../assets/images/branch01.jpg';


import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../commonComponents/heading';


import { Swiper, SwiperSlide } from 'swiper/react';


import { EffectCards, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import excellenceicon from './../../../assets/images/excellenceicon.svg'
import impacticon from './../../../assets/images/impacticon.svg'
import sustainableicon from './../../../assets/images/sustainableicon.svg'


export function Whychoose() {
    return (
        <>
            <div>

                <section className='it_whychooseus_block'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_step_item'>
                                    <Heading headbg="Mission" headtext="Our Mission" subheadtext="Think globally, act locally" textAlign="text-left" />
                                    <p>
                                        To deliver on time, within budget, meeting quality standards, to build long term relationship with clients, business partners, suppliers and employees through integrity, transparency and trust.
                                    </p>
                                    <a href='#' className='it_submitbtn'>
                                        Explore More
                                        <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                    </a>
                                </div>
                            </Col>

                            <Col lg="1" md="1" sm="12"></Col>
                            <Col lg="5" md="5" sm="12">
                                <div className='it_step_itemimg'>
                                    {/* <LazyLoadImage effect="blur" src={excellenceicon} className='img-fluid' alt='Join team Banner' /> */}
                                    <Swiper
                                        effect={'cards'}
                                        grabCursor={true}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 200000,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[EffectCards, Autoplay]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className='it_whychooseus_items'>
                                                <div className='imgbox'>
                                                    {/* <FontAwesomeIcon icon={faUser} className='' /> */}
                                                    <LazyLoadImage effect="blur" src={excellenceicon} className='img-fluid' alt='Join team Banner' />
                                                </div>
                                                <div className='item_contants'>
                                                    <h4>
                                                        Excellence
                                                    </h4>
                                                    <p>
                                                        Deliver world-class built solutions with precision, innovation, and uncompromising quality.
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='it_whychooseus_items'>
                                                <div className='imgbox'>
                                                    {/* <FontAwesomeIcon icon={faUser} className='' /> */}
                                                    <LazyLoadImage effect="blur" src={impacticon} className='img-fluid' alt='Join team Banner' />
                                                </div>
                                                <div className='item_contants'>
                                                    <h4>
                                                        Impact
                                                    </h4>
                                                    <p>
                                                        Contribute to society's development through impactful built environments.
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='it_whychooseus_items'>
                                                <div className='imgbox'>
                                                    {/* <FontAwesomeIcon icon={faUser} className='' /> */}
                                                    <LazyLoadImage effect="blur" src={sustainableicon} className='img-fluid' alt='Join team Banner' />
                                                </div>
                                                <div className='item_contants'>
                                                    <h4>
                                                        Sustainability
                                                    </h4>
                                                    <p>
                                                        Promote sustainable practices that protect our planet for future generations.
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>


                                        <SwiperSlide>
                                            <div className='it_whychooseus_items'>
                                                <div className='imgbox'>
                                                    {/* <FontAwesomeIcon icon={faUser} className='' /> */}
                                                    <LazyLoadImage effect="blur" src={excellenceicon} className='img-fluid' alt='Join team Banner' />
                                                </div>
                                                <div className='item_contants'>
                                                    <h4>
                                                        Excellence
                                                    </h4>
                                                    <p>
                                                        Deliver world-class built solutions with precision, innovation, and uncompromising quality.
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='it_whychooseus_items'>
                                                <div className='imgbox'>
                                                    {/* <FontAwesomeIcon icon={faUser} className='' /> */}
                                                    <LazyLoadImage effect="blur" src={impacticon} className='img-fluid' alt='Join team Banner' />
                                                </div>
                                                <div className='item_contants'>
                                                    <h4>
                                                        Impact
                                                    </h4>
                                                    <p>
                                                        Contribute to society's development through impactful built environments.
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='it_whychooseus_items'>
                                                <div className='imgbox'>
                                                    {/* <FontAwesomeIcon icon={faUser} className='' /> */}
                                                    <LazyLoadImage effect="blur" src={sustainableicon} className='img-fluid' alt='Join team Banner' />
                                                </div>
                                                <div className='item_contants'>
                                                    <h4>
                                                        Sustainability
                                                    </h4>
                                                    <p>
                                                        Promote sustainable practices that protect our planet for future generations.
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


            </div>
        </>
    )
}


 
import usersicons from './../../../assets/images/usersicon.svg'
import innovationicon from './../../../assets/images/innovationicon.svg'
import timely from './../../../assets/images/timely.svg' 
import Sustainabilityicon from './../../../assets/images/Sustainabilityicon.svg' 
import unityicon from './../../../assets/images/unityicon.svg'
import safetyicon from './../../../assets/images/safetyicon.svg'
import trusticon from './../../../assets/images/trusticon.svg'


export function Civilcorevalue() {
    return (
        <>
            <div>

                <section className='it_ourcorevalue_block'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_ourcorevalue_info'>
                                    <Heading headbg="Values" headtext="Vision & Core values" subheadtext="Delivering innovative, sustainable, and quality driven works" textAlign="text-left" />
                                    <p>
                                        To be recognized as trusted Infrastructure, Construction and IT Services Partner, delivering innovative, sustainable, and quality driven works and IT Services across India & abroad.
                                    </p>
                                    <p>
                                        Our commitment to excellence is deeply reflected in our core values "CI-TRUST" = Energy + Trust: Client Focus, Innovation, Timely Delivery, Responsibility & Sustainability, Unity, Safety First and Trust & Integrity.
                                    </p>
                                </div>

                            </Col>

                            <Col lg="1" md="1" sm="12"></Col>
                            <Col lg="5" md="5" sm="12">
                                <div className='it_step_itemimg'>
                                    {/* <LazyLoadImage effect="blur" src={excellenceicon} className='img-fluid' alt='Join team Banner' /> */}
                                    <Swiper
                                        effect={'cards'}
                                        grabCursor={true}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 10000,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[EffectCards, Autoplay]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className='it_core_items'>
                                                <span className='it_iconbox'>
                                                    <img src={usersicons} className='img-fluid' alt='user icon' />
                                                </span>
                                                <h4>
                                                    Client Focus
                                                </h4>
                                                <p>
                                                    Prioritizing needs and exceeding expectations
                                                </p>
                                                <p>
                                                    We put our clients at the center of everything, delivering tailored solutions that exceed expectations.
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='it_core_items'>
                                                <span className='it_iconbox'>
                                                    <img src={innovationicon} className='img-fluid' alt='user icon' />
                                                </span>
                                                <h4>
                                                    Innovation  
                                                </h4>
                                                <p>
                                                    Prioritizing needs and exceeding expectations
                                                </p>
                                                <p>
                                                    We put our clients at the center of everything, delivering tailored solutions that exceed expectations.
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='it_core_items'>
                                                <span className='it_iconbox'>
                                                    <img src={timely} className='img-fluid' alt='user icon' /> 
                                                </span>
                                                <h4>
                                                    Timely Delivery
                                                </h4>
                                                <p>
                                                    Delivering projects efficiently and on schedule.
                                                </p>
                                                <p>
                                                    We are dedicated to completing projects within agreed timelines, ensuring client satisfaction and operational efficiency.
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='it_core_items'>
                                                <span className='it_iconbox'>
                                                    <img src={Sustainabilityicon} className='img-fluid' alt='user icon' />
                                                </span>
                                                <h4>
                                                    Responsibility & Sustainability
                                                </h4>
                                                <p>
                                                    Committing to ethical practices and environmental stewardship.
                                                </p>
                                                <p>
                                                    We prioritize responsible business conduct and eco-friendly approaches, ensuring our projects contribute positively to society and minimize environmental impact.
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='it_core_items'>
                                                <span className='it_iconbox'> 
                                                    <img src={unityicon} className='img-fluid' alt='user icon' /> 
                                                </span>
                                                <h4>
                                                    Unity
                                                </h4>
                                                <p>
                                                    Fostering collaboration and collective success.
                                                </p>
                                                <p>
                                                    We believe in the power of unified effort and teamwork, working hand-in-hand to achieve shared goals and deliver exceptional results.
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='it_core_items'>
                                                <span className='it_iconbox'>
                                                    <img src={safetyicon} className='img-fluid' alt='user icon' /> 
                                                </span>
                                                <h4>
                                                    Safety First
                                                </h4>
                                                <p>
                                                    Ensuring a secure environment for all.
                                                </p>
                                                <p>
                                                    The well-being of our team and stakeholders is paramount; we adhere to the highest safety standards on every project.
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className='it_core_items'>
                                                <span className='it_iconbox'>
                                                    <img src={trusticon} className='img-fluid' alt='user icon' />
                                                </span>
                                                <h4>
                                                    Trust & Integrity
                                                </h4>
                                                <p>
                                                    Upholding the highest ethical standards with transparency.
                                                </p>
                                                <p>
                                                    We ensure transparency and honesty in every decision, building long-term trust with clients and partners.

                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>













            </div >
        </>
    )
}
export default Whychoose