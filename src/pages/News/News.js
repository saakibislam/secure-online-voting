import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const News = () => {
    return (
        <Container>
            <h1>Recent News</h1>
            <Container>
                <ListGroup className='text-start' as="ol" numbered>
                    <ListGroup.Item as='li' action>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item as='li' action>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item as='li' action>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item as='li' action>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item as='li' action>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item as='li' action>hello bye bye</ListGroup.Item>
                </ListGroup>
            </Container>
        </Container>
    );
};

export default News;