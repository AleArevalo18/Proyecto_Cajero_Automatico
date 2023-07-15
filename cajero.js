var cuentas = [
  { id: 1, name: "Mali", pass: "Ma123", saldo:200},
  { id: 2, name: "Gera", pass: "Ge123", saldo:290},
  { id: 3, name: "Maui", pass: "Ma123", saldo:67}
];

// Impresion de saldo
function imprimirSaldo(foundUser){
  alert("Su saldo es: " + foundUser.saldo);
}

// Operaciones - Nota: Max $990 - Min $10
// Consignar
function consignar(foundUser){
  let valor = parseInt(prompt("Ingrese el valor a consignar: "));
  let valorMax = foundUser.saldo;
  let suma = (valor + valorMax);

  if(suma > 990){
    alert("Tansacción rechazada por altas sumas de dinero");
  }

  foundUser.saldo = suma;

  alert("Su nuevo saldo es de: " + foundUser.saldo);
}

function retirar(foundUser){
  let valor = parseInt(prompt("Ingrese el valor a retirar: "));
  let actual = foundUser.saldo;
  let resta = (actual - valor);

  if(resta < 10){
    alert("Tansacción rechazada. No puede haber menos de $10");
  }else{
    foundUser.saldo = resta;

    alert("Su nuevo saldo es de: " + foundUser.saldo);
  }

}




// Función de Login
function login(username, password) {
  
  let foundUser = null;
  let credentialsValid = false; 

  // Recorrer el arreglo de usuarios
  cuentas.forEach(function(user) {

    // Verificar si el nombre de usuario y la contraseña coinciden
    if (user.name === username && user.pass === password) {
      foundUser = user;
      credentialsValid = true;
    }

  });

  if(!credentialsValid){
    console.log("Credenciales inválidas. Inténtalo nuevamente.")
  }else{
    alert("Inicio de sesión exitoso:");

    alert("Ingrese 1 para ver su saldo: \n Ingrese 2 para consignar: \n Ingrese 3 para retirar dinero: \n")
    let opc = parseInt(prompt("Ingrese su opción"));

    switch (opc) {
      case 1:
        imprimirSaldo(foundUser);
        break;
      case 2:
        consignar(foundUser);
        break;
      case 3:
        retirar(foundUser);
          break;
      default:
        alert("Opción no valida. Transacción rechazaada");
        break;
    }

    alert("Gracias por confiar en nosotros, fue un placer atenderte.");

    
  }

  return foundUser;
}

// Captura de contenido de Botones
// Ingreso por Mali

function capturaTextMali(){

    let user = prompt("Por favor ingrese el usuario: ");
    let contrasenia = prompt("Por favor ingrese la contraseña: ");

    if(!user){
      console.log("Error, dede ingresar sus datos");
    } 
    
    if(user == "Mali"){
      
      let validacion = login(user, contrasenia);
      console.log(validacion);
    }else{
      console.log("Error, las credenciales ingresadas no son de Mali");
      console.log("Transacción rechazada");
    }

}

// Ingreso por Gera

function capturaTextGera(){

  let user = prompt("Por favor ingrese el usuario: ");
  let contrasenia = prompt("Por favor ingrese la contraseña: ");

  if(!user){
    console.log("Error, dede ingresar sus datos");
  } 
  
  if(user == "Gera"){
    
    let validacion = login(user, contrasenia);
    console.log(validacion);
  }else{
    console.log("Error, las credenciales ingresadas no son de Gera");
    console.log("Transacción rechazada");
  }

}

// Ingreso por Maui

function capturaTextMaui(){

  let user = prompt("Por favor ingrese el usuario: ");
  let contrasenia = prompt("Por favor ingrese la contraseña: ");

  if(!user){
    console.log("Error, dede ingresar sus datos");
  } 
  
  if(user == "Maui"){
    
    let validacion = login(user, contrasenia);
    console.log(validacion);
  }else{
    console.log("Error, las credenciales ingresadas no son de Maui");
    console.log("Transacción rechazada");
  }

}