// Obtener referencia al canvas y al formulario
const ctx = document.getElementById('salesChart').getContext('2d');
const salesForm = document.getElementById('salesForm');
const errorMsg = document.getElementById('error');

// Inicializar datos del grafico
const labels = []; // Para los meses
const data = []; // Para las ventas

// grafico inicial vacío
const salesChart = new Chart(ctx, {
    type: 'bar', // grafico (barras)
    data: {
        labels: labels,
        datasets: [{
            label: 'Ventas por Mes',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Funcion para agregar datos del formulario al grafico
function addData() {
    // Obtener valores del formulario
    const month = document.getElementById('month').value;
    const sales = parseFloat(document.getElementById('sales').value);
    
    // Validar campos
    if (month && !isNaN(sales)) {
        errorMsg.textContent = ""; // Limpiar mensaje de error

        // Agregar datos al grgfico
        labels.push(month);
        data.push(sales);
        salesChart.update(); // Actualizar grafico

        // Limpiar formulario
        salesForm.reset();
    } else {
        errorMsg.textContent = "Por favor, ingrese un mes y una cantidad valida para ventas.";
    }
}
