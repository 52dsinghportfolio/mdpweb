import React from 'react';
import './ourmorals.css';

import moralIcon1 from './../../../assets/images/moralIcon1.png';
import moralIcon2 from './../../../assets/images/moralIcon2.png';
import moralIcon3 from './../../../assets/images/moralIcon3.png';
import moralIcon4 from './../../../assets/images/moralIcon4.png';
import moralIcon5 from './../../../assets/images/moralIcon5.png';
import moralIcon6 from './../../../assets/images/moralIcon6.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Container, Row, Col } from 'react-bootstrap';

import Heading from '../../commonComponents/heading';

export default function Ourmorals() {
    return (
        <>
            <div>

                <section className='it_ourmorals_block'>
                    <Container>
                        <Heading headbg="Morals" headtext="Our Morals" subheadtext="We keep this at the highest in our goals." textAlign="text-center" />
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_morals_item'>
                                    <div className='iconbox'>
                                        <LazyLoadImage effect="blur" src={moralIcon1} alt='Morals Icon' />
                                    </div>
                                    <div className='contant'>
                                        <h4>
                                            Ethics
                                        </h4>
                                        <p>
                                            At MDP Infra, ethics stand at the core of everything we do. We foster a fair, transparent, and responsible culture across the organization.
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <div className='it_morals_item'>
                                    <div className='iconbox'>
                                        <LazyLoadImage effect="blur" src={moralIcon2} alt='Morals Icon' />
                                    </div>
                                    <div className='contant'>
                                        <h4>
                                            Team Building
                                        </h4>
                                        <p>
                                            We believe strong teams build stronger futures. Through activities and interactions, we create a positive, collaborative, and engaging work environment.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_morals_item'>
                                    <div className='iconbox'>
                                        <LazyLoadImage effect="blur" src={moralIcon3} alt='Morals Icon' />
                                    </div>
                                    <div className='contant'>
                                        <h4>
                                            Training & Development
                                        </h4>
                                        <p>
                                            Continuous learning drives growth. At MDP Infra, we provide regular in-house and on-site training to sharpen skills and enhance quality.
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <div className='it_morals_item'>
                                    <div className='iconbox'>
                                        <LazyLoadImage effect="blur" src={moralIcon4} alt='Morals Icon' />
                                    </div>
                                    <div className='contant'>
                                        <h4>
                                            Integrity and Honesty
                                        </h4>
                                        <p>
                                            We value every individual we work with. We celebrate achievements and accept challenges with honesty, without compromising respect for one another.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_morals_item'>
                                    <div className='iconbox'>
                                        <LazyLoadImage effect="blur" src={moralIcon5} alt='Morals Icon' />
                                    </div>
                                    <div className='contant'>
                                        <h4>
                                            Innovation
                                        </h4>
                                        <p>
                                            Innovation fuels progress at MDP Infra. We encourage creative thinking and new perspectives, ensuring our solutions remain future-ready.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_morals_item'>
                                    <div className='iconbox'>
                                        <LazyLoadImage effect="blur" src={moralIcon6} alt='Morals Icon' />
                                    </div>
                                    <div className='contant'>
                                        <h4>
                                            Passion
                                        </h4>
                                        <p>
                                            Passion defines our journey. Our love for technology, dedication to excellence, and drive to face challenges help us earn lasting trust from our clients.
                                        </p>
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
