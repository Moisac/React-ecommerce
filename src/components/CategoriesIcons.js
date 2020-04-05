import React from 'react';

import {Row, Col, Divider} from 'antd';

export const CategoriesIcons = () => {
    return (
        <div className="container">
            <Divider />
            <Row gutter={{sm: 32, md: 64}} className="categories-icons">
                <Col md={4} sm ={8} xs={12} className="single-icon">
                    <img src={require('../images/general/women.png')} alt=""/>
                    <h5>Women</h5>
                </Col>
                <Col md={4} sm ={8} xs={12} className="single-icon">
                    <img src={require('../images/general/mens.png')} alt=""/>
                    <h5>Mens</h5>
                </Col>
                <Col md={4} sm ={8} xs={12} className="single-icon">
                    <img src={require('../images/general/shoes.png')} alt=""/>
                    <h5>Shoes</h5>
                </Col>
                <Col md={4} sm ={8} xs={12} className="single-icon">
                    <img src={require('../images/general/accesories.png')} alt=""/>
                    <h5>Accesories</h5>
                </Col>
                <Col md={4} sm ={8} xs={12} className="single-icon">
                    <img src={require('../images/general/new.png')} alt=""/>
                    <h5>New Arrivals</h5>
                </Col>
                <Col md={4} sm ={8} xs={12} className="single-icon">
                    <img src={require('../images/general/gift.png')} alt=""/>
                    <h5>Special Offers</h5>
                </Col>
            </Row>
        </div>
    )
}
