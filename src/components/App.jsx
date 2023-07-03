import { Routes, Route } from 'react-router-dom';

import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Inicio from './Inicio';
import Login from './Login';
import Listados from './Listados';


function App() {
  return (
    <>
      <Routes>        
          <Route exact path='/' element={<Login />} />
          <Route exact path='/inicio' element={<Inicio />} />
          <Route exact path='/listados' element={<Listados />} />
          <Route exact path='/nosotros' element={<Nosotros />} />
          <Route exact path='/contacto' element={<Contacto />} />
          <Route exact path='/' element={<Login />} />        
      </Routes>
    </>
  )
}
export default App
