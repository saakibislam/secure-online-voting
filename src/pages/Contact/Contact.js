import React from 'react';
import { Container, Form } from "react-bootstrap";

const Contact = () => {
    return (
        <Container>
            <h2 className='my-3'>Contact</h2>
            <Form className='w-50 mx-auto text-start'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>NID Number</Form.Label>
                    <Form.Control type="text" placeholder="Your NID Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control as="textarea" rows={8} />
                </Form.Group>
                <Form.Control className='w-25 btn btn-lg btn-primary' type='submit' value='Submit' />
                {/* <input className='btn btn-lg btn-primary' type="submit" value="Submit" /> */}
            </Form>
        </Container>
    );
};

export default Contact;