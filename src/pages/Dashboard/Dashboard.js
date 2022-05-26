import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import DashboardHome from './DashboardHome/DashboardHome'
import ManageCandidates from './ManageCandidates/ManageCandidates'
import ManageParties from './ManageParties/ManageParties'
import ManageVoters from './ManageVoters/ManageVoters'

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div>
            <Row>
                {/* Dashboard Navigation  */}
                <Col className='my-5' xs={3}>
                    <div className='sidebar-content'>
                        <NavLink
                            style={{
                                color: 'inherit',
                                display: 'block',
                                marginTop: '10px',
                                fontSize: '1.1em',
                            }}
                            to={`${url}`}>
                            Dashboard
                        </NavLink>
                        <NavLink
                            activeStyle={{ backgroundColor: 'orange', padding: '10px', fontWeight: '500', borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}
                            style={{
                                color: 'inherit',
                                display: 'block',
                                marginTop: '10px',
                                fontSize: '1.1em',
                            }}
                            to={`${url}/manageVoters`}>
                            Manage Voters
                        </NavLink>
                        <NavLink
                            activeStyle={{ backgroundColor: 'orange', padding: '10px', fontWeight: '500', borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}
                            style={{
                                color: 'inherit',
                                display: 'block',
                                marginTop: '10px',
                                fontSize: '1.1em',
                            }}
                            to={`${url}/manageParties`}>
                            Manage Parties
                        </NavLink>
                        <NavLink
                            activeStyle={{ backgroundColor: 'orange', padding: '10px', fontWeight: '500', borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}
                            style={{
                                color: 'inherit',
                                display: 'block',
                                marginTop: '10px',
                                fontSize: '1.1em',
                            }}
                            to={`${url}/manageCandidates`}>
                            Manage Candidates
                        </NavLink>
                    </div>

                </Col>
                {/* Dashboard Render Panel  */}
                <Col xs={9}>
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/manageVoters`}>
                            <ManageVoters></ManageVoters>
                        </Route>
                        <Route path={`${path}/manageCandidates`}>
                            <ManageCandidates></ManageCandidates>
                        </Route>
                        <Route path={`${path}/manageParties`}>
                            <ManageParties></ManageParties>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard