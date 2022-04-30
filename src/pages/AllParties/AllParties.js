import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PartyCard from './PartyCard/PartyCard';

const AllParties = () => {
    const [parties, setParties] = useState([]);

    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:5000/parties')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setParties(data)
                }
            })
            .catch((error) => console.log(error))
        return () => { isMounted = false };
    }, [])

    return (
        <Container className='my-3'>
            <h2>All Political Parties</h2>
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