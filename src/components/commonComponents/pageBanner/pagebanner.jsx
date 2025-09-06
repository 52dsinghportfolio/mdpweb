import React from 'react';
import './pagebanner.css';

import { Container, Row, Col } from 'react-bootstrap';


export default function Pagebanner({titletext, subtitletext, imageUrls}) {
    return (
        <>
            <div>
                <section className='it_pagebanner_block' style={{ background: `url(${imageUrls})` }}>
                    <Container>
                        <div className="it_banner_info">
                            <h2>
                                {titletext}
                            </h2>
                            <p>
                                {subtitletext}
                            </p>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    )
}
