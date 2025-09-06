
import React from 'react';
import './formcontrol.css';
import { Form } from 'react-bootstrap';



export default function Fromcontrol({ label, name, placeholder,as,typeinput  }) {
    return (
        <>
            <div> 
                <Form.Group className="form-group">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control 
                        name={name}
                        as={as}
                        type={typeinput}
                        placeholder={placeholder}
                    />
                </Form.Group>
            </div>
        </>
    )
}

