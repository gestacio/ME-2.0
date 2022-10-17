function registroCliente() {
  // registrarCliente();
  
  // SpreadsheetApp.getUi().alert("Hola mundo");
  // registrarDBTransaccional();
  registrarDBServices()

  // clearRegistro();
  // actualizarIDCliente();
  
}

function actualizarIDCliente() {
  var idDia = parseInt(hojaRegistro.getRange("H3").getValue()) + 1
  hojaRegistro.getRange("H3").setValue(idDia);

  calcularIDCliente()
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