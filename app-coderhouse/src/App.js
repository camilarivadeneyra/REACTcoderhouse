import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="SOMOS LO QUE NOS MUEVE A SER PARTE DEL CAMBIO" />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="BUSCANDO PRODUCTOS" />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter> 
      </header>
    </div>
  );
}

export default App;