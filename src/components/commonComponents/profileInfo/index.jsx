import React, { useEffect } from 'react';

import './profileinfo.css';

import Heading from '../heading';

import { Container, Row, Col } from 'react-bootstrap';
import aboutImg1 from './../../../assets/images/aboutimg1.jpg';

import { faFacebookF, faTwitter, faInstagram, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import teamimg_5 from './../../../assets/images/teamimg_5.png';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser, faPhone, faEnvelope, faMapMarkerAlt, faBriefcase,
    faHouseTsunami, faTools, faHammer, faArrowRight, faLaptopCode,
    faGreaterThan,
    faAngleDoubleRight,
    faBolt,
    faPlug,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Profileinfo() {
    return (
        <>
            <div>
                <section className="it_profiledetails_block">
                    <Heading headbg="Profile" headtext="Know about Profile details" subheadtext="Established with a vision for quality interior solutions" textAlign="text-center" />
                    <Container>
                        <div className='it_profileinfo_item'>
                            <Row >
                                <Col lg="3" md="3" sm="12"> 
                                    <div className='it_profileleft_picture'>
                                        <div className="imgbox it_img1">
                                            <LazyLoadImage effect="blur" src={teamimg_5} className="img-fluid" alt='About Img' />
                                        </div>
                                        <h2 className='it_names'>
                                            Divanshu Bele
                                        </h2>
                                        <h6 className='it_designation'>
                                            Chief Technology Officer
                                        </h6>
                                    </div> 

                                    <div className='it_profileleft_block'>

                                        {/* <div className="it_ab_imgcontant">
                                            <div className="imgbox it_img1">
                                                <LazyLoadImage effect="blur" src={teamimg_5} className="img-fluid" alt='About Img' />
                                            </div>
                                        </div> */}
                                        <div className='it_profileleft_content'>
                                            {/* <h2 className='it_names'>
                                                Divanshu Bele
                                            </h2>
                                            <h6 className='it_designation'>
                                                Chief Technology Officer
                                            </h6> */}

                                            <div className='it_about_profiles'>
                                                <div className='it_abservices_item'>
                                                    <span className='iconbox'>
                                                        <FontAwesomeIcon icon={faUser} />
                                                    </span>
                                                    <div className="media_mody">
                                                        <h4>
                                                            Experience
                                                        </h4>
                                                        <h5>
                                                            More Than 12 Years
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className='it_abservices_item'>
                                                    <span className='iconbox'>
                                                        <FontAwesomeIcon icon={faPhone} />
                                                    </span>
                                                    <div className="media_mody">
                                                        <h4>
                                                            Phone No
                                                        </h4>
                                                        <h5>
                                                            +91-9109977357
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className='it_abservices_item'>
                                                    <span className='iconbox'>
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </span>
                                                    <div className="media_mody">
                                                        <h4>
                                                            Email
                                                        </h4>
                                                        <h5>
                                                            divanshu.bele@mdpinfra.in
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className='it_abservices_item'>
                                                    <span className='iconbox'>
                                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                    </span>
                                                    <div className="media_mody">
                                                        <h4>
                                                            Experience
                                                        </h4>
                                                        <h5>
                                                            Bhopal, Madhya Pradesh
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <h5 className='socialmedia_title'>
                                                <span>Social Media</span>
                                            </h5>
                                            <ul className="navbar it_socialmedia">
                                                <li className="nav-item">
                                                    <NavLink href="#" className="nav-link">
                                                        <FontAwesomeIcon icon={faFacebookF} />
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink href="#" className="nav-link">
                                                        <FontAwesomeIcon icon={faTwitter} />
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink href="#" className="nav-link">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </NavLink>
                                                </li>

                                                <li className="nav-item">
                                                    <NavLink href="#" className="nav-link">
                                                        <FontAwesomeIcon icon={faWhatsapp} />
                                                    </NavLink>
                                                </li>

                                                <li className="nav-item">
                                                    <NavLink href="#" className="nav-link">
                                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="9" md="9" sm="12">
                                    <div className='it_pinfos_block'>
                                        <div className='it_profile_summery'>
                                            <div className='it_card_header'>
                                                <h4>
                                                    Personal Summery
                                                </h4>
                                            </div>
                                            <div className='card-body'>
                                                <p>
                                                    Chief Technology Officer with over 12 years of experience in IT strategy, digital transformation, and power
                                                    utility solutions. Proven expertise in managing data centers, enterprise applications, and large-scale ICT
                                                    projects with an emphasis on innovation and operational excellence. Skilled in deploying AI-based
                                                    solutions, system integration, and software development while ensuring alignment with organizational
                                                    objectives. Recognized for building strong vendor partnerships, engaging stakeholders, and leading crossfunctional
                                                    teams to deliver technology-driven outcomes within scope, time, and budget
                                                </p>
                                            </div>
                                        </div>
                                        <div className='it_profile_summery'>
                                            <div className='it_card_header'>
                                                <h4>
                                                    Educational Qualification
                                                </h4>
                                            </div>
                                            <div className='card-body'>
                                                <p>
                                                    B.E. (Information Technology), Jabalpur Engineering College (2006–2010)
                                                </p>
                                            </div>
                                        </div>

                                        <div className='it_profile_summery'>
                                            <div className='it_card_header'>
                                                <h4>
                                                    Professional Skills
                                                </h4>
                                            </div>
                                            <div className='card-body'>
                                                <ul>
                                                    <li>
                                                        <p>
                                                            IT & Power Utility Expertise
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Data Center Setup & Operations
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Oracle CC&B, ERP, MDM
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            ICT & Software Development
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            AI/ML Implementation
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Project & Operations Management
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Tendering & RFP Management
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            OEM Collaboration
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Team Leadership
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Stakeholder Engagement
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='it_profile_summery'>
                                            <div className='it_card_header'>
                                                <h4>
                                                    Work Experience
                                                </h4>
                                            </div>
                                            <div className='card-body'>
                                                <div className='it_experiance_item'>
                                                    <div className='it_profile_counst'>
                                                        <span className='it_counts'>01.</span>
                                                        <h4>
                                                            <span className='text_profiles'>
                                                                Chief Technology Officer
                                                                <br></br>
                                                                <span className='text_copmany'>
                                                                    MDP Infra (I) Pvt. Ltd.
                                                                </span>
                                                            </span>
                                                            <span className='text_time'>
                                                                (2021–Present)
                                                            </span>
                                                        </h4>
                                                        <p>
                                                            Leads IT strategy, digital transformation, and major ICT projects (AI Voice Bot, Smart
                                                            Classrooms, IIM Indore Online Studio, Control Rooms).
                                                        </p>
                                                        <span className='it_symbols'>
                                                            <FontAwesomeIcon icon={faBriefcase} />
                                                        </span>
                                                    </div>

                                                    <div className='it_profile_counst'>
                                                        <span className='it_counts'>01.</span>
                                                        <h4>
                                                            <span className='text_profiles'>
                                                                Deputy General Manager (IT)
                                                                <br></br>
                                                                <span className='text_copmany'>
                                                                    MPMKVVCL
                                                                </span>
                                                            </span>
                                                            <span className='text_time'>
                                                                (2019–2021)
                                                            </span>
                                                        </h4>
                                                        <p>
                                                            Managed ERP (Oracle EBS), Data Center operations, and AI-based customer solutions
                                                            including Cognitive Voice Bot & CRM.
                                                        </p>
                                                        <span className='it_symbols'>
                                                            <FontAwesomeIcon icon={faBriefcase} />
                                                        </span>
                                                    </div>

                                                    <div className='it_profile_counst'>
                                                        <span className='it_counts'>01.</span>
                                                        <h4>
                                                            <span className='text_profiles'>
                                                                Manager/Assistant Engineer (IT)
                                                                <br></br>
                                                                <span className='text_copmany'>
                                                                    MPMKVVCL
                                                                </span>
                                                            </span>
                                                            <span className='text_time'>
                                                                (2012–2019)
                                                            </span>
                                                        </h4>
                                                        <p>
                                                            Implemented Oracle CC&B, GIS, MDM, and managed IT infra, procurement, and RFP processes.
                                                        </p>
                                                        <span className='it_symbols'>
                                                            <FontAwesomeIcon icon={faBriefcase} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container >






                </section >
            </div >
        </>
    )
}
