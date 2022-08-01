import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const ItemDetailContainer = () => {
  return (
    <h2>DETAIL</h2>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'SOMOS LO QUE NOS MUEVE A SER PARTE DEL CAMBIO'} />
      <ItemDetailContainer />
    </div>
  )
}

export default App;