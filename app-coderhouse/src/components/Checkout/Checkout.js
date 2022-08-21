import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, Timestamp, getDocs, query, documentId, where, writeBatch } from 'firebase/firestore'
import { db } from '../../service/firebase/index'
import CartContainer from "../CartContainer/CartContainer";


const Checkout = () => {
    const { cart, clearCart, total } = useContext( CartContext )
    const purchaseOrder = async () => {
        try {
            const order = {
                buyer: {
                    name: 'Camila Rivadeneyra',
                    phone: '3329308040',
                    email: 'camila@gmail.com'
                },

                items: CartContainer,
                total,
                date: Timestamp.fromDate(new Date())
                }


                const ids = cart.map (prod => prod.id)
                const productsOrder = collection (db, 'products')
                const productsFirestore = await getDocs (query(productsOrder, where(documentId(), 'in', ids )))
                const { docs } = productsFirestore
                const outOfStock = []
                const batch = writeBatch (db)

                docs.forEach (doc => {
                    const infDoc = doc.data()
                    const stockDb = infDoc.stock

                    const producttAdded = cart.find (prod => prod.id === doc.id)
                    const prodQuantity = producttAdded?.quantity

                    if (stockDb >= prodQuantity) {
                        batch.update (doc.ref, { stock: stockDb - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...infDoc })
                    }
                })

                if (outOfStock.length ===  0) {
                    const orderRef = collection (db, 'orders')
                    const orderAdded = await addDoc (orderRef, order)
                    batch.commit()
                    console.log (orderAdded.id)
                    clearCart()
                } else {
                    console.log ('En este momento tenemos productos sin stock')
                }
            } catch (error) {
                console.log (error)
            } finally {
                console.log ('Finalizo la ejecucion')
            }
        }

        return (
            <div>
                <h4>CHECKOUT</h4>
                <br/>
                <button onClick={purchaseOrder} ></button>
            </div>
        )
    }

export default Checkout

