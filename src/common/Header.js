import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.png';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="/contact">Contact us</Nav.Link>
              <NavDropdown title="Committees" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Car Committee</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>

            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;