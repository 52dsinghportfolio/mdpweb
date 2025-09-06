import React from 'react';
import './footer.css';
// import mdpLogo from './../../assets/images/logo.jpg'
import mdpLogo from './../../assets/images/mdplogo.png'
import bgaddresimg from './../../assets/images/Technology__12.jpg'
import { Container, Row, Col, Nav, Form, InputGroup, Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight, faPaperPlane, faBell, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import { LazyLoadImage } from 'react-lazy-load-image-component';


import { NavLink } from 'react-router-dom';


export default function Footer() {
    return (
        <>
            <div>





                <div className="it_getmakeconnet_block ">
                    <Container>
                        <div className="it_getmakeconnet_items">
                            <Row className='align-items-center'>
                                <Col lg="8" md="8" sm="12">
                                    <div className="it_getconnet_item">
                                        <h4>
                                            We’re here to assist — Call our experts today!
                                        </h4>
                                        <p>
                                            Our dedicated team of experts is here to support you at every stage — from the first consultation to successful implementation.
                                        </p>
                                        <div className="it_getconnet_quote">
                                            <NavLink to="/contactus" className="it_submitbtn">
                                                <span>
                                                    Talk to Us
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <span className="dbl-title dbl-bg_text">24/7</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>








                <div className='it_footer_block'>
                    <div className='it_footeraddress'>
                        <Container>
                            <div className='it_footeraddress_item' style={{ background: `url(${bgaddresimg})` }}>
                                <Row>
                                    <Col lg="4" md="4" sm="12">
                                        <div className='it_officeaddress_item'>
                                            <span className='it_iconbox'>
                                                <FontAwesomeIcon icon={faLocationArrow} />
                                            </span>
                                            <h4>
                                                Register Office
                                            </h4>
                                            <p>
                                                464-465, Suresh Nagar, Thatipur, Gwalior (M.P.)
                                            </p>
                                            <p>
                                                Telephone. 0751-2345389
                                            </p>
                                            <p>
                                                Fax: 0751-2345389
                                            </p>
                                        </div>
                                    </Col>

                                    <Col lg="4" md="4" sm="12">
                                        <div className='it_officeaddress_item'>
                                            <span className='it_iconbox'>
                                                <FontAwesomeIcon icon={faLocationArrow} />
                                            </span>
                                            <h4>
                                                Corporte Office
                                            </h4>
                                            <p>
                                                A-50, Govindpura Industrial Area, Bhopal (M.P.)
                                            </p>
                                            <p>
                                                Telephone. 0755-4905292
                                            </p>
                                        </div>
                                    </Col>

                                    <Col lg="4" md="4" sm="12">
                                        <div className='it_officeaddress_item'>
                                            <span className='it_iconbox'>
                                                <FontAwesomeIcon icon={faLocationArrow} />
                                            </span>
                                            <h4>
                                                Regional Office
                                            </h4>
                                            <p>
                                                LGF-75, Uday Park, South Extension,
                                                August Kranti Marg, New Delhi.
                                            </p>
                                            <p>
                                                Telephone. 011-40505934, 40502618
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>

                    <div className="it_mainfooter_block">
                        <Container>
                            <Row>
                                <Col lg="4" md="6" sm="12">
                                    <div className="it_footer_aboutus">
                                        <div className="it_logo_block">
                                            <LazyLoadImage effect="blur" src={mdpLogo} alt='MDP-logo' className="img-fluid" />
                                        </div>
                                        <p>
                                            Look for contractors with relevant experience, a solid reputation, and proper licensing.
                                            Look for contractors with relevant experience, a solid reputation, and proper licensing.
                                            Look for contractors with relevant experience, a solid reputation, and proper licensing.
                                        </p>
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
                                </Col>

                                <Col lg="4" md="6" sm="4" className='d-none m-block'>
                                    <div className="it_newsletter_block">
                                        <h4 className="it_footer_title">
                                            Newsletter
                                            <span className="it_footer_border"></span>
                                        </h4>
                                        <h6>
                                            Don’t miss the latest news
                                        </h6>

                                        <Form className='it_form_block'>
                                            <Form.Group className="">
                                                <InputGroup size="sm" className="mb-3">
                                                    <Form.Control placeholder='Email Address...'
                                                    />
                                                    <Button className='it_formsubmit'>
                                                        <FontAwesomeIcon icon={faPaperPlane} />
                                                    </Button>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form>
                                        <h6>
                                            <FontAwesomeIcon icon={faBell} />
                                            Please sign up for notify any updates
                                        </h6>
                                    </div>
                                </Col>

                                <Col lg="2" md="6" sm="4">
                                    <div className="it_footer_quick_links">
                                        <h4 className="it_footer_title">
                                            Quick Links
                                            <span className="it_footer_border"></span>
                                        </h4>
                                        <ul className="navbar">
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    About Us
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Blogs
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Sustaninalibity
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Portfolio
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Gallery
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Career
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Contact Us
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg="2" md="6" sm="4">
                                    <div className="it_footer_quick_links">
                                        <h4 className="it_footer_title">
                                            Services
                                            <span className="it_footer_border"></span>
                                        </h4>
                                        <ul className="navbar">
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Civil
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Electrical
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    IT (Information Technology)
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Manufacturing
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Real Estate
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link">
                                                    <span className="it_icons">
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    warehouse construction
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg="4" md="3" sm="4" className='m-none'>
                                    <div className="it_newsletter_block">
                                        <h4 className="it_footer_title">
                                            Newsletter
                                            <span className="it_footer_border"></span>
                                        </h4>
                                        <h6>
                                            Don’t miss the latest news
                                        </h6>

                                        <Form className='it_form_block'>
                                            <Form.Group className="">
                                                <InputGroup size="sm" className="mb-3">
                                                    <Form.Control placeholder='Email Address...'
                                                    />
                                                    <Button className='it_formsubmit'>
                                                        <FontAwesomeIcon icon={faPaperPlane} />
                                                    </Button>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form>
                                        <h6>
                                            <FontAwesomeIcon icon={faBell} />
                                            Please sign up for notify any updates
                                        </h6>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="it_bottomfooter_block" >
                        <Container>
                            <div className="it_copyright_block">
                                Copyright ©
                                2025
                                <NavLink href="#" className="it_links">
                                    MDP Infra (India) Private Limited
                                </NavLink>
                                All Rights Reserved.
                            </div>
                        </Container>
                    </div>
                </div>
            </div >
        </>
    )
}

