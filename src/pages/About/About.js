import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sakibCover from '../../images/sakib.jpg';
import ashikCover from '../../images/ashik.jpg';

const About = () => {
    return (
        <Container className='mt-3'>
            <h2>About us</h2>
            <Container className='my-4'>
                <Row className='align-items-center mb-5'>
                    <Col xs={12} md={6} lg={6} data-aos="fade-right" data-aos-duration="3000">
                        <img className='img-fluid' src={sakibCover} alt="" />
                    </Col>
                    <Col xs={12} md={6} lg={6} data-aos="fade-left" data-aos-delay="1000">
                        <h2>Mohammad Sakibul Islam</h2>
                        <p style={{ textAlign: 'justify' }}>Hey there, I am Sakib. An undergraduate student of International Islamic University Chittagong. I am a dedicated student working toward the future where I can purse a good career on web development.
                            I am a person, who actively participates in all activities, be it exams or extra curricular activities. The extracurricular activities like sports, quiz competitions, essays and speech competitions etc. are the heart of my institution. I myself am essay competition winner on various times.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className='my-4'>
                <Row className='align-items-center mt-5'>
                    <Col xs={12} md={6} lg={6} data-aos="fade-up" data-aos-delay="800">
                        <h2>Mohammad Ashikul Islam</h2>
                        <p style={{ textAlign: 'justify' }}>Hey there, I am Ashik. An undergraduate student of International Islamic University Chittagong. I am a dedicated student working toward the future where I can purse a good career on web development.
                            I am a person, who actively participates in all activities, be it exams or extra curricular activities. The extracurricular activities like sports, quiz competitions, essays and speech competitions etc. are the heart of my institution. I myself am essay competition winner on various times.</p>
                    </Col>
                    <Col xs={12} md={6} lg={6} data-aos="fade-up" data-aos-duration="2000">
                        <img className='img-fluid' src={ashikCover} alt="" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default About;