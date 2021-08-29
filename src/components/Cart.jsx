import React from 'react'
import './Cart.css'
import Products from './Products'

export default (props) => {

    function closeCart() {
        document.querySelector('.cart').style.width = '0vw'
    }




    return(
        <aside className='cart'>
            <a onClick={closeCart} className='closeCart'>Fechar</a>
            <div className='cart_products'>
                <div className='products_controller'>
                    <p className='item_name'></p>
                    <p className='item_price'></p>
                    <p className='item_delete'></p>
                </div>
                
            </div>
            <div className='cart_price'>
                <p className='cart_subtotal'>
                <span>Subtotal: </span>
                <span className='subtotal'></span> 
                </p>
                <p className='cart_frete'>
                    <span>Frete: </span>
                    <span className='frete'></span>
                </p>
                <p className='cart_total'>
                    <span>Total: </span>
                    <span className='total'></span>
                </p>
            </div>
            <div className='cart_buttons'>
                <button className='buy'>Finalizar Compra</button>
                <a className='cancel'>Cancelar</a>
            </div>

        </aside>
    )
}