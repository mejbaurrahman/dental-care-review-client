import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import contactImage from '../../images/textImage.jpg';

export default function About() {
  return (
    <div className='mt-3'>
    <h1 className='text-primary text-start text-uppercase'>About MDC</h1>
    <hr className='text-primary'/> 
    <div className='row row-cols-lg-2 row-cols-1 g-2 my-2'>
    <div className='col'>
            <div className='text-start'>
               The MDC, Mejba's Dental Care established in 2020. Choosing the right dentist can be tricky. Patients want a highly trained dental expert, that goes without saying. But they also want someone they trust and feel at ease with, who can provide them with a comfortable dental experience. I have 10 year's of experience of this field. You can choose me with all trust. I can help you to sole your dental problem by the grace of Almighty. 
            </div>
        </div>
        <div className='col ps-2'>
            <div>
              <img src={contactImage} className='w-100 rounded' alt="" srcset="" />
            </div>
        </div>
        
    </div>
    <div className='row row-cols-lg-2 row-cols-1 bg-primary text-white rounded'>
        <div className='col'>
            <div className='d-flex p-5 justify-content-start align-items-center'>
                <h1><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></h1>
                <div className='ms-4'>
                  <h3 className='text-start'>OUR LOCATION</h3>
                  <h5 className='text-start'>House 15/A</h5>
                  <h5 className='text-start'>New Paltan, Dhaka</h5>
                </div>
            </div>
        </div>
        <div className='col'>
            <div className='d-flex p-5 justify-content-start align-items-center'>
                <input type="text"  className='w-50 px-4 py-2' placeholder='Your Mail'/>
                <div className=''>
                  <button className='btn btn-danger p-2'>Subscribe</button>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}
