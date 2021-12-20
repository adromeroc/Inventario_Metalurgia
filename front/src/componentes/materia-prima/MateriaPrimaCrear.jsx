import React, { Fragment, useRef} from "react";

//import DefaultContentMensaje from "../DefaultContentMensaje";

export default function MateriaPrimaCrear() {
       /**Declaracion de variables de referencia */
    /**const refMPRef = useRef();*/
    const desMPRef = useRef();
    const canMPRef = useRef();
    const undMPRef = useRef();
    const valorMPRef = useRef();

    function guardarMateriaPrima() { //Funcion para guardar MP
        /**const refMp = refMPRef.current.value;*/ /** Almacena en unas variables los datos de las cajas de texto */
        const desMp = desMPRef.current.value;
        const canMp = canMPRef.current.value;
        const undMp = undMPRef.current.value;
        const valorMp = valorMPRef.current.value;

        fetch("http://localhost:8080/materia_prima/guardar", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ "descripcion": desMp, "cantidad": canMp, "unidad de medida": undMp, "valor": valorMp})
        }).then(res => res.json())
            .then(res => {
                // setRefresh(!refresh);
                alert(res.msg)
            })
    }
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
                            <input ref={desMPRef} type="descripcion" className="w-50 form-control" placeholder=""/>
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label>Cantidad en stock</label>
                            <input ref={canMPRef} type="descripcion" className="w-50 form-control" placeholder=""/>
                            <br></br>
                        </div>
                        
                        <div className="form-group">
                            <label>Unidad de medida</label>
                            {/* </div><input ref={undRef} type="descripcion" className="w-50 form-control" placeholder=""/> */}
                            <input ref={undMPRef} className="w-50 form-control" list="listUnidades" placeholder="" required=""/>
                                <datalist id="listUnidades">
                                    <option value="Paquete"></option>
                                    <option value="Unidad"></option>
                                    <option value="Peso"></option>
                                </datalist>
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label>Valor</label>
                            <input ref ={valorMPRef} type="number" className="w-50 form-control" placeholder="$"/>
                            <br></br>
                        </div>
                       
                            <div className="btn-toolbar">
                                <br></br>
                                <div className="d-grid gap-2 d-md-block">
                                    <button className="btn btn-primary" type="button" onClick = {guardarMateriaPrima}>Guardar</button> <a> </a>
                                    <button className="btn btn-primary" type="button">Editar</button>
                                </div>
                            </div>
        </Fragment>
    )
}
