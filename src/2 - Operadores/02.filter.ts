import { filter, from, fromEvent, map, range } from "rxjs";

// range: Crea un Observable que emite una secuencia de números en un rango específico
range(20, 30).pipe(
  // filter: Filtra los valores emitidos basándose en una condición (predicate function)
  filter((value, i) => {
    console.log("Valor:", value, "Indice:", i);
    return value % 2 === 1;
  })
);
/* .subscribe(console.log); */

const personajes = [
  { tipo: "Heroe", nombre: "Superman", edad: 30 },
  { tipo: "Heroe", nombre: "Batman", edad: 35 },
  { tipo: "Villano", nombre: "Lex Luthor", edad: 40 },
];

// from: Convierte un array, promise, iterable u observable en un Observable
/* from(personajes)
  // filter: Filtra elementos del array que cumplan con la condición especificada
  .pipe(filter((personajes) => personajes.tipo === "Heroe"))
  .subscribe(console.log); */

//Filter - Ejemplo con eventos del DOM

// fromEvent: Crea un Observable a partir de eventos del DOM
const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  // map: Transforma cada valor emitido aplicando una función de proyección
  map((event) => event.code),
  // filter: Filtra solo los eventos donde la tecla presionada sea "Enter"
  filter((key) => key === "Enter")
);

keyUp$.subscribe(console.log);
