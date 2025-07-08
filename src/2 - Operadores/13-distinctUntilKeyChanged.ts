import { distinctUntilChanged, distinctUntilKeyChanged, from } from "rxjs";

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
  .pipe(
    // distinctUntilKeyChanged emite el último valor si es diferente al anterior
    distinctUntilKeyChanged("nombre")
  )
  .subscribe(console.log);
