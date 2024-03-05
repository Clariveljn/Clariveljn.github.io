$(document).ready(function () {
  // Obtener saldo del Local Storage y mostrar saldo
  let saldo = parseFloat(localStorage.getItem("saldo")) || 0;
  $("#balanceDisplay").text("$" + saldo);

  // evento de envío del formulario de depósito
  $("#makeDeposit").click(function (event) {
    event.preventDefault();
    let depositAmount = parseFloat($("#depositAmount").val());

    if (isNaN(depositAmount) || depositAmount <= 0) {
      $("#amountInvalid").text("Ingrese un monto de depósito válido.").show();
      setTimeout(function () {
        $("#amountInvalid").hide();
      }, 1000);
      return;
    }

    // Realizar el depósito y actualizar el saldo
    saldo += depositAmount;
    localStorage.setItem("saldo", saldo);

    // Guardar los detalles de la transacción en Local Storage
    let transactionDetails = {
      fecha: new Date().toISOString().slice(0, 10),
      movimiento: "Deposito",
      monto: depositAmount,
    };

    let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
    transactions.push(transactionDetails);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    // Mostrar el mensaje de depósito
    let mensajeDeposito = $("#mensajeDeposito")
      .text("Se depositaron $" + depositAmount + " satisfactoriamente.")
      .show();

    // Mostrar el nuevo saldo en el formulario de depósito y resetear
    $("#balanceDisplay").text("$" + saldo);
    $("#depositAmount").val("");

    setTimeout(function () {
      mensajeDeposito.text("").hide();
    }, 1000);

    setTimeout(function () {
      window.location.href = "menu.html";
    }, 1000);
  });
});
