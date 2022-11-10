import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from '../Review/Review';

export default function ServiceDetail() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rLoad, setRLoad] = useState(true);
  const {user} = useContext(AuthContext);
  const loader = useLoaderData();
  const {serviceName, price, rating, description, _id, img} = loader;

  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
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
        // alert('Insert review successfully');
        form.reset();
      }).catch(error=>{
        console.log(error);
      })

  }
  return (
<div className='my-5 container'>
<div className="card mb-3 my-5" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" style={{objectFit:'cover'}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{serviceName}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
  rLoad? <></>:<div className='my-3'>
  {
    reviews.map((review)=><Review key={review._id}
    review={review}
    ></Review>)
  }    
</div>
}
    </div>
  )
}
