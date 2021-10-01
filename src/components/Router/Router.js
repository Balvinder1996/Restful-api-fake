import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../NavBar'
import Login_auth from '../Login-auth'
import Product_list from '../Product/Product-List';
import Product_Details from '../Product/Product-details';
const Router_file = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Product_list} />
                    <Route exact path="/product-details/:identity" component={Product_Details} />
                    <Route exact path="/login" component={Login_auth} />
                </Switch>
            </Router>
        </>
    )
}
export default Router_file