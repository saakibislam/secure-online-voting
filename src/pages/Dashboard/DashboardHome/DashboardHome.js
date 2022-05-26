import React, { Suspense } from 'react'
import { Col, Row } from 'react-bootstrap'
import DoughnutChart from '../../Result/DoughnutChart/DoughnutChart'
import VoteCard from '../../Result/VoteCard/VoteCard'
const BarChart = React.lazy(() => import('../../Result/BarChart/BarChart'))

const DashboardHome = (props) => {
    const { candidates } = props


    return (
        <div>
            <Row className='my-3'>
                {candidates?.map(candidate => <VoteCard
                    key={candidate._id}
                    candidate={candidate}
                ></VoteCard>)}
            </Row>
            <Row className='justify-content-around align-items-center'>
                <Col md={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <BarChart candidates={candidates}></BarChart>
                    </Suspense>
                </Col>
                <Col md={5}>
                    <DoughnutChart></DoughnutChart>
                </Col>
            </Row>
        </div>
    )
}

export default DashboardHome