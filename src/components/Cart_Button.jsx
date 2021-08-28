import React, { useState, useEffect } from 'react'
import cart from './../img/cart-icon.svg'
import './Cart_Button.css'

export default (props) => {

    function openCart() {

        document.querySelector('.cart').style.width = '35vw'
         
    }

    return(
        <div className='button_cart_container' onClick={openCart}>
            <div className='button_cart'>
                <img src={cart} alt="Carrinho" className='button_cart_img'/>
            </div>
           
            <div className='button_cart_itens'>
                    <p className='button_itens'>Itens: <span className='cart_itens'>0</span></p>
                    <span className='button_cart_price'>R$ 0,00</span>
            </div>
        </div>
    )
}