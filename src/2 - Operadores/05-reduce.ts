//Aplica una función acumuladora sobre el Observable de origen y devuelve el resultado acumulado cuando el Observable de origen se completa, dado un valor de semilla opcional.

import { interval, reduce, take, tap } from "rxjs";

const number = [1, 2, 3, 4, 5];

const totalReduce = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

const total = number.reduce(totalReduce, 0);
console.log("total", total); // 15

// interval: Emite números secuenciales en intervalos de tiempo específicos
interval(1000)
  .pipe(
    // take: Toma solo los primeros n valores emitidos, luego completa
    take(4), // Emite valores del 0 al 4 cada segundo
    // tap: Ejecuta efectos secundarios sin modificar el flujo de datos
    tap(console.log), // Imprime cada valor emitido
    // reduce: Aplica una función acumuladora y emite el resultado final cuando se completa
    reduce(totalReduce,0) // Aplica la función de reducción al Observable
  )
  .subscribe({
    next: (value) => console.log("Valor emitido:", value),
    complete: () => console.log("Completado!"),
  });
