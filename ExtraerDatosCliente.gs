function onEdit(e) {
  if (e.range.getA1Notation() === 'C13') {
    extraerDatosCliente();
    // SpreadsheetApp.getUi().alert("has editado algo");
  }
}

function extraerDatosCliente() {
  var cliente = cedulaCliente.getValue()
  var tablaDeBusqueda = hojaClientes.getSheetValues(2, 1, hojaClientes.getMaxRows(), 1)
  var busqueda = tablaDeBusqueda.find(element => element == cliente);
  // Logger.log(busqueda)
    

  if (busqueda) {
    var indiceTablaDeBusqueda = tablaDeBusqueda.indexOf(busqueda) + 2;
    var indiceTablaDeBusqueda = indiceTablaDeBusqueda.toFixed();
    var arrayDatosClienteEncontrado = hojaClientes.getRange(indiceTablaDeBusqueda, 2, 1, hojaClientes.getLastColumn() - 1);
    var arrayDatosClienteEncontrado = arrayDatosClienteEncontrado.getValues()[0]
    console.log(arrayDatosClienteEncontrado)
    
    nombreCliente.setValue(arrayDatosClienteEncontrado[0]);
    emailCliente.setValue(arrayDatosClienteEncontrado[1]);
    telefonoCliente.setValue(arrayDatosClienteEncontrado[2]);
    direccionCliente.setValue(arrayDatosClienteEncontrado[3]);
    fechaNacCliente.setValue(arrayDatosClienteEncontrado[4]);
    comoNosConocisteCliente.setValue(arrayDatosClienteEncontrado[5]);
    instagramCliente.setValue(arrayDatosClienteEncontrado[6]);
    tikTokCliente.setValue(arrayDatosClienteEncontrado[7]);
    generoCliente.setValue(arrayDatosClienteEncontrado[9]);



    // var arrayDeArrayRedesSociales = []
    // // var arrayRedesSociales = arrayDatosClienteEncontrado[6].split('/')
    // arrayDeArrayRedesSociales.push([arrayDatosClienteEncontrado[6]])
    // arrayDeArrayRedesSociales.push([arrayDatosClienteEncontrado[7]])
    // arrayDeArrayRedesSociales.push([arrayDatosClienteEncontrado[8]])
    // redesSocialesCliente.setValues(arrayDeArrayRedesSociales);

    
    
    // perteneceClubCliente.setValue(arrayDatosClienteEncontrado[9]);
    kvRegistradoCliente.setValue("Registrado")
    // console.log(arrayDatosClienteEncontrado)
    
  } else {
    kvRegistradoCliente.setValue("No Registrado");
    // SpreadsheetApp.getUi().alert("registro no encontrado");
  }

}