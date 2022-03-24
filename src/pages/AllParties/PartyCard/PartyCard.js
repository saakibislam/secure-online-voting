import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const PartyCard = (props) => {
    const { partySymbol, name, details, _id } = props.party;
    return (
        <Card>
            <Card.Img variant="top" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0px auto' }} src={partySymbol} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <small>
                        {details?.slice(0, 120)}
                    </small>
                </Card.Text>
                <Link to={`/party/${_id}`}>
                    <Button size='md' variant='success'>Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default PartyCard;