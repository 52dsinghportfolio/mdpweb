
import React from 'react';
import './formcontrol.css';
import { FormAccordion } from 'react-bootstrap';

import { Container, Row, Col, FormAccordion } from 'react-bootstrap';


import Heading from '../heading';

// export default function FAQ({ label, name, placeholder,as  }) {
export default function FAQ() {
    return (
        <>
            <div>
                <section className='faqinfo_block'>

                    <Container>
                        <Heading headbg="Profile" headtext="Know about Profile details" subheadtext="Established with a vision for quality interior solutions" textAlign="text-center" />
                        <Row >
                            <Col lg="4" md="4" sm="12">

                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>
        </>
    )
}

