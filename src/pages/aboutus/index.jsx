import React from 'react';
import './aboutus.css';

import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';


import bgContact from './../../assets/images/contact_banner.jpg';
import civilimg_1 from './../../assets/images/civilimg_1.jpg';
import civilimg_2 from './../../assets/images/civilimg_2.jpg';
import eltrcailinf_img from './../../assets/images/eltrcailinf_img.jpeg';
import eltrcailinf_img1 from './../../assets/images/eltrcailinf_img1.jpg';



import { LazyLoadImage } from 'react-lazy-load-image-component';


import Aboutcopmany from '../../components/commonComponents/aboutCompany';
// import Ourteams from '../../components/aboutComponents/ourTeams'; 
import Testimonials from '../../components/commonComponents/testimonials';
import Ourworkprocess from '../../components/homeComponents/ourWorkprocess';
import { Ourteams, Civilourteams } from '../../components/aboutComponents/ourTeams';
import Whoweare from '../../components/aboutComponents/whoweAre';


import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Ourachivments, Civilchivments, Eletricalachivments } from '../../components/homeComponents/ourAchivments';

// Civil page Components
import Pagebanner from '../../components/commonComponents/pageBanner/pagebanner';

export function Aboutus() {
    return (
        <>
            <div>

                <Pagetitle titletext="About" linktext="Aboutus" bgcolor="#fff" imageUrl={bgContact} />

                <section className='it_company_history'>
                    <Aboutcopmany />
                    <Container>

                        <ul className='it_company_list'>
                            <li className='nav-item'>
                                <h4>
                                    <span>
                                        2003
                                    </span>
                                    Company Founded
                                </h4>
                                <p>
                                    Established with a vision for quality-built environment solutions.
                                </p>
                            </li>

                            <li className='nav-item'>
                                <h4>
                                    <span>
                                        2012
                                    </span> Company became Pvt. Ltd.
                                </h4>
                                <p>
                                    Key milestone in our journey.
                                </p>
                            </li>

                            <li className='nav-item'>
                                <h4>
                                    <span>
                                        2016
                                    </span>Expanded Capabilities
                                </h4>
                                <p>
                                    Expanded to include electrical works.
                                </p>
                            </li>
                            <li className='nav-item'>
                                <h4>
                                    <span>
                                        2020
                                    </span> High-End Projects
                                </h4>
                                <p>
                                    Completed major commercial and residential masterpieces.
                                </p>
                            </li>

                            <li className='nav-item'>
                                <h4>
                                    <span>
                                        2024
                                    </span> Upscale Expansion
                                </h4>
                                <p>
                                    Expanded into premium residential and commercial fit-outs, setting new industry benchmarks.
                                </p>
                            </li>
                        </ul>
                        <p className='texts_item'>
                            Our journey began with a vision to redefine excellence in construction, expanding our expertise to encompass a comprehensive range of services. We are dedicated to creating functional, aesthetically pleasing, and sustainable environments while contributing to societal development through our practices.
                        </p>
                    </Container>
                </section>

                <div className='it_aboutmore_block'>
                    <Whoweare headbg="Civil" headtext="Civil Construction" subheadtext="MDP Infra (India) Pvt. Ltd. is a leading infrastructure" subheadtext1="MDP Infra (India) Pvt. Ltd. is a leading infrastructure company maintaining quality standards in civil construction of institutional buildings, housing and external development works. These milestones highlight MDP Infra's dedication to excellence in civil construction and its significant impact on enhancing infrastructure across various sectors." textAlign="text-left" imageUrl1={civilimg_1} imageUrl2={civilimg_2} />
                </div>

                <div className='it_aboutmore_block1'>
                    <Whoweare headbg="Electrification" headtext="Electrification Projects" subheadtext="MDP Infra (India) Pvt. Ltd. is a leading infrastructure" subheadtext1="MDP Infra (India) Pvt. Ltd. is a leading infrastructure company maintaining quality standards in civil construction of institutional buildings, housing and external development works. These milestones highlight MDP Infra's dedication to excellence in civil construction and its significant impact on enhancing infrastructure across various sectors." textAlign="text-left" imageUrl1={eltrcailinf_img} imageUrl2={eltrcailinf_img1} />
                </div>


                <section>
                    <Container>
                        <Heading headbg="Team" headtext="Our Professional" subheadtext="Expert Technical Team" textAlign="text-center" />
                        <Ourteams />
                    </Container>
                </section>

                <Ourachivments />
                <Testimonials />
                {/* <Ourworkprocess /> */}


            </div>
        </>
    )
}



// _____________________________________________ Civil  page ______________________________________________
// _____________________________________________ Civil  page ______________________________________________


