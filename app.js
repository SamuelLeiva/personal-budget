let movimientos = [];

const registrarMovimiento = () => {
  let salir = false;
  while (!salir) {
    // 1. Solicitamos y validamos el nombre del movimiento
    let nombreMovimiento = "";
    while (nombreMovimiento.trim() === "") {
      nombreMovimiento = prompt("Ingrese el nombre del movimiento:").trim();
      if (nombreMovimiento === "") {
        console.error("El nombre no puede ser vacío.");
      }
    }

    // 2. Solicitamos y validamos el tipo de movimiento
    let tipoMovimiento = "";
    while (tipoMovimiento !== "INGRESO" && tipoMovimiento !== "EGRESO") {
      tipoMovimiento = prompt(
        "Ingrese el tipo de movimiento: 'Ingreso' o 'Egreso'"
      )
        .trim()
        .toUpperCase();
      if (tipoMovimiento !== "INGRESO" && tipoMovimiento !== "EGRESO") {
        console.error("Solo se permiten 'Ingreso' o 'Egreso'.");
      }
    }

    // 3. Solicitamos y validamos el monto del movimiento (debe ser un número > 0)
    let montoMovimiento;
    while (true) {
      const inputMonto = prompt("Ingrese el monto del movimiento:");
      montoMovimiento = Number(inputMonto);
      if (montoMovimiento > 0 && !isNaN(montoMovimiento)) {
        break;
      }
      console.error("Por favor, ingrese un monto válido mayor que 0.");
    }

    // Creamos y guardamos el objeto del movimiento
    const movimiento = {
      nombre: nombreMovimiento,
      tipo: tipoMovimiento,
      monto: montoMovimiento,
    };
    movimientos.push(movimiento);
    console.info("Movimiento registrado exitosamente!");

    // 4. Preguntamos si se desea registrar otro movimiento
    let respuesta = "";
    while (respuesta !== "SI" && respuesta !== "NO") {
      respuesta = prompt("¿Desea ingresar otro movimiento?\n (SI / NO)")
        .trim()
        .toUpperCase();
      if (respuesta !== "SI" && respuesta !== "NO") {
        console.error("Solo se puede ingresar 'SI' o 'NO'.");
      }
    }
    if (respuesta === "NO") {
      salir = true;
    }
  }
};

// Función para mostrar resumen general
const mostrarResumen = () => {
  if (movimientos.length === 0) {
    console.log("No hay movimientos para mostrar.");
    return;
  }
  const cantMovimientos = movimientos.length;
  let saldoTotal = 0;
  movimientos.forEach((m) => {
    if (m.tipo === "INGRESO") {
      saldoTotal += m.monto;
    } else {
      saldoTotal -= m.monto;
    }
  });

  console.log("Resumen Final");
  console.log("-------------------------------------");
  console.log("Total de movimientos:", cantMovimientos);
  console.log("Saldo total:", saldoTotal.toFixed(2));
};

// Función para mostrar resumen por tipo
const mostrarResumenPorTipo = () => {
  if (movimientos.length === 0) {
    console.log("No hay movimientos para mostrar.");
    return;
  }
  let montoIngresos = 0;
  let montoEgresos = 0;
  movimientos.forEach((m) => {
    if (m.tipo === "INGRESO") {
      montoIngresos += m.monto;
    } else {
      montoEgresos += m.monto;
    }
  });
  console.log("Desglose por tipo:");
  console.log("- Egresos: $" + montoEgresos.toFixed(2));
  console.log("- Ingresos: $" + montoIngresos.toFixed(2));
};

// Ejecución del programa
registrarMovimiento();
mostrarResumen();
mostrarResumenPorTipo();
