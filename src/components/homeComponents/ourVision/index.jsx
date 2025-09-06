

import React, { useEffect } from 'react';
import './ourvision.css';
import Heading from '../../commonComponents/heading';

import { Container, Row, Col } from 'react-bootstrap';
import serviceImg1 from './../../../assets/images/service-icon1.svg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Ourvision() {

    return (
        <>
            <div>


                <section className="it_ourvison_block">
                    <Container>
                        <Row className="row align-items-center">
                            <Col lg="6" md="6" sm="12">
                                <Heading headbg="Service" headtext="Know about our services" subheadtext="Expert IT Services Designed To Elevate Your Business" textAlign="text-left" />
                                <p>
                                    We provide reliable and efficient delivery, leveraging top-notch experts and finely-tuned software development procedures. Our reusable code libraries and solutions allow you to save up to 30% of your time, enhancing efficiency.
                                </p>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <div className="card_stack_animation d-flex align-items-center justify-content-center">
                                    <div className="card_loading">
                                        <div className="card_box_success" style={{ "--i": 1 }}>
                                            <div className="success_box">
                                                <div className="su_box_img">

                                                </div>
                                                <div className="succ_content">
                                                    <h3 className="lh-sm mb-3">
                                                        Real-time Team collaboration
                                                    </h3>
                                                    <p className="lh-base fw-light">
                                                        We guarantee three hours of overlapping work time with your internal staff, ensuring seamless integration.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>




                                        <div className="card_box_success" style={{ "--i": 2 }}>
                                            <div className="success_box">
                                                <div className="su_box_img">
                                                </div>
                                                <div className="succ_content">
                                                    <h3 className="lh-sm mb-3">
                                                        IP protection
                                                    </h3>
                                                    <p className="lh-base fw-light">
                                                        Full protection of your ideas and intellectual property through NDAs and non-compete agreements.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card_box_success" style={{ "--i": 3 }}>
                                            <div className="success_box mb-md-0">
                                                <div className="su_box_img">

                                                </div>
                                                <div className="succ_content">
                                                    <h3 className="lh-sm mb-3">
                                                        Handpick and Monitor team
                                                    </h3>
                                                    <p className="lh-base fw-light">
                                                        Review code samples or conduct interviews to select the right fit for your team. Track progress through daily standups, weekly sprints, and demos. We're flexible in using project management systems you prefer, such as Jira, Asana, Monday, Zoho, and Rally.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card_box_success" style={{ "--i": 4 }}>
                                            <div className="success_box">

                                                <div className="su_box_img">

                                                </div>
                                                <div className="succ_content">
                                                    <h3 className="lh-sm mb-3">
                                                        Software Architecture & Scale
                                                    </h3>
                                                    <p className="lh-base fw-light">
                                                        We've designed scalable and easily manageable software solutions tailored for startups that cater to millions of clients.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card_box_success" style={{ "--i": 5 }}>
                                            <div className="success_box mb-md-0">

                                                <div className="su_box_img">

                                                </div>
                                                <div className="succ_content">
                                                    <h3 className="lh-sm mb-3">
                                                        Handpick and Monitor team
                                                    </h3>
                                                    <p className="lh-base fw-light">
                                                        Review code samples or conduct interviews to select the right fit for your team. Track progress through daily standups, weekly sprints, and demos. We're flexible in using project management systems you prefer, such as Jira, Asana, Monday, Zoho, and Rally.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card_box_success" style={{ "--i": 6 }}>
                                            <div className="success_box">
                                                <div className="su_box_img">


                                                </div>
                                                <div className="succ_content">
                                                    <h3 className="lh-sm mb-3">
                                                        Software Architecture & Scale
                                                    </h3>
                                                    <p className="lh-base fw-light">
                                                        We've designed scalable and easily manageable software solutions tailored for startups that cater to millions of clients.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>



                        </Row>
                    </Container>
                </section>




            </div >
        </>
    )
}






