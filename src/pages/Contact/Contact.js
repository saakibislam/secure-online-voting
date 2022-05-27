import React from 'react';
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Contact = () => {
    return (
        <Container className='my-3'>
            <h2>Contact</h2>
            <Row className="justify-content-center text-start py-3">
                <Col xs={10} md={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>NID number</Form.Label>
                            <Form.Control type="number" placeholder="e.g. 123456789" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows={8} />
                        </Form.Group>
                        <Button>Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;