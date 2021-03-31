import React, {Component} from 'react'
import rLogo from '../assets/images/subwayLogo.webp'
import chevron from '../assets/icons/banner-chevronWhite.svg'
import offerIcon from '../assets/icons/banner-offers.svg'

class Banner extends Component
{
    constructor(props)
    {
        super(props);
        //this.state's properties would be retrieved from the backend using a diff method. This is just here as an example
        this.state = 
        {
            id: '00example00',
            rName: 'Subway',
            rLogo: '../images/subwayLogo.webp',
            categories: 'Fast Food, Salads, Snacks, Desserts, Beverages',
            location: 'Central Bangalore, Central Bangalore',
            rating: 4.4,
            deliveryTime: '31 mins',
            avgPrice: '350',
            offers: ['20% off up to ₹50 | Use code SWIGGYIT', 'Free delivery up to ₹30 on orders above ₹149 | Use code FREEDEL']
        }
    }

    render()
    {
        const offers = this.state.offers.map( (item, index) => {
            return(
                <li key={'offer'+index}><img src={offerIcon}/>{item}</li>
            )
        })
        return (
        <section className='Banner'>
            <div className='swiggyGrid'>
                <div id='rLogo'>
                    <img src={this.state.rLogo} alt={this.state.rName}/>
                </div>
                <div id='desc'>
                    <h1 id='rName'>{this.state.rName}</h1>     {/*Subway*/}
                    <h4 id='categories'>{this.state.categories}</h4> 
                    <h4 id='location'>{this.state.location} | <span>Change Outlet <img src={chevron}/></span> </h4>  
                    <div className='details'>
                            <div id='rating'>
                                <h3><i className="fas fa-star fa-sm"></i> {this.state.rating}</h3>
                                <h6>100+ Ratings</h6>
                            </div>
                            <div id='openClosed'>
                                <h3>{this.state.deliveryTime}</h3>
                                <h6>Delivery Time</h6>
                            </div>
                            <div id='avgPrice'>
                                <h3>₹ {this.state.avgPrice}</h3>
                                <h6>Cost for two</h6>
                            </div>
                    </div>  
                    <div className='actions'>
                        <div id='dishSearch'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Search for dishes...'/>
                        </div>
                        <div id='veg'><i className="far fa-square"></i>Veg Only</div>
                        <div id='fav'><i className="far fa-heart"></i>Favourite</div>
                    </div>  
                </div>
                <aside className='offersBox'>
                    <div id='offersHeading'>OFFER</div>
                    <ul>{offers}</ul>
                </aside>
            </div>
        </section>
        )
    }
}

export default Banner;

