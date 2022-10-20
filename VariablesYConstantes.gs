// Variables generales a utilizar
var libro = SpreadsheetApp.getActiveSpreadsheet();
var hojaRegistro = libro.getSheetByName('Registro');
var hojaClientes = libro.getSheetByName('Clientes');
var hojaDataBase = libro.getSheetByName('DB Transactional');
var hojaDBServices = libro.getSheetByName('DB Services')
// var fechaDia = hojaRegistro.getRange("H2");
// var idDia = hojaRegistro.getRange("H3");


// Datos Registro
const fechaIngresoCliente = hojaRegistro.getRange('C9');
const idRegistroCliente = hojaRegistro.getRange('G9')


// Datos Cliente
const cedulaCliente = hojaRegistro.getRange('C12');
const nombreCliente = hojaRegistro.getRange('C13');
const emailCliente = hojaRegistro.getRange('C14');
const telefonoCliente = hojaRegistro.getRange('C15');
const fechaNacCliente = hojaRegistro.getRange('C16');
const direccionCliente = hojaRegistro.getRange('C17');
const comoNosConocisteCliente = hojaRegistro.getRange('D12:E12');
const redesSocialesCliente = hojaRegistro.getRange('E15:E17');
const registradoCliente = hojaRegistro.getRange('F12:G12');
const metodoCliente = hojaRegistro.getRange('F15:G15');
const perteneceClubCliente = hojaRegistro.getRange('F18:G18')


// Datos Servicio
const serviciosCliente = hojaRegistro.getRange('B21:B29');
// const serviciosCliente = hojaRegistro.getRange('B21:C21');
const cantidadServiciosCliente = hojaRegistro.getRange('D21:D29');
const precioUnitarioCliente = hojaRegistro.getRange('E21:E29')
const descuentosCliente = hojaRegistro.getRange('F21:F29');
const precioTotalCliente = hojaRegistro.getRange('G21:G29');
const promocionesCliente = hojaRegistro.getRange('H21:H29');
const extraCliente = hojaRegistro.getRange('G31');
const importeTotalCliente = hojaRegistro.getRange('F32:G32');
const notasServicioCliente = hojaRegistro.getRange('C30:E30');
const atentidoPor = hojaRegistro.getRange("D32:E32");


function hola() {
  var redesSociales = redesSocialesCliente.getValues().join('/');
  console.log(redesSociales);
}

