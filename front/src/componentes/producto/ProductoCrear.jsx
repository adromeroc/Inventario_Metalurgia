import { Fragment } from "react";
//import DefaultContentMensaje from "../DefaultContentMensaje";

export default function ProductoCrear() {
    return (
        <Fragment>
            <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Crear Producto</h2>
                <div></div>
            </div>
            <div>
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputIdProducto" className="col-sm-2 col-form-label">Id</label>
                        <div className="col-sm-10 mb-3">
                            <input type="text" className="w-50 form-control" id="inputIdProducto" placeholder="Identificador producto" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-10 mb-3">
                            <input type="text" className="w-50 form-control" id="inputNombre" placeholder="Nombre del producto" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputUnidadMedida" className="col-sm-2 col-form-label">Unidad Medida</label>
                        <div className="col-sm-10 mb-3">
                            <select id="inputUnidadMedida" class="w-50 form-control">
                                <option selected>- Seleccione -</option>
                                <option>CM (Centimetro)</option>
                                <option>M (Metro)</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputValor" className="col-sm-2 col-form-label">Valor</label>
                        <div className="col-sm-10 mb-3">
                            <input type="number" className="w-50 form-control" id="inputValor" placeholder="Valor del producto" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Crear Producto</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}