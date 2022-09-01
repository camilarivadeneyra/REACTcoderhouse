import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import NotificationContext from '../../notification/Notification'


const ItemDetail = ({ id, name, img, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext (NotificationContext)
    const quantityAdded = getProductQuantity (id)

    const handleOnAdd = (quantity) => {
        setNotification ('error', `Se agregaron al carrito ${quantity} ${name}`)
        setQuantity (quantity)
        addItem ({id, name, price, quantity})
    }


    return (
        <article className = 'card'>
            <div className='cardDetail1'>
                <h4> {name} </h4>
            </div>
            <div>
                <img className = 'picture' src={img} alt={name}/>
            </div>
            <div className = 'cardDetail'>
                <p> {description} </p>
                <h6> STOCK DISPONIBLE: {stock} </h6>
                <h5> PRECIO: $ {price} </h5>
            </div>
            <div className='footer'>
                { quantity > 0  
                ? <Link to='/cart' className='end'>FINALIZAR COMPRA</Link> 
                : <ItemCount stock={stock} onAdd={handleOnAdd} initial={quantityAdded} />}
            </div>
        </article>
    )
}


export default ItemDetail