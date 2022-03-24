import React from 'react';
import { Card } from "react-bootstrap";

const PhotoCard = (props) => {
    return (
        <Card className='border-0'>
            <Card.Img variant="top" style={{ width: '299px', height: '168px' }} src={props?.photo?.img} />
        </Card>
    );
};

export default PhotoCard;