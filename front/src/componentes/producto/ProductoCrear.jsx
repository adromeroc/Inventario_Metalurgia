import { useRef } from "react";
import { Fragment } from "react";


export default function ProductoCrear() {
    /**Declaracion de variables de referencia */
    const nomProdRef = useRef();
    const valorProdRef = useRef();

    function guardarProducto() { //Funcion para guardar los productos
            
        const nomProd = nomProdRef.current.value; /** Almacena en unas variables los datos de las cajas de texto */
        const valorProd = valorProdRef.current.value;
    
        fetch("http://localhost:8080/producto/guardar", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ "nombre": nomProd, "valor": valorProd })
        }).then(res => res.json())
            .then(res => {
                // setRefresh(!refresh);
                alert(res.msg)
            })
    }
    
    return (
        <Fragment>
            <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Crear Producto</h2>
            </div>
            <div>
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-10 mb-3">
                            <input ref={nomProdRef} type="text" className="w-50 form-control" placeholder="Nombre del producto" />
                        </div>
                    </div>
                    {/* <div className="form-group row">
                        <label htmlFor="inputUnidadMedida" className="col-sm-2 col-form-label">Unidad Medida</label>
                        <div className="col-sm-10 mb-3">
                            <select ref={medidaProdRef} class="w-50 form-control">
                                <option value="">- Seleccione -</option>
                                <option>Unidades</option>
                                <option>Barras</option>
                                <option>Paquete 10 unidades</option>
                                <option>Paquete 20 unidades</option>
                                <option>Paquete 50 unidades</option>
                                <option>Cajas 10Kg</option>
                                <option>Cajas 20Kg</option>
                                <option>Rollos 500Kg</option>
                                <option>Rollos 1000Kg</option>
                                <option>Longitud 3mts</option>
                                <option>Longitud 6mts</option>
                            </select>
                        </div>
                    </div> */}
                    <div className="form-group row">
                        <label htmlFor="inputValor" className="col-sm-2 col-form-label">Valor</label>
                        <div className="col-sm-10 mb-3">
                            <input ref={valorProdRef} type="number" className="w-50 form-control" placeholder="Valor del producto" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="button" className="btn btn-primary" onClick={guardarProducto}>Crear Producto</button>
                        </div>
                    </div>
                </form>
            </div>
            
        </Fragment>
    )
}