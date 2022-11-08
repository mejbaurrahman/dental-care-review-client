import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

export default function Login() {
    useTitle('Login')
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-50'>
      <h1 className='text-center my-3 fw-bold'>Login</h1>
      <form action="">
        <input className='px-3 w-100 py-2 border border-1 rounded' type="email"  name='email' placeholder='email' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="password" name='password' placeholder='password' /><br/><br/>
        <button className='btn btn-primary' type="submit">Log in</button>
      </form>
      <br />
      <h5>New User? Please <Link to='/register'>Register</Link> </h5>
    </div>
    </div>
  )
}
