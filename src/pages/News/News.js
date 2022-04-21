import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const style = {
    textDecoration: 'none',
    color: 'inherit'
}
const News = () => {
    return (
        <Container className='my-3'>
            <h2>Recent News</h2>
            <Container>
                <ListGroup className='text-start' as="ol" numbered>
                    <Link
                        to='/news/624c8fdd763d163aa1840cf8'
                        style={style}
                    >
                        <ListGroup.Item as="li" action>
                            Foreign nationals can finance ballot initiatives, FEC affirms
                        </ListGroup.Item>
                    </Link>

                    <Link
                        to='/news/624c8ff64a395b0e6e75e212'
                        style={style}
                    >
                        <ListGroup.Item as='li' action>
                            When is the federal election going to be? How can you vote early?
                        </ListGroup.Item>
                    </Link>

                    <Link
                        to='/news/624c8ffdda43b727966bf7ab'
                        style={style}
                    >
                        <ListGroup.Item as='li' action>
                            FEC approves three Notices of Disposition on petitions for rulemaking
                        </ListGroup.Item>
                    </Link>

                    <Link
                        to='/news/624c90036c74d4efb3cb6eb8'
                        style={style}
                    >
                        <ListGroup.Item as='li' action>
                            48-Hour Notices for candidate committees
                        </ListGroup.Item>
                    </Link>

                    <Link
                        to='/news/624c900919df021ca7857c16'
                        style={style}
                    >
                        <ListGroup.Item as='li' action>
                            Commission approves updated Statement of Organization (FEC Form 1) to include new registration options
                        </ListGroup.Item>
                    </Link>

                    <Link
                        to='/news/624c900e0659aa731b2016a3'
                        style={style}
                    >
                        <ListGroup.Item as='li' action>
                            Commission to host Political Party Committee Webinar
                        </ListGroup.Item>
                    </Link>
                </ListGroup>
            </Container>
        </Container>
    );
};

export default News;