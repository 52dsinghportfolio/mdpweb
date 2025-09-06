import React, { useState } from "react";

import ISO__MDP_9001 from './../../../assets/certificate/ISO__MDP_9001.pdf';
import ISOMDP9001 from './../../../assets/certificate/ISO__MDP_9001.jpg';


import ISO_27001_2013 from './../../../assets/certificate/ISO_27001_2013.pdf';
import ISO270012013 from './../../../assets/certificate/ISO_27001_2013.jpg';

 
import ISO_MDP_14001 from './../../../assets/certificate/ISO_MDP_14001.pdf';
import ISOMDP14001 from './../../../assets/certificate/ISO_MDP_14001.jpg';


import ISO_MDP_45001 from './../../../assets/certificate/ISO_MDP_45001.pdf';
import ISOMDP45001 from './../../../assets/certificate/ISO_MDP_45001.jpg';
 



import ISO_MDP_140011 from './../../../assets/certificate/ISO_MDP_140011.pdf';
import ISOMDP140011 from './../../../assets/certificate/ISO_MDP_140011.jpg';


import ISO_MDP_CMMIL3 from './../../../assets/certificate/ISO_MDP_CMMIL3.pdf';
import ISOMDPCMMIL3 from './../../../assets/certificate/ISO_MDP_CMMIL3.jpg';
 





import { Container, Row, Col, Button } from 'react-bootstrap';
import Heading from '../../commonComponents/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';



export function Certificatesinfo() {
    return (
        <div>
            <section className="it_certification_main">
                <Container>
                    <Heading
                        headbg="Certification"
                        headtext="Our Certifications"
                        subheadtext="Committed to Quality, Safety & Sustainability"
                        textAlign="text-center"
                    />
                    <Row>
                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISOMDP9001} alt="Certification images" /> 
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        ISO 9001:2015
                                    </h6>
                                    <h4> 
                                        Design, plaining & Construction of civil  Infrastruture, Eletrical Infrastruture System, IT  Infrastruture
                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO__MDP_9001}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISO270012013} alt="Certification images" />
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        ISO 27001:2013 
                                    </h6>
                                    <h4>
                                        Design, plaining & Construction of civil Infrastruture, Eletrical Infrastruture System, IT Infrastruture

                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO_27001_2013}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISOMDP14001} alt="Certification images" />
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        ISO 14001:2015
                                    </h6>
                                    <h4>
                                        Design, plaining & Construction of civil Infrastruture, Eletrical Infrastruture System, IT Infrastruture

                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO_MDP_14001}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISOMDP45001} alt="Certification images" />
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        ISO 45001:2018
                                    </h6>
                                    <h4>
                                        Design, plaining & Construction of civil Infrastruture, Eletrical Infrastruture System, IT Infrastruture

                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO_MDP_45001}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>
                        
                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISOMDP140011} alt="Certification images" />
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        ISO 20000-1:2018
                                    </h6>
                                    <h4>
                                        Design, plaining & Construction of civil Infrastruture, Eletrical Infrastruture System, IT Infrastruture

                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO_MDP_140011}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISOMDPCMMIL3} alt="Certification images" />
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        CMMI Maturity Level 3
                                    </h6>
                                    <h4>
                                        Design, plaining & Construction of civil Infrastruture, Eletrical Infrastruture System, IT Infrastruture

                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO_MDP_CMMIL3}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </div>

    );
}




export  function Civilcertificatesinfo() {
    return (
        <div>
            <section className="it_certification_main">
                <Container>
                    <Heading
                        headbg="Certification"
                        headtext="Our Civil Certifications"
                        subheadtext="Certified Standards in Quality and Safety"
                        textAlign="text-center"
                    />
                    <Row>
                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISOMDP9001} alt="Certification images" /> 
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        ISO 9001:2015
                                    </h6>
                                    <h4> 
                                        Design, plaining & Construction of civil  Infrastruture, Eletrical Infrastruture System, IT  Infrastruture
                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO__MDP_9001}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISO270012013} alt="Certification images" />
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        ISO 27001:2013 
                                    </h6>
                                    <h4>
                                        Design, plaining & Construction of civil Infrastruture, Eletrical Infrastruture System, IT Infrastruture

                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO_27001_2013}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISOMDP14001} alt="Certification images" />
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        ISO 14001:2015
                                    </h6>
                                    <h4>
                                        Design, plaining & Construction of civil Infrastruture, Eletrical Infrastruture System, IT Infrastruture

                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO_MDP_14001}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISOMDP45001} alt="Certification images" />
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        ISO 45001:2018
                                    </h6>
                                    <h4>
                                        Design, plaining & Construction of civil Infrastruture, Eletrical Infrastruture System, IT Infrastruture

                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO_MDP_45001}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>
                        
                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISOMDP140011} alt="Certification images" />
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        ISO 20000-1:2018
                                    </h6>
                                    <h4>
                                        Design, plaining & Construction of civil Infrastruture, Eletrical Infrastruture System, IT Infrastruture

                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO_MDP_140011}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" sm="12">
                            <div className="it_certification_items">
                                <div className="it_imgbox">
                                    <LazyLoadImage effect="blur" src={ISOMDPCMMIL3} alt="Certification images" />
                                </div>
                                <div className="it_contents">
                                    <h6>
                                        CMMI Maturity Level 3
                                    </h6>
                                    <h4>
                                        Design, plaining & Construction of civil Infrastruture, Eletrical Infrastruture System, IT Infrastruture

                                    </h4>
                                    <a target="_blank" className="it_links" href={ISO_MDP_CMMIL3}>
                                        View Certificate
                                        <FontAwesomeIcon icon={faArrowRight} /> 
                                    </a>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </div>

    );
}

export default Certificatesinfo