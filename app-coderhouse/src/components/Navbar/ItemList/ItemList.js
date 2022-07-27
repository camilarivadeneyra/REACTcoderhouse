import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map(product => (
                <Item producto={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ItemList;