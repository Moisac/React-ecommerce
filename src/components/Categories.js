import React from 'react';
import { Row, Col } from 'antd';

export const Categories = () => {
    return (
        <div className="categories-banner container">
            <Row gutter={[16, 16]}>
                <Col md={12} sm={12} xs={24}>
                    <img src={require('../images/general/women.jpg')} />
                    <div className="description">
                        <a className="category-btn">Women</a>
                    </div>
                </Col>
                <Col md={12} sm={12} xs={24}>
                    <img src={require('../images/general/mens.jpg')} />
                    <div className="description">
                        <a className="category-btn">Mens</a>
                    </div>
                </Col>
                <Col md={12} sm={12} xs={24}>
                    <img src={require('../images/general/shoes.jpg')} />
                    <div className="description">
                        <a className="category-btn">Shoes</a>
                    </div>
                </Col>
                <Col md={12} sm={12} xs={24}>
                    <img src={require('../images/general/glases.jpg')} />
                    <div className="description">
                        <a className="category-btn">Accessories</a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
