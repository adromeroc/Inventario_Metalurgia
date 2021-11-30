import { Fragment } from "react";
import DefaultContentMensaje from "../DefaultContentMensaje";

export default function ProduccionSeguimiento() {
    return (
        <Fragment>
            <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Seguimiento de Producción</h2>
                <form className="d-flex" action="" method="POST">
                    <input type="text" className="form-control me-2" name="" placeholder="Buscar Productos" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <div></div>
            </div>

			<div className="container pt-3 pb-2 mb-3">
                <div className="row">
                    <div className="table-responsive pt-3 pb-2 mb-3">
                    <table className="table table-secondary table-sm text-center">
                        <thead>
                        <tr>
                            <th scope="col">Productos</th>
                            <th scope="col">Cantidades Solicitadas</th>
                            <th scope="col">Acción</th>
                            <th scope="col">Motivo</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Producto 1</td>
                                <td>150</td>
                                <td>
                                    <form className="text-center" action="" method="post">
                                        <input type="submit" value="Cancelar" className="btn btn-danger" />
                                    </form>
                                </td>
                                <td>
                                    <input type="text" className="form-control me-6" name="inputMotivo" placeholder="¿Porque desea cancelar la producción?" />
                                </td>
                            </tr>
                            <tr>
                                <td>Producto 2</td>
                                <td>2000</td>
                                <td>
                                    <form className="text-center" action="" method="post">
                                        <input type="submit" value="Cancelar" className="btn btn-danger" />
                                    </form>
                                </td>
                                <td>
                                    <input type="text" className="form-control me-6" name="inputMotivo" placeholder="¿Porque desea cancelar la producción?" />
                                </td>
                            </tr>
                            <tr>
                            <td>Producto 3</td>
                                <td>5000</td>
                                <td>
                                    <form className="text-center" action="" method="post">
                                        <input type="submit" value="Cancelar" className="btn btn-danger" />
                                    </form>
                                </td>
                                <td>
                                    <input type="text" className="form-control me-6" name="inputMotivo" placeholder="¿Porque desea cancelar la producción?" />
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