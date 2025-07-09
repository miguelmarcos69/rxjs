import {
  fromEvent,
  interval,
  map,
  merge,
  mergeMap,
  of,
  take,
  takeUntil,
} from "rxjs";
const letras$ = of("a", "b", "c");

//mergeMap permite aplanar los observables internos, ejecutando un observable por cada valor emitido por el observable fuente.
// En este caso, cada letra se combina con un observable que emite números cada segundo,

letras$.pipe(
  mergeMap((letra) =>
    interval(1000).pipe(
      map((i) => letra + i),
      take(3)
    )
  )
);
/* .subscribe({
  next: (valor) => console.log("next:", valor),
  error: (err) => console.warn("error:", err),
  complete: () => console.info("complete"),
});
 */

const mouseDown$ = fromEvent(document, "mousedown");
const mouseup$ = fromEvent(document, "mouseup");
const interval$ = interval();

mouseDown$
  .pipe(
    mergeMap(
      () => interval$.pipe(takeUntil(mouseup$)) // Detiene el observable cuando se suelta el mouse
    )
  )
  .subscribe(console.log);
