import { Observable, Observer } from "rxjs";

/* Deprecateed
const obs$= Observable.create() */

// Observer: Define las funciones de callback para manejar next, error y complete
const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [next]",value),
  error: (error) => console.error("error [obs]:", error),
  complete: () => console.info("Completed! [obs]")
}



// Observable: Crea un flujo de datos que puede ser observado
const obs$ = new Observable<string>((subscriber) => {
  subscriber.next("Hello, RxJS!");
  subscriber.next("Hello, RxJS!");
  subscriber.next("Hello, RxJS!");
  subscriber.next("Hello, RxJS!");
  subscriber.next("Hello, RxJS!");
  // Simulación de error para demostrar el manejo de errores
  const a = undefined;
  a.nombre = "Hola";
  subscriber.complete();
});

/* obs$.subscribe({
  next: (resp) => console.log(resp),
  error: (error) => console.error("Error RXJS :", error),
  complete: () => console.log("Completed!")
});
 */



//Con observer
obs$.subscribe(observer);

