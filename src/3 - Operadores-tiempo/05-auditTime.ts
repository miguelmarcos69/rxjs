import { auditTime, fromEvent, map, tap } from "rxjs";

//auditTime()
//El operador `auditTime` emite el último valor emitido por el observable fuente después de
// un período de tiempo especificado. Durante ese período, cualquier valor emitido por el observable

const click$ = fromEvent<MouseEvent>(document, "click");
click$
  .pipe(
    map(({ x }) => x),
    tap((val) => console.log("tap", val)),
    auditTime(2000)
  )
  .subscribe(console.log);