import civil_banner from './../../assets/images/civilbannerimg.jpg';
// import civil_method from './../../assets/images/case-img4.png';
import civil_method from './../../assets/images/civilteamimg.jpg';

import arrowicon from './../../assets/images/elements14.png';
import Whychoose, { Civilcorevalue } from '../../components/homeComponents/whychoose';
import Heading from '../../components/commonComponents/heading';

import civilteambg from './../../assets/images/civilteambg.webp';
import finacialimg from './../../assets/images/finacialimg.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import civilicon from './../../assets/images/civilicon.svg';


export function Civilaboutus() {
    return (
        <>
            <div>
                <Pagebanner titletext="Civil Construction" subtitletext="MDP Infra (India) Pvt. Ltd. is a leading infrastructure company maintaining quality standards in civil construction of institutional buildings, housing and external development works." imageUrls={civil_banner} />

                {/* <section className='it_company_history'>
                    <Container>
                        <Aboutcopmany />

                        <ul className='it_company_list'>
                            <li className='nav-item'>
                                <h4>
                                    <span>
                                        2003
                                    </span>
                                    Company Founded
                                </h4>
                                <p>
                                    Established with a vision for quality-built environment solutions.
                                </p>
                            </li>

                            <li className='nav-item'>
                                <h4>
                                    <span>
                                        2012
                                    </span> Company became Pvt. Ltd.
                                </h4>
                                <p>
                                    Key milestone in our journey.
                                </p>
                            </li>

                            <li className='nav-item'>
                                <h4>
                                    <span>
                                        2016
                                    </span>Expanded Capabilities
                                </h4>
                                <p>
                                    Expanded to include electrical works.
                                </p>
                            </li>
                            <li className='nav-item'>
                                <h4>
                                    <span>
                                        2020
                                    </span> High-End Projects
                                </h4>
                                <p>
                                    Completed major commercial and residential masterpieces.
                                </p>
                            </li>

                            <li className='nav-item'>
                                <h4>
                                    <span>
                                        2024
                                    </span> Upscale Expansion
                                </h4>
                                <p>
                                    Expanded into premium residential and commercial fit-outs, setting new industry benchmarks.
                                </p>
                            </li>
                        </ul>
                        <p className='texts_item'>
                            Our journey began with a vision to redefine excellence in construction, expanding our expertise to encompass a comprehensive range of services. We are dedicated to creating functional, aesthetically pleasing, and sustainable environments while contributing to societal development through our practices.
                        </p>
                    </Container>
                </section> */}


                <section className="it_ourservices_block it_civilservices_block">
                    <Heading headbg="Services" headtext="Our Civil servcies" subheadtext="From concept to creation – delivering excellence in every civil project." textAlign="text-center" />
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className="it_ourservices_boxs">
                                    <div className="it_icons">
                                        <LazyLoadImage effect="blur" src={civilicon} alt="Service Icon" />
                                    </div>
                                    <h4>Civil Services </h4>
                                    <p>
                                        Construction of institutional buildings, housing projects, and industrial facilities
                                    </p>
                                    <p>
                                        Expertise in foundation engineering, masonry, and large-scale external development
                                    </p>
                                    <p>
                                        Proven track record with government and private sector projects across India
                                    </p>
                                    <div className="it_space24"></div>
                                    <h5>01</h5>
                                </div>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <div className="it_ourservices_boxs">
                                    <div className="it_icons">
                                        <LazyLoadImage effect="blur" src={civilicon} alt="Service Icon" />
                                    </div>
                                    <h4>Commercial & Residential Fit-Out </h4>
                                    <p>
                                        Transforming spaces into functional, aesthetically pleasing environments
                                    </p>
                                    <p>
                                        Custom interior solutions tailored to client needs, ensuring premium finishes and modern design

                                    </p>
                                    <p>
                                        In-house production of bespoke furniture and high-quality fittings to maintain quality control

                                    </p>
                                    <div className="it_space24"></div>
                                    <h5>02</h5>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Civilchivments />

                <Civilcorevalue />
                {/* <Whychoose /> */}

                <section className='it_civilmethology_block'>
                    <Container>
                        <Heading headbg="Methodology" headtext="Our Methodology" subheadtext="Understand client requirements" textAlign="text-center" />

                        <div className='it_civilmethology_list'>
                            <Row className="row it_core_rows">
                                <Col lg="4" md="4" sm="12">
                                    <div className='it_method_left'>
                                        <div className='it_method_items'>
                                            <span className='it_Count'>
                                                01
                                            </span>
                                            <div className='it_method_inner'>
                                                <h4>
                                                    Brief & Needs Assessment
                                                </h4>
                                                <p>
                                                    Understand client requirements, conduct site analysis, and define project goals.
                                                </p>
                                            </div>
                                        </div>

                                        <div className='it_method_items'>
                                            <span className='it_Count'>
                                                02
                                            </span>
                                            <div className='it_method_inner'>
                                                <h4>
                                                    Design & Planning
                                                </h4>
                                                <p>
                                                    Develop concept designs, prepare schedules, and align resources with client objectives.
                                                </p>
                                            </div>
                                        </div>

                                        <div className='it_method_items'>
                                            <span className='it_Count'>
                                                03
                                            </span>
                                            <div className='it_method_inner'>
                                                <h4>
                                                    Documentation & Approvals
                                                </h4>
                                                <p>
                                                    Prepare technical documentation, coordinate with authorities.
                                                </p>
                                            </div>
                                        </div>

                                        <div className='it_method_items'>
                                            <span className='it_Count'>
                                                04
                                            </span>
                                            <div className='it_method_inner'>
                                                <h4>
                                                    Procurement & Mobilisation
                                                </h4>
                                                <p>
                                                    Source high-quality materials, mobilise equipment and skilled workforce to the site.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                    <div className='it_method_boximg'>
                                        <div className='imgbox'>
                                            <img src={civil_method} className='img-fluid' alt='method images' />
                                        </div>
                                    </div>
                                </Col>


                                <Col lg="4" md="4" sm="12">
                                    <div className='it_method_right'>
                                        <div className='it_method_items'>
                                            <span className='it_Count'>
                                                05
                                            </span>
                                            <div className='it_method_inner'>
                                                <h4>
                                                    Project Monitoring
                                                </h4>
                                                <p>
                                                    Continuously track progress, manage risks, and ensure adherence to timelines and budget.
                                                </p>
                                            </div>
                                        </div>

                                        <div className='it_method_items'>
                                            <span className='it_Count'>
                                                06
                                            </span>
                                            <div className='it_method_inner'>
                                                <h4>
                                                    Execution & Quality Control
                                                </h4>
                                                <p>
                                                    Carry out construction and fit-out works while ensuring strict adherence to quality standards.
                                                </p>
                                            </div>
                                        </div>

                                        <div className='it_method_items'>
                                            <span className='it_Count'>
                                                07
                                            </span>
                                            <div className='it_method_inner'>
                                                <h4>
                                                    Handover & Post-Completion
                                                </h4>
                                                <p>
                                                    Deliver the completed project and provide post-completion support.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

                <Testimonials />

                <section className='it_clienttestimonial_main'>
                    <Container>
                        <Heading headbg="Partners" headtext="Trusted by Industry Leaders" subheadtext="Our partnerships with leading brands reflect our commitment to excellence" textAlign="text-center" />
                        {/* <Clienttestimonial images={clientimages} /> */}
                        {/* <Clienttestimonial /> */}
                        <CivilClienttestimonial />

                    </Container>
                </section>
                <section className='it_servicesinfo_main'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Financial" headtext="Financial Highlights" subheadtext="Financial Highlights (FY 2019–2024)" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            Our financial performance over the past five fiscal years demonstrates consistent growth and strategic success, culminating in a significant surge in revenue in the latest fiscal year. This chart illustrates our journey of expansion and increasing market presence.
                                        </p>
                                        <p>
                                            The impressive growth in FY 2023–2024 reflects the successful execution of major projects, including the BRS Bhavan and Chhattisgarh Niwas, coupled with an expanding client base and strategic investments in our manufacturing capabilities. This upward trajectory underscores our robust financial health and strong potential for continued expansion in the infrastructure sector.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={finacialimg} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}


export function Civilaboutteams() {
    return (
        <>
            <div>
                <Pagebanner titletext="Reliable Civil Construction Professionals" subtitletext="Our Civil Construction team is dedicated to delivering strong, reliable, and high-quality infrastructure. With skilled professionals and modern techniques, we ensure every project is executed with precision and safety." imageUrls={civilteambg} />

                <section className='it_civilteamsinfo_block'>
                    <Container>
                        <Heading headbg="Team" headtext="Our Professional" subheadtext="Expert Civil Team" textAlign="text-center" />
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Leadership Team
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Ourteams />
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Project Management
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Civilourteams />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </section>
                <Testimonials />
            </div>
        </>
    )
}



// _______________________________________ Civil  page ______________________________________________
// _______________________________________ Civil  page ______________________________________________



// _______________________________________ IT  page ______________________________________________
// _______________________________________ IT  page ______________________________________________ 

// Software develoment images
import sowaftedevlopmentimg from './../../assets/images/sowaftedevlopmentimg.jpg';
import tailoringimg from './../../assets/images/tailoring.jpg';

import sowaftedevlopmentimg1 from './../../assets/images/sowaftedevlopmentimg1.jpg';
import sowaftedevlopmentimg2 from './../../assets/images/Software-Development-Models.avif';
import aibasedimg from './../../assets/images/aibasedimg.jpg';
import kycimg from './../../assets/images/kycimg.jpeg';





// Man Power images
import manpowerimg from './../../assets/images/manpowerimg.jpg';
import manpowerimg1 from './../../assets/images/manpowerimg1.png';
import insutrieimg from './../../assets/images/insutrieimg.jpg';
import itclientimg1 from './../../assets/images/itclientimg1.jpg';
import engagementprocess from './../../assets/images/engagement-process.jpg';
import teamsmanpower from './../../assets/images/teamsmanpower.jpg';
import policesimgs from './../../assets/images/policesimgs.jpeg';
import technicalimg from './../../assets/images/technicalimg.jpg';
import nontechnicalimg from './../../assets/images/nontechnicalimg.jpg';


// Sysytem intregration mages
import integrationimg from './../../assets/images/integrationimg.jpeg';
import sysintregation from './../../assets/images/sysintregation1.png';
import sysintregation1 from './../../assets/images/sysintes.webp';
import Integrationimg from './../../assets/images/system-Integrationimg.webp';


import itworkteam from './../../assets/images/itworkteam.jpeg';



export function Systemintegration() {
    return (
        <>
            <div>
                <Pagebanner titletext="System Integration" subtitletext="Your gateway to comprehensive System Integration solutions. Our services are designed to seamlessly bring together disparate components of your IT infrastructure, creating a unified and efficient system that empowers your business." imageUrls={integrationimg} />


                <section className='it_manpwerinfo_main it_intregation_main'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Integration " headtext="System Integration Services" subheadtext="Why Opt for Our System Integration Services?" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <ul className='it_listitem'>
                                            <li className='nav-item'>
                                                <h6>
                                                    Enhanced Efficiency:
                                                </h6>
                                                <p>
                                                    Our System Integration solutions are crafted to enhance the efficiency of your business processes. By integrating diverse systems and applications, we eliminate redundancies, streamline workflows, and optimize overall performance.
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <h6>
                                                    Improved Collaboration:
                                                </h6>
                                                <p>
                                                    Experience improved collaboration among different departments and functionalities within your organization. Our integrations foster communication and data sharing, breaking down silos to create a more connected and collaborative work environment.
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <h6>
                                                    Scalability and Future-Proofing :
                                                </h6>
                                                <p>
                                                    Our System Integration services are scalable to accommodate your business growth. Whether you're expanding operations or adopting new technologies, our integrations are designed to evolve with your organization, ensuring a future-proof IT infrastructure.
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <h6>
                                                    Seamless Information Flow :
                                                </h6>
                                                <p>
                                                    Enjoy a seamless flow of information across your entire system. Our integrations ensure that data moves effortlessly between various components, providing real-time insights and facilitating informed decision-making.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={sysintregation1} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='it_manpwerinfo_main it_manpwerinfo_white it_intregation_main'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={sysintregation} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Unlock " headtext="Unified Systems" subheadtext="Unlock the Power of Unified Systems" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>

                                            At MDP Infra, we recognize the critical role that system integration plays in the success of modern businesses. Our tailored System Integration services are designed to meet your specific needs, ensuring that your IT landscape operates as a unified, cohesive whole. Ready to unlock the power of unified systems? Contact us today to explore how our System Integration services can optimize your IT infrastructure, improve efficiency, and pave the way for enhanced business performance.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className='it_manpwerinfo_main it_intregation_main'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Offerings " headtext="System Integration Offerings" subheadtext="Our System Integration Offerings" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <ul className='it_listitem'>
                                            <li className='nav-item'>
                                                <h6>
                                                    Enterprise Application Integration (EAI):
                                                </h6>
                                                <p>
                                                    Connect and synchronize your enterprise applications with our EAI solutions. Ensure a cohesive flow of information across CRM, ERP, HR, and other essential systems.
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <h6>
                                                    Network Integration:
                                                </h6>
                                                <p>
                                                    Optimize your network infrastructure with our network integration services. We unify your network components, enhancing connectivity, security, and overall performance.
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <h6>
                                                    Cloud and On-Premises Integration
                                                </h6>
                                                <p>
                                                    Achieve the perfect balance between cloud and on-premises systems with our integration services. Seamlessly connect your cloud-based and traditional applications for a cohesive IT environment.
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <h6>
                                                    Security Integration:
                                                </h6>
                                                <p>
                                                    Safeguard your data and systems with our security integration solutions. Ensure that your security measures are integrated seamlessly, providing comprehensive protection against cyber threats.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={Integrationimg} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>
        </>
    )
}




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faComputer, faMobileScreenButton, faNotEqual, faUserCog, faFolder,faComputerMouse } from '@fortawesome/free-solid-svg-icons';
export function Softwaredevlopment() {
    return (
        <>
            <div>
                <Pagebanner titletext="Software Development" subtitletext="We Digitize your idea. We believe in technology. We save your costs. We design and implement advanced software solutions and mobile apps to simplify your business problems. Focussing on latest technologies, agile methodologies & DevOps, we offer cost-effective digital solutions for you to innovate and optimize your business performance. As a software and mobile app development company, we specialize in a spectrum of technologies for front-end and back-end." imageUrls={sowaftedevlopmentimg} />


                <section className='it_intregationservices_main'>
                    <Container>
                        <Heading headbg="Development " headtext="Our Software" subheadtext="Our Software Development Services" textAlign="text-center" />
                        <Row>
                            <Col lg="4" md="6" sm="12">
                                <div className='it_services_item'>
                                    <div className='it_imgbox'>
                                        <FontAwesomeIcon icon={faComputerMouse} />
                                    </div>
                                    <div className='it_contnets'>
                                        <h4>
                                            custom software development
                                        </h4>
                                        <p>
                                            Translate unique client requirements into software solutions with premier quality and anvanced tecnologies
                                        </p>
                                    </div>
                                </div>
                            </Col> 
                            
                            <Col lg="4" md="6" sm="12">
                                <div className='it_services_item'>
                                    <div className='it_imgbox'>
                                        <FontAwesomeIcon icon={faComputer} />
                                    </div>
                                    <div className='it_contnets'>
                                        <h4>
                                            Web development
                                        </h4>
                                        <p>
                                            Revolutionize your business ideas using web development services for innovative and next-gen web apps.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            
                            <Col lg="4" md="6" sm="12">
                                <div className='it_services_item'>
                                    <div className='it_imgbox'>
                                        <FontAwesomeIcon icon={faMobileScreenButton} />
                                    </div>
                                    <div className='it_contnets'>
                                        <h4>
                                            Mobile App Development
                                        </h4>
                                        <p>
                                            Achieve digital transformation by developing scalable, engaging and feature rich mobile applications
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            
                            <Col lg="4" md="6" sm="12">
                                <div className='it_services_item'>
                                    <div className='it_imgbox'>
                                        <FontAwesomeIcon icon={faFolder} />
                                    </div>
                                    <div className='it_contnets'>
                                        <h4>
                                            Product Devlopment
                                        </h4>
                                        <p>
                                            Intellectually comprehend client's business ideas to develop innovative software solutions with scalable product architecture.  
                                        </p>
                                    </div>
                                </div>
                            </Col> 
                            
                            <Col lg="4" md="6" sm="12">
                                <div className='it_services_item'>
                                    <div className='it_imgbox'>
                                        <FontAwesomeIcon icon={faUserCog} />
                                    </div>
                                    <div className='it_contnets'>
                                        <h4>
                                            Dedicated team 
                                        </h4>
                                        <p>
                                            Grow your business development team as per project size and meet intermittent deadlines utilizing our flexible resource model.

                                        </p>
                                    </div>
                                </div>
                            </Col>
                             
                            <Col lg="4" md="6" sm="12">
                                <div className='it_services_item'>
                                    <div className='it_imgbox'>
                                        <FontAwesomeIcon icon={faNotEqual} />
                                    </div>
                                    <div className='it_contnets'>
                                        <h4>
                                            Testing & QA
                                        </h4>
                                        <p>
                                            Maintain Quality Assurance by rectifying errors and debugging applications for a high-performing application.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                             

                        </Row>
                    </Container>
                </section>




                <section className='it_manpwerinfo_main it_intregation_main it_manpwerinfo_white'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Tailored " headtext="Tailored Solutions" subheadtext="WhTailored Solutions for Your Business" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            Discover the transformative power of software development with MDP Infra. Explore our portfolio to witness firsthand the impact of our work, and connect with us to discuss how our services can elevate your business. At MDP Infra, it's not just about software development; it's about forging a partnership committed to building exceptional solutions tailored to your success. Together, let's build something extraordinary!
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={tailoringimg} className='img-fluid' alt='tailoringimg Banner' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>







            </div >
        </>
    )
}

