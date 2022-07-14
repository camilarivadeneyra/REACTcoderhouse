import logoTerra from './terra.png';
import './Navbar.css'

const Navbar = () =>{
    return (
        <nav className='navbar'>
            <div>
                <a><img src={logoTerra} className='logoTerra' alt='logo Terra'/></a>
            </div>
            <div>
                <ul>
                    <li><a>PRODUCTOS.</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

