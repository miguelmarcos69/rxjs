import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

//first
// El operador `first` emite el primer valor que cumple con la condición especificada

click$
  .pipe(
    /* tap((event) => console.log("Tap:", event)), */
    /*  map((event) => ({ clientX:event.clientX, clientY: event.clientY })), */
    // Destructuring: Extrae propiedades específicas del evento
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (event) => console.log("Click event:", event),
    complete: () => console.log("Completed!"),
  });
