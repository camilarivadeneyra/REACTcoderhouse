import { useState, useEffect } from 'react'
import { getProductById, getProducts } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange= {handleChange} value= {count} />
            <button onClick={() => onConfirm(count)} >AGREGAR AL CARRITO</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState (initial)

    const increment = () => {
        if(count < stock) {
            setCount (count + 1)
        }
    }

    const decrement = () => {
        setCount (count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick= {decrement}>-</button>
            <button onClick= {increment}>+</button>
            <button onClick= {() => onConfirm(count)}>AGREGAR PRODUCTO</button>
        </div>
    )

}




const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        })
    }, [productId])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer













