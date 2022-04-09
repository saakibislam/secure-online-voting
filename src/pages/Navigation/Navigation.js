import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { getUser, clearUser } = useAuth();
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(getUser());
    }, [])

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Political Parties"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item as={NavLink} to="/registered">Registered Parties</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/parties">All Political Parties</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/registration">Registration</Nav.Link>
                        <Nav.Link as={NavLink} to="/news">News</Nav.Link>
                        <Nav.Link as={NavLink} to="/photos">Photo Gallery</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        {user?.name && <Nav.Link as={Link} to="/vote">Cast Vote</Nav.Link>}
                    </Nav>



                    {/* Login & Logout Button  */}

                    {user?.name ? <div>
                        <Navbar.Text className='me-2'>
                            Signed in as: <Link to='/profile'>
                                {user?.name}
                            </Link>
                        </Navbar.Text>
                        <Button
                            onClick={clearUser}
                            variant='outline-danger'
                        >Logout</Button>

                    </div>

                        :
                        <Link to='/login'>
                            <Button variant='outline-warning'>
                                Login
                            </Button>
                        </Link>}
                </Navbar.Collapse >
            </Container>
        </Navbar>
    );
};

export default Navigation;