


import React from 'react';
import './heading.css';

 

// import bgContact from './../../../assets/images/Bgcontact.png';
// import bgContact from './../../../assets/images/contact-banner.jpg';
// import bgContact from './../../../assets/images/contact-banner.jpg';



export default function Heading({ headbg,headtext,subheadtext,bgcolor,textAlign  }) {
    return (
        <>
            <div>
                <div className="it_heading_block">
                    <span className={`it_shadow_title ${textAlign}`} >
                        {headbg}
                    </span>
                    <h1 className={`it_titleinfo ${textAlign}`}>
                        <span className="it_title_text">
                            <span className="it_shadow_title_inner" style={{background:bgcolor}}>
                                {headtext}
                            </span>
                        </span>
                    </h1>
                    <h2 className={`it_subtitleinfo ${textAlign}`}>
                        {subheadtext}
                    </h2>
                </div>

            </div>
        </>
    )
}







