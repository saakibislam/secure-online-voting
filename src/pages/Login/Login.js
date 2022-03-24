import React, { useRef } from 'react';
import { Container, Form, FloatingLabel, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const nidRef = useRef();
    const { fetchUser, clearUser } = useAuth();

    const handleOnSubmit = e => {
        e.preventDefault();
        const nid = nidRef.current.value;

        fetchUser(nid);
    }

    return (
        <Container>
            <h1>Please Log in</h1>

            <Form className='mx-auto my-3 w-25' onSubmit={handleOnSubmit}>
                <FloatingLabel
                    label="NID Number"
                    className="mb-3"
                >
                    {/* NID Input Field  */}
                    <Form.Control type="text" placeholder="Please enter your NID card number." ref={nidRef} required />
                    <Form.Text>Please enter your NID card number</Form.Text>
                </FloatingLabel>
                <input type="submit" value='Login' className='btn btn-lg btn-primary' />
            </Form>
            <Button onClick={clearUser}>Clear</Button>
        </Container>
    );
};

export default Login;