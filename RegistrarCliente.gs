function registrarCliente() {
  var busqueda = buscarCliente();

  if (!busqueda) {
    var instagram = instagramCliente.getValue();
    var tikTok = tikTokCliente.getValue();

    var datosClientes = [];
    datosClientes[0] = cedulaCliente.getValue();
    datosClientes[1] = nombreCliente.getValue();
    datosClientes[2] = emailCliente.getValue();
    datosClientes[3] = telefonoCliente.getValue();
    datosClientes[4] = direccionCliente.getValue();
    datosClientes[5] = fechaNacCliente.getValue();
    datosClientes[6] = comoNosConocisteCliente.getValue();
    datosClientes[7] = instagram != false ? instagram : "N/A";
    datosClientes[8] = tikTok != false ? tikTok : "N/A";
    datosClientes[9] = perteneceClubCliente.getValue();
    datosClientes[10] = generoCliente.getValue();

    Logger.log(datosClientes);


    // Última fila de la hoja clientes
    var lastRowDestino = hojaClientes.getLastRow() + 1

    // Copia de los datos a través del for
    for (i = 0; i < datosClientes.length; i++) {
      hojaClientes.getRange(lastRowDestino, i + 1).setValue(datosClientes[i]);
    }
  }

  
}
