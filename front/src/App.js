import './App.css';
import { Fragment, useState } from 'react';
import Contenido from './componentes/Contenido';
import UsuarioRegistro from './componentes/usuario/UsuarioRegistro';



export default function App() {

  const [opc, setOpc] = useState(false);
  
  const selectOption = () =>{
     setOpc(!opc);
   };
  
   return (
    <Fragment>
      {opc ? <UsuarioRegistro />:<Contenido/>}
    </Fragment>
  );
}