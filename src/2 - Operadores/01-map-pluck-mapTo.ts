import { fromEvent, map, mapTo, pluck, range } from "rxjs";

// range: Crea un Observable que emite una secuencia de números en un rango específico
/* range(1, 5).pipe(
  // map: Transforma cada valor emitido aplicando una función de proyección
  map((valor)=> valor * 10),
).subscribe(console.log);
 */

// fromEvent: Crea un Observable a partir de eventos del DOM
const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
//Map 
//transforma el evento a un valor específico, en este caso la tecla presionada
//El operador `map` transforma cada evento de teclado en el valor de la tecla presionada.
keyUp$.pipe(map((value) => value.key)).subscribe(console.log);

// pluck: Extrae propiedades anidadas de un objeto emitido (DEPRECADO en RxJS 8)
//acceder al objeto baseURI dentro de target de KeyboardEvent
const keyUpCode$ = keyUp$.pipe(pluck("target", "baseURI"));

keyUpCode$.subscribe((event) => console.log("pluck:", event));

// mapTo: Transforma cada valor emitido a un valor constante específico
//MapTo transforma el evento a un valor fijo
//El operador `mapTo` transforma cada evento de teclado en un valor fijo, en este caso "Tecla presionada".
const keyUpMapTo$ = keyUp$.pipe(mapTo("Tecla presionada"));
keyUpMapTo$.subscribe((event) => console.log("mapTo:", event));
 ;