 import { concatMap, exhaustMap, fromEvent, interval, take } from "rxjs";
 
 const interval$ = interval(1000).pipe(take(3));
 const click$ = fromEvent(document, "click");
 
 //exhaustMap:  espera a que se complete el observable anterior antes de pasar al siguiente
 click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
 