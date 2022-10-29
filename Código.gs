function doGet(e) {
  registroCliente();
}

function registroCliente() {
  var estanLosDatosValidos = datosValidados()
  // 0 = OK
  // 1 = Datos de cliente incompletos
  // 2 = Servicios o Cantidad vacío
  // 3 = No hay misma cantidad de filas de Servicios y Cantidad

  if (estanLosDatosValidos) {

    registrarCliente();
    registrarDBTransaccional();
    registrarDBServices()

    clearRegistro();
    actualizarIDCliente();

    SpreadsheetApp.getUi().alert("Cliente ingresado correctamente ✓");
  } 
  
  // removePermisos()

  // ProtectCells();
}

function actualizarIDCliente() {
  var idDia = parseInt(kvIdClienteDia.getValue()) + 1
  kvIdClienteDia.setValue(idDia);

  calcularIDCliente()
}


function abrirLink() {
  return UrlFetchApp.fetch("https://script.google.com/macros/s/AKfycbzpWIAVQDi4SRbK4XqEAKTl3w7Ar7bYLooNLns0IuNCHIQRUdj86pBrAI-TPZdClheAXQ/exec");
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