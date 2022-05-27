import React, { useState, useEffect } from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
} from "cdbreact";
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import DashboardHome from './DashboardHome/DashboardHome';
import ManageVoters from './ManageVoters/ManageVoters';
import ManageCandidates from './ManageCandidates/ManageCandidates';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const [candidates, setCandidates] = useState()

    useEffect(() => {
        let isMounted = true;
        fetch('https://secret-brook-82250.herokuapp.com/candidates')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setCandidates(data)
                }
            })
        return () => {
            isMounted = false;
        }
    }, [candidates])
    return (
        <div style={{ display: "flex", overflow: "scroll initial" }}>
            <div>
                <CDBSidebar textColor="#fff" backgroundColor="#343a40">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large m-1"></i>}>
                    </CDBSidebarHeader>

                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <CDBSidebarMenuItem>
                                <NavLink
                                    to={`${url}`}
                                >
                                    <i className="fas fa-th-large m-1"></i>
                                    Dashboard
                                </NavLink>
                            </CDBSidebarMenuItem>
                            <CDBSidebarMenuItem>
                                <NavLink
                                    to={`${url}/manageVoters`}
                                    activeStyle={{ color: 'orange', fontWeight: 'bold', fontSize: '18px' }}
                                >
                                    <i className="fas fa-users m-1"></i>
                                    Manage Voters
                                </NavLink>
                            </CDBSidebarMenuItem>
                            <CDBSidebarMenuItem>
                                <NavLink
                                    to={`${url}/manageCandidates`}
                                    activeStyle={{ color: 'orange', fontWeight: 'bold', fontSize: '18px' }}
                                >
                                    <i className="far fa-address-card m-1"></i>
                                    Manage Candidates
                                </NavLink>
                            </CDBSidebarMenuItem>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>

            {/* Dashboard Render Panel  */}
            <div className='w-100 px-md-5 py-5'>
                <Switch>
                    {/* Dashboard Home Goes here  */}
                    <Route exact path={path}>
                        <DashboardHome candidates={candidates}></DashboardHome>
                    </Route>
                    <Route path={`${path}/manageVoters`}>
                        <ManageVoters></ManageVoters>
                    </Route>
                    <Route path={`${path}/manageCandidates`}>
                        <ManageCandidates
                            candidates={candidates}
                            setCandidates={setCandidates}
                        ></ManageCandidates>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Dashboard