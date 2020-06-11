import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Women from '../Home/Women';
import Men from '../Home/Men';
import Register from '../Account/Register';
import LogIn from '../Account/LogIn';
import Cart from '../Cart/Cart';
import CartOne from '../Cart/CartOne';
import Checkout from '../Checkout/Checkout';
import Bags from '../Product/Bags';
import NotFound from '../NotFound/NotFound';
import Product from '../Product/Product';
import ProductList from '../Product/ProductList'
import Details from '../Product/Details';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/women" component={Women}/>
    <Route path="/men" component={Men}/>
    <Route path="/login" component={LogIn}/>
    <Route path="/register" component={Register}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/cartone" component={CartOne}/>
    
    <Route path="/product" component={Product}/>
    <Route path="/productlist" component={ProductList}/>
    <Route path="/details/:id" component={Details}/>
    <Route path="/checkout" component={Checkout}/>
    
   
   
    
    <Route path="/bags" component={Bags}/>

    <Route   component={NotFound}/>
  </Switch>
)

export default Main;
