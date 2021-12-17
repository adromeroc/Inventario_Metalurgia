const express = require ("express");
const cors = require ("cors");
const app = express();
const {MateriaPrima} = require ("./MateriaPrima"); 
app.use (cors());
app.use (express.json());
app.use (express.urlencoded({ extended:true}));

//API HOME
app.get("/", function (req, res){
    res.send ("--")

});

//API BUSCAR MP
app.get ("/materia_prima/buscar/:nomRef", function (req, res) {
    const nom = req.params.nomRef;
    const ref = referencia.find (p => p.tittle.toLowerCase() == nom.toLowerCase());
    res.send (ref);
})

//API GUARDAR MP
app.post ("/materia_prima/guardar", function (req,res){
    const nomRef = req.body.referencia;
    const desRef = req.body.descripcion;
    const canRef = req.body.cantidad;
    const undRef = req.body.unidad;
    const valorRef = req.body.valor;
    const materiaprima = {nom, des, can, und, valor};
    materiaprima.push(materiaprima);
    console.log(materiaprima);
    res.send ("OK")
    
})



app.listen (8080, () => {
    console.log ("servidor")
})