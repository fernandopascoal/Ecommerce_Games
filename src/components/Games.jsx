
import React from 'react'
import './Games.css'


export default (props) => {
    return (
        <div className= 'games_container'>
            <h3>{props.title}</h3>
            <img src={props.img} alt=""  className='games_img'/>
            <p>{props.description}</p>
            <p>R${props.price}</p>
        </div>
    )
}