import { useEffect, useState, useRef } from "react";
import { Fragment } from "react";


export default function ProductoLista() {
    const [listado, setListado] = useState([]);
    const nomProdRef = useRef();
    const [filtrado, setFiltrado] = useState([]);
    const [nombre, setNombre] = useState("");
    
    useEffect(() => {
             fetch("http://localhost:8080/producto/listar", {
                 method: "GET"
             }).then(res => res.json())
                
                 .then(res => {
                    if (res.estado === "ok")
                         setListado(res.data);
                         setFiltrado(res.data);
                 })
         }, []);

         
    const handleChange=(event)=> {
        setNombre(event.target.value);    
        const aux = listado.filter((producto) =>{
            if (producto.nombre.includes(nombre) || nombre === "") {
            // if ((producto.nombre.includes(nombre) || nombre === "") && producto.estado ==="PENDING") {
                console.log("Estado:",producto.estado);
                return producto;
            }
        })
        setFiltrado(aux);
    }
    
    
    return (
        <Fragment>
            <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Listar Producto</h2>
                <form className="d-flex" method="POST">
                    <input ref={nomProdRef} value={nombre} onChange={handleChange} type="text" className="form-control me-2" name="" placeholder="Buscar Productos" />
                    {/* <button className="btn btn-outline-success" type="button" onClick={listar} >Buscar</button> */}
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
                                    <th scope="col">Materia Prima</th>
                                    <th scope="col">Acciónes</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                filtrado.map(p => <tr key={p._id}><td>{p.nombre}</td>
                                <td>{p.valor}</td>
                                <td>{p.estado}</td>
                                <td>
                                    <form className="text-center" action="" method="post">
                                        <input type="submit" value="Editar Producto" className="btn btn-success" disabled/>
                                        &nbsp;
                                        <input type="submit" value="Agregar Materia" className="btn btn-success" disabled/>
                                        &nbsp;
                                        <input type="submit" value="Eliminar Producto" className="btn btn-danger" disabled/>
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