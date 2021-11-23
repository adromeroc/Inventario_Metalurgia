import React from "react";
import Contenido from './Contenido';

export default function Menu() {
return <div>
    <div className="container-fluid">
        <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                        <h6 className="px-3 mt-4 mb-1 text-muted">
                            <span>MENU USUARIOS</span>
                        </h6>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <span data-feather="home"></span>
                                    Registro Usuarios
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="file"></span>
                                Gestion Usuarios
                                </a>
                            </li>
                        </ul>
                        <h6 className="px-3 mt-4 mb-1 text-muted">
                            <span>MENU MATERIA PRIMA</span>
                        </h6>
                        <ul className="nav flex-column">  
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="shopping-cart"></span>
                                Crear Materia Prima
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="users"></span>
                                Lista de Materias Primas
                                </a>
                            </li>
                        </ul>
                        <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU PRODUCTOS</span>
                        </h6>
                        <ul className="nav flex-column"> 
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="bar-chart-2"></span>
                                Crear Productos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="layers"></span>
                                Lista de Productos
                                </a>
                            </li>
                        </ul>

                        <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU PRODUCCION</span>
                        </h6>
                        
                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Orden de Producción
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Solicitud de Producción
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Seguimiento de Producción
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Despachos
                                </a>
                            </li>
                        </ul>

                        <h6 className="px-3 mt-4 mb-1 text-muted">
                        <span>MENU REPORTES</span>
                        </h6>
                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Materia Prima mas Vendida
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Productos Disponibles
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Pedidos por Despachar
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Pedidos Despachados
                                </a>
                            </li>
                        </ul>
                </div>
            </nav>
            
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Opciones de Pantalla</h1>
                <form className="d-flex" action="/prueba" method="POST">
                    <input type="text" className="form-control me-2" name="buscarEvaluacion" placeholder="Buscar"/>
                    <button className="btn btn-sm btn-outline-secondary" type="submit">Buscar</button>
                </form>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Boton 1</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Boton 2</button>
                    </div>
                </div>
            </div>
            <Contenido/>
            </main>    
        </div>
    </div>    
</div>  
}