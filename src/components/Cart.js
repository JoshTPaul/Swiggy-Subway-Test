import React, { Component } from 'react'
import cartEmpty from '../assets/images/cartEmpty.webp'

export default class Cart extends Component {
    render() {
        return (
                <div className='Cart'>
                    <h1>Cart Empty</h1>
                    <img src={cartEmpty} alt=''/>
                    <p>Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
                </div>
        )
    }
}
