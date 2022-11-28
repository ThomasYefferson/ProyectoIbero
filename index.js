
var limpiar = function() {
    document.getElementById("Numero1").value = ""
    document.getElementById("Numero2").value = ""
    
    
}
var suma = function() {

    var num1 = parseInt(document.getElementById("Numero1").value)
    var num2 = parseInt(document.getElementById("Numero2").value)

    sumartotal = num1 + num2;

    document.getElementById("mirespuesta").innerHTML = sumartotal;
    limpiar()
    
    
}
var resta = function() {

    var num1 = parseInt(document.getElementById("Numero1").value)
    var num2 = parseInt(document.getElementById("Numero2").value)

    restatotal = num1 - num2;

    document.getElementById("mirespuesta").innerHTML = restatotal;
    limpiar()
    
}
var multiplicacion = function() {

    var num1 = parseInt(document.getElementById("Numero1").value)
    var num2 = parseInt(document.getElementById("Numero2").value)

    total = num1 * num2;
    
    document.getElementById("mirespuesta").innerHTML = total;
    limpiar()
}
var division = function() {

    var num1 = parseInt(document.getElementById("Numero1").value)
    var num2 = parseInt(document.getElementById("Numero2").value)

    divisiontotal = num1 / num2;
    
    document.getElementById("mirespuesta").innerHTML = divisiontotal;
    limpiar()
}

