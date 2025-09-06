import React from 'react';
import './copmanyEnvironment.css';

// import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
// import joinbanner from './../../../assets/images/jointeam.png';
import jointeams from './../../../assets/images/teamjoin.jpg';


import { Container, Row, Col,} from 'react-bootstrap';
 
import Heading from '../../commonComponents/heading';

export default function Copmanyenvironment() {
    return (
        <>
            <div>

                <section className='it_careerenvironment_block'>
                    <Container>
                        <Heading headbg="Life" headtext="Life at MDP Infra" subheadtext="At MDP Infra, your work goes beyond a job. It’s a chance to build infrastructure that transforms communities and improves lives." textAlign="text-center" />
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_step_item'>
                                    <h4>
                                        Join our growing team
                                    </h4>
                                    <p>
                                        If you are an ambitious mind with a strong sense of purpose and the ability to deliver excellence, MDP Infra welcomes you! We are a dedicated team of professionals driven to build impactful infrastructure, empower growth, and create a stronger future for communities.
                                    </p> 
                                </div>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <div className='it_step_item'>
                                    <h4>
                                        Our focus is YOU!
                                    </h4>
                                    <p>
                                        At MDP Infra, your career journey and personal growth are as unique as you are. We value your skills and provide opportunities to help you advance. Here, you’ll collaborate with passionate, innovative, and supportive colleagues who celebrate your success as their own.
                                    </p> 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>



            </div>
        </>
    )
}
