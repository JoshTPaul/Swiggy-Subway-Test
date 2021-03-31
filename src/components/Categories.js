import React, { Component } from 'react'
import subwayData from '../assets/subwayData'

export default class Categories extends Component {
    render() {
        const categories = Object.keys(subwayData.dishList).map(item =>{
            return(
                <div>
                    <a href={`#${item}`}>{item}</a>
                </div>
            )
        })
        return (
            <section className='Categories'>
                {categories}
            </section>
        )
    }
}
