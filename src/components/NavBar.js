import React, { Component } from 'react'
import logoIcon from '../assets/icons/header-logo.svg'
import chevronIcon from '../assets/icons/header-chevronOrange.svg'
import searchIcon from '../assets/icons/nav-search.svg'
import offersIcon from '../assets/icons/nav-offers.svg'
import helpIcon from '../assets/icons/nav-help.svg'
import signInIcon from '../assets/icons/nav-signIn.svg'
import cartIcon from '../assets/icons/nav-cart.svg'


export default class NavBar extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            addr1: 'Sivanchetti Garden',
            addr2: 'Bengaluru, Karnataka, India'
        }
    }

    render() {
        return (
            <header>
                <section className='NavBar'>
                    <div id='logoAddr'>
                        <img src={logoIcon} alt='Swiggy'/>
                        <span id='addr1'>{this.state.addr1}</span> 
                        <span id='addr2'>{this.state.addr2}</span>
                        <img src={chevronIcon} alt='v'></img>
                    </div>
                    <nav>
                        <ul>
                            <li id='nav-search'><img src={searchIcon} alt='🔍'/>Search</li>
                            <li id='nav-offers'><img src={offersIcon} alt='%'/>Offers<span>NEW</span></li>
                            <li id='nav-help'><img src={helpIcon} alt='?'/>Help</li>
                            <li id='nav-signIn'><img src={signInIcon} alt='👤'/>Sign In</li>
                            <li id='nav-cart'><img src={cartIcon} alt='🛒'/>Cart</li>
                        </ul>
                    </nav>
                    <div id='breadcrumbs'>
                        <span>Home</span> / <span>Bangalore</span> / <span>Central Bangalore</span> / <span>Subway</span>
                    </div>
                </section>
            </header>
        )
    }
}

