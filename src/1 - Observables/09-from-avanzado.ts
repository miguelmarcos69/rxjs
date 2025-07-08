import { of, from } from "rxjs";

//Crea un Observable que emite eventos de un tipo específico provenientes del objetivo del evento indicado.

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
  next: (value) => console.log("Siguiente [next]", value),
  complete: () => console.info("Completado [complete]"),
};

/* const source$ = from([1, 2, 3, 4, 5]); */
// of: Emite los argumentos como valores individuales
const source2$ = of([1, 2, 3, 4, 5]);

/* const source$ = from("miguel"); */
// from: Convierte una Promise en Observable
const source$ = from(fetch("https://api.github.com/users/klerith"));

/* source$.subscribe(async (resp) => {
  console.log("Respuesta:", resp);
  const dataResp = await resp.json();
  console.log("Data:", dataResp);
  
}); */

//Funcion generadora:https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
// Generator function: Función que puede pausar y reanudar su ejecución
const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();
// from: Convierte un iterable (generator) en Observable
from(miIterable).subscribe(observer);
