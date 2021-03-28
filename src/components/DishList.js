import React, { Component } from 'react'
import Dish from './Dish'

export default class DishList extends Component {
    render() {
        return (
            <section className='DishList'>
                <h1>Recommended</h1>
                <h3>33 ITEMS</h3>
                <Dish/>
            </section>
        )
    }
}
