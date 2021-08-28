import React from 'react'
import './Cart.css'

export default () => {

    function closeCart() {
        document.querySelector('.cart').style.width = '0vw'
    }




    return(
        <aside className='cart'>
            <a onClick={closeCart} className='closeCart'>Fechar</a>
            <div className='cart_products'>
                <div className='products_controller'>
                    <p>------</p>
                    <p>0,00</p>
                    <a>excluir</a>
                </div>
                
            </div>
            <div className='cart_price'>
                <p className='cart_subtotal'>
                <span>Subtotal: </span>
                <span>R$ 0,00</span> 
                </p>
                <p className='cart_frete'>
                    <span>Frete: </span>
                    <span>R$ 0,00</span>
                </p>
                <p className='cart_total'>
                    <span>Total: </span>
                    <span>R$ 0,00</span>
                </p>
            </div>
            <div className='cart_buttons'>
                <button className='buy'>Finalizar Compra</button>
                <a className='cancel'>Cancelar</a>
            </div>

        </aside>
    )
}