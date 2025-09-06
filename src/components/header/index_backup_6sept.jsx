import React, { useState, useEffect } from 'react';

import './header.css';
// import mdpLogo from './../../assets/images/logo.jpg'
import mdpLogo from './../../assets/images/mdplogo.png'

import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';


import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

import { faClock, faPhone, faAngleDown, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Header() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [loading, setLoading] = useState(true);
    const location = useLocation()
    const pathUrl = location.pathname.split("/")[1];
    console.log(pathUrl)
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    useEffect(() => {
        if (pathUrl === "civil" || pathUrl === "electrical" || pathUrl === "it" || pathUrl === "manufacturing" || pathUrl === "commercial")
            setActiveMenu(pathUrl);
    }, []);

    useEffect(() => {
        // 2 sec ke baad loading hata denge (API ke jagah simulation)
        setTimeout(() => setLoading(false), 100);
    }, []);

    const goBack = () => {
        setActiveMenu("main");
    };
    return (
        <>
            <div>
                {loading ? (
                    <div className="it_loader">
                        <div className="it_stage" aria-busy="true" aria-live="polite">
                            <div className="it_letters" aria-label="Loading">
                                <div className="row top">
                                    <span className="ch">M</span>
                                    <span className="ch">D</span>
                                    <span className="ch">P</span>
                                </div>
                                <div className="row bot">
                                    <span className="ch">I</span>
                                    <span className="ch">N</span>
                                    <span className="ch">F</span>
                                    <span className="ch">R</span>
                                    <span className="ch">A</span>
                                </div>
                                <div className="dot" aria-hidden="true"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <span></span>
                )}



                <div className='it_header_block'>
                    <div className='it_topheaderMenu'>
                        <Container>
                            <Row>
                                <Col lg="6" md="6" sm="12">
                                    <ul className="navbar it_contant_header">
                                        <li className="nav-item">
                                            <NavLink href="#" className="nav-link">
                                                <FontAwesomeIcon icon={faClock} />
                                                <span className="it_text">
                                                    +91 123456789
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink href="#" className="nav-link">
                                                <FontAwesomeIcon icon={faPhone} />
                                                <span className="it_text">
                                                    Example@gmail.com
                                                </span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </Col>

                                <Col lg="6" md="6" sm="12">
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
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="it_headermainMenu">
                        <Nav className="navbar navbar-expand-sm">
                            <Container>
                                <div className='it_headermainscroll'>
                                    <NavLink to="/" className="navbar-brand">
                                        <LazyLoadImage effect="blur" src={mdpLogo} alt='MDP Logo' className="img-fluid" />
                                    </NavLink>
                                    <Button className="navbar-toggler" type="button" id="mobileBtn">
                                        {/* <span className="navbar-toggler-icon"></span> */}
                                        <FontAwesomeIcon icon={faBars} />
                                    </Button>
                                    <div className="collapse navbar-collapse" id="mobileMenu_block">
                                        <div className="navbar_itemblock">
                                            <div className="overlayitem"></div>
                                            <div className="moble_headermenu">
                                                <NavLink className="navbar-brand">
                                                    <LazyLoadImage effect="blur" src={mdpLogo} alt='MDP Logo' className="img-fluid" />
                                                </NavLink>
                                                <NavLink className="mobileCloseBtn" id="mobileCloseBtn">
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </NavLink>
                                            </div>


                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <NavLink to="/" className="nav-link"> Home </NavLink>
                                                </li>
                                                <li className="nav-item dropdown dropdown_item" >
                                                    <NavLink className="nav-link" to="/aboutus">
                                                        About Us
                                                    </NavLink>
                                                </li>
                                                {/* <li className="nav-item dropdown dropdown_item dropdown_item1" data-bs-toggle="dropdown"> */}
                                                <li className="nav-item dropdown dropdown_item" data-bs-toggle="dropdown">
                                                    <NavLink className="nav-link" href="#">
                                                        Services Offered
                                                        <span className="iconbox">
                                                            <FontAwesomeIcon icon={faAngleDown} />
                                                        </span>
                                                    </NavLink>

                                                     <div className='dropdown-menu it_megamenu_block'>
                                                        <Row>
                                                            <Col lg="3" md="4" sm="12">
                                                                <div className='it_menucard_block'>
                                                                    <div className='it_menucard_header'>
                                                                        <h4>
                                                                            Construction Services
                                                                        </h4>
                                                                    </div>
                                                                    <div className='it_menucard_body'>
                                                                        <ul className="it_megamenunew">
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/civil/aboutus">
                                                                                    Overview
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/civil/ourteams">
                                                                                    Our Team
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/civil/services">
                                                                                    Services
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/civil/portfolio">
                                                                                    Portfolio
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/civil/certificates">
                                                                                    Certificates
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/civil/contatcus">
                                                                                    Contact Us
                                                                                </NavLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </Col>


                                                            <Col lg="3" md="4" sm="12">
                                                                <div className='it_menucard_block'>
                                                                    <div className='it_menucard_header'>
                                                                        <h4>
                                                                            IT Services
                                                                        </h4>
                                                                    </div>
                                                                    <div className='it_menucard_body'>
                                                                        <ul className="it_megamenunew">
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/it/systemintegration">
                                                                                    System Integration
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/it/softwaredevlopment/">
                                                                                    Software Development
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/it/manpower">
                                                                                    Manpower Outsourcing
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/it/portfolio">
                                                                                    Portfolio
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/it/ourteam">
                                                                                    Our Team
                                                                                </NavLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col lg="3" md="4" sm="12">
                                                                <div className='it_menucard_block'>
                                                                    <div className='it_menucard_header'>
                                                                        <h4>
                                                                            Electrical Services
                                                                        </h4>
                                                                    </div>
                                                                    <div className='it_menucard_body'>
                                                                        <ul className="it_megamenunew">
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/eletricial/aboutus">
                                                                                    Eletricial Overview
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/eletricial/ourteam">
                                                                                    Our Team
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/eletricial/portfolio">
                                                                                    Portfolio
                                                                                </NavLink>
                                                                            </li>
                                                                           <li className="menu-item">
                                                                                <NavLink className="menu-link" to="/eletricial/gallery">
                                                                                    Gallery
                                                                                </NavLink>
                                                                            </li> 
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col lg="3" md="4" sm="12">
                                                                <div className='it_menucard_block'>
                                                                    <div className='it_menucard_header'>
                                                                        <h4>
                                                                            Manufacturing Services
                                                                        </h4>
                                                                    </div>
                                                                    <div className='it_menucard_body'>
                                                                        <ul className="it_megamenunew">
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    ______________
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    ______________
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    ______________
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    ______________
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    ______________
                                                                                </NavLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col lg="3" md="4" sm="12">
                                                                <div className='it_menucard_block'>
                                                                    <div className='it_menucard_header'>
                                                                        <h4>
                                                                            Real State Services
                                                                        </h4>
                                                                    </div>
                                                                    <div className='it_menucard_body'>
                                                                        <ul className="it_megamenunew">
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    ______________
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    ______________
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    ______________
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    ______________
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    ______________
                                                                                </NavLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                             <Col lg="3" md="4" sm="12">
                                                                <div className='it_menucard_block'>
                                                                    <div className='it_menucard_header'>
                                                                        <h4>
                                                                            Warehouse Construction Services
                                                                        </h4>
                                                                    </div>
                                                                    <div className='it_menucard_body'>
                                                                        <ul className="it_megamenunew">
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    About Civil
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    General Contracting
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    General Contracting Services
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    Fit-outs Services
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    Portfolio
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    Civil Gallery
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    Civil Certificates
                                                                                </NavLink>
                                                                            </li>
                                                                            <li className="menu-item">
                                                                                <NavLink className="menu-link" target='_blank'>
                                                                                    Civil Contact Us
                                                                                </NavLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </Col>   
                                                        </Row>
                                                    </div>  

                                                            {/* <ul className="dropdown-menu it_megamenu">
                                                                <li className="menu-item">
                                                                    <NavLink className="menu-link"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            handleMenuClick("main");
                                                                            window.open("http://localhost:3000/civil", "_blank");
                                                                        }}
                                                                    >
                                                                        Civil
                                                                    </NavLink>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <NavLink className="menu-link" onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleMenuClick("electrical");
                                                                        window.open("http://localhost:3000/electrical", "_blank");
                                                                    }}>
                                                                        Electrical
                                                                    </NavLink>
                                                                </li>

                                                                <li className="menu-item">
                                                                    <NavLink className="menu-link" onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleMenuClick("it");
                                                                        window.open("http://localhost:3000/it", "_blank");
                                                                    }}>
                                                                        IT (Information Technology)
                                                                    </NavLink>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <NavLink className="menu-link" onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleMenuClick("manufacturing");
                                                                        window.open("http://localhost:3000/manufacturing", "_blank");
                                                                    }}>
                                                                        Manufacturing
                                                                    </NavLink>
                                                                </li>

                                                                <li className="menu-item">
                                                                    <NavLink className="menu-link" onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleMenuClick("commercial");
                                                                        window.open("http://localhost:3000/commercial", "_blank");
                                                                    }}>
                                                                        Real State
                                                                    </NavLink>
                                                                </li>

                                                                <li className="menu-item">
                                                                    <NavLink className="menu-link" onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleMenuClick("commercial");
                                                                        window.open("http://localhost:3000/commercial", "_blank");
                                                                    }}>
                                                                        Warehouse Construction
                                                                    </NavLink>
                                                                </li>
                                                            </ul> */}
                                                        </li>


                                                        {/* <li className="nav-item dropdown dropdown_item">
                                                            <NavLink className="nav-link" to="/">
                                                                Blogs
                                                            </NavLink>
                                                        </li> */}
                                                        {/* <li className="nav-item dropdown dropdown_item">
                                                            <NavLink className="nav-link" to="/">
                                                                Sustainability
                                                            </NavLink>
                                                        </li> */}
                                                        <li className="nav-item dropdown dropdown_item">
                                                            <NavLink className="nav-link" to="/portfolio">
                                                                Portfolio
                                                            </NavLink>
                                                        </li>

                                                        <li className="nav-item">
                                                            <NavLink className="nav-link it_contactBtn" to="/gallrey">  Gallery</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link it_contactBtn" to="/career"> Career</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link it_contactBtn" to="/certificates"> Certificate
                                                            </NavLink>
                                                        </li>

                                                        <li className="nav-item it_contactMenu">
                                                            <NavLink className="nav-link it_contactBtn" to="/contactus" >
                                                                Contact Us
                                                            </NavLink>
                                                        </li>
                                                    </ul>

                                                </div>
                                        </div>
                                    </div>


                            </Container>
                        </Nav>
                    </div>
                </div>
            </div >
        </>
    )
}

