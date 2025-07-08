import { debounce, debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';

const click$ = fromEvent(document, "click");

click$.pipe(debounceTime(1000));
/* .subscribe(console.log); */

const input = document.createElement("input");
document.body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$.pipe(
  // debounce: Espera un tiempo antes de emitir el último valor
  debounceTime(1000),
  map(event => (event.target as HTMLInputElement).value),
  distinctUntilChanged(),
).subscribe(console.log);
