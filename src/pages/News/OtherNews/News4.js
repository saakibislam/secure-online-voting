import React from 'react';
import { Container } from 'react-bootstrap';

const News4 = () => {
    return (
        <Container>
            <div className='my-4'>
                <img src="https://www.fec.gov/static/img/social/fec-help.png" className='w-50' alt="" />
            </div>
            <div>
                <h3>48-Hour Notices for candidate committees</h3>
                <p style={{ textAlign: 'justify' }}>As primary season heats up, authorized committees are reminded to file 48-hour Notices for all contributions of $1,000 or more received less than 20 days but more than 48 hours before each election in which the candidate participates. (The applicable primary election periods for each state are posted on our reporting dates web page.) These notices must be received by the Commission within 48 hours of the committee’s receipt of the contribution(s). For more information, please consult the Commission’s 48-Hour Notices web page. Additionally, campaigns may wish to attend the FEC’s free 30-minute OnTopic discussion on 48-Hour Notices, scheduled for April 20.</p>
            </div>
        </Container>
    );
};

export default News4;