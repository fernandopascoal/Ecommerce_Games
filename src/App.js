import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

import './components/Products.css'
import Header from './components/Header';
import Nav from './components/Nav';
import CartButton from './components/CartButton';
import Cart from './components/Cart';
import MyContext from './context/myContext';
import { render } from '@testing-library/react';



export default function App(props) {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  
  
  const UrlApi = "products.json";

 
  
  useEffect(() => {
    loadProducts();
  },[]);
  

  const loadProducts = async () => {
    const response = await fetch(UrlApi)
    const products = await response.json();
    setProducts(products);
  }


  const loadCart = async (id) => {
    const response = await fetch(UrlApi)
    const cart = await response.json();
    const product = cart.find(x => x.id === Number(id));
    return product;
  }
      

      

  const productsItens = products.map((item) => {

      return (
        <div className='products_container' key={item.id}>
            <div className='products_info' >
                <h2 className='title'>{item.name}</h2>
                <p className='score'>Score: {item.score}</p>
                <div className='price_container'>
                  <span className='price'>R$ {item.price.toFixed(2)}</span>
                  <button className='btn' onClick={()=>addCart(item.id)} >Adicionar ao Carrinho</button>  
                </div>
                
            </div>
            <img src={item.image} alt=""  className='product_img'/>
        </div>
    )
  
  });

  async function addCart(id) {

    const product = await loadCart(id)

    setCart([...cart, product])

    return
  };


    return (

      <MyContext.Provider value={{products, setProducts, cart, setCart, cartOpen, setCartOpen}}>
        <div className="App">
          <div className="App_container">
            <main className="main">
              <header className='App_header'>
                <Header/>
                <CartButton  />
              </header>
              <nav className='navigation'>
                <Nav/>
              </nav>
              
              <div className='Games_Content' >
              <Fragment>
                {productsItens}
              </Fragment>
              </div>
            </main>
          </div>
          <Cart/>
        </div> 
      </MyContext.Provider>
      
    );
}
    

    
    


 


