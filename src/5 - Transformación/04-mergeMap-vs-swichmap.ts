import { fromEvent, interval, merge, mergeMap, switchMap } from "rxjs";
const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

//Diferencia entre mergeMap y switchMap
// mergeMap: mantiene todos los intervalos activos, emitiendo valores de todos ellos
// switchMap: cancela el intervalo anterior y comienza uno nuevo con cada clic

click$.pipe(
 /*  mergeMap(() => interval$), */
  switchMap(() => interval$)
).subscribe(console.log);
