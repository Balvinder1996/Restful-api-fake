import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../NavBar'
import Login_auth from '../Login-auth'
import Product_list from '../Product/Product-List';
import Product_Details from '../Product/Product-details';
import { useEffect } from 'react';
import Profile from '../Profile/Profile_page';
const Router_file = () => 
{
    useEffect(()=>
    {
        setTimeout(() => {
            window.alert("Allow for location for better experience")
        }, 1000);
    },[])
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Product_list} />
                    <Route exact path="/product-details/:identity" component={Product_Details} />
                    <Route exact path="/login" component={Login_auth} />
                    <Route exact path="/profile_page" component={Profile} />
                </Switch>
            </Router>
        </>
    )
}
export default Router_file