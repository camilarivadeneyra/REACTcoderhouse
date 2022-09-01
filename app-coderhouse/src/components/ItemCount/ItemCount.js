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
        <div className='cart'>          
            <div className = 'btnBuy'>
                <button onClick={increment} className='quantity' >+</button>
                <h5>{quantity}</h5>
                <button onClick={decrement} className='quantity' >-</button>
            </div>
            <div >
                <button onClick={() => onAdd(quantity)} className='quantity' >AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}


export default ItemCount