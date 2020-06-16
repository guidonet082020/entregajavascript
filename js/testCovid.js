regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
regExTelefono = /^[0-9]{4}[\-]{1}[0-9]{4}$/


var error = false;
var mensajeError = "";
var formularioEnviado = "";

var tildado;
var tildado2 = false;
var tildado3 = false;
var tildado4 = false;
var tildado5 = false;
var tildado6 = false;
var tienefiebre = document.getElementsByName("fiebre");
var dolorDeCabeza = document.getElementsByName("cabeza");
var tieneTos = document.getElementsByName("tos");
var dolorDeGarganta = document.getElementsByName("garganta");
var pais = document.getElementsByName("combo");
var direccion = document.getElementsByName("combo2");
var contador = 0;
var fb = false;
var cb = false;
var gg = false;
var ts = false;
var ps = false;
var dr = false;




function validar() {

    regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
    regExTelefono = /^[0-9]{4}[\-]{1}[0-9]{4}$/


    var error = false;
    var mensajeError = "";
    var formularioEnviado = "";

    if (document.getElementById("nombre").value == "") {
        error = true;
        mensajeError += "<p>El campo NOMBRE debe completarse</p>";
    }
    if (document.getElementById("apellido").value == "") {
        error = true;
        mensajeError += "<p>El campo APELLIDO debe completarse</p>";
    }
    if (document.getElementById("dni").value == "") {
        error = true;
        mensajeError += "<p>El campo DNI debe completarse</p>";
    }

    if (!regExTelefono.test(document.getElementById("telefono").value)) {
        error = true;
        mensajeError += "<p>Complete correctamente el número de TELEFONO</p>";
    }



    if (document.getElementById("provincia").value == "") {
        error = true;
        mensajeError += "<p>Seleccione una PROVINCIA</p>";


    }



    var s = "no";
    for (i in tienefiebre) {
        if (tienefiebre[i].value == "si" && tienefiebre[i].checked) {
            document.getElementById("radioButoonC").style.color = "black";
            s = "si";
            fb = true;
            contador++;
        }
        if (tienefiebre[i].value == "no" && tienefiebre[i].checked) {
            document.getElementById("radioButoonC").style.color = "black";
            s = "si";
            fb = true;
        }
    }
    if (s == "no") {
        document.getElementById("radioButoonC").style.color = "red";
    }








    var a = "no";
    for (i in dolorDeCabeza) {
        if (dolorDeCabeza[i].value == "si" && dolorDeCabeza[i].checked) {
            document.getElementById("radioButoonD").style.color = "black";
            a = "si";
            cb = true;
            contador++;
        }
        if (dolorDeCabeza[i].value == "no" && dolorDeCabeza[i].checked) {
            document.getElementById("radioButoonD").style.color = "black";
            a = "si";
            cb = true;
        }
    }
    if (a == "no") {
        document.getElementById("radioButoonD").style.color = "red";
    }

    var b = "no";
    for (i in dolorDeGarganta) {
        if (dolorDeGarganta[i].value == "si" && dolorDeGarganta[i].checked) {
            document.getElementById("radioButoonF").style.color = "black";
            b = "si";
            gg = true;
            contador++;
        }
        if (dolorDeGarganta[i].value == "no" && dolorDeGarganta[i].checked) {
            document.getElementById("radioButoonF").style.color = "black";
            b = "si";
            gg = true;
        }
    }
    if (b == "no") {
        document.getElementById("radioButoonF").style.color = "red";
    }


    var c = "no";
    for (i in tieneTos) {
        if (tieneTos[i].value == "si" && tieneTos[i].checked) {
            document.getElementById("radioButoonE").style.color = "black";
            c = "si";
            ts = true;
            contador++;
        }
        if (tieneTos[i].value == "no" && tieneTos[i].checked) {
            document.getElementById("radioButoonE").style.color = "black";
            c = "si";
            ts = true;
        }
    }
    if (c == "no") {
        document.getElementById("radioButoonE").style.color = "red";
    }






    var d = "no";
    for (i in pais) {
        if (pais[i].value == "si" && pais[i].checked) {
            document.getElementById("radioButoonA").style.color = "black";
            d = "si";
            ps = true;
            contador++;
        }
        if (pais[i].value == "no" && pais[i].checked) {
            document.getElementById("radioButoonA").style.color = "black";
            d = "si";
            ps = true;
        }
    }
    if (d == "no") {
        document.getElementById("radioButoonA").style.color = "red";
    }


    var e = "no";
    for (i in direccion) {
        if (direccion[i].value == "si" && direccion[i].checked) {
            document.getElementById("radioButoonG").style.color = "black";
            e = "si";
            dr = true;
            contador++;
        }
        if (direccion[i].value == "no" && direccion[i].checked) {
            document.getElementById("radioButoonG").style.color = "black";
            e = "si";
            dr = true;
        }
    }
    if (e == "no") {
        document.getElementById("radioButoonG").style.color = "red";
    }










    if (error || fb == false || cb == false || gg == false || ts == false || ps == false || dr == false) {
        document.getElementById("mensaje").innerHTML = mensajeError;
        return false;
    }
    else {
        document.getElementById("mensaje").style.display = "none";
        formularioEnviado = "FORMULARIO ENVIADO CORRECTAMENTE";
        sintomas = "Ud tiene " + contador + " sintomas compatibles con Covid-19.  <br/> Comuniquese al 107 en CABA o 148 en GBA";
        document.getElementById("virusito").style.display = "inline-block";
        document.getElementById("mostrarCantidadSintomas").innerHTML = sintomas;
        document.getElementById("mensajeEnviado").innerHTML = formularioEnviado;
        return false;

    }




}










function cambioRadio() {
    for (i in tienefiebre) {

        if (tienefiebre[i].value == "si" && tienefiebre[i].checked) {
            document.getElementById("radioButoonC").style.color = "black";

        }
        if (tienefiebre[i].value == "no" && tienefiebre[i].checked) {
            document.getElementById("radioButoonC").style.color = "black";
        }
    }

    for (i in dolorDeCabeza) {

        if (dolorDeCabeza[i].value == "si" && dolorDeCabeza[i].checked) {
            document.getElementById("radioButoonD").style.color = "black";
        }
        if (dolorDeCabeza[i].value == "no" && dolorDeCabeza[i].checked) {
            document.getElementById("radioButoonD").style.color = "black";
        }


    }
    for (i in tieneTos) {
        if (tieneTos[i].value == "si" && tieneTos[i].checked) {
            document.getElementById("radioButoonE").style.color = "black";
        }
        if (tieneTos[i].value == "no" && tieneTos[i].checked) {
            document.getElementById("radioButoonE").style.color = "black";
        }
    }

    for (i in dolorDeGarganta) {
        if (dolorDeGarganta[i].value == "si" && dolorDeGarganta[i].checked) {
            document.getElementById("radioButoonF").style.color = "black";
        }
        if (dolorDeGarganta[i].value == "no" && dolorDeGarganta[i].checked) {
            document.getElementById("radioButoonF").style.color = "black";
        }


    }
    for (i in pais) {
        if (pais[i].value == "si" && pais[i].checked) {
            document.getElementById("radioButoonA").style.color = "black";
        }
        if (pais[i].value == "no" && pais[i].checked) {
            document.getElementById("radioButoonA").style.color = "black"
        }
    }
    for (i in direccion) {
        if (direccion[i].value == "si" && direccion[i].checked) {
            document.getElementById("radioButoonG").style.color = "black";
        }
        if (direccion[i].value == "no" && direccion[i].checked) {
            document.getElementById("radioButoonG").style.color = "black";
        }
    }


}



