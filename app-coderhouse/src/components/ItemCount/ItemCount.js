import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }     
    }

    
    return(
        <div >          
            <div>
                <button onClick={increment}>+</button>
                <h5>{quantity}</h5>
                <button onClick={decrement}>-</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}


export default ItemCount