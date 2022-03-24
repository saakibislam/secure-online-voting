import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PartyCard from './PartyCard/PartyCard';

const AllParties = () => {
    const [parties, setParties] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parties')
            .then(res => res.json())
            .then(data => setParties(data))
    }, [])

    return (
        <Container>
            <h1>All Political Parties</h1>
            <Container>
                <Row xs={1} md={2} lg={3} className='g-3'>
                    {
                        parties?.map(party => <PartyCard
                            party={party}
                            key={party._id}
                        ></PartyCard>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default AllParties;