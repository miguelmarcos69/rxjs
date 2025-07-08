import { interval, timer } from "rxjs";

const observer = {
  next: (valor) => console.log("next:", valor),
  complete: () => console.log("Completado!"),
};

const hoyEn5= new Date();//hora actial
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5); //hora actual + 5 segundos

// interval: Emite números secuenciales en intervalos de tiempo regulares
const interval$ = interval(1000);
// timer: Emite un valor después de un tiempo específico o en una fecha específica
const timer$ = timer(hoyEn5);

console.log("inicio");
/* interval$.subscribe(observer); */

timer$.subscribe(observer);
console.log("fin");
