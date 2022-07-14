import logo from './terra.png';
import './App.css' ;
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';


function App () {
  return (
    <div className = "App">
      <header className = "App-header">
        <Navbar/>
        <ItemListContainer greeting = "BIENVENIDOS A TERRA !" />
      </header>
    </div>
  )
}


export default App;
