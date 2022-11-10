import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function AddAService() {
   
    const [loadingService, setLoadingService]= useState(false);
    const [service, setService] = useState({});
    const handleAddService =(e)=>{
       setLoadingService(true);
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value; 
        const img = form.img.value; 
        const rating = form.rating.value; 
        const price = form.price.value; 
        const description = form.description.value; 
        const serviceData = {
          serviceName, img, rating, price, description
        };

        // setService(serviceData);
        
        fetch('http://localhost:5000/services',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(serviceData)
        }).then(res=>res.json())
        .then(data=>{
          console.log(data);
          toast.success("Added service Succesfully");
          setLoadingService(false)
          form.reset();
        }).catch(error=>{
          console.log(error);
        })
    }
  return (
    <>
        <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <div className='d-flex justify-content-center align-items-center'>
      <div className=' w-75 p-lg-5 px-2'>
    {
      loadingService&& <Spinner className='my-5' animation="border" variant='primary'>
    </Spinner>
    }
      <h1 className='text-center my-3 fw-bold'>Add A Service</h1>
      <hr  className='text-dark'/>
      <form onSubmit={handleAddService} action="">
        <input className='px-3 w-100 py-2 border border-1 rounded' type="text"  name='serviceName' placeholder='service name' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="text"  name='img' placeholder='image' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="text"  name='rating' placeholder='rating' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="text"  name='price' placeholder='price' /><br/><br/>
        <textarea className='px-3 w-100 py-4 border border-1 rounded' type="text"  name='description' placeholder='description' /><br/><br/>

        <button className='btn btn-primary' type="submit">Add Service</button>
      </form>
    
    </div>
    
    </div>
    </>
  )
}
