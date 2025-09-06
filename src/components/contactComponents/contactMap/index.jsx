




import React from 'react';
import './contactmap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHouse, faDotCircle } from '@fortawesome/free-solid-svg-icons';




export default function Contactmap({ address }) {
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

    return (
        <>
            <div> 
                <div className='it_adddreesmap'>
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d58649.31718205077!2d77.41378030587954!3d23.258281403703077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x397c69c0fa01c45f%3A0x57de907b0c7e24c7!2sMDP%20INFRA%20(INDIA)%20PVT.%20LTD.%2C%20MDP%20House%2C%20Govindpura%20Industrial%20Area%2C%20Bhopal%2C%20Madhya%20Pradesh!3m2!1d23.2582868!2d77.4550659!4m5!1s0x397c69c0fa01c45f%3A0x57de907b0c7e24c7!2sMDP%20House%2C%2050-A%2C%20Govindpura%20Industrial%20Area%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023!3m2!1d23.2582868!2d77.4550659!5e0!3m2!1sen!2sin!4v1752838057113!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="MDP Infra Google Map"
                    ></iframe> */}

                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="300%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={address}
                    ></iframe>

                </div>
            </div>
        </>
    )
}











