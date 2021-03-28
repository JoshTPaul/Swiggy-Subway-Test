import React, { Component } from 'react'
import logo from '../assets/icons/header-logo.svg'
import chevron from '../assets/icons/header-chevronDown.svg'
import search from '../assets/icons/nav-search.svg'
import offers from '../assets/icons/nav-offers.svg'
import help from '../assets/icons/nav-help.svg'
import signIn from '../assets/icons/nav-signIn.svg'
import cart from '../assets/icons/nav-cart.svg'


export default class NavBar extends Component {
    render() {
        return (
            <header>
                <section class='navFlex'>
                    <div id='test'>
                        <img src={logo} alt='Swiggy'/>
                        <span id='orange'>Sivanchetti Garden</span> 
                        <hr/><span id='black'>Bengaluru, Karnataka, India</span>
                        <img src={chevron}></img>
                    </div>
                    <nav>
                        <div><img src={search} alt=''/>Search</div>
                        <div><img src={offers} alt=''/>Offers</div>
                        <div><img src={help} alt=''/>Help</div>
                        <div><img src={signIn} alt=''/>Sign In</div>
                        <div><img src={cart} alt=''/>Cart</div>
                    </nav>
                    <div id='test2'>
                        <span>Home</span> / <span>Bangalore</span> / <span>Central Bangalore</span> / <span>Subway</span>
                    </div>
                </section>
            </header>
        )
    }
}
