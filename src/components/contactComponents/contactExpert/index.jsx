
import React from 'react';
// import { useLocation } from "react-router-dom";

import './contactexpert.css';
import Expertcontact from './../../../assets/images/expertcontact.svg'
import { Container, Row, Col } from 'react-bootstrap';

import { LazyLoadImage } from 'react-lazy-load-image-component';
 
    
export default function ContactExpert({ titletext,subtitletext,subcontent  }) { 
    // const location = useLocation();

    return (
        <>
            <div>
 
                    <section className='it_contact_service'>
                        <Container>
                            <Row className='align-items-center'>
                                <Col lg="6" md="6" sm="12">
                                    <div className="it_contact_service_connect">
                                        <div className="it_iconbox">
                                            <LazyLoadImage effect="blur" src={Expertcontact} className='img-fluid' alt='Contact Expert' />
                                        </div>
                                        <div className="it_ctext">
                                            <h4>
                                                {/* Contact our experts */}
                                                {titletext}
                                            </h4>
                                            <h3>
                                                {/* Reach Out &amp; Connect */}
                                                {subtitletext}
                                            </h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6" md="6" sm="12">
                                    <div className="it_contact_service_info">
                                        {/* Looking for reliable Civil, Electrical, IT, Manufacturing, or Commercial solutions? Our team of experts is committed to delivering sustainable, eco-friendly, and energy-efficient services with modern technology and smart designs. Whether it’s construction, system integration, or commercial fit-outs, we ensure quality and innovation in every project. Reach out to us today and let’s work together to create a smarter and greener future. */}
                                        {subcontent}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section> 



            </div>
        </>
    )
}










