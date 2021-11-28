
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const CarouselSection = () => {
    return (
        <div className=''>
            
            
            <Carousel fade >
                <Carousel.Item >
                    <img
                        className="d-block w-100 h-75"
                        src="https://templates.envytheme.com/mediva/default/assets/img/queries/queries-2.png"
                        alt="First slide"
                    />
                    <div className='pt-15'>
                    <Carousel.Caption className='text-dark'>
                        <h3>Search Doctor & Make An Appointment</h3>
                        <p>Discover The Best Doctors, Clinic, And Hospital The City Nearest You</p>
                    </Carousel.Caption>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src="https://templates.envytheme.com/mediva/default/assets/img/services/services-4.jpg"
                        alt="Second slide"

                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src="https://templates.envytheme.com/mediva/default/assets/img/services/services-2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3> Health Care, Keeping Care Close To Home</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselSection;