import { distinct, from, of, pipe } from "rxjs";

const numeros$ = of(1, 1, 7, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

// distinct() -> emite solo valores únicos -> ===
numeros$.pipe(distinct()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "Goku" },
  { nombre: "Vegeta" },
  { nombre: "Goku" },
  { nombre: "Goku" },
  { nombre: "Gohan" },
  { nombre: "Vegeta" },
];

from(personajes)
  .pipe(distinct((personaje) => personaje.nombre))
  .subscribe(console.log);
