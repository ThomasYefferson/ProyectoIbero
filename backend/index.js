function Guardar(){
    
        var cedula = document.getElementById("cedula").value
        var nombre = document.getElementById("nombre").value
        var apellido = document.getElementById("apellido").value
        var direccion = document.getElementById("direccion").value
        var telefono = document.getElementById("telefono").value
        var edad = document.getElementById("edad").value
        var estadoCivil = document.getElementById("estadoCivil").value
        
        
        var data = "cedula="+ cedula +"&nombre="+ nombre +"&apellido="+ apellido +"&direccion="+ direccion +"&telefono="+ telefono +"&edad="+ edad +"&estadoCivil="+ estadoCivil +"";
        
        var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

             xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://127.0.0.1:4000/Cliente/Guardar");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.send(data);
        


}

function Listar(){
    var data = "";

        var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

             xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://127.0.0.1:4000/Cliente/listarClientes");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.send(null);

}
 function Modificar(){

    var cedula = document.getElementById("cedula").value    
    var edad = document.getElementById("edad").value    
    var data = "cedula="+ cedula +"&edad="+ edad +"";

    var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

         xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://127.0.0.1:4000/Cliente/Modificar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);

 }
 function Eliminar(){
    var cedula = document.getElementById("cedula").value    
    var data = "cedula="+ cedula +"";

    var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

         xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://127.0.0.1:4000/Cliente/Eliminar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);


 }