// export function Eaaaletricalaboutteams() {
//     return (
//         <>
//             <div>
//                 <Pagebanner titletext="Our Electrical team is committed to providing safe" subtitletext="Our Electrical team is committed to providing safe, efficient, and innovative electrical solutions. With expert engineers and modern technology, we ensure seamless power systems, reliable installations, and long-lasting performance. Every project is carried out with precision, safety, and excellence at its core." imageUrls={eletricalimgs} />


//                 <section className='it_eletricalteamsinfo_block'>
//                     <Container>
//                         <Heading headbg="Team" headtext="Our Professional" subheadtext="Expert Eletrical Team" textAlign="text-center" />

//                         <Ourteams />
//                     </Container>
//                 </section>
//                 <Testimonials />
//             </div>
//         </>
//     )
// }



export function Itmanpower() {
    return (
        <>
            <div>
                <Pagebanner titletext="Manpower Services" subtitletext="At MDP Infra (India) Pvt. Ltd., we believe that people are the driving force behind every successful project. We provide dependable technical and non-technical manpower to meet the requirements of government, corporate, and institutional clients" imageUrls={manpowerimg} />


                <section className='it_manpwerinfo_main'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Man" headtext="Manpower Services" subheadtext="Requirements of government, corporate, and institutional clients" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            At MDP Infra (India) Pvt. Ltd., we believe that people are the driving force behind every successful project. We provide dependable technical and non-technical manpower to meet the requirements of government, corporate, and institutional clients. With extensive experience across multiple sectors, we ensure that every professional we deploy is skilled, compliant with statutory regulations, and capable of delivering results. Above all, our focus remains on supplying reliable and responsible resources who are committed to supporting our clients in achieving their objectives.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={technicalimg} className='img-fluid' alt='Man Power' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='it_manpwerinfo_main it_manpwerinfo_white'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={manpowerimg1} className='img-fluid' alt='Man Power' />
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Services" headtext="Our Services" subheadtext="Technical Manpower" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            We provide qualified professionals who bring the right mix of expertise and practical knowledge to ensure smooth execution of projects. Our pool of technical manpower includes:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    <b>IT Specialists – </b>Developers, Network Engineers, System Administrators, Cybersecurity Experts
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Engineers – </b>Civil, Electrical, and IT Engineers
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Project Managers / Coordinators – </b>Experienced in handling government and enterprise projects of varying scale
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Technical Support Staff –</b> Helpdesk teams, field engineers, and on-site technical executives
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='it_manpwerinfo_main'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    {/* <Heading headbg="Services" headtext="Our Services" subheadtext="Non Technical Manpower" textAlign="text-left" /> */}
                                    <h4>
                                        Non Technical Manpower
                                    </h4>
                                    <div className='it_blocks_items'>
                                        <p>
                                            Every project needs strong operational support. Our non-technical manpower services are designed to ensure day-to-day activities run without interruption:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Administrative Staff & Office Assistants
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Data Entry Operators & Clerical Staff
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Field Executives & Supervisors
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Skilled & Semi-Skilled Workers for on-ground operations
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={nontechnicalimg} className='img-fluid' alt='Man Power' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>





                <section className='it_manpwerinfo_main it_manpwerinfo_white'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={policesimgs} className='img-fluid' alt='Man Power' />
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Policies" headtext="Our Policies & Commitment" subheadtext="We believe in building trust through professionalism and transparency" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            We believe in building trust through professionalism and transparency. At MDP, our manpower services are guided by the following principles:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    <b> Fair Employment Policy – </b> We are an equal opportunity employer with a commitment to non-discrimination.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Compliance with Labour Laws –</b> Every manpower resource provided is engaged under statutory norms such as PF, ESIC, and Minimum Wages Act.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Background Verification –</b> Candidates are carefully screened and verified before deployment.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Seamless Deployment –</b> We ensure smooth onboarding and provide replacement support whenever required.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='it_manpwerinfo_main'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Why" headtext="Manpower Services" subheadtext="Why Choose MDP for Manpower Services?" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            Choosing MDP means working with a team that understands manpower requirements from both the client and employee perspective.
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    <b>Proven Expertise –</b> Strong experience in providing manpower to government and corporate projects.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Flexible Engagement Models –</b> Whether short-term, long-term, or project-based, we adapt to your needs.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Quality Assurance –</b> Our dedicated HR and technical teams carefully screen and select manpower to maintain high standards.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Client-Centric Approach –</b> We focus on solutions that directly match your project requirements and goals.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={teamsmanpower} className='img-fluid' alt='Man Power' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>




                <section className='it_manpwerinfo_main it_manpwerinfo_white'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={engagementprocess} className='img-fluid' alt='Man Power' />
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    {/* <Heading headbg="Policies" headtext="Our Policies & Commitment" subheadtext="We believe in building trust through professionalism and transparency" textAlign="text-left" /> */}
                                    <div className='it_blocks_items'>
                                        <h4>
                                            Engagement Process
                                        </h4>
                                        <p>
                                            We follow a transparent and straightforward process to ensure clients get the right manpower at the right time:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    <b>Requirement Understanding –</b> Discussion with clients to identify specific manpower needs.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Screening & Shortlisting –</b> Careful evaluation of candidates based on skill, experience, and suitability.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Verification & Onboarding –</b> Completion of background checks, documentation, and statutory compliance.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Deployment & Support –</b> Quick deployment with ongoing support and replacement if required.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <b>Performance Monitoring – </b>Regular reviews and client feedback to maintain service quality.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='it_manpwerinfo_main'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <div className='it_blocks_items'>
                                        <h4>
                                            Industries We Serve
                                        </h4>
                                        <p>
                                            Our manpower services cater to a wide range of sectors, including:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Government Departments & Public Sector Units
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Education – Schools, Universities, and Training Institutes
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Information Technology
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Infrastructure & Construction Projects
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Healthcare & Support Services
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Energy & Utilities
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={insutrieimg} className='img-fluid' alt='Man Power' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className='it_manpwerinfo_main it_manpwerinfo_white'>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={itclientimg1} className='img-fluid' alt='Man Power' />
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className='it_servicesinfo_item'>
                                    {/* <Heading headbg="Policies" headtext="Our Policies & Commitment" subheadtext="We believe in building trust through professionalism and transparency" textAlign="text-left" /> */}
                                    <div className='it_blocks_items'>
                                        <h4>
                                            Client Assurance
                                        </h4>
                                        <p>
                                            We guarantee:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Reliable, skilled, and verified manpower.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Transparent processes and statutory compliance.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Timely deployment with round-the-clock support.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    End-to-end workforce management solutions.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


            </div >
        </>
    )
}



