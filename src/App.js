import './App.css';
import { Fragment } from 'react';
import CONFIG from "./configuracion/config.json";
import Encabezado from './componentes/Encabezado';
import Menu from './componentes/Menu';
import Contenido from './componentes/Contenido';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultContentMensaje from './componentes/DefaultContentMensaje';

export default function App() {
  return (
    <Fragment>
      <Encabezado />
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <Routes>
              {/***********************************
               * PANTALLA TEMPORAL DE INICIO
               ************************************/}
              <Route path="/" element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <Contenido />
                  </main>
                </Fragment>} />

              {/***********************************
               * OPCIONES PARA MENU USUARIO 
               ************************************/}
              <Route path={CONFIG.PATH_USUARIO_REGISTRO} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Registro Usuarios" />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_USUARIO_GESTION} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Gestión Usuarios" />
                  </main>
                </Fragment>} />

              {/***********************************
               * OPCIONES PARA MENU MATERIA PRIMA 
               ************************************/}
              <Route path={CONFIG.PATH_MATERIAPRIMA_CREAR} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Crear materia prima" />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_MATERIAPRIMA_LISTA} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Lista de materias primas" />
                  </main>
                </Fragment>} />

              {/***********************************
               * OPCIONES PARA MENU PRODUCTOS 
               ************************************/}
              <Route path={CONFIG.PATH_PRODUCTO_CREAR} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Crear productos" />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_PRODUCTO_LISTA} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Lista de productos" />
                  </main>
                </Fragment>} />

              {/***********************************
               * OPCIONES PARA MENU PRODUCCION 
               ************************************/}
              <Route path={CONFIG.PATH_PRODUCCION_ORDEN} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Orden de producción" />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_PRODUCCION_SOLICITUD} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Solicitud de producción" />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_PRODUCCION_SEGUIMIENTO} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Seguimiento de producción" />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_PRODUCCION_DESPACHO} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Despachos" />
                  </main>
                </Fragment>} />


              {/***********************************
               * OPCIONES PARA MENU REPORTES 
               ************************************/}
              <Route path={CONFIG.PATH_REPORTE_MATERIAPRIMAMASVENDIDA} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Matería prima más vendida" />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_REPORTE_PRODUCTOSDISPONIBLES} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Productos disponibles" />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_REPORTE_PEDIDOSDESPACHAR} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Pedidos por despachaar" />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_REPORTE_PEDIDOSDESPACHADOS} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <DefaultContentMensaje msg="Pedidos despachados" />
                  </main>
                </Fragment>} />

            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Fragment>

  );
}