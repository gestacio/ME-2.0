function doGet(e) {
  registroCliente();
}

function registroCliente() {

  // UnProtectCells();
  // setPermisos()
  registrarCliente();

  // SpreadsheetApp.getUi().alert("Hola mundo");
  registrarDBTransaccional();
  registrarDBServices()

  clearRegistro();
  actualizarIDCliente();

  // removePermisos()

  // ProtectCells();
}

function actualizarIDCliente() {
  var idDia = parseInt(hojaRegistro.getRange("I3").getValue()) + 1
  hojaRegistro.getRange("I3").setValue(idDia);

  calcularIDCliente()
}


function abrirLink() {
  return UrlFetchApp.fetch("https://script.google.com/macros/s/AKfycbzpWIAVQDi4SRbK4XqEAKTl3w7Ar7bYLooNLns0IuNCHIQRUdj86pBrAI-TPZdClheAXQ/exec");
}




function setPermisos() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var id = spreadsheet.getId();
  DriveApp.getFileById(id).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.OWNER);
}

function removePermisos() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var id = spreadsheet.getId();
  DriveApp.getFileById(id).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
}



function UnProtectCells() {
  var spreadsheet = SpreadsheetApp.getActive();
  var proteccion = spreadsheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];

  console.log(proteccion)

  proteccion.remove()

  // for (var i = 0; i < rangos_protegidos.length; i++) 
  // {
  //   var proteccion = rangos_protegidos[i];
  //   if (proteccion.canEdit()) 
  //   {
  //      proteccion.remove();
  //   } 
  // }
}

function ProtectCells() {
  // var rango_protegido = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1, 1, 2, 2).protect();
  // var hojaProtegida = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DB Transactional').protect()
  var hojaProtegida = hojaDataBase.protect()
  var mi_usuario = Session.getEffectiveUser();

  hojaProtegida.addEditor(mi_usuario);
  hojaProtegida.removeEditors(hojaProtegida.getEditors());

  if (hojaProtegida.canDomainEdit()) {
    rango_protegido.setDomainEdit(false);
  }
}






// function doGet()
// {
//   var active_user     = Session.getActiveUser().getEmail();
//   var effective_user  = Session.getEffectiveUser().getEmail();
//   var user            = Session.getUser().getEmail();

//   var output = "Usuario activo: " + active_user +
//   "\nUsuario efectivo: " + effective_user + 
//   "\nUsuario: " + user;


//   // var output = "<p>Active: " + active_user + "</p>";
//   // output += "<p>Effective: " + effective_user + "</p>";
//   // output += "<p>User: " + user + "</p>";
//   SpreadsheetApp.getUi().alert(output);
//   // return HtmlService.createHtmlOutput(output);
//   // console.log(output)
// }

// function onOpen() {
//   var menu = SpreadsheetApp.getUi().createMenu("Hola mundo");
//   menu.addItem("Ver usuarios", "doGet")

//   menu.addToUi()
// }