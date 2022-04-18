import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className='bg-dark text-white'>
            <Container>
                <Row xs={1} md={2} lg={3}>
                    <Col>
                        <div className='my-5'>
                            <h2>Logo Here</h2>
                            <i class="fab fa-facebook fa-lg m-3"></i>
                            <i class="fab fa-twitter fa-lg m-3"></i>
                            <i class="fab fa-youtube fa-lg m-3"></i>
                        </div>
                    </Col>
                    <Col>
                        <div className='my-5'>
                            <h3>Quick Links</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2.2' }}>
                                <li><Link className='text-decoration-none text-white' to='/news'>News</Link></li>
                                <li><Link className='text-decoration-none text-white' to='/photos'>Photos</Link></li>
                                <li><Link className='text-decoration-none text-white' to='/contact'>Contact</Link></li>
                                <li><Link className='text-decoration-none text-white' to='/about'>About</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className='my-5 text-end'>
                            <h3>Contact</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2.2' }}>
                                <li>+01812345678</li>
                                <li>exampl@mail.com</li>
                                <li>Ashuganj, Dhaka</li>
                                <li>Bangladesh</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;