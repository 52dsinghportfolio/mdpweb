import React from 'react';
import './certificates.css';
import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
import bgContact from './../../assets/images/contacttitle.jpeg';
// import bgCivilcontact from './../../assets/images/civiltitlebg.webp';
// import ContactExpert from '../../components/contactComponents/contactExpert';
// import { Contactform, CivilContactform } from '../../components/contactComponents/contactForm';
// import Ourbranch from '../../components/contactComponents/ourBranch';
// import Contactmap from '../../components/contactComponents/contactMap';
// import { NavLink } from 'react-router-dom';
// import Contactinfo from '../../components/contactComponents/contactinfo';
import Certificatesinfo, { Civilcertificatesinfo } from '../../components/aboutComponents/certificatesinfo';
import Pagebanner from '../../components/commonComponents/pageBanner/pagebanner';

export function Certificates() {
    return (
        <>
            <div>
                <Pagetitle titletext="Certification" linktext="Certificates" bgcolor="#fff" imageUrl={bgContact} />
                <Certificatesinfo />


            </div>
        </>
    );
}



import civilcertificatebgs from './../../assets/images/civilcertificatebgs.jpg';
export function Civilcertificates() {
    return (
        <>
            <div>
                <Pagebanner titletext="Building Trust Through Certified Expertise" subtitletext="EOur certifications stand as proof of our commitment to quality, safety, and reliability in every project we undertake. These accreditations highlight our expertise in civil engineering practices and adherence to industry standards. With certified excellence, we build not just structures, but lasting trust." imageUrls={civilcertificatebgs} />
                {/* <Pagetitle titletext="Certification" linktext="Certificates" bgcolor="#fff" imageUrl={bgContact} /> */}
                <Civilcertificatesinfo />


            </div>
        </>
    );
}




export default Certificates