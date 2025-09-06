

import React, { useEffect } from 'react';
import './ourprojects.css';
import Heading from '../../commonComponents/heading';

import { Container, Row, Col } from 'react-bootstrap';
import serviceImg1 from './../../../assets/images/service-icon1.svg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDotCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import blog_1 from './../../../assets/images/blog_1.jpg'
import blog_2 from './../../../assets/images/blog_2.jpg'
import blog_3 from './../../../assets/images/blog_1.jpg'




export default function Ourprojects() {

    return (
        <>
            <div>


                <section className="it_ourprojestinfo_block">
                    <Heading headbg="Portfolio" headtext="Our Latest project" subheadtext="Continuing Our Legacy of Quality and Innovation" textAlign="text-center" />
                    <Container>
                        {/* <Row className="row align-items-center">
                            <Col lg="4" md="4" sm="12"> </Col> */}
                        <Swiper
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 500000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={20}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                480: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1200: { slidesPerView: 3 },
                            }}
                        >
                            <SwiperSlide>
                                <div className="it_ourprojest_item"> <div className="it_ourprojest_inner">
                                    <div className="it_imgbox_main">
                                        <div className='imgbox' style={{ background: `url(${blog_1})` }}>
                                        </div>
                                        <div className='hover_imgbox' style={{ background: `url(${blog_1})` }}>
                                        </div>
                                    </div>
                                    <div className="it_contnetsinfo">
                                        <ul><li>Technology</li><li> <FontAwesomeIcon icon={faCircle} /> </li><li>12 January, 2025</li></ul>
                                        <h4> Planning your online business goals with a specialist</h4>
                                        <p>
                                            Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible
                                        </p>
                                        <p>
                                            <a href='#' className='it_readmore'>
                                                Read More
                                                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                            </a>
                                        </p>
                                    </div>
                                </div></div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="it_ourprojest_item"> <div className="it_ourprojest_inner">
                                    <div className="it_imgbox_main">
                                        <div className='imgbox' style={{ background: `url(${blog_2})` }}>
                                        </div>
                                        <div className='hover_imgbox' style={{ background: `url(${blog_2})` }}>
                                        </div>
                                    </div>
                                    <div className="it_contnetsinfo">
                                        <ul><li>Technology</li><li> <FontAwesomeIcon icon={faCircle} /> </li><li>12 January, 2025</li></ul>
                                        <h4> Planning your online business goals with a specialist</h4>
                                        <p>
                                            Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible
                                        </p>
                                        <p>
                                            <a href='#' className='it_readmore'>
                                                Read More
                                                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                            </a>
                                        </p>
                                    </div>
                                </div></div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="it_ourprojest_item"> <div className="it_ourprojest_inner">
                                    <div className="it_imgbox_main">
                                        <div className='imgbox' style={{ background: `url(${blog_3})` }}>
                                        </div>
                                        <div className='hover_imgbox' style={{ background: `url(${blog_3})` }}>
                                        </div>
                                    </div>
                                    <div className="it_contnetsinfo">
                                        <ul><li>Technology</li><li> <FontAwesomeIcon icon={faCircle} /> </li><li>12 January, 2025</li></ul>
                                        <h4> Planning your online business goals with a specialist</h4>
                                        <p>
                                            Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible
                                        </p>
                                        <p>
                                            <a href='#' className='it_readmore'>
                                                Read More
                                                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                            </a>
                                        </p>
                                    </div>
                                </div></div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="it_ourprojest_item"> <div className="it_ourprojest_inner">
                                    <div className="it_imgbox_main">
                                        <div className='imgbox' style={{ background: `url(${blog_1})` }}>
                                        </div>
                                        <div className='hover_imgbox' style={{ background: `url(${blog_1})` }}>
                                        </div>
                                    </div>
                                    <div className="it_contnetsinfo">
                                        <ul><li>Technology</li><li> <FontAwesomeIcon icon={faCircle} /> </li><li>12 January, 2025</li></ul>
                                        <h4> Planning your online business goals with a specialist</h4>
                                        <p>
                                            Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible
                                        </p>
                                        <p>
                                            <a href='#' className='it_readmore'>
                                                Read More
                                                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                            </a>
                                        </p>
                                    </div>
                                </div></div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="it_ourprojest_item"> <div className="it_ourprojest_inner">
                                    <div className="it_imgbox_main">
                                        <div className='imgbox' style={{ background: `url(${blog_2})` }}>
                                        </div>
                                        <div className='hover_imgbox' style={{ background: `url(${blog_2})` }}>
                                        </div>
                                    </div>
                                    <div className="it_contnetsinfo">
                                        <ul><li>Technology</li><li> <FontAwesomeIcon icon={faCircle} /> </li><li>12 January, 2025</li></ul>
                                        <h4> Planning your online business goals with a specialist</h4>
                                        <p>
                                            Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible
                                        </p>
                                        <p>
                                            <a href='#' className='it_readmore'>
                                                Read More
                                                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                            </a>
                                        </p>
                                    </div>
                                </div></div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="it_ourprojest_item"> <div className="it_ourprojest_inner">
                                    <div className="it_imgbox_main">
                                        <div className='imgbox' style={{ background: `url(${blog_3})` }}>
                                        </div>
                                        <div className='hover_imgbox' style={{ background: `url(${blog_3})` }}>
                                        </div>
                                    </div>
                                    <div className="it_contnetsinfo">
                                        <ul><li>Technology</li><li> <FontAwesomeIcon icon={faCircle} /> </li><li>12 January, 2025</li></ul>
                                        <h4> Planning your online business goals with a specialist</h4>
                                        <p>
                                            Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible
                                        </p>
                                        <p>
                                            <a href='#' className='it_readmore'>
                                                Read More
                                                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                            </a>
                                        </p>
                                    </div>
                                </div></div>
                            </SwiperSlide>


                        </Swiper>


                    </Container>
                </section >




            </div >
        </>
    )
}






