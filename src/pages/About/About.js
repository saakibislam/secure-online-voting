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
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in placeat necessitatibus voluptate, a inventore quisquam odit alias iste assumenda aspernatur saepe voluptas sed? Et vitae aliquid quisquam neque facilis debitis minima, molestias eligendi consequatur ducimus. Quibusdam, fugit dignissimos consequatur quo ipsum nobis, laudantium corrupti alias culpa incidunt nihil ullam quos architecto? Corrupti quos, molestias sunt cum ex doloribus ipsum perspiciatis voluptates tempora pariatur consectetur eius maxime, quibusdam adipisci totam iure repellat animi eaque natus culpa soluta, ratione rerum? Quasi id laborum commodi aliquid deserunt, praesentium architecto minima tenetur, optio molestiae quod! Quaerat non ullam iste eligendi corrupti ab ad facilis accusamus atque obcaecati facere, earum porro odit perspiciatis provident eum inventore asperiores adipisci molestiae nemo! Tenetur odit odio quod exercitationem amet doloribus quam esse alias repellat. Est quisquam culpa ipsa, libero deleniti ullam ratione tempora voluptas earum, minima fugit ut nesciunt eligendi iusto delectus illum optio nobis inventore vitae.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='my-4'>
                <Row className='align-items-center mt-5'>
                    <Col xs={12} md={6} lg={6} data-aos="fade-up" data-aos-delay="800">
                        <h2>Mohammad Ashikul Islam</h2>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in placeat necessitatibus voluptate, a inventore quisquam odit alias iste assumenda aspernatur saepe voluptas sed? Et vitae aliquid quisquam neque facilis debitis minima, molestias eligendi consequatur ducimus. Quibusdam, fugit dignissimos consequatur quo ipsum nobis, laudantium corrupti alias culpa incidunt nihil ullam quos architecto? Corrupti quos, molestias sunt cum ex doloribus ipsum perspiciatis voluptates tempora pariatur consectetur eius maxime, quibusdam adipisci totam iure repellat animi eaque natus culpa soluta, ratione rerum? Quasi id laborum commodi aliquid deserunt, praesentium architecto minima tenetur, optio molestiae quod! Quaerat non ullam iste eligendi corrupti ab ad facilis accusamus atque obcaecati facere, earum porro odit perspiciatis provident eum inventore asperiores adipisci molestiae nemo! Tenetur odit odio quod exercitationem amet doloribus quam esse alias repellat. Est quisquam culpa ipsa, libero deleniti ullam ratione tempora voluptas earum, minima fugit ut nesciunt eligendi iusto delectus illum optio nobis inventore vitae.</p>
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