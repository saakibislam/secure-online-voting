import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import './Feedback.css';
import userImage from '../../../images/userImage.png';

const Feedback = () => {
    return (
        <div className='feedback-area p-5'>
            <Container>
                <h2>What the community say</h2>
                <Carousel fade>
                    <Carousel.Item>
                        <div className='p-5'>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" style={{ width: '100px', borderRadius: '50%' }} />
                            <Card.Body>
                                <h4>Alley Bailess</h4>
                                <p>Always assured and confident in demeanour and presentation of ideas without being aggressively over-confident.</p>
                            </Card.Body>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='p-5'>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" style={{ width: '100px', borderRadius: '50%' }} />
                            <Card.Body>
                                <h4>Reinwald Spore</h4>
                                <p>Has proven ability to produce creative, original ideas, plans, products or methods,even if they’re not always practical.</p>
                            </Card.Body>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='p-5'>
                            <Card.Img variant="top" src={userImage} style={{ width: '100px' }} />
                            <Card.Body>
                                <h4>Mendie MacNally</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, autem.</p>
                            </Card.Body>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>

        </div>
    );
};

export default Feedback;