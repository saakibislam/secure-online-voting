import React from 'react';
import { Container } from 'react-bootstrap';

const FaceVerification = () => {

    return (
        <Container className='my-3'>
            <iframe src="http://localhost:8989" width={'100%'} height={700}></iframe>
        </Container>
    );
};

export default FaceVerification;