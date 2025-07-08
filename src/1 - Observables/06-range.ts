import { asyncScheduler, of, range } from "rxjs";

/* const src$ = of(1, 2, 3, 4, 5); */
// range: Emite una secuencia de números en un rango específico (síncrono)
const src$ = range(1,5);


console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
