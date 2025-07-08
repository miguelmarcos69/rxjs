import { of } from "rxjs";

// of: Toma argumentos y los emite como una secuencia síncrona
const obs$ = of(...[1, 2, 3, 4, 5]);

/* const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve("Hola")
); */

console.log("Inicio");
obs$.subscribe({
  next: (next) => console.log("Next:", next),
  error: (error) => console.error("Error:", error),
  complete: () => console.log("Completed!"),
});

console.log("final");
