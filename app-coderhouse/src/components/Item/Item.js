import Counter from "../Counter/Counter";

const Item = ({ product }) => {
    const handleOnAdd = (quantity) => {
        alert('SE SUMARON ' + quantity + ' PRODUCTOS AL CARRITO');
        console.log('SE AGREGARON ' + quantity + ' PRODUCTOS AL CARRITO.');
    }


    return (
        <div key={product.id}>
            <div>
                <div className= 'card'>
                    <h3>{product.name}</h3>
                    <img src={product.img}/>
                    <p>{product.description}</p>
                    <p>{product.vol}${product.price}</p>
                </div>
                <Counter stock={10} initial={0} onAdd={handleOnAdd}/>
            </div>
        </div>
    )
}

export default Item;