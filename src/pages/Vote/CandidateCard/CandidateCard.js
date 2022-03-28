import React, { useEffect, useState } from 'react';
import { Card, Button, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import classes from './CandidateCard.module.css';

const CandidateCard = (props) => {
    const { name, img, party, _id } = props.candidate;

    const [user, setUser] = useState();

    const { getUser } = useAuth();

    // Modal Functions
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Reading user from storage
    useEffect(() => {
        setUser(getUser());
    }, [])

    const handleVote = () => {
        handleShow();
    }


    return (
        <div className={classes.card}>
            <img src={img} className='mt-2 rounded' alt="" />
            <div className={classes.cardBody}>
                <h2>{name}</h2>

                <p className='text-success fw-bold'>{party}</p>

                <div className='d-flex flex-row justify-content-around align-items-center mt-3'>
                    {/* More Details Button  */}
                    <Link to={`/candidate/${_id}`}>
                        More
                    </Link>
                    {/* Confirming Vote Button  */}
                    <Button
                        size='md'
                        variant='warning'
                        className='fw-bold'
                        onClick={handleVote}
                        disabled={user?.voted}
                    >
                        Vote
                    </Button>

                    <ConfirmationModal
                        _id={_id}
                        user={user}
                        setUser={setUser}
                        name={name}
                        show={show}
                        handleClose={handleClose}
                    ></ConfirmationModal>
                </div>
            </div>
        </div>



    );
};

export default CandidateCard;