import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// 🟢 GET: Obtener datos del servidor
console.log("=== GET Request ===");
ajax
  .get(url)
  .pipe(
    catchError((error: AjaxError) => {
      console.log("Error en GET:", error);
      return of({ error: "Error en GET request" });
    })
  )
  /* .subscribe(console.log); */

// 🟡 POST: Enviar datos al servidor
console.log("=== POST Request ===");
ajax
  .post(
    url,
    {
      nombre: "Ana",
      email: "ana@email.com",
    },
    {
      "Content-Type": "application/json",
    }
  )
  .pipe(
    catchError((error: AjaxError) => {
      console.log("Error en POST:", error);
      return of({ error: "Error en POST request" });
    })
  )
  /* .subscribe(console.log); */

// 🔵 PUT: Actualizar datos (ejemplo original)
console.log("=== PUT Request ===");
ajax
  .put(
    url,
    {
      id: 1,
      nombre: "Juan",
    },
    {
      "mi-token": "123456",
    }
  )
  .pipe()
  /* .subscribe(console.log); */

// mas ejemplos
ajax({
  url: url,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    nombre: "Ana",
    email: "",
  },
}).subscribe(console.log);
