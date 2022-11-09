import React, { useEffect, useState } from 'react'
import useTitle from '../../Components/hooks/useTitle';
import Service from '../../Components/Service/Service';

export default function Services() {
  const [services, setServices] = useState([]);
  useTitle('MDC: Services');

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>{
      setServices(data);
      console.log(data);
    })
  },[])
  
  return (
    <div className='container mt-5'>
      <div className='row row-cols-lg-3 mb-3 row-cols-1 g-4'>
       {
        services.map(service=><Service
        key={service._id}
        service= {service}
        ></Service>)
       }
    </div>
    </div>
  )
}

