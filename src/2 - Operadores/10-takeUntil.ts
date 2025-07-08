import { fromEvent, interval, takeUntil } from "rxjs";

const boton = document.createElement("button");
boton.innerText = "Detener Timer";
document.body.appendChild(boton);

const counter$ = interval(1000);

const click$ = fromEvent(boton, "click");

// takeUntil  detiene un observable cuando se emite un valor desde otro observable

counter$.pipe(takeUntil(click$)).subscribe({
  next: (valor) => console.log("Valor del contador:", valor),
  complete: () => console.log("Contador completado"),
});

click$.subscribe({
  next: () => {
    console.log("Botón presionado, deteniendo el contador");
    // Aquí podrías usar un operador takeUntil o similar para detener el contador
    // Por ejemplo, podrías usar un Subject para emitir un valor y completar el observable
  },
  error: (err) => console.error("Error al manejar el clic:", err),
});
