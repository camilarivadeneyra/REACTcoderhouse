import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, name, img, price}) => {

    return (
        <section className = 'section'>
            <div className = 'card'>
                <img src = {img} alt = {name} className = 'imgPx' />
                    <div className = 'cardContainer' >
                        <h4> {name} </h4>
                        <h5> PRECIO: ${price} </h5>
                        <button>
                            <Link to = {`/detail/${id}`} className = 'option'> VER DETALLE </Link>
                        </button>
                    </div>
            </div>
        </section>
    )
}

export default Item