import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{ width: '100vw', height: '95vh' }}
                    src='https://media.gettyimages.com/photos/national-parliament-bangladesh-picture-id158261506'
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{ width: '100vw', height: '95vh' }}
                    src='https://media.gettyimages.com/photos/this-picture-shows-the-front-pages-of-bangladeshi-morning-national-picture-id84141171'
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{ width: '100vw', height: '95vh' }}
                    src='https://media.gettyimages.com/photos/sheikh-hasina-wajed-is-sworn-in-for-her-second-spell-as-bangladeshs-picture-id84183136'
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{ width: '100vw', height: '95vh' }}
                    src='https://media.gettyimages.com/photos/ballot-box-seen-for-counting-after-voting-ended-at-a-polling-station-picture-id1075860270'
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;