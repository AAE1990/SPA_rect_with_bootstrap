import React, { Component } from 'react';
import { Navbar, Container, NavbarBrand, Nav, NavLink, Form, FormControl, Button } from 'react-bootstrap';
import logo from './logo192.png'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block alagin-top"
                                alt="Logo"
                            /> React site
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink href="/"> Home </NavLink>
                                <NavLink href="/about"> About us </NavLink>
                                <NavLink href="contacts"> Contacts </NavLink>
                                <NavLink href="/blog"> Blog </NavLink>
                            </Nav>
                            <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2" />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                    </Switch>
                </Router>

            </>
        );
    }
}

export default Header;
