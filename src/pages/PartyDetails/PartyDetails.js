import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const PartyDetails = () => {
    const { id } = useParams();
    const [party, setParty] = useState({});

    useEffect(() => {
        let isMounted = true;
        fetch(`http://localhost:5000/party?requestedId=${id}`)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setParty(data)
                }
            })
        return () => { isMounted = false };
    }, [id])

    return (
        <Container className='my-3'>
            <div className='mb-5'>
                <h2>{party?.name}</h2>
                <h5>Leader: <i>{party?.leader}</i></h5>
            </div>

            <Row xs={1} md={2}>
                <Col>
                    <img className='img-fluid' src={party?.partySymbol} alt="" />
                    <h5>Symbol: {party?.symbolName}</h5>
                </Col>
                <Col>
                    <div className='text-start'>
                        <p><b>Details:</b> {party?.details}</p>
                        <br />
                        <p><b>History:</b> {party?.history}</p>
                        <h5>Popular Faces</h5>
                        <div>
                            {
                                party?.knownFaces?.map(face => <div
                                    className='d-flex flex-row align-items-center m-2'
                                    key={face.Name}
                                >
                                    <div className='me-2'>
                                        <img style={{ width: '100px', borderRadius: '50%' }} src={face.image} alt="" />
                                    </div>
                                    <div>
                                        <h6>{face?.Name}</h6>
                                        <p>{face?.Designation}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PartyDetails;