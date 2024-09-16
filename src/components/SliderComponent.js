import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import resource from '../utils/resource';

function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    }

    return (
        <div className="slider-container position-relative">
            <Slider {...settings}>
            {resource.slider.map((image) => (
                <div>
                    <img src={`${process.env.PUBLIC_URL} ${image.imageUrl}`} alt="Logo" className='w-100' />
                    <div className='container'>
                        <div className='slider-container-text position-absolute top-50'>
                            <span className='fw-bolder'> {image.imageText} </span>
                        </div>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    )
}

export default SliderComponent
