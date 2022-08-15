import './App.css'
import { useState, createContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { UserContextProvider} from './context/UserContext'
import { NotificationProvider} from './notification/Notification'
import CartContainer from './components/CartContainer/CartContainer'


function App() {
  return (
    <div>
      <NotificationProvider>
        <UserContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="SOMOS LO QUE NOS MUEVE A SER PARTE DEL CAMBIO" />}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting="Somos un Univero infinito! El equilibrio y el caos. Somos la Tierra!" />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer/>} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </UserContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;