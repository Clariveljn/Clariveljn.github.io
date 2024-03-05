/* Si el usuario esta logeado puede ingresar de lo contrario redirige al login */
const logged = sessionStorage.getItem("auth");

if (!logged) location.href = "../index.html";
