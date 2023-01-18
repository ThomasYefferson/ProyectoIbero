var ClientesController = require(__dirname + '/controladores/ClientesController.js').Clientes



app.post("/Cliente/Guardar",function(request,response){
    ClientesController.Guardar(request,response)   

})
//API - READ
app.post("/Cliente/listarClientes",function(request,response){
   ClientesController.ListarClientes(request,response)  

})
//API - UPDATE
app.post("/Cliente/Modificar", function(request,response){
    ClientesController.ClienteModificar(request,response)
})
//API - DELETE
app.post("/Cliente/Eliminar", function(request,response){
    ClientesController.ClienteEliminar(request,response)
    

})
