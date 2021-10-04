import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useState } from "react";
import '../NavBar/navbar.scss'
import { useLocation } from "react-router";
const Navbar = (props) => {
    const location=useLocation()
    const [login_state, set_login_state] = useState(false)
    useEffect(() => 
    {
        let token_collect=sessionStorage.getItem("token");
        console.log(token_collect)
        if(token_collect==null)
        {
            set_login_state(false)
        }
        else
        {
            set_login_state(true)
        }
    }, [location.state])
    const collapse = () => {
        document.getElementById('collapse').classList.toggle('mobile-nav');
    }
    return (
        <>
            <nav className="navbar">
                <Link to='/' className='navbar-brand'>Shoppify</Link>
                <div className="menu-toggle" id="mobile-menu">
                    <i className="fas fa-bars" onClick={collapse} />
                </div>
                <ul className="nav no-search" id="collapse">
                    <li className="nav-item"><Link className="navbar-linkes" to='/'>Products</Link></li>
                    {
                        login_state ?
                            <>
                                <li className="nav-item"><Link className="navbar-linkes nav_icon" to='/profile_page'><i class="fa fa-user-circle-o nav_icon" aria-hidden="true"></i></Link></li>
                                <li className="nav-item"><Link className="navbar-linkes nav_icon" to='/'><i class="fa fa-sign-out nav_icon" aria-hidden="true"></i></Link></li>
                            </>
                            :
                            <>
                                <li className="nav-item"><Link className="navbar-linkes" to='/login'>Login</Link></li>
                            </>
                    }
                </ul>
            </nav>
        </>
    )
}
export default Navbar