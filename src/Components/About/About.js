import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import contactImage from '../../images/doctor.jpg';

export default function About() {
  return (
    <div className='mt-3'>
    <h1 className='text-primary text-start text-uppercase'>About MDC</h1>
    <hr className='text-primary'/> 
    <div className='row row-cols-lg-2 row-cols-1'>
        <div className='col mt-2'>
            <img src={contactImage} alt="" className='w-100' />
        </div>
        <div className='col mt-2'>
            <input type="text" className='px-4 py-2 border border-1 border-primary w-100' placeholder='Name' /><br/><br/>
            <input type="text" className='px-4 py-2 border border-1 border-primary w-100' placeholder='Email' /><br/><br/>
            <textarea type="text" className='px-4 py-4 border border-1 border-primary w-100' placeholder='Your Message' /><br/><br/>
            <button className='btn btn-primary'>Send<FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
            
        </div>

    </div>
</div>
  )
}
