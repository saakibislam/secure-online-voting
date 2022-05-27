import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const [user, setUser] = useState();
    const { getUser } = useAuth();

    useEffect(() => {
        setUser(getUser());
    }, [])

    return (
        <Container className='my-3'>
            <h3 className='mb-3'>Your Profile</h3>
            <Row>
                <Col sm={12} md={2} lg={2}>
                    <img className='img-fluid' src={user?.img} alt="" />
                </Col>
                <Col className='border-start text-start ps-5' sm={12} md={10} lg={10}>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2" className="fw-bold">
                                NID
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={user?.nidNumber} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2" className="fw-bold">
                                Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={user?.name} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2" className="fw-bold">
                                Father's Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={user?.fathersName} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2" className="fw-bold">
                                Mother's Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={user?.mothersName} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2" className="fw-bold">
                                Date of Birth
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={user?.birthDate} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2" className="fw-bold">
                                Blood Group
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={user?.bloodGroup} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2" className="fw-bold">
                                Gender
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={user?.gender} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2" className="fw-bold">
                                Religion
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={user?.religion} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2" className="fw-bold">
                                Address
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={user?.address?.division} />
                            </Col>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;