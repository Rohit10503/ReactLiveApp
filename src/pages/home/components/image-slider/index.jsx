import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


    
  
const ImageSlider=()=>{

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/AdvantagePrime/BAU/15thNov/D46321486_IN_WLME_Advantage_for_prime_PC_ingress-banner_1500x300.jpg"
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/akull/Rewards/EBB/D47911944_INWLD_Rewards-Festival_Catpage-banners_PC_1500x300.jpg"
              alt="Second slide"
            />
    
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/G/31/img22/Wearables/Boult-5/1500x3004._CB618706000_.jpg"
              alt="Third slide"
            />
    
            
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/G/31/img22/Wearables/Noise-Alpha_Banner/1500x300._CB618912600_.jpg"
              alt="Fourth slide "
            />
    
            
          </Carousel.Item>
        </Carousel>
      );
};
export default ImageSlider;