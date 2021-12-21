import { Fragment } from "react";
import { useEffect, useState } from "react";

export default function ProduccionOrden() {
    
    const [listado, setListado] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/producto/produccion", {
            method: "GET"
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListado(res.data);
            })
    }, []);

    return (
        <Fragment>
            <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Crear Orden de Producción</h2>
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
                            <th scope="col">Cantidad a Producir</th>
                            <th scope="col" className="text-center">Acción</th>
                        </tr>
                        </thead>
                        <tbody>{
                            listado.map(p => <tr><td>{p.nombre}</td>
                            <td>
                                    <input type="number" className="form-control me-6" name="cantProductos" placeholder="Numero de productos a producir" />
                                </td>
                                <td>
                                    <form className="text-center" action="" method="post">
                                        <input type="submit" value="Solicitar" className="btn btn-primary" />
                                    </form>
                                </td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
                
        </Fragment>
    )
}