import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CandidateDetails = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/candidate/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCandidate(data))
    }, [id])

    return (
        <Container className='my-3'>
            <h2 className='mb-3'>Candidate of {candidate.party}</h2>

            <Row>
                <Col xs={12} md={6} lg={6}>
                    <div data-aos="fade-down" data-aos-duration="2000">
                        <img src={candidate.img} className='img-fluid rounded' alt='' />
                    </div>

                </Col>

                <Col xs={12} md={6} lg={6}>
                    <div data-aos="fade-left" data-aos-duration="2000">
                        <h2>{candidate.name}</h2>
                        <ul className='list-group text-start'>
                            <li className='list-group-item'>Father: {candidate.fatherName}</li>
                            <li className='list-group-item'>Mother: {candidate.motherName}</li>
                            <li className='list-group-item'>Religion: {candidate.religion}</li>
                            <li className='list-group-item'>Birth Place: {candidate.memberOfResident}</li>
                            <li className='list-group-item'>Participated in: {candidate?.participatedElections?.join()}</li>
                        </ul>
                    </div>
                </Col>
            </Row>


            <div className='m-5'>


            </div>
        </Container>
    );
};

export default CandidateDetails;