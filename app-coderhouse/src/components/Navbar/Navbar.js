import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className= "Navegation">
            <div className = 'logo'>
                <Link to='/' >
                    <img alt='logoterra' src='../LOGO.png' className = 'logoImg' />
                </Link>
            </div>
            <div className = 'Category'>
                <NavLink to='/category/aromaterapia' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'}>AROMATERAPIA</NavLink>
                <NavLink to='/category/cuidadocapilar' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'}>CUIDADO CAPILAR</NavLink> 
                <NavLink to='/category/cuidadopersonal' className = {({isActive}) => isActive ? 'ActiveOption' : 'Option'}>CUIDADO PERSONAL</NavLink> 
                <CartWidget className = "cartWidget" /> 
            </div>
        </nav>
    )
}


export default NavBar