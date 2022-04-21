import React, { useRef } from 'react';
import { Container, Form, FloatingLabel, Button, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const nidRef = useRef();
    const { fetchUser, clearUser, isLoading } = useAuth();

    const handleOnSubmit = e => {
        e.preventDefault();
        const nid = nidRef.current.value;

        fetchUser(nid);
        // ---------------------- page reload after login
        // setTimeout(() => {
        //     window.location.replace('/')
        // }, 1000);
    }

    return (
        <Container>
            <h1>Please Log in</h1>

            {/* Loading Spinner  */}
            {isLoading && <Spinner animation="border" role="Logging in">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}

            {/* Login Form  */}
            <Form className='mx-auto my-3 w-25' onSubmit={handleOnSubmit}>
                <FloatingLabel
                    label="NID Number"
                    className="mb-3"
                >
                    {/* NID Input Field  */}
                    <Form.Control type="text" placeholder="Please enter your NID card number." value="1111122222" ref={nidRef} required />
                    <Form.Text>Please enter your NID card number</Form.Text>
                </FloatingLabel>
                <input type="submit" value='Login' className='btn btn-lg btn-primary' />
            </Form>
            <Button onClick={clearUser}>Clear</Button>
        </Container>
    );
};

export default Login;