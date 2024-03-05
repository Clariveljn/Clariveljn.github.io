$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    // Obtener valores de los campos
    let name = $("#name").val();
    let lastname = $("#lastname").val();
    let email = $("#email").val();
    let password = $("#password").val();

    // Validación de campos obligatorios
    if (!name || !lastname || !email || !password) {
      $("#requiredData").text("Por favor complete todos los campos.").show();

      setTimeout(function () {
        $(".alert").hide();
      }, 1000);
      return;
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $("#requiredData")
        .text("Por favor ingrese un correo electrónico válido")
        .show();

      setTimeout(function () {
        $(".alert").hide();
      }, 1000);
      return;
    }

    // Validación de contraseña
    if (password.length < 8) {
      $("#passwordLength")
        .text("La contraseña debe tener al menos 8 caracteres.")
        .show();

      setTimeout(function () {
        $(".alert").hide();
      }, 1000);
      return;
    }

    // Obtener la lista de usuarios del localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si el usuario ya está registrado
    let existingUser = users.find(function (user) {
      return user.email === email;
    });

    if (existingUser) {
      $("#registeredEmail")
        .text("Correo electrónico ya está registrado.")
        .show();
      $("#loginForm")[0].reset();

      setTimeout(function () {
        $("#registeredEmail").hide();
      }, 1000);
      $("#loginForm")[0].reset();
      return;
    }
    // Guardar el nuevo usuario en la lista
    let newUser = {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
    };
    users.push(newUser);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("users", JSON.stringify(users));

    $("#successfulRegistration").text("Registro exitoso!").show();

    setTimeout(function () {
      $("#successfulRegistration").hide();
    }, 1000);

    $("#loginForm")[0].reset();
  });
});
