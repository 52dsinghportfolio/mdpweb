import React from 'react';
import './contactus.css';
import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
import bgContact from './../../assets/images/contacttitle.jpeg';
import bgCivilcontact from './../../assets/images/civiltitlebg.webp';

import ContactExpert from '../../components/contactComponents/contactExpert';
import {Contactform, CivilContactform } from '../../components/contactComponents/contactForm';
import Ourbranch from '../../components/contactComponents/ourBranch';
import Contactmap from '../../components/contactComponents/contactMap';

import { NavLink } from 'react-router-dom';
import Contactinfo from '../../components/contactComponents/contactinfo';

export  function Contactus() {
    return (
        <>
            <div>

                <Pagetitle titletext="Contact Us" linktext="Contactus" bgcolor="#fff" imageUrl={bgContact} />

                <ContactExpert titletext="Contact our experts" subtitletext="Reach Out &amp; Connect" subcontent="Looking for reliable Civil, Electrical, IT, Manufacturing, or Commercial solutions? Our team of experts is committed to delivering sustainable, eco-friendly, and energy-efficient services with modern technology and smart designs. Whether it’s construction, system integration, or commercial fit-outs, we ensure quality and innovation in every project. Reach out to us today and let’s work together to create a smarter and greener future." />
                <Contactform />

                <Ourbranch  />
 
                <Contactmap address="A-50, Govindpura Industrial Area, Bhopal (M.P.)" />  



            </div>
        </>
    );
}



export  function Civilcontactus() {
    return (
        <>
            <div>

                <Pagetitle titletext="Civil Contact Us" linktext="Civil Contactus" bgcolor="#fff" imageUrl={bgCivilcontact} />

                <ContactExpert titletext="Construction at MDP Infra" subtitletext="Let’s Build Together" subcontent="At MDP Infra, we welcome opportunities to collaborate with clients, vendors, and talented professionals. To make it easier, we’ve created dedicated contact channels based on your needs." />
                
                <Contactinfo emailText="Example@gmail.com" phoneText="011-40505934, 40502618" addressText="LGF-75, Uday Park, South Extension, August Kranti Marg, New Delhi."/>
 
                <CivilContactform />
                <Contactmap address="LGF-75, Uday Park, South Extension, August Kranti Marg, New Delhi." /> 


            </div>
        </>
    );
}

export default Contactus;
