import { Routes, Route } from 'react-router-dom';

import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Inicio from './Inicio';
import Login from './Login';
import Listados from './Listados';
import Clientes from "./Clientes";
import Providers from "./Providers";
import SwitchProvider from "./SwitchProvider";
import "../styles/main.css"

function App() {
  return (
    <>
      <SwitchProvider>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/inicio' element={<Inicio />} />
          <Route exact path='/listados' element={<Listados />} />
          <Route exact path="/clientes" element={<Clientes />} />
          <Route exact path="/proveedores" element={<Providers />} />
          <Route exact path='/nosotros' element={<Nosotros />} />
          <Route exact path='/contacto' element={<Contacto />} />
        </Routes>
      </SwitchProvider>
    </>
  )
}
export default App
