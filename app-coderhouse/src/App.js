import logo from './terra.png';
import './App.css' ;
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import Counter from './components/Navbar/Counter/Counter';



function App () {

  return (
    <div className = "App">
      <header className = "App-header">
        <Navbar/>
        <ItemListContainer greeting = "BIENVENIDOS A TERRA !" />
        <Counter />
      </header>
    </div>
  )
}


export default App;