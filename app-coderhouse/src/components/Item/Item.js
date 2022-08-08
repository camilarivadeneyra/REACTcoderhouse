import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, name, img, price}) => {

    return (
        <article>
            <header>
                <h4>{name}</h4>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p> PRECIO: ${price}</p>
            </section>           
            <footer>
                <Link to={`/detail/${id}`}>VER DETALLE</Link>
            </footer>
        </article>
    )
}

export default Item