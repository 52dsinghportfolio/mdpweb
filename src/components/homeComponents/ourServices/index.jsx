

import React, { useEffect } from 'react';
import './ourservices.css';
import Heading from '../../commonComponents/heading';

import { Container, Row, Col } from 'react-bootstrap';
import serviceImg1 from './../../../assets/images/service-icon1.svg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';




import civilicon from './../../../assets/images/civilicon.svg';
import iticon from './../../../assets/images/iticon.svg';
import electricalicon from './../../../assets/images/electricalicon.svg';
import manufacturingicon from './../../../assets/images/manufacturingicon.svg';
import commercialicon from './../../../assets/images/commercialicon.svg';
import warehouseicon from './../../../assets/images/warehouseicon.svg';





export default function Ourservices() {

    return (
        <>
            <div>
                <section className="it_ourservices_block">
                    <Heading headbg="Services" headtext="Our services Offered" subheadtext="We offer the full spectrum of services to help organizations work better." textAlign="text-center" />
                    <Container>
                        <Row>
                            <Col lg="4" md="6" sm="12">
                                <div className="it_ourservices_boxs">
                                    <NavLink href="#" to="/civil/">
                                        <div className="it_icons">
                                            <LazyLoadImage effect="blur" src={civilicon} alt="Service Icon" />
                                        </div>
                                        <div className="it_arrow">
                                            <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                        </div>
                                        <h4>Civil Services </h4>
                                        <p>
                                            Construction of institutional buildings, housing projects, and industrial facilities
                                        </p>
                                        <p>
                                            Expertise in foundation engineering, masonry, and large-scale external development
                                        </p>
                                        <p>
                                            Proven track record with government and private sector projects across India
                                        </p>
                                        <div className="it_space24"></div>
                                        <h5>01</h5>
                                    </NavLink>
                                </div>
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="it_ourservices_boxs">
                                    <NavLink href="#" to="/civil/">
                                        <div className="it_icons">
                                            <LazyLoadImage effect="blur" src={electricalicon} alt="Service Icon" />
                                        </div>
                                        <div className="it_arrow">
                                            <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                        </div>
                                        <h4>Electrical Services </h4>
                                        <p>
                                            Energy-efficient electrical installations, compliant with international safety standards
                                        </p>
                                        <p>
                                            End-to-end solutions including HVAC, firefighting, lighting, and power distribution systems
                                        </p>
                                        <p>
                                            Extensive experience in RGGVY, RDSS, and other power distribution schemes
                                        </p>
                                        <div className="it_space24"></div>
                                        <h5>02</h5>
                                    </NavLink>
                                </div>
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="it_ourservices_boxs">
                                    <NavLink href="#" to="/civil/">
                                        <div className="it_icons">
                                            <LazyLoadImage effect="blur" src={commercialicon} alt="Service Icon" />
                                        </div>
                                        <div className="it_arrow">
                                            <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                        </div>
                                        <h4>
                                            Real Estate
                                        </h4>
                                        <p>
                                            We develop modern homes and commercial spaces that are comfortable, and customer-friendly.

                                        </p>
                                        <p>
                                            Every project is built with strong construction, modern architecture.

                                        </p>
                                        <p> 
                                            Our properties offer reliable growth, making them a safe and profitable investment for the future.
                                        </p>
                                        <div className="it_space24"></div>
                                        <h5>03</h5>
                                    </NavLink>
                                </div>
                            </Col>


                            <Col lg="4" md="6" sm="12">
                                <div className="it_ourservices_boxs">
                                    <NavLink href="#" to="/civil/">
                                        <div className="it_icons">
                                            <LazyLoadImage effect="blur" src={iticon} alt="Service Icon" />
                                        </div>
                                        <div className="it_arrow">
                                            <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                        </div>
                                        <h4>IT Management</h4>
                                        <p>
                                            Comprehensive IT infrastructure solutions
                                        </p>
                                        <p>
                                            Network setup and security, data management, and cloud services
                                        </p>
                                        <p>
                                            Tailored IT support for various business needs
                                        </p>

                                        <div className="it_space24"></div>
                                        <h5>04</h5>
                                    </NavLink>
                                </div>
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="it_ourservices_boxs">
                                    <NavLink href="#" to="/civil/">
                                        <div className="it_icons">
                                            <LazyLoadImage effect="blur" src={manufacturingicon} alt="Service Icon" />
                                        </div>
                                        <div className="it_arrow">
                                            <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                        </div>
                                        <h4>
                                            Manufacturing
                                        </h4>
                                        <p>
                                            Manufacturing facilities for distribution transformers (25–200 KVA) and pre-stressed concrete products
                                        </p>
                                        <p>
                                            Ability to deliver integrated, ready-to-install solutions for large-scale projects
                                        </p>
                                        <div className="it_space24"></div>
                                        <h5>05</h5>
                                    </NavLink>
                                </div>
                            </Col>


                            <Col lg="4" md="6" sm="12">
                                <div className="it_ourservices_boxs">
                                    <NavLink href="#" to="/civil/">
                                        <div className="it_icons">
                                            <LazyLoadImage effect="blur" src={warehouseicon} alt="Service Icon" />
                                        </div>
                                        <div className="it_arrow">
                                            <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                        </div>
                                        <h4>
                                            warehouse construction
                                        </h4>
                                        <p>
                                            Efficient design with proper layout & racking.
                                        </p>
                                        <p>
                                            Durable structure with RCC flooring & steel.
                                        </p>
                                        <p>
                                            Safety features: lighting, ventilation, fire system.
                                        </p>
                                        <div className="it_space24"></div>
                                        <h5>06</h5>
                                    </NavLink>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>
        </>
    )
}






