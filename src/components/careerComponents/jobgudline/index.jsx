import React from 'react';
import './jobgudline.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Container } from 'react-bootstrap';

// import oppertunityimg from './../../../assets/images/oppertunityimg.jpg';


import Heading from '../../commonComponents/heading';

import { NavLink } from 'react-router-dom';
export default function Jobgudline() {
    return (
        <>
            <div>
                <section className='it_jobinstruction_block'>
                    <Container>
                        <Heading headbg="Instructions" headtext="Instructions For" subheadtext="Your next opportunity awaits" textAlign="text-center" />
                        <div className='flexbox it_jobinstruction_list'>
                            <div className='it_jobinstruction_item'>
                                <h4>
                                    How to Apply
                                </h4>
                                <ul>
                                    <li>
                                        <p>
                                            You must apply by sending an email to <NavLink href="#">hr@mdpinfra.in </NavLink> only.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Do not use the contact us form or any other email addresses listed on our website.
                                        </p>
                                    </li>
                                </ul>
                            </div>


                            <div className='it_jobinstruction_item'>
                                <h4>
                                    Email Application Format
                                </h4>
                                <ul>
                                    <li>
                                        <p>
                                            Subject of Email: Application For [Job Role] - [Fresher/Your Years of Experience] - [Your Current Location]
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Example: Application For [React.js Developer] - [3yrs] - [Bhopal]
                                        </p>
                                    </li>
                                </ul>
                            </div>


                            <div className='it_jobinstruction_item'>
                                <h4>
                                    Contacting HR
                                </h4>
                                <ul>
                                    <li>
                                        <p>
                                            If you need to speak with our Recruitment/HR Team, call us during working hours.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Do not call any other numbers listed on our website.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className='it_jobinstruction_item'>
                                <h4>
                                    Application Requirements

                                </h4>
                                <ul>
                                    <li>
                                        <p>
                                            Resume
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Cover Letter
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>
            </div >
        </>
    )
}
