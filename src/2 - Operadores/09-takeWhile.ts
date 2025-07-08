import { fromEvent, map, takeWhile } from "rxjs";

// takeWhile: Emite valores mientras una condición sea verdadera
// El operador `takeWhile` emite valores hasta que la condición especificada deja de cumplirse

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y < 150)  
    takeWhile(({ y }) => y < 150, true) // El segundo parámetro `true` incluye el último valor que cumple la condición
  )
  .subscribe({
    next: (event) => console.log("Click event:", event),
    complete: () => console.log("Completed!"),
  });
