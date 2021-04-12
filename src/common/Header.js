import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.png';
import "./Header.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar className="head" bg="light" variant="light" expand="lg">
          <Navbar.Brand href="#home">
            <img style={{width:"120px", height:"60px", margin:"0 0 0 40px"}} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center nav">
            <Nav className="mr">
              <Nav.Link className="navItem" href="/">Home</Nav.Link>
              <Nav.Link className="navItem" href="/about">About us</Nav.Link>
              <NavDropdown className="navItem" title="Committees">
                <NavDropdown.Item className="navItem1" href="/carcommittee">Dream Car Committee</NavDropdown.Item>
                <NavDropdown.Item className="navItem1" href="#action/3.2" disabled>Dream Mobile Committee (Coming Soon)</NavDropdown.Item>
                <NavDropdown.Item className="navItem1" href="#action/3.3" disabled>Dream Bike Committee (Coming Soon)</NavDropdown.Item>
                <NavDropdown.Item className="navItem1" href="#action/3.3" disabled>Dream Tractor Committee (Coming Soon)</NavDropdown.Item>
                <NavDropdown.Item className="navItem1" href="#action/3.3" disabled>Dream Gold Committee (Coming Soon)</NavDropdown.Item>
                <NavDropdown.Item className="navItem1" href="#action/3.3" disabled>Dream House Committee (Coming Soon)</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link className="navItem" href="/contact">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;