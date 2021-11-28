import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { ImLocation } from 'react-icons/im';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Detail = (props) => {
    console.log(props);
    const {name,img,dolar,title,location,time,id}=props.details;
    // const {name,img,dolar,title,location,time,id}=useParams();
    const {serviceId}=useParams();

    // const singleDocto
    return (
        < >
        <Col lg={4}>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title> {serviceId}</Card.Title>
               <p>  {title} </p>
              {/* <h6> <a> <ImLocation /></a> {location}</h6> */}
              {/* <h6 > <a href=""><BiTime/></a> {time}</h6> */}
              {/* <p>  <a href=""><FaRegMoneyBillAlt/></a>  {dolar} </p> */}
              <Card.Text>
              {/* <a href=""><FaRegMoneyBillAlt/></a>  {dolar}  */}
              <br />
              <br />
             
             {/* <Link to={`/details/${id}`}><button className='btn btn-primary me-md-2'> View Details {name.toLowerCase()} </button></Link> */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   </>
    );
};

export default Detail;