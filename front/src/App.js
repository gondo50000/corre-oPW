import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formulario from './pages/Formulario/Formulario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/formulario' Component={Formulario}/>        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
