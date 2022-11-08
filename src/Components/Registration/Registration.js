import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

export default function Registration() {
    useTitle('Registration')
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-50'>
      <h1 className='text-center my-3 fw-bold'>Registration</h1>
      <form action="">
        <input className='px-3 w-100 py-2 border border-1 rounded' type="text"  name='name' placeholder='name' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="text"  name='photoURL' placeholder='Photo Url' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="email"  name='email' placeholder='email' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="password" name='password' placeholder='password' /><br/><br/>
        <button className='btn btn-primary' type="submit">Register</button>
      </form>
      <br />
      <h5>Already User? Please <Link to='/login'>Login</Link> </h5>
    </div>
    </div>
  )
}
