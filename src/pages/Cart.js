import React, { useContext } from 'react';
import ShopContext from '../context/shop-context';
import { NavLink } from 'react-router-dom';

import {Popconfirm, Button, Row, Col, InputNumber, Card} from 'antd';
import { DeleteOutlined }  from '@ant-design/icons';


const CartPage = props => {
  const context = useContext(ShopContext);

  const cartTotal = context.cart.reduce((total, curTotal) => {
    return total + curTotal.price * curTotal.quantity;
  }, 0);


  return (
    <React.Fragment>
      <main className="cart">
        {context.cart.length <= 0 && <img className="no-products" src={require('../images/general/empty_cart.jpg')} alt=""/>}
       <Row gutter={16}>
         <Col md={18} sm={24} xs={24}>
         {context.cart.length > 0 && context.cart.map(cartItem => (
          <table>
            <tr className="single-product" key={cartItem.id}>
              <td><img src={cartItem.image_thumb} alt=""/></td>
                <td>{cartItem.title}</td>
                <td>${cartItem.price}</td>
                <td><InputNumber min={1} max={100} defaultValue={cartItem.quantity} disabled/></td>
                <td>${cartItem.price * cartItem.quantity}</td>
                <td><Popconfirm
                  title="Are you sure you delete product from cart?"
                  onConfirm={context.removeProductFromCart.bind(this,cartItem.id)}
                  okText="Delete"
                  cancelText="Cancel"
                  placement="top"
                  >
                    <DeleteOutlined />
                  </Popconfirm>
                </td>
              </tr>
          </table>
          ))}
         </Col>
         <Col md={6} sm={24} xs-={24}>
         <Card title="Your shopping cart" bordered={true}>
         <p><b>SUBTOTAL: </b>${cartTotal}</p>
         <p><b>GRAND TOTAL: </b><span className="total">${cartTotal}</span></p>
         <NavLink to="/products"><Button block>Return to shopping</Button></NavLink>
         <NavLink to="/products"><Button type="primary" block className="checkout-btn" disabled={cartTotal === 0 ? 'disabled' : ''}>Proceed to checkout</Button></NavLink>
        </Card>
         </Col>
       </Row>
      </main>
    </React.Fragment>
  );
};

export default CartPage;