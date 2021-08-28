import React from 'react'
import './Cart.css'

export default () => {






    return(
        <aside className='cart'>
            <div className='cart_products'>
                <p>Produto</p>
                <button>excluir</button>
            </div>
            <div className='cart_price'>
                <p>
                <span>Subtotal: </span>
                <span>R$ 0,00</span> 
                </p>
                <p>
                    <span>Frete: </span>
                    <span>R$ 0,00</span>
                </p>
                <p>
                    <span>Total: </span>
                    <span>R$ 0,00</span>
                </p>
            </div>
            <div className='cart_buttons'>
                <button>Finalizar Compra</button>
                <button>Cancelar</button>
            </div>

        </aside>
    )
}