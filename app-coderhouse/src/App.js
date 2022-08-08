import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContextProvider} from './context/UserContext'
import { CartContextProvider } from './context/CartContext'


function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="SOMOS LO QUE NOS MUEVE A SER PARTE DEL CAMBIO" />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Somos un Univero infinito! El equilibrio y el caos. Somos la Tierra!" />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<h4>CART</h4>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;