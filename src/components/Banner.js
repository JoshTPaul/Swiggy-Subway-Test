import React, {Component} from 'react'
import rLogo from '../assets/images/subwayLogo.webp'

class Banner extends Component
{
    render()
    {
        //maybe change Banner div to header or section?
        return (
        <section className='Banner'>
            <div className='swiggyGrid'>
                <div id='rLogo'>
                    <img src={rLogo} alt='Restaurant Logo'/>
                </div>
                <div id='desc'>
                    <h1 id='rName'>Subway</h1>     
                    <h5 id='categories'>Fast Food, Salads, Snacks, Desserts, Beverages</h5> 
                    <h5 id='location'>Central Bangalore, Central Bangalore | Change Outlet ARROW</h5>  
                    <div class='details'>
                            <div id='rating'>
                                <h4><i class="fas fa-star"></i> 4.4</h4>
                                <h6>100+ Ratings</h6>
                            </div>
                            <div id='openClosed'>
                                <h4>Closed</h4>
                                <h6>For Delivery</h6>
                            </div>
                            <div id='avgPrice'>
                                <h4>₹ 350</h4>
                                <h6>Cost for two</h6>
                            </div>
                    </div>  
                    <div class='actions'>
                        <div id='dishSearch'>
                            <i class="fas fa-search"></i>
                            <input type='text' placeholder='Search for dishes...'/>
                        </div>
                        <div id='veg'><i class="far fa-square"></i>Veg Only</div>
                        <div id='fav'><i class="far fa-heart"></i>Favourite</div>
                    </div>  
                </div>
                {/*<div id='offers'>Offers</div>*/}
            </div>
        </section>
        )
    }
}

export default Banner;

