import React from "react";

export default function Contenido() {
return <div>
       <h2>Materia </h2>
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
                  <input type="submit" value="Editar" className="btn btn-primary"/>
                </form>  
              </td>
              <td>
                <form action="" method="post">
                  <input type="submit" value="Eliminar" className="btn btn-danger"/>
                </form>
              </td>
            </tr>
            <tr>
              <td>Materia prima 2</td>
              <td>30</td>
              <td>$30.000</td>
              <td>
                <form action="" method="post">
                  <input type="submit" value="Editar" className="btn btn-primary"/>
                </form>  
              </td>
              <td>
                <form action="" method="post">
                  <input type="submit" value="Eliminar" className="btn btn-danger"/>
                </form>
              </td>
            </tr>
            <tr>
              <td>Materia prima 3</td>
              <td>40</td>
              <td>$40.000</td>
              <td>
                <form action="" method="post">
                  <input type="submit" value="Editar" className="btn btn-primary"/>
                </form>  
              </td>
              <td>
                <form action="" method="post">
                  <input type="submit" value="Eliminar" className="btn btn-danger"/>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
}