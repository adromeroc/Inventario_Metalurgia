import React, { Fragment } from "react";
export default function Contenido() {
  return (
    <Fragment>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Opciones de Pantalla</h1>
          <form className="d-flex" action="/prueba" method="POST">
            <input type="text" className="form-control me-2" name="buscarEvaluacion" placeholder="Buscar" />
            <button className="btn btn-sm btn-outline-secondary" type="submit">Buscar</button>
          </form>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">Boton 1</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Boton 2</button>
            </div>
          </div>
        </div>
        <h2>Materia Prima</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Nombre Materia Prima</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Valor</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Materia prima 1</td>
                <td>20</td>
                <td>$20.000</td>
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
              </tr>
              <tr>
                <td>Materia prima 2</td>
                <td>30</td>
                <td>$30.000</td>
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
              </tr>
              <tr>
                <td>Materia prima 3</td>
                <td>40</td>
                <td>$40.000</td>
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
              </tr>
            </tbody>
          </table>
        </div>
    </Fragment>
  )
}