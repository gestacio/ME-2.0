function calcularIDCliente() {
  var fecha = new Date()
  var dia = fecha.getDate()
  var mes = fecha.getMonth() + 1
  var year = fecha.getFullYear().toString()
  var year = year.slice(2)
  let fechaIDCliente = dia + "" + mes + "" + year

  var fechaActual = fechaIngresoCliente.getValue();
  var fechaDia = hojaRegistro.getRange("H2").getValue();
  console.log(fechaActual.toString());
  console.log(fechaDia.toString());


  if (fechaActual.toString() != fechaDia.toString()) {
    hojaRegistro.getRange("H2").setValue(fechaActual);
    hojaRegistro.getRange("H3").setValue(1);
    console.log(fechaActual);
    console.log(fechaDia);

    console.log("fecha diferente")
  }

  var idDia = hojaRegistro.getRange("H3").getValue();
  idDia = zfill(idDia, 3);
  var idCliente = fechaIDCliente + "-" + idDia;
  hojaRegistro.getRange("G9").setValue(idCliente);
  console.log(idCliente)
}


function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
}

