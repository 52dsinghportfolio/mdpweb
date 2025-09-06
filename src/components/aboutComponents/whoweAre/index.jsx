import React from 'react';
import './whoweare.css';

import { Container, Row, Col, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Heading from '../../commonComponents/heading';


export default function Whoweare({ titletext, imageUrl1,imageUrl2, headbg,headtext,subheadtext,subheadtext1,bgcolor,textAlign }) {
    return (
        <>
            <div>
                <section className='it_aboutusinfo_block'>
                    <Container>
                        <Row className='flex_alignments'>
                            <Col lg="6" md="6" sm="12"> 
                                <div className="it_ab_imgcontant">
                                    <div className="imgbox it_img1">
                                        <LazyLoadImage effect="blur" src={imageUrl1} className="img-fluid" alt='About Img' />
                                    </div>
                                    <div className="imgbox it_img2">
                                        <LazyLoadImage effect="blur" src={imageUrl2} className="img-fluid" alt='About Img' />
                                    </div>
                                </div> 
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_contentbox'>
                                    <div>
                                        <div className="it_heading_block">
                                            <span className={`it_shadow_title ${textAlign}`} >
                                                {headbg}
                                            </span>
                                            <h1 className={`it_titleinfo ${textAlign}`}>
                                                <span className="it_title_text">
                                                    <span className="it_shadow_title_inner" style={{ background: bgcolor }}>
                                                        {headtext}
                                                    </span>
                                                </span>
                                            </h1>
                                            <h2 className={`it_subtitleinfo ${textAlign}`}>
                                                {subheadtext}
                                            </h2>
                                        </div> 
                                    </div>
                                    {/* <Heading headbg="About" headtext="Know about MDP Infra" subheadtext="MDP Infra (India) Pvt. Ltd. is an emerging IT and ITeS company" textAlign="text-left" /> */}
                                     
                                    <p>
                                        {subheadtext1}
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




