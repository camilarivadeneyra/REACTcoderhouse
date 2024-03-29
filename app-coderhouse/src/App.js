import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer'
import Checkout from './components/Checkout/Checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider} from './notification/Notification'


function Terra() {
  return (
    <div className='app'>
      <section className = 'headerTerra'>
        <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element = {<ItemListContainer greeting="Somos lo que nos mueve a ser parte del cambio ! ♻"/>}/>
                <Route path='/category/:categoryId' element = {<ItemListContainer greeting="Somos un Univero infinito! El equilibrio y el caos. Somos la Tierra!" />} />
                <Route path='/detail/:productId' element = {<ItemDetailContainer />} />
                <Route path='/cart' element = {<CartContainer/>} />
                <Route path='/Checkout' element = {<Checkout/>}/>
                <Route path='*' element = {<h3 className = "not" > 🚫 PAGE NOT FOUND </h3>} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </NotificationProvider>
      </section>
    </div>
  );
}


export default Terra;