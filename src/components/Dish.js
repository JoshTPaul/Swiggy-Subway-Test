import React, { Component } from 'react'
import vegSquare from '../assets/icons/veg.svg'

export default class Dish extends Component {
    render() {
        return (
            <div className='Dish'>
                <div className='DishDesc'>
                    <img src={vegSquare}/>
                    <h2>BFF Veg Sub Combo (15 cm, 6 Inch)</h2>
                    <h3>₹371</h3>
                    <h4>Buy any two 6" veg sub &amp; get 2 cookie free</h4>
                </div>
                <div className='DishImg'>
                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gjj06n5ktrxtx1tzmcac' id='yo'/>
                    <button>ADD</button>
                </div>
            </div>
        )
    }
}
