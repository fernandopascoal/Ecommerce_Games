import React, { useState, useEffect, Fragment } from 'react';
import './App.css';

import './components/Products.css'
import Header from './components/Header';
import Nav from './components/Nav';
import Cart_Button from './components/Cart_Button';
import Cart from './components/Cart';


function Products(){
  const [products, setProducts] = useState([])
  const UrlApi = "products.json";
  
  useEffect(() => {
    loadProducts();
  },[]);

  const loadProducts = async () => {
    const response = await fetch(UrlApi)
    const data = await response.json();
    setProducts(data);
    
  }

  console.log(products)

  return (
    <Fragment>
      {products.map((item) => (
        <div className='products_container'>
            <div key={item.id} className='products_info' >
                <h2 className='title'>{item.name}</h2>
                <p className='score'>Score: {item.score}</p>
                <div className='price_container'>
                  <span className='price'>R$ {item.price.toFixed(2)}</span>
                  <button className='btn'>Adicionar ao Carrinho</button>  
                </div>
                
            </div>
            <img src={item.image} alt=""  className='product_img'/>
        </div>
     ))}
    </Fragment>
  )
}


export default function App() {
  return (
    <div className="App">
      <div className="App_container">
        <div className='App_header'>
          <Header/>
          <Cart_Button />
        </div>
        <Nav/>
        <div className='Games_Content' >
          <Products  />
        </div>
      </div>
      <Cart/>
    </div>
  );
}


