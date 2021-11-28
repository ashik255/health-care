import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Futter.css'

const FutterSection = () => {
    return (
        <Row className='futter-section p-4 m-1'>
            <Col>
          <h1>Doctor Chamber</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sapiente optio magnam iure minus, reprehenderit hic reiciendis dolorem deleniti nulla error placeat quisquam vel inventore, ratione, excepturi iusto beatae adipisci.</p>
            </Col>
            <Col>
              <h3>Departments</h3>
              <br />
              <p>Dental Services</p>
              <p>Emergency Medicine</p>
              <p>Ophthalmology</p>
              <p>Orthopedic Surgery</p>
              <p>Radiation Oncology</p>
            </Col>
            <Col>
             <h2>Opening Hours</h2>
             <br />
             <p>Mon-Tues: <span>              6:00-10:00</span></p>
             <hr />
             <p>Wed-Thurs: 6:00-10:00</p>
             <hr />
             <p>Sat-Sun: 6:00-10:00</p>
             <hr />
             <p>Friday: Closed</p>
             <hr />
            </Col>
        </Row>
    );
};

export default FutterSection;