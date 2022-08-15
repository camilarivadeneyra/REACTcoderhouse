import './CartContainer.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'


const CartContainer = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <h4>NO HAY PRODUCTOS SELECCIONADOS</h4>
        )
    }

    return (     
        <div>
            <h3>TUS PRODUCTOS</h3>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h5>total: ${total}</h5>
            <button onClick={() => clearCart()} className="Button">VACIAR CARRITO</button>
            <button className="Button">COMPRAR</button>
        </div>
    )
}


export default CartContainer