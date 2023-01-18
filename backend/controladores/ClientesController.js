var ModelClientes = require(__dirname + '/../modelos/modelClientes.js').Clientes
var ClientesController = {

}

ClientesController.Guardar = function(request,response){
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
    

    ModelClientes.Guardar(post,function(respuesta){
        response.json(respuesta)
    
    })

   
}

ClientesController.ListarClientes = function(request,response){
    ModelClientes.ListarClientes(null,function(respuesta){
        response.json(respuesta)
    })
    
}

ClientesController.ClienteModificar = function(request,response){
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
    
    if(posicion == -1){
        response.json({state:false,mensaje:"Esta cedula no existe"})
        return false
    }

    post.posicion = posicion

    ModelClientes.ClienteModificar(post,function(respuesta){
        response.json(respuesta)
    })
    
   
}

ClientesController.ClienteEliminar = function(request,response){
    var post = {
        cedula:request.body.cedula,
        
        
    }
    if(post.cedula == "" || post.cedula == undefined || post.cedula == null){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }
    
    var posicion = datosClientes.findIndex((item) => item.cedula == post.cedula )

    if(posicion == -1){
      response.json({state:false,mensaje:"Esta Cedula no existe"})
      return false
   }

    
    ModelClientes.ClienteEliminar(posicion,function(respuesta){
        response.json(respuesta)
    })
    
   
}



module.exports.Clientes = ClientesController