import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import logo from '../../../images/logo.png';

export default function Navigation() {
  const {user, logout} = useContext(AuthContext);
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
            <Link className='text-white text-decoration-none ms-2 px-2' to='/services'>Services</Link>

            <Link className='text-white text-decoration-none ms-2 px-2' to='/about'>About Me</Link>
          {
            user?.uid ? <>
            <Link to='/addAService' className='text-white text-decoration-none ms-2 px-2'>Add A Service</Link>
            <Link to='/myreviews' className='text-white text-decoration-none ms-2 px-2'>My Reviews</Link>
            <Link className='text-white text-decoration-none ms-2 px-2' to='/'>{user?.displayName}</Link>
            <button className='btn btn-warning' onClick={logout}>logout</button>

            </>
             : <>
            <Link className='text-white text-decoration-none ms-2 px-2' to='/login'>Login</Link>
            <Link className='text-white text-decoration-none ms-2 px-2' to='/register'>Register</Link></>
          }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  )
}
