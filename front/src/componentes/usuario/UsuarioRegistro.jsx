import { Fragment, useState, useRef } from "react";
import logo from '../../image/Foto.2.jpg';
import Contenido from "../Contenido";

    
export default function UsuarioRegistro() {
	
	const [opc, setOpc] = useState(false);
	const [error, setError] = useState();
    const [msgError, setMsgError] = useState();
	const usuarioRef = useRef();
    const passwordRef = useRef();
	
	function UsuarioRegistro() {
        const usuario = usuarioRef.current.value;
        const password = passwordRef.current.value;
        fetch("http://localhost:8080/usuario/login", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ "usuario": usuario, "contrasena":password })
				
        }).then(res => res.json())
		    .then(res => {
								
                if (res.estado === "ok") {
					setOpc(true);
					setError(false);
					// <Contenido />
                    // { window.location.href = "/home" }
                } else {
                    setError(true);
                    setMsgError(res.msg);
                }
            })
    }

    // const selectOption = () =>{
    //   setOpc(true);
    // };
  	
	console.log("Opcion:",opc);

    return (
        <Fragment>
			{error && <div className="alert alert-danger" role="alert">{msgError}</div>}
		{opc ? <Contenido />:
			<div className="container h-100">
				<div className="d-flex justify-content-center h-100" style={{"margin-top": "8em"}}>
					<div className="user_card">
						<div className="brand_logo_container">
                        	<img width="330" height="210" src={logo} />
						</div>
						<div className="d-flex justify-content-center form_container">
							<form>
								<div className="input-group-append mb-3">
									<input ref={usuarioRef} type="email" name="" className="form-control input_user" placeholder="Email"/>
								</div>
								<div className="input-group mb-2">
									<input ref={passwordRef} type="password" name="" className="form-control input_pass" placeholder="Contraseña"/>
								</div>
								<div className="d-flex justify-content-center mt-3 login_container">
									<button type="button" name="button" className="btn login_btn" onClick={UsuarioRegistro}>Login</button>
						    	</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		

		}
		</Fragment>
	)
}