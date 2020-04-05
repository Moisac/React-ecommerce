import React from 'react';

import {HomeSlider} from '../components/HomeSlider';
import {Categories} from '../components/Categories';
import {WomenCarousel} from '../components/WomenCarousel';
import {MensCarousel} from '../components/MensCarousel';
import {CategoriesIcons} from '../components/CategoriesIcons';


import '../App.scss';

export const Home = () => {
    return (
        <div>
            <HomeSlider />
            <Categories />
            <WomenCarousel />
            <MensCarousel />
            <CategoriesIcons />
        </div>
    )
}
