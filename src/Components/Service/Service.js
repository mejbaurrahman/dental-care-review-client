import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

export default function Service({service}) {
    const {serviceName, img, rating, _id, price, description}= service;
  return (
    <div>
    <Card className='h-100'>
    <PhotoProvider>
      <PhotoView src={img}>
      {/* <Card.Img variant="top" src={img} style={{height:'250px'}} /> */}
      <img src={img} alt="" srcset="" style={{height:'250px', objectFit:'cover'}} />
      </PhotoView>
    </PhotoProvider>
      
      <Card.Body>
        <Card.Title>{serviceName}</Card.Title>
       
        <Card.Text>
          {description.slice(0,100)}
        </Card.Text>
        <div className='d-flex justify-content-evenly'>
        <Card.Text>
          Rating: {rating}
        </Card.Text>
        <Card.Text>
          price: {price}
        </Card.Text>
        </div>
      </Card.Body>
      <Card.Footer>
      <Link to={`/service/${_id}`}><Button variant="primary">Details</Button></Link>
      </Card.Footer>
    </Card>
    </div>
  )
}
