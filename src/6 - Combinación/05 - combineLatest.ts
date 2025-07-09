import { combineLatest, fromEvent, map, merge } from "rxjs";

/*  const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
 const click$ = fromEvent<PointerEvent>(document, "click");
 
 combineLatest(
   // Funcionamiento de merge: combina múltiples observables en uno solo 
   keyUp$.pipe(map((event) => event.code)),
   click$.pipe(map((event) => event.screenX))
 ).subscribe(console.log);
  */

const input1 = document.createElement("input");

const input2 = document.createElement("input");

input1.placeholder = "email@gmail.com";
input2.placeholder = "password";
input2.type = "password";
document.body.append(input1, input2);

//helper
const getInputStream = (input: HTMLInputElement) =>
  fromEvent<KeyboardEvent>(input, "keyup").pipe(
    map((event) => event.target["value"])
  );

combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(
  console.log
);
