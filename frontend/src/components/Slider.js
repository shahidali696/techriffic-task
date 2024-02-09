import React from 'react';
import { Carousel } from 'react-bootstrap';

import Slider1 from '../resource/slider1.png'
import Slider2 from '../resource/slider2.png'
import Slider3 from '../resource/slider3.png'
function SliderN() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={Slider1} className="d-block w-100" alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={Slider2} className="d-block w-100" alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={Slider3} className="d-block w-100" alt="Slide 1" />
            </Carousel.Item>
        </Carousel>
    );
}

export default SliderN;