$(document).ready(function () {
  // Obtener saldo del Local Storage
  let saldo = localStorage.getItem("saldo");

  // Validacion saldo
  if (saldo === null || isNaN(parseFloat(saldo))) {
    saldo = 0;
  } else {
    saldo = parseFloat(saldo);
  }

  // Mostrar saldo en el menú principal
  $("#balanceDisplay").text("$" + saldo);

  //evento boton depositar
  $("#depositBtn").click(function (event) {
    event.preventDefault();
    $(".alert.alertDeposit")
      .text("Redirigiendo a la pantalla de Depósito")
      .show();

    setTimeout(function () {
      $(".alert").fadeOut();
      window.location.href = "deposit.html";
    }, 1000);
  });

  //evento boton enviar dinero
  $("#sendmoney").click(function (event) {
    event.preventDefault();

    $(".alert.alertSendMoney")
      .addClass("alert-info")
      .text("Redirigiendo a la pantalla de enviar dinero")
      .show();

    setTimeout(function () {
      $(".alert").fadeOut();
      window.location.href = "sendmoney.html";
    }, 1000);
  });

  //evento boton ultimos movimientos
  $("#transactions").click(function (event) {
    event.preventDefault();

    $(".alert.alertTransactions")
      .addClass("alert-info")
      .text("Redirigiendo a la pantalla de últimos movimientos")
      .show();

    setTimeout(function () {
      $(".alert").fadeOut();
      window.location.href = "transactions.html";
    }, 1000);
  });
});
