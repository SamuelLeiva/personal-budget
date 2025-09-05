# Control de movimientos financieros

## Descripción

Este es un programa simple en JavaScript diseñado para llevar un registro de movimientos financieros: ingresos y egresos. Permite al usuario interactuar a través de la consola para ingresar, procesar y visualizar un resumen de sus transacciones.

---

## Funcionalidades

El código se compone de tres funciones principales que trabajan en conjunto para gestionar los movimientos:

- **registrarMovimiento()**  
  Esta función principal solicita al usuario los detalles de cada movimiento financiero, como el nombre, el tipo (ingreso o egreso) y el monto. Realiza validaciones en cada paso para asegurar que la información sea correcta.

- **mostrarResumen()**  
  Una vez que el usuario ha terminado de registrar movimientos, esta función calcula y muestra un resumen general.

  - Total de movimientos: Muestra la cantidad total de transacciones registradas.
  - Saldo total: Suma los ingresos y resta los egresos para dar un saldo final, formateado a dos decimales.

- **mostrarResumenPorTipo()**  
  Esta función proporciona un desglose más detallado del balance financiero.

  - Total de ingresos: Suma todos los montos de tipo "INGRESO".
  - Total de egresos: Suma todos los montos de tipo "EGRESO".
