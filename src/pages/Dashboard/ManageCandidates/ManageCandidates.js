import React, { useState, useEffect } from 'react'
import { Button, Table, Tooltip, OverlayTrigger, Modal, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ManageCandidates = () => {
    const [candidates, setCandidates] = useState()
    const [candidateData, setCandidateData] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:5000/candidates')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setCandidates(data)
                }
            })
        return () => {
            isMounted = false;
        }
    }, [])

    const handleOnClick = action => {
        fetch('http://localhost:5000/candidates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(action)
        })
            .then(res => res.json())
            .then(data => setCandidates(data))
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newCandidateData = { ...candidateData };
        newCandidateData[field] = value;
        setCandidateData(newCandidateData)
    }

    const getSelectValues = select => {
        var result = [];
        var options = select && select.options;
        var opt;

        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                result.push(opt.value || opt.text);
            }
        }
        return result;
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        var el = document.getElementsByTagName('select')[0];
        const previousElections = getSelectValues(el);
        candidateData.previousElections = previousElections;
        candidateData.approved = false;
        candidateData.voteCount = 0;

        fetch('http://localhost:5000/registerCandidate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(candidateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    document.getElementsByTagName('form')[0].reset()
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='py-5 pe-4'>
            <h4 className='mb-3'>Manage Candidates</h4>
            {/* Candidate Register Button  */}
            <Button
                className='d-block ms-auto my-2'
                variant='outline-success'
                onClick={handleShow}
            >
                Add more candidates
            </Button>

            {/* Candidates Table  */}
            <div>
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th><i className="fas fa-user-tie"></i></th>
                            <th>Name</th>
                            <th>Party</th>
                            <th>Party Symbol</th>
                            <th>From</th>
                            <th>Religion</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            candidates?.map((candidate, index) => (
                                <tr key={candidate._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <OverlayTrigger
                                            placement="right"
                                            overlay={<Tooltip id="candidate-image-tooltip"><img className="img-fluid" src={candidate.img} alt="" /></Tooltip>}
                                        >
                                            {({ ref, ...triggerHandler }) => (
                                                <Link
                                                    style={{ color: 'inherit' }}
                                                    ref={ref}
                                                    {...triggerHandler}
                                                    to={`/candidate/${candidate._id}`}>
                                                    {candidate?.name}
                                                </Link>
                                            )}
                                        </OverlayTrigger>
                                    </td>
                                    <td>{candidate?.party}</td>
                                    <td>{candidate?.symbol}</td>
                                    <td>{candidate?.memberOfResident}</td>
                                    <td>{candidate?.religion}</td>
                                    <td>
                                        <Button
                                            disabled={candidate.approved}
                                            onClick={() => handleOnClick({ type: 'approve', candidateId: candidate._id })}
                                            variant='success'
                                            size='sm'>
                                            Approve
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            disabled={!candidate.approved}
                                            onClick={() => handleOnClick({ type: 'decline', candidateId: candidate._id })}
                                            variant='danger'
                                            size='sm'>
                                            Decline
                                        </Button></td>
                                </tr>)
                            )
                        }

                    </tbody>
                </Table>
            </div>

            {/* Add More Candidate Modal  */}
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='mx-auto'>Register New Candidates</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleOnSubmit}>
                        <Row>
                            <Col>
                                <Form.Label>Candidate Name</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="name" onBlur={handleOnBlur} type="text" placeholder="Full Name" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Candidate Image</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="img" onBlur={handleOnBlur} type="text" placeholder="Image URL" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Father's Name</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="fathersName" onBlur={handleOnBlur} type="text" placeholder="Father's Name" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Mother's Name</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="mothersName" onBlur={handleOnBlur} type="text" placeholder="Mother's Name" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control name="dateOfBirth" onBlur={handleOnBlur} type="date" placeholder="Date of Birth" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>From</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="memberOfResident" onBlur={handleOnBlur} type="text" placeholder="Birth Place" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Religion</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="religion" onBlur={handleOnBlur} type="text" placeholder="Religion" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Candidate Party</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="party" onBlur={handleOnBlur} type="text" placeholder="e.g. Bangladesh Awami League" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Party Symbol</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="symbol" onBlur={handleOnBlur} type="text" placeholder="e.g. Boat" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Previous Election</Form.Label>
                                <Form.Select multiple >
                                    <option value="2008">2008</option>
                                    <option value="2012">2012</option>
                                    <option value="2016">2016</option>
                                    <option value="2020">2020</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <div className="d-flex justify-content-end">
                            <Button
                                className='m-1'
                                variant="danger"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                            <Button
                                className='m-1'
                                variant="success"
                                type='submit'
                            >
                                Understood
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default ManageCandidates