import React, { useState, useEffect, Fragment } from 'react';
import './App.css';

import './components/Products.css'
import Header from './components/Header';


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
            <div className='products_info' >
                <h2 className='title'>{item.name}</h2>
                <p className='price'>R$ {item.price.toFixed(2)}</p>
                <button className='btn'>Adicionar ao Carrinho</button>
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
      <Header/>
      <div className='Games_Content'>
        <Products />
      </div>
    </div>
  );
}


