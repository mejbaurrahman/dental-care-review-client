import React from 'react'
import { Button, Card } from 'react-bootstrap';

export default function Service({service}) {
    const {serviceName, img, rating, price, description}= service;
  return (
    <div>
    <Card className='h-100'>
      <Card.Img variant="top" src={img} style={{height:'250px'}} />
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
      <Button variant="primary">Details</Button>
      </Card.Footer>
    </Card>
    </div>
  )
}
