import '../css/reset.css'
import '../css/Banner.css'
import '../css/NavBar.css'
import '../css/Cart.css'
import '../css/Dish.css'
import '../css/Categories.css'
import NavBar from './NavBar'
import Banner from './Banner'
import Cart from './Cart'
import DishList from './DishList'
import Categories from './Categories'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <main>
        <Categories/>
        <DishList/>
        <Cart/>
      </main>
    </div>
  );
}

export default App;
