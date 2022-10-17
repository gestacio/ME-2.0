function registrarDBTransaccional() {
  // var libro = SpreadsheetApp.getActiveSpreadsheet();
  // var hojaDataBase = libro.getSheetByName('Data Base');

  var servicios = serviciosCliente.getValues();
  var cantidad = cantidadServiciosCliente.getValues();
  var arrayServiciosCliente = [];
  var celdaServiciosCliente = '';
  for (var i = 0; i < servicios.length; i++) {
    if (servicios[i] != '') {
      arrayServiciosCliente.push(servicios[i] + ' (' + cantidad[i] + ')');
    }
  }


  var arrayPromocionesCliente = [];
  for (promocion of promocionesCliente.getValues()) {
    if (promocion != '') {
      arrayPromocionesCliente.push(promocion)
    }
  }

  var celdaServiciosCliente = arrayServiciosCliente.join('/');
  var celdaPromocionesCliente = arrayPromocionesCliente.join('/')


  var datosAIntroducir = []
  datosAIntroducir.push(idRegistroCliente.getValue());
  datosAIntroducir.push(fechaIngresoCliente.getValue());
  datosAIntroducir.push(codigoCliente.getValue());
  datosAIntroducir.push(nombreCliente.getValue());
  datosAIntroducir.push(emailCliente.getValue());
  datosAIntroducir.push(telefonoCliente.getValue());
  datosAIntroducir.push(direccionCliente.getValue());
  datosAIntroducir.push(fechaNacCliente.getValue());
  datosAIntroducir.push(celdaServiciosCliente);
  datosAIntroducir.push(metodoCliente.getValue());
  datosAIntroducir.push(descuentosCliente.getValue() ? "Con Descuento" : "Sin descuento");
  datosAIntroducir.push(importeTotalCliente.getValue());
  datosAIntroducir.push(extraCliente.getValue());
  datosAIntroducir.push(comoNosConocisteCliente.getValue());
  datosAIntroducir.push(celdaPromocionesCliente);
  datosAIntroducir.push(notasServicioCliente.getValue());
  datosAIntroducir.push('comprobante');
  datosAIntroducir.push(atentidoPor.getValue())


  var lastRowDestino = hojaDataBase.getLastRow() + 1
  for (i = 0; i < datosAIntroducir.length; i++) {
    hojaDataBase.getRange(lastRowDestino, i + 1).setValue(datosAIntroducir[i]);
  }

  console.log(datosAIntroducir);
}
