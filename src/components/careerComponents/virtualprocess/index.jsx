import React from 'react';
import './virtualprocess.css';



import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClock, faLaptop } from '@fortawesome/free-solid-svg-icons';


import Heading from '../../commonComponents/heading'; 


export default function Virtualprocess() {
    return (
        <>
            <div>
                <section className='it_virtualprocess_block'>
                    <Container>
                        <Heading headbg="interview" headtext="virtual interview" subheadtext="How to prepare for your virtual interview" textAlign="text-center" />
                        <Row>
                            <Col lg="4" md="6" sm="12">
                                <div className='it_process_item'>
                                    <div className='it_process_inner'>
                                        <div className='count'>
                                            <FontAwesomeIcon icon={faHouse} />
                                        </div>
                                        <p>
                                            Make sure your background is professional, the room is well-lit, and the environment is quiet.
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className='it_process_item'>
                                    <div className='it_process_inner'>
                                        <div className='count'>
                                            <FontAwesomeIcon icon={faClock} />
                                        </div>
                                        <p>
                                            Join the meeting 5 minutes early to test your video and audio.
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className='it_process_item'>
                                    <div className='it_process_inner'>
                                        <div className='count'>
                                            <FontAwesomeIcon icon={faLaptop} />
                                        </div>
                                        <h4>
                                        </h4>
                                        <p>
                                            While speaking, look at the camera to keep the conversation engaging and natural.
                                        </p>
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
