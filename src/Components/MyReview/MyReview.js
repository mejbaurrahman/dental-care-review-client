import React from 'react'
import { Link } from 'react-router-dom';

export default function MyReview({review, handleDelete, handleUpdate}) {
    const {time}= review;
    const showTime = new Date(time).toLocaleString();
    const updateReview=(e)=>{
        e.preventDefault();
        const form = e.target;
        const r = form.review.value;
        const rdata = {
            r
        };
        handleUpdate(review._id, rdata);
    }    
  return (
    <>

    <div className='row row-cols-md-4 row-cols-1 g-3 my-2 pb-3 border border-1 border-opacity-25 border-primary' >
        <div className='col'>
            <div className='d-flex justify-content-start align-items-center mb-2'>
                <img src={review.photURL} className='rounded-circle' alt="" style={{width:'50px'}} />
                <p className='px-4'>{review.displayName}</p>
            </div>
        </div>
        <div className='col'>
            <div className='d-flex justify-content-start align-items-center'>
               <p>{review.review}</p>
            </div>
        </div>
        <div className='col'>
            <div className='d-flex justify-content-start align-items-center'>
               <p className='text-secondary'>{showTime}</p>
            </div>
        </div>
        <div className='col'>
            <div className='d-flex justify-content-around align-items-center'>
               <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
               <button onClick={()=>handleDelete(review._id)} className='btn btn-danger'>Delete</button>
            </div>
        </div>

    </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Your review</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={updateReview} action="">
      <div class="modal-body">
        
            <input type="text" name="review" className='w-100 p-2' defaultValue={review.review} id="" />
       
      </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type='submit' className='btn btn-primary'>Update</button>
      </div>

      </form>
    </div>
  </div>
</div>
    </>
  )
}