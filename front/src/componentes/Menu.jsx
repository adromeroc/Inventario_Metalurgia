import React from "react";
import { Fragment } from "react";
//import { Link } from "react-router-dom";
//import CONFIG from "../configuracion/config.json";

//export default function Menu() {
const Menu = function Menu({ onOptionClicked }) {
    return (
        <Fragment>
            <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU USUARIOS</span>
                    </h6>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" name="pagina1" onClick={onOptionClicked}>
                                Lista Usuarios
                            </a>    
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" name="pagina2" onClick={onOptionClicked}>
                                Gestion Usuarios
                            </a>    
                        </li>
                    </ul>
                    <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU MATERIA PRIMA</span>
                    </h6>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" name="pagina3" onClick={onOptionClicked}>
                                Crear Materia Prima
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" name="pagina4" onClick={onOptionClicked}>
                                Lista de Materias Primas
                            </a>
                        </li>
                    </ul>
                    <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU PRODUCTOS</span>
                    </h6>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" name="pagina5" onClick={onOptionClicked}>
                                Crear Productos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" name="pagina6" onClick={onOptionClicked}>
                                Lista de Productos
                            </a>
                        </li>
                    </ul>

                    <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU PRODUCCION</span>
                    </h6>

                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" name="pagina7" onClick={onOptionClicked}>
                                Orden de Producción
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" name="pagina8" onClick={onOptionClicked}>
                                Solicitud de Producción
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" name="pagina9" onClick={onOptionClicked}>
                                Seguimiento de Producción
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" name="pagina10" onClick={onOptionClicked}>
                                Despachos
                            </a>
                        </li>
                    </ul>

                    <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU REPORTES</span>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            {/* <Link className="nav-link" to={CONFIG.PATH_REPORTE_MATERIAPRIMAMASVENDIDA}>
                                <span data-feather="file-text"></span>
                                Materia Prima mas Vendida
                            </Link> */}
                            <a className="nav-link active" href="#" name="reporte1" onClick={onOptionClicked}>
                                Materia Prima mas Vendida
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to={CONFIG.PATH_REPORTE_PRODUCTOSDISPONIBLES}>
                                <span data-feather="file-text"></span>
                                Productos Disponibles
                            </Link> */}
                            <a className="nav-link active" href="#" name="reporte2" onClick={onOptionClicked}>
                                Productos Disponibles
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to={CONFIG.PATH_REPORTE_PEDIDOSPORDESPACHAR}>
                                <span data-feather="file-text"></span>
                                Pedidos por Despachar
                            </Link> */}
                            <a className="nav-link active" href="#" name="reporte3" onClick={onOptionClicked}>
                                Pedidos por Despachar
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to={CONFIG.PATH_REPORTE_PEDIDOSDESPACHADOS}>
                                <span data-feather="file-text"></span>
                                Pedidos Despachados
                            </Link> */}
                            <a className="nav-link active" href="#" name="reporte4" onClick={onOptionClicked}>
                                Pedidos Despachados
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Menu;