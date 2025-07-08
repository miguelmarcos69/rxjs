import { Observable, Observer } from "rxjs";

// Observer: Define las funciones de callback para manejar el flujo de datos
const observer: Observer<any> = {
  next: (value) => console.log("next", value),
  error: (error) => console.error("error:", error),
  complete: () => console.info("Completed"),
};

// Observable: Crea un flujo de datos con interval y cleanup function
const intervalo$ = new Observable<number>((subscriber) => {
  let num = 0;
  const interval = setInterval(() => {
    subscriber.next(num++);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  // Función de limpieza que se ejecuta al hacer unsubscribe
  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

/* const subscription = intervalo$.subscribe((num) => console.log(num)); */
// Múltiples suscripciones al mismo Observable
const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

// add: Agrupa suscripciones para poder cancelarlas todas juntas
subscription1.add(subscription2);
subscription1.add(subscription3);

setTimeout(() => {
  // unsubscribe: Cancela la suscripción y ejecuta la función de limpieza
  subscription1.unsubscribe();
  console.log("completado timeout");
}, 3000);
