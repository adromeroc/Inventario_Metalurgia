import { Fragment } from "react";
import DefaultContentMensaje from "../DefaultContentMensaje";
// import logo from '../image/Foto.jpg';

export default function UsuarioRegistro() {
    return (
        <Fragment>
            <div className="container">
                {/* <div>
                    <img className="mb-4" alt="" width="140" height="100" src={logo} />
                </div> */}
                <div className="text-center">
                    <br></br>
                    <br></br>
                    <h3>Iniciar sesión</h3>
                    <br></br>
                </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="w-50 form-control" placeholder="Ingresar email"/>
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="w-50 form-control" placeholder="Ingresar password"/>
                    </div>
                    <br></br>
                    <div className="text-center">
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1"> Recordarme</label>
                        </div>
                        <br></br>
                        <button type="submit" className="w-50 btn btn-lg btn-primary">Entrar</button>
                        <p className="forgot-password text-right">
                        </p>
                    </div>
                    </div>
                    
                 
            </div>
        </Fragment>
    )
}