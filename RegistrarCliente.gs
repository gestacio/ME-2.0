function registrarCliente() {
  var busqueda = buscarCliente();

  // if (!busqueda) {
    var instagram = redesSocialesCliente.getValues()[0][0];
    var facebook = redesSocialesCliente.getValues()[1][0];
    var tikTok = redesSocialesCliente.getValues()[2][0];

    console.log(instagram, facebook, tikTok);

    

    var datosClientes = [];
    datosClientes[0] = codigoCliente.getValue();
    datosClientes[1] = nombreCliente.getValue();
    datosClientes[2] = emailCliente.getValue();
    datosClientes[3] = telefonoCliente.getValue();
    datosClientes[4] = fechaNacCliente.getValue();
    datosClientes[5] = direccionCliente.getValue();
    datosClientes[6] = comoNosConocisteCliente.getValue();
    datosClientes[7] = instagram != false ? instagram : "N/A";
    datosClientes[8] = facebook != false ? facebook : "N/A";
    datosClientes[9] = tikTok != false ? tikTok : "N/A";
    datosClientes[10] = perteneceClubCliente.getValue() == "VERDADERO" ? "Pertenece" : "No Pertenece";
    Logger.log(datosClientes);


    // Última fila de la hoja clientes
    var lastRowDestino = hojaClientes.getLastRow() + 1

    // Copia de los datos a través del for
    for (i = 0; i < datosClientes.length; i++) {
      hojaClientes.getRange(lastRowDestino, i + 1).setValue(datosClientes[i]);
    // }
  }

  
}
