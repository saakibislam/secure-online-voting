import React, { useRef, useState } from 'react'
import { Button, Col, Container, Form, Toast, Modal, OverlayTrigger, Row, Tooltip, ToastContainer, Spinner } from 'react-bootstrap'

const ManageVoters = () => {
    const [show, setShow] = useState(false);
    const [registerData, setRegisterData] = useState({});
    const [queryResult, setQueryResult] = useState({});
    const [showSpinner, setShowSpinner] = useState(false);
    const searchRef = useRef();

    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Tooltip Functionality
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Marks all voter eligible
        </Tooltip>
    );

    // Reset Voter Functionality
    const handleResetVoters = () => {
        fetch('https://secret-brook-82250.herokuapp.com/resetVoters')
            .then(res => res.json())
            .then(data => {
                data.acknowledged ? setShowB(true) : setShowB(false)
            })
            .catch(error => console.error(error))
    }

    // Input Data Receiving Functionality
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    // Form On Submit Functionality
    const handleOnSubmit = e => {
        e.preventDefault();

        if (!registerData.gender && !registerData.religion && !registerData.bloodGroup) {
            alert("Please fillup all details")

        } else if (registerData.gender === 'Gender' || registerData.religion === 'Religion' || registerData.bloodGroup === 'Blood Group') {
            alert("Please specify your details")

        } else {
            setShowSpinner(true);
            fetch('https://secret-brook-82250.herokuapp.com/register', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(registerData)
            })
                .then(res => res.json())
                .then(data => {
                    document.getElementsByTagName('form')[1].reset();
                })
                .catch(error => console.error(error))
                .finally(() => setShowSpinner(false))
        }
    }

    // Search Query Functionality
    const handleSearchSubmit = () => {
        const nidNumber = searchRef.current.value;
        fetch(`https://secret-brook-82250.herokuapp.com/voter?nidNumber=${nidNumber}`)
            .then(res => res.json())
            .then(data => {
                if (data != null) {
                    setQueryResult(data)
                    document.getElementById('query-form').classList.remove('d-none')
                } else {
                    setQueryResult({})
                    document.getElementById('query-form').classList.add('d-none')
                    setShowA(true)
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h4 className='mb-3'>Manage Voters</h4>

            {/* Notification Toast Container */}
            <ToastContainer className="p-3" position='top-end'>
                {/* Search Fail Toast  */}
                <Toast className='bg-danger text-white' show={showA} onClose={toggleShowA} delay={5000} style={{ position: 'relative', top: '80px' }} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Search Result</strong>
                        <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body>User Not Registered</Toast.Body>
                </Toast>

                Voter Reset Toast
                <Toast className='bg-danger text-white' show={showB} onClose={toggleShowB} delay={5000} style={{ position: 'relative', top: '80px' }} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Voters Status Reset</strong>
                        <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body>All voters are made eligible.</Toast.Body>
                </Toast>
            </ToastContainer>

            {/* Search Container  */}
            <Row>
                <Col md lg={4} className="mx-auto py-2 px-4">

                    <Form.Label>Search for voter using nid number</Form.Label>
                    <Form.Control type="number" ref={searchRef} placeholder="e.g.: 123456789" />
                    <Button
                        onClick={handleSearchSubmit}
                        className='btn btn-info mt-3'>
                        <i className="fas fa-search me-1"></i>
                        Find
                    </Button>
                </Col>
            </Row>

            {/* Reset & Register Button  */}
            <div className='my-3'>
                {/* Reset Voter Button & Tooltip Option */}
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <Button variant='danger'
                        className='m-1'
                        onClick={handleResetVoters}
                    >
                        Reset Voters
                    </Button>
                </OverlayTrigger>

                {/* Register Voter Button  */}
                <Button variant="success"
                    className='m-1'
                    onClick={handleShow}>
                    <i className="fas fa-user-plus me-1"></i>
                    Register Voter
                </Button>
            </div>

            {/* Query Result Show Form  */}
            <Row id="query-form" className='d-none'>
                <Col sm={10} className="text-start border border-3 mx-auto">
                    <Form>
                        <Row>
                            <Col xs={6} className="mx-auto py-3">
                                <img className='w-50 d-block mx-auto rounded-circle' src={queryResult?.img || ''} alt="" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md={6} controlId="formGridEmail">
                                <Form.Label>NID Number</Form.Label>
                                <Form.Control type="text" readOnly value={queryResult?.nidNumber || ''} />
                            </Form.Group>

                            <Form.Group as={Col} md={6} controlId="formGridPassword">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" readOnly value={queryResult?.name || ''} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md={6} controlId="formGridEmail">
                                <Form.Label>Father's Name</Form.Label>
                                <Form.Control type="text" readOnly value={queryResult?.fathersName || ''} />
                            </Form.Group>

                            <Form.Group as={Col} md={6} controlId="formGridPassword">
                                <Form.Label>Mother's Name</Form.Label>
                                <Form.Control type="text" readOnly value={queryResult?.mothersName || ''} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md={4} controlId="formGridCity">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control readOnly value={queryResult?.birthDate || ''} />
                            </Form.Group>

                            <Form.Group as={Col} md={4} controlId="formGridCity">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control readOnly value={queryResult?.gender || ''} />
                            </Form.Group>

                            <Form.Group as={Col} md={4} controlId="formGridZip">
                                <Form.Label>Blood Group</Form.Label>
                                <Form.Control readOnly value={queryResult?.bloodGroup || ''} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md={4} controlId="formGridCity">
                                <Form.Label>Religion</Form.Label>
                                <Form.Control readOnly value={queryResult?.religion || ''} />
                            </Form.Group>

                            <Form.Group as={Col} md={4} controlId="formGridCity">
                                <Form.Label>P/S:</Form.Label>
                                <Form.Control readOnly value={queryResult?.address?.thana || ''} />
                            </Form.Group>

                            <Form.Group as={Col} md={4} controlId="formGridZip">
                                <Form.Label>District</Form.Label>
                                <Form.Control readOnly value={queryResult?.address?.district || ''} />
                            </Form.Group>
                            <Form.Group as={Col} md={4} controlId="formGridZip">
                                <Form.Label>Division</Form.Label>
                                <Form.Control readOnly value={queryResult?.address?.division || ''} />
                            </Form.Group>
                        </Row>
                    </Form>
                </Col>
            </Row>

            {/* Register Voter Modal  */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header>
                    <Modal.Title className='mx-auto'>Add new voter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {showSpinner && <Spinner className='d-block mx-auto mb-3' variant='primary' animation='border'></Spinner>}
                        <Form onSubmit={handleOnSubmit}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control name="nidNumber" onBlur={handleOnBlur} type="number" placeholder="NID Number" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control name="name" onBlur={handleOnBlur} type="text" placeholder="Full Name" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control name="fathersName" onBlur={handleOnBlur} type="text" placeholder="Father's Name" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control name="mothersName" onBlur={handleOnBlur} type="text" placeholder="Mother's Name" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Select name='gender' onBlur={handleOnBlur} className="mb-3" aria-label="Default select example" required>
                                        <option>Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>
                                </Col>
                                <Col md={6}>
                                    <Form.Select name="religion" onBlur={handleOnBlur} className="mb-3" aria-label="Default select example" required>
                                        <option>Religion</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Christianity">Christian</option>
                                        <option value="Buddhist">Buddhist</option>
                                    </Form.Select>
                                </Col>
                                <Col md={6}>
                                    <Form.Select name="bloodGroup" onBlur={handleOnBlur} className="mb-3" aria-label="Default select example" required>
                                        <option>Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col md lg={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control name="birthDate" onBlur={handleOnBlur} type="date" placeholder="Date of Birth" required />
                                    </Form.Group>
                                </Col>
                                {/* 
                                <Col>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Control multiple accept=".png, .jpg, .jpeg" type="file" />
                                        <Form.Text id="passwordHelpBlock" muted>
                                            Choose images for face verification
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                */}
                            </Row>
                            <div className="d-flex justify-content-end">
                                <Button className='m-1' variant="danger" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button className='m-1' variant="success" type="submit">
                                    Add Voter
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default ManageVoters