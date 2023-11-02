const historialMaximo = 6;
const monedas = [
  { nombre: 'Dólares', rangoMin: 950, rangoMax: 1035 },
  { nombre: 'Euros', rangoMin: 1000, rangoMax: 1100 },
  { nombre: 'Reales', rangoMin: 100, rangoMax: 135 }
];

const historialConversiones = JSON.parse(localStorage.getItem("historialConversiones")) || [];

const monedaSelect = document.getElementById("moneda");
const cantidadDineroInput = document.getElementById("cantidadDinero");
const resultado = document.getElementById("resultado");
const listaConversiones = document.getElementById("listaConversiones");

function mostrarOpcionesMonedas() {
  monedas.forEach((moneda, index) => {
    const option = document.createElement("option");
    option.value = moneda.nombre;
    option.textContent = `Convertir a ${moneda.nombre}`;
    monedaSelect.appendChild(option);
  });
}

function mostrarHistorial() {
  listaConversiones.innerHTML = "";
  const historialMostrado = historialConversiones.slice(-historialMaximo); // Obtener los elementos más recientes

  historialMostrado.forEach((conversion, index) => {
    const li = document.createElement("li");
    li.textContent = `Convertido a ${conversion.moneda}: ${conversion.cantidad} pesos = ${conversion.resultado} ${conversion.moneda}`;
    listaConversiones.appendChild(li);
  });
}

function convertirMoneda() {
  const cantidadDinero = parseFloat(cantidadDineroInput.value);
  const opcion = monedaSelect.value;

  if (isNaN(cantidadDinero) || !opcion) {
    resultado.textContent = "Por favor, ingresa una cantidad válida y elige una moneda.";
    resultado.style.display = "block";
  } else {
    const monedaSeleccionada = monedas.find((moneda) => moneda.nombre === opcion);
    const cantidadAleatoria = parseFloat(
      (Math.random() * (monedaSeleccionada.rangoMax - monedaSeleccionada.rangoMin) + monedaSeleccionada.rangoMin).toFixed(2)
    );
    const resultadoConversion = cantidadDinero  / cantidadAleatoria;

    resultado.textContent = `El monto en ${monedaSeleccionada.nombre} es: ${resultadoConversion.toFixed(2)}`;
    resultado.style.display = "block";

    historialConversiones.push({
      moneda: monedaSeleccionada.nombre,
      cantidad: cantidadDinero,
      resultado: resultadoConversion,
    });

    localStorage.setItem("historialConversiones", JSON.stringify(historialConversiones));

    mostrarHistorial();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const convertirButton = document.getElementById("convertir");
  convertirButton.addEventListener("click", convertirMoneda);

  mostrarOpcionesMonedas();
  mostrarHistorial();
});
