import React from 'react';
import { Container } from 'react-bootstrap';

const News2 = () => {
    return (
        <Container>
            <div className='my-4'>
                <img src="https://live-production.wcms.abc-cdn.net.au/f40ae5cfc1b9799b0558ccbf97c79eb2" className='w-50' alt="" />
            </div>
            <div>
                <h3>When is the federal election going to be? How can you vote early?</h3>
                <p style={{ textAlign: 'justify' }}>With the federal budget out of the way, the countdown is on to when Prime Minister Scott Morrison will call the next election.
                    <br />&nbsp;&nbsp;&nbsp;
                    The guessing game for when we'll go to the polls has also begun, with the available dates now narrowed down to just three.

                    This is a quick guide to when the election could be, and how to make sure you're ready before voting day.
                    <br />&nbsp;&nbsp;&nbsp;
                    The easiest way to enrol is to do it online at the Australian Electoral Commission (AEC) website.

                    You'll need your driver's licence or your passport or, if you don't have either of those, someone who's already enrolled can fill out a form confirming your identity.

                    You can also print out a hard copy form or pick one up from an AEC office and return it to them filled out.

                    If you're already enrolled but you've had to leave your home because of the floods, you need to let the AEC know so they can give you more advice about whether you need to change your enrolment details or not.

                    You can enrol, or update your details, at any time. But enrolments for this year's election will close seven days after the election is called.</p>
            </div>
        </Container>
    );
};

export default News2;