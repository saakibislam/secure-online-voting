import React from 'react';
import { Card } from "react-bootstrap";

const PhotoCard = (props) => {

    return (
        <Card className='border-0'>
            <a href={props?.photo?.img}>
                <Card.Img data-aos="fade-left" data-aos-duration="2000" variant="top" style={{ width: '299px', height: '168px' }} src={props?.photo?.img} />
            </a>
        </Card>
    );
};

export default PhotoCard;