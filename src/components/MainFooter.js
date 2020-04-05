import React from 'react';
import { Row, Col, BackTop, Divider } from 'antd';

import {UpOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined} from '@ant-design/icons';

export const MainFooter = () => {
    return (
        <div className="footer">
            <Row gutter={32} justify="center">
                <Col  md={8} sm={25} xs={24}>
                <h3>About us</h3>
                <p>The fashion and retail industry tends to be overly youth focused. However, by closely following generational fashion trends as well as our own customers’ purchasing preferences, we will tailor our inventory to meet the specific needs of our clientele.</p>
                </Col>
                <Col  md={8} sm={25} xs={24} className="social">
                    <h3>Follow us on social media</h3>
                    <FacebookOutlined />
                    <InstagramOutlined />
                    <TwitterOutlined />
                    <YoutubeOutlined />
                </Col>
                <Col md={8} sm={25} xs={24} className="footer-logo">
                    <Row align="center" justify="center">
                        <Col span={12}><img src={require('../images/general/zara.jpg')} alt=""/></Col>
                        <Col span={12}><img src={require('../images/general/levis.png')} alt=""/></Col>
                        <Col span={12}><img src={require('../images/general/lacoste.png')} alt=""/></Col>
                        <Col span={12}><img src={require('../images/general/guess.png')} alt=""/></Col>
                    </Row>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={18}>
                    <h4>Template created by Moisa Claudiu</h4>
                </Col>
                <Col>
                    <BackTop>
                        <div className="ant-back-top-inner"><UpOutlined /></div>
                    </BackTop>
                </Col>
            </Row>
        </div>
    )
}
