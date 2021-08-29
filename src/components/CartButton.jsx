import React from 'react'
import cart from './../img/cart-icon.svg'
import './CartButton.css'

export default (props) => {

    function openCart() {

        document.querySelector('.cart').style.width = '40vw';
        document.querySelector('.cart').style.display='flex';
         
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