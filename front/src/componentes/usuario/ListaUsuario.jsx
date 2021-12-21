import { useEffect, useState } from "react";
import { Fragment } from "react";


export default function ListaUsuario() {
    const [listado, setListado] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/usuario/listar", {
            method: "GET"
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListado(res.data);
            })
    }, [])

    // function consultarUsuario() { //Funcion para guardar los usuario
            
    //     const ideUsu = ideUsuRef.current.value; /** Almacena en unas variables los datos de las cajas de texto */
        
    //     fetch("http://localhost:8080/usuario/consutar", {
    //         headers: { "content-type": "application/json" },
    //         method: "POST",
    //         body: JSON.stringify({ "numero_identificacion": ideUsu })
    //     }).then(res => res.json())
    //         .then(res => {
    //             if (res.estado === "ok")
    //             nidUsuRef.current.value = res.data._id;
    //             nomUsuRef.current.value = res.data.nombres;
    //             apeUsuRef.current.value = res.data.apellidos;
    //             rolUsuRef.current.value = res.data.rol;
                
                
    //         })
    // }
    

    return (
        <Fragment>
            <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Lista de Usuarios</h2>
                <form className="d-flex" action="" method="POST">
                    <input type="text" className="form-control me-2" name="" placeholder="Buscar Usuarios" />
                    {/* <input ref={ideUsuRef} type="text" className="form-control me-2" name="" placeholder="Buscar Usuarios" /> */}
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                    {/* <button className="btn btn-primary" type="button" onClick = {consultarUsuario}>Buscar</button> <a> </a> */}
                </form>
                <div></div>
            </div>

			<div className="container pt-3 pb-2 mb-3">
                <div className="row">
                    <div className="table-responsive pt-3 pb-2 mb-3">
                    <table className="table table-striped table-sm text-center">
                        <thead>
                        <tr>
                            <th scope="col">No. Identificación</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Rol</th>
                            <th scope="col" className="text-center">Acción</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            listado.map(p => <tr>
                                <td>{p.numero_identificacion}</td>
                                <td>{p.nombres}</td>
                                <td>{p.apellidos}</td>
                                <td>{p.rol}</td>
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