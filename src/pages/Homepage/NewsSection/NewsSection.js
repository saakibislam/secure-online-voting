import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NewsCard1 from './NewsCard1';
import NewsCard2 from './NewsCard2';
import NewsCard3 from './NewsCard3';
import NewsCard4 from './NewsCard4';
import './NewsSection.css';

const NewsSection = () => {
    return (
        <Container className='my-5'>
            <h2 className='my-3' data-aos="fade-up" data-aos-duration="2000">Our Latest News</h2>
            <hr />
            <Row>
                <NewsCard1></NewsCard1>
                <NewsCard2></NewsCard2>
                <NewsCard3></NewsCard3>
                <NewsCard4></NewsCard4>
            </Row>
            <hr />
        </Container>
    );
};

export default NewsSection;