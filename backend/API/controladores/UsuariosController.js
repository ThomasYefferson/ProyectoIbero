var ModelosUsuario = require(__dirname + '/../modelos/ModelUsuarios.js').Usuarios


var UsuariosController = {}

UsuariosController.Guardar = function(request,response){

    var post = {
        cedula:    request.body.cedula,
        nombre:    request.body.nombre,
        profesion: request.body.profesion
    }
    if(post.cedula == "" || post.cedula == null || post.cedula == undefined){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false

    }
    if(post.nombre == "" || post.nombre == null || post.nombre == undefined){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false

    }
    if(post.profesion == "" || post.profesion == null || post.profesion == undefined){
        response.json({state:false,mensaje:"El campo profesión es obligatorio"})
        return false

    }

    ModelosUsuario.Guardar(post,function(respuesta){
        
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se guardo correctamente"})
        }
        else{
            response.json({state:false,mensaje:"Se presento un error al guardar"})

        }
    })


}


UsuariosController.CargarTodas = function(request,response){
    ModelosUsuario.CargarTodas(null,function(respuesta){
        response.json(respuesta)
    })
    
}

UsuariosController.CargarId = function(request,response){
    var post = {
        Id:    request.body.Id
        
    }
    if(post.Id == "" || post.Id == null || post.Id == undefined){
        response.json({state:false,mensaje:"El campo Id es obligatorio"})
        return false

    }
    ModelosUsuario.CargarId(post,function(respuesta){
        console.log(respuesta)
        response.json(respuesta)
    })
    
}

UsuariosController.ActualizarId = function(request,response){
    var post = {
        Id:        request.body.Id,
        cedula:    request.body.cedula,
        nombre:    request.body.nombre,
        profesion: request.body.profesion
    }
    if(post.Id== "" || post.Id== null || post.Id== undefined){
        response.json({state:false,mensaje:"El campo Id es obligatorio"})
        return false

    }
    if(post.cedula == "" || post.cedula == null || post.cedula == undefined){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false

    }
    if(post.nombre == "" || post.nombre == null || post.nombre == undefined){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false

    }
    if(post.profesion == "" || post.profesion == null || post.profesion == undefined){
        response.json({state:false,mensaje:"El campo profesión es obligatorio"})
        return false

    }
    ModelosUsuario.ActualizarId(post,function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se actualizo correctamente"})
        }
        else{
            response.json({state:true,mensaje:"Se presento un error al actualizar"})

        }
    })
}

UsuariosController.Eliminar = function(request,response){
    var post = {
        Id:    request.body.Id
        
    }
    if(post.Id == "" || post.Id == null || post.Id == undefined){
        response.json({state:false,mensaje:"El campo Id es obligatorio"})
        return false

    }
    ModelosUsuario.Eliminar(post,function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se elimino el elemento correctamente"})
        }
        else{
            response.json({state:true,mensaje:"Se presento un error al eliminar"})

        }
    })
    
}




module.exports.Usuarios = UsuariosController