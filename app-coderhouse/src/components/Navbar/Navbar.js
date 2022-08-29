import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className= "Navegation" >
            <Link to='/'>
                <img alt='logoterra' src='../LOGO.png' />
            </Link>
            <div className='Category'>
                <NavLink to='/category/aromaterapia' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>AROMATERAPIA</NavLink>
                <NavLink to='/category/cuidadocapilar' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>CUIDADO CAPILAR</NavLink> 
                <NavLink to='/category/cuidadopersonal' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>CUIDADO PERSONAL</NavLink> 
                <CartWidget /> 
            </div>
        </nav>
    )
}


export default NavBar