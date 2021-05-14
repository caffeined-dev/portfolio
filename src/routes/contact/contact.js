import React, { useState } from 'react';
import './contact.scss';
import '../../css/mediaqueries.scss';
import { Form, Button, Col } from 'react-bootstrap';

export default function Contact() {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");
    let [sent, setSent] = useState(false);


    function sendMessage() {
        setSent(true);
    }

    return (
        <div className="w-100 d-flex flex-column align-items-center">
            <Form className="p-5 media-width d-flex flex-column align-items-center">
                <Form.Row className="media-width">
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={ev => setName(ev.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="e-mail" value={email} onChange={ev => setEmail(ev.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Form.Group className="media-width" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} value={message} onChange={ev => setMessage(ev.target.value)} />
                </Form.Group>
                <Button disabled={sent} variant={sent ? "secondary" : "info"} onClick={() => sendMessage()}>
                    {sent ? "Sent" : "Send"}
                </Button>
            </Form>
        </div>
    );
}