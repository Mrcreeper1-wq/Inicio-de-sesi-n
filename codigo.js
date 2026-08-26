function registrar() {

    let usuario = document.getElementById("nuevoUsuario").value;
    let contrasena = document.getElementById("nuevaContrasena").value;

    let mensaje = document.getElementById("mensaje");

    if (usuario == "" || contrasena == "") {

        mensaje.textContent = "Completa todos los campos";
        mensaje.style.color = "red";

    } else {

        localStorage.setItem("usuario", usuario);
        localStorage.setItem("contrasena", contrasena);

        mensaje.textContent = "Usuario creado correctamente";
        mensaje.style.color = "green";

        setTimeout(function() {
            location.href = "login.html";
        }, 1000);
    }
}


function iniciarSesion() {

    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (usuario != "" && contrasena != "") {

        window.location.href = "pagina-principal-red-social.html";

    } else {

        document.getElementById("mensaje").innerHTML =
            "Ingresa tu usuario y contraseña";

    }
}