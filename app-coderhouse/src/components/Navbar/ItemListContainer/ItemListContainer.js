import { useState, useEffect } from "react";
import { getProducts } from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting, setShow, show}) => {
    const[products, setProducts] = useState ([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])


    return (
        <>
            <h5>{greeting}</h5>
            <ItemList products={products}/>
        </>
    )
}


export default ItemListContainer;