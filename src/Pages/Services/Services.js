import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import useTitle from '../../Components/hooks/useTitle';
import Service from '../../Components/Service/Service';

export default function Services() {
  const [services, setServices] = useState([]);
  useTitle('Services');
  const [loadServices, setLoadServices] = useState(true);

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>{
      setServices(data);
      console.log(data);
      setLoadServices(false);
    })
  },[])
  
  return (
   <>
   <div className='mt-3 container'>
        <h1 className='text-primary text-start text-uppercase'>Services</h1>
        <hr className='text-primary'/> 
    </div>
    {
      loadServices? <div className='mt-3'>
        <Spinner variant='primary' animation='border'></Spinner>
      </div>: <div className='container mt-5'>
      <div className='row row-cols-lg-3 mb-3 row-cols-1 g-4'>
       {
        services.map(service=><Service
        key={service._id}
        service= {service}
        ></Service>)
       }
    </div>
    </div>
    }
   </>
  )
}

