import { Fragment } from "react";

export default function DefaultContentMensaje({ msg }) {

    return (
        <Fragment>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>{msg}</h2>
            </div>
            <h4>Contenido de {msg}</h4>
        </Fragment >
    )

}