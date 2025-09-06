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
        setTimeout(() => setLoading(false), 1000);
    }, []);

    // const goBack = () => {
    //     setActiveMenu("main");
    // };
    return (
        <>
            <div>
                {loading ? (
                    <div className="it_loader">
                        <div className="it_stage" aria-busy="true" aria-live="polite">
                            <div className="it_letters" aria-label="Loading">
                                <div className="row top">
                                    {/* <span className="ch">M</span>
                                <span className="ch">D</span>
                                <span className="ch">P</span> */}

                                    <span className="ch">T</span>
                                    <span className="ch">E</span>
                                    <span className="ch">S</span>
                                    <span className="ch">T</span>
                                </div>
                                <div className="row bot">
                                    {/* <span className="ch">I</span>
                                <span className="ch">N</span>
                                <span className="ch">F</span>
                                <span className="ch">R</span>
                                <span className="ch">A</span> */}

                                    <span className="ch">L</span>
                                    <span className="ch">o</span>
                                    <span className="ch">a</span>
                                    <span className="ch">d</span>
                                    <span className="ch">e</span>
                                    <span className="ch">r</span>
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
                                    <a href='/' to="/" className="navbar-brand">
                                        <LazyLoadImage effect="blur" src={mdpLogo} alt='MDP Logo' className="img-fluid" />
                                    </a>
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


                                            {activeMenu === "main" && (
                                                <>
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item">
                                                            <NavLink to="/" className="nav-link"> Home </NavLink>
                                                        </li>
                                                        <li className="nav-item dropdown dropdown_item" >
                                                            <NavLink className="nav-link" to="/aboutus">
                                                                About Us
                                                            </NavLink>
                                                        </li>
                                                        <li className="nav-item dropdown dropdown_item" data-bs-toggle="dropdown">
                                                            <NavLink className="nav-link" href="#">
                                                                Services Offered
                                                                <span className="iconbox">
                                                                    <FontAwesomeIcon icon={faAngleDown} />
                                                                </span>
                                                            </NavLink>

                                                            <ul className="dropdown-menu it_megamenu">
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
{/* <li className="menu-item">
    <NavLink className="menu-link" onClick={(e) => {
        e.preventDefault();
        handleMenuClick("main");
        window.open("http://localhost:3000/eletrical", "_blank");
    }}>
        Eletrical
    </NavLink>
</li> */}

<li className="menu-item">
    <NavLink className="menu-link" onClick={(e) => {
        e.preventDefault();
        handleMenuClick("main");
        window.open("http://localhost:3000/electrical", "_blank");
    }}>
        Electrical
    </NavLink>
</li>
<li className="menu-item">
    <NavLink className="menu-link" onClick={(e) => {
        e.preventDefault();
        handleMenuClick("main");
        window.open("http://localhost:3000/it", "_blank");
    }}>
        IT (Information Technology)
    </NavLink>
</li>
<li className="menu-item">
    <NavLink className="menu-link" onClick={(e) => {
        e.preventDefault();
        handleMenuClick("main");
        window.open("http://localhost:3000/manufacturing", "_blank");
    }}>
        Manufacturing
    </NavLink>
</li>

                                                                {/* <li className="menu-item">
                                                                    <NavLink className="menu-link" onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleMenuClick("commercial");
                                                                        window.open("http://localhost:3000/commercial", "_blank");
                                                                    }}>
                                                                        Real Estate
                                                                    </NavLink>
                                                                </li> */}

                                                                {/* <li className="menu-item">
                                                                    <NavLink className="menu-link" onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleMenuClick("commercial");
                                                                        window.open("http://localhost:3000/commercial", "_blank");
                                                                    }}>
                                                                        warehouse construction
                                                                    </NavLink>
                                                                </li> */}
                                                            </ul>
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
                                                            <NavLink className="nav-link it_contactBtn" to="/career"> Certificate
                                                            </NavLink>
                                                        </li>

                                                        <li className="nav-item it_contactMenu">
                                                            <NavLink className="nav-link it_contactBtn" to="/contactus" >
                                                                Contact Us
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </>
                                            )}

                                            {activeMenu === "civil" && (
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/civil/aboutus">
                                                            About Civil
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/civil/services">
                                                            Civil Services
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/civil/ourteams">
                                                            Our Team
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/civil/portfolio">
                                                            Portfolio
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/civil/certificates">
                                                            Certificates
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link it_contactBtn" to="civil/gallrey">  Gallery</NavLink>
                                                    </li>
                                                    {/* <li className="nav-item">
                                                        <NavLink className="nav-link it_contactBtn" to="civil/career"> Career</NavLink>
                                                    </li>  */}
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/civil/contatcus">
                                                            Contact Us
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            )}

                                            {activeMenu === "electrical" && (
                                                <ul className="navbar-nav"> 
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/eletricial/aboutus">
                                                            About Eletrical
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/eletricial/ourteam">
                                                            Eletrical Team
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/eletricial/portfolio">
                                                            Projects
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/eletricial/gallery">
                                                            Gallery
                                                        </NavLink>
                                                    </li>

                                                </ul>
                                            )}

                                            {activeMenu === "it" && (
                                                <ul className="navbar-nav">
                                                    {/* <li className="nav-item">
                                                    <NavLink className="nav-link" to="/it/home">
                                                        it Home
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/it/aboutus">
                                                        it About Us
                                                    </NavLink>
                                                </li> */}


                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/it/systemintegration">
                                                            System Integration
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/it/softwaredevlopment/">
                                                            Software Development
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/it/manpower">
                                                            Manpower Outsourcing
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/it/portfolio">
                                                            Portfolio
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/it/ourteam">
                                                            Our Team
                                                        </NavLink>
                                                    </li>





                                                </ul>
                                            )}

                                            {/* {activeMenu === "manufacturing" && (
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/manufacturing/home">
                                                            manufacturing Home
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/manufacturing/aboutus">
                                                            About Us
                                                        </NavLink>
                                                    </li>

                                                </ul>
                                            )} */}

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

