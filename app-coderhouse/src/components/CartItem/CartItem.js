import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext (CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className = 'cartDetail'>
            <div className = 'cartInf'>
                <h3 className = 'cartName'> {name} </h3>
                <h6 className = 'cartQu'> CANTIDAD: {quantity} </h6>
                <h6 className = 'cartPrice'> PRECIO POR UNIDAD: ${price} </h6>
                <h5 className = 'cartTotal'> TOTAL: ${price * quantity} </h5>
            </div>
            <button className = 'cleanUp' onClick = {() => handleRemove (id)} > ELIMINAR </button>
        </div>
    )
}


export default CartItem