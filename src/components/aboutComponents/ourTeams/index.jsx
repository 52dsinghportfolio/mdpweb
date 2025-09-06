

import './ourteams.css';
import React, { useState } from "react";

import teamMeber_img1 from './../../../assets/images/ceoimg.png';


import teamimg_1 from './../../../assets/images/teamimg_1.png';
import teamimg_2 from './../../../assets/images/teamimg_2.png';
import teamimg_3 from './../../../assets/images/teamimg_3.png';
import teamimg_4 from './../../../assets/images/teamimg_4.png';
import teamimg_5 from './../../../assets/images/teamimg_5.png';
import teamimg_6 from './../../../assets/images/teamimg_6.png';
import teamimg_7 from './../../../assets/images/teamimg_7.png';
import teamimg_8 from './../../../assets/images/teamimg_8.png';
import teamimg_9 from './../../../assets/images/teamimg_9.png';



import { Container, Row, Col, Button, NavbarCollapse } from 'react-bootstrap';
import Heading from '../../commonComponents/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

import { faFacebookF, faTwitter, faInstagram, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export function Ourteams() {
    const images = [
        { src: teamimg_1, title: 'Pradeep Parashar', servicecategory: 'Managing Director' },
        { src: teamimg_2, title: 'Yogesh Parashar', servicecategory: 'Joint Managing Director' },
        { src: teamimg_3, title: 'Chief Executive Officer', servicecategory: 'Chief Executive Officer' },
        { src: teamimg_4, title: 'RM Kalwani', servicecategory: 'Vice President' },
        { src: teamimg_5, title: 'Divanshu Bele', servicecategory: 'Chief Technology Officer' },
        { src: teamimg_6, title: 'MK Singh', servicecategory: 'Chief Financial Officer' },
        { src: teamimg_7, title: 'Ratnesh Mishra', servicecategory: 'DGM' },
        { src: teamimg_8, title: 'Siddhant Sharma', servicecategory: 'Sr. Manager Operations (Civil)' },
        { src: teamimg_9, title: 'Rishabh Kamboj', servicecategory: 'Manager Operations (Interiors)' },
    ];
    // const teamData = [
    //     {
    //         id: 1,
    //         src: teamimg_1,
    //         title: 'Pradeep Parashar',
    //         servicecategory: 'Managing Director',
    //         bio: 'Pradeep ji ke bare me detailed info...'
    //     },
    //     {
    //         id: 2,
    //         src: teamimg_2,
    //         title: 'Yogesh Parashar',
    //         servicecategory: 'Joint Managing Director',
    //         bio: 'Yogesh ji ke bare me detailed info...'
    //     },
    //     {
    //         id: 3,
    //         src: teamimg_3,
    //         title: 'Chief Executive Officer',
    //         servicecategory: 'Chief Executive Officer',
    //         bio: 'CEO ke bare me detailed info...'
    //     },
    //     {
    //         id: 4,
    //         src: teamimg_4,
    //         title: 'RM Kalwani',
    //         servicecategory: 'Vice President',
    //         bio: 'Vice President ka detailed info...'
    //     },
    //     {
    //         id: 5,
    //         src: teamimg_5,
    //         title: 'Divanshu Bele',
    //         servicecategory: 'Chief Technology Officer',
    //         bio: 'CTO ka detailed info...'
    //     },
    //     {
    //         id: 6,
    //         src: teamimg_6,
    //         title: 'MK Singh',
    //         servicecategory: 'Chief Financial Officer',
    //         bio: 'CFO ka detailed info...'
    //     },
    //     {
    //         id: 7,
    //         src: teamimg_7,
    //         title: 'Ratnesh Mishra',
    //         servicecategory: 'DGM',
    //         bio: 'DGM ka detailed info...'
    //     },
    //     {
    //         id: 8,
    //         src: teamimg_8,
    //         title: 'Siddhant Sharma',
    //         servicecategory: 'Sr. Manager Operations (Civil)',
    //         bio: 'Operations (Civil) manager ka detailed info...'
    //     },
    //     {
    //         id: 9,
    //         src: teamimg_9,
    //         title: 'Rishabh Kamboj',
    //         servicecategory: 'Manager Operations (Interiors)',
    //         bio: 'Operations (Interiors) manager ka detailed info...'
    //     }
    // ];
    return (
        <div>
            <div className="it_teammember_block">
                {/* <Container> */}
                {/* <Heading
                        headbg="Team"
                        headtext="Our Professional "
                        subheadtext="Expert Technical Team"
                        textAlign="text-center"
                    /> */}
                <div className='it_teammember_list'>




                    <Row>
                        {images.map((member, index) => (
                            <Col lg="3" md="4" sm="12" key={index}>
                                <div className="it_teammember_box">
                                    <div className="imgbox">
                                        <div className='imgbox_inner'>
                                            <NavLink to="/profiledetails">
                                                <LazyLoadImage effect="blur" src={member.src} alt={member.title} />
                                            </NavLink>
                                        </div>
                                        <div className='it_viewprofile'>
                                            <span className='it_sharebox'>
                                                <NavLink to="/profiledetails">
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </NavLink>
                                            </span>
                                            <ul className='navbar itsocialMenu'>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link"><FontAwesomeIcon icon={faFacebookF} /></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link"><FontAwesomeIcon icon={faTwitter} /></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link"><FontAwesomeIcon icon={faInstagram} /></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link"><FontAwesomeIcon icon={faWhatsapp} /></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link"><FontAwesomeIcon icon={faLinkedinIn} /></NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='it_team_name'>
                                        <NavLink to="/profiledetails">
                                            <h4>{member.title}</h4>
                                            <h5>{member.servicecategory}</h5>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* <Row>
                        {teamData.map((member) => (
                            <Col lg="3" md="4" sm="12" key={member.id}>
                                <div className="it_teammember_box">
                                    <div className="imgbox">
                                        <div className='imgbox_inner'>
                                            <NavLink to={`/profiledetails/${member.id}`}>
                                                <LazyLoadImage effect="blur" src={member.src} alt={member.title} />
                                            </NavLink>
                                        </div>
                                        <div className='it_viewprofile'>
                                            <span className='it_sharebox'>
                                                <NavLink to={`/profiledetails/${member.id}`}>
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </NavLink>
                                            </span>
                                            <ul className='navbar itsocialMenu'>
                                                <li><NavLink><FontAwesomeIcon icon={faFacebookF} /></NavLink></li>
                                                <li><NavLink><FontAwesomeIcon icon={faTwitter} /></NavLink></li>
                                                <li><NavLink><FontAwesomeIcon icon={faInstagram} /></NavLink></li>
                                                <li><NavLink><FontAwesomeIcon icon={faWhatsapp} /></NavLink></li>
                                                <li><NavLink><FontAwesomeIcon icon={faLinkedinIn} /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='it_team_name'>
                                        <NavLink to={`/profiledetails/${member.id}`}>
                                            <h4>{member.title}</h4>
                                            <h5>{member.servicecategory}</h5>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row> */}







                    {/* <Row>
                            <Col lg="3" md="4" sm="12">
                                <div className="it_teammember_box">
                                    <div className="imgbox">
                                        <div className='imgbox_inner'>
                                            <NavLink href="#" to="/profiledetails">
                                                <LazyLoadImage effect="blur" src={teamimg_1} alt="Team Member" />
                                            </NavLink>
                                        </div>
                                        <div className='it_viewprofile'>
                                            <span className='it_sharebox'>
                                                <NavLink href="#" to="/profiledetails">
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </NavLink>
                                            </span>
                                            <ul className='navbar itsocialMenu'>
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
                                    <div className='it_team_name'>
                                        <NavLink href="#" to="/profiledetails">
                                            <h4>
                                                User name
                                            </h4>
                                            <h5>
                                                Designation
                                            </h5>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col> */}


                    {/* <Col lg="3" md="4" sm="12">
                                <div className="it_teammember_box">
                                    <div className="imgbox">
                                        <div className='imgbox_inner'>
                                            <NavLink href="#" to="/profiledetails">
                                                <LazyLoadImage effect="blur" src={teamMeber_img1} alt="Team Member" />
                                            </NavLink>
                                        </div>
                                        <div className='it_viewprofile'>
                                            <span className='it_sharebox'>
                                                <NavLink href="#" to="/profiledetails">
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </NavLink>
                                            </span>
                                            <ul className='navbar itsocialMenu'>
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
                                    <div className='it_team_name'>
                                        <NavLink href="#" to="/profiledetails">
                                            <h4>
                                                User name
                                            </h4>
                                            <h5>
                                                Designation
                                            </h5>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col>

                            
                            <Col lg="3" md="4" sm="12">
                                <div className="it_teammember_box">
                                    <div className="imgbox">
                                        <div className='imgbox_inner'>
                                            <NavLink href="#" to="/profiledetails">
                                                <LazyLoadImage effect="blur" src={teamMeber_img1} alt="Team Member" />
                                            </NavLink>
                                        </div>
                                        <div className='it_viewprofile'>
                                            <span className='it_sharebox'>
                                                <NavLink href="#" to="/profiledetails">
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </NavLink>
                                            </span>
                                            <ul className='navbar itsocialMenu'>
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
                                    <div className='it_team_name'>
                                        <NavLink href="#" to="/profiledetails">
                                            <h4>
                                                User name
                                            </h4>
                                            <h5>
                                                Designation
                                            </h5>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col>

                            
                            <Col lg="3" md="4" sm="12">
                                <div className="it_teammember_box">
                                    <div className="imgbox">
                                        <div className='imgbox_inner'>
                                            <NavLink href="#" to="/profiledetails">
                                                <LazyLoadImage effect="blur" src={teamMeber_img1} alt="Team Member" />
                                            </NavLink>
                                        </div>
                                        <div className='it_viewprofile'>
                                            <span className='it_sharebox'>
                                                <NavLink href="#" to="/profiledetails">
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </NavLink>
                                            </span>
                                            <ul className='navbar itsocialMenu'>
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
                                    <div className='it_team_name'>
                                        <NavLink href="#" to="/profiledetails">
                                            <h4>
                                                User name
                                            </h4>
                                            <h5>
                                                Designation
                                            </h5>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col>

                            
                            <Col lg="3" md="4" sm="12">
                                <div className="it_teammember_box">
                                    <div className="imgbox">
                                        <div className='imgbox_inner'>
                                            <NavLink href="#" to="/profiledetails">
                                                <LazyLoadImage effect="blur" src={teamMeber_img1} alt="Team Member" />
                                            </NavLink>
                                        </div>
                                        <div className='it_viewprofile'>
                                            <span className='it_sharebox'>
                                                <NavLink href="#" to="/profiledetails">
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </NavLink>
                                            </span>
                                            <ul className='navbar itsocialMenu'>
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
                                    <div className='it_team_name'>
                                        <NavLink href="#" to="/profiledetails">
                                            <h4>
                                                User name
                                            </h4>
                                            <h5>
                                                Designation
                                            </h5>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col>

                            
                            <Col lg="3" md="4" sm="12">
                                <div className="it_teammember_box">
                                    <div className="imgbox">
                                        <div className='imgbox_inner'>
                                            <NavLink href="#" to="/profiledetails">
                                                <LazyLoadImage effect="blur" src={teamMeber_img1} alt="Team Member" />
                                            </NavLink>
                                        </div>
                                        <div className='it_viewprofile'>
                                            <span className='it_sharebox'>
                                                <NavLink href="#" to="/profiledetails">
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </NavLink>
                                            </span>
                                            <ul className='navbar itsocialMenu'>
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
                                    <div className='it_team_name'>
                                        <NavLink href="#" to="/profiledetails">
                                            <h4>
                                                User name
                                            </h4>
                                            <h5>
                                                Designation
                                            </h5>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col> */}

                    {/* </Row> */}
                </div>
                {/* </Container> */}
            </div>
        </div>


    );
}


export function Civilourteams() {
    return (
        <div>
            <div className="it_teammember_block">
                <Container>
                    <div className='it_teammember_list'>
                        <Row>
                            <Col lg="3" md="4" sm="12">
                                <div className="it_teammember_box">
                                    <div className="imgbox">
                                        <div className='imgbox_inner'>
                                            <NavLink href="#" to="/profiledetails">
                                                <LazyLoadImage effect="blur" src={teamMeber_img1} alt="Team Member" />
                                            </NavLink>
                                        </div>
                                        <div className='it_viewprofile'>
                                            <span className='it_sharebox'>
                                                <NavLink href="#" to="/profiledetails">
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </NavLink>
                                            </span>
                                            <ul className='navbar itsocialMenu'>
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
                                    <div className='it_team_name'>
                                        <NavLink href="#" to="/profiledetails">
                                            <h4>
                                                User name
                                            </h4>
                                            <h5>
                                                Designation
                                            </h5>
                                        </NavLink>
                                    </div>
                                </div>
                            </Col>



                        </Row>
                    </div>
                </Container>
            </div>
        </div>


    );
}



export default Ourteams
