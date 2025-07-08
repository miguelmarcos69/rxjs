import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement("button");
boton.innerText = "Detener Timer";
document.body.appendChild(boton);

const counter$ = interval(1000);

/* const click$ = fromEvent(boton, "click"); */
const click$ = fromEvent(boton, "click").pipe(
  tap(() => console.log("tap antes de skip")),
  skip(1), // Ignora tantos observables como se le indique
  tap(() => console.log("tap después de skip"))
);

// takeUntil ->  detiene un observable cuando se emite un valor desde otro observable

counter$.pipe(takeUntil(click$)).subscribe({
  next: (valor) => console.log("Valor del contador:", valor),
  complete: () => console.log("Contador completado"),
});
