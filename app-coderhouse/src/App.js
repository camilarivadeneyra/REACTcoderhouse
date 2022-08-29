import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider} from './notification/Notification'
import CartContainer from './components/CartContainer/CartContainer'
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div>
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Somos lo que nos mueve a ser parte del cambio ! ♻"/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Somos un Univero infinito! El equilibrio y el caos. Somos la Tierra!" />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer/>} />
              <Route path='/Checkout' element={<Checkout/>}/>
            </Routes>
            </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}


export default App;