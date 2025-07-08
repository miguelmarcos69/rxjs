import { fromEvent, map, sampleTime } from "rxjs";

//sampletime es un operador que emite el último valor emitido por el observable fuente en intervalos de tiempo especificados.
const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    sampleTime(2000), // Emite un valor cada 2000ms (2 segundos)
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
