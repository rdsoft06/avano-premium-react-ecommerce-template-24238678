import React from 'react';
import {
    Link
} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';

class BlockSlider extends React.Component {
    render() {
        const options = {
            slideSpeed: 500,
            margin: 30,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                }
            }
        };
        return ( <
            div className = "container"
            id = "camera" >
            <
            div className = "camera_slider" >
            <
            OwlCarousel ref = "carousel"
            className = "camera_wrap owl-carousel"
            options = {
                options
            } >
            <
            div className = "item" > < Link to = "/shop" > < img src = "/images/slider-01.jpg"
            alt = "Slider" / > < /Link></div >
            <
            div className = "item" > < Link to = "/shop" > < img src = "/images/slider-02.jpg"
            alt = "Slider" / > < /Link></div >
            <
            /OwlCarousel> <
            /div> <
            /div>
        );
    }
}

export default BlockSlider;