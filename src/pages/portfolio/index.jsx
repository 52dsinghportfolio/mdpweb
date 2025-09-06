import React from 'react';
import './portfolio.css';
import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
import portfoliobg from './../../assets/images/portfoliotitle.avif';
import Projectlink, { Civilprojectlink, Eleprojectlink, Itprojectlink } from '../../components/portfolioComponents/projectList';
import Pagebanner from '../../components/commonComponents/pageBanner/pagebanner';

import { Container, Row, Col, Accordion } from 'react-bootstrap';


export function Portfolio() {
    return (
        <>
            <div>

                <Pagetitle titletext="Portfolio" linktext="Portfolio" bgcolor="#000" imageUrl={portfoliobg} />
                <Projectlink />

            </div>
        </>
    )
}

import civilengineering from './../../assets/images/civil-engineering-backgroun.jpg';


export function Civilportfolio() {
    return (
        <>
            <div>
                {/* <Pagetitle titletext="Portfolio" linktext="Portfolio" bgcolor="#000" imageUrl={portfoliobg} /> */}
 
                <Pagebanner titletext="Our Civil Portfolio" subtitletext="We take pride in delivering innovative civil engineering solutions. From infrastructure development to modern architectural projects, our work reflects quality, durability, and precision. Each project is a testament to our commitment to excellence." imageUrls={civilengineering} /> 

                <Civilprojectlink />

                <section className='it_pogrresproject_block'>
                    <Container>
                        <Heading headbg="Projects" headtext="Civil And Electrical Projects in Progress" subheadtext="Civil And Electrical Projects in Progress" textAlign="text-center" />
                        <Row>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <span className='it_count'>
                                        1
                                    </span>
                                    <h4>
                                        M3M Crown 111, Gurugram (Tower 6, 7 & 8)
                                    </h4>
                                    <p>
                                        <b>
                                            Timeline:
                                        </b>
                                        Ongoing
                                    </p>
                                    <p>
                                        <b>
                                            Client:
                                        </b>
                                        M3M, Gurugram, Haryana
                                    </p>
                                    <p className='it_details'>
                                        <b>
                                            Scope:
                                        </b>
                                        Finishing works – Gypsum plaster, Italian marble flooring, tile work, wall cladding, painting, waterproofing, false ceiling & railing.
                                    </p>

                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <span className='it_count'>
                                        2
                                    </span>
                                    <h4>
                                        DCM Shriram laboratory – Gurugram
                                    </h4>
                                    <p>
                                        <b>
                                            Timeline:
                                        </b>
                                        2025
                                    </p>
                                    <p>
                                        <b>
                                            Client:
                                        </b>
                                        DCM Shriram Ltd.
                                    </p>
                                    <p className='it_details'>
                                        <b>
                                            Scope:
                                        </b>
                                        Architectural planning, structural design, construction including water supply, sanitary, sewerage, lifts, firefighting, CCTV, rainwater harvesting (EPC basis), Total built up area 1,21,000 Sq.ft.
                                    </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <span className='it_count'>
                                        3
                                    </span>
                                    <h4>
                                        11KV Lines, LT Line On AB (Package 04)
                                    </h4>
                                    <p>
                                        <b>
                                            Timeline:
                                        </b>
                                        Ongoing
                                    </p>
                                    <p>
                                        <b>
                                            Client:
                                        </b>
                                        Madhya Kshetra Vidyut Vitran Co. Ltd., Bhopal
                                    </p>
                                    <p className='it_details'>
                                        <b>
                                            Scope:
                                        </b>
                                        Supply, installation, testing, commissioning of 11 KV Line; works include line bifurcation, interconnection, and conductor augmentation.
                                    </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <span className='it_count'>
                                        4
                                    </span>
                                    <h4>
                                        33KV Line Scheme (RDSS Package-6A, Lot-III), Gwalior Region (MP)
                                    </h4>
                                    <p>
                                        <b>
                                            Timeline:
                                        </b>
                                        Ongoing
                                    </p>
                                    <p>
                                        <b>
                                            Client:
                                        </b>
                                        Madhya Kshetra Vidyut Vitran Co. Ltd., Bhopal
                                    </p>
                                    <p className='it_details'>
                                        <b>
                                            Scope:
                                        </b>
                                        Supply, installation, testing, commissioning of 33 KV Line; works include line bifurcation, interconnection, and conductor augmentation.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='it_pogrresproject_block it_pogrresproject_block1'>
                    <Container>
                        <Heading headbg="Projects" headtext="Civil And Electrical Projects in Progress" subheadtext="Civil And Electrical Projects in Progress" textAlign="text-center" />
                        <Row>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        CPWD
                                    </h4>
                                    <p>
                                        Class-I AA (Buildings & Roads) Contractor
                                    </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        PWD, Govt. of M.P.
                                    </h4>
                                    <p>
                                        Class-A (Unlimited) – Civil Contractor
                                    </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        CII (Confederation of Indian Industry)
                                    </h4>
                                    <p>
                                        Active Member – fostering industry collaboration and
                                        policy advocacy.
                                    </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        ISO 9001:2015 Certified 
                                    </h4>
                                    <p>
                                        For Quality Management Systems 
                                    </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        ISO 14001:2015 Certified 
                                    </h4>
                                    <p>
                                        For Environmental Management Systems  
                                    </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        UP Awas Vikas Parishad (UPAVP) 
                                    </h4>
                                    <p>
                                       Accredited Contractor for Housing & Infrastructure Projects under UP Awas Vikas Yojna
                                    </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        ISO 50001:2018 Certified 
                                    </h4>
                                    <p>
                                        For Energy Management Systems 
                                    </p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                       DRDO Accredited 
                                    </h4>
                                    <p>
                                        Class-I-AA of composite category with INR 100 Cr. Tendering limit

                                    </p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        ISO 30409:2016 Certified 
                                    </h4>
                                    <p>
                                        For Human Resource Management 
                                    </p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        MSME Registered 
                                    </h4>
                                    <p>
                                        Recognized as a Micro, Small, and Medium Enterprise 
                                    </p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        FICCI Membership 
                                    </h4>
                                    <p>
                                        Member of the Federation of Indian Chambers of Commerce and Industry 
                                    </p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <h4>
                                        ICME Accredited 
                                    </h4>
                                    <p>
                                        Accredited 58585
                                    </p>
                                </div>
                            </Col> 
                        </Row>
                    </Container>
                </section>


                {/* <section className='it_civilpogrresproject_block'>
                    <Container>
                        <Heading headbg="Projects" headtext="Civil Projects Completed" subheadtext="Civil Projects Completed in the Last Five Years (2019 – 2024)" textAlign="text-center" />
                        <Row>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <span className='it_count'>
                                        1
                                    </span>
                                    <h4>
                                        Residential Quarters ESIC Campus, Nanda Nagar, Indore (M.P.)
                                    </h4>
                                    <p>
                                        <b>
                                            Year:
                                        </b>
                                        2025
                                    </p>
                                    <p>
                                        <b>
                                            Specs:
                                        </b>
                                        G+3 structure, MEP & landscape development.
                                    </p>
                                    <p>
                                        <b>
                                            Client:
                                        </b>
                                        WAPCOS Ltd., Gurugram.

                                    </p>

                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <span className='it_count'>
                                        2
                                    </span>
                                    <h4>
                                        400-Bedded Hostel, LNIPE Gwalior
                                    </h4>
                                    <p>
                                        <b>
                                            Year:
                                        </b>
                                        2025
                                    </p>
                                    <p>
                                        <b>
                                            Specs:
                                        </b>
                                        An exclusive project showcasing bespoke design, premium finishes, and intricate detailing to create a sophisticated living environment.
                                    </p>
                                    <p>
                                        <b>
                                            Client:
                                        </b>
                                        CPWD, Indore
                                    </p>
                                </div>
                            </Col>


                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <span className='it_count'>
                                        3
                                    </span>
                                    <h4>
                                        Regional Passport Office Building, Arera Hills, Bhopal
                                    </h4>
                                    <p>
                                        <b>
                                            Year:
                                        </b>
                                        2023
                                    </p>
                                    <p>
                                        <b>
                                            Specs:
                                        </b>
                                        Finishing, HVAC, firefighting, compact substation.
                                    </p>
                                    <p>
                                        <b>
                                            Client:
                                        </b>
                                        Central Public Works Department, Bhopal.
                                    </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <span className='it_count'>
                                        4
                                    </span>
                                    <h4>
                                        Faculty Housing, IIT Indore
                                    </h4>
                                    <p>
                                        <b>
                                            Year:
                                        </b>
                                        2021
                                    </p>
                                    <p>
                                        <b>
                                            Specs:
                                        </b>
                                        G+6 structure, sanitary, plumbing, electrical, external development, passenger lifts, DG Set.
                                    </p>
                                    <p>
                                        <b>
                                            Client:
                                        </b>
                                        Central Public Works Department, Indore.
                                    </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <span className='it_count'>
                                        5
                                    </span>
                                    <h4>
                                        ITBP Barracks and Quarters, Karera (M.P.)
                                    </h4>
                                    <p>
                                        <b>
                                            Year:
                                        </b>
                                        2019
                                    </p>
                                    <p>
                                        <b>
                                            Specs:
                                        </b>
                                        Complete quarters, focusing on modern aesthetics and collaborative workspaces.
                                    </p>
                                    <p>
                                        <b>
                                            Client:
                                        </b>
                                        CPWD, Gwalior
                                    </p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <div className='it_project_item'>
                                    <span className='it_count'>
                                        6
                                    </span>
                                    <h4>
                                        336 LIG Houses, Scheme 136, Indore
                                    </h4>
                                    <p>
                                        <b>
                                            Year:
                                        </b>
                                        2019

                                    </p>
                                    <p>
                                        <b>
                                            Specs:
                                        </b>
                                        G+6 structure, sanitary, plumbing, electrical, external development, passenger lifts, DG Set.

                                    </p>
                                    <p>
                                        <b>
                                            Client:
                                        </b>
                                        Indore Development Authority, Indore.
                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </section> */}


            </div>
        </>
    )
}





