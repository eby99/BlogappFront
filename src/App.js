import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Register from './components/Register';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
