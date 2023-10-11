const monedas = [
  { nombre: 'Dólares', tasaCambio: 1000 },
  { nombre: 'Euros', tasaCambio: 1100 },
  { nombre: 'Reales', tasaCambio: 120 }
];

const historialConversiones = [];

function mostrarOpcionesMonedas() {
  console.log('Opciones de monedas:');
  monedas.forEach((moneda, index) => {
    console.log(`${index + 1}. Convertir a ${moneda.nombre}`);
  });
}

function calcularResultado(cantidad, tasaCambio) {
  return cantidad / tasaCambio;
}

function mostrarHistorial() {
  console.log('Historial de conversiones:');
  historialConversiones.forEach((conversion, index) => {
    console.log(`${index + 1}. Convertido a ${conversion.moneda}: ${conversion.cantidad} pesos = ${conversion.resultado} ${conversion.moneda}`);
  });
}

function convertirMoneda() {
  alert("Bienvenido al conversor de moneda, cambia tus pesos a la moneda que elijas");

  const cantidadDinero = parseFloat(prompt("Por favor, ingresa la cantidad de dinero:"));
  if (isNaN(cantidadDinero)) {
    alert("Debe ingresar un número válido. Recarga la página e intenta nuevamente.");
    return;
  }

  mostrarOpcionesMonedas();

  const opcion = parseInt(prompt("Elige una opción:\n1. Convertir a dólares $\n2. Convertir a euros €\n3. Convertir a reales R  "));
  if (opcion >= 1 && opcion <= 3) {
    const monedaSeleccionada = monedas[opcion - 1];
    const resultado = cantidadDinero / monedaSeleccionada.tasaCambio;

    const resultadoRedondeado = Math.round(resultado);
    let mensajeRedondeo = resultadoRedondeado > resultado ? "se redondeó hacia arriba" : "se redondeó hacia abajo";

    alert(`El monto en ${monedaSeleccionada.nombre} es: ${resultadoRedondeado}. (${mensajeRedondeo})`);

    historialConversiones.push({
      moneda: monedaSeleccionada.nombre,
      cantidad: cantidadDinero,
      resultado: resultadoRedondeado
    });

    mostrarHistorial();
    alert("Gracias por usar nuestro conversor de moneda");
  } else {
    alert("Opción incorrecta. Vuelve a tocar el botón.");
  }
}

let button = document.getElementById("conversor");
button.onclick = convertirMoneda;