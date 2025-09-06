import React from 'react';
import './home.css';

import Heading from '../../components/commonComponents/heading';




import { EffectCoverflow, Pagination } from 'swiper/modules';
import Whychoose from '../../components/homeComponents/whychoose';
import Homebanner from '../../components/homeComponents/homeBanner';
import Aboutcopmany from '../../components/commonComponents/aboutCompany';
import Ourachivments from '../../components/homeComponents/ourAchivments';
import Ourservices from '../../components/homeComponents/ourServices';
import Ourworkprocess from '../../components/homeComponents/ourWorkprocess';
import Clienttestimonial from '../../components/commonComponents/clientTestimonial';




import { Container } from 'react-bootstrap';
import Testimonial from '../../components/commonComponents/testimonial';
import Ourprojects from '../../components/homeComponents/ourProjects';
import Testimonials from '../../components/commonComponents/testimonials';
import Ourvision from '../../components/homeComponents/ourVision';
import { Civilportfolio } from '../portfolio';
import { Homeprojectlink } from '../../components/portfolioComponents/projectList';
// import Projectlink from './../../components/portfolioComponents/projectList';


export default function Home() {
    return (
        <>
            <div>


                <Homebanner />
                <Aboutcopmany />
                <Ourachivments />
                <Ourservices />
                <Whychoose />
                <Ourworkprocess />

                <section className='it_clienttestimonial_main'>
                    <Container>
                        <Heading headbg="Clients" headtext="Our Esteemed Clients" subheadtext="Explore the changes and success with technology and services" textAlign="text-center" />
                        {/* <Clienttestimonial images={clientimages} /> */}
                        <Clienttestimonial />
                    </Container>
                </section>



                {/* <Testimonial /> */}
                <Testimonials />



                {/* <Ourvision/>     
                <Ourprojects /> */}


                <section className='it_clienttestimonial_main'>
                    <Container>
                        <Heading headbg="Partners" headtext="Our Technology partners." subheadtext="Explore the changes and success with technology and services" textAlign="text-center" />
                        {/* <Clienttestimonial images={clientimages} /> */}
                        <Clienttestimonial />
                    </Container>
                </section>

                <Homeprojectlink />


            </div>
        </>
    )
}
