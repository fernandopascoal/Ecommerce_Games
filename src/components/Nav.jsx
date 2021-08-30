import React, { useContext } from 'react';
import './Nav.css'
import arrow from './../img/arrow-down-icon.svg'
import MyContext from '../context/myContext';



export default function Nav(props){

    let OrderList = []

    const {products, setProducts} = useContext(MyContext)

    let newProducts = [...products]

    async function alphaOrder() {
        OrderList = await newProducts.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
            setProducts(OrderList)
            document.querySelector('.nav_list').style.display='none'
            document.querySelector('.nav_container').style.borderRadius='5px 5px 5px 5px'

            
      }

      async function scoreOrder() {
        OrderList = await newProducts.sort(function(a, b){
            if(a.score > b.score) { return -1; }
            if(a.score < b.score) { return 1; }
            return 0;
        })
            setProducts(OrderList)
            document.querySelector('.nav_list').style.display='none'
            document.querySelector('.nav_container').style.borderRadius='5px 5px 5px 5px'

            
      }

      async function priceOrder() {
        OrderList = await newProducts.sort(function(a, b){
            if(a.price < b.price) { return -1; }
            if(a.price > b.price) { return 1; }
            return 0;
        })
            setProducts(OrderList)
            document.querySelector('.nav_list').style.display='none'
            document.querySelector('.nav_container').style.borderRadius='5px 5px 5px 5px'

            
      }

     

   

    function orderList() {

       

        let style = document.querySelector('.nav_list').style.display

        if(style === 'none') {
            document.querySelector('.nav_list').style.display='block'
            document.querySelector('.nav_container').style.borderRadius='5px 5px 0px 0px'
            
        } else {
            document.querySelector('.nav_list').style.display='none'
            document.querySelector('.nav_container').style.borderRadius='5px 5px 5px 5px'
        }
        
    }


    

    return (
        <div className='form_container'>
            <p className='nav_info'>Ordernar: </p>

            <div className='nav'>
                <div className='nav_container'>
                    
                    <img src={arrow} alt="V" className='nav_icon' onClick={orderList}/>
                    
                    <ul className="nav_list">
                        <li className='nav_item' onClick={alphaOrder} >Ordem Alfabética</li>
                        <li className='nav_item' onClick={scoreOrder} >Avaliações(Score)</li>
                        <li className='nav_item' onClick={priceOrder}>Preço</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}