import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('clickear')
    }

    return (
        <article onClick={ handleClick }>
            <header className="Header">
                <h3 className="ItemHeader"> {name} </h3>
            </header>
            <picture>
                <img src= {img} alt= {name}/>
            </picture>
            <section>
                <p className="Info"> Precio: ${price} </p>
            </section>           
            <footer>
                <Link to={`/detail/${id}`} >VER DETALLE</Link>
            </footer>
        </article>
    )
}

export default Item