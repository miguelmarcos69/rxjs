import { concat, interval, of, take } from "rxjs";

const interval$ = interval(1000);
concat(
  // funciona como un merge
  // concat espera un número variable de observables y los concatena en el orden en que se le pasan
  interval$.pipe(take(2)),
  interval$.pipe(take(4)),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // This is an array of numbers
  of(12)
).subscribe(console.log);
