import { asyncScheduler } from "rxjs";

/* setTimeout(() => {}, 1000);
setInterval(() => {}, 1000); */

const saludar = () => console.log("Hola desde setTimeout");
const saludar2 = (nombre) => console.log("Hola desde setTimeout", nombre);

//TimeOut
/* asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, "Juan"); */

// asyncScheduler: Programa tareas para ejecutar de forma asíncrona
const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);
    // this.schedule: Permite reprogramar la misma función recursivamente
    this.schedule(state + 1, 100);
  }, 3000, 0);

/*   setTimeout(() => {
    subs.unsubscribe();
    console.log("Unsubscribe");
  }, 6000); */

// Programar la cancelación de la suscripción
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);


  asyncScheduler.schedule(() => {subs.unsubscribe(),6000;})