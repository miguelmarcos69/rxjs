import {
  asapScheduler,
  debounce,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  tap,
  throttleTime,
} from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(
  //throttleTime: Emite el primer valor y luego ignora los siguientes durante un tiempo
  throttleTime(3000)
);
/* .subscribe(console.log); */

const input = document.createElement("input");
document.body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$
  .pipe(
    // debounce: Espera un tiempo antes de emitir el último valor
    throttleTime(1000, asapScheduler, {
      leading: true, // Emite el primer valor inmediatamente
      trailing: true, // Emite el último valor después del tiempo
    }),
    map((event) => (event.target as HTMLInputElement).value),
    distinctUntilChanged()
  )
  .subscribe(console.log);
