import { Fragment, useRef, useState } from "react";

//import DefaultContentMensaje from "../DefaultContentMensaje";

export default function MateriaPrimaCrear() {
    let listado; 
    const [success, setSuccess] = useState (false);
    const nomRef = useRef();
    const desRef = useRef();
    const canRef = useRef();
    const undRef = useRef();
    const valorRef = useRef();
    const guardar =() => {
       //--Captura de datos desde aplicación
        const nom = nomRef.current.value;
        const des = desRef.current.value;
        const can = canRef.current.value;
        const und = undRef.current.value;
        const valor = valorRef.current.value;
        const materiaprima = {nom, des, can, und, valor};
        listado = JSON.parse (localStorage.getItem ("listadoMP")) || [];
        listado.push(materiaprima); 
        localStorage.setItem ("listadoMP", JSON.stringify (listado));
        //--Limpia entradas
        nomRef.current.value = "";
        desRef.current.value = "";
        canRef.current.value = "";
        undRef.current.value = "";
        valorRef.current.value = "";
        setSuccess(true); 
        setInterval (()=>setSuccess(false), 2000)

    }
    return (
            
        <Fragment>
            {success && <div class="alert alert-success"
             role="alert">Guardado con éxito </div> }
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
                            <input ref={nomRef} type="id_referencia" className="w-50 form-control" placeholder="No. "/>
                            <br></br>
                        </div>
                        
                        <div className="form-group">
                            <label>Descripción</label>
                            <input ref={desRef} type="descripcion" className="w-50 form-control" placeholder=""/>
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label>Cantidad en stock</label>
                            <input ref={canRef} type="descripcion" className="w-50 form-control" placeholder=""/>
                            <br></br>
                        </div>
                        
                        <div className="form-group">
                            <label>Unidad de medida</label>
                            {/* </div><input ref={undRef} type="descripcion" className="w-50 form-control" placeholder=""/> */}
                            <input ref={undRef} className="w-50 form-control" list="listUnidades" placeholder="" required=""/>
                                <datalist id="listUnidades">
                                    <option value="Paquete"></option>
                                    <option value="Unidad"></option>
                                    <option value="Peso"></option>
                                </datalist>
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label>Valor</label>
                            <input ref ={valorRef} type="number" className="w-50 form-control" placeholder="$"/>
                            <br></br>
                        </div>
                       
                            <div className="btn-toolbar">
                                <br></br>
                                <div className="d-grid gap-2 d-md-block">
                                    <button className="btn btn-primary" type="button" onClick = {guardar}>Guardar</button> <a> </a>
                                    <button className="btn btn-primary" type="button">Editar</button>
                                </div>
                            </div>
                        

        </Fragment>
    )
}