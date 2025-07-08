//Útil para encapsular y gestionar el estado. Aplica un acumulador (o "función reductora") a cada valor de la fuente después de establecer un estado inicial, ya sea mediante un seedvalor (segundo argumento) o a partir del primer valor de la fuente.

import { from, map, reduce, scan } from "rxjs";

const numeros = [1, 2, 3, 4, 5];
const totalAcumulado = (acc, cur) => acc + cur;

// reduce: Aplica una función acumuladora y emite solo el resultado final
//Reduce
//suma de todos los números del array `numeros` utilizando `reduce` de RxJS. El resultado se imprime en la consola.
from(numeros).pipe(reduce(totalAcumulado, 0)).subscribe(console.log);

// scan: Similar a reduce, pero emite el valor acumulado en cada paso
//Scan
//suma de todos los números del array `numeros` utilizando `scan` de RxJS. El resultado se imprime en la consola.
// `scan` es similar a `reduce`, pero emite el valor acumulado en cada paso, no solo al final.
from(numeros).pipe(scan(totalAcumulado, 0)).subscribe(console.log);

//redux
//Un ejemplo de uso de `scan` para gestionar el estado de un usuario en una aplicación. Aquí, se define una interfaz `Usuario` y se crea un array de usuarios. Luego, se utiliza `scan` para acumular el estado del usuario a lo largo del tiempo, combinando los valores actuales con los anteriores.
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "fher", autenticado: false, token: null },
  { id: "fher", autenticado: true, token: "ABC" },
  { id: "fher", autenticado: true, token: "ABC" },
];

// from: Convierte un array en un Observable
// scan: Gestiona el estado acumulativo, ideal para patrones tipo Redux
const state$ = from(user).pipe(
  scan<Usuario, Usuario>((acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);

// map: Extrae una propiedad específica del estado
const id$ = state$.pipe(map(state => state.id));

state$.subscribe(console.log);
id$.subscribe(console.log);
