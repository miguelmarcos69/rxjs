import { delay, forkJoin, interval, of, take } from "rxjs";

const numerod$ = of(1, 2, 3, 4, 5);
const interval$ = interval(1000).pipe(take(5));
const letras$ = of("a", "b", "c", "d", "e").pipe(delay(3500));

//forkJoin(numerod$, interval$, letras$).subscribe(console.log);
forkJoin({ num: numerod$, inter: interval$, let: letras$ }).subscribe(
  (resp) => {
    console.log("numerod$ ", resp);
    console.log("numerod$ ", resp.num);
    console.log("interval$ ", resp.inter);
    console.log("letras$ ", resp.let);
  }
);
