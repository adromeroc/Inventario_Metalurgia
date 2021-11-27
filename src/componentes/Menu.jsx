import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import CONFIG from "../configuracion/config.json";

export default function Menu() {
    return (
        <Fragment>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU USUARIOS</span>
                    </h6>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={CONFIG.PATH_USUARIO_REGISTRO}>
                                <span data-feather="home"></span>
                                Registro Usuarios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_USUARIO_GESTION}>
                            <span data-feather="file"></span>
                                Gestion Usuarios
                            </Link>
                        </li>
                    </ul>
                    <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU MATERIA PRIMA</span>
                    </h6>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_MATERIAPRIMA_CREAR}>
                                <span data-feather="shopping-cart"></span>
                                Crear Materia Prima
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_MATERIAPRIMA_LISTA}>
                                <span data-feather="users"></span>
                                Lista de Materias Primas
                            </Link>
                        </li>
                    </ul>
                    <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU PRODUCTOS</span>
                    </h6>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_PRODUCTO_CREAR}>
                                <span data-feather="bar-chart-2"></span>
                                Crear Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_PRODUCTO_LISTA}>
                                <span data-feather="layers"></span>
                                Lista de Productos
                            </Link>
                        </li>
                    </ul>

                    <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU PRODUCCION</span>
                    </h6>

                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_PRODUCCION_ORDEN}>
                                <span data-feather="file-text"></span>
                                Orden de Producción
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_PRODUCCION_SOLICITUD}>
                                <span data-feather="file-text"></span>
                                Solicitud de Producción
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_PRODUCCION_SEGUIMIENTO}>
                                <span data-feather="file-text"></span>
                                Seguimiento de Producción
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_PRODUCCION_DESPACHO}>
                                <span data-feather="file-text"></span>
                                Despachos
                            </Link>
                        </li>
                    </ul>

                    <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU REPORTES</span>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_REPORTE_MATERIAPRIMAMASVENDIDA}>
                                <span data-feather="file-text"></span>
                                Materia Prima mas Vendida
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_REPORTE_PRODUCTOSDISPONIBLES}>
                                <span data-feather="file-text"></span>
                                Productos Disponibles
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_REPORTE_PEDIDOSPORDESPACHAR}>
                                <span data-feather="file-text"></span>
                                Pedidos por Despachar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={CONFIG.PATH_REPORTE_PEDIDOSDESPACHADOS}>
                                <span data-feather="file-text"></span>
                                Pedidos Despachados
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}