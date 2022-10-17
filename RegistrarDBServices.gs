function registrarDBServices() {
  let idRegistricoCliente = idRegistroCliente.getValue();
  let fechitaIngreso = fechaIngresoCliente.getValue();
  let codiguitoCliente = codigoCliente.getValue();
  let nombresitoCliente = nombreCliente.getValue();

  var servicios = serviciosCliente.getValues();
  var cantidad = cantidadServiciosCliente.getValues();
  var precioUnitario = precioUnitarioCliente.getValues();
  var descuento = descuentosCliente.getValues();
  var precioTotal = precioTotalCliente.getValues();

  let importicoTotalCliente = importeTotalCliente.getValue();
  let promocionsitascliente = promocionesCliente.getValues();

  // console.log(servicios);
  // console.log(cantidad);
  // console.log(precioUnitario);
  // console.log(descuento);
  // console.log(precioTotal);

  servicitos = []
  for (servicio of servicios) {
    if (servicio != '') {
      servicitos.push(servicio)
    }
  }

  // console.log(servicitos);

  let arrayDatosServicioCliente = []
  for (let i=0; i < servicitos.length; i++) {
    let arraysito = []

    arraysito.push(idRegistricoCliente)
    arraysito.push(fechitaIngreso);
    arraysito.push(codiguitoCliente);
    arraysito.push(nombresitoCliente);

    arraysito.push(servicios[i]);
    arraysito.push(cantidad[i]);
    arraysito.push(precioUnitario[i]);
    arraysito.push(descuento[i]);
    arraysito.push(precioTotal[i]);

    arraysito.push(importicoTotalCliente);
    arraysito.push(promocionsitascliente[i])
    arrayDatosServicioCliente.push(arraysito)


  }

  var lastRowDestino = hojaDBServices.getLastRow() + 1
  console.log(lastRowDestino)
  for (i = 0; i < arrayDatosServicioCliente.length; i++) {
    for (j = 0; j < arrayDatosServicioCliente[i].length; j++) {
      console.log(arrayDatosServicioCliente[i][j])
      hojaDBServices.getRange(lastRowDestino + i, j + 1).setValue(arrayDatosServicioCliente[i][j]);
    }
  }
}
