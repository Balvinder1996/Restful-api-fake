import { Link } from "react-router-dom"
import '../NavBar/navbar.scss'

const Navbar = () => {
    const collapse = () => {
        document.getElementById('collapse').classList.toggle('mobile-nav');
        document.getElementById('collapse').classList.toggle('is-active');
    }
    return (
        <>
            
               
                    <nav class="navbar">
                        <h3 className="navbar-brand">Shoppify </h3>
                        <div class="menu-toggle" id="mobile-menu">
                        <i class="fas fa-bars" onClick={collapse}/>
                        </div>
                        <ul class="nav no-search" id="collapse">
                            <li class="nav-item"><Link className="navbar-linkes" to='/'>Home</Link></li>
                            <li class="nav-item"><Link className="navbar-linkes" to='/products'>Products</Link></li>
                            <li class="nav-item"><Link className="navbar-linkes" to='/'>Home</Link></li>
                            <li class="nav-item"><Link className="navbar-linkes" to='/'>Home</Link></li>
                            <li class="nav-item"><Link className="navbar-linkes" to='/login'>Login</Link></li>

                        </ul>
                    </nav>
                

          
        </>
    )
}
export default Navbar