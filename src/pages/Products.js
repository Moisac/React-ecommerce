import React from 'react';
import {QuickView} from '../components/QuickView';

import Slider from "react-slick";
import {Tooltip, Button, Row, Col} from 'antd';
import {HeartOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import ShopContext from '../context/shop-context';




const ProductsPage = props => {

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
          <main className="products-page container">
            <Row gutter={{md: 16, sm: 8}}>
              {context.products.map(product => (
                    <Col md={6} sm={8} xs={12} className="product-wrapper" key={product.id}>
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
                                      <img src={img} alt=""/>
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
                                    <img src={img} alt=""/>
                                ))}
                            </Slider>
                            <div className="product-content">
                                <b className="brand">{product.brand}</b>
                                <h6 className="title">{product.title}</h6>
                                <p className="price">${product.price}</p>
                                <Button className="add-to-cart" type="primary" icon={<ShoppingCartOutlined />} onClick={context.addProductToCart.bind(this, product)}>Add to Cart</Button>
                            </div>
                        </div>
                    </Col>
                  )
              )} 
            </Row>
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};


export default ProductsPage;