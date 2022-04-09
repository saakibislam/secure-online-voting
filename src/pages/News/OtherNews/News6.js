import React from 'react';
import { Container } from 'react-bootstrap';

const News6 = () => {
    return (
        <Container>
            <div className='my-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuM5cHhYgwKiRgg3Osir_MUQwY5zraTlvtEg" className='w-50' alt="" />
            </div>
            <div>
                <h3>Commission to host Political Party Committee Webinar</h3>
                <p style={{ textAlign: 'justify' }}>Registration is now open for the FEC’s April 6 Political Party Committee Webinar. The webinar will include a Basics for Beginners session in the morning that offers an overview of the campaign finance laws for those newer to party committees. In the afternoon, a two-part Party Committee Operations workshop will delve into more detail concerning the rules and reporting requirements relevant to political party committees. This interactive, online event will be the only full-day training opportunity this year tailored specifically to party committees. Space is limited, so register today to reserve your spot!</p>
            </div>
        </Container>
    );
};

export default News6;