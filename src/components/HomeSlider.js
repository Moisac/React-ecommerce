import React from 'react';
import { Carousel, Button } from 'antd';
import '../App.scss';

import { NavLink } from 'react-router-dom';


export const HomeSlider = () => {
    const settings = {
        dots: true,
        arrows: true,
        fade: true,
        swipeToSlide: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div>
             <Carousel className="home-slide container" {...settings}>
                <div className="slide first-slide">
                    <div className="content">
                        <h2>React ecommerce template</h2>
                        <NavLink to="/products"><Button type="primary">View products</Button></NavLink>
                    </div>
                </div>
                <div className="slide second-slide">
                    <div className="content">
                        <h2>React ecommerce template</h2>
                        <NavLink to="/products"><Button type="primary">View products</Button></NavLink>
                    </div>
                </div>
                <div className="slide third-slide">
                    <div className="content">
                        <h2>React ecommerce template</h2>
                        <NavLink to="/products"><Button type="primary">View products</Button></NavLink>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
