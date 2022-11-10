import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';
import Review from '../Review/Review';
import { faStar, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function ServiceDetail() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rLoad, setRLoad] = useState(true);
  const {user} = useContext(AuthContext);
  const [length, setLength]= useState(null);
  const loader = useLoaderData();
  // const [loader, setLoader] = useState({})
  // let { id } = useParams();
  // console.log(id);
  // useEffect(()=>{
  //   fetch(`https://dental-care-server.vercel.app/services/${id}`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //   })
  // })
  const {serviceName, price, rating, description, _id, img} = loader;
  useTitle(`Service: ${serviceName}`)
  useEffect(()=>{
    fetch(`http://localhost:5000/serviceReviews?serviceId=${_id}`)
    .then(res=>res.json())
    .then(data=>{
      setLength(data.length);
     const r= data.sort(function(a, b){return a.time - b.time}).reverse();
      setReviews(r);
      setRLoad(false)
  })

  }, [newReview])

  const handleAddReview =(e)=>{
      e.preventDefault();
      setRLoad(true);
      const form = e.target;
      const review= form.review.value;
      console.log(review);
      const time = new Date().getTime();
      console.log(time);
      // console.log(time.getTime());
      const reviewData = {
          review,
          email: user?.email,
          displayName: user.displayName,
          photURL: user?.photoURL,
          serviceName: serviceName, 
          serviceId: _id,
          time
      };
     
      fetch('http://localhost:5000/reviews',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(reviewData)
      }).then(res=>res.json())
      .then(data=>{
        console.log(data);
        setReviews(data);
        setNewReview(review);
        toast.success('Review added successfully');
        form.reset();
      }).catch(error=>{
        console.log(error);
      })

  }
  return (
<div className='my-5 container'>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
<div className="card mb-3 my-5 border border-1 border-primary" >
  <div className="row g-0">
    <div className="col-md-4">
      {/* <img src={img} className="img-fluid rounded-start" style={{objectFit:'cover', height:'100%'}} alt="..."/> */}
      <PhotoProvider>
      <PhotoView src={img}>
      <img src={img} alt="" srcset="" className='img-fluid' style={{height:'100%', objectFit:'cover'}} />
      </PhotoView>
    </PhotoProvider>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-primary text-uppercase text-md-start">{serviceName}</h5>
        <hr className='text-primary'/>
        <p className="card-text text-md-start">{description}</p>
       <div className='d-flex justify-content-start'>
       <p className="card-text"><small className="text-muted text-primary mx-3"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> {rating}</small></p>
        <p className="card-text"><small className="text-muted text-primary"><FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon> {price}</small></p>
       </div>
      </div>
    </div>
  </div>
</div>
<div className='mt-5'>
  <div>
    <h5 className='text-primary text-start'>Review of this Service</h5>
    <hr className='text-primary'/>
  </div>
    {
        user?.uid ?<>
        <form onSubmit={handleAddReview}>
            <textarea name="review" id="" className='w-100  ' placeholder='give your review'></textarea> <br></br>
            <div className='d-flex justify-content-start'>
            <button className='btn btn-primary' type="submit">Review</button>
            </div>
        </form>
        
        </>:<div className='text-start mx-3'>
          Please <Link to='/login'>Login</Link> to give reviews.
        </div>
    }
</div>
{
  rLoad? <><Spinner variant="primary" animation="grow" /></>:
 <>
   {
    reviews.length?  <div className='my-3'>
    {
      reviews.map((review)=><Review key={review._id}
      review={review}
      ></Review>)
    }    
  </div>: <div>No reviews are added</div>
   }
 </>
}
    </div>
  )
}
