import React, { useState, useEffect } from 'react'
import { Button, Table, Tooltip, OverlayTrigger, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ManageCandidates = () => {
    const [candidates, setCandidates] = useState()

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




    return (
        <div className='py-5 pe-4'>
            <h4 className='mb-3'>Manage Candidates</h4>
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
        </div >
    )
}

export default ManageCandidates