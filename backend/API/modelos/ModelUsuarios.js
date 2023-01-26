var ModelosUsuario = {}

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UsuariosSchema = new Schema({
    ceduala:String,
    nombre:String,
    profesion:String
})

const Mymodel = mongoose.model('Usuarios', UsuariosSchema)

ModelosUsuario.Guardar = function(post,callback){

    const instancia = new Mymodel
    instancia.ceduala = post.ceduala
    instancia.nombre = post.nombre
    instancia.profesion = post.profesion
    instancia.save((error, Creado) => {
        if(error){
            return callback({state:false,data:error})
        }
        else{
            return callback({state:true})

        }
        

    })

}

ModelosUsuario.CargarTodas = function(post,callback){

    Mymodel.find({},{},(error,documentos) => {
        if(error){
            return  callback({state:false,data:error})
        }
        else{
            return callback({state:true,data:documentos})
        }

    })
    
}

ModelosUsuario.CargarId = function(post,callback){
    Mymodel.findById(post.Id,{},(error,documento) => {
        if(error){
            return  callback({state:false,data:error})
        }
        else{
            return callback({state:true,data:documento})
        }
    })
    
}

ModelosUsuario.ActualizarId = function(post,callback){
    Mymodel.findByIdAndUpdate(post.Id,{
        ceduala:post.cedula,
        nombre:post.nombre,
        profesion:post.profesion
    },(error,modificado) => {
        if(error){
            return  callback({state:false,data:error})
        }
        else{
            return callback({state:true})
        }

    })

}
ModelosUsuario.Eliminar = function(post,callback){
    Mymodel.findByIdAndDelete(post.Id,(error,eliminado) => {
        if(error){
            return  callback({state:false,data:error})
        }
        else{
            return callback({state:true})
        }
        
    })
    
}

module.exports.Usuarios = ModelosUsuario