export function Itaboutteams() {
    return (
        <>
            <div>
                <Pagebanner titletext="Our IT team is committed to providing safe,  and scalable digital solutions." subtitletext="Our IT team is committed to providing safe, secure, and innovative digital solutions that empower businesses and enhance user experiences. With a strong focus on data security, performance, and modern technologies, we design and develop user-friendly interfaces, scalable applications, and robust IT infrastructures. Our approach combines creativity with technical expertise, ensuring that every project we deliver is reliable, efficient, and aligned with client objectives." imageUrls={itworkteam} />


                <section className='it_civilteamsinfo_block'>
                    <Container>
                        <Heading headbg="Team" headtext="Our Professional" subheadtext="Expert Eletrical Team" textAlign="text-center" />
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    IT Leadership Team
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Ourteams />
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    IT Management
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Civilourteams />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </section>

                <Testimonials />
            </div>
        </>
    )
}






// _______________________________________ IT  page ______________________________________________
// _______________________________________ IT  page ______________________________________________

























// _______________________________________ Electrical  page ______________________________________________
// _______________________________________ Electrical  page ______________________________________________




import eletrical_banner from './../../assets/images/eletricalimgs.jpg';
import eletricalimgs1 from './../../assets/images/eletricalimgs1.jpg';
import eletricalimgs2 from './../../assets/images/eletricalimgs2.webp';
import eletricalimgs3 from './../../assets/images/eletricalimgs3.jpg';
import eletricalimgs4 from './../../assets/images/eletricalimgs4.jpg';

