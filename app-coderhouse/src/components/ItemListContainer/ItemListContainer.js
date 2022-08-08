import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


    if(loading) {
        return <h5>CARGANDO PRODUCTOS</h5>
    }

    if(products.length === 0) {
        return categoryId ? <h4>NO HAY PRODUCTOS DE ESTA CATEGORIA {categoryId}</h4> : <h4>NO TENEMOS DISPONIBILIDAD DE ESTE PRODUCTO</h4>
    }

    return (
        <>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={products} />
        </>
    )
}


export default ItemListContainer