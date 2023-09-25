function convertirMoneda() {
    alert("Bienvenido al conversor de moneda, cambia tus pesos a la moneda que eligas");
  
    const cantidadDinero = parseFloat(prompt("Por favor, ingresa la cantidad de dinero:"));
    if (isNaN(cantidadDinero)) {
      alert("Debe ingresar un número válido. Recarga la página e intenta nuevamente.");
      return;
    }
  
    const opcion = parseInt(prompt("Elige una opción:\n1. Convertir a dólares (735)\n2. Convertir a euros (788)\n3. Convertir a reales (100)"));
  
    let resultado;
    switch (opcion) {
      case 1:
        resultado = cantidadDinero / 735;
        alert("El monto en dólares es $ " + resultado);
        break;
      case 2:
        resultado = cantidadDinero / 788;
        alert("El monto en euros es € " + resultado);
        break;
      case 3:
        resultado = cantidadDinero / 100;
        alert("El monto en reales es R " + resultado);
        break;
      default:
        alert("Opción incorrecta. Recarga la página e intenta nuevamente.");
        return;
    }
  
    alert("Gracias por usar nuestro conversor de moneda");
  }
  
let button =  document.getElementById("conversor");
button.onclick = convertirMoneda;