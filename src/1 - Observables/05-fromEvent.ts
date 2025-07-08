import { from, fromEvent } from "rxjs";

/* Eventos del dom */
// fromEvent: Convierte eventos del DOM en Observables
const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (valor) => console.log("next", valor),
};

/* src1$.subscribe((evento) => {
  console.log("click", evento.y, evento.x);
});
src2$.subscribe((evento) => {
  console.log("keyup", evento.key);
}); */

// Destructuring: Extrae propiedades específicas del evento
src1$.subscribe(({ x, y }) => {
  console.log("click", y, x);
});
src2$.subscribe(({ key }) => {
  console.log("keyup", key);
});
