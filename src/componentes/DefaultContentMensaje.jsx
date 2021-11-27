import { Fragment } from "react";

export default function DefaultContentMensaje({ msg }) {

    return (
        <Fragment>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>{msg}</h2>
            </div>
            <h4>Contenido de {msg}</h4>
            <p>
                Ahora tu misión es revisar los <a href="https://drive.google.com/file/d/1hG0KqBHW7UP_LgnaX84-7FHm4lgaQtX9/view?usp=sharing">mockups</a>  y el archivo <a href="https://docs.google.com/spreadsheets/d/1rOJ3OXmtcfgYwL7FDFulTkGBk2K7L1jNjcJKIVAYYwM/edit?usp=sharing">backlog</a> respecto a este módulo para que la interfaz quede muy bonita... <b>Ánimo!</b> 
            </p>
            <p>
            <small><i>Recuerda en la medida de lo posible usar tu correo UniNorte. Cualquier inquietud nos cuentas en el grupo de WhatsApp</i></small>
            </p>
        </Fragment >
    )

}