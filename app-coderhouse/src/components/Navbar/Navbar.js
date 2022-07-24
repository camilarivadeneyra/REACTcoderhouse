import logoTerra from './terra.png';
import './Navbar.css'
import CartWidget from './CartWidget/CartWidget';
import Button from './Button/Button';

const Navbar = () =>{
    return (
        <nav className='navbar'>
            <div>
                <a><img src={logoTerra} className='logoTerra' alt='logo Terra'/></a>
            </div>
            <div>
                <Button label="PRODUCTOS" />
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar;

