function buscarCliente() {
  var cliente = cedulaCliente.getValue()
  var tablaDeBusqueda = hojaClientes.getSheetValues(2, 1, hojaClientes.getMaxRows(), 1)
  var busqueda = tablaDeBusqueda.find(element => element == cliente);
  
  return busqueda;
}
