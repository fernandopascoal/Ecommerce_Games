import React, { useContext, useState } from 'react';
import './Nav.css'
import arrow from './../img/arrow-down-icon.svg'
import MyContext from '../context/myContext';



export default function Nav(props){

    let OrderList = []

    const {products, setProducts} = useContext(MyContext)
    const [open, setOpen] = useState(false)

    let newProducts = [...products]

    async function alphaOrder() {
        OrderList = await newProducts.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
            setProducts(OrderList)
            setOpen();
            
      }

      async function scoreOrder() {
        OrderList = await newProducts.sort(function(a, b){
            if(a.score > b.score) { return -1; }
            if(a.score < b.score) { return 1; }
            return 0;
        })
            setProducts(OrderList)
            setOpen();

            
      }

      async function priceOrder() {
        OrderList = await newProducts.sort(function(a, b){
            if(a.price < b.price) { return -1; }
            if(a.price > b.price) { return 1; }
            return 0;
        })
            setProducts(OrderList)
            setOpen();

            
      }

     

   

   


    

    return (
        <div className='form_container'>
            <p className='infoFrete'>*Frete gratis em compras acima de R$ 250,00</p>
            <div className='nav_content'>
                <p className='nav_info'>Ordernar: </p>

                <div className='nav'>
                    <div className='nav_container'>
            
                        <img src={arrow} alt="V" className='nav_icon' onClick={() => setOpen(!open)}/>
            
                        <ul className={`menu ${open ? 'opened' : 'closer'}`}>
                            <li className='nav_item' onClick={alphaOrder} >Ordem Alfabética</li>
                            <li className='nav_item' onClick={scoreOrder} >Avaliações(Score)</li>
                            <li className='nav_item' onClick={priceOrder}>Preço</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}