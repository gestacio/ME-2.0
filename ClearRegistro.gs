function clearRegistro() {
  // Datos Registro
  // fechaIngresoCliente.clearContent();

  // Datos Cliente
  codigoCliente.clearContent();
  nombreCliente.clearContent();
  emailCliente.clearContent();
  telefonoCliente.clearContent();
  fechaNacCliente.clearContent();
  direccionCliente.clearContent();
  comoNosConocisteCliente.clearContent();
  redesSocialesCliente.clearContent();
  metodoCliente.clearContent();
  perteneceClubCliente.setValue(false);
  registradoCliente.setValue("No Registrado")

  // Datos Servicio
  serviciosCliente.clearContent();
  cantidadServiciosCliente.clearContent();
  importeTotalCliente.clearContent();
  // promocionesCliente.clearContent();
  notasServicioCliente.clearContent();
  extraCliente.clearContent()
  importeTotalCliente.setValue("=SUM(G30;G31)")

}


function botonClearRegistro() {
  var response = Browser.msgBox('¿Seguro que desea limpiar todos los campos del registro?', Browser.Buttons.YES_NO);
  if (response == "yes") {
    // Acción
    clearRegistro();

    //Informamos que hemos realizado la acción
    Browser.msgBox('Campos limpiados correctamente', Browser.Buttons.OK);
  }
}
