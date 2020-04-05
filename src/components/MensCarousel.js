import React from 'react';
import ShopContext from '../context/shop-context';
import {QuickView} from '../components/QuickView';

import Slider from "react-slick";
import {Tooltip, Button, Divider} from 'antd';
import {HeartOutlined, ShoppingCartOutlined} from '@ant-design/icons';

export const MensCarousel = (props) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
      };

      const innerSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: false,
      }
      

    return (
        <ShopContext.Consumer>
            {context => (
            <React.Fragment>
                <main className="mens container">
                <Divider orientation="right">Men</Divider>
                    <Slider {...settings}>
                        {context.products.map(product => (
                            product.category === 'Mens' ? 
                                <div className="product-wrapper" key={product.id}>
                                    <div className="image-wrapper">
                                        <div className="product-icons">
                                            <Tooltip title="Add to favorite" placement="left">
                                                <HeartOutlined onClick={context.addProductToFav.bind(this, product)} />
                                            </Tooltip>
                                           
                                            <QuickView 
                                                id={product.id}
                                                title={product.title}
                                                price={product.price}
                                                brand={product.brand}
                                                description={product.description}
                                                images={product.images.map(img => (
                                                    <img src={img} />
                                                ))}
                                                addToCart={context.addProductToCart.bind(this, product)}
                                                addToFav={context.addProductToFav.bind(this, product)}
                                                />
                                        </div>
                                        <div className="badges">
                                            {product.badges && product.badges.map((badge) => (
                                               <span className={badge && badge === 'Sale' ? 'sale' : 'new'}>{badge}</span> 
                                            ))}
                                        </div>
                                        <Slider {...innerSettings}>
                                            {product.images.map(img => (
                                                <img src={img} />
                                            ))}
                                        </Slider>
                                        <div className="product-content">
                                            <b className="brand">{product.brand}</b>
                                            <h6 className="title">{product.title}</h6>
                                            <p className="price">${product.price}</p>
                                            <Button className="add-to-cart" type="primary" icon={<ShoppingCartOutlined />} onClick={context.addProductToCart.bind(this, product)}>Add to Cart</Button>
                                        </div>
                                    </div>
                                </div>
                                : ''
                            )
                        )} 
                    </Slider>
                </main>
            </React.Fragment>
        )}
        </ShopContext.Consumer>
    )
}
