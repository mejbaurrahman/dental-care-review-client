import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

export default function Navigation() {
  return (
    <div>
        <Navbar bg="primary" expand='lg'>
        <Container>
          <Navbar.Brand className='text-white' href="#home">
            <img src={logo} className='rounded' style={{width:'50px'}} alt="" srcset="" /> MDC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='text-white text-decoration-none ms-2 px-2' to='/'>Home</Link>
            <Link className='text-white text-decoration-none ms-2 px-2' to='/login'>Login</Link>
            <Link className='text-white text-decoration-none ms-2 px-2' to='/register'>Register</Link>
            <Link className='text-white text-decoration-none ms-2 px-2' to='/about'>About Me</Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  )
}
