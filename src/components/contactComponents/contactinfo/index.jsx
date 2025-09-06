
import React from 'react';
import './contactinfo.css';
import Heading from '../../commonComponents/heading';
import { Container, Row, Col } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationArrow, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { NavLink } from 'react-router-dom';



export default function Contactinfo({ emailText, phoneText, addressText }) {
    return (
        <>
            <div>


                <section className='it_locationbranch_block'>
                    <Container>
                        <Heading headbg="BRANCES" headtext="Contact Info" subheadtext="Visit another branch offices" />
                        <div className='it_branch_information'>
                            <Row>
                                <Col lg="4" md="4" sm="12">
                                    <div className='media it_brs_item'>
                                        <div className='it_iconbox'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className='it_content'>
                                            <h4>
                                                Email
                                            </h4>
                                            <p>
                                                {emailText}
                                            </p>
                                        </div>
                                    </div>
                                </Col>


                                <Col lg="4" md="4" sm="12">
                                    <div className='media it_brs_item'>
                                        <div className='it_iconbox'>
                                            <FontAwesomeIcon icon={faPhoneFlip} />
                                        </div>
                                        <div className='it_content'>
                                            <h4>
                                                Phone Number
                                            </h4>
                                            <p>
                                                {phoneText}
                                            </p>
                                        </div>
                                    </div>
                                </Col>


                                <Col lg="4" md="4" sm="12">
                                    <div className='media it_brs_item'>
                                        <div className='it_iconbox'>
                                            <FontAwesomeIcon icon={faLocationArrow} />
                                        </div>
                                        <div className='it_content'>
                                            <h4>
                                                Address
                                            </h4>
                                            <p>
                                                {addressText}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>



            </div >
        </>
    )
}

