import { fromEvent, map, merge } from "rxjs";

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
const click$ = fromEvent<KeyboardEvent>(document, "click");

merge(
  // Funcionamiento de merge: combina múltiples observables en uno solo 
  keyUp$.pipe(map((event) => event.type)),
  click$.pipe(map((event) => event.type))
).subscribe(console.log);
