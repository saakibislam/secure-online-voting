import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CandidateCard from './CandidateCard/CandidateCard';

const Vote = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/candidates')
            .then(res => res.json())
            .then(data => setCandidates(data));
    }, [])



    return (
        <Container>
            <h1>Vote Now</h1>
            <Container>
                <Row xs={1} md={2} lg={3} className='g-3'>
                    {
                        candidates?.map(candidate => <CandidateCard
                            candidate={candidate}
                            key={candidate._id}
                        ></CandidateCard>)
                    }
                </Row>

            </Container>
        </Container>
    );
};

export default Vote;