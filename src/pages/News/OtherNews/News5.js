import React from 'react';
import { Container } from 'react-bootstrap';

const News5 = () => {
    return (
        <Container>
            <div className='my-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aLZ3hnzpu1Rm6khJc0bGguF2RCUnwR7N3Q" className='w-50' alt="" />
            </div>
            <div>
                <h3>Commission approves updated Statement of Organization (FEC Form 1) to include new registration options</h3>
                <p style={{ textAlign: 'justify' }}>On March 10, 2022, the Commission approved an updated version of the Statement of Organization (FEC Form 1). The updated form includes options to register as an independent expenditure-only committee (Super PAC) or committee with a non-contribution account (Hybrid PAC).
                    <br />&nbsp;&nbsp;&nbsp;
                    Currently, Super PACs and Hybrid PACs register by attaching a cover letter to the FEC Form 1 that expresses their intention to operate as either a Super PAC or Hybrid PAC. The updated form will obviate the need for a cover letter. Instead, Super PACs will simply select new option 5(g) on page 2 of the form, and Hybrid PACs will select new option 5(h).
                </p>
            </div>
        </Container>
    );
};

export default News5;