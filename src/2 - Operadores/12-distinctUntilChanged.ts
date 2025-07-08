import { distinct, distinctUntilChanged, from, of, pipe } from "rxjs";

const numeros$ = of(1, "1",1, 7, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

 //distinctUntilChanged emite el último valor si es diferente al anterior
numeros$.pipe(
 
  distinctUntilChanged() 
).subscribe(console.log);

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
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
    
  )
  .subscribe(console.log);