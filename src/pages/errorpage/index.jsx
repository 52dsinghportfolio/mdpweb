import React from 'react';
import './error.css';


import errorimg from './../../assets/images/404.gif';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHome } from '@fortawesome/free-solid-svg-icons';


import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Errorpage() {
    return (
        <>
            <div>
                <section className='it_eroorcode_block'>
                    <Container>
                        <Row>
                            <Col lg="6" md="12" sm="12">
                                <div className='error_contants'>
                                    <h5>
                                        Error Code : 404
                                    </h5>
                                    <h4>
                                        Ooops! Something's missing...
                                    </h4>
                                    <h3>
                                        It seems we couldn’t find what you were looking for. The page you requested doesn’t exist, isn’t available, or may have loaded incorrectly.
                                    </h3>

                                    <div className='form-group'>
                                        <NavLink className='it_submitbtn' to="/home">
                                            Home
                                            <FontAwesomeIcon className='mr-2' icon={faHome} /> 
                                            {/* <FontAwesomeIcon className='ml-2' icon={faArrowRight} /> */}
                                        </NavLink>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="12" sm="12">
                                <div className='imgbox'>
                                    <LazyLoadImage effect="blur" src={errorimg} className='img-fluid' alt='Error Image' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}








