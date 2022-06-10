import React, { useRef } from 'react';
import { Container, Form, FloatingLabel, Spinner, Alert, Row, Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const nidRef = useRef();
    const { loginWithNid, isLoading, isInvalid, isSuccess } = useAuth();

    const handleOnSubmit = async e => {
        e.preventDefault();
        const nid = nidRef.current.value;
        loginWithNid(nid);
    }

    return (
        <Container className="py-4">
            <h2 className='mb-3'>Please Log in</h2>

            <Row className='justify-content-center rounded px-3'>
                <Col md={6} lg={6} xl={4} className="shadow-lg py-5 px-md-3">

                    {/* Loading Spinner  */}
                    {isLoading && <Spinner animation="border" className='mb-3' role="Logging in">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}

                    {/* Login Failed Alert  */}
                    {isInvalid && <Alert variant="danger">
                        <i className="fas fa-exclamation-triangle fa-lg me-1"></i>
                        User Not Found
                    </Alert>}
                    {isSuccess && <Alert variant="success">
                        <i className="fas fa-check-circle fa-lg me-1"></i>
                        Login Successful!
                    </Alert>}

                    {/* Login Form  */}
                    <Form onSubmit={handleOnSubmit}>
                        <i className="fas fa-user-check fa-5x mb-3"></i>

                        <FloatingLabel
                            label="NID Number"
                            className="mb-3"
                        >
                            {/* NID Input Field  */}
                            <Form.Control type="number" placeholder="Please enter your NID card number." ref={nidRef} required />
                            <Form.Text>Please enter your 10 digit NID card number.</Form.Text>
                            <Form.Text>Use 123456 if you are a visitor.</Form.Text>
                        </FloatingLabel>
                        <input type="submit" value='Login' className='w-50 btn btn-lg btn-success' />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;