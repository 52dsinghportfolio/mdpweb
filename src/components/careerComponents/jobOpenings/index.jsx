import { React, useState } from 'react';
import './jobopenings.css';

import { Container, Row, Col, Accordion, Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock, faLaptop } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import jointeams from './../../../assets/images/teamjoin.jpg';


import Heading from '../../commonComponents/heading';
import Fromcontrol from '../../commonComponents/formControl';

export default function () {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>






                <section className='it_careerstep_block'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_step_item'>
                                    <Heading headbg="Looking" headtext="We Look For" subheadtext="What We Look For ?" textAlign="text-left" />
                                    <p>
                                        At MDP Infra, we map competencies and also check for compatibility to ensure you align with the values we uphold.
                                    </p>
                                    <h6>
                                        <b>
                                            Positive Attitude
                                            <br />
                                            Excellent Team Player
                                            <br />
                                            Strong Leadership Traits
                                            <br />
                                            Integrity & Commitment
                                        </b>
                                    </h6>
                                    <p>
                                        Build your career with us and make a lasting impact in the infrastructure industry. Be part of a team that transforms ideas into groundbreaking solutions.
                                    </p>
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





                <section className='it_jobopening_block'>
                    <Container>
                        <Heading headbg="openings" headtext="Join the Leaders" subheadtext="Your career is a story you can shape, grow, and rewrite with every opportunity" textAlign="text-center" />


                        <div className="it_accordianbox">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        Technical Project Manager
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='it_job_discruption'>
                                            <h2>
                                                Technical Project Manager
                                            </h2>

                                            <div className='form-group'>
                                                <h4>
                                                    Job Summary :-
                                                </h4>
                                                <p>
                                                    We are seeking a motivated and detail-oriented Technical Project Manager with 3 to 4 years of experience to lead and deliver software development projects. The ideal candidate will have a strong technical background, excellent project management skills, and the ability to bridge the gap between business and technical teams. You will oversee the full project lifecycle, ensuring timely delivery, resource alignment, and client satisfaction.
                                                </p>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Key Responsibilities :-
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p>
                                                            Plan, execute, and manage software development projects from initiation to closure.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Collaborate with cross-functional teams including developers, QA, designers, and business stakeholders.

                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Define project scope, goals, deliverables, and success criteria in collaboration with stakeholders..
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Develop detailed project plans, manage schedules, and ensure on-time delivery.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Identify and manage project risks, issues, and dependencies.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Required Skills & Qualifications :-
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p>
                                                            Plan, execute, and manage software development projects from initiation to closure.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Collaborate with cross-functional teams including developers, QA, designers, and business stakeholders.

                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Define project scope, goals, deliverables, and success criteria in collaboration with stakeholders..
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Develop detailed project plans, manage schedules, and ensure on-time delivery.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Identify and manage project risks, issues, and dependencies.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Location  :- <span> Bhopal </span>
                                                </h4>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Experience  :- <span> 3-4 Years </span>
                                                </h4>
                                            </div>

                                            <div className='form-group'>
                                                <Button className="it_submitbtn" onClick={handleShow}>
                                                    Apply
                                                    <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                                </Button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        MERN Stack Developer
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='it_job_discruption'>
                                            <h2>
                                                Technical Project Manager
                                            </h2>

                                            <div className='form-group'>
                                                <h4>
                                                    Job Summary :-
                                                </h4>
                                                <p>
                                                    We are seeking a motivated and detail-oriented Technical Project Manager with 3 to 4 years of experience to lead and deliver software development projects. The ideal candidate will have a strong technical background, excellent project management skills, and the ability to bridge the gap between business and technical teams. You will oversee the full project lifecycle, ensuring timely delivery, resource alignment, and client satisfaction.
                                                </p>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Key Responsibilities :-
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p>
                                                            Plan, execute, and manage software development projects from initiation to closure.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Collaborate with cross-functional teams including developers, QA, designers, and business stakeholders.

                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Define project scope, goals, deliverables, and success criteria in collaboration with stakeholders..
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Develop detailed project plans, manage schedules, and ensure on-time delivery.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Identify and manage project risks, issues, and dependencies.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Required Skills & Qualifications :-
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p>
                                                            Plan, execute, and manage software development projects from initiation to closure.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Collaborate with cross-functional teams including developers, QA, designers, and business stakeholders.

                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Define project scope, goals, deliverables, and success criteria in collaboration with stakeholders..
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Develop detailed project plans, manage schedules, and ensure on-time delivery.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Identify and manage project risks, issues, and dependencies.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Location  :- <span> Bhopal </span>
                                                </h4>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Experience  :- <span> 3-4 Years </span>
                                                </h4>
                                            </div>

                                            <div className='form-group'>
                                                <Button className="it_submitbtn" onClick={handleShow}>
                                                    Apply
                                                    <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                                </Button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        MERN Stack Developer
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='it_job_discruption'>
                                            <h2>
                                                Technical Project Manager
                                            </h2>

                                            <div className='form-group'>
                                                <h4>
                                                    Job Summary :-
                                                </h4>
                                                <p>
                                                    We are seeking a motivated and detail-oriented Technical Project Manager with 3 to 4 years of experience to lead and deliver software development projects. The ideal candidate will have a strong technical background, excellent project management skills, and the ability to bridge the gap between business and technical teams. You will oversee the full project lifecycle, ensuring timely delivery, resource alignment, and client satisfaction.
                                                </p>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Key Responsibilities :-
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p>
                                                            Plan, execute, and manage software development projects from initiation to closure.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Collaborate with cross-functional teams including developers, QA, designers, and business stakeholders.

                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Define project scope, goals, deliverables, and success criteria in collaboration with stakeholders..
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Develop detailed project plans, manage schedules, and ensure on-time delivery.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Identify and manage project risks, issues, and dependencies.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Required Skills & Qualifications :-
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p>
                                                            Plan, execute, and manage software development projects from initiation to closure.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Collaborate with cross-functional teams including developers, QA, designers, and business stakeholders.

                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Define project scope, goals, deliverables, and success criteria in collaboration with stakeholders..
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Develop detailed project plans, manage schedules, and ensure on-time delivery.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Identify and manage project risks, issues, and dependencies.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Location  :- <span> Bhopal </span>
                                                </h4>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Experience  :- <span> 3-4 Years </span>
                                                </h4>
                                            </div>

                                            <div className='form-group'>
                                                <Button className="it_submitbtn" onClick={handleShow}>
                                                    Apply
                                                    <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                                </Button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        MERN Stack Developer
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='it_job_discruption'>
                                            <h2>
                                                Technical Project Manager
                                            </h2>

                                            <div className='form-group'>
                                                <h4>
                                                    Job Summary :-
                                                </h4>
                                                <p>
                                                    We are seeking a motivated and detail-oriented Technical Project Manager with 3 to 4 years of experience to lead and deliver software development projects. The ideal candidate will have a strong technical background, excellent project management skills, and the ability to bridge the gap between business and technical teams. You will oversee the full project lifecycle, ensuring timely delivery, resource alignment, and client satisfaction.
                                                </p>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Key Responsibilities :-
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p>
                                                            Plan, execute, and manage software development projects from initiation to closure.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Collaborate with cross-functional teams including developers, QA, designers, and business stakeholders.

                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Define project scope, goals, deliverables, and success criteria in collaboration with stakeholders..
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Develop detailed project plans, manage schedules, and ensure on-time delivery.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Identify and manage project risks, issues, and dependencies.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Required Skills & Qualifications :-
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p>
                                                            Plan, execute, and manage software development projects from initiation to closure.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Collaborate with cross-functional teams including developers, QA, designers, and business stakeholders.

                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Define project scope, goals, deliverables, and success criteria in collaboration with stakeholders..
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Develop detailed project plans, manage schedules, and ensure on-time delivery.
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p>
                                                            Identify and manage project risks, issues, and dependencies.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Location  :- <span> Bhopal </span>
                                                </h4>
                                            </div>

                                            <div className='form-group'>
                                                <h4>
                                                    Experience  :- <span> 3-4 Years </span>
                                                </h4>
                                            </div>

                                            <div className='form-group'>
                                                <Button className="it_submitbtn" onClick={handleShow}>
                                                    Apply
                                                    <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                                                </Button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div className='it_jobemils_block'> 
                                "If your profile doesn’t match our current openings, no need to worry. Simply share your updated CV at the email ID below, and we’ll reach out when a suitable opportunity arises."
                                <br />
                                <NavLink href="#" className="it_link">
                                    hr@mdpinfra.in
                                </NavLink>
                            </div>
                        </div>
                    </Container>
                </section >








                <Modal show={show} onHide={handleClose} className='it_modalbox_block'>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Apply For job
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='it_apply_form'>
                            <h4>
                                Get in touch with us regarding
                            </h4>
                        </div>

                        <Form>
                            <Row>
                                <Col lg="6" md="6" sm="12">
                                    <Fromcontrol
                                        label="Full Name"
                                        name="name"
                                        as="input"
                                        placeholder="Enter your full name..."
                                    />
                                </Col>

                                <Col lg="6" md="6" sm="12">
                                    <Fromcontrol
                                        label="Monile Number"
                                        name="name"
                                        as="input"
                                        placeholder="Enter mobile number..."
                                    />
                                </Col>

                                <Col lg="6" md="6" sm="12">
                                    <Fromcontrol
                                        label="Email"
                                        name="name"
                                        as="input"
                                        placeholder="Enter email address..."
                                    />
                                </Col>
                                <Col lg="6" md="6" sm="12">
                                    <Fromcontrol
                                        label="Linkedin Profile"
                                        name="name"
                                        as="input"
                                        placeholder="Enter Linkedin address..."
                                    />
                                </Col>


                                <Col lg="12" md="12" sm="12">
                                    <Fromcontrol
                                        label="Linkedin Profile"
                                        name="name"
                                        as="input"
                                        typeinput="file"
                                        placeholder="Enter Linkedin address..."
                                    />
                                </Col>
                                <Col lg="12" md="12" sm="12">
                                    <Fromcontrol
                                        label="Message"
                                        name="name"
                                        as="textarea"
                                        placeholder="Enter message ..."
                                    />
                                </Col>
                            </Row>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="it_submitbtn it_closebtn" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="it_submitbtn" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        </>
    )
}
