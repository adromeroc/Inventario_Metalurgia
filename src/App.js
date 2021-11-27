import './App.css';
import { Fragment } from 'react';
import CONFIG from "./configuracion/config.json";
import Encabezado from './componentes/Encabezado';
import Menu from './componentes/Menu';
import Contenido from './componentes/Contenido';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsuarioRegistro from './componentes/usuario/UsuarioRegistro';
import UsuarioGestion from './componentes/usuario/UsuarioGestion';
import MateriaPrimaCrear from './componentes/materia-prima/MateriaPrimaCrear';
import MateriaPrimaLista from './componentes/materia-prima/MateriaPrimaLista';
import ProductoCrear from './componentes/producto/ProductoCrear';
import ProductoLista from './componentes/producto/ProductoLista';
import ProduccionSolicitud from './componentes/produccion/ProduccionSolicitud';
import ProduccionDespacho from './componentes/produccion/ProduccionDespacho';
import ProduccionOrden from './componentes/produccion/ProduccionOrden';
import ProduccionSeguimiento from './componentes/produccion/ProduccionSeguimiento';
import ReporteMateriaPrimaVendida from './componentes/reporte/ReporteMateriaPrimaVendida';
import ReporteProductoDisponible from './componentes/reporte/ReporteProductoDisponible';
import ReportePedidoPorDespachar from './componentes/reporte/ReportePedidoPorDespachar';
import ReportePedidoDespachado from './componentes/reporte/ReportePedidoDespachado';

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
                    <UsuarioRegistro />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_USUARIO_GESTION} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <UsuarioGestion />
                  </main>
                </Fragment>} />

              {/***********************************
               * OPCIONES PARA MENU MATERIA PRIMA 
               ************************************/}
              <Route path={CONFIG.PATH_MATERIAPRIMA_CREAR} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <MateriaPrimaCrear />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_MATERIAPRIMA_LISTA} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <MateriaPrimaLista />
                  </main>
                </Fragment>} />

              {/***********************************
               * OPCIONES PARA MENU PRODUCTOS 
               ************************************/}
              <Route path={CONFIG.PATH_PRODUCTO_CREAR} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <ProductoCrear />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_PRODUCTO_LISTA} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <ProductoLista />
                  </main>
                </Fragment>} />

              {/***********************************
               * OPCIONES PARA MENU PRODUCCION 
               ************************************/}
              <Route path={CONFIG.PATH_PRODUCCION_ORDEN} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <ProduccionOrden />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_PRODUCCION_SOLICITUD} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <ProduccionSolicitud />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_PRODUCCION_SEGUIMIENTO} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <ProduccionSeguimiento />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_PRODUCCION_DESPACHO} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <ProduccionDespacho />
                  </main>
                </Fragment>} />


              {/***********************************
               * OPCIONES PARA MENU REPORTES 
               ************************************/}
              <Route path={CONFIG.PATH_REPORTE_MATERIAPRIMAMASVENDIDA} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <ReporteMateriaPrimaVendida />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_REPORTE_PRODUCTOSDISPONIBLES} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <ReporteProductoDisponible />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_REPORTE_PEDIDOSPORDESPACHAR} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <ReportePedidoPorDespachar />
                  </main>
                </Fragment>} />

              <Route path={CONFIG.PATH_REPORTE_PEDIDOSDESPACHADOS} element={
                <Fragment>
                  <Menu />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <ReportePedidoDespachado />
                  </main>
                </Fragment>} />

            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Fragment>

  );
}