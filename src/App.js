import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import GlobalState from './context/GlobalState';
import CartPage from './pages/Cart';
import {Favorite} from './pages/Favorite';
import {MainNavigation} from './components/MainNavigation';
import {MainFooter} from './components/MainFooter';
import {Home} from './pages/Home';
import Products from './pages/Products';

import './App.scss';

//Ant layout
import { Layout } from 'antd';
import "antd/dist/antd.css";



const App = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <GlobalState>
      <BrowserRouter>
      <Header theme="white">
        <MainNavigation path="/" component={MainNavigation} exact/>
      </Header>
      <Content>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/products" component={Products} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/favorite" component={Favorite} exact />
        </Switch>
      </Content>
     <Footer>
       <MainFooter />
     </Footer>
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;