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
    if (!document.getElementById("telefono").value == "" || !document.getElementById("telefono").value == null) {
        if (!regExTelefono.test(document.getElementById("telefono").value)) {
            error = true;
            mensajeError += "<p>Complete correctamente el número de TELEFONO</p>";
        }
    }
    if (!regExEmail.test(document.getElementById("email").value)) {
        error = true;
        mensajeError += "<p>Complete correctamente la direccionde E-MAIL</p>";
    }




    if (error) {
        document.getElementById("mensaje").innerHTML = mensajeError;
        return false;
    }
    else {

        document.getElementById("mensaje").style.display = "none";
        formularioEnviado = "Formulario enviado correctamente";
        document.getElementById("mensajeEnviado").innerHTML = formularioEnviado;
        return false;

    }


}







function countChars() {
    var maxLength = 1000;
    var strLength = document.getElementById("consulta").value.length;
    var charRemain = ((maxLength - 1) - strLength);

    if (charRemain < 0) {
        document.getElementById("charNum2").innerHTML = '<span style="color: red;">Ud llego al límite de ' + maxLength + ' caracteres</span>';
    } else {
        document.getElementById("charNum2").innerHTML = charRemain + ' Caracteres restantes';
    }
}