import eletricalteam from './../../assets/images/eletricalteam.webp';
import Clienttestimonial, { CivilClienttestimonial } from '../../components/commonComponents/clientTestimonial';



export function Eletricalaboutus() {
    return (
        <>
            <div>
                <Pagebanner titletext="Power" subtitletext="Distribution is the most crucial link in the value chain of the power sector. It is the sole point of contact between utilities and consumers." imageUrls={eletrical_banner} />


                <section className='it_servicesinfo_main it_servicesinfo_main1'>
                    <Container>
                        <Row>
                            <Col lg="5" md="5" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={eletricalimgs1} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>

                            <Col lg="7" md="7" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Distribution" headtext="Power Distribution" subheadtext="Distribution is the most crucial link in the value chain of the power sector" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            Distribution is the most crucial link in the value chain of the power sector. It is the sole point of contact between utilities and consumers. In power distribution, we execute projects for the construction of new infrastructure as well as the augmentation of existing infrastructure for various power distribution companies and agencies. This includes the following activities:
                                        </p>
                                        <ul className='it_listitem'>
                                            <li className='nav-item'>
                                                <p>
                                                    Construction of 33 kV overhead lines
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Construction of 11 kV overhead lines
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Convention Distribution Substations (11/0.433 kV) and Compact Substations
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Service Connections to Consumers
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <p>
                                        We are fully equipped with highly experienced employees for engineering, procurement, and construction for all types of work related to power distribution.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Eletricalachivments />
                <section className='it_servicesinfo_main it_elservicesinfo_main '>
                    <Container>
                        <Row>
                            <Col lg="7" md="7" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Solutions" headtext="Power Distribution" subheadtext="Comprehensive Solutions & achievements for Power Distribution" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <p>
                                            We have played a pivotal role in expanding India's power distribution network, successfully executing multiple system strengthening projects under key government initiatives, including:
                                        </p>
                                        <ul className='it_listitem'>
                                            <li className='nav-item'>
                                                <p>
                                                    Rajiv Gandhi Grameen Vidyutikaran Yojana (RGGVY)
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    ADB Funded Feeder Separation Program
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Revamped Distribution Sector Scheme (RDSS)
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <p>
                                        Our efforts have lit up more than 30,000 below-poverty-line homes, bringing sustainable and affordable power to remote villages across Madhya Pradesh.
                                    </p>
                                    <p>
                                        We have successfully executed power distribution projects for MPMKVVCL & Currently executing projects for MPMKVVCL & MPPKVVCL under RDSS Scheme. Some of our notable achievements include:
                                    </p>

                                    <ul className='it_listitem'>
                                        <li className='nav-item'>
                                            <p>
                                                High Tension (HT) Line – 1389 km
                                            </p>
                                        </li>
                                        <li className='nav-item'>
                                            <p>
                                                Low Tension (LT) Line – 650 km
                                            </p>
                                        </li>
                                        <li className='nav-item'>
                                            <p>
                                                25 kVA, 11/0.4 kV Transformers – 1449 units
                                            </p>
                                        </li>
                                        <li className='nav-item'>
                                            <p>
                                                Energy Meters Installed – 24,884 units
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg="5" md="5" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={eletricalimgs2} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className='it_servicesinfo_main it_servicesinfo_main1'>
                    <Container>
                        <Row>
                            <Col lg="5" md="5" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={eletricalimgs3} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                            <Col lg="7" md="7" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="Projects" headtext="Key Projects" subheadtext="Successfully Completed" textAlign="text-left" />
                                    <div className='it_blocks_items'>
                                        <ul className='it_listitem'>
                                            <li className='nav-item'>
                                                <p>
                                                    Supply, Erection, Testing and Commissioning of New 11KV & LT Lines and 11/0.4 KV Distribution Substations” Under RGGVY 11th Plan 2nd Phase in Sehore District.
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Supply of materials, survey, installation, testing and commissioning of 11KV feeders under feeder separation program for separation of non-agricultural and agricultural consumers, replacement of bare LT Line with AB Cable of Bhind District

                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className='it_servicesinfo_main it_elservicesinfo_main'>
                    <Container>
                        <Row>
                            <Col lg="7" md="7" sm="12">
                                <div className='it_servicesinfo_item'>
                                    <Heading headbg="progress" headtext="Orders Under progress" subheadtext="Under progress Projects" textAlign="text-left" />

                                    <div className='it_blocks_items'>
                                        <ul className='it_listitem'>
                                            <li className='nav-item'>
                                                <p>
                                                    Supply, Installation, Testing and Commissioning of New 11 KV Lines, LT Line on AB  cable, Distribution Transformer Substation and Supporting works such as DPs, TPs, Crossing etc. for separation of 11 KV Mix Feeders & Mix DTRs under Revamped Reforms based and Results-linked Distribution Sector (Package-04) in Shahdol, Anuppur and Umariya circles of MPPKVVCL, Jabalpur Company Area
                                                </p>
                                            </li>
                                            <li className='nav-item'>
                                                <p>
                                                    Supply, Installation, Testing and Commissioning of 33 KV Line associated works such as 33 KV Line Bifurcation, 33 KV Line Interconnection and 33 KV Line Conductor Augmentation under Revamped Reforms-based and Results-linked Distribution Sector Scheme- (RDSS) Package-6A (Lot-III - Gwalior CC, Gwalior O&M, Datia & Bhind Circle) in Gwalior Region of MPMKVVCL, Bhopal.


                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col >
                            <Col lg="5" md="5" sm="12">
                                <div className='it_imgbox'>
                                    <LazyLoadImage effect="blur" src={eletricalimgs4} className='img-fluid' alt='Join team Banner' />
                                </div>
                            </Col>
                        </Row >
                    </Container >
                </section >

                <Testimonials />

            </div >
        </>
    )
}


export function Eletricalaboutteams() {
    return (
        <>
            <div>
                <Pagebanner titletext="Our Electrical team is committed to providing safe" subtitletext="Our Electrical team is committed to providing safe, efficient, and innovative electrical solutions. With expert engineers and modern technology, we ensure seamless power systems, reliable installations, and long-lasting performance. Every project is carried out with precision, safety, and excellence at its core." imageUrls={eletricalteam} />


                <section className='it_civilteamsinfo_block'>
                    <Container>
                        <Heading headbg="Team" headtext="Our Professional" subheadtext="Expert Eletrical Team" textAlign="text-center" />
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Leadership Team
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Ourteams />
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Project Management
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Civilourteams />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </section>

                <Testimonials />
            </div>
        </>
    )
}



// _______________________________________ Electrical  page ______________________________________________
// _______________________________________ Electrical  page ______________________________________________







export default Aboutus;