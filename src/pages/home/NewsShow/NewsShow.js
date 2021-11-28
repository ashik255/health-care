import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsShow = (props) => {
    const {name,details,img,id}=props.news;
    return (
        <>
            
          <Col lg={4}>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title> {name}</Card.Title>
                 <p>  {details} </p>
               
                {/* <p>  <a href=""><FaRegMoneyBillAlt/></a>  {dolar} </p> */}
                <Card.Text>
                <Link className='bg-warning rounded-2 border-0 p-2 text-decoration-none text-dark' to={`/newsdetail/${id}`}> View Details</Link>
                </Card.Text>
              </Card.Body>
            </Card>
            
          </Col>
    
      
        </>
    );
};

export default NewsShow;