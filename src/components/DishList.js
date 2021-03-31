import React, { Component } from 'react'
import Dish from './Dish'
import subwayData from '../assets/subwayData'

export default class DishList extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const dishList = subwayData.dishList
        const groups = Object.keys(dishList).map(item=>{
            return(
                <ul className='ch' id={item}>
                    <h1>{item}</h1>
                    <h5>{`${dishList[item].length} ITEMS`}</h5>
                    {
                    dishList[item].map(item => {
                        return <Dish obj={item}/>
                        })
                    }
                </ul>
            )
        })
        return (
            <section className='DishList'>
                {groups}
            </section>
        )
    }
}
