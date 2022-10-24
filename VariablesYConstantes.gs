// Variables generales a utilizar
var libro = SpreadsheetApp.getActiveSpreadsheet();
var hojaRegistro = libro.getSheetByName('Registro');
var hojaClientes = libro.getSheetByName('Clientes');
var hojaDataBase = libro.getSheetByName('DB Transactional');
var hojaDBServices = libro.getSheetByName('DB Services')


// Datos Registro
let idRegistroCliente = hojaRegistro.getRange('H5')
let fechaIngresoCliente = hojaRegistro.getRange('H9');


// KeyValues Registro Cliente
let kvFechaComprobante = hojaRegistro.getRange('L3');
let kvIdClienteDia = hojaRegistro.getRange('L4');
let kvIdRegistroCliente = hojaRegistro.getRange('L5');
let kvRegistradoCliente = hojaRegistro.getRange('L6');


// Datos Cliente
let cedulaCliente = hojaRegistro.getRange('C13');
let nombreCliente = hojaRegistro.getRange('C14');
let emailCliente = hojaRegistro.getRange('C15');
let telefonoCliente = hojaRegistro.getRange('C16');
let direccionCliente = hojaRegistro.getRange('C17');
let fechaNacCliente = hojaRegistro.getRange('C18');
let generoCliente = hojaRegistro.getRange('C19');
let instagramCliente = hojaRegistro.getRange('C20');
let tikTokCliente = hojaRegistro.getRange('C21')
let comoNosConocisteCliente = hojaRegistro.getRange('E13:F13');
let metodoCliente = hojaRegistro.getRange('E16:F16');
let atentidoPor = hojaRegistro.getRange('E19:F19');
let registradoCliente = hojaRegistro.getRange('H13');
let perteneceClubCliente = hojaRegistro.getRange('H16');
let comprobanteCliente = hojaRegistro.getRange('H19');


// Datos Servicio
const serviciosCliente = hojaRegistro.getRange('B25:B33');
const cantidadServiciosCliente = hojaRegistro.getRange('D25:D33');
const precioUnitarioCliente = hojaRegistro.getRange('E25:E33')
const descuentosCliente = hojaRegistro.getRange('F25:F33');
const precioTotalCliente = hojaRegistro.getRange('G25:G33');
const promocionesCliente = hojaRegistro.getRange('H25:H33');
const extraCliente = hojaRegistro.getRange('G35');
const importeTotalCliente = hojaRegistro.getRange('G36');
const notasServicioCliente = hojaRegistro.getRange('C34:E35');


function hola() {
  // console.log(cedulaCliente.getValue());
}

