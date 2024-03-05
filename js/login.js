$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();

    // Validar que los campos no estén vacíos
    if (email.trim() === "" || password.trim() === "") {
      $(".alert")
        .addClass("alert-info")
        .text("Por favor complete todos los campos.")
        .show();

      setTimeout(function () {
        $(".alert").hide();
      }, 1000);
      return;
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $("#incorrectData")
        .text("Por favor ingrese un correo electrónico válido")
        .show();

      setTimeout(function () {
        $(".alert").hide();
      }, 1000);
      return;
    }

    // Si se pasan las validaciones, continuar con la autenticación
    const logged = email === "admin@gmail.com" && password === "admin321";

    if (logged) {
      sessionStorage.setItem("auth", true);
      window.location.href = "menu.html";
    } else {
      // alert("Usuario y/o contraseña incorrectos");
      $("#incorrectData").text("Usuario y/o contraseña incorrectos").show();
      // Oculta el mensaje después de 2 segundos
      setTimeout(function () {
        $("#incorrectData").fadeOut();
      }, 1000);
    }
  });
});
