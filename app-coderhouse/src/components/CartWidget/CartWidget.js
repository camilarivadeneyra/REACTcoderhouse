import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {
    const { getQuantity } = useContext (CartContext)
    const quantity = getQuantity ()

    return(
        <Link to='/cart' className = 'widget'>
            <img className = 'cart' src="/images/cart.svg" alt='widget'/>
            <div className='qu'>
                {quantity}
            </div>
        </Link>
    );
}


export default CartWidget