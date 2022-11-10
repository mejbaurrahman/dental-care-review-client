import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import b1 from '../../images/b1.jpg';
import b2 from '../../images/b2.jpg';
import b3 from '../../images/b3.jpg';

export default function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mejba's Dental Care</h3>
          <p>You can trust me. I will help you to provide better treatment</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Mejba's Dental Care</h3>
          <p>Trust On Mejba's Dental Care. Best dentist in the city.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Mejba's Dental Care</h3>
          <p>Trust On Mejba's Dental Care. Best dentist in the city.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}