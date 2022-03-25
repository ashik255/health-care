import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-map-marker-alt } from '@fortawesome/free-solid-svg-icons'

import {FaRegMoneyBillAlt} from 'react-icons/fa';
import { ImLocation } from "react-icons/im";
import { BiTime } from "react-icons/bi";
import { Link } from 'react-router-dom';



const Doctor = (props) => {
  const {name,img,dolar,title,location,time,id}=props.doctor;
  return (
     < >
          <Col  className='h-90vh' lg={4}>
            <Card >
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title> {name}</Card.Title>
                 <p>  {title} </p>
                <h6> <a> <ImLocation /></a> {location}</h6>
                <h6 > <a href=""><BiTime/></a> {time}</h6>
                {/* <p>  <a href=""><FaRegMoneyBillAlt/></a>  {dolar} </p> */}
                <Card.Text>
                <a href=""><FaRegMoneyBillAlt/></a>  {dolar} 
                <br />
                <br />
               <Link style={{backgroundColor:'#80e5ff'}} className='rounded-2 border-0 p-2 text-decoration-none text-dark' to={`/detail/${id}`}> View Details</Link>
               {/* <Link to={`/details/${id}`}><button className='btn btn-primary me-md-2'> View Details {name.toLowerCase()} </button></Link> */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
     </>
  );
};

export default Doctor;