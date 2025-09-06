import React from 'react';
import './hiringprocess.css';



import { Container, Row, Col } from 'react-bootstrap';

import Heading from '../../commonComponents/heading';
import { NavLink } from 'react-router-dom';

export default function Hiringprocess() {
    return (
        <>
            <div> 
                <section className='it_hiringprocess_block'>
                    <Container>
                        <Heading headbg="Process" headtext="Our hiring process" subheadtext="Creative, ambitious, and purpose-driven? Our hiring process connects your talent with the right opportunities to thrive." textAlign="text-center" />
                        <Row>
                            <Col lg="3" md="6" sm="12">
                                <div className='it_process_item'>
                                    <div className='count'>
                                        01.
                                    </div>
                                    <h4>
                                        Apply Online
                                    </h4>
                                    <p>  
                                        Start your journey by submitting your application through our Career Portal, matching your skills with the right opportunity.<NavLink to="/career/job-openings/">career portal</NavLink>
                                    </p>
                                </div>
                            </Col>

                            <Col lg="3" md="6" sm="12">
                                <div className='it_process_item'>
                                    <div className='count'>
                                        02.
                                    </div>
                                    <h4>
                                        Screening
                                    </h4>
                                    <p>
                                        Our recruitment team carefully reviews your profile, experience, and qualifications to ensure the best fit.
                                    </p>
                                </div>
                            </Col>

                            <Col lg="3" md="6" sm="12">
                                <div className='it_process_item'>
                                    <div className='count'>
                                        03.
                                    </div>
                                    <h4>
                                        Interviews
                                    </h4>
                                    <p>
                                        Shortlisted candidates go through technical and HR discussions where you can showcase your expertise and passion. 
                                    </p>
                                </div>
                            </Col>

                            <Col lg="3" md="6" sm="12">
                                <div className='it_process_item'>
                                    <div className='count'>
                                        04.
                                    </div>
                                    <h4>
                                        Offer & Onboarding
                                    </h4>
                                    <p>
                                        Once selected, you’ll receive an offer letter, followed by a smooth onboarding process to begin your career with MDP Infra. <NavLink href='#' to='/career/job-openings/'> contact us</NavLink>.
                                    </p>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}
