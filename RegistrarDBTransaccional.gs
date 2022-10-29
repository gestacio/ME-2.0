function registrarDBTransaccional() {
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
  datosAIntroducir.push(cedulaCliente.getValue());
  datosAIntroducir.push(nombreCliente.getValue());
  datosAIntroducir.push(emailCliente.getValue());
  datosAIntroducir.push(telefonoCliente.getValue());
  datosAIntroducir.push(direccionCliente.getValue());
  datosAIntroducir.push(fechaNacCliente.getValue());
  datosAIntroducir.push(celdaServiciosCliente);
  datosAIntroducir.push(metodoCliente.getValue());
  datosAIntroducir.push(descuentosCliente.getValue() ? "Con Descuento" : "Sin descuento");
  datosAIntroducir.push(importeTotalCliente.getValue());
  datosAIntroducir.push(extraCliente.getValue() != '' ? extraCliente.getValue() : '0');
  datosAIntroducir.push(comoNosConocisteCliente.getValue());
  datosAIntroducir.push(celdaPromocionesCliente != '' ? comprobanteCliente.getValue() :  "Sin Promociones");
  datosAIntroducir.push(notasServicioCliente.getValue() != '' ? notasServicioCliente.getValue() : "-");
  datosAIntroducir.push(comprobanteCliente.getValue() != '' ? comprobanteCliente.getValue() :  "Sin Comprobante");
  datosAIntroducir.push(atentidoPor.getValue())


  var lastRowDestino = hojaDataBase.getLastRow() + 1
  for (i = 0; i < datosAIntroducir.length; i++) {
    hojaDataBase.getRange(lastRowDestino, i + 1).setValue(datosAIntroducir[i]);
  }

  console.log(datosAIntroducir);
}
