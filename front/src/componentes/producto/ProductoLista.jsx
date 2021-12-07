import { Fragment } from "react";
//import DefaultContentMensaje from "../DefaultContentMensaje";

export default function ProductoLista() {
    return (
        <Fragment>
            <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Listar Producto</h2>
                <form className="d-flex" action="" method="POST">
                    <input type="text" className="form-control me-2" name="" placeholder="Buscar Productos" />
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
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Producto 1</td>
                                    <td>$250.000</td>
                                    <td>
                                        <form className="text-center" action="" method="post">
                                            <input type="submit" value="Editar Producto" className="btn btn-success" />
                                            &nbsp;
                                            <input type="submit" value="Agregar Materia" className="btn btn-success" />
                                            &nbsp;
                                            <input type="submit" value="Eliminar Producto" className="btn btn-danger" />
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Producto 2</td>
                                    <td>$320.000</td>
                                    <td>
                                        <form className="text-center" action="" method="post">
                                            <input type="submit" value="Editar Producto" className="btn btn-success" />
                                            &nbsp;
                                            <input type="submit" value="Agregar Materia" className="btn btn-success" />
                                            &nbsp;
                                            <input type="submit" value="Eliminar Producto" className="btn btn-danger" />
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Producto 3</td>
                                    <td>$125.000</td>
                                    <td>
                                        <form className="text-center" action="" method="post">
                                            <input type="submit" value="Editar Producto" className="btn btn-success" />
                                            &nbsp;
                                            <input type="submit" value="Agregar Materia" className="btn btn-success" />
                                            &nbsp;
                                            <input type="submit" value="Eliminar Producto" className="btn btn-danger" />
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