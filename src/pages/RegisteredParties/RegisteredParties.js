import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PartyCard from '../AllParties/PartyCard/PartyCard';

const RegisteredParties = () => {
    const [parties, setParties] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parties')
            .then(res => res.json())
            .then(data => {
                const registeredParties = data?.filter(party => party?.status == 'registered')
                setParties(registeredParties);
            })
    }, [])


    return (
        <Container>
            <h1>Registered Parties</h1>
            <Row xs={1} md={2} lg={3} className='g-3'>
                {
                    parties?.map(party => <PartyCard
                        key={party._id}
                        party={party}></PartyCard>)
                }
            </Row>
        </Container>
    );
};

export default RegisteredParties;