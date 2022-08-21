import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../service/firebase/index"


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        const collectionInf = !categoryId
        ? collection (db, 'products')
        : query (collection(db, 'products'), where ('category',  '==', categoryId))


        getDocs(collectionInf).then(response => {
            const products = response.docs.map (doc => {
                const values = doc.data()
                return {id: doc.id, ...values}
            })
            setProducts(products)
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
        return categoryId ? <h3>NO HAY PRODUCTOS DE ESTA CATEGORIA {categoryId}</h3> : <h4>NO TENEMOS DISPONIBILIDAD DE ESTE PRODUCTO</h4>
    }

    return (
        <>
            <h2>{`${greeting} ${categoryId || ''}`}</h2>
            <ItemList products={products} />
        </>
    )
}


export default ItemListContainer