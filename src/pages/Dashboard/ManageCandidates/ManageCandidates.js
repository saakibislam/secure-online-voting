import React, { useState, useEffect, useRef } from 'react'
import { Button, Table, Tooltip, OverlayTrigger, Modal, Row, Col, Form, Alert, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ManageCandidates = (props) => {
    const { candidates, setCandidates } = props;
    const [candidateData, setCandidateData] = useState({});
    const [show, setShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const deleteRef = useRef();

    const handleShow = () => setShow(true);
    const handleDeleteModalShow = () => setDeleteModalShow(true)
    const handleClose = () => {
        setShow(false)
        setAddSuccess(false)
    };
    const handleDeleteModalClose = () => {
        setDeleteModalShow(false)
        setDeleteSuccess(false)
    }

    useEffect(() => {
        let isMounted = true;
        fetch('https://secret-brook-82250.herokuapp.com/candidates')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setCandidates(data)
                }
            })
        return () => {
            isMounted = false;
        }
    }, [candidates])

    // Candidate Approve / Decline
    const handleOnClick = action => {
        fetch('https://secret-brook-82250.herokuapp.com/candidates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(action)
        })
            .then(res => res.json())
            .then(data => setCandidates(data))
    }

    // Getting input field data on blur
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

    // Candidate Add
    const candidateAdd = e => {
        e.preventDefault();
        setShowSpinner(true);
        var el = document.getElementsByTagName('select')[0];
        const previousElections = getSelectValues(el);
        candidateData.previousElections = previousElections;
        candidateData.approved = false;
        candidateData.voteCount = 0;

        fetch('https://secret-brook-82250.herokuapp.com/registerCandidate', {
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
                    setAddSuccess(true)
                }
            })
            .catch(error => console.error(error))
            .finally(() => setShowSpinner(false))
    }

    // Candidate Delete
    const deleteCandidate = () => {
        setShowSpinner(true);
        const deleteId = deleteRef.current.value;
        fetch(`https://secret-brook-82250.herokuapp.com/candidate?deleteId=${deleteId}`)
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDeleteSuccess(true)
                }
            })
            .catch(error => console.error(error))
            .finally(() => setShowSpinner(false))
    }

    return (
        <div>
            <h4 className='mb-3'>Manage Candidates</h4>
            {/* Candidate Register & Delete Button  */}
            <div className='d-flex justify-content-end my-3'>
                <Button
                    className='mx-1'
                    variant='outline-warning'
                    onClick={handleDeleteModalShow}
                >
                    <i className="fas fa-user-minus me-1"></i>
                    Delete Candidate
                </Button>
                <Button
                    className='mx-1'
                    variant='outline-success'
                    onClick={handleShow}
                >
                    <i className="fas fa-user-plus me-1"></i>
                    Add More Candidates
                </Button>
            </div>

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
                    {showSpinner && <Spinner className='d-block mx-auto mb-3' variant="info" animation="grow" />}
                    {addSuccess && <Alert variant="success" className='text-center'>Successfully Added!</Alert>}
                    <Form onSubmit={candidateAdd}>
                        <Row>
                            <Col md={6}>
                                <Form.Label>Candidate Name</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="name" onBlur={handleOnBlur} type="text" placeholder="Full Name" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Candidate Image</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="img" onBlur={handleOnBlur} type="text" placeholder="Image URL" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Label>Father's Name</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="fathersName" onBlur={handleOnBlur} type="text" placeholder="Father's Name" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
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
                            <Col md={4}>
                                <Form.Label>Candidate Party</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="party" onBlur={handleOnBlur} type="text" placeholder="e.g. Bangladesh Awami League" required />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Label>Party Symbol</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control name="symbol" onBlur={handleOnBlur} type="text" placeholder="e.g. Boat" required />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
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
                                className='m-1 px-4'
                                variant="success"
                                type='submit'
                            >
                                Add
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Delete Candidate Modal  */}
            <Modal
                show={deleteModalShow}
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title className='mx-auto'>Remove Candidate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showSpinner && <Spinner className='d-block mx-auto mb-3' animation="grow" variant="danger" />}
                    {deleteSuccess && <Alert variant='danger' className='text-center'>Successfully Deleted!</Alert>}
                    <Form.Label>Select candidate to remove</Form.Label>
                    <Form.Select ref={deleteRef} aria-label="Default select example">
                        {
                            candidates?.map(candidate => <option key={candidate._id} value={candidate._id}>{candidate?.name}</option>)
                        }
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleDeleteModalClose}
                    >
                        Close
                    </Button>
                    <Button
                        variant="danger"
                        onClick={deleteCandidate}
                    >
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default ManageCandidates