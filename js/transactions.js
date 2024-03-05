$(document).ready(function () {
  // Obtener las transacciones del Local Storage
  let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");

  // Mostrar las transacciones en la tabla si hay alguna
  if (transactions.length > 0) {
    let tableBody = $("#transactionsTable");
    transactions.forEach(function (transaction) {
      let colorClass = "";
      let montoColorClass = "";
      if (transaction.movimiento.toLowerCase() === "deposito") {
        montoColorClass = "text-success";
      } else if (transaction.movimiento.toLowerCase() === "envio de dinero") {
        montoColorClass = "text-danger";
      }
      let row =
        "<tr>" +
        "<td class='text-start'>" +
        transaction.fecha +
        "</td>" +
        "<td class='text-start " +
        colorClass +
        "'>" +
        transaction.movimiento +
        "</td>" +
        "<td class='fw-bold monto " +
        montoColorClass +
        "'>$" +
        transaction.monto +
        "</td>" +
        "</tr>";
      tableBody.append(row);
    });
  } else {
    // Si no hay transacciones, mostrar un mensaje
    $("#transactionsTable").append(
      "<tr><td colspan='3' class='text-center' style='font-size: 1.4rem;'>Aún no ha realizado transacciones</td></tr>"
    );
  }

  // Filtrar transacciones según la opción seleccionada
  $(".dropdown-item").click(function () {
    let selectedMovimiento = $(this).attr("data-movimiento").toLowerCase();
    $("#movimientoFilter").text($(this).text());

    $("#transactionsTable tr").show(); // Mostrar todas las filas

    if (selectedMovimiento !== "all") {
      // Si no se selecciona "Todos", ocultar las filas que no coincidan
      $("#transactionsTable tr").each(function () {
        var movimiento = $(this)
          .find("td:nth-child(2)")
          .text()
          .trim()
          .toLowerCase();
        if (movimiento !== selectedMovimiento) {
          $(this).hide();
        }
      });
    }
  });
});
