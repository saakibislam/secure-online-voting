import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide2.jpg';
import slide3 from '../../../images/slide3.jpg';
import slide4 from '../../../images/slide4.jpg';

const Slider = () => {
    return (
        <Carousel variant="dark" fade>
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{ width: '100vw', height: '95vh' }}
                    src={slide1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{ width: '100vw', height: '95vh' }}
                    src={slide2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{ width: '100vw', height: '95vh' }}
                    src={slide3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{ width: '100vw', height: '95vh' }}
                    src={slide4}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;