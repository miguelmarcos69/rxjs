import { endWith, of, startWith } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5).pipe(
  startWith(0), // Emitir 0 antes de los números
  endWith(13), // Emitir 13 después de los números
);

numeros$.subscribe(console.log);
