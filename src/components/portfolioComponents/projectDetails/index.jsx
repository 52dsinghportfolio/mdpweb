import React, { useState } from "react";

// import projectdetailsimg from './../../../assets/images/projectdetails.jpeg';
// import projectcimg from './../../../assets/images/sliderimg1.jpg';
import widget_bannerimg from './../../../assets/images/widget_banner.jpg';


import { Container, Row, Col, Button, Card, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUsers, faAngleDoubleRight, faFolder, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import Heading from "../../commonComponents/heading";
import { LazyLoadImage } from 'react-lazy-load-image-component';



import projectinfo from './../../../assets/images/projectinfo.jpg';




export default function Projectdetails() {

    return (
        <div>
            <section className="it_projectinfo_main">
                <Heading
                    headbg="Project Info"
                    headtext="Introduce Our Projects"
                    subheadtext="Introduce Our Projects"
                    textAlign="text-center"
                />
                <Container>
                    <Row>
                        <Col lg="8" md="7" sm="12" >
                            <div className="it_project_items">
                                {/* <div className="it_imgbox" style={{ backgroundImage: `url(${projectinfo})` }} > </div> */}
                                <div className="it_imgbox" >
                                    <LazyLoadImage effect="blur" src={projectinfo} alt='Project Image' className="img-fluid" />
                                </div>
                                <div className="form-group mb-2">
                                    <h4>
                                        Configuration
                                    </h4>
                                    <p>
                                        Lower ground—media hall, servant quarters; Ground—canteen, reception lobby, four general-secretary chambers; First floor—President's Office, conference hall; Second & third floors—20 rooms, including President's suite and Working President's suite, plus 18 general offices.
                                    </p>
                                </div>

                                <div className="it_accordianbox">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                Client & Developer
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Bharat Rashtra Samithi (BRS); project commissioned by the party's leadership for its Central Office in Delhi.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                Area
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Built on approx. 11,000 sq ft over four storeys (lower ground + ground + 3 upper floors) according to Vastu principles.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                Timeline
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Foundation laid in 2022 (Vasant Vihar plot allotted by Centre), formally inaugurated by BRS President K. Chandrashekhar Rao in May 2023 at 1:05 PM IST.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>


                                <div className="it_projectcard">
                                    <div className="card_header">
                                        <h4>
                                            Scope of Works
                                        </h4>
                                    </div>
                                    <div className="card0body">
                                        <p>
                                            Comprehensive interior fit-out, civil works, structural work, electrical installations, plumbing, HVAC, fire safety systems, finishing (flooring, painting, tiling), exterior landscaping, and custom furniture fabrication for all four floors, including specialized areas like the media hall and presidential suites.
                                        </p>
                                        <Row>
                                            <Col lg="4" md="4" sm="12" >
                                                <div className="imgcontent">
                                                    <LazyLoadImage effect="blur" src={projectinfo} alt='Project Image' className="img-fluid" />
                                                </div>
                                            </Col>
                                            <Col lg="4" md="4" sm="12" >
                                                <div className="imgcontent">
                                                    <LazyLoadImage effect="blur" src={projectinfo} alt='Project Image' className="img-fluid" />
                                                </div>
                                            </Col>
                                            <Col lg="4" md="4" sm="12" >
                                                <div className="imgcontent">
                                                    <LazyLoadImage effect="blur" src={projectinfo} alt='Project Image' className="img-fluid" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="5" sm="12" >
                            <Card className="it_card_block">
                                <Card.Title>
                                    Project Information
                                </Card.Title>
                                <Card.Body>
                                    <div className="d-flex align-items-center it_prinfo_item">
                                        <span className="it_iconbox">
                                            <FontAwesomeIcon icon={faUsers} />
                                        </span>
                                        <div className="it_context">
                                            <h6>
                                                Client & Developer :
                                            </h6>
                                            <h5>
                                                Bharat Rashtra Samithi (BRS)
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center it_prinfo_item">
                                        <span className="it_iconbox">
                                            <FontAwesomeIcon icon={faFolder} />
                                        </span>
                                        <div className="it_context">
                                            <h6>
                                                Category:
                                            </h6>
                                            <h5>
                                                Civil Project
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center it_prinfo_item">
                                        <span className="it_iconbox">
                                            <FontAwesomeIcon icon={faBusinessTime} />
                                        </span>
                                        <div className="it_context">
                                            <h6>
                                                Date:
                                            </h6>
                                            <h5>
                                                2022  - 2023
                                            </h5>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>


                            <div className="it_getquotes" style={{ background: `url(${widget_bannerimg})` }}>
                                <div className="it_innerbox">
                                    <h4>
                                        Contact Us Now
                                    </h4>
                                    <h3>
                                        You need a Help ?
                                    </h3>
                                    <div className='text-right'>
                                        <span className='it_submitbtn' style={{ display: location.pathname === "/aboutus" ? "none" : "block" }}>
                                            GET A QUOTE
                                            <FontAwesomeIcon icon={faAngleDoubleRight} className='ml-2' />
                                        </span>
                                    </div>
                                </div>
                            </div>


                        </Col>
                    </Row>


                </Container>
            </section>
        </div>









    );
}
