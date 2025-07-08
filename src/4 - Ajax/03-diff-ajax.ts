import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbin.orgd/delay/1";

/* const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url); */

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

const manejaError = (resp: AjaxError) => {
  console.warn("Error en la petición", resp.message);
  return of({
    ok: false,
    usuaios: [],
  });
};

obs$.pipe(catchError(manejaError)).subscribe(console.log);

obs$.subscribe({
  next: (resp) => console.log("Respuesta:", resp),
  error: manejaError,
  complete: () => console.log("Petición completada"),
});

obs2$.pipe(catchError(manejaError)).subscribe(console.log);

