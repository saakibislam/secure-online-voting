import React, { useRef } from 'react';
import { Container, Form, FloatingLabel, Button, Spinner, Alert } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const nidRef = useRef();
    const { loginWithNid, clearUser, isLoading, isInvalid } = useAuth();

    const handleOnSubmit = async e => {
        e.preventDefault();
        const nid = nidRef.current.value;
        loginWithNid(nid);
    }

    return (
        <Container className="my-3">
            <h1>Please Log in</h1>

            {/* Loading Spinner  */}
            {isLoading && <Spinner animation="border" role="Logging in">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}

            {/* Login Form  */}
            <Form className='mx-auto my-3 w-25' onSubmit={handleOnSubmit}>
                {/* Login Failed Alert  */}
                {isInvalid && <Alert variant="danger">User Not Found</Alert>}

                <FloatingLabel
                    label="NID Number"
                    className="mb-3"
                >
                    {/* NID Input Field  */}
                    <Form.Control type="text" placeholder="Please enter your NID card number." ref={nidRef} required />
                    <Form.Text>Please enter your NID card number</Form.Text>
                </FloatingLabel>
                <input type="submit" value='Login' className='btn btn-lg btn-outline-success' />
            </Form>
            <Button onClick={clearUser}>Clear</Button>
        </Container>
    );
};

export default Login;