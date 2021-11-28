import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import loadData from '../../../fakedata/Fakedata.json';

const Details = () => {
    const [details, setDetails] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        setDetails(loadData);
    }
        , []);
        const singleDoctor = details.filter(data => data.id === parseInt(serviceId));
        console.log(singleDoctor);
    return (
        <Row id='doctors' xs={1} md={2} className="g-4 m-3">

            <Col className='mx-auto'>
                <Card>
                    <Card.Img variant="top" src={singleDoctor[0]?.img} />
                    <Card.Body>
                        <Card.Title> {singleDoctor[0]?.title}</Card.Title>
                        <p>  {singleDoctor.title} </p>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Details;