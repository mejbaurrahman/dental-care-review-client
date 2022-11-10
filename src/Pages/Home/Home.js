import React, { useContext, useEffect, useState } from 'react'
import { Spinner, Toast } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ContactMe from '../../Components/ContactMe/ContactMe';
import useTitle from '../../Components/hooks/useTitle';
import Service from '../../Components/Service/Service';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'

export default function Home() {
  const {show, setShow} = useContext(AuthContext);
  useTitle('MDC: Home');
  const [services, setServices] = useState([]);
  const [loadHome, setLoadHome] = useState(true);
  useEffect(()=>{
    fetch('http://localhost:5000/hservices')
    .then(res=>res.json())
    .then(data=>{
      setServices(data);
      console.log(data);
      setLoadHome(false);
    })
  }, [])
  return (
    <>
    {
      loadHome? <div className='my-3'><Spinner variant='primary' animation='border'></Spinner></div>: 
      <div className='container mt-5'>
      <div className='mt-3'>
        <h1 className='text-primary text-start text-uppercase'>Services</h1>
        <hr className='text-primary'/> 
    </div>
      <div className='row row-cols-lg-3 mb-3 row-cols-1 g-4'>
       {
        services.map(service=><Service
        key={service._id}
        service= {service}
        ></Service>)
       }
    </div>
    <div className='d-flex justify-content-lg-end justify-content-center'>
        <Link to='/services'><button className='btn btn-primary'>See All</button></Link>
    </div>
    <ContactMe></ContactMe>
    </div>
    }
    </>
  )
}
