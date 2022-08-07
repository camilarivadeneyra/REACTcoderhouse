import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products }) => {

    const handleClick = () => {
        console.log('click ItemList')
    }

    return(
        <div onClick={handleClick}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}

export default ItemList