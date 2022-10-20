// function crearEventosdesdesheets() {
//  const calME = CalendarApp.getCalendarById("0ngp0a8ri0cs9besiaj9gafhtg@group.calendar.google.com");
//  const hoja= SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Calendario");

//  for (i=2;i<=hoja.getLastRow();i++){
 
//    const titulo   = hoja.getRange(i,2).getValue();
//    const fecha = hoja.getRange(i,3).getValue();
//    const horaini = hoja.getRange(i,4).getValue();
//    const horafin = hoja.getRange(i,5).getValue();
//    const invitados = hoja.getRange(i,6).getValue();
//    const ubicacion= hoja.getRange(i,7).getValue();
//    const descripcion= hoja.getRange(i,8).getValue();
//    const check = hoja.getRange(i,9).getValue();

//    if (check !== true ) {

//     var fechaIni = new Date(fecha)
//     fechaIni.setHours(horaini);

//     var fechaFin = new Date (fecha)
//     fechaFin.setHours(horafin);
//     // console.log(fecha);

//     var evento = calME.createEvent(
//       titulo, fechaIni, fechaFin,
      
//       {
//         description: descripcion,
//         location: ubicacion,
//         guests: invitados,
//         sendInvites: true
//     });
//     hoja.getRange(i,9).setValue(true);
//     Logger.log('Event ID: ' + evento.getTitle());
    
//    }
//  }

// }


// function registroCliente() {
//   // Variables generales a utilizar
//   var archivo = SpreadsheetApp.getActiveSpreadsheet();
//   var hojaOrigen = archivo.getActiveSheet();
//   var nombreOrigen = hojaOrigen.getName();
//   var hojaDestino = archivo.getSheetByName('Clientes');
//   var celdaActiva = hojaOrigen.getActiveCell();
//   var filaActiva = celdaActiva.getRow();
//   var colActiva = celdaActiva.getColumn();
//   var valor = celdaActiva.getValue();

//   // Celdas específicas dónde se extraen los datos
//   var cedulaCliente = hojaOrigen.getRange('C12').getValue();
//   var nombreCliente = hojaOrigen.getRange('C13').getValue();
//   var emailCliente = hojaOrigen.getRange('C14').getValue();
//   var telefonoCliente = hojaOrigen.getRange('C15').getValue();
//   var fechaNacCliente = hojaOrigen.getRange('C16').getValue();
//   var direccionCliente = hojaOrigen.getRange('C17').getValue();
//   var conocioCliente = hojaOrigen.getRange('D15:E16').getValue();
  
//   // Generación de array con valor de celdas
//   var datosClientes = [];
//   datosClientes[0] = cedulaCliente;
//   datosClientes[1] = nombreCliente;
//   datosClientes[2] = emailCliente;
//   datosClientes[3] = telefonoCliente;
//   datosClientes[4] = fechaNacCliente;
//   datosClientes[5] = direccionCliente;
//   datosClientes[6] = conocioCliente;

//   // Logger.log(datosClientes);

//   // Última fila de la hoja clientes
//   var lastRowDestino = hojaDestino.getLastRow()+1

//   // var rangoDestino = hojaDestino.getRange(hojaDestino.getLastRow()+1, 1)
//   // rangoOrigen.moveTo(rangoDestino);
//   // rangoOrigen.clearContent();

//   // Copia de los datos a través del for
//   for (i=0; i<datosClientes.length; i++) {
//     hojaDestino.getRange(lastRowDestino, i+1).setValue(datosClientes[i]);
//   }

//   // var clearDatos = hojaOrigen.getRange('C12:C17');
//   // var clearConocioCLiente = hojaOrigen.getRange('D15:E16');
//   // clearDatos.clearContent();
//   // clearConocioCLiente.clearContent();
  


// }

// // Falta realizar el clear en la tabla registro y no recuerdo que más (y)






































// // // var filaHojaDatos = 51
// // // var rangoCajaIngresos = "D" + filaHojaDatos + ":J" + filaHojaDatos

// // var filaCajaIngresos = 122;
// // var rangoCajaIngresos = "D" + filaCajaIngresos + ":J" + filaCajaIngresos;
// // var rangoCajaIngresos = "Movimientos CAJA!" + rangoCajaIngresos;

// // var now     = new Date();
// // var year    = now.getFullYear();
// // var month   = now.getMonth() + 1;
// // var day     = now.getUTCDate();
// // var fecha = day + "/" + month + "/" + year;

// // // function ejecutar() {

// // // SpreadsheetApp.getUi().prompt(fecha) ;
// // // }

// // // ejecutar();


// // function insertarDatosEnCajaIngreso() {
// //     var spreadsheet = SpreadsheetApp.getActive();
// //   // seleciona el rango de las celdas
// //   spreadsheet.getRange('D51:J51').activate(); 
// //   // crea una hoja nueva 
// //   // spreadsheet.insertSheet(1);
// //   // copia de una hoja y pega a la otra
// //   spreadsheet.getRange('\'Datos\'!D51:J51').copyTo(spreadsheet.getRange(rangoCajaIngresos), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
// //   // filaCajaIngresos += 1;
// //   // seleciona primera hoja
// //   // spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Datos'), true);
// //   // limpia datos anteriormente selecionados y copiados
// //   // spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
// //   // spreadsheet.getRange('A1').activate();
// // }

// // insertarDatosEnCajaIngreso();


// // // function launchPredefinedImports()
// // // {
// // //   var importRanges = [
// // //     { 
// // //       destinySheetName : "CajaIngresos", 
// // //       fromFileKey : "1PwTmudw_u-e1GmjGYVxQHzKKGNMdrfyS3DO4KNoUOuk",
// // //       fromSheet : "Datos",
// // //       fromRange : "D51:J51"
// // //     },
// // //   ];
    
// // //   launchImportsByArray( importRanges );
// // // }


// // // function launchImportsByArray( importRanges )
// // // {
  
// // //   for (var i=0;i<importRanges.length;i++) {
// // //     importExternalData(importRanges[i].destinySheetName,importRanges[i].fromFileKey,importRanges[i].fromSheet,importRanges[i].fromRange);
// // //   }
  
// // // }


// // // function importExternalData(destinySheetName,fromFileKey,fromSheet,fromRange)
// // // {
  
// // //   var ss = SpreadsheetApp.getActiveSpreadsheet();
// // //   var sheet = ss.getSheetByName(destinySheetName);
// // //   if (sheet == null )
// // //   {
// // //     ss.insertSheet(destinySheetName);
// // //     sheet = ss.getSheetByName(destinySheetName);
// // //   }
  
// // //   var data = SpreadsheetApp.openById(fromFileKey).getSheetByName(fromSheet).getRange(fromRange).getValues();
// // //   sheet.clearContents();
// // //   sheet.getRange("A1").setValue("Imported Data");
// // //   sheet.getRange("A2").setValue("File:");
// // //   sheet.getRange("B2").setValue(fromFileKey);
// // //   sheet.getRange("A3").setValue("Sheet:");
// // //   sheet.getRange("B3").setValue(fromSheet);
// // //   sheet.getRange("A4").setValue("Range:");
// // //   sheet.getRange("B4").setValue(fromRange);
// // //   sheet.getRange("A6").setValue("-----");
// // //   if ( data[0] ) {
// // //     sheet.getRange(8, 1, data.length, data[0].length).setValues( data );
// // //   }
// // // }
