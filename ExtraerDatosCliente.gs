function onEdit(e) {
  if (e.range.getA1Notation() === 'C12') {
    extraerDatosCliente();
    // SpreadsheetApp.getUi().alert("has editado algo");
  }
}

function extraerDatosCliente() {
  var cliente = codigoCliente.getValue()
  var tablaDeBusqueda = hojaClientes.getSheetValues(2, 1, hojaClientes.getMaxRows(), 1)
  var busqueda = tablaDeBusqueda.find(element => element == cliente);
  // Logger.log(busqueda)
    

  if (busqueda) {
    var indiceTablaDeBusqueda = tablaDeBusqueda.indexOf(busqueda) + 2;
    var indiceTablaDeBusqueda = indiceTablaDeBusqueda.toFixed();
    var arrayDatosClienteEncontrado = hojaClientes.getRange(indiceTablaDeBusqueda, 2, 1, 10);
    var arrayDatosClienteEncontrado = arrayDatosClienteEncontrado.getValues()[0]
    
    nombreCliente.setValue(arrayDatosClienteEncontrado[0]);
    emailCliente.setValue(arrayDatosClienteEncontrado[1]);
    telefonoCliente.setValue(arrayDatosClienteEncontrado[2]);
    fechaNacCliente.setValue(arrayDatosClienteEncontrado[3]);
    direccionCliente.setValue(arrayDatosClienteEncontrado[4]);
    comoNosConocisteCliente.setValue(arrayDatosClienteEncontrado[5]);

    var arrayDeArrayRedesSociales = []
    // var arrayRedesSociales = arrayDatosClienteEncontrado[6].split('/')
    arrayDeArrayRedesSociales.push([arrayDatosClienteEncontrado[6]])
    arrayDeArrayRedesSociales.push([arrayDatosClienteEncontrado[7]])
    arrayDeArrayRedesSociales.push([arrayDatosClienteEncontrado[8]])
    redesSocialesCliente.setValues(arrayDeArrayRedesSociales);

    if (arrayDatosClienteEncontrado[9] == "Pertenece") {
      arrayDatosClienteEncontrado[9] = true;
    } else {
      arrayDatosClienteEncontrado[9] = false;
    }
    
    perteneceClubCliente.setValue(arrayDatosClienteEncontrado[9]);
    registradoCliente.setValue("Registrado")
    console.log(arrayDatosClienteEncontrado)
    
  } else {
    registradoCliente.setValue("No Registrado");
    // SpreadsheetApp.getUi().alert("registro no encontrado");
  }

}