import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {


    return (
        <nav className="NavBar" >
            <Link to='/'>
                <h3>T E R R A</h3>
            </Link>
            <div className="Categories">
                <NavLink to='/category/aromaterapia' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>AROMATERAPIA</NavLink>
                <NavLink to='/category/cuidadocapilar' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>CUIDADOCAPILAR</NavLink>
                <NavLink to='/category/cuidadopersonal' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>CUIDADOPERSONAL</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar