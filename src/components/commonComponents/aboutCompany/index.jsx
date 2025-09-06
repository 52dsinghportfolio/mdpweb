import React, { useEffect } from 'react';

import './aboutcompany.css';

import Heading from '../heading';

import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import aboutImg1 from './../../../assets/images/aboutimg1.jpg';
// import aboutImg2 from './../../../assets/images/aboutimg2.jpg';


// import aboutImg1 from './../../../assets/images/ab_img1.jpg';
// import aboutImg2 from './../../../assets/images/ab_img2.jpg';

import aboutImg1 from './../../../assets/images/abs_img1.jpg';
import aboutImg2 from './../../../assets/images/abs_img2.jpg';

import aboutBg from './../../../assets/images/bgabout.png';
import ceoImg from './../../../assets/images/teamimg_1.png';




import civilicon from './../../../assets/images/civilicon.svg';
import iticon from './../../../assets/images/iticon.svg';
import electricalicon from './../../../assets/images/electricalicon.svg';
import manufacturingicon from './../../../assets/images/manufacturingicon.svg';
import commercialicon from './../../../assets/images/commercialicon.svg';
import warehouseicon from './../../../assets/images/warehouseicon.svg';





import mdpCircle from './../../../assets/images/mdp_circle.png';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouseTsunami, faTools, faHammer, faArrowRight, faLaptopCode,
    faGreaterThan,
    faAngleDoubleRight,
    faBolt,
    faPlug,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Aboutcopmany() {
    // useEffect(() => {
    //     const text = "MDP INFRA";
    //     const container = document.querySelector(".circle-text");
    //     const total = text.length;
    //     const degStep = 360 / total;

    //     container.innerHTML = ""; // clear previous

    //     text.split("").forEach((char, i) => {
    //         const span = document.createElement("span");
    //         span.style.transform = `rotate(${i * degStep}deg) translate(80px) rotate(-${i * degStep}deg)`;
    //         span.innerText = char;
    //         container.appendChild(span);
    //     });
    // }, []);
    return (
        <>
            <div>


                <section className="it_aboutusinfo_block">
                    <img effect="blur" src={aboutBg} className="it_bglayout" alt='About Img' />
                    <Container>
                        <Row className="row align-items-center">
                            <Col lg="6" md="12" sm="12">
                                <div className="it_ab_imgcontant">
                                    <div className="imgbox it_img1">
                                        <LazyLoadImage effect="blur" src={aboutImg1} className="img-fluid" alt='About Img' />
                                    </div>
                                    <div className="imgbox it_img2">
                                        <LazyLoadImage effect="blur" src={aboutImg2} className="img-fluid" alt='About Img' />
                                    </div>
                                    <div className="it_about_since">
                                        <div className="it_experience_wrap">
                                            <span>SINCE IN</span>
                                            2003
                                        </div>
                                        {/* <div className="circle-container">
                                            <div className="circle-text"></div>
                                        </div> */}
                                        <LazyLoadImage effect="blur" src={mdpCircle} alt='mdpCircle' className='it_cricelimg' />
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="12" sm="12">
                                <Heading headbg="About" headtext="Know about MDP Infra" subheadtext="MDP Infra (India) Pvt. Ltd. is an emerging IT and ITeS company" textAlign="text-left" />
                                <p>
                                    MDP Infra (India) Pvt. Ltd., incorporated in 2003, is an ISO 9001, 27001, and 45001 certified company with offices in Madhya Pradesh, New Delhi, and Chhattisgarh. Over the years, we have grown into a reputable organization in both the IT and Infrastructure sectors, recognized for our commitment to excellence, sustainability, and innovation. With a strong foundation of 100+ certified engineers, 300+ team members, and over 100 active clients, we continue to deliver projects of scale and impact.
                                </p>
                                <p>
                                    In the IT and ITeS domain, our expertise includes Data Center Infrastructure, ICT solutions, Smart Classrooms, Software Development, Security & Surveillance, Networking, Technical Manpower Outsourcing, and Industrial Automation. In the infrastructure realm, we specialize in constructing institutional and residential buildings, executing external development projects, and implementing large-scale electrical distribution networks. Complementing these capabilities, our in-house manufacturing units produce transformers, PCC poles, and electrical equipment, ensuring seamless end-to-end project delivery.
                                </p>
                                <p style={{ display: location.pathname === "/aboutus" ? "block" : "none" }}>
                                    At MDP Infra, we are driven by a vision to build smart infrastructure and digital ecosystems that transform education, strengthen governance, support industries, and empower communities. With every project, we combine engineering excellence with advanced technology to contribute toward a sustainable and digitally progressive India.
                                </p>

                                <p style={{ display: location.pathname === "/aboutus" ? "block" : "none" }}>
                                    Also MDP Infra (India) Pvt. Ltd. is a leading Infrastructure Company, engaged in various civil and electrical projects like construction of institutional buildings, housing, external development, and electricity-distribution projects.
                                </p>


                                <div className='it_about_services_info'>
                                    <Row>
                                        <Col lg="6" md="12" sm="12">
                                            <div className='it_abservices_item'>
                                                <span className='iconbox'>
                                                    <img src={civilicon} className='img-fluid' alt="icons" />
                                                </span>
                                                <h4>
                                                    Civil
                                                </h4>
                                            </div>
                                        </Col>

                                        <Col lg="6" md="12" sm="12">
                                            <div className='it_abservices_item'>
                                                <span className='iconbox'>
                                                    <img src={iticon} className='img-fluid' alt="icons" />
                                                </span>
                                                <h4>
                                                    IT(Information Technology)
                                                </h4>
                                            </div>
                                        </Col>

                                        <Col lg="6" md="12" sm="12">
                                            <div className='it_abservices_item'>
                                                <span className='iconbox'>
                                                    <img src={electricalicon} className='img-fluid' alt="icons" />
                                                </span>
                                                <h4>
                                                    Electrical
                                                </h4>
                                            </div>
                                        </Col>

                                        <Col lg="6" md="12" sm="12">
                                            <div className='it_abservices_item'>
                                                <span className='iconbox'>
                                                    <img src={manufacturingicon} className='img-fluid' alt="icons" />
                                                </span>
                                                <h4>
                                                    Manufacturing
                                                </h4>
                                            </div>
                                        </Col>

                                        <Col lg="6" md="12" sm="12">
                                            <div className='it_abservices_item'>
                                                <span className='iconbox'>
                                                    <img src={commercialicon} className='img-fluid' alt="icons" />
                                                </span>
                                                <h4>
                                                    Real Estate
                                                </h4>
                                            </div>
                                        </Col>
                                        {/* <Col lg="6" md="12" sm="12">
                                            <div className='it_abservices_item'>
                                                <span className='iconbox'>
                                                    <img src={warehouseicon} className='img-fluid' alt="icons" />
                                                </span>
                                                <h4>
                                                    Warehouse Construction
                                                </h4>
                                            </div>
                                        </Col> */}
                                    </Row>
                                </div>


                                <Row className="row align-items-center">
                                    {/* <Col lg="8" md="8" sm="12">
                                        <div className='it_founderinfo'>
                                            <LazyLoadImage effect="blur" src={ceoImg} className="img-fluid" alt='About Img' />
                                            <h6>
                                                Pradeep Parashar
                                                <span> Managing Director</span>
                                            </h6>
                                        </div>
                                    </Col> */}
                                    <Col lg="4" md="12" sm="12">
                                        <div className='text-right'>
                                            <NavLink href='#' to="/aboutus" className='it_submitbtn' style={{ display: location.pathname === "/aboutus" ? "none" : "block" }}>
                                                Discover More
                                                {/* <FontAwesomeIcon icon={faAngleDoubleRight} className='ml-2' />  */}
                                                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                            </NavLink>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>






            </div >
        </>
    )
}
