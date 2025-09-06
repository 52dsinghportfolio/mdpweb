import React from 'react';
import './careerjob.css';

import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
import bgCareer from './../../assets/images/career.jpg';
import Jobopenings from '../../components/careerComponents/jobOpenings';
import Jobgudline from '../../components/careerComponents/jobgudline';


export default function Careerjob() {
    return (
        <>
            <div>
                <Pagetitle titletext="Job Opening" linktext="Jobopening" bgcolor="#fff" imageUrl={bgCareer} />
 


                <Jobopenings /> 
                <Jobgudline/>
            </div>
        </>
    )
}
