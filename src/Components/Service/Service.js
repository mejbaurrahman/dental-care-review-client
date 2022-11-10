import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { faStar, faMoneyCheck, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <FontAwesomeIcon className='me-2' icon={faStar}></FontAwesomeIcon> {rating}
        </Card.Text>
        <Card.Text>
        <FontAwesomeIcon className='me-2' icon={faMoneyCheck}></FontAwesomeIcon> {price}
        </Card.Text>
        </div>
      </Card.Body>
      <Card.Footer>
      <Link to={`/service/${_id}`}><Button variant="primary">Details<FontAwesomeIcon className='ms-2' icon={faArrowAltCircleRight}></FontAwesomeIcon> </Button></Link>
      </Card.Footer>
    </Card>
    </div>
  )
}
