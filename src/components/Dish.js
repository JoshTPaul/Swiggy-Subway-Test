import React, { Component } from 'react'
import vegSquare from '../assets/icons/dish-veg.svg'
import nonVegSquare from '../assets/icons/dish-nonVeg.svg'

import {connect} from 'react-redux'
import {callCustomiser} from './redux/actions'

class Dish extends Component {
    constructor(props)
    {
        super(props)
        this.add = this.add.bind(this)
    }

    add(event)
    {
        this.props.callCustomiser(this.props.obj)
    }

    render() {
        return (
            <li className='Dish'>
                <div className='DishDesc'>
                    <img src={(this.props.obj.veg)?vegSquare:nonVegSquare} alt=''/>
                    <h2>{this.props.obj.name}</h2>
                    <h4>₹ {this.props.obj.price}</h4>
                    <h4>{this.props.obj.desc}</h4>
                </div>
                <div className="DishRight">
                    {
                        (this.props.obj.img !== '')
                        ?(<div className='DishImg'>
                            <img src={this.props.obj.img} alt=''/>
                         </div>)
                        :(false)
                    }
                    <div className='DishAction'>
                        <button onClick={this.add}>ADD</button>
                        <h6>Customisable</h6>
                    </div>
                </div>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callCustomiser: (data) => dispatch(callCustomiser(data))
    }
}

export default connect(null, mapDispatchToProps)(Dish)