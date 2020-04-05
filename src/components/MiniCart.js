import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import ShopContext from '../context/shop-context';

import {Drawer, Tooltip, Popconfirm, Button, Divider} from 'antd';
import { ShoppingCartOutlined, DeleteOutlined }  from '@ant-design/icons';



export const MiniCart = () => {
    const context = useContext(ShopContext);

    const cartItemNumber = context.cart.reduce((count, curItem) => {
        return count + curItem.quantity;
        }, 0);
    const cartTotal = context.cart.reduce((total, curTotal) => {
      return total + curTotal.price * curTotal.quantity;
    }, 0);

    //Minicart
    const [minicart, setMiniCart] = useState({
        visible: false,
        })
  
        const showMiniCart = () => {
            setMiniCart({
                visible: true,
            })
        }
  
        const hideMiniCart = () => {
            setMiniCart({
                visible: false,
            })
        }

    return (
        <React.Fragment>
          <Tooltip title="Cart">
            <ShoppingCartOutlined onClick={showMiniCart} /> <span className="count">{cartItemNumber}</span>
          </Tooltip>
            <Drawer
          title="Your cart"
          placement="right"
          closable={true}
          onClose={hideMiniCart}
          visible={minicart.visible}
          > 
        
            <div className="minicart">
            {context.cart.length <= 0 && <img className="no-products" src={require('../images/general/empty_cart.jpg')} alt=""/>}
            {context.cart.map(cartItem => (
                <ul>
                  <li key={cartItem.id}>
                    <img src={cartItem.image_thumb} alt=""/>
                    <div className="content">
                      <strong>{cartItem.title}</strong> - ${cartItem.price}
                      <span className="quantity">Quantity: <b>{cartItem.quantity} </b></span>
                    </div>
                    <div>
                      <Popconfirm
                        title="Are you sure you delete product from cart?"
                        onConfirm={context.removeProductFromCart.bind(this,cartItem.id)}
                        okText="Delete"
                        cancelText="Cancel"
                        placement="topRight"
                      >
                        <DeleteOutlined />
                      </Popconfirm>
                    </div>
                  </li>
                </ul>
                ))}
                <Divider />
                <div class="total">
                  <h4>Total: <b>${cartTotal}</b></h4>
                </div>
                <div className="actions">
                  <NavLink to="/cart"><Button disabled={cartTotal === 0 ? 'disabled' : ''} onClick={hideMiniCart} type="primary" block>Go to cart</Button></NavLink>
                </div>
            </div>
            </Drawer>
        </React.Fragment>
    )
}
