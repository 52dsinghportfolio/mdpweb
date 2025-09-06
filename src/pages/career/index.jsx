import React from 'react';
import './career.css';

import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
import bgCareer from './../../assets/images/career.jpg';
import CareerStep from '../../components/careerComponents/careerStep';
import Lifeat from '../../components/careerComponents/lifeAt';
import Copmanyenvironment from '../../components/careerComponents/copmanyEnvironment';
import Ourmorals from '../../components/careerComponents/ourMorals'; 
import Hiringprocess from '../../components/careerComponents/hiringProcess';
import Virtualprocess from '../../components/careerComponents/virtualprocess';
import Nextopportunity from '../../components/careerComponents/nextOpportunity';  

export default function Career() {
    return (
        <>
            <div>
                <Pagetitle titletext="Career" linktext="Career" bgcolor="#fff" imageUrl={bgCareer} />
                <CareerStep/>     
                <Lifeat /> 
                <Copmanyenvironment /> 
                <Ourmorals /> 
                <Hiringprocess/>
                <Virtualprocess/>
                <Nextopportunity/>
 
            
            </div>
        </>
    )
}
