import React from 'react';
import Contact from '../contact/Contact';
import Doctors from '../Doctors/Doctors';
import News from '../News/News';
import CarouselSection from '../Section/carosel/CarouselSection';

const Home = () => {
    return (
        <div id='home'>
            <CarouselSection></CarouselSection>
            <Doctors></Doctors>
            <h1 className='mt-5'>Our Latest News</h1>
            <News></News>
            <br />
            <Contact></Contact>

        </div>
    );
};

export default Home;