import React, { useContext } from 'react';
import './Nav.css'
import arrow from './../img/arrow-down-icon.svg'
import MyContext from '../context/myContext';



export default function Nav(props){
    
    let xablau = []

  
    const {products, setProducts} = useContext(MyContext)

   async function Ordem() {
        
    

        xablau = await products.sort((a, b) => a.name.localeCompare(b.name))
        console.log(products)
        setProducts(xablau)
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
                        <li className='nav_item' onClick={Ordem} >Ordem Alfabética</li>
                        <li className='nav_item' >Avaliações(Score)</li>
                        <li className='nav_item' >Preço</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}