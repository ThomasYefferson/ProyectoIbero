var express = require('express')

global.app = express()
global.config = require(__dirname + '/config.js').config
var bodyParse = require('body-parser')
var cors = require('cors')
const mongoose = require('mongoose')
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}))


app.all('*',function(request,response,next){
    var whitelist = request.headers.origin;

    response.header('Access-Control-Allow-Origin', whitelist)
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    response.header("Access-Control-Allow-Credentials", "true");

    next()
})



app.use(cors({
    origin:function(origin,callback){
        console.log(origin)
        if(!origin) return callback(null,true)

        if(config.listablanca.indexOf(origin) === -1){
            return callback('error cors',false)
        }
        return callback(null,true)
        
    }
}))
//mongoose.set('strictQuery',false);

mongoose.connect('mongodb://127.0.0.1/test' + config.bd, {useNewUrlParser:true,useUnifiedTopology:true},(error,response) => {
    if(error){
        console.log(error)
    }
    else{
    console.log('conexion a mongo correcta')
    }
})


require(__dirname + '/routes.js')



app.listen(config.puerto,function(){
    console.log('Servidor funcionado ' + config.puerto)
})
    

