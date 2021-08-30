import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

import './components/Products.css'
import Header from './components/Header';
import Nav from './components/Nav';
import CartButton from './components/CartButton';
import Cart from './components/Cart';
import MyContext from './context/myContext';



export default function App(props) {

  const [products, setProducts] = useState([])
  
  const UrlApi = "products.json";
  
  useEffect(() => {
    loadProducts();
  },[]);

  const loadProducts = async () => {
    const response = await fetch(UrlApi)
    const products = await response.json();
    setProducts(products);
  }
    
      let counter = 0; 
      let subtotal = 0;
      let frete = 0;
      let total = 0;


  const productsItens = products.map((item) => {

      let cartItem = document.querySelector('.products_controller').cloneNode(true)
        cartItem.querySelector('.item_name').innerHTML=item.name
        cartItem.setAttribute('data-key', item.id)
        cartItem.querySelector('.item_delete').innerHTML='excluir'

      return (
        <div className='products_container' key={item.id}>
            <div  className='products_info' >
                <h2 className='title'>{item.name}</h2>
                <p className='score'>Score: {item.score}</p>
                <div className='price_container'>
                  <span className='price'>R$ {item.price.toFixed(2)}</span>
                  <button className='btn' onClick={addCart} >Adicionar ao Carrinho</button>  
                </div>
                
            </div>
            <img src={item.image} alt=""  className='product_img'/>
        </div>
    )
  
    function addCart() {
      
      counter += 1


      document.querySelector('.cart_itens').innerHTML = counter;
      document.querySelector('.cart_products').append(cartItem);

      subtotal +=  item.price;

      document.querySelector('.button_cart_price').innerHTML = `R$ ${subtotal}`;

        if(subtotal < 250) {
          frete = frete + 10;
          document.querySelector('.frete').innerHTML = `R$ ${frete.toFixed(2)}`
         } else {
           frete = 0.00
          document.querySelector('.frete').innerHTML = `R$ ${frete.toFixed(2)}`
         }

         total = subtotal + frete
        
        document.querySelector('.subtotal').innerHTML = `R$ ${subtotal}`
        document.querySelector('.total').innerHTML = `R$ ${total}`         
    }   
  
  });

      

    


    return (

      <MyContext.Provider value={{products, setProducts}}>
        <div className="App">
          <div className="App_container">
            <main className="main">
              <div className='logo'></div>
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
          <Cart />
        </div> 
      </MyContext.Provider>
      
    );
}
    

    
    


 


