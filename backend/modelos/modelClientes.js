var ModeClientes = {}



ModeClientes.Guardar = function(post,callback){
    datosClientes.push(
        {
            cedula:       post.cedula,
            nombre:       post.nombre,
            apellido:     post.apellido,
            direcion:     post.direccion,
            telefono:     post.telefono,
            edad:         post.edad,
            estadoCivil:  post.estadoCivil
        })

        return callback({state:true,mensaje:"Usuario  guardado existosamente"})
}

ModeClientes.ListarClientes = function(post,callback){
    return callback({state:true,datosClientes:datosClientes})

}

ModeClientes.ClienteModificar = function(post,callback){
    datosClientes[post.posicion].edad = post.edad
    return callback({state:true,mensaje:"Se actualizo corretamente"})
}

ModeClientes.ClienteEliminar = function(posicion,callback){
    datosClientes.splice(posicion,1)
    return callback({state:true,mensaje:"Se elimino corretamente"})
}


module.exports.Clientes = ModeClientes