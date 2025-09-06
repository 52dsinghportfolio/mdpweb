

import React from 'react';
import './pagetitle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faHouse,faDotCircle} from '@fortawesome/free-solid-svg-icons';

// import bgContact from './../../../assets/images/Bgcontact.png';
// import bgContact from './../../../assets/images/contact_banner.jpg';

import { NavLink } from 'react-router-dom';


export default function Pagetitle({ titletext, linktext,imageUrl  }) { 
    return (
        <>
            <div>
                <div className="it_pagetitle_block" style={{ background: `url(${imageUrl})` }}>
                    <div className="container">
                        <div className="it_pagetitle_item">
                            <h1>
                                {titletext}
                            </h1>
                            <ul className="navbar">
                                <li className="nav-item">
                                    <NavLink className="nav-link">
                                        <FontAwesomeIcon icon={faHouse} />
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link nav-seprate"> 
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link">
                                        <FontAwesomeIcon icon={faDotCircle} /> 
                                        {linktext}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

 