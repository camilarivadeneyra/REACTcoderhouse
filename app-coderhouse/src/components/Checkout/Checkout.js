import "./Checkout.css"
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, Timestamp, getDocs, query, documentId, where, writeBatch} from 'firebase/firestore'
import { db } from '../../service/firebase/index'


const Checkout = () => {
    const [ order, purchasedOrder ] = useState (0)
    const { cart, clearCart, total } = useContext (CartContext)
    const [ ordenNumber, setOrderNumber, name, setName, mail, setMail ] = useState ("");
    const [ phone, setPhone ] = useState (0);

    if (order === 1) {
        return (
            <div>
                <h3> {name}, GRACIAS POR COMPRAR EN TERRA !</h3>
                <h4> El número de orden de tu compra es #{ordenNumber} </h4>
            </div>
        )
    }


    const command = async () => {
        try {
            const commandDetail = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: mail,
                },
                items: cart,
                total: `${total}`,
                date: Timestamp.fromDate (new Date())
            }

            console.log (commandDetail);


            const information = cart.map (prod => prod.id)
            const prodInf = collection (db, 'products')
            const prodAddedFirebase = await getDocs (query (prodInf, where (documentId(), 'in', information )))
            const { docs } = prodAddedFirebase
            const noStock = []
            const batch = writeBatch (db)

            docs.forEach (doc => {
                const infoDoc = doc.data()
                const stockDb = infoDoc.stock

                const productAdded = cart.find ( prod => prod.id === doc.id )
                const prodQ = productAdded?.quantity

                console.log (productAdded);
                console.log (prodQ);

                if (stockDb >= prodQ) {
                    batch.update (doc.ref, {stock: stockDb - prodQ})
                } else {
                    noStock.push ({ id: doc.id, ...infoDoc })
                }
            })


            if (noStock.length === 0) {
                const orderRef = collection (db, 'orders')
                const orderCreated = await addDoc (orderRef, commandDetail)
                batch.commit ()
                console.log (orderCreated.id);
                clearCart ()
                setOrderNumber (orderCreated.id);
                purchasedOrder (1)
            } else {
                console.log ('ALGUNOS PRODUCTOS ESTAN FUERA DE STOCK')
            }
        } catch (error) {
            console.log (error);
        } finally {
            console.log ('SE DEJO DE EJECUTAR LA FUNCION')
        }
    }


    return (
        <div>
            <h4> TE AYUDAMOS A LLEVAR UNA VIDA MAS SUSTENTABLE </h4>
            <form>
                <label> NOMBRE:
                    <input type = "text" onChange = {(e) => {setName (e.target.value);}} />    
                </label>
                <label> CORREO ELECTRONICO:
                    <input type = "text" onChange = {(e) => {setMail (e.target.value);}} />
                </label>
                <label> TELEFONO:
                    <input type = "number" onChange = {(e) => {setPhone (e.target.value); }} />
                </label>
            </form>
            <button type = "submit" onClick = {command}> COMPRAR </button>
        </div>
    )
}


export default Checkout