import './App.css';
import './bootstrap.min.css';
import { Fragment, useState } from 'react';
import Encabezado from './Encabezado';
import Menu from './Menu';
import Contenido from './Contenido';

export default function App() {
  return (
    <Fragment>
      <Encabezado/>
      <Menu/>
      
    </Fragment>
    
  );
}