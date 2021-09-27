import { Link } from "react-router-dom"
import '../NavBar/navbar.scss'

const Navbar = () => {
    const collapse = () => {
        document.getElementById('collapse').classNameList.toggle('mobile-nav');
        document.getElementById('collapse').classNameList.toggle('is-active');
    }
    return (
        <>
            <nav className="navbar">
                <h3 class="navbar-brand">Shoppify </h3>
                <div className="menu-toggle" id="mobile-menu">
                    <i className="fas fa-bars" onClick={collapse} />
                </div>
                <ul className="nav no-search" id="collapse">
                    <li className="nav-item"><Link className="navbar-linkes" to='/'>Home</Link></li>
                    <li className="nav-item"><Link className="navbar-linkes" to='/products'>Products</Link></li>
                    <li className="nav-item"><Link className="navbar-linkes" to='/'>Home</Link></li>
                    <li className="nav-item"><Link className="navbar-linkes" to='/'>Home</Link></li>
                    <li className="nav-item"><Link className="navbar-linkes" to='/login'>Login</Link></li>
                </ul>
            </nav>



        </>
    )
}
export default Navbar