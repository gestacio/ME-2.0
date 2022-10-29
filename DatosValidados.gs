function datosValidados() {
  let datosClienteValidados = [];

  datosClienteValidados.push(cedulaCliente.getValue());
  datosClienteValidados.push(nombreCliente.getValue());
  datosClienteValidados.push(emailCliente.getValue());
  datosClienteValidados.push(telefonoCliente.getValue());
  datosClienteValidados.push(direccionCliente.getValue());
  datosClienteValidados.push(fechaNacCliente.getValue());
  datosClienteValidados.push(generoCliente.getValue());
  datosClienteValidados.push(comoNosConocisteCliente.getValue());
  datosClienteValidados.push(metodoCliente.getValue());
  datosClienteValidados.push(atentidoPor.getValue());

  for (datos of datosClienteValidados) {
    if (datos == '') {
      console.log("falso faltan datos del cliente")
      SpreadsheetApp.getUi().alert("Faltan datos de cliente obligatorios por rellenar");
      return false;
    }
  }

  let servicios = serviciosCliente.getValues();
  let listaServicios = []
  for (servicio of servicios) {
    if (servicio != '') {
      listaServicios.push(servicio)
    }
  }
  let cuentaServicios = listaServicios.length

  let cantidades = cantidadServiciosCliente.getValues();
  let listaCantidades = []
  for (cantidad of cantidades) {
    if (cantidad != '') {
      listaCantidades.push(cantidad)
    }
  }
  // console.log(listaCantidades);
  let cuentaCantidades = listaCantidades.length;

  // console.log(cuentaServicios);
  // console.log(cuentaCantidades);

  if (cuentaServicios == 0 || cuentaCantidades == 0) {
    console.log('falso alguno de los dos vacios');
    SpreadsheetApp.getUi().alert("Datos de Servicios o Cantidad vacío");
    return false;
  }

  if (cuentaServicios !== cuentaCantidades) {
    console.log("falso cantidades x servicios");
    SpreadsheetApp.getUi().alert("Filas Servicios no corresponden a Cantidad");
    return false;
  }

  // clearServicios()
  return true;  
}



function clearServicios() {
  serviciosCliente.clearContent();
  cantidadServiciosCliente.clearContent();
  notasServicioCliente.clearContent();
  extraCliente.clearContent()
}