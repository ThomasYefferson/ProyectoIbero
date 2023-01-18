//ACTIVIDAD 6  la vinculación  del frontEnd Básico con el Backend 

var express = require('express')
global.app = express()
global.datosClientes = []
var bodyParse = require('body-parser')
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}))

global.config = require(__dirname + '/config.js').config

app.all('*',function(request,response,next){
    var whitelist = request.headers.origin;

    response.header('Access-Control-Allow-Origin', whitelist)
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    response.header("Access-Control-Allow-Credentials", "true");

    next()
})

var cors = require('cors')

app.use(cors({
    origin:function(origin,callback){
        console.log(origin)
        if(!origin)return callback(null,true)


        if(config.listablanca.indexOf(origin) === -1){
            return callback('error de cors',false)
        }
        return callback(null,true)

    }
}))

require(__dirname + '/routes.js')


app.listen(config.puerto,function(){
    console.log('Servidor funciona por el puerto:' + config.puerto)
})