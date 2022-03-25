
import React from 'react';
import { Carousel, Image} from 'react-bootstrap';
import img1 from '../../../../images/pic2.jpg'
import img2 from '../../../../images/img.jpg'
import img3 from '../../../../images/pic1.jpg'

const CarouselSection = () => {
    return (
        <div className='w-100' >
            <Carousel fade className='overflow-hidden h-100'>
                <Carousel.Item >
                    <img
                    style={{maxHeight:'93vh'}}
                        className="d-block w-100"
                        src={img1}
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
                     style={{maxHeight:'93vh'}}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"

                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                     style={{maxHeight:'93vh'}}
                        className="d-block w-100"
                        src={img3}
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