import { concatMap, fromEvent, interval, take } from "rxjs";

const interval$ = interval(1000).pipe(take(3));
const click$ = fromEvent(document, "click");

//ConcatMap: espera a que se complete el observable anterior antes de pasar al siguiente
click$.pipe(concatMap(() => interval$)).subscribe(console.log);
