import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome, faPhone, faMailBulk} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGooglePlus, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   

<div class=" mt-5 p-2">


  <footer
          class="text-center text-lg-start text-white bg-black" 
          >
  
    <section
             class="d-flex justify-content-between p-4 bg-primary"
            
             >
      
      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
     
      <div>
        <a href="" class="text-white me-4">
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </a>
        <a href="" class="text-white me-4">
          <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
        </a>
        <a href="" class="text-white me-4">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a href="" class="text-white me-4">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a href="" class="text-white me-4">
          <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </a>
      
      </div>
     
    </section>
    

    
    <section class="">
      <div class="container text-center text-md-start mt-5">
      
        <div class="row mt-3">
        
          
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 class="text-uppercase fw-bold">M Dental Care</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <Link className='text-white text-decoration-none' to='/'>Home</Link>
            </p>
            <p>
              <Link className='text-white text-decoration-none' to='/'>About MDC</Link>
            </p>
            <p>
              <Link className='text-white text-decoration-none' to='/'>Contact Me</Link>
            </p>
            <p>
              <Link className='text-white text-decoration-none' to='/services'>Services</Link>
            </p>
           
           
          </div>
         
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
           <h6 class="text-uppercase fw-bold">Useful Link</h6>
           <hr
               class="mb-4 mt-0 d-inline-block mx-auto"
               // style="width: 60px; background-color: #7c4dff; height: 2px"
               />
           <p>
             <Link className='text-white text-decoration-none' to='/services'>Services</Link>
           </p>
           <p>
             <Link className='text-white text-decoration-none' to='/myreviews'>My Reviews</Link>
           </p>
           <p>
             <Link className='text-white text-decoration-none' to='/addAService'>Add A Service</Link>
           </p>
           <p>
             <Link className='text-white text-decoration-none' to='/login'>Login</Link>
           </p>
           <p>
             <Link className='text-white text-decoration-none' to='/login'>Privacy Policy</Link>
           </p>
          
         </div>
        
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><FontAwesomeIcon className='me-2' icon={faHome}></FontAwesomeIcon>New Paltan, Dhaka</p>
            <p><FontAwesomeIcon className='me-2' icon={faMailBulk}></FontAwesomeIcon> mdc@contact.com</p>
            <p><FontAwesomeIcon className='me-2' icon={faPhone}></FontAwesomeIcon> + 8801777777777</p>
           
          </div>
          
        </div>
       
      </div>
    </section>
    
    <div
         class="text-center p-3"
        //  style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2020 Copyright: Mejba's Dental Care
    </div>
    
  </footer>
 

</div>

  )
}
