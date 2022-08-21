import './CartContainer.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'


const CartContainer = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  
    const totalQuantity = getQuantity()
    const total = getTotal()


    if(totalQuantity === 0) {
        return (
            <h4>NO SELECCIONASTE NINGUN PRODUCTO ! </h4>
        )
    }


    return (
        <div>
            <h3>TUS PRODUCTOS</h3>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h5>TOTAL: ${total}</h5>
            <button onClick={() => clearCart()}>VACIAR CARRITO</button>
            <Link to='/checkout'>CHECKOUT</Link>
        </div>
    )
}


export default CartContainer