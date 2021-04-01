import React, { Component } from 'react'
import {connect} from 'react-redux'
import { callCustomiser } from './redux/actions'

import vegSquare from '../assets/icons/dish-veg.svg'
import nonVegSquare from '../assets/icons/dish-nonVeg.svg'

class Customiser extends Component {
    render() {
        return (
            <>
           { 

               (Object.keys(this.props.data).length === 0)
               ?(null)
               :(
                <div id='CustomiserBG'>
                    <form id='Customiser'>
                        <section id='Customiser-top'>
                            <img src={(this.props.data.veg)?vegSquare:nonVegSquare} alt=''/>
                            <div>
                                <h1>Customise "{this.props.data.name}"</h1>
                                <h3>₹{this.props.data.price}</h3>
                            </div>
                            <button onClick={()=>this.props.reset({})}>&times;</button>
                        </section>
                        <section id='Customiser-titles'>
                            {
                                this.props.data.addOns.map( item => {
                                    return <div>{item.name}</div>
                                })
                            }
                        </section>
                        <section id='Customiser-items'>
                            {
                                this.props.data.addOns.map( item => {
                                    return <div>
                                        <h2 htmlFor={item}>{item.name}</h2>
                                        {item.items.map( val => { return <label htmlFor={item}><input type='radio' value={val} name={item}/>{val}</label>})}
                                        </div>
                                })
                            }
                        </section>
                        <section id='Customiser-submit'>
                            <div id='Customiser-submit-btn'>
                                <h3>Total ₹{this.props.data.price}</h3>
                                <h3>ADD ITEM</h3>
                            </div>
                        </section>
                    </form>
                </div>
                )
            }
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: (data) => dispatch(callCustomiser(data))
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.customiser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customiser)
