import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import NotificationContext from '../../notification/Notification'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const quantityAdded = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        console.log('agregue producto al carrito')
        console.log(quantity)
        setNotification('error', `Se agregaron al carrito ${quantity} ${name}`)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
    }


    return (
        <article>
            <header className = 'name'>
                <h3>{name}</h3>
            </header>
            <picture className = 'picture'>
                <img src={img} alt={name}/>
            </picture>
            <section className = 'information'>
                <p> CATEGORIA: {category}</p>
                <p> DESCRIPCION: {description}</p>
                <p> PRECIO: {price}</p>
            </section>           
            <footer className = 'footer'>
                { quantity > 0  
                    ? <Link to='/cart'>FINALIZAR COMPRA</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={quantityAdded}/>}
            </footer>
        </article>
    )
}


export default ItemDetail


