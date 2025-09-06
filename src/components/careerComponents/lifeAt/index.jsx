import React from 'react';
import './lifeat.css';

// import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
// import joinbanner from './../../../assets/images/jointeam.png';
// import itsupportimg from './../../../assets/images/itsupport.jpg';


import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Heading from '../../commonComponents/heading';


export default function Lifeat() {
    return (
        <>
            <div>

                <section className='it_lifeat_block' >
                    <Container>
                        <Heading headbg="Life" headtext="Life at Momentive" subheadtext="Being part of our team is more than just a job." textAlign="text-center" />
  
                        <ul className='it_lifes_listitem'>
                            <li className='item'>
                                <div className='it_contant_box'>
                                    <h2>
                                        Our Approach
                                    </h2>
                                    <p>
                                        It takes both partnership and innovation to drive transformation.
                                    </p>
                                </div>
                            </li>

                            <li className='item'>
                                <div className='it_contant_box'>
                                    <h2>
                                        Environmental
                                    </h2>
                                    <p>
                                        At MDP Infra, we define ourselves through our commitment to creating sustainable infrastructure solutions and addressing society’s real challenges.
                                    </p>
                                </div>
                            </li>
 

                            <li className='item'>
                                <div className='it_contant_box'>
                                    <h2>
                                        Governance
                                    </h2>
                                    <p>
                                        Good governance is the foundation of sustainability, and at MDP Infra, it drives everything we do.
                                    </p>
                                </div>
                            </li>

                            <li className='item'>
                                <div className='it_contant_box'>
                                    <h2>
                                        Sustainability Report
                                    </h2>
                                    <p>
                                        MDP Infra provides transparent data on our sustainability performance and our contribution to society and the environment.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p>
                             It’s a meaningful way to make a positive impact on the lives of others every day.
                        </p>
                    </Container >
                </section >



            </div >
        </>
    )
}



 