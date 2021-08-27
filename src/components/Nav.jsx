import React from 'react'
import './Nav.css'
import arrow from './../img/arrow-down-icon.svg'

export default () => {
    return (
        <div className='form_container'>
            <p className='nav_info'>Ordernar: </p>

            <div className='nav'>
                <div className='nav_container'>
                    
                    <img src={arrow} alt="" className='nav_icon' />
                    
                    <ul className="nav_list">
                        <li className='nav_item' >Ordem Alfabética</li>
                        <li className='nav_item' >Avaliações(Score)</li>
                        <li className='nav_item' >Preço</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}










{/* <form action="" className='form_nav'>
                <label className='nav_info'>Ordenar: </label>
                <select name="" id="" className='nav_container'>
                    <option className='nav_item' value=""></option>
                    
                    <option className='nav_item' value="alfabético">
                        Ordem Alfabética
                    </option>
                    <option className='nav_item' value="score">Avaliações(Score)</option>
                    <option className='nav_item' value="preco">Preço</option>
                </select>
            </form> */}