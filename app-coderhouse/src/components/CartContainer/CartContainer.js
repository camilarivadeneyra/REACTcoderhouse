import './CartContainer.css'
import CartItem from '../CartItem/CartItem'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartContainer = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  
    const totalQuantity = getQuantity()
    const total = getTotal()


    if(totalQuantity === 0) {
        return (
            <>
                <h4 className = 'look'> ⚠ No seleccionaste ningún producto! </h4>
                <button>
                    <Link className = 'continue' to = '/'> ELEGIR PRODUCTO </Link>
                </button>
            </>
        )
    }


    return (
        <>
            <h3 className = 'item'>TUS PRODUCTOS  🛒</h3> 
            <div className = 'itemCart'>
                <button  onClick = {() => clearCart ()} className = 'cleanUp' >VACIAR CARRITO</button>
                { cart.map (p => <CartItem key = {p.id} {...p}/>) }
                <h4 className = 'cartTotal'> TOTAL: ${total}</h4>
                <button><Link to ='/checkout' className = 'cartBuy'> GENERAR ORDEN </Link></button>
            </div>
        </>
    )
}


export default CartContainer