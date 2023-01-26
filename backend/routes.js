


var UsuariosController = require(__dirname + '/API/controladores/UsuariosController.js').Usuarios

app.post("/Usuarios/Guardar",function(request,response){
    UsuariosController.Guardar(request,response)
})
app.post("/Usuarios/CargarTodas",function(request,response){
    UsuariosController.CargarTodas(request,response)
})
app.post("/Usuarios/CargarId",function(request,response){
    UsuariosController.CargarId(request,response)
})
app.post("/Usuarios/ActualizarId",function(request,response){
    UsuariosController.ActualizarId(request,response)
})
app.post("/Usuarios/Eliminar",function(request,response){
    UsuariosController.Eliminar(request,response)
})