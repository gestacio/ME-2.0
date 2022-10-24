function clearRegistro() {
  // Datos Cliente
  cedulaCliente.clearContent();
  nombreCliente.clearContent();
  emailCliente.clearContent();
  telefonoCliente.clearContent();
  direccionCliente.clearContent();
  fechaNacCliente.clearContent();
  generoCliente.clearContent();
  comoNosConocisteCliente.clearContent();
  instagramCliente.clearContent();
  tikTokCliente.clearContent();
  metodoCliente.clearContent();
  comprobanteCliente.clearContent();
  perteneceClubCliente.setValue("No Pertenece");
  kvRegistradoCliente.setValue("No Registrado")

  // Datos Servicio
  serviciosCliente.clearContent();
  cantidadServiciosCliente.clearContent();
  notasServicioCliente.clearContent();
  extraCliente.clearContent()

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
