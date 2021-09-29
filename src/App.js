import './App.scss';
import Axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/NavBar';
import Product_list from './components/Product/Product-List';
import Product_Details from './components/Product/Product-details';
import Login_auth from './components/Login-auth';
Axios.defaults.baseURL='https://fakestoreapi.com';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Product_list} />
          {/* <Route exact path="/product-details/:identity" component={Product_Details} /> */}
          <Route exact path="/login" component={Login_auth} />
          <Route
   render={(props) => <Product_Details {...props} />}
   path="/product-details/:identity/"
/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
