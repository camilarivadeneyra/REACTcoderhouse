import logo from './terra.png';
import './App.css' ;
import Navbar from './components/Navbar/Navbar';

function App () {
  return (
    <div className = "App">
      <header className = "Aapp-header">
        <Navbar/>
        <img src = {logo} className = "App-logo" />
        <h6>Cosmetica Natural.</h6>
      </header>
    </div>
  )
}


export default App;
