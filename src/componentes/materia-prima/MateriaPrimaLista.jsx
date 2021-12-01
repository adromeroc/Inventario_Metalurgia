import { Fragment } from "react";
import DefaultContentMensaje from "../DefaultContentMensaje";

export default function MateriaPrimaLista() {
    const listado = JSON.parse (localStorage.getItem("listadoMP")) || [];
    return (
        <Fragment>
           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Listar Materia Prima</h1>
          <form className="d-flex" action="/prueba" method="POST">
            <input type="text" className="form-control me-2" name="buscarEvaluacion" placeholder="Referencia" />
            <button className="btn btn-sm btn-outline-secondary" type="submit">Buscar</button>
          </form>
          
        </div>
        
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Descripción</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Valor</th>
                <th scope="col">Acciones</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                {
                    listado.map ((p) => <tr>
                        <td>{p.des}</td>
                        <td>{p.can}</td>
                        <td>{p.valor}</td>
                        <td>
                        <form action="" method="post">
                            <input type="submit" value="Editar" className="btn btn-primary" />
                        </form>
                        </td>
                        <td>
                        <form action="" method="post">
                            <input type="submit" value="Eliminar" className="btn btn-danger" />
                        </form>
                        </td>

                        </tr>)
                }
            </tbody>
          </table>
        </div>
        </Fragment>
    )
}