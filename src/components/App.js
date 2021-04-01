import '../css/reset.css'
import '../css/Banner.css'
import '../css/NavBar.css'
import '../css/Cart.css'
import '../css/Dish.css'
import '../css/Categories.css'
import '../css/Customiser.css'
import NavBar from './NavBar'
import Banner from './Banner'
import Cart from './Cart'
import DishList from './DishList'
import Categories from './Categories'
import Customiser from './Customiser'
import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Banner/>
        <main>
          <Categories/>
          <DishList/>
          <Cart/>
        </main>   
        <Customiser/>
    </div>
    )
  }
}
