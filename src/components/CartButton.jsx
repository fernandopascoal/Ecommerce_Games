import React, {useContext, useState} from 'react'
import cartIcon from './../img/cart-icon.svg'
import './CartButton.css'
import MyContext from '../context/myContext';

export default (props) => {

    const {cart, setCart} = useContext(MyContext)
    const {cartOpen, setCartOpen} = useContext(MyContext)

    let cartButtonList = cart.slice()
    
    var totalCartButton = cartButtonList.reduce(getTotal, 0);
        function getTotal(total, item) {
            return total + item.price;
        }

    return(
        <div className='button_cart_container' onClick={() => setCartOpen(!cartOpen)}>
            <div className='button_cart'>
                <img src={cartIcon} alt="Carrinho" className='button_cart_img'/>
            </div>
           
            <div className='button_cart_itens'>
                    <p className='button_itens'>Itens: <span className='cart_itens'>{cartButtonList.length}</span></p>
                    <span className='button_cart_price'>R$ {totalCartButton.toFixed(2)}</span>
            </div>
        </div>
    )
}