// src/main.jsx
import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import {Aboutus,Civilaboutus, Civilaboutteams, Eletricalaboutteams, Eletricalaboutus, Softwaredevlopment, Itmanpower, Systemintegration, Itaboutteams} from '../pages/aboutus';
import Gallery, { Civilgallery, Eletricalallery } from '../pages/gallery';
import Career from '../pages/career';
import Services from '../pages/services';
import {Contactus,Civilcontactus} from '../pages/contactus'; 
import {Portfolio,Civilportfolio, Eletricalportfolio, Itportfolio} from './../pages/portfolio';



import Ithome from '../pages/services/servicesIt/home';
import Eletricialhome from '../pages/services/servicesItEletrical/home';
import Civilhome from '../pages/services/servicesCivil/home';
import Manufacturinghome from '../pages/services/servicesManufacturing/home';
import Errorpage from '../pages/errorpage';
import Portfoliodetails from '../pages/portfolioDetails';
import Profiledetails from '../pages/profiledetails';
import Certificates, { Civilcertificates } from '../pages/certificates';
import Careerjob from '../pages/careerjob';
import Civilservices from '../pages/services';






export default function RoutesLink() {
    return (
        <>
            <div>
                <Routes> 


 {/* <Portfoliodetails */}
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/gallrey" element={<Gallery />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/career/job-openings/" element={<Careerjob />} />
                    <Route path="/contactus" element={<Contactus />} />
                    <Route path="/portfoliodetails" element={<Portfoliodetails />} />
                    <Route path="/profiledetails" element={<Profiledetails />} />
                    <Route path="*" element={<Errorpage />} />
        

                    {/* ----------------- Civil page routers ----------------- */}
                    {/* ----------------- Civil page routers ----------------- */} 
                    <Route path="/civil" element={<Civilaboutus />} />
                    {/* <Route path="/civil/home" element={<Civilaboutus />} /> */}
                    <Route path="/civil/aboutus" element={<Civilaboutus />} />
                    <Route path="/civil/ourteams" element={<Civilaboutteams />} />
                    <Route path="/civil/services" element={<Civilservices />} />
                    <Route path="/civil/portfolio" element={<Civilportfolio />} />
                    <Route path="/civil/portfoliodetails" element={<Portfoliodetails />} /> 
                    {/* <Route path="/civil/certificates" element={<Certificates />} /> */}
                    
                    <Route path="/civil/gallrey" element={<Civilgallery />} />
                    <Route path="/civil/career" element={<Career />} />
                    <Route path="/civil/career/job-openings/" element={<Careerjob />} />
                    <Route path="/civil/certificates" element={<Civilcertificates />} />
                    <Route path="/civil/contatcus" element={<Civilcontactus />} />  
                    
                    {/* ----------------- Civil page routers ----------------- */}
                    {/* ----------------- Civil page routers ----------------- */} 







                    <Route path="/electrical" element={<Eletricalaboutus />} />
                    <Route path="/electrical/aboutus" element={<Eletricalaboutus />} />
                    <Route path="/electrical/ourteam" element={<Eletricalaboutteams />} />
                    <Route path="/electrical/portfolio" element={<Eletricalportfolio />} />
                    <Route path="/electrical/gallery" element={<Eletricalallery />} />

 
   
  



                    {/* <Route path="/it" element={<Ithome />} /> */}
                    <Route path="/it" element={<Systemintegration />} />
                    <Route path="/it/systemintegration" element={<Systemintegration />} />
                    <Route path="/it/softwaredevlopment" element={<Softwaredevlopment />} />
                    <Route path="/it/manpower" element={<Itmanpower />} /> 
                    <Route path="/it/ourteam" element={<Itaboutteams />} /> 
                    <Route path="/it/portfolio" element={<Itportfolio />} /> 

                    <Route path="/manufacturing" element={<Manufacturinghome />} />
                    <Route path="/manufacturing/aboutus" element={<Aboutus />} /> 

                </Routes>
            </div>
        </>
    )
}


// import React from 'react';
// export default function Routes() {
//     return (
//         <>
//             <div>
//                 <h1> Home </h1>
//             </div>
//         </>
//     )
// }