import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ConfirmationModal = ({ _id, user, setUser, name, show, handleClose }) => {
    const { fetchUser, getUser } = useAuth();
    const [confirmation, setConfirmation] = useState(false)

    if (confirmation) {
        const voterData = {
            candidateId: _id,
            voterId: user._id
        }

        fetch('http://localhost:5000/vote', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(voterData)
        })
            .then(res => res.json())
            .then(data => {
                if (data === 200) {
                    fetchUser(user.nidNumber)
                    setUser(getUser())
                    setConfirmation(false)
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            })
    }

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to vote <strong>{name}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => {
                        setConfirmation(false)
                        handleClose()
                    }}>
                        No
                    </Button>
                    <Button variant="success" onClick={() => {
                        setConfirmation(true)
                        handleClose()
                    }}>Yes</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default ConfirmationModal;