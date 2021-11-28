import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import newsData from '../../../fakedata/newsdata.json'

const NewsDetails = () => {

    const [details, setDetails] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        setDetails(newsData);
    }
        , []);
        const singleDoctor = details.filter(data => data.id === parseInt(serviceId));
        console.log(singleDoctor);
    return (
        <div>
             <Row id='doctors' xs={1} md={2} className="g-4 m-3">

<Col className='mx-auto'>
    <Card>
        <Card.Img variant="top" src={singleDoctor[0]?.img} />
        <Card.Body>
            <Card.Title> {singleDoctor[0]?.name}</Card.Title>
            <p>  {singleDoctor[0]?.details} </p>
            <Card.Text>
                
            </Card.Text>
        </Card.Body>
    </Card>
</Col>
</Row>
        </div>
    );
};

export default NewsDetails;