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

    // Obtener la lista de usuarios del localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Buscar el usuario por correo electrónico
    let currentUser = users.find(function (user) {
      return user.email === email && user.password === password;
    });

    // Verificar si el usuario existe y si la contraseña es correcta
    if (currentUser) {
      sessionStorage.setItem("auth", true);
      window.location.href = "menu.html";
    } else {
      $("#incorrectData").text("Usuario y/o contraseña incorrectos").show();
      setTimeout(function () {
        $("#incorrectData").fadeOut();
      }, 1000);
    }
  });
});
