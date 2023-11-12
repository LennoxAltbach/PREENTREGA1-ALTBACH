
const historialMaximo = 6;
const monedas = [
  { nombre: 'Dólar blue', rangoMin: 950, rangoMax: 1035 },
  { nombre: 'Euros', rangoMin: 1000, rangoMax: 1100 },
  { nombre: 'Reales', rangoMin: 100, rangoMax: 135 },
  { nombre: 'Chileno', rangoMin: 60, rangoMax: 80 },
  { nombre: 'Uruguayo', rangoMin: 50, rangoMax: 60 },
  { nombre: 'Dólar oficial', rangoMin: 600, rangoMax: 800 },
];

const historialConversiones = JSON.parse(localStorage.getItem("historialConversiones")) || [];

const monedaSelect = document.getElementById("moneda");
const cantidadDineroInput = document.getElementById("cantidadDinero");
const resultado = document.getElementById("resultado");
const listaConversiones = document.getElementById("listaConversiones");

const mostrarOpcionesMonedas = () => {
  for (const moneda of monedas) {
    const option = document.createElement("option");
    option.value = moneda.nombre;
    option.textContent = `Convertir a ${moneda.nombre}`;
    monedaSelect.appendChild(option);
  }
};

const mostrarHistorial = () => {
  listaConversiones.innerHTML = "";
  const historialMostrado = historialConversiones.slice(-historialMaximo);

  for (const conversion of historialMostrado) {
    const li = document.createElement("li");
    li.textContent = `Convertido a ${conversion.moneda}: ${conversion.cantidad} pesos = ${conversion.resultado} ${conversion.moneda}`;
    listaConversiones.appendChild(li);
  }
};

const convertirMoneda = () => {
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
    const resultadoConversion = cantidadDinero / cantidadAleatoria;

    resultado.textContent = `El monto en ${monedaSeleccionada.nombre} es: ${resultadoConversion.toFixed(2)}`;
    resultado.style.display = "block";

    historialConversiones.push({
      moneda: monedaSeleccionada.nombre,
      cantidad: cantidadDinero,
      resultado: resultadoConversion,
    });

    localStorage.setItem("historialConversiones", JSON.stringify(historialConversiones));

    mostrarHistorial();

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'conversion exitosa',
      customClass: {
        popup: 'tamaño-menor'
      }
    })
  }
};



document.addEventListener("DOMContentLoaded", () => {
  const convertirButton = document.getElementById("convertir");
  convertirButton.addEventListener("click", convertirMoneda);

  mostrarOpcionesMonedas();
  mostrarHistorial();
});
