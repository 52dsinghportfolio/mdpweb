import React from 'react';
import './profiledetails.css';
import Pagetitle from '../../components/commonComponents/pagetitle/pagetitle';
import portfoliobg from './../../assets/images/portfoliotitle.avif';
import Projectdetails from '../../components/portfolioComponents/projectDetails';
import Heading from '../../components/commonComponents/heading';
import Profileinfo from '../../components/commonComponents/profileInfo';



export default function Profiledetails() {
    return (
        <>
            <div>


                <Pagetitle titletext="Portfolio Details" linktext="portfoliodetails" bgcolor="#000" imageUrl={portfoliobg} />
                 {/* <Heading
                    headbg="Project Info"
                    headtext="Introduce Our Projects"
                    subheadtext="Introduce Our Projects"
                    textAlign="text-center"
                /> */}  
                <Profileinfo/> 


            </div>
        </>
    )
}

