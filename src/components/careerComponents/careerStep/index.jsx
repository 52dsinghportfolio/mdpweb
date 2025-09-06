import React from 'react';
import './careerstep.css';

// import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
// import joinbanner from './../../../assets/images/jointeam.png';
import jointeams from './../../../assets/images/teamjoin.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { NavLink } from 'react-router-dom';


import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../commonComponents/heading';

export default function CareerStep() {
    return (
        <>
            <div>

                <section className='it_careerstep_block'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_step_item'>
                                    <Heading headbg="Inspire" headtext="Empower. Inspire. Impact." subheadtext="Discover opportunities to make a difference and unleash
                                    your talent." textAlign="text-left" />
                                    <p>
                                        We believe that our success is the contribution of the varied erudite brains which work together to frame a team to deliver the best. We always strive for talent and capability rather just the papers. Mutual growth is what we seek in the people who wish to be an integral part of us. At MDP INFRA Private Limited, we believe in evolution that too together.
                                    </p>
                                    <NavLink className='it_submitbtn' to="/career/job-openings/">
                                        Search Jobs
                                        <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                    </NavLink> 
                                </div>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <div className='it_step_itemimg'>
                                    <LazyLoadImage effect="blur" src={jointeams} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>



            </div>
        </>
    )
}
