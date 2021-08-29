import React from 'react';
import './App.css';

import './components/Products.css'
import Header from './components/Header';
import Nav from './components/Nav';
import CartButton from './components/CartButton';
import Cart from './components/Cart';



import Products from './components/Products'


export default function App() {

let cart = []

  return (
    <div className="App">
      <div className="App_container">
        <div className='App_header'>
          <Header/>
          <CartButton  />
        </div>
        <Nav/>
        <div className='Games_Content' >
          <Products  />
        </div>
      </div>
      <Cart product={cart.name} price={cart.price}/>
    </div>
  );
}


