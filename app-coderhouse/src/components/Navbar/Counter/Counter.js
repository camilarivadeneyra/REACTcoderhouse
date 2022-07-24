import { useState  } from 'react'
import './Counter.css';


const Counter = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);


    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }


    return (
        <div>
            <p className="count">{count}</p>
            <div className="countBtn">
                <button
                    onClick={decrement}
                    disabled={count === 0 ? true : null}
                > - </button>
                <button
                    onClick={increment}
                    disabled={count === stock ? true : null}
                > + </button>
            </div>
            <button className="countBtnAdd"
                onClick={() => onAdd(count)}
                disabled={stock === 0 || count === 0 ? true : null}
            > AGREGAR PRODUCTO</button>
        </div>
    )
    
}


export default Counter;