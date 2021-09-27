import './App.scss';
import Axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/NavBar';
import Home from './components/Home';
import Product_list from './components/Product/Product-List';
import Product_Details from './components/Product/Product-details';
Axios.defaults.baseURL='https://fakestoreapi.com';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/products" component={Product_list} />
          <Route exact path="/product-details" component={Product_Details} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
