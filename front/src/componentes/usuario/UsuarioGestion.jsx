import { useRef } from "react";
import { Fragment } from "react";
//import DefaultContentMensaje from "../DefaultContentMensaje";
    
export default function UsuarioGestion() {
    /**Declaracion de variables de referencia */
    const nidUsuRef = useRef();
    const nomUsuRef = useRef();
    const apeUsuRef = useRef();
    const usuUsuRef = useRef();
    const conUsuRef = useRef();
    const rolUsuRef = useRef();
    
    

    function guardarUsuario() { //Funcion para guardar los usuario
            
        const nidUsu = nidUsuRef.current.value; /** Almacena en unas variables los datos de las cajas de texto */
        const nomUsu = nomUsuRef.current.value;
        const apeUsu = apeUsuRef.current.value;
        const usuUsu = usuUsuRef.current.value;
        const conUsu = conUsuRef.current.value;
        const rolUsu = rolUsuRef.current.value;
        
        fetch("http://localhost:8080/usuario/guardar", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ "numero_identificacion": nidUsu, "nombres": nomUsu, "apellidos": apeUsu, "usuario": usuUsu, "contrasena": conUsu, "rol": rolUsu })
        }).then(res => res.json())
            .then(res => {
                // setRefresh(!refresh);
                alert(res.msg)
            })
    }
    
    return (
    
        <Fragment>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                    <form action="">
                        
                        <div className="mb-3">
                            <br></br>
                            <h5>Información personal</h5>
                        </div>
                            
                        <div className="mb-3">
                            <label for="identificacion" className="form-label">N° Identificación:</label>
                            <input ref={nidUsuRef} type="number" className="w-50 form-control" id="identificacion" placeholder="Numero de Identificación"/>
                        </div>
                        
                        <div className="mb-3">
                            <label for="nombres" className="form-label">Nombres:</label>
                            <input ref={nomUsuRef} type="text" className="w-50 form-control" id="nombres" placeholder="Ingrese nombres"required=""/>
                        </div>
                        
                        <div className="mb-3">
                            <label for="apellidos" className="form-label">Apellidos:</label>
                            <input ref={apeUsuRef} type="text" className="w-50 form-control" id="apellidos" placeholder="Ingrese apellidos"required=""/>
                        </div>
                        <br></br>
                            
                        
                        <div>
                            <h5>Datos para ingreso al Sistema</h5>
                        </div>
                        
                        <div className="mb-3">
                            <label for="usuario" className="form-label">Usuario:</label>
                            <input ref={usuUsuRef} type="email" className="w-50 form-control" id="user" placeholder="Registre un correo electronico, como nombre de usuario"required=""/>
                        </div>
                        
                        <div className="mb-3">
                            <label for="contrasena" className="form-label">Contraseña:</label>
                            <input ref={conUsuRef} type="password" className="w-50 form-control" id="password" placeholder="Asignele una conraseña al usuario registrado"required=""/>
                        </div>
                        

                        <div className="form-group">
                            <label>Rol:</label>
                            {/* </div><input ref={undRef} type="descripcion" className="w-50 form-control" placeholder=""/> */}
                            <input ref={rolUsuRef} className="w-50 form-control" list="listRol" placeholder="" required=""/>
                                <datalist id="listRol">
                                    <option value="ADMINISTRATOR"></option>
                                    <option value="PRODUCTION"></option>
                                    <option value="INVENTORY"></option>
                                </datalist>
                            <br></br>
                        </div>
                            
                           
                        <br />
                        <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary" type="button" onClick = {guardarUsuario}>Guardar</button> <a> </a>
                        </div>
                    </form>   
                    </div>  
                </div> 
            </div>      
            
        </Fragment>
    );
}