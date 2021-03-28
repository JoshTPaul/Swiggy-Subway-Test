import React, { Component } from 'react'
import logo from '../assets/images/header-logo.svg'
import search from '../assets/images/nav-search.svg'

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <section class='navFlex'>
                    <div id='test'>
                        <img src={logo} alt='Swiggy'/>
                        <span id='orange'>Sivanchetti Garden</span> 
                        <hr/><span id='black'>Bengaluru, Karnataka, India</span>
                    </div>
                    <nav>
                        <div><img src={search} alt=''/>Search</div>
                        <div>Offers</div>
                        <div>Help</div>
                        <div>Sign In</div>
                        <div>Cart</div>
                    </nav>
                </section>
            </header>
        )
    }
}
