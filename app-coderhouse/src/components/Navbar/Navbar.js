import logoTerra from './terra.png';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import Button from '../Button/Button';

const Navbar = () =>{
    return (
        <nav className='navbar'>
            <div>
                <a><img src={logoTerra} className='logoTerra' alt='logo Terra'/></a>
            </div>
            <div>
                <Button label="AROMATERAPIA" />
                <Button label="CUIDADO CORPORAL" />
                <Button label="CUIDADO CAPILAR" />
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar;