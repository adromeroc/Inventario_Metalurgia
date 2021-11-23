import React from "react";
import logo from './image/Foto.jpg';

export default function Encabezado() {
    return <div>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <div>
                <img className="mb-4" src="static/images/Foto.jpg" alt="" width="62" height="47" src={logo}/>
                <a className="fs-4 navbar-brand bg-dark col-md-3 col-lg-2 me-0 px-3" href="#">Nombre de la Empresa</a>  
            </div>
            <ul className="nav nav-pills">
            </ul>
            <div className="navbar-nav">
                <div className="btn-group me-2">
                    <h3 className="h6 navbar-brand bg-dark">Nombre del Usuario</h3>
                    <a className="nav-link px-3 navbar-brand" href="#">Cerrar Sesion</a>
                </div>
            </div>
        </header>
        </div>
}