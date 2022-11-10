import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import MyReview from '../../Components/MyReview/MyReview';
import Review from '../../Components/Review/Review';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

export default function MyReviews() {
  const [reviews, setReviews]= useState([]);
  const {user, logout} = useContext(AuthContext);
  const [myReviewLoader, setMyReviewLoader] = useState(true);
  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
      headers:{
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      if (res.status === 401 || res.status === 403) {
          
          setMyReviewLoader(false);
          return logout();
      }
      return res.json();
  })
    .then(data=>{
      // console.log(data);
      const r= data.sort(function(a, b){return a.time - b.time}).reverse();
      setReviews(r);
      setMyReviewLoader(false)
      
    })
  }, [user?.email, logout])

 
 const handleUpdate=(id,review)=>{
         const reviewData = review.r;
         console.log(reviewData);
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify({review: reviewData})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id);
                    const updating = reviews.find(review => review._id === id);
                    
                    updating.review = reviewData;
                    const newReviews = [updating, ...remaining];
                    setReviews(newReviews);
                    toast.success('Successfully Updated');
                }
            })

    }
 const handleDelete=(id)=>{
    const confirm = window.confirm('Are you want to delete? ');
    if(confirm)
     {
      fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type':'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert('deleted successfully');
                        toast.success('Successfully Deleted!')
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
     }
     
 }
  return (
     <>
     {
      myReviewLoader? <div className='mt-3 d-flex justify-content-center'><Spinner variant='primary' animation='border' ></Spinner></div>:<>
        <div className='container'>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
         {
    reviews.map((review)=><MyReview key={review._id}
    review={review}
    handleDelete= {handleDelete}
    handleUpdate={handleUpdate}
    ></MyReview>)
  }  
    </div>
      
      
      </>
     }
     </>
  )
}
