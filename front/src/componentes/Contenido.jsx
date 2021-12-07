import React, { Fragment, useState } from "react";

import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Encabezado from "./Encabezado";
import Menu from "./Menu";
import UsuarioRegistro from "./usuario/UsuarioRegistro";
import UsuarioGestion from "./usuario/UsuarioGestion";
import MateriaPrimaCrear from "./materia-prima/MateriaPrimaCrear";
import MateriaPrimaLista from "./materia-prima/MateriaPrimaLista";
import ProductoCrear from './producto/ProductoCrear';
import ProductoLista from './producto/ProductoLista';
import ProduccionSolicitud from './produccion/ProduccionSolicitud';
import ProduccionDespacho from './produccion/ProduccionDespacho';
import ProduccionOrden from './produccion/ProduccionOrden';
import ProduccionSeguimiento from './produccion/ProduccionSeguimiento';
import DefaultContentMensaje from "./DefaultContentMensaje";
import ListaUsuario from "./usuario/ListaUsuario";


export default function Contenido() {
  const [compDinamico, setCompDinamico ] = useState(<UsuarioRegistro />);
  
  const onOptionClicked = function (evt) {
    evt.preventDefault();
    if (evt.target.name==="pagina1") {
      setCompDinamico(<ListaUsuario />);
    }else {
      if (evt.target.name==="pagina2") { setCompDinamico(<UsuarioGestion />); }
      else{
        if (evt.target.name==="pagina3") { setCompDinamico(<MateriaPrimaCrear />); }
        else{
          if (evt.target.name==="pagina4") { setCompDinamico(<MateriaPrimaLista />); }
          else{
            if (evt.target.name==="pagina5") { setCompDinamico(<ProductoCrear />); }
            else{
              if (evt.target.name==="pagina6") { setCompDinamico(<ProductoLista />); }
              else{
                if (evt.target.name==="pagina7") { setCompDinamico(<ProduccionOrden />); }
                else{
                  if (evt.target.name==="pagina8") { setCompDinamico(<ProduccionSolicitud />); }
                  else{
                    if (evt.target.name==="pagina9") { setCompDinamico(<ProduccionSeguimiento />); }
                  else{
                    if (evt.target.name==="pagina10") { setCompDinamico(<ProduccionDespacho />); }
                    else{
                      if (evt.target.name==="reporte1") { setCompDinamico(<DefaultContentMensaje />); }
                      else{
                        if (evt.target.name==="reporte2") { setCompDinamico(<DefaultContentMensaje />); }
                        else{
                          if (evt.target.name==="reporte3") { setCompDinamico(<DefaultContentMensaje />); }
                          else{
                            setCompDinamico(<DefaultContentMensaje />);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  };

  return (
    <Fragment>
        <Encabezado />
        <div className="container-fluid">
            <div className="row">
                <Menu onOptionClicked={ onOptionClicked }/>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                      <Container> 
                        { compDinamico }
                      </Container>
                    </main>
            </div>
        </div>
    </Fragment>
  )
}