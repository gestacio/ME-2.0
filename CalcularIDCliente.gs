function calcularIDCliente() {
  var fecha = new Date()
  var dia = fecha.getDate()
  var mes = fecha.getMonth() + 1
  var year = fecha.getFullYear().toString()
  var year = year.slice(2)
  let fechaIDCliente = dia + "" + mes + "" + year

  var fechaActual = fechaIngresoCliente.getValue();
  var fechaDia = kvFechaComprobante.getValue();
  console.log(fechaActual.toString());
  console.log(fechaIngresoCliente.getValue().toString());


  if (fechaActual.toString() != fechaDia.toString()) {
    kvFechaComprobante.setValue(fechaActual);
    kvIdClienteDia.setValue(1)
    // hojaRegistro.getRange("L4").setValue(1);
    console.log(fechaActual);
    console.log(fechaDia);

    console.log("fecha diferente")
  }

  // var idDia = hojaRegistro.getRange("L4").getValue();
  var idDia = kvIdClienteDia.getValue();
  idDia = zfill(idDia, 3);
  var idCliente = fechaIDCliente + "-" + idDia;
  kvIdRegistroCliente.setValue(idCliente)
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

