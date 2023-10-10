function convertirMoneda() {
    alert("Bienvenido al conversor de moneda, cambia tus pesos a la moneda que elijas");
  
    const cantidadDinero = parseFloat(prompt("Por favor, ingresa la cantidad de dinero:"));
    if (isNaN(cantidadDinero)) {
      alert("Debe ingresar un número válido. Recarga la página e intenta nuevamente.");
      return;
    }
  
    const opcion = parseInt(prompt("Elige una opción:\n1. Convertir a dólares $\n2. Convertir a euros €\n3. Convertir a reales R  "));
  
    if (opcion >= 1 && opcion <= 3) {
      let resultado;
  
      switch (opcion) {
        case 1:
          resultado = cantidadDinero / 1025;
          break;
        case 2:
          resultado = cantidadDinero / 1114; 
          break;
        case 3:
          resultado = cantidadDinero / 100;
          break;
      }
  
      const resultadoRedondeado = Math.round(resultado);
  
      let mensajeRedondeo = resultadoRedondeado > resultado ? "se redondeó hacia arriba" : "se redondeó hacia abajo";
  
      alert(`El monto en la moneda seleccionada es: ${resultadoRedondeado}. (${mensajeRedondeo})`);
      alert("Gracias por usar nuestro conversor de moneda");
    } else {
      alert("Opción incorrecta. vuelve a tocar el boton.");
    }
  }
  
  let button = document.getElementById("conversor");
  button.onclick = convertirMoneda;