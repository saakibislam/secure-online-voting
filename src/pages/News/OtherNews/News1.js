import React from 'react';
import { Container } from 'react-bootstrap';

const News1 = () => {
    return (
        <Container>
            <div className='my-4'>
                <img src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PEVI2OB37YI6ZPLP3I3W6RZQJY.jpg" className='w-50' alt="" />
            </div>
            <div>
                <h3>Foreign nationals can finance ballot initiatives, FEC affirms</h3>
                <p style={{ textAlign: 'justify' }}>The Federal Election Commission has affirmed in a not-yet-public decision that foreign nationals can finance efforts related to ballot initiatives, deciding that the federal ban on foreign money applies only to candidate elections.
                    <br />&nbsp;&nbsp;&nbsp;
                    In a 4-2 vote in July, commissioners dismissed a complaint against a Canadian subsidiary of an Australian mining company that helped finance efforts to defeat a 2018 Montana ballot measure that would have beefed up environmental protections.
                    <br />&nbsp;&nbsp;&nbsp;
                    Federal law prohibits foreign nationals from making contributions in connection with federal, state or local elections but is silent on spending related to ballot initiatives, which put proposed statutes and, in some instances, constitutional amendments up to popular vote, according to an FEC legal analysis sent last month to parties in the dispute and obtained by The Washington Post. Documents related to the case will be made public this week, according to a letter included with the analysis.
                    The decision, which was first reported by Axios, is consistent with established interpretations of federal election law, campaign finance experts said. At the same time, it does not address whether certain types of ballot initiatives that explicitly involve a candidate or bear directly on elections, such as redistricting measures, might trigger the federal ban on foreign money, said Ellen Weintraub, a Democratic FEC commissioner.</p>
            </div>
        </Container>
    );
};

export default News1;