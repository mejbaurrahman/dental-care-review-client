import React from 'react'

export default function Review({review}) {
    const {time}= review;
    const showTime = new Date(time).toLocaleString();
  return (
    <div className='row row-cols-md-3 row-cols-1 g-3 my-2 pb-3 border border-1 border-opacity-25 border-primary' >
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
    </div>
  )
}
