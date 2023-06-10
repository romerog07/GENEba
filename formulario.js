
function validarFormulario() {
  var nombre = document.forms["miFormulario"]["nombre"].value;
  var email = document.forms["miFormulario"]["email"].value;

  if (nombre == "") {
    alert("Por favor, introduce tu nombre.");
    return false;
  }

  if (email == "") {
    alert("Por favor, introduce tu email.");
    return false;
  }
}
