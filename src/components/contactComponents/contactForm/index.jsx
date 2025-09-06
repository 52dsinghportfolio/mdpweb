
import React, { useState } from 'react';
import './contactform.css';
import Heading from './../../commonComponents/heading';
import contactImg from './../../../assets/images/contactfbg.gif';
import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import Fromcontrol from '../../commonComponents/formControl';

import { LazyLoadImage } from 'react-lazy-load-image-component';


export function Contactform() {
    return (
        <>
            <div>
                <section className='it_contactform'>
                    <Container>
                        <Heading headbg="Contact" headtext="Contact Us" subheadtext="Fell free contact us toady and get your solution" />

                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={contactImg} alt='contact img' className='img-fluid' />
                                </div>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <div className='it_contactforms_block it_forms_block'>
                                    <h4>
                                        <span>Get in Touch</span>
                                    </h4>
                                    <p>
                                        Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours.
                                    </p>

                                    <Form>
                                        <Row>
                                            <Col lg="6" md="6" sm="12">
                                                <Fromcontrol
                                                    label="Name"
                                                    name="name"
                                                    as="input"
                                                    placeholder="Enter your name..."
                                                />
                                            </Col>

                                            <Col lg="6" md="6" sm="12">
                                                <Fromcontrol
                                                    label="Mobile No."
                                                    name="mnumber"
                                                    as="input"
                                                    placeholder="Enter mobile nnumber..."
                                                />
                                            </Col>

                                            <Col lg="6" md="6" sm="12">
                                                <Fromcontrol
                                                    label="Email"
                                                    name="email"
                                                    as="input"
                                                    placeholder="Enter email address..."
                                                />
                                            </Col>

                                            <Col lg="6" md="6" sm="12">
                                                <Fromcontrol
                                                    label="Subject"
                                                    name="subject"
                                                    as="input"
                                                    placeholder="Enter subject here..."
                                                />
                                            </Col>
                                        </Row>

                                        <Fromcontrol
                                            label="Message"
                                            name="subject"
                                            as="textarea"
                                            placeholder="Enter text here..."
                                        />

                                        <Form.Group className="form-group it_btn_group text-right">
                                            <Button variant="primary" type="submit" className='it_submitbtn'>
                                                Send Message
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>

            </div>
        </>
    )
}

export function CivilContactform() {
    const [selected, setSelected] = useState("clients");
    return (
        <>
            <div>
                <section className='it_contactform'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={contactImg} alt='contact img' className='img-fluid' />
                                </div>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <div className='it_contactforms_block it_forms_block'>
                                    <h4>
                                        <span>
                                            Get in Touch
                                        </span>
                                    </h4>

                                    <div className="it_services_radios">
                                        <div className="it_radio_block">
                                            <Form.Check
                                                type="radio"
                                                label="Consumer"
                                                name="userType"
                                                checked={selected === "clients"}
                                                onChange={() => setSelected("clients")}
                                            />
                                        </div>

                                        <div className="it_radio_block">
                                            <Form.Check
                                                type="radio"
                                                label="Vendors"
                                                name="userType"
                                                checked={selected === "vendors"}
                                                onChange={() => setSelected("vendors")}
                                            />
                                        </div>
                                    </div>

                                    <div className='it_client_form'>

                                    </div>

                                    <div className='it_vendore_form'>

                                    </div>

                                    {selected === "clients" && (
                                        <div className='it_client_form'>
                                            <h5>
                                                New Business Opportunities
                                            </h5>
                                            <p>
                                                Partner with Us on Your Next Project
                                            </p>
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
                                                            label="Company / Organization"
                                                            name="mnumber"
                                                            as="input"
                                                            placeholder="Enter Company / Organization..."
                                                        />
                                                    </Col>

                                                    <Col lg="6" md="6" sm="12">
                                                        <Fromcontrol
                                                            label="Email"
                                                            name="email"
                                                            as="input"
                                                            placeholder="Enter email address..."
                                                        />
                                                    </Col>
                                                    <Col lg="6" md="6" sm="12">
                                                        <Fromcontrol
                                                            label="Mobile Number"
                                                            name="mnumber"
                                                            as="input"
                                                            placeholder="Enter mobile no..."
                                                        />
                                                    </Col>

                                                    <Col lg="12" md="12" sm="12">
                                                        <div className='form-group'>
                                                            <label className="form-label">Type of Service</label>
                                                            <select className='form-control'>
                                                                <option> --Select Service --</option>
                                                                <option> General Contracting </option>
                                                                <option> Fit-outs </option>
                                                                <option> Both </option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Fromcontrol
                                                    label="Message"
                                                    name="subject"
                                                    as="textarea"
                                                    placeholder="Enter text here..."
                                                />

                                                <Form.Group className="form-group it_btn_group text-right">
                                                    <Button variant="primary" type="submit" className='it_submitbtn'>
                                                        Apply
                                                    </Button>
                                                </Form.Group>
                                            </Form>
                                        </div>

                                    )}

                                    {selected === "vendors" && (


                                        <div className='it_client_form'>
                                            <h5>
                                                Vendor Empanelment
                                            </h5>
                                            <p>
                                                Let’s Grow Together
                                            </p>
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
                                                            label="Company Name"
                                                            name="mnumber"
                                                            as="input"
                                                            placeholder="Enter Company name..."
                                                        />
                                                    </Col>

                                                    <Col lg="6" md="6" sm="12">
                                                        <Fromcontrol
                                                            label="Email"
                                                            name="email"
                                                            as="input"
                                                            placeholder="Enter email address..."
                                                        />
                                                    </Col>
                                                    <Col lg="6" md="6" sm="12">
                                                        <Fromcontrol
                                                            label="Mobile Number"
                                                            name="mnumber"
                                                            as="input"
                                                            placeholder="Enter mobile no..."
                                                        />
                                                    </Col>

                                                    <Col lg="12" md="12" sm="12">
                                                        <div className='form-group'>
                                                            <label className="form-label">Type of Service</label>
                                                            <select className='form-control'>
                                                                <option> --Select Service --</option>
                                                                <option> Civil Works </option>
                                                                <option> Electrical</option>
                                                                <option> Plumbing</option>
                                                                <option> Carpentry</option>
                                                                <option> Materials Supply</option>
                                                                <option> Others</option>
                                                            </select>
                                                        </div>
                                                    </Col>


                                                    <Col lg="12" md="12" sm="12">
                                                        <div className='form-group'>
                                                            <label className="form-label">
                                                                Past Experience
                                                            </label>
                                                            <input type='file' className='form-control' /> 
                                                        </div>
                                                    </Col>
                                                </Row> 
                                                <Form.Group className="form-group it_btn_group text-right">
                                                    <Button variant="primary" type="submit" className='it_submitbtn'>
                                                        Apply
                                                    </Button>
                                                </Form.Group>
                                            </Form>
                                        </div>

                                    )}
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>

            </div>
        </>
    )
}