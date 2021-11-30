import { Fragment } from "react";

import DefaultContentMensaje from "../DefaultContentMensaje";

export default function MateriaPrimaCrear() {
    return (
        <Fragment>
             <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>MP - Módulo de creación</h2>
                <form className="d-flex" action="" method="POST">
                    <input type="text" className="form-control me-2" name="" placeholder="Referencia" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <div></div>
            </div>
           
                <div className="form-group">
                            <label>Referencia</label>
                            <input type="id_referencia" className="w-50 form-control" placeholder="No. "/>
                            <br></br>
                        </div>
                        
                        <div className="form-group">
                            <label>Descripción</label>
                            <input type="descripcion" className="w-50 form-control" placeholder=""/>
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label>Cantidad en stock</label>
                            <input type="descripcion" className="w-50 form-control" placeholder=""/>
                            <br></br>
                        </div>
                        
                        <div className="form-group">
                            <label>Unidad de medida</label>
                            <input type="descripcion" className="w-50 form-control" placeholder=""/>
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label>Valor</label>
                            <input type="descripcion" className="w-50 form-control" placeholder="$"/>
                            <br></br>
                        </div>
                       
                            <div className="btn-toolbar">
                                <br></br>
                                <div className="d-grid gap-2 d-md-block">
                                    <button className="btn btn-primary" type="button">Guardar</button> <a> </a>
                                    <button className="btn btn-primary" type="button">Editar</button>
                                </div>
                            </div>
                        

        </Fragment>
    )
}