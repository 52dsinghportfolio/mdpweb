import React from 'react';
import './nextopportunity .css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Container } from 'react-bootstrap';

import oppertunityimg from './../../../assets/images/oppertunityimg.jpg';


import Heading from '../../commonComponents/heading'; 

import { NavLink } from 'react-router-dom';
export default function Nextopportunity() {
    return (
        <>
            <div>
                <section className='it_nextopportunity_block' style={{ backgroundImage: `url(${oppertunityimg})` }}>
                    <Container>
                        <Heading headbg="Next" headtext="Opportunity awaits" subheadtext="Your next opportunity awaits" textAlign="text-left" />
                        <p>
                            Explore our current openings and find your perfect fit. Whether you’re just starting your career or looking to take the next step, MDP Infra offers diverse roles where you can grow, contribute, and make a lasting impact.
                        </p>
                        <NavLink className='it_submitbtn' to="/career/job-openings/">
                            View Open Positions
                            <FontAwesomeIcon className='ml-2' icon={faArrowRight} />
                        </NavLink>
                         
                    </Container>
                </section>
            </div>
        </>
    )
}
