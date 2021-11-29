import { Fragment } from "react";
import DefaultContentMensaje from "../DefaultContentMensaje";

export default function ProduccionSolicitud() {
    return (
        <Fragment>
			<div className="container pt-3 pb-2 mb-3">
                <div className="row">
                    <h2>Solicitud de Producción</h2>
                    <div className="table-responsive pt-3 pb-2 mb-3">
                    <table className="table table-striped table-sm text-center">
                        <thead>
                        <tr>
                            <th scope="col">Productos</th>
                            <th scope="col">Cantidades Solicitadas</th>
                            <th scope="col" className="text-center">Acción</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Producto 1</td>
                                <td>150</td>
                                <td>
                                    <form className="text-center" action="" method="post">
                                        <input type="submit" value="Producido" class="btn btn-success" />
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td>Producto 2</td>
                                <td>2000</td>
                                <td>
                                    <form className="text-center" action="" method="post">
                                        <input type="submit" value="Producido" class="btn btn-success" />
                                    </form>
                                </td>
                            </tr>
                            <tr>
                            <td>Producto 3</td>
                                <td>5000</td>
                                <td>
                                    <form className="text-center" action="" method="post">
                                        <input type="submit" value="Producido" class="btn btn-success" />
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