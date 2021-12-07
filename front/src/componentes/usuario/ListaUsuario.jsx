import { Fragment } from "react";
//import DefaultContentMensaje from "../DefaultContentMensaje";

export default function ListaUsuario() {
    return (
        <Fragment>
            <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Lista de Usuarios</h2>
                <form className="d-flex" action="" method="POST">
                    <input type="text" className="form-control me-2" name="" placeholder="Buscar Usuarios" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <div></div>
            </div>

			<div className="container pt-3 pb-2 mb-3">
                <div className="row">
                    <div className="table-responsive pt-3 pb-2 mb-3">
                    <table className="table table-striped table-sm text-center">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Rol</th>
                            <th scope="col" className="text-center">Acción</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>111</td>
                                <td>Nombre Usuario</td>
                                <td>Apellidos de Usuario</td>
                                <td>Rol del Usuario</td>
                                <td>
                                    <form className="text-center" action="" method="post">
                                        <input type="submit" value="Editar" className="btn btn-primary" />
                                    </form>
                                </td>
                                <td>
                                    <form className="text-center" action="" method="post">
                                        <input type="submit" value="Eliminar" className="btn btn-danger" />
                                    </form>
                                </td>
                            </tr>
                                                    
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
                
        </Fragment>
    )
}