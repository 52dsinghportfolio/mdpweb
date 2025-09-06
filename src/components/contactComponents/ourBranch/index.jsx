
import React from 'react';
import './ourbranch.css';
import Heading from '../../commonComponents/heading';
import branchImg1 from './../../../assets/images/mdpbhopal.jpeg';
import branchImg2 from './../../../assets/images/mdpbhopal.jpeg';
import branchImg3 from './../../../assets/images/mdpbhopal.jpeg';
import { Container, Row, Col } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faLocationArrow,faPhoneFlip,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { NavLink } from 'react-router-dom';

 

export default function Ourbranch({ emailText, phoneText, addressText }) {
    return (
        <>
            <div> 
                <section className='it_ourbranch_block'>
                    <Container>
                        <Heading headbg="BRANCES" headtext="Our Branches" subheadtext="Visit another branch offices" />
                        <Row>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_branch_item'>
                                    <div className='it_inner_item'>
                                        <div className='imgbox'>
                                            <LazyLoadImage effect="blur" src={branchImg1} alt='MDP Image' className='img-fluid' />
                                        </div>
                                        <div className='it_content'>
                                            <h4>
                                                Gwalior
                                            </h4>
                                            <h6>
                                                Head Office
                                            </h6>
                                            <p>
                                                <div className='it_texts'>
                                                    MDP-House, 464-465, Thatipur, Gwalior (M.P.) India
                                                </div>
                                                <div className='it_texts'>
                                                    <NavLink> 0751-2435389 </NavLink>
                                                </div>
                                                <div className='it_texts'>
                                                    <NavLink className='it_locationbtn'>
                                                        See Location
                                                        <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                                    </NavLink>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg="4" md="4" sm="12">
                                <div className='it_branch_item active'>
                                    <div className='it_inner_item '>
                                        <div className='imgbox'>
                                            <LazyLoadImage effect="blur" src={branchImg2} alt='MDP Image' className='img-fluid' />
                                        </div>
                                        <div className='it_content'>
                                            <h4>
                                                Bhopal
                                            </h4>
                                            <h6>
                                                Corporate Office
                                            </h6>
                                            <p>
                                                <div>
                                                    A-50, Govindpura Industries Area, Bhopal (M.P.) India
                                                </div>
                                                <div>
                                                    <NavLink> 0755-4929874 </NavLink>
                                                </div>
                                                <div>
                                                    <NavLink className='it_locationbtn'>
                                                        See Location
                                                        <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                                    </NavLink>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <Col lg="4" md="4" sm="12">
                                <div className='it_branch_item'>
                                    <div className='it_inner_item'>
                                        <div className='imgbox'>
                                            <LazyLoadImage effect="blur" src={branchImg3} alt='MDP Image' className='img-fluid' />
                                        </div>
                                        <div className='it_content'>
                                            <h4>
                                                New Delhi
                                            </h4>
                                            <h6>
                                                Regional Office
                                            </h6>
                                            <p>
                                                <div>
                                                    LGF-75, Uday Park, South Extension, New Delhi
                                                </div>
                                                <div>
                                                    <NavLink> 011-40505943, 40502618 </NavLink>
                                                </div>
                                                <div>
                                                    <NavLink className='it_locationbtn'>
                                                        See Location
                                                        <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                                    </NavLink>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>



            </div>
        </>
    )
}

