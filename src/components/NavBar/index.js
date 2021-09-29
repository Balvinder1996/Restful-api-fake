import { useEffect } from "react"
import { Link } from "react-router-dom"
import '../NavBar/navbar.scss'

const Navbar = () => {
    useEffect(() => {
        setTimeout(() => {
            window.confirm("Allow for location for better experience")
        }, 1000);
    }, [])
    const collapse = () => {
        document.getElementById('collapse').classList.toggle('mobile-nav');
        // document.getElementById('collapse').classNameList.toggle('is-active');
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
                    <li className="nav-item"><Link className="navbar-linkes" to='/login'>Login</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar