import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState()
    const { productId } = useParams()
    const [ loading, setLoading ] = useState(true)


    useEffect(() => {
        getProductById(productId).then(response => {
        setProduct(response);
        }).finally(() => {
            setLoading(false);
        });
    }, [productId])

    if(loading) {
        return (
            <div>
                <img src={props.src} className={props.className} alt={props.alt}/>
                <h3 className="Title">CARGANDO PRODUCTOS.....</h3>
            </div>
        )
    }

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;