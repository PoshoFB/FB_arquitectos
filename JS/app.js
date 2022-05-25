const nombre = document.getElementById("name");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  parrafo.innerHTML = "";
  if (nombre.value.length < 6) {
    warnings += `Por favor ingrese correctamente sus datos <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `Por favor ingrese correo valido <br>`;
    entrar = true;
  }
  if (mensaje.value.length === 0) {
    warnings += `Por favor ingrese su consulta`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Muchas gracias. Nos contactaremos a la brevedad";
  }
});

// Menu Hamburguesa

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
