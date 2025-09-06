import React from 'react';
import './services.css';
import Pagebanner from '../../components/commonComponents/pageBanner/pagebanner';


import custructionimg from './../../assets/images/custructionimg.jpeg';
import basebuildImg from './../../assets/images/buildimg.avif';
import basebuild1 from './../../assets/images/basebuild1.jpg';
import basebuild2 from './../../assets/images/wearhouse.jpeg';


import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faClock, faLaptop } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Heading from '../../components/commonComponents/heading';


export default function Civilservices() {
    return (
        <>
            <div>
                <Pagebanner titletext="Our Expertise in Construction" subtitletext="At MDP Infra, we offer a comprehensive suite of construction solutions—ranging from large-scale contracting to specialized interior fit-outs. Our strength lies in combining technical precision with design sensitivity, ensuring that every project we deliver is both structurally sound and visually inspiring." imageUrls={custructionimg} />

                <section className='it_servicesinfo_main'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Building" headtext="General Contracting" subheadtext='"Building the Foundations of Tomorrow"' textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            We undertake end-to-end base-build construction projects across residential, institutional, and commercial sectors.
                                        </p>
                                        <h4>
                                            Our services include:
                                        </h4>
                                        <ul className='it_listitem'>
                                            <li className='nav-item'>
                                                <p>
                                                    Core & shell construction
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Structural works
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    MEP installations (Mechanical, Electrical & Plumbing)
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    External development and site infrastructure
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Quality and safety management
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Turnkey project delivery
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='it_blocks_items'>
                                        <h4>
                                            Value Proposition:
                                        </h4>
                                        <p>
                                            With ISO-certified processes and a track record of timely delivery, we are trusted partners for clients seeking scale, durability, and efficiency in construction.
                                        </p>
                                    </div>

                                    <div className='form-group'>
                                        <div className='text-left'>
                                            <NavLink href='#' to="/civil/portfolio" className='it_submitbtn'>
                                                View Portfolio
                                                <FontAwesomeIcon icon={faAngleDoubleRight} className='ml-2' />
                                            </NavLink>


                                            <NavLink href='#' to="/" className='it_submitbtn'>
                                                Request Consultation
                                                <FontAwesomeIcon icon={faAngleDoubleRight} className='ml-2' />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={basebuildImg} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className='it_servicesinfo_main it_servicesinfo_main1 it_servicesinfo_white'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={basebuild1} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Shaping" headtext="Fit-outs" subheadtext='"Shaping Spaces That Inspire"' textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            Our fit-out division brings design visions to life with precision and craftsmanship. Backed by leadership experience working with brands such as Barclays, Snapchat,
                                        </p>
                                        <h4>
                                            Gucci, Lyskraft, and E+H, we specialize in:
                                        </h4>
                                        <ul className='it_listitem'>
                                            <li className='nav-item'>
                                                <p>
                                                    Corporate office interiors
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Retail and flagship store fit-outs
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    High-end residential interiors
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    False ceilings, flooring, partitions & joinery
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Integrated MEP for interiors
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Fast-track turnkey delivery
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='it_blocks_items'>
                                        <h4>
                                            Value Proposition:
                                        </h4>
                                        <p>
                                            Value Proposition: We pride ourselves on attention to detail, seamless design coordination, and on-time handovers, ensuring every space is as functional as it is aesthetic.
                                        </p>
                                    </div>

                                    <div className='form-group'>
                                        <div className='text-left'>
                                            <NavLink href='#' to="/civil/portfolio" className='it_submitbtn'>
                                                View Portfolio
                                                <FontAwesomeIcon icon={faAngleDoubleRight} className='ml-2' />
                                            </NavLink>


                                            <NavLink href='#' to="/" className='it_submitbtn'>
                                                Request Consultation
                                                <FontAwesomeIcon icon={faAngleDoubleRight} className='ml-2' />
                                            </NavLink>
                                        </div>
                                    </div>


                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className='it_servicesinfo_main'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Warehouse" headtext="Warehouse Construction Services" subheadtext='"Warehouse Construction Services"' textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            We undertake end-to-end base-build construction projects across residential, institutional, and commercial sectors.
                                        </p>
                                        <h4>
                                            Our services include:
                                        </h4>
                                        <ul className='it_listitem'>
                                            <li className='nav-item'>
                                                <p>
                                                    Core & shell construction
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Structural works
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    MEP installations (Mechanical, Electrical & Plumbing)
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    External development and site infrastructure
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Quality and safety management
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Turnkey project delivery
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='it_blocks_items'>
                                        <h4>
                                            Value Proposition:
                                        </h4>
                                        <p>
                                            With ISO-certified processes and a track record of timely delivery, we are trusted partners for clients seeking scale, durability, and efficiency in construction.
                                        </p>
                                    </div>

                                    <div className='form-group'>
                                        <div className='text-left'>
                                            <NavLink href='#' to="/civil/portfolio" className='it_submitbtn'>
                                                View Portfolio
                                                <FontAwesomeIcon icon={faAngleDoubleRight} className='ml-2' />
                                            </NavLink>


                                            <NavLink href='#' to="/" className='it_submitbtn'>
                                                Request Consultation
                                                <FontAwesomeIcon icon={faAngleDoubleRight} className='ml-2' />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={basebuild2} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


            </div>
        </>
    )
}




