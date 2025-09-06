

import React, { useEffect } from 'react';
import './ourworkprocess.css';
import Heading from '../../commonComponents/heading';

import { Container, Row, Col } from 'react-bootstrap';
 
import processShape from './../../../assets/images/it_workprocess_shape.png'
import workicon1 from './../../../assets/images/workstepicon1.svg'
import workicon2 from './../../../assets/images/workstepicon2.svg'
import workicon3 from './../../../assets/images/workstepicon3.svg'
import workicon4 from './../../../assets/images/workstepicon4.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Ourworkprocess() {

    return (
        <>
            <div>


                <section className="it_workprocess_block">
                    <Heading headbg="Works" headtext="How It Works" subheadtext="Our Work Process" textAlign="text-center" />
                    <Container>
                        <div className="it_workprocess_lists">
                            <Row className="row align-items-center">
                                <Col lg="3" md="6" sm="12">
                                    <div className="it_workprocess_item">
                                        <div className='it_workprocess_inner'>
                                            <div className="it_workprocess_shape">
                                                <LazyLoadImage effect="blur" src={processShape} alt='process shape' className="img-fluid" />
                                            </div>
                                            <div className="it_workprocess_icon">
                                                <LazyLoadImage effect="blur" src={workicon1} alt='Work step img' className="img-fluid" />
                                            </div>
                                            <span className="it_workprocess_subtitle"> 01  </span>
                                            <h4 className="it_workprocess_title"> Choose a Service</h4>
                                            <p>
                                                Select the solution that best fits your goals, and let our team handle the rest with precision.
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg="3" md="6" sm="12">
                                    <div className="it_workprocess_item">
                                        <div className='it_workprocess_inner'>
                                            <div className="it_workprocess_shape">
                                                <LazyLoadImage effect="blur" src={processShape} alt='process shape' className="img-fluid" />
                                            </div>
                                            <div className="it_workprocess_icon">
                                                <LazyLoadImage effect="blur" src={workicon2} alt='Work step img' className="img-fluid" />
                                            </div>
                                            <span className="it_workprocess_subtitle"> 02 </span>
                                            <h4 className="it_workprocess_title"> Request a Meeting </h4>
                                            <p>
                                                Request a meeting with our team and take the first step toward smart collaboration.
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg="3" md="6" sm="12">
                                    <div className="it_workprocess_item">
                                        <div className='it_workprocess_inner'>
                                            <div className="it_workprocess_shape">
                                                <LazyLoadImage effect="blur" src={processShape} alt='process shape' className="img-fluid" />
                                            </div>
                                            <div className="it_workprocess_icon">
                                                <LazyLoadImage effect="blur" src={workicon3} alt='Work step img' className="img-fluid" />
                                            </div>
                                            <span className="it_workprocess_subtitle"> 03 </span>
                                            <h4 className="it_workprocess_title"> Receive Custom Plan </h4>
                                            <p>
                                                Our experts will carefully analyze your requirements and craft a custom plan tailored to your specific goals.


                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg="3" md="6" sm="12">
                                    <div className="it_workprocess_item">
                                        <div className='it_workprocess_inner'>
                                            <div className="it_workprocess_shape">
                                                <LazyLoadImage effect="blur" src={processShape} alt='process shape' className="img-fluid" />
                                            </div>
                                            <div className="it_workprocess_icon">
                                                <LazyLoadImage effect="blur" src={workicon4} alt='Work step img' className="img-fluid" />
                                            </div>
                                            <span className="it_workprocess_subtitle">04</span>
                                            <h4 className="it_workprocess_title"> Let’s Make it Happen </h4>
                                            <p>
                                                Our team blends creativity, strategy, and expertise to bring your vision to life — guiding you every step toward success.
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






