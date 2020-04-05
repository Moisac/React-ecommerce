import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import ShopContext from '../context/shop-context';
import logo from '../images/general/logo.png';
import {MiniCart} from '../components/MiniCart';


//Ant icons
import { ShoppingCartOutlined, HeartOutlined, DownOutlined  }  from '@ant-design/icons';
import { Badge, Tooltip, Row, Col, Menu } from 'antd';


export const MainNavigation = props => {
  const context = useContext(ShopContext);
  const favItemNumber = context.fav.length;



  return (
    <React.Fragment>
      <div className="header-content">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">

          <Col className="gutter-row" md={6} sm={10} xs={10}>
          <NavLink to="/"><img id="logo" src={logo} /></NavLink>
          </Col>

          <Col className="gutter-row" md={10} sm={5} xs={5}>
            <Menu mode="horizontal">
              <Menu.Item>
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/products">All products</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/products">Women</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/products">Men</NavLink>
              </Menu.Item>
            </Menu>
          </Col>

          <Col className="gutter-row" md={8} sm={9} xs={9}>
           <ul className="header-icons">
              <li><MiniCart /></li>
            <Tooltip title="Favorite">
              <li><NavLink to="/favorite"><HeartOutlined /><span className="count">{favItemNumber}</span></NavLink></li>
            </Tooltip>
          </ul>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

