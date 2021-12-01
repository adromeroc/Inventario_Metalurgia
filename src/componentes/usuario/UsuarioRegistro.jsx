import { Fragment } from "react";
import DefaultContentMensaje from "../DefaultContentMensaje";
import logo from '../../image/Foto.2.jpg';
// import './App.css';

    
export default function UsuarioRegistro() {
    return (
        <Fragment>
			<div className="container h-100">
				<div className="d-flex justify-content-center h-100">
					<div className="user_card">
						<div className="d-flex justify-content-center">
							<div className="brand_logo_container">
                                <img className="mb-5" alt="Logo" width="330" height="210" ss="brand_logo" src={logo} />
							</div>
						</div>
						<div className="d-flex justify-content-center form_container">
							<form>
								<div className="input-group mb-3">
									<div className="input-group-append">
										<span className="input-group-text"><i className="fas fa-user"></i></span>
									</div>
									<input type="email" name="" className="form-control input_user" value="" placeholder="Email"/>
								</div>
								<div className="input-group mb-2">
									<div className="input-group-append">
										<span className="input-group-text"><i className="fas fa-key"></i></span>
									</div>
									<input type="password" name="" className="form-control input_pass" value="" placeholder="Contraseña"/>
								</div>
								<div className="form-group">
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" id="customControlInline"/>
										<label className="custom-control-label" for="customControlInline">Recuerdame</label>
									</div>
								</div>
									<div className="d-flex justify-content-center mt-3 login_container">
							<button type="button" name="button" className="btn login_btn">Login</button>
						    </div>
							</form>
						</div>
					</div>
				</div>
			</div>

		</Fragment>
	)
}