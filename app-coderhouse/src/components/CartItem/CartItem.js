import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div>
            <header>
                <h3>{name}</h3>
            </header>
            <section>
                <p>CANTIDAD: {quantity}</p>
                <p>PRECIO POR UNIDAD: ${price}</p>
            </section>
            <footer>
                <p>TOTAL: ${price * quantity}</p>
                <button onClick={() => handleRemove(id)}>X</button>
            </footer>
        </div>
    )
}


export default CartItem