import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className='bg-dark text-white mt-4'>
            <Container>
                <Row xs={1} md={2} lg={3}>
                    <Col>
                        <div className='my-5'>
                            <h2>Logo Here</h2>
                            <h3 className='d-inline m-2'><FaFacebook /></h3>
                            <h3 className='d-inline m-2'><FaTwitter /></h3>
                            <h3 className='d-inline m-2'><FaYoutube /></h3>



                        </div>
                    </Col>
                    <Col>
                        <div className='my-5'>
                            <h3>Features</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2.2' }}>
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                                <li>item 4</li>
                            </ul>
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
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;