import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';


const MainCarousel = () => {

    const items = mainCarouselData.map((item) => <img src={item.image} className='cursor-pointer -z-10' role='presentations' alt='' />)

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1500}
            infinite
        />
    )
};

export default MainCarousel;