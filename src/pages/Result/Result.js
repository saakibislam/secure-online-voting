import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import BarChart from './BarChart/BarChart';
import CountdownClock from './CountdownClock/CountdownClock';
import DoughnutChart from './DoughnutChart/DoughnutChart';
import VoteCard from './VoteCard/VoteCard';


const Result = () => {
    const [candidates, setCandidates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://secret-brook-82250.herokuapp.com/candidates')
            .then(res => res.json())
            .then(data => {
                setCandidates(data.filter(cd => cd.approved === true))
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }, [])


    return (
        <Container className="my-3">
            <h3>Voting will be closed in</h3>
            <CountdownClock></CountdownClock>

            {isLoading ?
                <Spinner animation="border" variant="danger" style={{ width: '5em', height: '5em' }} ></Spinner>
                : <>
                    <Row className='my-3'>
                        {candidates.map(candidate => <VoteCard
                            key={candidate._id}
                            candidate={candidate}
                        ></VoteCard>)}
                    </Row>
                    <Row md={1} lg={2} className="my-3 align-items-center">
                        <Col>
                            <BarChart candidates={candidates}></BarChart>
                        </Col>
                        <Col>
                            <DoughnutChart></DoughnutChart>
                        </Col>
                    </Row>
                </>
            }

        </Container >
    );
};

export default Result;