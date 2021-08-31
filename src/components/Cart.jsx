import React, {useContext} from 'react'
import './Cart.css'
import MyContext from '../context/myContext';

export default (props) => {

    const {cart, setCart} = useContext(MyContext)
    const {cartOpen, setCartOpen} = useContext(MyContext)

    let subtotal = 0;
    let frete = 0;
    let total = 0;
    let cartContainer = []
   

    const cartList = cart.map((item, index) => {

        cartContainer += cartContainer;
        subtotal += item.price

        if(subtotal < 250) {
            frete += 10;
        } else {
            frete = 0;
        }

        total = subtotal + frete;

        function deleteIten(props){

            cartContainer = cart.slice();

            cartContainer.splice(props, 1)
    
            setCart(cartContainer)
            
        }

        
        return(
            <div key={item.id}>
                <div className='products_controller'>
                    <p className='item_name'>{item.name}</p>
                    <a className='item_delete' onClick={() => deleteIten(index)}>excluir</a>
                </div>
            </div>
        )
            
    })

    function cancelBuy(props){

        cartContainer = cart.slice();

        cartContainer.splice(0)

        setCart(cartContainer)

        setTimeout(setCartOpen, 1000);
    }


    return(
        <aside className={`cart ${cartOpen ? 'opened' : 'closer'}`}>
            <a onClick={() => setCartOpen(!cartOpen)} className='closeCart'>Fechar</a>
            <div className='cart_products'>
                {cartList}
            </div>
            <div className='cart_price'>
                <p className='cart_subtotal'>
                <span>Subtotal: </span>
                <span className='subtotal'>R$ {subtotal.toFixed(2)}</span> 
                </p>
                <p className='cart_frete'>
                    <span>Frete: </span>
                    <span className='frete'>R$ {frete.toFixed(2)}</span>
                </p>
                <p className='cart_total'>
                    <span>Total: </span>
                    <span className='total'>R$ {total.toFixed(2)}</span>
                </p>
            </div>
            <div className='cart_buttons'>
                <button className='buy'>Finalizar Compra</button>
                <a className='cancel' onClick={() => cancelBuy()}>Cancelar</a>
            </div>

        </aside>
    )
}