import eleportfoliobg from './../../assets/images/Electrici_portfoliobg.jpg';
import Heading from '../../components/commonComponents/heading';


export function Eletricalportfolio() {
    return (
        <>
            <div>


                <Pagebanner titletext="Our Electrical Portfolio" subtitletext="Our Electrical team specializes in delivering safe, reliable, and innovative power solutions. From design and installation to testing and maintenance, we ensure seamless electrical systems for residential, commercial, and industrial projects." imageUrls={eleportfoliobg} />

                {/* <Pagetitle titletext="Portfolio" linktext="Portfolio" bgcolor="#000" imageUrl={portfoliobg} />  */}
                <Eleprojectlink />
            </div>
        </>
    )
}







import itprojectimgss from './../../assets/images/itprojectimgss.jpg';
// import Heading from '../../components/commonComponents/heading';

export function Itportfolio() {
    return (
        <>
            <div>


                <Pagebanner titletext="Our IT Portfolio" subtitletext="Our IT portfolio showcases a wide range of projects and solutions that highlight our expertise in UI/UX design, web development, and digital solutions. Over the years, we have successfully delivered user-friendly, scalable, and innovative products for clients across various industries." imageUrls={itprojectimgss} />
 
                {/* <Pagetitle titletext="Portfolio" linktext="Portfolio" bgcolor="#000" imageUrl={portfoliobg} />  */}
                <Itprojectlink />
            </div>
        </>
    )
}


export default Portfolio

