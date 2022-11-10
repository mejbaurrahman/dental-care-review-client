import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg';

export default function NotFound() {
  return (
    <div className='container mt-5'>
        <div className='d-flex justify-content-center'>
            <div className='w-50'>
                <img src={notfound} className='w-100' alt="" srcset="" />
            </div>
        </div>
        <div className='d-flex justify-content-center mt-4'>
            <Link to='/'><button className='btn btn-primary'>Go Home</button></Link>
        </div>
    </div>
  )
}
