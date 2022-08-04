import { useState, useEffect } from 'react'
import { getProductById, getProducts } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        (async () => {
            try {
                const response = await getProductById(productId)
                setProduct(response)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer