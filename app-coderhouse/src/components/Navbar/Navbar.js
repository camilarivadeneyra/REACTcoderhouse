import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div>
                <h4>T E R R A</h4>
            </div>
            <div className="Categories" >
                <Link to={`/category/aromaterapia`} >AROMATERAPIA</Link>
                <Link to={`/category/cuidadocapilar`}>CUIDADO CAPILAR</Link>
                <Link to={`/category/cuidadocorporal`}>CUIDADO PERSONAL</Link>
            </div>
        </nav>
    )
}

export default Navbar;


