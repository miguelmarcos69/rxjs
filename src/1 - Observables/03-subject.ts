import { Observable, Observer, Subject } from "rxjs";

// Observer: Define las funciones de callback
const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [next]", value),
  error: (error) => console.error("error [obs]:", error),
  complete: () => console.info("Completed! [obs]"),
};

// Observable: Crea un flujo de números aleatorios
const intervalo$ = new Observable<number>((subscriber) => {
  const intervalID = setInterval(() => subscriber.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destruido");
  };
});

/* 

//SE subscribe al observable
const subs1 = intervalo$.subscribe(rnd => console.log("Subs1:", rnd));
const subs2 = intervalo$.subscribe(rnd => console.log("Subs2:", rnd)); */

/* 
1- Casteo multiple 
2- Tambien es un observer
3- next, error, complete
// se subscribe todas al mimo observable, tienen misma respuesta
*/
// Subject: Permite multicast - múltiples suscriptores reciben los mismos valores
const subject = new Subject();
const subscription = intervalo$.subscribe(subject);
/* const subs1 = subject.subscribe((rnd) => console.log("Subs1:", rnd));
const subs2 = subject.subscribe((rnd) => console.log("Subs2:", rnd)); */
// Múltiples suscripciones al Subject comparten el mismo flujo de datos
const subs1 = subject.subscribe(observer);
const subs2 = subject.subscribe(observer);

setTimeout(() => {
  subject.next(10);
  subject.complete();
  subscription.unsubscribe();
  
  console.log("Completado subs");
}, 3500);
