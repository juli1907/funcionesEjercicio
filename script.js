console.log("Bienvenido al sistema de facturación de energía.");

let consumoGuardado = 0;
let tarifaGuardada = 0;
let cargoFijoGuardado = 0;
let porcentajeIVAGuardado = 0;

// 1. Función declarativa: consumo mensual en kWh
function obtenerConsumo() {
    if (consumoGuardado === 0) {
        let valor = parseFloat(prompt("Ingresa el consumo mensual en kWh:"));
        while (isNaN(valor) || valor < 0) {
            valor = parseFloat(prompt("Valor inválido. Ingresa el consumo en kWh (número positivo):"));
        }
        consumoGuardado = valor;
    }
    return consumoGuardado;
}

// 2. Función declarativa: tarifa por kWh
function obtenerTarifa() {
    if (tarifaGuardada === 0) {
        let valor = parseFloat(prompt("Ingresa la tarifa por kWh (en pesos):"));
        while (isNaN(valor) || valor < 0) {
            valor = parseFloat(prompt("Valor inválido. Ingresa la tarifa (número positivo):"));
        }
        tarifaGuardada = valor;
    }
    return tarifaGuardada;
}