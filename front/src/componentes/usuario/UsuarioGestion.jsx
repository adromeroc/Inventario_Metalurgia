import { Fragment } from "react";
//import DefaultContentMensaje from "../DefaultContentMensaje";

export default function UsuarioGestion() {
    return (
        <Fragment>
            <div className="container">
                <div className="row align-items-start"></div>
                    <div className="col">
                    <form action="">
                        <div className="mb-3">
                            <br></br>
                            <h5>Información personal</h5>
                        </div>
                            
                        <div className="mb-3">
                            <label for="identificacion" className="form-label">N° Identificación:</label>
                            <input type="number" className="w-50 form-control" id="identificacion" placeholder="Numero de Identificación"/>
                        </div>
                        <div className="mb-3">
                            <label for="nombres" className="form-label">Nombres:</label>
                            <input type="text" className="w-50 form-control" id="nombres" placeholder="Ingrese nombres"required=""/>
                        </div>
                        <div className="mb-3">
                            <label for="apellidos" className="form-label">Apellidos:</label>
                            <input type="text" className="w-50 form-control" id="apellidos" placeholder="Ingrese apellidos"required=""/>
                        </div>
                            <br></br>
                            
                        
                            <div>
                            <h5>Datos para ingreso al Sistema</h5>
                            <div className="mb-3">
                                <label for="usuario" className="form-label">Usuario:</label>
                                <input type="email" className="w-50 form-control" id="user" placeholder="Registre un correo electronico, como nombre de usuario"required=""/>
                            </div>
                            <div className="mb-3">
                                <label for="contrasena" className="form-label">Contraseña:</label>
                                <input type="password" className="w-50 form-control" id="password" placeholder="Asignele una conraseña al usuario registrado"required=""/>
                            </div>
                            
                            <div className="mb-3"></div>
                                <label for="sexi" className="form-label">Perfil del Usuario:</label>
                                <br></br>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label" for="inlineRadio1">Administrator</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label" for="inlineRadio2">Production </label>
                                </div> 
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label" for="inlineRadio2">Inventory</label>
                                </div> 
                            </div>
                            <br />
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-success" type="button">Guardar</button>
                            </div>
                        </form>   
                    </div>   
                </div>      
            
        </Fragment>
    );
}