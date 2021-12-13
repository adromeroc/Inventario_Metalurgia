import { Fragment, useState } from "react";
//import DefaultContentMensaje from "../DefaultContentMensaje";
import logo from '../../image/Foto.2.jpg';
import Contenido from "../Contenido";
// import './App.css';

    
export default function UsuarioRegistro() {
	
	const [opc, setOpc] = useState(false);
  
    const selectOption = () =>{
      setOpc(true);
    };
  	
	console.log(opc);

    return (
        <Fragment>
		{opc ? <Contenido />:
			<div className="container h-100">
				<div className="d-flex justify-content-center h-100">
					<div className="user_card">
						<div className="brand_logo_container">
                        	<img width="330" height="210" src={logo} />
						</div>
						<div className="d-flex justify-content-center form_container">
							<form>
								<div className="input-group-append mb-3">
									<input type="email" name="" className="form-control input_user" placeholder="Email"/>
								</div>
								<div className="input-group mb-2">
									<input type="password" name="" className="form-control input_pass" placeholder="Contraseña"/>
								</div>
								<div className="d-flex justify-content-center mt-3 login_container">
									<button type="button" name="button" className="btn login_btn" onClick={selectOption}>Login</button>
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