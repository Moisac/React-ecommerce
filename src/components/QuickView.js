import React, {useState} from 'react';

import {Modal, Tooltip, Row, Col, Button} from 'antd';
import {EyeOutlined, ShoppingCartOutlined, HeartOutlined} from '@ant-design/icons';

import Slider from "react-slick";


export const QuickView = (props) => {
    const [modal, setModal] = useState({
        visible: false,
    })

    const showModal = () => {
        setModal({
          visible: true,
        });
      };

    const closeModal = event => {
        setModal({
            visible: false,
        })
    }

    const innerSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: true,
      }
    return (
            <React.Fragment>
            <Tooltip title="Quick view" placement="left">
                <EyeOutlined onClick={showModal}/>
            </Tooltip>
                
                    <Modal
                        visible={modal.visible}
                        onCancel={closeModal}
                        footer={null}
                        className="quick-view"
                    >
                        <Row gutter={32}>
                            <Col className="products-carousel" md={12} sm={24} xs={24}>
                                <Slider {...innerSettings}>
                                   {props.images}
                                </Slider>
                            </Col>
                            <Col md={12} sm={24} xs={24}>
                                <div className="content-wrapper">
                                    <h2>{props.title}</h2>
                                    <p>SKU: <b>{props.id}</b></p>
                                    <span>Brand: <b className="brand">{props.brand}</b></span>
                                    <p className="price">${props.price}</p>
                                    <p>{props.description}</p>
                                    <Button className="add-to-cart" type="primary" icon={<ShoppingCartOutlined />} onClick={props.addToCart}>Add to Cart</Button>
                                    <Tooltip title="Add to favorite" placement="top">
                                    <Button className="add-to-fav" type="info" icon={<HeartOutlined />} onClick={props.addToFav}></Button>
                                    </Tooltip>
                                </div>
                            </Col>
                        </Row>
                    </Modal>                
            </React.Fragment>
    )
}
