function buscarCliente() {
  var cliente = cedulaCliente.getValue()
  var tablaDeBusqueda = hojaClientes.getSheetValues(2, 1, hojaClientes.getMaxRows(), 1)
  var busqueda = tablaDeBusqueda.find(element => element == cliente);

  // console.log(cliente);
  // console.log(tablaDeBusqueda);
  // console.log(busqueda);
  
  return busqueda;
}

// console.log("cliente encontrado: " + buscarCliente());
