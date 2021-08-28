import React from 'react'
import cart from './../img/cart-icon.svg'
import './Cart_Button.css'

export default () => {

    function openCart() {

        document.querySelector('.cart').style.width = '500px'
         
    }












    return(
        <div className='button_cart_container' onClick={openCart}>
            <div className='button_cart'>
                <img src={cart} alt="Carrinho" className='button_cart_img'/>
            </div>
           
            <div className='button_cart_itens'>
                <p className='button_itens_info'>Itens: 0 | R$ 0,00</p>
            </div>
        </div>
    )
}