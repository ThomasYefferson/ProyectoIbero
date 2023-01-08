//ACTIVIDAD 5 api en node la cual debe realizar la captura, visualización, edición, y eliminación de registros - CRUD
var express = require('express')
var app = express()
var bodyParse = require('body-parser')
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}))


//API - CREATE
var datosClientes = []


app.post("/Cliente/Guardar",function(request,response){

    var post = {
        cedula:         request.body.cedula,
        nombre:         request.body.nombre,
        apellido:       request.body.apellido,
        direccion:      request.body.direccion,
        telefono:       request.body.telefono,
        edad:           request.body.edad,
        estadoCivil:    request.body.estadoCivil
    }
    if(post.cedula == "" || post.cedula == null || post.cedula == undefined || !(/^\d{6}$/.test(post.cedula))){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false

    }
    if(post.nombre == "" || post.nombre == null || post.nombre == undefined || /^\s+$/.test(post.nombre)){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false

    }
    if(post.apellido == "" || post.apellido == null || post.apellido == undefined){
        response.json({state:false,mensaje:"El campo apellido es obligatorio"})
        return false

    }
    if(post.direccion == "" || post.direccion == null || post.direccion == undefined){
        response.json({state:false,mensaje:"El campo dirección es obligatorio"})
        return false

    }
    if(post.telefono == "" || post.telefono == null || post.telefono == undefined || /^([0-9]+){9}$/.test(post.telefono) || /\s/.test(post.telefono)){
        response.json({state:false,mensaje:"El campo telefono es obligatorio"})
        return false

    }
    if(post.edad == "" || post.edad == null || post.edad == undefined){
        response.json({state:false,mensaje:"El campo edad es obligatorio"})
        return false

    }
    if(post.estadoCivil == "" || post.estadoCivil == null || post.estadoCivil == undefined){
        response.json({state:false,mensaje:"El campo Estado civil es obligatorio"})
        return false

    } 
    

    datosClientes.push(
        {
            cedula:       request.body.cedula,
            nombre:       request.body.nombre,
            apellido:     request.body.apellido,
            direcion:     request.body.direccion,
            telefono:     request.body.telefono,
            edad:         request.body.edad,
            estadoCivil:  request.body.estadoCivil
        })

    response.json({state:true,mensaje:"Usuario  guardado existosamente"})
    

})
//API - READ
app.post("/Cliente/listarClientes",function(request,response){
    response.json({state:true,datosClientes:datosClientes})



  

})
//API - UPDATE
app.post("/Cliente/Modificar", function(request,response){
    var post = {
        cedula: request.body.cedula,
        edad:   request.body.edad
        
    }
    if(post.cedula == "" || post.cedula == undefined || post.cedula == null || !(/^\d{6}$/.test(post.cedula))){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }
    if(post.edad == "" || post.edad == undefined || post.edad == null){
        response.json({state:false,mensaje:"El campo edad es obligatorio"})
        return false
    }

    var posicion = datosClientes.findIndex((item) => item.cedula == post.cedula)

    datosClientes[posicion].edad = post.edad
    response.json({state:true,mensaje:"Se actualizo corretamente"})
   

})
//API - DELETE
app.post("/Cliente/Eliminar", function(request,response){

    var post = {
        cedula:request.body.cedula,
        
        
    }
    if(post.cedula == "" || post.cedula == undefined || post.cedula == null){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }
    
    var posicion = datosClientes.findIndex((item) => item.cedula == post.cedula)

    datosClientes.splice(posicion,1)

    response.json({state:true,mensaje:"Se elimino corretamente"})
   

})

app.listen(4000,function(){
    console.log('Servidor funciona por el puerto:' + 4000)
})