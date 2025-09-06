

import React, { useEffect } from 'react';
import './ourachivments.css'; 

import { Container, Row, Col } from 'react-bootstrap';
import achive_img1 from './../../../assets/images/ourachivement_img1.svg';
import achive_img2 from './../../../assets/images/ourachivement_img2.svg'; 
import achive_img3 from './../../../assets/images/ourachivement_img3.svg'; 
import achive_img4 from './../../../assets/images/ourachivement_img4.svg'; 


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Heading from '../../commonComponents/heading';

import { LazyLoadImage } from 'react-lazy-load-image-component';



export function Ourachivments() {
    return (
        <>
            <div>
                <section className="it_ourachivement_block">
                    <div className="it_ourachivement_info">
                        <Container>
                            <Row className="row align-items-center">
                                <Col lg="6" md="12" sm="12">         
                                    <Heading headbg="Company" headtext="Our Achievements" subheadtext="Industrial Strength, Global Impact" textAlign="text-left" /> 
                                    <p>
                                        With a foundation built on industrial strength and a vision for global impact, we have successfully delivered projects across diverse sectors. Our achievements reflect consistent innovation, quality, and client satisfaction. From large-scale infrastructure developments to specialized industry solutions, every milestone showcases our commitment to excellence and sustainable growth.
                                    </p>
                                    <div className="form-group text-left">  
                                        <a href='#' className='it_submitbtn'>
                                                View all services
                                            <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                        </a>  
                                    </div>
                                </Col>
                                <Col lg="6" md="12" sm="12">
                                    <div className="it_ourachivement_list">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img1} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                            4k <span className="it_plus">+</span>
                                                        </span>
                                                        Projects Complete
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img2} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                             100   <span className="it_plus">+</span>
                                                        </span>
                                                       Certified Engineers
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img3} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                            100 <span className="it_plus">+</span>
                                                        </span>
                                                         Active Clients
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img4} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                            5k <span className="it_plus">+</span>
                                                        </span>
                                                        Winning Awards
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>

           </div>
        </>
    )
}



export function Civilchivments() {
    return (
        <>
            <div>
                <section className="it_ourachivement_block">
                    <div className="it_ourachivement_info">
                        <Container>
                            <Row className="row align-items-center">
                                <Col lg="6" md="6" sm="12">         
                                    <Heading headbg="Civil" headtext="Our Civil Achievements" subheadtext="Budget, meeting quality standards" textAlign="text-left" /> 
                                    <p>
                                        To deliver on time, within budget, meeting quality standards, to build long term relationship with clients, business partners, suppliers and employees
                                    </p>
                                    {/* <div className="form-group text-left">  
                                        <a href='#' className='it_submitbtn'>
                                                View all services
                                            <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                        </a>  
                                    </div> */}
                                </Col>
                                <Col lg="6" md="6" sm="12">
                                    <div className="it_ourachivement_list">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img1} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                            100 <span className="it_plus">+</span>
                                                        </span>
                                                        Projects Complete
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img2} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                             100   <span className="it_plus">+</span>
                                                        </span>
                                                       Satisfied customers
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img3} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                            22 <span className="it_plus">+</span>
                                                        </span>
                                                         Years of experience
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img4} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                            50 <span className="it_plus">+</span>
                                                        </span>
                                                        Winning Awards
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>

           </div>
        </>
    )
}
 

export function Eletricalachivments() {
    return (
        <>
            <div>
                <section className="it_ourachivement_block">
                    <div className="it_ourachivement_info">
                        <Container>
                            <Row className="row align-items-center">
                                <Col lg="6" md="6" sm="12">         
                                    <Heading headbg="Eletrical" headtext="Our Eletrical Achievements" subheadtext="Budget, meeting quality standards" textAlign="text-left" /> 
                                    <p>
                                        To deliver on time, within budget, meeting quality standards, to build long term relationship with clients, business partners, suppliers and employees
                                    </p>
                                    {/* <div className="form-group text-left">  
                                        <a href='#' className='it_submitbtn'>
                                                View all services
                                            <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                        </a>  
                                    </div> */}
                                </Col>
                                <Col lg="6" md="6" sm="12">
                                    <div className="it_ourachivement_list">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img1} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                            4k <span className="it_plus">+</span>
                                                        </span>
                                                        Projects Complete Eletrical
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img2} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                             100   <span className="it_plus">+</span>
                                                        </span>
                                                       Satisfied customers
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img3} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                            20 <span className="it_plus">%</span>
                                                        </span>
                                                         Years of experience
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 it_ourachivement_wrap">
                                                <div className="it_ourachivement_item">
                                                    <div className="imgbox">
                                                        <LazyLoadImage effect="blur" src={achive_img4} alt='Achivments image' className="img-fluid" />
                                                    </div>
                                                    <div className="it_ourachivement_contant">
                                                        <span className="it_counter">
                                                            2k <span className="it_plus">+</span>
                                                        </span>
                                                        Winning Awards Eletrical
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>

           </div>
        </>
    )
}
 

export default Ourachivments;
