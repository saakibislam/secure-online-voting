import React, { useRef } from 'react';
import { Container, Form, FloatingLabel, Spinner, Alert } from 'react-bootstrap';
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
        <Container className="my-3">
            <h1>Please Log in</h1>

            {/* Loading Spinner  */}
            {isLoading && <Spinner animation="border" role="Logging in">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}

            {/* Login Form  */}
            <Form className='mx-auto my-3 shadow-lg' style={{ padding: '1.5em', width: '30vw' }} onSubmit={handleOnSubmit}>
                {/* Login Failed Alert  */}
                {isInvalid && <Alert variant="danger">User Not Found</Alert>}
                {isSuccess && <Alert variant="success">Login Successful !</Alert>}
                <img className="w-25 mb-4" src="https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_960_720.png" alt="" />

                <FloatingLabel
                    label="NID Number"
                    className="mb-3"
                >
                    {/* NID Input Field  */}
                    <Form.Control type="number" placeholder="Please enter your NID card number." ref={nidRef} required />
                    <Form.Text>Please enter your 10 digit NID card number</Form.Text>
                </FloatingLabel>
                <input type="submit" value='Login' className='btn btn-lg btn-success' />
            </Form>
        </Container>
    );
};

export default Login;