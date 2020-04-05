import React, {useContext} from 'react';
import ShopContext from '../context/shop-context';

import {Popconfirm, Button, Row, Col} from 'antd';
import { HeartFilled, ShoppingCartOutlined }  from '@ant-design/icons';


export const Favorite = props => {
    const context = useContext(ShopContext);

    return (
        <React.Fragment>
            <main className="favorite container">
                {context.fav.length <= 0 && <img className="no-products" src={require('../images/general/empty_favorite.png')} alt=""/>}
                <Row gutter={32}>
                {context.fav.map(favItem => (
                  <Col md={6} sm={8} xs={12} className="product-wrapper">
                     <div className="badges">
                          {favItem.badges && favItem.badges.map((badge) => (
                              <span className={badge && badge === 'Sale' ? 'sale' : 'new'}>{badge}</span> 
                          ))}
                      </div>
                    <div className="product-content">
                    <Popconfirm
                        title="Are you sure you delete product from favorite?"
                        onConfirm={context.removeProductFromFav.bind(this,favItem.id)}
                        okText="Delete"
                        cancelText="Cancel"
                        placement="top"
                      >
                        <HeartFilled />
                      </Popconfirm>
                       <img src={favItem.image_thumb} alt=""/>
                      <b className="brand">{favItem.brand}</b>
                      <h6 className="title">{favItem.title}</h6>
                      <p className="price">${favItem.price}</p>
                      <Button className="add-to-cart" type="primary" icon={<ShoppingCartOutlined />} onClick={context.addProductToCart.bind(this, favItem)}>Add to Cart</Button>
                    </div>
                  </Col>
                ))}
                </Row>
            </main>
        </React.Fragment>
    )
}
