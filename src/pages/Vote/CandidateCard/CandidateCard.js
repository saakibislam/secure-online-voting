import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import classes from './CandidateCard.module.css';
import CountUp from 'react-countup';

const CandidateCard = (props) => {
    const { name, img, party, _id, voteCount } = props.candidate;

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
        handleShow()
    }


    return (
        <div className={classes.card}>
            <img src={img} alt="" />
            <div className={classes.cardBody}>
                <h2>{name}</h2>

                <p className='text-success fw-bold'>{party}</p>
                <p>Vote received: <CountUp className='text-success fw-bold' end={voteCount} start={0} duration={3} separator=","></CountUp></p>

                <div className='d-flex flex-row justify-content-around align-items-center'>
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
                </div>
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
    );
};

export default CandidateCard;