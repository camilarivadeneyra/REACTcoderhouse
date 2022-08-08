import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const quantityAdded = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        console.log('agregue producto al carrito')
        console.log(quantity)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
    }


    return (
        <article>
            <header>
                <h3>{name}</h3>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p> Categoria: {category}</p>
                <p> Descripción: {description}</p>
                <p> Precio: {price}</p>
            </section>           
            <footer>
                { quantity > 0  
                    ? <Link to='/cart'>FINALIZAR COMPRA</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={quantityAdded}/>}
            </footer>
        </article>
    )
}


export default ItemDetail


