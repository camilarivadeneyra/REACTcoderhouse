import "./Checkout.css"
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, Timestamp, getDocs, query, documentId, where, writeBatch} from 'firebase/firestore'
import { db } from '../../service/firebase/index'


const Checkout = () => {
    const { cart, clearCart, getTotal } = useContext ( CartContext )
    const [ name, setName ] = useState ("");
    const [ phone, setPhone ] = useState (0);
    const [ mail, setMail ] = useState ("");

    const generate = async () => {
        try{
    
            const order = {
                buyer:{
                    name: name,
                    phone: phone,
                    emai: mail
                },
                items:cart,
                date: Timestamp.fromDate(new Date()),
                total: getTotal()
            }

        const productsids = cart.map (prod => prod.id)
        const productRef = collection (db,'products')
        const productsAddFire = await getDocs (query(productRef, where(documentId(),'in',productsids)))
        const {docs} = productsAddFire
        const noStock = []
        const batch = writeBatch(db)

        docs.forEach (doc => { 
            const docData = doc.data()
            const dbStock = docData.stock
            const prodAdded = cart.find (prod => prod.id === doc.id)
            const productQuantity = prodAdded?.quantity
        
                if (dbStock >= productQuantity){
                batch.update (doc.ref, { stock: dbStock - productQuantity })
                } else {
                    noStock.push ({ id: doc.id, ...docData })
                }
        })

    
        if( noStock.length === 0 ) {
            const OrderRef = collection (db, 'orders')
            const orderAdded =  addDoc (OrderRef, order)
            batch.commit()
            console.log (orderAdded.id)
            clearCart()
        } else {
            console.log ('Estos productos se encuentran fuera de stock')
        }


        } catch(error) {
        }finally {   
        console.log ('termino la ejecucion')
        }
    }


    return(
        <div>
            <br>
            </br>
            <form className="formInformation">
                <h3 className="title"> INGRESE SUS DATOS </h3>
                <label> NOMBRE
                    <input type = "text" placeholder = "Ingresa tu nombre completo" onChange = { (e) => { setName (e.target.value); }} />
                </label>
                <br />
                <label> CORREO ELECTRONICO
                    <input type = "text" placeholder = "Ingresa tu e-mail" onChange = { (e) => { setMail (e.target.value); }} />
                </label>
                <br />
                <label> TELEFONO
                    <input type = "text" placeholder = "Ingresa tu número de telefono " onChange = { (e) => { setPhone (e.target.value); }}/>
                </label>
            </form>
            <button className = "bttGenerate" onClick = {generate}> COMPRAR </button>
        </div>
    )
}



export default Checkout