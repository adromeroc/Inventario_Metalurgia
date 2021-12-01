import { Fragment } from "react";
import DefaultContentMensaje from "../DefaultContentMensaje";

export default function UsuarioGestion() {
    return (
        <Fragment>
            <div className="container">
            <br></br>
            <br></br> 
                <h1>Gestión de Usuarios</h1>   
                <div className="row align-items-start"></div>
                    <div className="col">
                        <div className="mb-3">
                        <br></br>
                            <h3>Información personal</h3>
                            <br></br>
                        <div className="mb-3">
                            <label for="sexi" className="form-label">Sexo:</label>
                        </div>
                        </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label className="form-check-label" for="inlineRadio1">Masculino</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">Femenino</label>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="mb-3">
                                <label for="identificacion" className="form-label">N° Identificación:</label>
                                <input type="number" className="form-control" id="identificacion" placeholder="Numero de Identificación"/>
                            </div>
                        <div className="mb-3">
                            <label for="nombres" className="form-label">Nombres:</label>
                            <input type="text" className="form-control" id="nombres" placeholder="Ingrese nombres"required=""/>
                        </div>
                        <div className="mb-3">
                            <label for="apellidos" className="form-label">Apellidos:</label>
                            <input type="text" className="form-control" id="apellidos" placeholder="Ingrese apellidos"required=""/>
                        </div>
                        <div className="mb-3">
                            <label for="fechaNacimiento" className="form-label">Fecha de nacimiento:</label>
                            <input type="date" className="form-control" id="fechaNacimiento" placeholder="DD / MM / AAAA"required=""/>
                        </div>
                        <div className="mb-3">
                            <label for="celular" className="form-label">Telefono Fijo/Celular:</label>
                            <input type="number" className="form-control" id="celular" placeholder="Ingrese número"required=""/>
                        </div>
                        <div className="mb-3">
                            <label for="direccion" className="form-label">Dirección:</label>
                            <input type="address" className="form-control" id="direccion" placeholder="Ingrese dirección"required=""/>
                        </div>
                    
                        <div className="mb-3">
                            <label for="correoElectronico" className="form-label">Correo electrónico Personal</label>
                            <input type="email" className="form-control" id="correoElectronico" placeholder="Ingrese dirección de correo electrónico."required=""/>
                        </div>
                        <div className="u-form-group u-form-message u-form-group-7">
                            <label for="otraInformacion" className="form-label">Informacion Adicional:</label>
                            <textarea placeholder="Ingrese información adicional" rows="4" cols="50" id="otraInformacion" name="message-1" className="form-control"></textarea>
                            <br></br>
                            <br></br>
                        <form action="">
                        <div>
                        <h3>Datos de Ingreso al Sistema</h3>
                        <br></br>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Usuario</span>
                                <input className="form-control" id="user" placeholder="Cree un usuario para ingresar al sistema"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Contraseña</span>
                                <input className="form-control" id="contrasena" placeholder="Asignele una conraseña al usuario registrado"/>
                            </div>    
                        </div>
                        <div className="mb-3"></div>
                        <label for="sexi" className="form-label">Perfil del Usuario:</label>
                        <br></br>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label className="form-check-label" for="inlineRadio1">Administrador</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label className="form-check-label" for="inlineRadio2">Usuario de Producción </label>
                        </div> 
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label className="form-check-label" for="inlineRadio2">Usuario de Inventarios</label>
                        </div> 
                        </form>   
                        </div>   
                    </div>      
                </div>
        </Fragment>
    );
}