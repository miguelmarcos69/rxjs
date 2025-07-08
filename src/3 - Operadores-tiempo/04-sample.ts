import { from, fromEvent, interval, sample } from "rxjs";

const interval$ = interval(5000);
const click$ = fromEvent<MouseEvent>(document, "click");

//sample(interval$)
//explicacion de funcionamiento de sample
// La función `sample` toma un observable de origen (en este caso, `interval$`) y emite el último valor emitido por este observable cada vez que se emite un valor desde el observable de muestreo (en este caso, `click$`).
// En este ejemplo, `interval$` emite un valor cada 5 segundos, y cada vez que se hace clic en el documento, se emite el último valor emitido por `interval$`.
interval$.pipe(sample(click$)).subscribe(console.log);
